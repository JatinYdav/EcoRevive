import React from "react";
import c1img from "../SVGS/c1img.svg";
import c2img from "../SVGS/c2img.svg";
import c3img from "../SVGS/c3img.svg";

const NewsSection = () => {
  return (
    <div className="newssection">
      <div className="newsheader">
        <h2>RECENT NEWS</h2>
        <h3>TOP HEADLINES</h3>
      </div>
      <div className="newscards">
        <div className="card1 card">
          <img src={c1img} alt="" className="card1img" />
          <h1>
            International Seminar Series to focus on the United Nations’
            Sustainable Development Goals
          </h1>
          <h3>
            United Nations’ Sustainable Development Goals (SDGs) to not only
            contribute to the global effort, but also to demonstrate our campus’
            global impact...
          </h3>
          <h2>
            <a
              href="https://news.illinoisstate.edu/2024/02/international-seminar-series-to-focus-on-the-united-nations-sustainable-development-goals-2/"
              target="_blank"
            >
              Know More
            </a>
          </h2>
        </div>
        <div className="card2 card">
          <img src={c2img} alt="" className="card1img" />
          <h1>
            IIT Delhi, United Nations Development Programme partner for
            sustainable solutions
          </h1>
          <h3>
            IIT Delhi and United Nations Development Programme (UNDP) India join
            hands to drive sustainable development solutions focusing on
            environment, energy, and climate change.
          </h3>
          <h2>
            <a
              href="https://www.indiatoday.in/education-today/news/story/iit-delhi-undp-sign-mou-to-advance-sustainable-development-2502562-2024-02-15#:~:text=IIT%20Delhi%20and%20UNDP%20India,knowledge%20networks%20for%20sustainable%20development."
              target="_blank"
            >
              Know More
            </a>
          </h2>
        </div>
        <div className="card3 card">
          <img src={c3img} alt="" className="card1img" />
          <h1>
            Asia and Pacific to take 32 years more to achieve SDG goals: UNESCAP
            India Soars
          </h1>
          <h3>
            India’s performance on 85 of Sustainable Development Goal parameters
            has improved, with progress stagnating on 27 counts and worsening on
            36
          </h3>
          <h2>
            <a
              href="https://economictimes.indiatimes.com/news/economy/indicators/india-performs-well-on-85-indicators-of-sdg-target-asia-and-pacific-to-take-32-years-more-to-achieve-sdg-goals-unescap/articleshow/107715235.cms?from=mdr"
              target="_blank"
            >
              Know More
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
