import Link from "next/link";

export default function NavLink({
  navRef,
  handleRef,
  id,
  text,
  link,
  className,
}) {
  return (
    <Link
      onClick={handleRef}
      target={text === "PODCAST" ? "_blank" : ""}
      href={link}
      key={id}
    >
      <li
        id={id}
        className={className}
        style={
          navRef.current == id
            ? { fontWeight: "700", pointerEvents: "none" }
            : { fontWeight: "300" }
        }
      >
        {text}
      </li>
    </Link>
  );
}
