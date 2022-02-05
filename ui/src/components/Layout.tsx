import { Container } from "reactstrap";
import NavMenu from "./NavMenu";

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavMenu />
      <Container>{children}</Container>
    </div>
  );
}
