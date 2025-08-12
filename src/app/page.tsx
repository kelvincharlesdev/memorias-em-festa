import { CiCalendarDate } from "react-icons/ci";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { SlLocationPin } from "react-icons/sl";
import { TbClockHour7 } from "react-icons/tb";
import { Button } from "@/components/Button";
import Input from "@/components/Input";
import { Price } from "@/components/Price";
import { Title } from "@/components/Title";

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
      <div className="flex flex-col items-center justify-center gap-3 bg-purple-950 p-4">
        <Price fontSize="lg" value={99.9} />

        <Price fontSize="sm" value={49.5} />

        <Price currency="USD" fontSize="lg" locale="en-US" value={29.9} />
      </div>
      <div className="flex w-full max-w-md flex-col gap-3 bg-gradient-to-b from-[#170322] via-[#2B083C] to-[#430A57] p-4">
        <Input.Wrapper>
          <Input.Icon Icon={LiaBirthdayCakeSolid} />
          <Input.Field placeholder="Nome do Evento" type="text" />
        </Input.Wrapper>
        <Input.Wrapper>
          <Input.Field placeholder="Nome do Evento" type="text" />
          <Input.Icon Icon={LiaBirthdayCakeSolid} />
        </Input.Wrapper>
        <Input.Wrapper>
          <Input.Icon Icon={CiCalendarDate} />
          <Input.Field type="date" />
        </Input.Wrapper>
        <Input.Wrapper>
          <Input.Icon Icon={TbClockHour7} />
          <Input.Field type="time" />
        </Input.Wrapper>
        <Input.Wrapper>
          <Input.Icon Icon={SlLocationPin} />
          <Input.Field
            placeholder="Endereço do Evento (opcional)"
            type="text"
          />
        </Input.Wrapper>
      </div>
    </div>
  );
}
