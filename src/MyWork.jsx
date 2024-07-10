import React from "react";
import "./MyWork.css";
import theme_pattern from "./assets/ClaudiahW.jpeg";
import mywork_data from "./assets/mywork_data";

const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default MyWork;
