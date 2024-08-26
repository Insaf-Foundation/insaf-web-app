import React, { useContext } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AuthContext } from "../../component/providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext); // Assuming you have an authentication context

  return (
    <div className="pt-40 pb-40 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 ">
          <div className="flex items-center justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-600">
              {user?.photoURL ? (
                <img
                  alt="User Profile"
                  src={user.photoURL}
                  className="w-full h-full rounded-full"
                />
              ) : (
                <span className="text-4xl text-green-600">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              )}
            </div>
          </div>
          <div className="text-center mt-4">
            {user && <h2 className="text-xl font-bold">{user?.displayName}</h2>}
            {user && <p className="text-gray-600">{user?.email}</p>}
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4 bg-green-600 text-center text-white">
            Services
          </h2>
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2 bg-gradient-to-r from-green-600 to-green-400 text-white">
                  No
                </th>
                <th className="py-2 bg-gradient-to-r from-green-600 to-green-400 text-white">
                  Service Name
                </th>
                <th className="py-2 bg-gradient-to-r from-green-600 to-green-400 text-white">
                  Quantity
                </th>
                <th className="py-2 bg-gradient-to-r from-green-600 to-green-400 text-white">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">01</td>
                <td className="py-2">বন্য তহবিল</td>
                <td className="py-2">500</td>
                <td className="py-2">৳256</td>
              </tr>

              <tr>
                <td className="py-2">02</td>
                <td className="py-2">ত্রান তহবিল</td>
                <td className="py-2">500</td>
                <td className="py-2">৳256</td>
              </tr>

              <tr>
                <td className="py-2">03</td>
                <td className="py-2">এতিমদের তহবিল</td>
                <td className="py-2">500</td>
                <td className="py-2">৳256</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;
