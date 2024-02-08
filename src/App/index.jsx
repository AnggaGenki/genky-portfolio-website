import { Fragment, useState } from "react";
import "./index.scss";

export default function App() {
  const [soShowBurgerMenu, setoShowBurgerMenu] = useState({
    status: false,
    rotate: 0,
    topLineTranslate: "0 0",
    bottomLineTranslate: "0 0",
    centerLineOpacity: 1,
    backgroundColor: "white",
    animClassName: "hide-burger-menu",
  });
  const [soShowSubBurgerMenu, setoShowSubBurgerMenu] = useState({
    status: false,
    animClassName: "hide-sub-burger-menu",
  });

  const fHandleBurgerMenu = () => {
    if (soShowBurgerMenu.status) {
      const cHideBurgerMenu = {
        rotate: 0,
        topLineTranslate: "0, 0",
        bottomLineTranslate: "0, 0",
        centerLineOpacity: 1,
        backgroundColor: "white",
        animClassName: "hide-burger-menu",
      };

      setoShowBurgerMenu({
        ...cHideBurgerMenu,
        status: true,
      });

      if (soShowSubBurgerMenu.status) {
        setoShowSubBurgerMenu({
          status: true,
          animClassName: "hide-burger-menu",
        });
      }

      setTimeout(() => {
        setoShowBurgerMenu({
          ...cHideBurgerMenu,
          status: false,
        });

        if (soShowSubBurgerMenu.status) {
          setoShowSubBurgerMenu({
            status: false,
            animClassName: "hide-burger-menu",
          });
        }
      }, 300);
    } else {
      setoShowBurgerMenu({
        status: true,
        rotate: 45,
        topLineTranslate: "4px, 4px",
        bottomLineTranslate: "4px, -4px",
        centerLineOpacity: 0,
        backgroundColor: "black",
        animClassName: "show-burger-menu",
      });
    }
  };
  const fHandleSubBurgerMenu = () => {
    if (soShowSubBurgerMenu.status) {
      setoShowSubBurgerMenu({
        status: true,
        animClassName: "hide-burger-menu",
      });

      setTimeout(() => {
        setoShowSubBurgerMenu({
          status: false,
          animClassName: "hide-burger-menu",
        });
      }, 300);
    } else {
      setoShowSubBurgerMenu({
        status: true,
        animClassName: "show-burger-menu",
      });
    }
  };

  return (
    <Fragment>
      <style jsx="true">
        {`
          .container-navbar section:first-child button span:first-child {
            transform: rotate(${soShowBurgerMenu.rotate}deg)
              translate(${soShowBurgerMenu.topLineTranslate});
            background-color: ${soShowBurgerMenu.backgroundColor};
          }

          .container-navbar section:first-child button span:nth-child(2) {
            opacity: ${soShowBurgerMenu.centerLineOpacity};
          }

          .container-navbar section:first-child button span:last-child {
            transform: rotate(-${soShowBurgerMenu.rotate}deg)
              translate(${soShowBurgerMenu.bottomLineTranslate});
            background-color: ${soShowBurgerMenu.backgroundColor};
          }
        `}
      </style>

      <nav className="container-navbar">
        <section>
          <button onClick={fHandleBurgerMenu} title="Burger Menu Button">
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

      {soShowBurgerMenu.status ? (
        <div
          className={`container-navbar-burger-menu ${soShowBurgerMenu.animClassName}`}
        >
          <ul>
            <li>
              <button onClick={fHandleSubBurgerMenu}>Menu</button>
            </li>
            <li>
              <button>Score</button>
            </li>
            <li>
              <button>Theme</button>
            </li>
            <li>
              <button>Wallpaper</button>
            </li>
          </ul>
        </div>
      ) : null}

      {soShowSubBurgerMenu.status ? (
        <div
          className={`container-navbar-sub-burger-menu ${soShowSubBurgerMenu.animClassName}`}
        >
          <div>
            <button onClick={fHandleSubBurgerMenu}>&#8592;</button>
          </div>
          <ul>
            <li>
              <button>Home</button>
            </li>
            <li>
              <button>Calculator</button>
            </li>
            <li>
              <button>Game</button>
            </li>
          </ul>
        </div>
      ) : null}
    </Fragment>
  );
}
