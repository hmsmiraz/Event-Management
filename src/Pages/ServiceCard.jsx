import { Link } from "react-router-dom";

const ServiceCard = ({ services }) => {
  const { id, title, img, price } = services;

  return (
    <div className="card bg-base-100 shadow-xl my-10">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl h-52" />
      </figure>
      <div className="card-body items-center text-center text-white">
        <h2 className="card-title">{title}</h2>
        <p>$ {price}</p>
        <div className="card-actions">
          <Link to={`/services/${id}`}>
            <button className="btn btn-primary">View Plans</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
