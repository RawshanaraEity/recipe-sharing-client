
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate, useSearchParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";



const CheckoutForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const coins = parseInt(searchParams.get("coins"));
  const price = parseInt(searchParams.get("price"));
  console.log(coins,price);

  useEffect(() => {
    if (price > 0) {
      axiosPublic.post('/create-payment-intent', { price })
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosPublic, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    });
    if (error) {
      console.log('Error:', error);
      setError(error.message);
      return;
    } else {
      console.log('Payment Method:', paymentMethod);
      setError('');
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous'
        }
      }
    });

    if (confirmError) {
      console.log('Confirm Error:', confirmError);
      setError(confirmError.message);
      return;
    }

    if (paymentIntent.status === 'succeeded') {
      console.log('Payment Intent:', paymentIntent);
      setTransactionId(paymentIntent.id);


      //  Update user coins
      const userInfo = {
        email: user?.email,
        name: user?.displayName,
        coin: coins
      };

      axiosPublic.patch('/users', userInfo)
        .then(response => {
          console.log('User coins updated:', response.data);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank you for your payment",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/recipes');
        })
        .catch(error => {
          console.error('Error updating coins:', error);
          setError("Failed to update coins. Please contact support.");
        });
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className="btn btn-sm btn-primary my-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay ${price} for {coins} Coins
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && <p className="text-green-600">Your Transaction ID: {transactionId} </p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
