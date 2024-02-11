import { Fragment } from "react";
import "./index.scss";

export default function CloseButtonComponent({ _Close }) {
  return (
    <Fragment>
      <div className="container-close-button-component">
        <button onClick={() => _Close()}>&#215;</button>
      </div>
    </Fragment>
  );
}
