

import { Link } from 'react-router-dom';
import styles from './App.module.css';

import img6 from './assets/img6.png'

function App() {
  const entrar = () => {
    alert('Bem-vindo ao Manutec Industrial!');
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Manutec Industrial</h1>
      </header>

      <section className={styles.banner}>
        <img
          src={img6}
          alt="Logo Manutec Industrial"
          className={styles.logo}
        />

        <p className={styles.slogan}>
          "Manutenção inteligente para uma
          <br />
          indústria mais eficiente."
        </p>
      </section>

      <main className={styles.main}>
       
          <img src="" alt="" />
      

        <p className={styles.services}>
          Conheça nossos serviços
        </p>

        <span className={styles.arrow} aria-hidden="true">
          ↓
        </span>

        <Link
          className={styles.enterButton}
          to='/servicos'
        >
          Entrar
        </Link>
      </main>

      <footer className={styles.footer}>
        © 2026 Manutec - Manutenção Industrial
      </footer>
    </div>
  );
}

export default App;
