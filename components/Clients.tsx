import styles from "../styles/Clients.module.scss";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { useContext } from "react";
import ColorContext from "./context/ColorContext";
import ClientSlider from "./ClientsSlider";
import { useWindowSize } from "../hooks/useWindowSize";

interface ClientsProps {
  clients: [logo: ILogos];
}

export interface ILogos {
  logos: {
    imgUrl: string;
    imgData: { width: number; height: number };
  }[];
}

const Clients = ({ clients }: ClientsProps) => {
  const { colorBlack } = useContext(ColorContext); // colorWhite y colorBlack son funciones que cambian el color en el context.
  const logos = [...clients[0].logos];
  const size = useWindowSize();
  return (
    <InView
      rootMargin="0px 0px -90%"
      as="section"
      onChange={(InView) => InView && colorBlack()}
      className={styles.clients}
    >
      <h2 className={styles.title}>Marcas que confiaron en mí</h2>
      <div className={styles.container}>
        <div className={styles.grid}>
          {size.width && size.width > 900 ? (
            logos.map((logo, index) => {
              return (
                <div className={styles.logo}>
                  <Image
                    key={`marca-${index}`}
                    src={logo.imgUrl}
                    alt="cliente"
                    layout="fixed"
                    width={logo.imgData.width}
                    height={logo.imgData.height}
                  />
                </div>
              );
            })
          ) : (
            <ClientSlider logos={logos} />
          )}
        </div>
      </div>
    </InView>
  );
};

export default Clients;
