import { useState } from 'react';
import Image from "next/image";
import styles from '../../styles/guitarras.module.css';
import Layout from "../../components/layout";
// leer el parametro dinamico
export default function Producto({guitarra, agregarCarrito}) {
/* Acceder a la informacion del url
   import { useRouter } from 'next/router';
   const router = useRouter();
   console.log(router);
 */

    // console.log(guitarra[0].attributes.nombre);
// Mostrar informacion de la guitarra - no requerimos la url, por que ya estamos viendo la guitarra
    const [cantidad, setCantidad] = useState(0); //iniciamos en 0 osea esa cantidad no es valida
    const { nombre, descripcion, imagen , precio } = guitarra[0].attributes;

    const handleSubmit = e => {
        e.preventDefault()

        if (cantidad < 1) {
            alert('Cantidad no válida')
            return;
        }

        // Construir un obj con la Guitarra que se agrego al carrito
        const guitarraSeleccionada = {
            id: guitarra[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad
        }

        // Pasando la informacion al context - recuerda que next ya tiene su propio context
        agregarCarrito(guitarraSeleccionada);

    }
  return (
      <Layout title={`Guitarra ${nombre}`}>
        <div className={styles.guitarra}>
        {/* recuerda formats para no mostrar la imagen en alta resolución */}
        {/* Las imagenes por defecto estan en jpg desde cloudinary, pero por defecto las transforma avif */}
        <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

        <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            
            <form className={styles.formulario} onSubmit={handleSubmit}>
                <label htmlFor="cantidad">
                    Cantidad:
                </label>

                <select onChange={e => setCantidad(+e.target.value)} id="cantidad">
                    {/* con el + lo transformamos a entero */}
                    <option value="0">-- Seleccione --</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

        <input type="submit" value="Agregar al carrito" />
            </form>
        </div>
        </div>
    </Layout>
  )
}

// ? Router dinamico con getServerSideProps
// en esta funcion se va a pasar automaticamente una serie de datos

export async function getStaticPaths() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras`);
    const { data } = await respuesta.json();

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }));

    return {
        paths,
        fallback: false
    }
    // fallback: false - al no encontrar la ruta te genera un false 404
}

export async function getStaticProps({params: { url }}) {


    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const { data: guitarra } = await respuesta.json();

    return {
        props: {
            guitarra
        }
    }
}

/* 
export async function getServerSideProps({query: { url }}) {


    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
    const { data: guitarra } = await respuesta.json();

    return {
        props: {
            guitarra
        }
    }
} */