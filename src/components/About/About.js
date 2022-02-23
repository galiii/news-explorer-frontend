import initialAbout from "../../utils/about";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <img src={initialAbout.image} alt={"About"} className="about__image" />
      <div className="about__container_text">
        <h2 className="about__title">{initialAbout.title}</h2>
        <p className="about__text">{initialAbout.text1}</p>
        <p className="about__text">{initialAbout.text2}</p>
      </div>
    </section>
  );
};

export default About;
