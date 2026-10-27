
import { Link } from 'react-router';
import styles from './Servicos.module.css';



import serv from './assets/serv.png'

function Servicos() {
  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <Link to="/servicos">Serviços</Link>
        <Link to="/manutencao">Manutenção</Link>
        <Link to="/chamado">Abrir Chamado</Link>
        <Link to="/solucoes">Soluções</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/login">Login</Link>
      </nav>

      <header className={styles.hero} id="manutencao">
        <h1>Manutenção Industrial</h1>
        <p>
          Solicite e acompanhe serviços de manutenção de máquinas e equipamentos.
        </p>
        <a href="#chamado" className={styles.heroButton}>
          Solicitar manutenção
        </a>
      </header>

      <main className={styles.content} id="servicos">
        <h2>Nossos Serviços:</h2>

        <section className={styles.servicesList}>
          <article className={styles.serviceCard}>
            <h3>Manutenção Preventiva</h3>
            <p>
              Realizamos manutenções preventivas com o objetivo de evitar
              falhas inesperadas, reduzir custos com reparos e aumentar a
              vida útil dos equipamentos. Por meio de revisões periódicas,
              ajustes e substituição de componentes desgastados, garantimos
              maior segurança, eficiência e confiabilidade no funcionamento
              das máquinas industriais.
            </p>
          </article>

          <article className={styles.serviceCard}>
            <h3>Manutenção Corretiva</h3>
            <p>
              Executamos reparos em máquinas e equipamentos que apresentam
              falhas, defeitos ou problemas de funcionamento. Nosso objetivo
              é identificar a causa do problema e realizar as correções
              necessárias com agilidade e eficiência, reduzindo o tempo de
              parada e restabelecendo o desempenho adequado dos equipamentos.
            </p>
          </article>

          <article className={styles.serviceCard}>
            <h3>Inspeção</h3>
            <p>
              Realizamos inspeções técnicas para avaliar as condições de
              funcionamento e conservação dos equipamentos industriais.
              Verificamos possíveis desgastes, irregularidades e sinais de
              falhas, permitindo identificar problemas antecipadamente e
              recomendar as medidas necessárias para garantir mais segurança,
              produtividade e eficiência nos processos industriais.
            </p>
          </article>
        </section>

        <div className={styles.illustration} id="solucoes">
          <img
            src={serv}
            alt="Profissionais realizando manutenção industrial"
          />
        </div>
      </main>

      <footer className={styles.footer} id="sobre">
        © 2026 Manutec - Manutenção Industrial
      </footer>
    </div>
  );
}

export default Servicos;
