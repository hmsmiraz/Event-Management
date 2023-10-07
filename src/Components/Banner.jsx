import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/vjjrcxc/banner.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-6xl font-extrabold">Event Sphere</h1>
          <p className="mb-5">
            Your one-stop solution for effortless social event
            management. Plan, organize, and celebrate your events with ease.
            Join us and make every moment memorable!
          </p>
          <Link to="/contact">
          <button className="btn btn-primary">Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
