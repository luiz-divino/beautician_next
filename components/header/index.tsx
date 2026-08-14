import Link from "next/link";

const navlinks = [
  { label: "Serviços", href: "#services" },
  { label: "Antes e Depois", href: "#result" },
  { label: "Sobre mim", href: "#about" },
  { label: "Serviços", href: "#services" },
];

export const Header = () => {
  return (
    <section>
      <nav>
        {navlinks.map((item) => (
          <ul key={item.label}>
            <li>
              <Link href={item.href}>{item.label}</Link>
            </li>
          </ul>
        ))}
      </nav>
    </section>
  );
};
