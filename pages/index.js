// componente optimizado para el router
import Layout from '../components/layout';
import Guitarra from '../components/guitarra';
import Post from '../components/post';
import Curso from '../components/curso';
import styles from '../styles/grid.module.css';


export default function index({ guitarras, posts, curso }) {
  
  // console.log(guitarras);
  // console.log(posts);
    // console.log(curso);

  return (
    <>
      <Layout title={'Inicio'} description={'Blog de música, venta de guitarras y más'}>

        <main className="contenedor">
          <h1 className="heading">Nuestra Colección</h1>
           <div className={styles.grid}>
          {guitarras?.map(guitarra => (
            <Guitarra 
                key={guitarra.id}
                guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>

        <Curso curso={curso} />
        

        <section className='contenedor'>
          <h2 className='heading'>Blog</h2>
           <div className={styles.grid}>
          {posts?.map(post => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>

        </section>
      </Layout>
    </>
  )
}

// como en este caso no hay routing dinamico no es ncesario usar getStaticPaths
// si es dinamico puedes usar ambos
export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`;

  // recuerda que aqui vamos a tener un problema por utilizar dos veces async y await
  const [ resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
    // nos regresa una respuesta en el mismo orden
  ]);

  // ahora ya accedmos al resultado de esa consulta
  // trae los resultados como data y los renombramos a guitarras
  const [{ data: guitarras }, { data: posts }, {data: curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ]);

  // console.log(guitarras);
  // console.log(posts);

  return {
    props: {
      guitarras,
      posts,
      curso
    }
  }
}
