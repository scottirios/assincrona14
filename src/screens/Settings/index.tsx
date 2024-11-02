import { Container, TextSettings } from "./styles";
import setting from "../../assets/settings.png";
import { Image } from "react-native";

export function Settings() {
  return (
    <Container>
      <TextSettings>Configurações!</TextSettings>
      <Image source={setting} />
    </Container>
  );
}
