
import { useState } from 'react';
import styles from './Login.module.css';

function Login() {
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
  }

  function criarConta(event) {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    alert('Cadastro preenchido com sucesso!');
  }

  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <a href="/servicos">Serviços</a>
        <a href="/manutencao">Manutenção</a>
        <a href="/chamado">Abrir Chamado</a>
        <a href="/solucoes">Soluções</a>
        <a href="/sobre">Sobre</a>
        <a href="/login">Login</a>
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
            src="/login-security.png"
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
