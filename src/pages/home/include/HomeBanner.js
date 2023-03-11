import React from "react";
import Images from "../../../components/Image/Images";
import { Link } from "react-router-dom";

function HomeBanner({ number }) {
  return (
    <div className="cm-width">
      {number === 4 && (
        <>
          <div className="home-banner--top">
            <Link to="/">
              <Images
                src="https://w.ladicdn.com/6381c31b28155d0012aa38a2/714x350-sinh-nhat-thanh-vien-t2-2023-20230201104349-x9pca.png"
                alt="23"
              />
            </Link>
            <Link to="/">
              <Images
                src="https://w.ladicdn.com/6381c31b28155d0012aa38a2/sieu-deal-rang-ngoi-1920x600-20230202075325-bndey.png"
                alt="123"
              />
            </Link>
            <Link to="/">
              <Images
                src="https://w.ladicdn.com/6381c31b28155d0012aa38a2/tvn-ads_714x350-20230201104349-oy19s.png"
                alt="123"
              />
            </Link>
          </div>
        </>
      )}
      {number !== 4 && (
        <>
          <div className="home-banner">
            <Link to="/">
              <Images
                src="https://w.ladicdn.com/6381c31b28155d0012aa38a2/714x350-sinh-nhat-thanh-vien-t2-2023-20230201104349-x9pca.png"
                alt="23"
              />
            </Link>
            <Link to="/">
              <Images
                src="https://w.ladicdn.com/6381c31b28155d0012aa38a2/sieu-deal-rang-ngoi-1920x600-20230202075325-bndey.png"
                alt="123"
              />
            </Link>
            <Link to="/">
              <Images
                src="https://w.ladicdn.com/6381c31b28155d0012aa38a2/tvn-ads_714x350-20230201104349-oy19s.png"
                alt="123"
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
export default HomeBanner;
