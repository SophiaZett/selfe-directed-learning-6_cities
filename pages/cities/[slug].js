import { cities } from "@/lib/data";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, StyledHeader, Container, Image } from "@/styles";

export default function City() {
  const router = useRouter();

  if (!router.query) {
    return null;
  }
  const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return null;
  }

  return (
    <>
      <Container>
        <Button>
          <Link href="/cities">Back</Link>
        </Button>
        <StyledHeader>{city.name}</StyledHeader>
        <p>Country: {city.country}</p>
        <p>Inhabitants: {city.population}</p>
        <Image src={city.imageSource} />
        <p>{city.description}</p>
      </Container>
    </>
  );
}
