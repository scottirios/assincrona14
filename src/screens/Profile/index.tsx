import { useRoute } from "@react-navigation/native";
import { Container, Title } from "../Profile/styles";
import scotti from "../../assets/file.png";
import { Image } from "react-native";

type RouteParams = {
  name: string;
};

export function Profile() {
  
  const route = useRoute();

  const { name } = route.params as RouteParams;

  return (
    <Container>
      <Title>Bem vindo {name}!</Title>
      <Image source={scotti} />
    </Container>
  );
}
