import "./style.css";
export const Projects = (props) => {
  const { projects } = props;
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">RECENT PROJECTS</h2>
      <div className="grid container projects__container">
        {projects.map((item) => (
          <article className="projects__card" key={item.id}>
            <a
              href={item.link}
              target="_blank"
              className="projects__overlay"
            ></a>
            <a href={item.link} target="_blank" className="projects__link">
              <h2 className="projects__title">{item.title}</h2>
              <p className="projects__description">{item.description}</p>
              <img src={item.image} alt="image" className="projects__img" />
              <i className="ri-arrow-right-line"> </i>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
