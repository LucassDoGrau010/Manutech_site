
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

import img9 from './assets/img9.png'

function Login() {
  const navigate = useNavigate();
  const [emailLogin, setEmailLogin] = useState('');
  const [senhaLogin, setSenhaLogin] = useState('');

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  function entrar(event) {
    event.preventDefault();
    alert('Formulário de login enviado!');
    navigate('/cliente');
  }

  function criarConta(event) {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    alert('Cadastro preenchido com sucesso!');
    navigate('/cliente');
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
        <section className={styles.forms}>
          <h2>Cadastro</h2>

          <form onSubmit={entrar} className={styles.form}>
            <input
              type="email"
              placeholder="E-mail"
              value={emailLogin}
              onChange={(e) => setEmailLogin(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Senha"
              value={senhaLogin}
              onChange={(e) => setSenhaLogin(e.target.value)}
              required
            />

            <button type="submit">Entrar</button>
          </form>

          <h2 className={styles.loginTitle}>Login</h2>

          <form onSubmit={criarConta} className={styles.form}>
            <input
              type="text"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Idade"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              min="1"
              max="120"
              required
            />

            <input
              type="text"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              maxLength={14}
              required
            />

            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              minLength={6}
              required
            />

            <input
              type="password"
              placeholder="Confirmar a senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
              minLength={6}
              required
            />

            <button type="submit">Criar</button>
          </form>
        </section>

        <div className={styles.illustration}>
          <img
            src={img9}
            
            alt="Ilustração de login e segurança"
          />
        </div>
      </main>

      <footer className={styles.footer}>
        © 2026 Manutec - Manutenção Industrial
      </footer>
    </div>
  );
}

export default Login;
