import styles from './styles.module.scss'
import systemRequirements from 'data/systemRequirements.json'

export const SystemRequirements = () => (
  <section
    className="background system-requirements"
    id="section-system-requirements"
  >
    <div className={styles.container}>
      <h3>Como Posso Saber Se Meu PC Roda?</h3>
      <h1>Requisitos Recomendados</h1>

      <div className={styles.requirements}>
        {systemRequirements.map(requirement => (
          <div key={requirement.name}>
            <strong>{requirement.name}:</strong>
            <p>{requirement.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
