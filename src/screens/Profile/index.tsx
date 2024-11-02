import { useRoute } from "@react-navigation/native";
import { Container, TextName } from "../Profile/styles";
import scotti from "../../assets/file.png";
import { Image } from "react-native";

export function Profile() {
  type RouteParams = {
    name: string;
  };

  const route = useRoute();

  const { name } = route.params as RouteParams;

  return (
    <Container>
      <TextName> Bem vindo {name}!</TextName>
      <Image source={scotti}></Image>
    </Container>
  );
}
