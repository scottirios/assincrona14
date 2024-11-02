import { Container, TextHistory } from "./styles";
import config from "../../assets/history.png";
import { Image } from "react-native";

export function History() {
    return (
        <Container>
            <TextHistory>Histórico!</TextHistory>
            <Image source={config}/>
        </Container>
    )
}
