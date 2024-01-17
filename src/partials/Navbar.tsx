import { Logo } from "../components/Logo";
import { NavbarTwoColumns } from "../components/NavbarTwoColumns";
import { NavMenu } from "../components/NavMenu";
import { NavMenuItem } from "../components/NavMenuItem";
import { Section } from "../components/Section";

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/" className="text-2xl font-bold">
        <img src='/assets/images/icons8-casa.svg' alt="" />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts/">Posts</NavMenuItem>
        <NavMenuItem href="/">Projects</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
