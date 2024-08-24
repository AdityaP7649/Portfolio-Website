import "./Home.css";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
import { FocusCards } from "../../components/ui/focus-cards";
import { Meteors } from "../../components/ui/meteors";
import Heading from "../../components/heading/Heading";
import Profile from "../../assets/profile-pic.jpg";

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
      <div className="relative w-full h-screen overflow-hidden">
        <Meteors number={30} className="opacity-70" />
        <div className="home-main-container relative z-10 flex flex-col items-center justify-center w-full h-full">
          <div className="profile-img-container">
            <img src={Profile} alt="profile image" className="profile-img" />
          </div>
          <div className="type-writter-text">
            <TypewriterEffectSmooth
              words={words}
              className="custom-typewriter-text"
              cursorClassName="my-custom-cursor-class"
            />
          </div>
        </div>
      </div>
      <div id="about-me">
        <Heading title="About Me" />
      </div>

      <div className="about-container">
        <div className="about-left-container">
          <div className="info-container">
            <p className="info-text">Name &nbsp;:</p>
            <p className="info-details">&nbsp; Aditya Patil</p>
          </div>
          <div className="info-container">
            <p className="info-text">Phone :</p>
            <p className="info-details">&nbsp; 9145015729</p>
          </div>
          <div className="info-container">
            <p className="info-text">Email :</p>
            <p className="info-details">&nbsp; adityapatil7649@gmail.com</p>
          </div>
        </div>
        <div className="about-right-container">
          <h1 className="hello-heading">Hello There!</h1>
          <p className="about-description">
            Enthusiastic Full Stack Web Developer with a strong passion for
            crafting modern, user-centric web applications. I bring a proven
            track record in designing, developing, and maintaining both
            front-end and back-end components of web solutions. Proficient in
            the MERN stack (MongoDB, Express.js, React.js, Node.js)
            <br />
            <br /> I excel at building scalable, high-performance web
            applications. My technical toolkit includes extensive experience
            with HTML, CSS, JavaScript, and Bootstrap, enabling me to create
            visually appealing and responsive user interfaces. In addition to my
            front-end and back-end development skills, I have a solid foundation
            in database management with hands-on expertise in both MySQL and
            MongoDB.
            <br />
            <br /> My approach combines a keen eye for detail with a commitment
            to writing clean, efficient, and maintainable code. I am highly
            motivated and results-driven, consistently striving for excellence
            in every project. My goal is to leverage my skills and enthusiasm to
            contribute to impactful web solutions that exceed user expectations
            and drive business success.
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
