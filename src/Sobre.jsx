
import { Link } from 'react-router';
import styles from './Sobre.module.css';

import img8 from './assets/img8.png'

function Sobre() {
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

      <header className={styles.header}>
        <h1>Manutec</h1>
      </header>

      <main className={styles.content}>
        <section className={styles.intro}>
          <h2>Sobre o Manutech</h2>

          <a href="#missao" className={styles.introButton}>
            Sobre Clique Aqui
          </a>

          <p className={styles.description}>
            “Somos uma empresa fictícia de
            <br />
            manutenção industrial que utiliza
            <br />
            tecnologia para facilitar o cuidado com
            <br />
            máquinas e equipamentos.”
          </p>
        </section>

        <div className={styles.lowerContent}>
          <section className={styles.cards}>
            <article className={styles.card} id="missao">
              <h3>Nossa Missão:</h3>
              <p>
                “Desenvolver e integrar tecnologias de ponta para impulsionar
                a eficiência operacional e elevar os padrões de segurança no
                setor industrial. Nosso compromisso é transformar processos
                complexos em operações inteligentes, previsíveis e livres de
                falhas, protegendo as pessoas e maximizando a produtividade
                dos nossos clientes.”
              </p>
            </article>

            <article className={styles.card}>
              <h3>Nossa Visão:</h3>
              <p>
                “Ser a principal referência global e a parceira mais confiável
                em soluções digitais para gestão e execução da manutenção
                industrial. Queremos liderar a transição da indústria rumo à
                Indústria 4.0, sendo reconhecidos pela inovação contínua,
                excelência técnica e pelo impacto positivo que geramos na
                continuidade dos negócios de nossos parceiros.”
              </p>
            </article>

            <article className={styles.card}>
              <h3>Nossos Valores:</h3>
              <p>
                “Movemo-nos pela inovação, buscando continuamente novas
                tecnologias e ideias disruptivas para resolver desafios e
                antecipar as necessidades do setor industrial. Mantemos um
                compromisso inegociável com a qualidade, garantindo
                excelência, precisão e confiabilidade em cada código, produto
                e entrega. A segurança é a nossa prioridade máxima, focando
                na proteção de pessoas e ativos através da prevenção de
                riscos e mitigação de acidentes. Por fim, pautamos nossa
                atuação na responsabilidade, agindo com ética, transparência
                e compromisso socioambiental para gerar um impacto positivo
                e sustentável no mercado.”
              </p>
            </article>
          </section>

          <div className={styles.illustration}>
            <img
              src={img8}
              alt="Ilustração de tecnologia e manutenção industrial"
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        © 2026 Manutec - Manutenção Industrial
      </footer>
    </div>
  );
}

export default Sobre;
