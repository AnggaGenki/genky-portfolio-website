import { Fragment } from "react";
import "./index.scss";
import CloseButtonComponent from "../../components/close_button";

export default function ThemePageComponent({ _Close }) {
  return (
    <Fragment>
      <div className="container-theme-page-component page-component">
        <div className="pop-up-page">
          <CloseButtonComponent _Close={() => _Close()} />
          <header>
            <h1>Theme</h1>
          </header>
          <section>
            <p>Coming Soon</p>
          </section>
        </div>
      </div>
    </Fragment>
  );
}
