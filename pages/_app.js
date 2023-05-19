import {useState, useEffect} from 'react';
import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : []; // recuperar que pedo con el carrito antes de hacer cuaquier accion
  const [carrito, setCarrito] = useState(carritoLS);
  const [paginaLista, setPaginaLista] = useState(false);
   // localstorage es una api de cliente de navegador, por lo tanto no funciona en el server de next por eso ponemos typeog window etc
    // typeof en caso de que no este como undefined entonces lee los datos de localStorage y caso contrario asigna null, o un arreglo vacío
    // comprobamos que ese codig solo se ejecute en la parte del cliente, y no en el servidor no existe localStoreg
    // jsonParse para convertirlo de un string a un arreglo
    // si no existe en local storage asignale []

    // ? Solucion de la hidratación
  useEffect(() => {
      // una vez que cargue el componente ponemos setPaginaLista a true
      // practicamente de esta manera esperamos a que el documento este listo, hidratado en pocas palabras 
      setPaginaLista(true);
    }, [])

  useEffect(() => {
    // cada que carrito cambio lo vamos a sincronizar con LocalStorage
    // le pasamos nuestro carrito para que lo convierta a un string
    // console.log(carritoLS);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    //console.log('desde useEffect');// este siempre se va a ejecutar al menos una vez, con las nuevas versiones de react dos veces

    // ! Si le damos recargar a la pagina de carrito nos da un error en la hidratacion
    // recuperamos los datos del localstorage pero la parte del servidor no los esta obteniendo, porque ya no hay localstorage
    // next js busca tener los datos del servidor con los datos del cliente, si algo cambia en el cliente lo sincroniza con el servidor

  }, [carrito]); // sincronizamos localstorage cuando cambie carrito

  
  const agregarCarrito = guitarra => {
      // Comprobar si la guitarra ya esta en el carrito...
      if(carrito.some( guitarraState =>  guitarraState.id === guitarra.id )) {
          // Iterar para actualizar la cantidad
          const carritoActualizado = carrito.map( guitarraState => {  
              if( guitarraState.id === guitarra.id ) {
                  guitarraState.cantidad = guitarra.cantidad;
              } 
              return guitarraState;
          });
          // Se asigna al array
          setCarrito([...carritoActualizado]);
          localStorage.setItem('carrito', JSON.stringify( carrito ));
      } else {
          // En caso de que el articulo no exista, es nuevo y se agrega
          setCarrito([...carrito, guitarra]);
          localStorage.setItem('carrito', JSON.stringify( carrito ));
      }
 }

  const eliminarProducto = id => {
      const carritoActualizado = carrito.filter( producto => producto.id != id)
      setCarrito(carritoActualizado)
      window.localStorage.setItem('carrito', JSON.stringify( carrito ));
  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map( guitarraState => {
      if(guitarraState.id === guitarra.id ) {
        guitarraState.cantidad = parseInt( guitarra.cantidad )
      } 
      return guitarraState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify( carrito ));
  }

  // si pagina lista a esta en true, entonces retorna el componente, caso contrario no retornes nada
  return paginaLista ? <Component {...pageProps}
    carrito={carrito}
    agregarCarrito={agregarCarrito}
    eliminarProducto={eliminarProducto}
    actualizarCantidad={actualizarCantidad}  
  /> : null
  // en este component podemos pasarle lo que queremos que aparezca el context
}

export default MyApp;
/*
En Next.js, el archivo _app.js es un componente de nivel superior que se utiliza 
para inicializar el estado global de la aplicación. Este componente se renderiza en cada página de la 
aplicación y se utiliza para aplicar estilos globales y establecer
 el tema de la aplicación. Además, se puede utilizar para agregar lógica adicional de inicialización de la aplicación.
*/