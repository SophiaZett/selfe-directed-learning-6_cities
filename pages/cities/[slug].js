import { cities } from "@/lib/data";
import { useRouter } from "next/router";

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
      <h1>{city.name}</h1>
      <p>{city.description}</p>
    </>
  );
}
