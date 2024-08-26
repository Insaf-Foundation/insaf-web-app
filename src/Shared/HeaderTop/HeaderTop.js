import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-400">
      <div className="container mx-auto text-center flex text-white ">
        <h2 className="    text-1xl">
          {" "}
          <FontAwesomeIcon icon={faPhone} />
          +8801780-299384{" "}
        </h2>
        <h2 className="lg:pl-3 pl-1 font-bold">
          {" "}
          <FontAwesomeIcon icon={faEnvelope} /> info@insaffoundation.com
        </h2>

        {/* <Link
          className="link lg:opacity-100 opacity-0"
          to="https://join.skype.com/invite/u4HLwiSdweyW"
        >
          <h5 className=" pl-2 pr-2 text-1xl font-bold">Skype</h5>
        </Link> */}

        <Link
          className="link lg:opacity-100 opacity-0"
          to="https://wa.me/+8801780299384"
        >
          <h5 className=" pl-2 text-1xl font-bold">Whatsapp</h5>
        </Link>
      </div>
    </div>
  );
};

export default HeaderTop;
