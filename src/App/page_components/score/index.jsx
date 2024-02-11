import { Fragment } from "react";
import "./index.scss";
import CloseButtonComponent from "../../components/close_button";

export default function ScorePageComponent({ _Close }) {
  return (
    <Fragment>
      <div className="container-score-page-component page-component">
        <div className="pop-up-page">
          <CloseButtonComponent _Close={() => _Close()} />
          <header>
            <h1>Score</h1>
          </header>
          <section>
            <p>Coming Soon</p>
          </section>
        </div>
      </div>
    </Fragment>
  );
}
