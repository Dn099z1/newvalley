import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import styles from './styles.module.scss'

type Language = 'br'

const LANGUAGES: Language[] = ['br']

export const Header = () => {
  const [activeLanguage, setActiveLanguage] = useState<Language>('br')
  const [toggleLanguages, setToggleLanguages] = useState<boolean>(false)

  const [activeToggle, setActiveToggle] = useState<boolean>(false)

  const handleChangeLanguage = (language: Language) => {
    setActiveLanguage(language)
    setToggleLanguages(false)
  }

  return (
    <header className={styles.container} id="header">
      <img src="https://media.discordapp.net/attachments/1287220134150144131/1302137089738936380/valley_sem_fundo.png?ex=672a50ea&is=6728ff6a&hm=adfe236ae9f2bd4edf71d5bf8267793509533fb06948868d99ad8afad87d4fb9&=&format=webp&quality=lossless&width=559&height=559" alt="Logo New Group" />

      <nav className={styles.navigation}>
        <ul className={activeToggle ? styles.active : ''}>
          <li onClick={() => setActiveToggle(false)}>
            <a href="">Inicio</a>
          </li>
          <li onClick={() => setActiveToggle(false)}>
            <a href="#section-about">Por Que Jogar Aqui?</a>
          </li>
          <li onClick={() => setActiveToggle(false)}>
            <a href="#section-features">Como Iniciar?</a>
          </li>
          <li onClick={() => setActiveToggle(false)}>
            <a href="#section-system-requirements">Requisitos</a>
          </li>
          <li onClick={() => setActiveToggle(false)}>
            <a href="#section-quotes">Criadores</a>
          </li>
        </ul>
      </nav>

      <div className={styles['navigation-right']}>
        <div className={styles.languages}>
          <button
            type="button"
            onClick={() => setToggleLanguages(!toggleLanguages)}
          >
            {activeLanguage} <FaChevronDown />
          </button>

          <ul className={toggleLanguages ? styles.active : ''}>
            {LANGUAGES.map(language => (
              <li
                key={language}
                onClick={() => handleChangeLanguage(language)}
                className={
                  language === activeLanguage ? styles['selected-language'] : ''
                }
              >
                {language}
              </li>
            ))}
          </ul>
        </div>

        <a href="https://discord.gg/FJppc7dsuC">
        <FaDiscord />
        </a>

        <a href="https://www.instagram.com/newvalleygg/" className={styles.iconSpacing}>
        <FaInstagram />
        </a>

        <button
          type="button"
          className={`${styles.toggle} ${
            activeToggle ? styles['toggle-active'] : ''
          }`}
          onClick={() => setActiveToggle(!activeToggle)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
