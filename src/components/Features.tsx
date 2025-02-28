import React from "react";

import "./Features.css";

const Features: React.FC = () => {
  return (
    <section className="features" id="features">
      <div className="features__list">
        <div className="feature">
          <div className="feature__icon"></div>
          <h3>We love creating.</h3>
          <p>
            Not only do we love technology, but we also cherish the creative
            process. We thrive on building things that can change the world.
          </p>
        </div>

        <div className="feature">
          <div className="feature__icon"></div>
          <h3>We're partners.</h3>
          <p>
            We're like your ride-or-die buddies for success, even if we're not
            officially on the team. Our commitment goes beyond just being there;
            we're all in to offer relentless support, no matter what.
          </p>
        </div>

        <div className="feature">
          <div className="feature__icon"></div>
          <h3>We're tech wizards.</h3>
          <p>
            We're tech experts dedicated to making your business work smoothly.
            We love tech, but we also know how important it is to move fast with
            an MVP.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
