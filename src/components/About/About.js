import photo from "../../images/about.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about__container_image">
        <img src={photo} alt={"ABOUT"} className="about__image" />
      </div>
      <div className="about__container_text">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__text">
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
      
    </section>
  );
};

export default About;