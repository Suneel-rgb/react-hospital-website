import React from "react";
import Header from "../components/Header";
import SpecialityMemu from "../components/SpecialityMemu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMemu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
