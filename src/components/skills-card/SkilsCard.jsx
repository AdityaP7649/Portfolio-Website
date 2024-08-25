import "./SkilsCard.css";
function SkilsCard({ skillImg }) {
  return (
    <>
      <div className="skill-container">
        <img className="skill-img" src={skillImg} />
      </div>
    </>
  );
}

export default SkilsCard;
