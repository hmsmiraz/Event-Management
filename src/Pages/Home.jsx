import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import ServiceCard from "./ServiceCard";
import ChooseUs from "../Components/ChooseUs";

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="my-10">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Our Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-2">
                    {
                        services.map(service => <ServiceCard 
                        key={service.id}
                        services={service}
                        ></ServiceCard> )
                    }
                </div>
            </div>
            <ChooseUs></ChooseUs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;