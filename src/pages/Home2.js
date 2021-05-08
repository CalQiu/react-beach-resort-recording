import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services2 from "../components/Services2";
import FeaturedRooms2 from "../components/FeaturedRooms2";
import StyledHero2 from "../components/StyledHero2";
 const Home2 = () => {
    return  (
      <>
    <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms2" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services2 />
      <FeaturedRooms2 />
      <StyledHero2 /> 
      </>
      ) ;
}

export default Home2;