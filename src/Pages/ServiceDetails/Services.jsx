import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ServiceDetailsCard from "./ServiceDetailsCard";

const Services = () => {
  const [service, setService] = useState({});

  const { id } = useParams();
  const idInt = parseInt(id);

  const services = useLoaderData();

  useEffect(() => {
    const findService = services?.find((service) => service.id === idInt);
    setService(findService);
  }, [idInt, services]);
  return (
    <div>
        <ServiceDetailsCard service={service}></ServiceDetailsCard>
    </div>
  );
};

export default Services;
