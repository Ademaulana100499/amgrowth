import "./style.css";
export const Info = (props) => {
  const { imageInfo, biodata, experience, skills } = props;
  return (
    <section className="info section" id="my info">
      <h2 className="section__title">MY INFO</h2>
      <div className="container grid info__container">
        <div className="grid about">
          <div className="about__content">
            <h3 className="info__title">About Me</h3>
            <p className="about__description">{biodata.description}</p>
            <a
              href={biodata.cv}
              target="_blank"
              className="button about__button"
            >
              Download CV
            </a>
          </div>

          <img
            id="image_about"
            src={imageInfo.imageWhite}
            alt="image"
            className="about__img"
          />
        </div>
        <div className="experience">
          <h3 className="info__title">Experience</h3>
          <div className="grid experience__content">
            {experience.map((item, index) => (
              <div key={index} className="grid experience__data">
                <h2 className="experience__company">{item.company}</h2>
                <div>
                  <h3 className="experience__professsion">{item.profession}</h3>
                  <span className="experience__date">{item.date}</span>
                  <p className="experience__description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="skills">
          <h3 className="info__title">Skills</h3>
          <div className="grid skills__content">
            {skills.map((item, index) => (
              <div key={index} className="skills__box">
                <img src={item.image} alt="image" className="skills__img" />
                <span className="skills__name">{item.skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
