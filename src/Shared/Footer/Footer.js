import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/CPH.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src={logo} alt="INSAF FOUNDATION" />
          <p>INSAF FOUNDATION </p>
          <p>
            ইনসাফ ফাউন্ডেশন হলো বাংলাদেশ-ভিত্তিক <br></br> একটি অরাজনৈতিক ও
            অলাভজনক দাতব্য সংস্থা। <br></br> এটি শিক্ষা, দাওয়াহ এবং মানবকল্যাণসহ
            বিভিন্ন সামাজিক <br></br> সেবামূলক কার্যক্রম পরিচালনা করে থাকে।
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover" to="/raisingeducating">
            এতিমদের লালন-পালন ও শিক্ষাদান
          </Link>
          <Link className="link link-hover" to="/reliefdistribution">
            বন্যার্তদের মধ্যে ত্রাণ বিতরণ
          </Link>
          <Link className="link link-hover" to="/sadaqahjariyah">
            সাদাকাহ জারিয়াহ
          </Link>
          <Link className="link link-hover" to="/technicaleducation">
            কারিগরি শিক্ষা
          </Link>
          <Link className="link link-hover" to="/plantationprogram">
            বৃক্ষরোপণ কর্মসূচি
          </Link>
          <Link className="link link-hover" to="/iftarramadanfood">
            ইফতার ও রমাদান ফুড বিতরণ
          </Link>
          <Link className="link link-hover" to="/distributionwinterclothes">
            শীতবস্ত্র বিতরণ
          </Link>
          <Link className="link link-hover" to="/distributionbooks">
            বই-পুস্তক লিফলেট বিতরণ
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/aboutus" className="link link-hover">
            About us
          </Link>
          <Link to="/contactus" className="link link-hover">
            Contact Us
          </Link>
        </div>

        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link to="https://www.facebook.com/clippingpathhero/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/termsofcondition" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/privacypolicy" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/cookiepolicy" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>

      <footer className="footer items-center p-4 bg-slate-600 text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>
            {" "}
            Copyright © {currentYear} - All right reserved{" "}
            <span className="font-bold">Insaf Foundation</span>{" "}
          </p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          Developed By
          <Link to="https://www.tantsoft.com/" className="font-bold link">
            Tantsoft
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
