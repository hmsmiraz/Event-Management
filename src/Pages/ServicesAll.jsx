import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const ServicesAll = () => {
    const services = useLoaderData();
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    return (
        <div className="my-10">
        <div className="text-center">
            <h2 className="text-3xl font-bold">Our Services</h2>
        </div>
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-2">
            {
                services?.map(service => <ServiceCard 
                key={service.id}
                services={service}
                ></ServiceCard> )
            }
        </div>
    </div>
    );
};
export default ServicesAll;