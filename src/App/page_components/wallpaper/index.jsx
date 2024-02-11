import { Fragment } from "react";
import "./index.scss";
import CloseButtonComponent from "../../components/close_button";

export default function WallpaperPageComponent({ _Close }) {
  return (
    <Fragment>
      <div className="container-wallpaper-page-component page-component">
        <div className="pop-up-page">
          <CloseButtonComponent _Close={() => _Close()} />
          <header>
            <h1>Wallpaper</h1>
          </header>
          <section>
            <p>Coming Soon</p>
          </section>
        </div>
      </div>
    </Fragment>
  );
}
