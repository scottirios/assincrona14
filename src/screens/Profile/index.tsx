import { useRoute } from "@react-navigation/native";
import { Container, TextName } from "../Profile/styles";
import { Text } from "react-native";

export function Profile() {
  type RouteParams = {
    name: string;
  };

  const route = useRoute();

  const { name } = route.params as RouteParams;

  return (
    <Container>
      <TextName>{name}</TextName>
    </Container>
  );
}
