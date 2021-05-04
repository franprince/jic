import styles from "../styles/Separator.module.css"
import {Parallax} from "react-parallax"
import { useState, useEffect } from 'react';


export default function Separator ({img, mobileImg}) {

    const size = useWindowSize();

        // Hook para modificar la imagen según el tamaño de pantalla
    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

    useEffect(() => {
      // only execute all the code below in client side
    if (typeof window !== 'undefined') {
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

    var strength = 0
    var bg

    if (size.width > 600) {
        strength = 500
        bg = img
    } else {
        strength = 400
        bg = mobileImg
    }

    return (
        <>
        <div className={styles.wrapper}>
            <Parallax bgImage={ bg } className={styles.separator} strength={strength}>
            </Parallax>
        </div>
        </>
    )
}