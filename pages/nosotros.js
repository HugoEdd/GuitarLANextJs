import Image from 'next/image';
import Layout from "../components/layout";
import styles from '../styles/nosotros.module.css';

export default function Nosotros() { // ESTE SI SE RECOMIENDA QUE SEA EN MAYUSCULA
    return (
    <Layout title={'Nosotros'} description="Sobre nosotros, guitarLA, tienda de música">
        
        <main className="contenedor">
          <h1 className="heading">Nosotros</h1>

          <div className={styles.contenido}>
            
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>

            <div>
              <p>Nunc est mauris, bibendum sed dapibus vitae, fermentum et odio. Fusce consectetur varius enim, id venenatis nisl malesuada at. Etiam auctor sapien sit amet ante efficitur, ac eleifend eros feugiat. Donec ac sagittis augue, vitae bibendum erat. 
              </p>

              <p>
                Nunc aliquam vestibulum sem, consequat rutrum eros congue sed. Mauris dapibus placerat felis, quis imperdiet velit. Nullam id metus ullamcorper, lobortis elit eget, pretium ligula. Donec consequat sagittis dolor at vehicula. Phasellus vel rutrum massa.
              </p>
            </div>
          </div>
        </main>

   </Layout>
  )
}


