import { MdImportantDevices, MdBuild, MdFavorite } from "react-icons/md";

const ChooseUs = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-lg text-white mt-8 mx-2">
        {/* 1st */}
        <div className="card ">
          <div className="flex items-center justify-center">
            <MdImportantDevices className="text-5xl"></MdImportantDevices>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Experience and Expertise</h2>
            <p>
              Our team of seasoned event planners has over a decade of
              experience in crafting unforgettable social gatherings. From
              weddings to birthdays, we have seen it all and know how to make
              your event shine.
            </p>
          </div>
        </div>

        {/* 2nd */}

        <div className="card">
          <div className="flex items-center justify-center">
            <MdBuild className="text-5xl"></MdBuild>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Customization</h2>
            <p>
              We understand that every event is unique. That is why we work
              closely with you to tailor every aspect of your event to your
              vision. From theme selection to menu planning, it is all about
              you.
            </p>
          </div>
        </div>

        {/* 3rd */}

        <div className="card">
          <div className="flex items-center justify-center">
            <MdFavorite className="text-5xl"></MdFavorite>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Creative Design</h2>
            <p>
              Our creative designers are experts in turning your ideas into
              stunning realities. We will help you create a visually captivating
              event that reflects your style and personality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
