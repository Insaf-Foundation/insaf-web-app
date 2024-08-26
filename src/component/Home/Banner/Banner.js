import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Slider from "./Slider/Slider";

const Banner = () => {
  return (
    <div className="mx-auto container grid lg:grid-cols-2 grid-cols-1  lg:pt-0 pt-5 ">
      <div>
        <div className="card  text-left  ">
          <div className="card-body">
            <h2 className="card-title lg:text-5xl text-4xl font-bold text-black">
              {" "}
              ইনসাফ ফাউন্ডেশন একটি অলাভজনক দাতব্য সংস্থা।{" "}
            </h2>
            <h3 className=" lg:text-5xl text-3xl font-extrabold pt-2  text-transparent  bg-clip-text bg-gradient-to-r from-green-400 to-green-800">
              <TypeAnimation
                sequence={[
                  "কারিগরি শিক্ষা ",
                  1000,
                  "বন্যার্তদের মধ্যে ত্রাণ বিতরণ ",
                  1000,
                  "সাদাকাহ জারিয়াহ",
                  1000,
                  "এতিমদের লালন-পালন ও শিক্ষাদান",
                  1000,
                  "শীতবস্ত্র বিতরণ ",
                  1000,
                  "বৃক্ষরোপণ কর্মসূচি ",
                  1000,
                  "ইফতার ও রমাদান ফুড বিতরণ ",
                  1000,
                  "বই-পুস্তক লিফলেট বিতরণ ",
                  1000,
                  // 'Vector Services ',
                  // 1000,
                  // 'Multi Clipping Path ',
                  // 2000,
                  () => {
                    // console.log('Done typing!'); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "5xl" }}
              ></TypeAnimation>
            </h3>

            <p>
              সেবা, সমাজ সংস্কার, মহত্তম নীতিচেতনার সঞ্চার, কর্মসংস্থান তৈরি,
              দারিদ্র্য বিমোচন, ইসলামী তমদ্দুনের প্রসার, বহুমুখী শিক্ষায়ন
              প্রকল্প পরিচালনা, ত্রাণ বিতরণ, স্বল্পমূল্যে বা বিনামূল্যে
              স্বাস্থ্যসেবা প্রদান
            </p>

            <div className="card-actions ">
              <Link
                to="/pricing"
                className="btn rounded-none  bg-green-600  border-green-600 hover:border-2 hover:bg-white  hover:text-green-600  hover:border-green-600 shadow-lg"
              >
                DONATE
              </Link>

              <Link
                to="/contactus"
                className="btn rounded-none  bg-white text-green-600 border-green-600 border-2 hover:bg-green-600  hover:text-white hover:border-none"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* slider */}

      <div className="px-5 lg:px-none h-96">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Banner;
