import "./style.css";
export const Services = (props) => {
  const { services } = props;
  return (
    <section className="services section" id="services">
      <h2 className="section__title">SERVICES</h2>
      <div className="container grid services__container">
        {services.map((item) => (
          <article className="services__card" key={item.id}>
            <i className={`services__icon ${item.icon}`}></i>
            <h3 className="services__title">{item.title}</h3>
            <p className="services__description">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
