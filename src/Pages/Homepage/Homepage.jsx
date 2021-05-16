import React from "react";
import Directory from "../../Components/Directory/Directory";
import "./homepage.scss";
import { HomePageContainer } from "./Homepage.styles";

const Homepage = (props) => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
