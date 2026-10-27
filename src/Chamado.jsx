
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Chamado.module.css';

import img7 from './assets/img7.png'

function Chamado() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [equipamento, setEquipamento] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [chamado, setChamado] = useState(null);

  function enviarChamado(event) {
    event.preventDefault();

    setChamado({
      numero: Math.floor(1000 + Math.random() * 9000),
      equipamento,
      tipo,
      descricao,
      nome,
      email,
      status: 'Em análise',
    });
  }

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
        <section className={styles.formSection}>
          <h2>Abrir Chamado</h2>

          <form className={styles.form} onSubmit={enviarChamado}>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Equipamento"
              value={equipamento}
              onChange={(e) => setEquipamento(e.target.value)}
              required
            />

            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              required
            >
              <option value="" disabled>
                Tipo de manutenção
              </option>
              <option value="Preventiva">Preventiva</option>
              <option value="Corretiva">Corretiva</option>
              <option value="Inspeção">Inspeção</option>
            </select>

            <textarea
              placeholder="Descreva o problema"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />

            <button type="submit" className={styles.submitButton}>
              Enviar chamado
            </button>
          </form>
        </section>

        <section className={styles.tracking}>
          <h2>Acompanhamento</h2>

          {chamado ? (
            <div className={styles.ticket}>
              <h3>Chamado #{chamado.numero}</h3>
              <p>Equipamento: {chamado.equipamento}</p>
              <p>Tipo: {chamado.tipo}</p>
              <p>Solicitante: {chamado.nome}</p>
              <p className={styles.status}>{chamado.status}</p>
            </div>
          ) : (
            <div className={styles.ticket}>
              <h3>Chamado #1024</h3>
              <p>Equipamento: Prensa Industrial</p>
              <p className={styles.status}>Em análise</p>
            </div>
          )}

          <button
            type="button"
            className={styles.supportButton}
            onClick={() =>
              document.getElementById('form-chamado')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            src={img7}
          </button>
        </section>
      </main>
            
      <footer className={styles.footer}>
        © 2026 Manutec - Manutenção Industrial
      </footer>
    </div>
  );
}

export default Chamado;
