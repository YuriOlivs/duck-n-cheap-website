import { Container } from "../../components/container/container.component";
import { Form } from "../../components/form/form.component";
import { Input } from "../../components/input/input.component";
import { Button } from "../../components/button/button.component";

export function LoginPage() {
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
        <span className="text-3xl font-bold text-left uppercase text-black">Login</span>
        <Input type="email" placeholder="Email" className={""}/>
        <Input type="password" placeholder="Password" />
        <p className="text-left">Esqueceu a senha?</p>
      </Form>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <Button value="Login" className="w-1/4"/>
        <p>
          Não tem uma conta? 
          <span className="text-black font-bold cursor-pointer"> Cadastre-se</span>
        </p>
      </div>
    </Container>
  );
}
