import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;