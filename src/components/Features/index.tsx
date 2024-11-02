import { useState } from 'react'
import styles from './styles.module.scss'

export const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0)

  return (
    <section
      className="background features"
      style={{ backgroundPosition: 'top' }}
      id="section-features"
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>Como Jogar no servidor?</h3>
          <h1>Tutorial</h1>

          <ul className={styles.features}>
            <li
              onClick={() => setActiveFeature(0)}
              className={activeFeature === 0 ? styles.active : ''}
            >
              <span />
              <strong>New Group</strong>
              <p>
                Primeiro Entre No Nosso Discord, Abra O Fivem, Aperte F8 
                E Utilize Este Comando: connect iptest.test
              </p>
            </li>
            <li
              onClick={() => setActiveFeature(1)}
              className={activeFeature === 1 ? styles.active : ''}
            >
              <span />
              <strong>Obtenha O ID</strong>
              <p>
                Ao Tentar Entrar Na Cidade, Em Sua Tela Aparecerá Seu ID!
                Guarde Ele Em Sua Mente, Ou Copie.
              </p>
            </li>
            <li
              onClick={() => setActiveFeature(2)}
              className={activeFeature === 2 ? styles.active : ''}
            >
              <span />
              <strong>FAÇA A WHITELIST</strong>
              <p>
                Agora,Faça Sua Whitelist Pelo Discord Preencha O Formulario De Forma Correta Respondendo Perguntas E Pronto! é só esperar um dos nossos staffs Analisar Seu Formulario, se não houver Staff, uma Inteligencia Artifical Irá Analisar!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
