import {useState, useEffect} from "react"
import NavBar from "../../components/NavBar"
import ProjectHeader from "../../components/ProjectHeader"

export default function Details () {

    const [color, setColor] = useState("#222")

    const size = useWindowSize();

    function useWindowSize() { // Hook para detectar el tamaño de pantalla.
        const [windowSize, setWindowSize] = useState({ // Inicializar el estado con altura y anchura undefined así cliente y servidor están coordinados
        width: undefined,
        height: undefined,
    });
  
    useEffect(() => {
        if (typeof window !== 'undefined') { // Este código se ejecuta únicamente del lado del cliente
        function handleResize() { // Función que se ejecuta al cambiar el tamaño de la pantalla
        setWindowSize({ // Cambiar el estado del tamaño de pantalla
          width: window.innerWidth,
          height: window.innerHeight,
        });
        }
        window.addEventListener("resize", handleResize); // Agregar event listener
        handleResize(); // Cuando cambia el tamaño de la pantalla, el handler se ejecuta automáticamente
        return () => window.removeEventListener("resize", handleResize); // Sacar el event listener
      }
      }, []);
      return windowSize;
    }


    return (
        <>
        <NavBar size={size} color={color} iNavRef={"1"} theme={"dark"}/>
        <ProjectHeader/>
        <div style={{color: "white"}}>HOLIS</div>
        </>
    )
}

// export const getServerSideProps = async pageContext => {
//     const pageSlug = pageContext.query.slug
//     console.log(pageSlug)
//     if (!pageSlug) {
//         return {
//             notFound: true
//         }
//     }
// }