import "./Heading.css";

function Heading({ title, titleid }) {
  return (
    <>
      <div id={titleid}>
        <h1 className="scetion-heading">{title}</h1>
      </div>
    </>
  );
}

export default Heading;
