import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
import { PrimaryBtn } from "../globals/Button";

const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting="welcome to"
        title="beackwalk resort"
        text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum."
      >
        {" "}
        <PrimaryBtn t="1rem">view details</PrimaryBtn>
        {/* <PrimaryBtn as="a" href="https://www.google.com" >view details</PrimaryBtn> */}
      </Banner>
    </Hero>
  );
};

export default Header;
