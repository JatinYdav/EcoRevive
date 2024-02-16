import "./App.css";
import CarbonFootPrintCalc from "./Components/CarbonFootPrintCalc";
import NewsSection from "./Components/NewsSection";
import QikTips from "./Components/QikTips";
import TipsSection from "./Components/TipsSection";
import Quizzical from "./Components/Quizzical";
import "./quizzical.css";
import Ender from "./Components/Ender";

import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="lander">
          <div className="herosection">
            <h1>Creating A Healthier Sustainable Enviornment</h1>
            <h3>
              Empowering a Sustainable Tomorrow: Explore, Learn, and Act for a
              Greener Future with Our Comprehensive Sustainable Development Hub.
            </h3>
            <nav>
              <ul>
                <li>
                  <Link
                    to="#tips"
                    style={{ textDecoration: "none", color: "white" }}
                    className="navitem"
                    smooth
                  >
                    Tips
                  </Link>
                </li>
                <li>
                  <Link
                    to="#quiz"
                    style={{ textDecoration: "none", color: "white" }}
                    className="navitem"
                    smooth
                  >
                    Quiz
                  </Link>
                </li>
                <li>
                  <Link
                    to="#calcy"
                    style={{ textDecoration: "none", color: "white" }}
                    className="navitem"
                    smooth
                  >
                    Calcy
                  </Link>
                </li>
              </ul>
            </nav>
            <button>
              <Link to="#qiktips" smooth>
                Explore Now
              </Link>
            </button>
          </div>
        </div>
        <NewsSection />
        <CarbonFootPrintCalc />
        <TipsSection />
        <QikTips />
        <Quizzical />
        <Ender />
      </div>
    </BrowserRouter>
  );
}

export default App;
