import React from "react";
import Card from "./Card.jsx";
import Portfolio from "../Image/Portfolio.png";
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
              img={Stoman}
              title="Stoman"
              description="A weather forecast built with real-life data showing the weather forecast in your City"
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
              reverse
            />
            <Card
              img={Stoman}
              title="Portfolio"
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
              img={Portfolio}
              title="Portfolio"
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
            <Card
              img={Stoman}
              title="Portfolio"
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
              reverse
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
