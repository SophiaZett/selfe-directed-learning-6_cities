import Link from "next/link";
import { StyledHeader, StyledUl, Container, Image } from "@/styles";

export default function HomePage() {
  return (
    <>
      <Container>
        <StyledHeader>Big City App</StyledHeader>
        <StyledUl>
          <Link href="/cities">Go to see some selected Cities</Link>
          <Image
            src="https://images.unsplash.com/photo-1620225033627-bd0a24bb87c2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </StyledUl>
      </Container>
    </>
  );
}
