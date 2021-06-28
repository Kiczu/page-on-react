import React from "react";
import Navigation from "./Navigation/Navigation";
import Hero from "./Hero/Hero";
import ThreeColumns from "./ThreeColumns/ThreeColumns";
import FourBasicMoves from "./FourBasicMoves/FourBasicMoves";
import AboutUs from "./AboutUs/AboutUs";
import WhoWeHelp from "./WhoWeHelp/WhoWeHelp";
import Contact from "./Contact/Contact";

const Home = () => {
        return(
            <>
                <Navigation />
                <Hero />
                <ThreeColumns />
                <FourBasicMoves />
                <AboutUs />
                <WhoWeHelp />
                <Contact />
            </>
        )
    }
export default Home;