
import { Link } from 'react-router-dom';
import styles from './Cliente.module.css';

import img10 from './assets/img10.png'

function Cliente() {
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
          <h2>Área do Cliente</h2>
          <h3>Acompanhamento de Chamados</h3>
          <p>
            Consulte o status e as últimas atualizações dos seus chamados
            de manutenção.
          </p>
        </section>

        <section className={styles.ticket}>
          <h3>Chamado #1024</h3>
          <ul>
            <li>Equipamento: Prensa Industrial</li>
            <li>Data da Solicitação: 21/10/2026</li>
            <li>Tipo de Manutenção: Corretiva / Preventiva</li>
            <li>Prioridade: Alta</li>
            <li>Solicitante: [Nome do Solicitante / Setor]</li>
            <li>
              Técnico Responsável: [Nome do Técnico atribuído]
            </li>
            <li>Status: Em Andamento</li>
          </ul>
        </section>

        <div className={styles.illustration}>
          <img
            src={img10}
            alt="Análise e acompanhamento de chamados de manutenção"
          />
        </div>

        <section className={styles.infoCard}>
          <h3>Informações</h3>
          <div className={styles.infoText}>
            <p>
              Problema Relatado: Apresentando ruído excessivo durante
              o ciclo de prensagem e perda de pressão hidráulica.
            </p>

            <p>Histórico / Ações Realizadas:</p>
            <ul>
              <li>21/10/2026 - 08:00: Chamado aberto no sistema.</li>
              <li>
                21/10/2026 - 08:30: Equipe técnica notificada e análise
                preliminar agendada.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.actionsCard}>
          <h3>Ações Disponíveis</h3>
          <ul>
            <li>
              Novo Chamado: Adicionar uma nova solicitação de manutenção.
            </li>
            <li>
              Adicionar Comentário / Atualização: Enviar observações para
              a equipe responsável.
            </li>
            <li>
              Anexar Arquivos: Incluir fotos ou relatórios de erro.
            </li>
          </ul>
        </section>

        <a href="/chamado" className={styles.newButton}>
          Novo Chamado
        </a>
      </main>

      <footer className={styles.footer}>
        © 2026 Manutec - Manutenção Industrial
      </footer>
    </div>
  );
}

export default Cliente;
