import { Container } from "../../components/container/container.component";
import { Form } from "../../components/form/form.component";
import { Input } from "../../components/input/input.component";
import { Button } from "../../components/button/button.component";

export function RegisterPage() {
  return (
    <Container className="flex flex-col items-center justify-center h-screen gap-8">
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-1/5"
          src="./src/assets/duck_n_cheap_icon.svg"
          alt=""
        />

        <img
          className="w-2xs"
          src="./src/assets/duck_n_cheap_text.svg"
          alt=""
        />
      </div>

      <Form className="w-1/4">
        <span className="text-3xl font-bold text-left uppercase text-black">
          Cadastro
        </span>

        <span className="font-bold text-left text-black">Crie sua conta</span>

        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
      </Form>

      <Button value="Cadastrar" className="w-1/4" />
      <p>
        Já possui uma conta?
        <span className="text-black font-bold cursor-pointer self-start">
          {" "}
          Faça login
        </span>
      </p>
    </Container>
  );
}
