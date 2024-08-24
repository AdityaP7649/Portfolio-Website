import "./Home.css";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
import { FocusCards } from "../../components/ui/focus-cards";
import Heading from "../../components/heading/Heading";

function Home() {
  const cards = [
    {
      title: "Linkedin",
      src: "https://i.pinimg.com/736x/0c/78/d0/0c78d03cbfa19d5f3d7ad1b6e49f957b.jpg",
      url: "https://www.linkedin.com/in/aditya-patil-596413223/",
    },
    {
      title: "Github",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BIlB_ercdvTO34Lq4zm2pPbCXO9lvMOplg&s",
      url: "https://github.com/AdityaP7649",
    },
    {
      title: "GeeksforGeeks",
      src: "https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64",
      url: "https://auth.geeksforgeeks.org/user/adityapatil7649/practice",
    },
    {
      title: "Google Cloud",
      src: "https://1000logos.net/wp-content/uploads/2020/05/Emblem-Google-Cloud.jpg",
      url: "https://www.cloudskillsboost.google/public_profiles/e8672de8-0a5a-4137-b88c-877211a0e486",
    },
  ];

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
      <Heading title="About me" />
      <div className="about-container">
        <div className="about-left-container">
          <div className="info-container">
            <p className="info-text">Name :</p>
            <p className="info-details">&nbsp; Aditya Patil</p>
          </div>
          <div className="info-container">
            <p className="info-text">Phone :</p>
            <p className="info-details">&nbsp; Aditya Patil</p>
          </div>
          <div className="info-container">
            <p className="info-text">Email :</p>
            <p className="info-details">&nbsp; adityapatil7649@gmail.com</p>
          </div>
        </div>
        <div className="about-right-container">
          <h1 className="hello-heading">Hello There!</h1>
          <p className="about-description">
            I am a dedicated Engineering student with a strong passion for
            technology and a proven track record of academic excellence.
            Currently pursuing my Bachelor of Engineering at Dr. D Y Patil
            Institute of Engineering, Management and Research. I am proficient
            in a diverse range of programming languages including Java, C++, and
            Python. <br />
            Skilled in web technologies such as HTML, CSS,
            JavaScript.Experienced in database management with a strong
            foundation in MySQL. I thrive on solving complex problems and
            continuously expanding my skill set. Committed to delivering
            innovative solutions and constantly expanding my technical
            expertise. I am seeking to contribute in exciting projects and
            collaborate with like-minded professionals in the tech industry.
            <br />
            Skilled in web technologies such as HTML, CSS,
            JavaScript.Experienced in database management with a strong
            foundation in MySQL. I thrive on solving complex problems and
            continuously expanding my skill set. Committed to delivering
            innovative solutions and constantly expanding my technical
            expertise. I am seeking to contribute in exciting projects and
            collaborate with like-minded professionals in the tech industry.
          </p>
        </div>
      </div>
      <div className="focus-cards-container">
        <FocusCards cards={cards} />
      </div>
    </>
  );
}

export default Home;
