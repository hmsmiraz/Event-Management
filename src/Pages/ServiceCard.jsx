const ServiceCard = ({ services }) => {
  const { title, img, price } = services;

  return (
    <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl h-52" />
  </figure>
  <div className="card-body items-center text-center text-white">
    <h2 className="card-title">{title}</h2>
    <p>$ {price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">View Plans</button>
    </div>
  </div>
</div>
  );
};

export default ServiceCard;
