import { cities } from "@/lib/data";
import Link from "next/link";
import { StyledUl, StyledHeader, Container, Button } from "@/styles";

export default function Cities() {
  return (
    <>
      <Container>
        <Button>
          <Link href="../">Home</Link>
        </Button>
        <StyledHeader>Cities</StyledHeader>
        <StyledUl>
          {cities.map((city) => (
            <li key={city.id}>
              <Link href={`/cities/${city.slug}`}>{city.name}</Link>
            </li>
          ))}
        </StyledUl>
      </Container>
    </>
  );
}
