import { Button } from '@/components/Button';
import { Title } from '@/components/Title';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 p-4">
      <Title>Exemplo de Título H1</Title>
      <Title as="h2" size="lg" weight="semibold">
        Exemplo de Título H2
      </Title>
      <Title as="h3" className="text-red-500" size="md" weight="medium">
        Exemplo de Título H3
      </Title>
      <Title as="h4" className="text-blue-500" size="sm" weight="normal">
        Exemplo de Título H4
      </Title>

      <Button color="primary" fontSize="text-sm" size="sm">
        Primary
      </Button>
      <Button color="secondary" fontSize="text-base" size="md">
        ➕ Secondary
      </Button>
      <Button color="gost" fontSize="text-lg" size="lg">
        Gost
      </Button>
      <Button color="gost" fontSize="text-xl" size="w-full">
        Gost
      </Button>
    </div>
  );
}
