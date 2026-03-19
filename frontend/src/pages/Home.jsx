import { useEffect } from "react";
import {Link} from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = "Locadora Tacolar | Mesas de Sinuca para Eventos";
  }, []);
  return (
    <main>
      <section className="hero">
      <div className="hero-content">
          <h1>Mesas de Sinuca para Eventos, Festas e Comércios</h1>
        <p>
          A Locadora Tacolar é especializada na locação de mesas de sinuca para
          eventos corporativos, festas particulares, bares e estabelecimentos comerciais.
        </p>

        <Link to="/contact" className="cta-button">
          Solicitar Orçamento
        </Link>
        
      </div>
      </section>
    
      <section className="services">
        <h2>Nossos Serviços</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Eventos Corporativos</h3>
            <p>
              Torne seu evento empresarial mais dinâmico e interativo com mesas de
              sinuca de alta qualidade.
            </p>
          </div>

          <div className="service-card">
            <h3>Festas Particulares</h3>
            <p>
              Ideal para aniversários, confraternizações e celebrações especiais,
              proporcionando diversão garantida.
            </p>
          </div>

          <div className="service-card">
            <h3>Bares e Restaurantes</h3>
            <p>
              Atraia mais clientes e agregue valor ao seu estabelecimento com
              entretenimento diferenciado.
            </p>
          </div>

          <div className="service-card">
            <h3>Comércios em Geral</h3>
            <p>
              Excelente opção para espaços comerciais que desejam oferecer
              entretenimento ao público.
            </p>
          </div>
        </div>
      </section>

      <section className="home-contact">
        <h2>Entre em Contato</h2>

        <div className="contact-grid">
          <div>
            <strong>Telefone</strong>
            <p>(94)3321-1591</p>
          </div>

          <div>
            <strong>WhatsApp</strong>
            <p>(94)99256-8313</p>
          </div>

          <div>
            <strong>Email</strong>
            <p>contato@tacolar.com</p>
          </div>

          <div>
            <strong>Endereço</strong>
            <p>Av. Antônio Maia, 1616 - Cidade Pioneira, Marabá - PA, 68500-005</p>
          </div>
        </div>
      </section>




    </main>
  );
}

export default Home;
