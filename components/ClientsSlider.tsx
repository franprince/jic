import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import { ILogos } from "./Clients";

type SliderProps = {
  width: number;
};

// Este componente está basado en este código: https://codepen.io/FranPrince/pen/oNjMGrO

const infiniteScroll = (width: number) =>
  keyframes(`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-${width / 2}px);
  }
`);

const SliderContainer = styled.div<SliderProps>`
  $animationSpeed: 40s;

  .slider {
    background: white;
    height: 100px;
    margin: auto;
    overflow: hidden;
    position: relative;
    width: 100vw;

    &::before,
    &::after {
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      content: "";
      height: 100px;
      position: absolute;
      width: 200px;
      z-index: 2;
    }
    &::after {
      right: 0;
      top: 0;
      transform: rotateZ(180deg);
    }

    &::before {
      left: 0;
      top: 0;
    }
  }
  .slide-track {
    animation: ${(props) => infiniteScroll(props.width)} 40s linear infinite;
    display: flex;
    width: ${(props) => props.width}px;
    gap: 50px;
  }

  .slide {
    align-self: center;
  }
`;

const ClientsSlider = ({ logos }: ILogos) => {
  const logoArray = [...logos, ...logos]; // Para lograr el efecto de scroll infinito se duplican los logos.
  const logoWidth = logos.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.dimensions.width + 50,
    0
  ); // Calcula el ancho total del slider sumando el ancho de cada logo más 50px de gap.

  return (
    <SliderContainer width={logoWidth * 2}>
      <div className="slider">
        <div className="slide-track">
          {logoArray.map((logo, index) => {
            return (
              <div className="slide" key={`marca-${index}`}>
                <Image
                  src={logo.imgUrl}
                  // Se puede agrgar el alt desde Sanity, si no lo encuentra usa un string vacío.
                  alt={logo.alt ?? ""}
                  width={logo.dimensions.width}
                  height={logo.dimensions.height} />
              </div>
            );
          })}
        </div>
      </div>
    </SliderContainer>
  );
};

export default ClientsSlider;
