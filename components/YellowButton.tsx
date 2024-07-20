import Link from "next/link";
import styles from "../styles/YellowButton.module.scss";

interface ButtonProps {
  link: string;
  text: string;
  hoverColor?: "white" | "black";
}

const YellowButton = ({ link, text, hoverColor = "black" }: ButtonProps) => (
  <Link href={link} legacyBehavior>
    <button
      className={hoverColor === "black" ? styles.button : styles.buttonAlt}
    >
      {text}
    </button>
  </Link>
);

export default YellowButton;
