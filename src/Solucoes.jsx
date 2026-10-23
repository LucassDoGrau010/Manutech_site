
import { Link } from 'react-router';
import styles from './Solucoes.module.css';

import img5 from './assets/img5.png'

function Solucoes() {
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
        <h2>Nossas Soluções</h2>

        <section className={styles.description}>
          <p>
            A Manutech oferece soluções completas em manutenção
            industrial, ajudando empresas a manter suas máquinas e
            equipamentos em boas condições de funcionamento.
            Nossos serviços incluem manutenção preventiva, para
            evitar falhas e reduzir paradas inesperadas; manutenção
            corretiva, para solucionar problemas nos equipamentos;
            inspeções industriais, para identificar possíveis riscos;
            e acompanhamento de chamados, para facilitar o controle
            dos serviços solicitados. Nosso objetivo é aumentar a
            segurança, reduzir custos e melhorar a produtividade das
            indústrias por meio de soluções eficientes e tecnológicas.
          </p>
        </section>

        <div className={styles.imageContainer}>
          <img
            src={img5}
            alt="Profissional de manutenção industrial com ferramentas"
          />
        </div>
      </main>

      <footer className={styles.footer}>
        © 2026 Manutec - Manutenção Industrial
      </footer>
    </div>
  );
}

export default Solucoes;
