import { useEffect } from "react";

function About() {
    useEffect(() => {
    document.title = "Quem Somos | Locadora Tacolar";
  }, []);
  return (
    <main>
      <section className="about-hero">
        <h1>Sobre a Locadora Tacolar</h1>
        <p>
          Fundada em 13 de julho de 1990, a Locadora Tacolar é especializada
          exclusivamente na locação de mesas de sinuca para eventos, festas e
          estabelecimentos comerciais.
        </p>
      </section>

      <section className="about-content">
        <div className="about-grid">

  <div className="about-card">
    <h2>Missão</h2>
    <p>
      Proporcionar entretenimento de qualidade por meio da locação de mesas de
      sinuca, agregando valor a eventos, estabelecimentos comerciais e celebrações
      particulares.
    </p>
  </div>

  <div className="about-card">
    <h2>Valores</h2>
    <ul>
      <li>Compromisso com a qualidade</li>
      <li>Responsabilidade e pontualidade</li>
      <li>Respeito aos clientes</li>
      <li>Excelência no atendimento</li>
    </ul>
  </div>

  <div className="about-card">
    <h2>Diferenciais</h2>
    <ul>
      <li>Atendimento personalizado</li>
      <li>Equipamentos em excelente estado</li>
      <li>Atuação exclusiva no segmento</li>
      <li>Flexibilidade para diferentes tipos de evento</li>
    </ul>
  </div>

</div>

      </section>
    </main>
  );
}

export default About;
