import {
  faBarChart,
  faChartBar,
  faEnvelope,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useTitle from "../../hooks/useTitle";

const ContactUs = () => {
  useTitle("Contact Us");

  return (
    <div className="mt-20 container mx-auto ">
      {/* Use Google Font */}

      <div className="lg:pt-20 pt-10 pb-20 grid grid-cols-1">
        <h2 className="text-4xl lg:pb-20 pb-10 font-bold text-green-600 text-center">
          Keep in Touch
        </h2>
        <div
          className="card lg:card-side grid lg:grid-cols-2 grid-cols-1 gap-8 "
          data-aos="flip-right"
        >
          <div className="lg:ml-40 px-10 col-span-1">
            <p className="text-1xl text-slate-400 pt-3">
              ইনসাফ ফাউন্ডেশন হলো বাংলাদেশ-ভিত্তিক একটি অরাজনৈতিক ও অলাভজনক
              দাতব্য সংস্থা। এটি শিক্ষা, দাওয়াহ এবং মানবকল্যাণসহ বিভিন্ন সামাজিক
              সেবামূলক কার্যক্রম পরিচালনা করে থাকে।
            </p>

            {/* <h5 className="pt-5 text-2xl font-bold text-green-600">
              <span></span> Visit Us :
            </h5> */}

            <h5 className="text-2xl font-bold text-green-600">
              <span> </span> Drop Us :
            </h5>
            <p className="pl-5 text-1xl">info@insaffoundation.org</p>

            <h5 className="text-2xl font-bold text-green-600">
              <span> </span> Call Us :
            </h5>
            <p className="pl-5 text-1xl">Call: +88 01780299384</p>
          </div>

          <div className="card-body lg:ml-20 col-span-1 " data-aos="flip-left">
            <div>
              <div className="form-control ">
                <form>
                  <label className="input-group ">
                    <span className="text-green-600">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Type Your Name"
                      className="input input-bordered w-full"
                    />
                  </label>

                  <label className="input-group pt-3 ">
                    <span className="text-green-600">
                      {" "}
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Type Your Email"
                      className="input input-bordered w-full"
                    />
                  </label>
                  <label className="input-group pt-3">
                    <span className="text-green-600">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <input
                      type="phone"
                      name="phone"
                      placeholder="Type Your Phone Number"
                      className="input input-bordered w-full"
                    />
                  </label>

                  <label className="input-group pt-3 ">
                    <span className="text-green-600">
                      <FontAwesomeIcon icon={faBarChart} />
                    </span>
                    <select
                      name="service"
                      id="pet-select"
                      className="w-full p-5"
                    >
                      <option
                        value=""
                        className="text-1xl font-bold text-green-600"
                      >
                        Please Choose a Service
                      </option>
                      <option
                        value="Clipping Path"
                        className="text-1xl font-bold text-green-600"
                      >
                        কারিগরি শিক্ষা
                      </option>
                      <option
                        value="Background Removal"
                        className="text-1xl font-bold text-green-600"
                      >
                        বন্যার্তদের মধ্যে ত্রাণ বিতরণ
                      </option>
                      <option
                        value="Image Masking"
                        className="text-1xl font-bold text-green-600"
                      >
                        এতিমদের লালন-পালন ও শিক্ষাদান
                      </option>
                      <option
                        value="Shadow"
                        className="text-1xl font-bold text-green-600"
                      >
                        সাদাকাহ জারিয়াহ
                      </option>
                      <option
                        value="Ghost Mannequin"
                        className="text-1xl font-bold text-green-600"
                      >
                        শীতবস্ত্র বিতরণ
                      </option>
                      <option
                        value="Photo Retouching"
                        className="text-1xl font-bold text-green-600"
                      >
                        বৃক্ষরোপণ কর্মসূচি
                      </option>
                      <option
                        value="Color Changes"
                        className="text-1xl font-bold text-green-600"
                      >
                        ইফতার ও রমাদান ফুড বিতরণ
                      </option>
                      <option
                        value="Vector Services"
                        className="text-1xl font-bold text-green-600"
                      >
                        বই-পুস্তক লিফলেট বিতরণ
                      </option>
                      {/* <option
                        value="Multi Clipping Path"
                        className="text-1xl font-bold text-green-600"
                      >
                        Multi Clipping Path
                      </option> */}
                    </select>
                  </label>

                  <label className="input-group pt-3 ">
                    <span className="text-green-600">
                      <FontAwesomeIcon icon={faChartBar} />
                    </span>

                    <textarea
                      className="w-full "
                      placeholder="Type Your Message"
                      name="message"
                    ></textarea>
                  </label>

                  <button
                    className="btn rounded mt-5 w-40 bg-green-600  border-green-600 hover:border-2 hover:bg-white  hover:text-green-600  hover:border-green-600 shadow-lg"
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
