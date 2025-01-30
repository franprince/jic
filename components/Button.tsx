import Link from "next/link";
import styles from "../styles/Button.module.scss";

interface ButtonProps {
  link: string;
  text: string;
  hoverColor?: "white" | "black";
}

const Button = ({ link, text, hoverColor = "black" }: ButtonProps) => (
  <Link href={link}>
    <button
      className={hoverColor === "black" ? styles.button : styles.buttonAlt}
    >
      {text}
    </button>
  </Link>
);

export default Button;
