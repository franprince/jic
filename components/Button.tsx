import Link from "next/link";
import styles from "../styles/Button.module.scss";

interface ButtonProps {
  link: string;
  text: string;
  backgroundColor?: "white" | "black";
}

const Button = ({ link, text, backgroundColor = "white" }: ButtonProps) => (
  <Link href={link}>
    <button
      className={backgroundColor === "white" ? styles.button : styles.buttonAlt}
    >
      {text}
    </button>
  </Link>
);

export default Button;
