import { Button } from "@/components/Button";
import { Title } from "@/components/Title";

export default function Home() {
  return (
    <div className="p-4 flex gap-3 flex-col items-center justify-center">
      <Title>Memorias em festa</Title>

      <Button color="primary" size="md">
        Primary
      </Button>
      <Button color="secondary" size="sm">
        Secondary
      </Button>
      <Button color="gost" size="lg">
        Gost
      </Button>
      <Button color="gost" size="xl">
        Gost
      </Button>
    </div>
  );
}
