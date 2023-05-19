import { Html, Head, Main, NextScript } from 'next/document'
// este archivo esta un poco mas arriba del app.js
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="GuitarLA - Venta de guitarras y blog de música" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

/*
Por otro lado, el archivo _document.js se utiliza para personalizar el marcado HTML y el estilo
 inicial de la aplicación. Este componente se renderiza en el servidor y se utiliza para agregar hojas de estilo
 globales y scripts externos que se aplican a todas las páginas de la aplicación. 
 También se puede utilizar para agregar metadatos personalizados, como etiquetas meta o title.
 */