import React, { useState } from 'react';
import styles from './styles.module.scss';

export const Banner: React.FC = () => {
  const [isListVisible, setListVisible] = useState<boolean>(false);

  const toggleList = () => {
    setListVisible(prev => !prev);
  };

  return (
    <div className={styles.container}>
      <h1>New Valley</h1>
      <button onClick={toggleList}>
        Jogue Agora!
      </button>
      {isListVisible && (
        <div className={styles.listBox}>
          <ul>
          <li>
              <h3>Qual Cidade Gostaria de Jogar?</h3>
            </li>
            <li>
              <a href="https://discord.gg/FJppc7dsuC" target='_blank'  className={styles.serverButton}>
                New Valley
              </a>
            </li>
            <li>
              <a href="https://discord.gg/NnJAnZQR7V" target='_blank' className={styles.serverButton}>
                New Rj
              </a>
            </li>
            <li>
              <a href="https://discord.gg/wTZPxATtmU" target='_blank' className={styles.serverButton}>
                New Sp
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}