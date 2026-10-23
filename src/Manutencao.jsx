
import styles from './manutencao.module.css';

import img3 from './assets/img3.png'
import { Link } from 'react-router';

function Manutencao() {
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
        <section className={styles.information}>
          <h2>Manutenção Preventiva</h2>

          <div className={styles.quote}>
            <p>
              “A manutenção preventiva é realizada de forma
              planejada para identificar possíveis problemas antes
              que eles provoquem paradas inesperadas na
              produção.”
            </p>
          </div>

          <section className={styles.benefits}>
            <h3>Benefícios</h3>

            <ul>
              <li>Redução de falhas inesperadas</li>
              <li>Maior vida útil dos equipamentos</li>
              <li>Redução de custos operacionais</li>
              <li>Maior segurança para os colaboradores</li>
              <li>Melhor desempenho das máquinas</li>
              <li>Planejamento das paradas</li>
            </ul>
          </section>
        </section>

        <div className={styles.imageContainer}>
          <img
            src={img3}
            alt="Profissional de manutenção com ferramentas"
          />
        </div>
      </main>

      <footer className={styles.footer}>
        © 2026 Manutec - Manutenção Industrial
      </footer>
    </div>
  );
}

export default Manutencao;
