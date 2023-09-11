import aboutCard from "../../Assets/aboutImg.png";
import "./AboutCard.css";
export const AboutCard = () => {
  return (
    <section className="about_container">
      <div className="about_container_img">
        <img src={aboutCard} alt="about-card-img" />
      </div>
      <div className="about_container_text">
        <h2>About Us</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button>Read More</button>
      </div>
    </section>
  );
};
