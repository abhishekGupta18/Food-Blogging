import aboutCard from "../../Assets/aboutImg.png";
import "./AboutCard.css";
export const AboutCard = () => {
  return (
    <div className="about_container">
      <div className="about_container_img">
        <img src={aboutCard} alt="about-card-img" />
      </div>
      <div className="about_container_text">
        <h2>About Us</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
          itaque laborum non molestiae enim exercitationem dolorem quidem
          laudantium officia harum voluptatum ducimus totam nihil sunt? Labore
          veritatis doloribus placeat obcaecati.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
};
