import { Title } from '@/components/Title';

export default function Home() {
  return (
    <div className="p-4">
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
    </div>
  );
}
