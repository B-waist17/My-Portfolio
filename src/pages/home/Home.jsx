import React, { useEffect, useRef } from "react";
import "./home.css";
import Hero from "../../components/hero/Hero";
import Work from "../../components/work/Work";
import Talk from "../../components/letsTalk/Talk";
import WorkCard from "../../components/workCard/WorkCard";
import linxImg from "../../assets/linx_Image.png";
import eduImg from "../../assets/educard_Image.png";
import spendyImg from "../../assets/spendy_Image.png";
import reportaImg from "../../assets/reporta_Image.png";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const workRef = useRef(null)
  const location = useLocation()

  // read up on lifecycle hooks in react
  useEffect(() => {
    if (location.hash.includes('#work')) {
      workRef?.current?.scrollIntoView()
    }
  },[workRef, location.hash])

  return (
    <div>
      <Hero />
      <Work />
      <div className="caseStudies" id="work" ref={workRef}>
        <Link to='/linx'>
          <WorkCard
            title="LinX"
            description="LinX is a platform made for businesses to  manage all business processes on a single platform."
            number="01"
            photo={linxImg}
          />
        </Link>
        <Link to="/educard">
          <WorkCard
            title="EduCard"
            description="Eduard is a student-focused fintech solution for seamless payments."
            number="02"
            photo={eduImg}
          />{" "}
        </Link>
        <Link to="/spendy">
          <WorkCard
            title="Spendy"
            description="Spendy is an expense tracking app built to help people manage their expenses and plan."
            number="03"
            photo={spendyImg}
          />
        </Link>
        <Link to="/reporta">
          <WorkCard
            title="Reporta"
            description="Reporta is a mobile app that allows users to report incidents."
            number="04"
            photo={reportaImg}
          />
        </Link>
      </div>

      <Talk />
    </div>
  );
};

export default Home;
