import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function layout({children, title = '', description = ''}) { // children es todo lo que le pases
  return (
      <>
        <Head>
              <title>{`GuitarLA - ${title}`}</title>
              <meta name="description" content={description} />
        </Head>

        <Header />
        {children}
        <Footer />
    </>
  )
}

// ? Este componente se va a utilizar en todas las paginas