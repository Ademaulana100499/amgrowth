import "./style.css";
export const Projects = (props) => {
  const { projects } = props;
  return (
    <section className="project section" id="project">
      <h2 className="section__title">RECENT PROJECT</h2>
      <div className="grid container project__container">
        {projects.map((item) => (
          <article className="project__card" key={item.id}>
            <a
              href={item.link}
              target="_blank"
              className="project__overlay"
            ></a>
            <a href={item.link} target="_blank" className="project__link">
              <h2 className="project__title">{item.title}</h2>
              <p className="project__description">{item.description}</p>
              <img src={item.image} alt="image" className="project__img" />
              <i className="ri-arrow-right-line"> </i>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};
