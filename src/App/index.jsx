import { Fragment, useState } from "react";
import "./index.scss";

export default function App() {
  const [soShowMenuBurger, setoShowMenuBurger] = useState({
    status: false,
    rotate: 0,
    topLineTranslate: "0 0",
    bottomLineTranslate: "0 0",
    centerLineOpacity: 1,
    backgroundColor: "white",
  });

  const fHandleMenuBurger = () => {
    if (soShowMenuBurger.status) {
      setoShowMenuBurger({
        status: false,
        rotate: 0,
        topLineTranslate: "0, 0",
        bottomLineTranslate: "0, 0",
        centerLineOpacity: 1,
        backgroundColor: "white",
      });
    } else {
      setoShowMenuBurger({
        status: true,
        rotate: 45,
        topLineTranslate: "4px, 4px",
        bottomLineTranslate: "4px, -4px",
        centerLineOpacity: 0,
        backgroundColor: "black",
      });
    }
  };

  return (
    <Fragment>
      <style jsx="true">
        {`
          .container-navbar section:first-child button span:first-child {
            transform: rotate(${soShowMenuBurger.rotate}deg)
              translate(${soShowMenuBurger.topLineTranslate});
            background-color: ${soShowMenuBurger.backgroundColor};
          }

          .container-navbar section:first-child button span:nth-child(2) {
            opacity: ${soShowMenuBurger.centerLineOpacity};
          }

          .container-navbar section:first-child button span:last-child {
            transform: rotate(-${soShowMenuBurger.rotate}deg)
              translate(${soShowMenuBurger.bottomLineTranslate});
            background-color: ${soShowMenuBurger.backgroundColor};
          }
        `}
      </style>

      <nav className="container-navbar">
        <section>
          <button onClick={fHandleMenuBurger} title="Burger Menu Button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </section>
        <header>
          <h1>Home</h1>
        </header>
        <section>
          <ul>
            <li>
              <button className="active-page">Home</button>
            </li>
            <li>
              <button>Calculator</button>
            </li>
            <li>
              <button>Game</button>
            </li>
          </ul>
        </section>
        <section>
          <button>Sign Up</button>
          <button>Login</button>
        </section>
      </nav>
    </Fragment>
  );
}
