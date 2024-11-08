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
import { useState } from "react";

export function Login() {
  const [name, setName] = useState<string>("");

  const navigation = useNavigation();

  function handleProfile() {
    navigation.navigate("tabRoutes", { name });
  }

  return (
    <Container>
      <ContainerLogin>
        <Title>Login</Title>
        <InputUser
          placeholder="Informe seu usuário"
          onChangeText={setName}
          textAlign="center"
          placeholderTextColor={"white"}
        ></InputUser>
        <PasswordUser
          placeholder="Senha: ********"
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
