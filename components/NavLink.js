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
    <Link href={link} key={id} legacyBehavior>
      <a onClick={handleRef} target={text === "PODCAST" ? "_blank" : ""}>
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
      </a>
    </Link>
  );
}
