import { useState } from 'react'
import styles from './styles.module.scss'

export const About = () => {
  const [images, setImages] = useState<string[]>([
  ])
  const [activeImage, setActiveImage] = useState<string>('screenshot-1.png')



  return (
    <section className="background about" id="section-about">
      <div className={styles.content}>
        <div className={styles.description}>
          <h3>Por Que Jogar Aqui?</h3>
          <h1>Sistemas Interativos</h1>
          <p>
            Nós Possuimos Diversos Sistemas Para Contribuir Com Seu Roleplay,
            Desde Missões, Fugas e até roubos e diversas profissões, aqui você pode ser oque quiser!
            Literamente.
          </p>
          <p>
            {' '}
            <span></span>
          </p>
        </div>

        <div className={styles.carousel}>
          <ul>
            {images.map(image => (
              <li key={image} className={styles.image}>
                <img src={image} alt="" />
              </li>
            ))}
          </ul>

        
        </div>
      </div>
    </section>
  )
}
