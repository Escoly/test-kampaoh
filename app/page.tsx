import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex gap-4">
      <Button as={Link} href="/owners">
        Dueños
      </Button>
      <Button as={Link} href="/search">
        Buscar
      </Button>
      <Button as={Link} href="/pro">
        Pro
      </Button>
    </section>
  );
}
