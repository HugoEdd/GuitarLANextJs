import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/guitarras.module.css'

export default function Guitarra({ guitarra }) {
  
  const { descripcion, imagen, nombre, precio, url } = guitarra;
  
  return (
    <div className={styles.guitarra}>
      {/* recuerda formats para no mostrar la imagen en alta resolución */}
      {/* Las imagenes por defecto estan en jpg desde cloudinary, pero por defecto las transforma avif */}
      <Image src={imagen.data.attributes.formats.medium.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`} className={styles.enlace}>
            Ver Producto
        </Link>
      </div>
    </div>
  )
}
