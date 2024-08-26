import React from "react";
import Banner from "./Banner/Banner";
import useTitle from "../../hooks/useTitle";
import WatchNow from "./WatchNow/WatchNow";
// import LatestBlog from "./LatestBlog/LatestBlog";
import Subscribe from "./Subscribe/Subscribe";

import ServiceCard from "./ServiceCard/ServiceCard";
const Home = () => {
  useTitle("Home");
  return (
    <div className="lg:pt-40 pt-10 text-center  ">
      <Banner></Banner>

      <ServiceCard></ServiceCard>

      <WatchNow></WatchNow>
      {/* <LatestBlog></LatestBlog> */}
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
