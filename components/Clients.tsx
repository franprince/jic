import styles from "../styles/Clients.module.scss";
import Image from "next/legacy/image";
import { InView } from "react-intersection-observer";
import { useContext } from "react";
import ColorContext from "./context/ColorContext";
import { ClientsSlider } from "./index";
import { useWindowSize } from "../hooks/useWindowSize";

interface ClientsProps {
  clients: [logo: ILogos];
}

export interface ILogos {
  logos: {
    imgUrl: string;
    alt: string | null;
    dimensions: { width: number; height: number };
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
      <h2 className={styles.title}>
        {size.width && size.width > 700
          ? "Marcas que confiaron en mí"
          : "Clientes"}
      </h2>
      <div className={styles.container}>
        <div className={styles.grid}>
          {size.width && size.width > 900 ? (
            logos.map((logo, index) => {
              return (
                <div className={styles.logo} key={`marca-${index}`}>
                  <Image
                    src={logo.imgUrl}
                    alt={logo.alt ?? ""}
                    layout="fixed"
                    width={logo.dimensions.width}
                    height={logo.dimensions.height}
                  />
                </div>
              );
            })
          ) : (
            <ClientsSlider logos={logos} />
          )}
        </div>
      </div>
    </InView>
  );
};

export default Clients;
