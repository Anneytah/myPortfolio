import React from "react";
import Card from "./Card.jsx";
import Portfolio from "../Image/Portfolio.png";
import Weather from "../Image/Weather.png";
import Space from "../Image/Space.png"
import Dictionary from "../Image/Dictionary.png";
import Stoman from "../Image/Stoman.png";

const Project = () => {
  return (
    <div>
      <div style={{ marginBottom: 200 }}>
        <h1 style={{ color: "#ccd6f6" }} className="project">
          Projects
        </h1>

        <div className="">
          <div className="lg:p-6">
            <Card
              img={Portfolio}
              title="Portfolio"
              description="This portfolio showcases my journey as a frontend developer — from creative interfaces to interactive projects."
              feature="Key Features :"
              first="Responsive design across devices"
              second="Profile Management w/ Instant Updates"
              third="Real-time Inventory Stats & Smart Notifications"
              forth="Financial Reports w/ Charts & Insights"
              fifth="Advanced Product Search & Customer Management"
              tech = "Tech Stack :"
              react = "React"
              tailwind = "Taiwind"
              frame = "Framer Motion"
              view = "View Live"
              repo = "Repository"
            />
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
              geo = "Geolocation"
              view = "View Live"
              repo = "Repository"
              link = "https://anitas-forecast.netlify.app/"
              repoLink = "https://github.com/Anneytah/weather-forecast"
              reverse
            />
            <Card
              img={Space}
              title="Space Tourism"
              description="My portfolio showcasing my talent"
              feature="Key Features :"
              first="Collapsible Sidebar w/ Theme Support"
              second="Profile Management w/ Instant Updates"
              third="Real-time Inventory Stats & Smart Notifications"
              forth="Financial Reports w/ Charts & Insights"
              fifth="Advanced Product Search & Customer Management"
              tech = "Tech Stack :"
              react = "React"
              tailwind = "Taiwind"
              frame = "Framer Motion"
              view = "View Live"
              repo = "Repository"
            />
          </div>

          <div className="lg:p-6">
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
            <Card
              img={Stoman}
              title="Stoman"
              description="My portfolio showcasing my talent"
              feature="Key Features :"
              first="Collapsible Sidebar w/ Theme Support"
              second="Profile Management w/ Instant Updates"
              third="Real-time Inventory Stats & Smart Notifications"
              forth="Financial Reports w/ Charts & Insights"
              fifth="Advanced Product Search & Customer Management"
              tech = "Tech Stack :"
              react = "React"
              tailwind = "Taiwind"
              frame = "Framer Motion"
              view = "View Live"
              repo = "Repository"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
