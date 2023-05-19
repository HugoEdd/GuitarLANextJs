import styles from '../styles/curso.module.css';

export default function Curso({curso}) {

  const { contenido, imagen, titulo } = curso.attributes;

  return (
    // este section va a tener la imagen de fondo, el primer div de la izquierdo queda vacio, y este lo posiciona del lado derecho
    <section className={`${styles.curso} curso`}>
      {/* le agregamos curso, para en la parte de abajo poder seleccionarlo con curso */}
      {/* esta sintaxis de css es muy fea, solo utilizarla como ultimo recurso */}
      <style jsx>{`
        .curso {
          background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${imagen?.data?.attributes?.url});
        }
      `}</style>
      <div className={`contenedor ${styles.grid}`}>
        <div className={styles.contenido}>
          <h2 className='heading'>{titulo}</h2>
          <p>{contenido}</p>
        </div>
      </div>
    </section>
  )
}
