import { navlinks } from "@/lib/services";
import Link from "next/link";


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
