import { Button } from "react-native";
import {
  Container,
  ContainerLogin,
  Title,
  InputUser,
  PasswordUser,
  PasswordRecovery,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const navigation = useNavigation();

  function handleProfile() {
    navigation.navigate("profile");
  }

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
          <Button title="Entrar" onPress={handleProfile} />
          <Button title="Esqueci minha senha" />
        </PasswordRecovery>
      </ContainerLogin>
    </Container>
  );
}
