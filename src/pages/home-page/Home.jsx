import "./Home.css";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";

function Home() {
  const words = [
    // { text: "Hello, I am ", className: "text-white-500" },
    { text: "Aditya Patil", className: "text-gray-500" },
  ];

  return (
    <>
    <div className="home-main-container">
      <div className="profile-img-container">
        <img
          src="https://images.unsplash.com/photo-1723675510064-9a135abf0558?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile image"
          className="profile-img"
        />
      </div>
      <div className="type-writter-text">
        <TypewriterEffectSmooth
          words={words}
          className="custom-typewriter-text"
          cursorClassName="my-custom-cursor-class"
        />
      </div>
      
    </div>
    </>
    
  );
}

export default Home;
