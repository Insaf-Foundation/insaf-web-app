import React from "react";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import { Link } from "react-router-dom";

const WatchNow = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 mt-20 ">
        <div className="card lg:card-side  shadow-xl  ">
          <div className="card-body">
            <h2 className="card-title text-4xl font-bold text-green-600">
              Know Insaf Foundation
            </h2>
            <p>
              শিক্ষায়ন প্রকল্প পরিচালনা, ত্রাণ বিতরণ, স্বল্পমূল্যে বা বিনামূল্যে
              স্বাস্থ্যসেবা প্রদান
            </p>
            <div className="card-actions justify-end ">
              <Link
                to="/aboutus"
                className="btn border-2 border-green-600 hover:border-green-600 bg-green-600 hover:bg-white text-white hover:text-green-600"
              >
                Read More
              </Link>
            </div>
          </div>

          <VideoPlayer></VideoPlayer>
        </div>
      </div>
    </div>
  );
};

export default WatchNow;
