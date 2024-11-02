import { NavigationContainer, useRoute } from "@react-navigation/native";
import { Container, ContainerTab, TextName } from "../Profile/styles";
import scotti from "../../assets/file.png";
import { Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Settings() {
  return (
    <ContainerTab>
      <Text>Settings</Text>
    </ContainerTab>
  );
}

function History() {
  return (
    <ContainerTab>
      <Text>History</Text>
    </ContainerTab>
  );
}

const Tab = createBottomTabNavigator();

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
