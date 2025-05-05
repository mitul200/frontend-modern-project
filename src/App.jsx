import React from "react";
import Navber from "./components/Navber";
import Hero from "./components/Hero";
import CompanyLogo from "./components/CompanyLogo";
import "./app.css";
import PurposeSection from "./components/PurposeSection";
import FeatureSections from "./components/FeatureSections";
import ScheduleSections from "./components/ScheduleSections";
import MonitorFeatures from "./components/MonitorFeatures";
import PricingSection from "./components/PricingSection";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div
        className="absolute -top-28 -left-28 w-[500px] h-[500px]
       bg-gradient-to-tr rounded-full -z-10 blur-[80px]
        from-indigo-500/20 to-pink-500/20"
      ></div>
      <div className="overflow-hidden">
        <Navber />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeatureSections />
        <ScheduleSections />
        <MonitorFeatures />
        <PricingSection />
      </div>
    </main>
  );
};

export default App;
