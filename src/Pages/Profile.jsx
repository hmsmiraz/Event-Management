import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../Providers/AuthProviders";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Navbar></Navbar>
      <div className="my-10">
        <div>
          <h2 className="text-center my-8 font-bold text-4xl text-cyan-200 ">
            Your Profile Details
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative flex md:w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
              <img
                src={
                  user ? (
                      <div className="rounded-full">
                        <img src={user.photoURL} alt="" />
                      </div>
                  ) : (
                    ""
                  )
                }
                alt="profile-picture"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="mb-2 block font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {user ? (
                  <p className="font-light text-xl text-center">
                    {user.displayName}
                  </p>
                ) : (
                  ""
                )}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
