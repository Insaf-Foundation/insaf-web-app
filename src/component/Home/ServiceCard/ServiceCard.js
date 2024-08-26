import React from "react";
import flood from "../../../assets/images/flood.jpg";
import { Link } from "react-router-dom";
import plant from "../../../assets/images/planet.jpg";
import zakat from "../../../assets/images/zajat.jpg";
import month from "../../../assets/images/month.jpg";
const ServiceCard = () => {
  return (
    <div className="container mx-auto ">
      <h3 className="text-4xl font-bold text-green-600 pt-10">
        আমাদের তহবিল সমূহ{" "}
      </h3>
      <div className="grid grid-cols-2">
        <div className="card ml-5 mt-10 bg-base-100 shadow-xl">
          <figure className=" ">
            <img src={zakat} alt="Zakat" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-bold text-green-600">
              যাকাত তহবিল
            </h2>
            <p>
              যাকাত একদিকে যেমন ইসলামের অন্যতম মৌলিক স্তম্ভ, তেমনই এটি একটি
              মানবিক ইবাদত। যাকাত অর্থনৈতিক বৈষম্য দূর করতে সব থেকে বড় ভূমিকা
              পালন করে। আপনার প্রদানকৃত যাকাতের মাধ্যমে সচল হতে পারে একটি অচল
              সংসারের চাকা।
            </p>
            <div className="card-actions">
              <Link
                to="/pricing "
                className="btn border-green-600 hover:border-green-600 hover:bg-white border-2 hover:text-green-600 bg-green-600"
              >
                DONATE
              </Link>
            </div>
          </div>
        </div>

        <div className="card ml-5 mt-10 bg-base-100 shadow-xl">
          <figure className=" ">
            <img src={month} alt="Month" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-bold text-green-600">
              মাসিক অনুদান তহবিল
            </h2>
            <p>
              ইনসাফ ফাউন্ডেশনের মাসিক অনুদান তহবিলে নিয়মিত দান করার মাধ্যমে আপনি
              ফাউন্ডেশনের সকল কল্যাণমুখী কাজের অংশদার হতে পারেন। কারণ এই তহবিল
              থেকে
            </p>
            <div className="card-actions">
              <Link
                to="/pricing"
                className="btn border-green-600 hover:border-green-600 hover:bg-white border-2 hover:text-green-600 bg-green-600"
              >
                DONATE
              </Link>
            </div>
          </div>
        </div>
        <div className="card ml-5 mt-10 bg-base-100 shadow-xl">
          <figure className=" ">
            <img src={flood} alt="Shoes" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-bold text-green-600">
              জরুরী বন্যা তহবিল
            </h2>
            <p>
              প্রতিবছর বর্ষাকালে বাংলাদেশের প্রায় ২৬,০০০ বর্গ কিলোমিটার এলাকা
              (১৮%) বন্যায় প্লাবিত হয়। এ সময় বিশেষ ভাবে দেশের উত্তর অঞ্চলের
              বানভাসি মানুষ চরম দুর্ভোগের শিকার হয়। ইনসাফ ফাউন্ডেশন দেশের
              বন্যাকবলিত জেলাগুলিতে প্রতিবছরই ত্রাণ কার্যক্রম ও
              দুর্দশাগ্রস্ত-অসহায় মানুষের পাশে দাঁড়ানোর উদ্যোগ নিয়ে থাকে।
            </p>
            <div className="card-actions">
              <Link
                to="/pricing"
                className="btn border-green-600 hover:border-green-600 hover:bg-white border-2 hover:text-green-600 bg-green-600"
              >
                DONATE
              </Link>
            </div>
          </div>
        </div>

        <div className="card ml-5 mt-10 bg-base-100 shadow-xl">
          <figure className=" ">
            <img src={plant} alt="Plant" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-bold text-green-600">
              বৃক্ষরোপণ তহবিল
            </h2>
            <p>
              বিভিন্ন হাদীস দ্বারা প্রমাণিত, গাছ লাগানো সাদাকায়ে জারিয়া। যতদিন
              পর্যন্ত রোপনকৃত গাছটি জীবিত থাকবে ততদিন যত প্রাণী, পশুপাখি ও মানুষ
              সে গাছ থেকে ফুল, ফল ও ছায়া অর্থাৎ যেকোনো উপকার পাবে, তা রোপণকারীর
              আমলনামায় সদকায়ে জারিয়া হিসেবে লেখা হবে। রোপণকারী ব্যক্তি যদি মারাও
              যান, তাহলে তাঁর আমলনামায় এ সওয়াব পৌঁছাতে থাকবে।
            </p>
            <div className="card-actions">
              <Link
                to="/pricing"
                className="btn border-green-600 hover:border-green-600 hover:bg-white border-2 hover:text-green-600 bg-green-600"
              >
                DONATE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
