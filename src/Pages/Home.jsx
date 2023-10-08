// import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
// import ServiceCard from "./ServiceCard";
import ChooseUs from "../Components/ChooseUs";
import ServicesAll from "./ServicesAll";

const Home = () => {
    // const services = useLoaderData();
    // console.log(services);
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <ServicesAll></ServicesAll>
            <ChooseUs></ChooseUs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;