import { Button } from "react-native";
import {
  Container,
  ContainerLogin,
  Title,
  InputUser,
  PasswordUser,
  PasswordRecovery,
} from "./styles";

export function Login() {
  return (
    <Container>
      <ContainerLogin>
        <Title>Login</Title>
        <InputUser
          placeholder="Informe seu email"
          textAlign="center"
          placeholderTextColor={"white"}
        ></InputUser>
        <PasswordUser
          placeholder="Informe sua senha"
          textAlign="center"
          placeholderTextColor={"white"}
        ></PasswordUser>
        <PasswordRecovery>
            <Button title="Entrar" />
            <Button title="Esqueci minha senha"/>
        </PasswordRecovery>
      </ContainerLogin>
    </Container>
  );
}
