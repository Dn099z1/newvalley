import { useState } from 'react';
import styles from './styles.module.scss';

export const Newsletter = () => {
  const [email, setEmail] = useState<string>('');
  const [hasFocusInput, setHasFocusInput] = useState<boolean>(false);

  const handleRedirect = (e: React.FormEvent) => {
    e.preventDefault(); 
    window.open('https://youtube.com', '_blank');
  };

  return (
    <section>
      <div className={styles.container} id="section-newsletter">
        <img src="toten.png" alt="" />

        <div className={styles.content}>
          <h3>Procura Ser Staff??</h3>
          <h1>Envie Seu Email Haverá Contato</h1>

          <p>
          Para Participar Da Equipe Do New Group Você Deve Ter Mais De 16 Anos!<br />
          Faça o nosso formulário!
          </p>

          <form className={styles.form} onSubmit={handleRedirect}>
            <button type="submit">Realizar Formulario</button>
          </form>
        </div>
      </div>
    </section>
  );
};