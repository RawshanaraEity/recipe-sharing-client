import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {


    return (
      <div>
          <footer className="footer grid-cols-2 md:grid-cols-3 px-10 py-5 bg-black text-white">
        <nav>
          <header className="footer-title">Services</header> 
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav> 
        <nav>
          <header className="footer-title">Company</header> 
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav> 
        <nav>
          <header className="footer-title">Legal</header> 
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <hr></hr>
        <footer className="bg-black py-6">
            <div className="container mx-auto text-center">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
                    <div className="flex justify-center space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-400 transition-colors duration-300">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-400 transition-colors duration-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-400 transition-colors duration-300">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-rose-600 hover:text-rose-400 transition-colors duration-300">
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
                </div>
                <div className="text-gray-400">
                    <p>&copy; 2024 Your Food Network Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
      </div>
    );
};

export default Footer;
