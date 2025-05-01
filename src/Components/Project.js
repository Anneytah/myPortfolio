import React from "react";
import Card from "./Card.jsx";
import Portfolio from "../Image/Portfolio.png";
import Weather from "../Image/Weather.png";
import Space from "../Image/Space.png"
import Dictionary from "../Image/Dictionary.png";
import Progfams from "../Image/Progfams.png"
// import Stoman from "../Image/Stoman.png";
import ScrollFadeIn from "./ScrollFadeIn.jsx";

const Project = () => {
  return (
    <div>
      <div style={{ marginBottom: 150 }}>
        <h1 style={{ color: "#ccd6f6" }} className="project">
          Projects
        </h1>

        <div className="">
          <div className="lg:p-6">
            <ScrollFadeIn>
            <Card
              img={Portfolio}
              title="Portfolio"
              description="This portfolio showcases my journey as a frontend developer — from creative interfaces to interactive projects."
              feature="Key Features :"
              first="Engineered a fully responsive, high-performance portfolio"
              second="Implemented a modular, component-based architecture"
              third="Integrated lazy loading and code splitting"
              forth="Deployed the website on Netlify "
              fifth="Responsive design across all device"
              tech = "Tech Stack :"
              react = "React"
              tailwind = "Taiwind"
              frame = "Framer Motion"
              view = "View Live"
              repo = "Repository"
              link = "https://aniago-anita.netlify.app/"
              repoLink = "https://github.com/Anneytah/myPortfolio"
            />
            </ScrollFadeIn>
            <ScrollFadeIn>
            <Card
              img={Weather}
              title="Weather App"
              description="Get real-time weather updates and a sleek 5-day forecast for any city — all in one fast, interactive, and mobile-friendly app!"
              feature="Key Features:"
              first="Live Weather Data from OpenWeather API"
              second="City-Based Weather Search"
              third="Responsive Design"
              forth="Clean, User-Friendly Interface"
              fifth="Current Conditions & Forecast Display"
              tech = "Tech Stack :"
              react = "React"
              tailwind = "Taiwind"
              frame = "Axios"
              view = "View Live"
              repo = "Repository"
              link = "https://anitas-forecast.netlify.app/"
              repoLink = "https://github.com/Anneytah/weather-forecast"
              reverse
            />
            </ScrollFadeIn>
            <ScrollFadeIn>
            <Card
              img={Space}
              title="Space Tourism"
              description="A website specifically for space tourism"
              feature="Key Features :"
              first="Responsive Design"
              second="It's beautiful"
              third="It's unique"
              forth="Clean UI"
              fifth="You can see everything in space from here 😊"
              tech = "Tech Stack :"
              react = "React"
              tailwind = "Taiwind"
              frame = "Framer Motion"
              view = "View Live"
              repo = "Repository"
            />
            </ScrollFadeIn>
          </div>

          <div className="lg:p-6">
          <ScrollFadeIn>
            <Card
              img={Dictionary}
              title="Dictionary"
              description="This dictionary app provides instant word definitions and pronunciations in a clean, mobile-friendly interface."
              feature="Key Features :"
              first="Dynamic Word Search"
              second="Real-Time Definitions"
              third="Audio Pronunciation"
              forth="Mobile-Friendly Layout"
              fifth="User-Friendly Interface"
              tech = "Tech Stack :"
              react = "React"
              tailwind = "Taiwind"
              frame = "Axios"
              view = "View Live"
              repo = "Repository"
              link = "https://dictionary-project-001.netlify.app/"
              repoLink = "https://github.com/Anneytah/dictionary-app"
              reverse
            />
            </ScrollFadeIn>
            <ScrollFadeIn>
            <Card
              img={Progfams}
              title="Progfams"
              description="A bootcamp website that offers high quality courses"
              feature="Key Features :"
              first="Clean UI"
              second="Showcases available courses"
              third="Responsive across all device"
              forth="Nice combination of colours"
              fifth="Clean, User-Friendly Interface"
              tech = "Tech Stack :"
              react = "HTML5"
              tailwind = "CSS3"
              frame = "Bootstrap"
              view = "View Live"
              repo = "Repository"
              repoLink = "https://github.com/Anneytah/progfams"
            />
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
