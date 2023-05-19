import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import styles from '../styles/grid.module.css';

// Al haber hecho la funcion como export la podemos importar aqui como guitarras - se pasa en automatico via props
export default function Tienda({guitarras}) { // ESTE SI SE RECOMIENDA QUE SEA EN MAYUSCULA

  return (
    <Layout title={'Tienda Virtual'} description="Tienda virtual, venta de guitarras, instrumentos, GuitarLA">
        <main className="contenedor">
          <h2 className="heading">Nuestra Colección</h2>

        {/* <ListadoGuitarras guitarras={guitarras} /> PODEMOS RENDERIZARLO DIRECTAMENTE */}
        <div className={styles.grid}>
          {guitarras?.map(guitarra => (
            <Guitarra 
                key={guitarra.id}
                guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>
   </Layout>
  )
}

// Va a ser una generacion estatica - es decir esta informacion no se va a estar regenerando con cada visita del usuario
// Recuerda primero se ejecuta la parte del servidor y despues la parte del cliente

// export async function getStaticProps() {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//   const {data: guitarras} = await respuesta.json();

//   return {
//     props: {
//       guitarras
//     }
//   }
// }


// ?Consultar API con getServerSideProps
export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const {data: guitarras} = await respuesta.json();

  return {
    props: {
      guitarras
    }
  }
}


/*
Consultar datos en nextjs - consumir API
Next Ofrece diferentes formas de obtener datos 
getServerSideProps - se utiliza solo
la mas comun de todas es getServerSideProps (server side rendering - SSR) - Los datos se obtienen en cada request

Estos dos de abajo se utiliza en conjunto
getStaticProps - Obtener datos cuando se crea el build (static site generation - SSG)

getStaticPaths - Obtener el listado de páginas que se van a crear
cuando se realiza el build (Static Site Generation)

Estas funciones solo se pueden usar en la carpeta de pages
LAS DE ARRIBA SON FORMAS EN EL LADO DEL SERVIDOR

LO PODEMOS REALIZAR EN EL LADO DEL SERVIDOR

DEL LADO DEL CLIENTE
Client Side -  useEffect con fetch o SWR

Cuando utilizar Static Props y ServerSideProps
Utiliza ServerSideProps cuando la informacion cambia de forma continua
en cada request o donde la página se actualiza cada poco tiempo
*/

