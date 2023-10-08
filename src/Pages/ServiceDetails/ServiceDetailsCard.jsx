import swal from "sweetalert";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";

const ServiceDetailsCard = ({ service }) => {
    console.log(service);
  const { title, img, price, details } = service || {};
  const handleSubmit = () =>{
    swal("Thank You, Reserved successfully!", "We will contact with you soon.");
  }
  return (
    <div>
        <Navbar></Navbar>
        {/* card details */}
        <div className="card lg:card-side bg-base-100 shadow-xl my-10 text-white">
      <figure>
        <img
          src={img}
          alt="Album"
          className="rounded-lg h-72"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-4xl mb-3">{title}</h2>
        <p className='text-xl font-medium'>{details}</p>
        <p>$ {price}</p>
        <div className="card-actions">
          <button className="btn btn-primary"
          onClick={handleSubmit}>Reserve Plan</button>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ServiceDetailsCard;
