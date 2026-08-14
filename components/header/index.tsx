import { navlinks } from "@/lib/services";
import Link from "next/link";
import { Navbar } from "../navbar-mobile";


export const Header = () => {
  return (
    <section>
        <Navbar/>
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
