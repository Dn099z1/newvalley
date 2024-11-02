import Link from 'next/link'
import { FaGithub } from "react-icons/fa";

import styles from './styles.module.scss'

export const Footer = () => (
  <footer className={styles.container}>
    <div className={styles.links}>
      <img src="logo.png" alt="" />
      <ul>
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="#section-about">Sobre Nós</a>
        </li>
        <li>
          <a href="#section-features">Tutorial</a>
        </li>
        <li>
          <a href="#section-system-requirements">Requisitos</a>
        </li>
        <li>
          <a href="#section-quotes">Criadores</a>
        </li>
      </ul>

      <div className={styles['social-media']}>
        <Link href="https://github.com/BeDebona">
          <a target="_blank">
            <FaGithub  />
          </a>
        </Link>
        <Link href="https://github.com/Dn099z1">
          <a target="_blank">
            <FaGithub  />
          </a>
        </Link>
      </div>
    </div>
    <div className={styles.content}>
      <h6> © 2024 New Group Development, Inc. Todos Os Direitos Reservados</h6>

    </div>
  </footer>
)
