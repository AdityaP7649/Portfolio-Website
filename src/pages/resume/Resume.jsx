import Heading from "../../components/heading/Heading";
import "./Resume.css";

function Resume() {
  return (
    <>
      <div id="resume">
        <Heading title="Resume" />
      </div>

      <div className="resume-container">
        <button className="resume-btn">Download Resume</button>
      </div>
    </>
  );
}

export default Resume;
