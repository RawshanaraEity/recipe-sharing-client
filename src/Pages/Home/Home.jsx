import SuccessStories from "../../components/SuccessStories";
import Footer from "../../shared/Footer";
import Banner from "./Banner";
import Users from "./Users";
import DevInfo from "./DevInfo";



const Home = () => {
    return (
        <div>
            <Banner/>
            <SuccessStories/>
           
            <DevInfo/>
            <Users/>
            <Footer/>
        </div>
    );
};

export default Home;