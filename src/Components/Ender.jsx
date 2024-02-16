import React from "react";
import mailicon from "../SVGS/mailicon.svg";
import linkedinicon from "../SVGS/linkedinicon.svg";
import twittericon from "../SVGS/twittericon.svg";
const Ender = () => {
  return (
    <div className="endsection">
      <div className="endinfo">
        <h1>"Let's build a future where prosperity meets sustainability."</h1>
        <div className="socialicons">
          <a href="ydvjatin30@gmail.com">
            <img src={mailicon} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/jatin-yadav-681811245/">
            <img src={linkedinicon} alt="" />
          </a>
          <a href="https://twitter.com/Jatin_ydav">
            <img src={twittericon} alt="" />
          </a>
        </div>
        <ul>
          <li>|JATIN YADAV</li>

          <li>|HARSHIT SAXENA</li>
          <li>|SHREYAS TRIPATHI</li>
          <li>|SHIVANSH RAJ</li>
          <li>|PRANAY AGGARWAL</li>
        </ul>
      </div>
    </div>
  );
};

export default Ender;
