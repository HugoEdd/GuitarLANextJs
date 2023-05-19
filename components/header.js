import Image from 'next/image'; 
// tenemos otro que es future pero hacen lo mismo, actualmente es mejor utilizar future, no pone tanto htl en el renderizado
// actualmente solo importa next/image
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css'; // styles hace referencia a la hoja de estilos en general


export default function Header() {

    const router = useRouter();
    console.log(router);

  return (  
    <header className={styles.header}>
          <div className={`contenedor ${styles.barra}`}>
            <Link href={'/'}>
                  {/* el primer hijo no va a ser un componente sino que un enlace */}
                    <Image src="/img/logo.svg" width={300} height={40} alt='imagen logotipo' />
            </Link>

              <nav className={styles.navegacion}>
                  {/* para agregarles estilos debemos que poner los datos dentro de <a className='{styles.enlace}></a> */}
                  {/* con la actualizacion YA PODEMOS colocalr el classLink dentro del Link */}
                <Link href="/" className={ router.pathname === '/' ? styles.active : '' }>Inicio</Link>          
                <Link href="/nosotros" className={ router.pathname === '/nosotros' ? styles.active : '' }>Nosotros</Link>
                <Link href="/tienda" className={ router.pathname === '/tienda' ? styles.active : '' }>Tienda</Link>                
                <Link href="/blog" className={ router.pathname === '/blog' ? styles.active : '' }>Blog</Link>    
                <Link href="/carrito"><Image width={30} height={25} src="/img/carrito.png" alt="imagen carrito"/></Link>
            </nav>
              
          </div>
    </header>    
  )
}
