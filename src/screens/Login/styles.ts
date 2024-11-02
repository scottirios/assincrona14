import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: lightblue;
`;

export const ContainerLogin = styled.View`
  align-items: center;
  justify-content: center;
  top: 300px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const InputUser = styled.TextInput`
  background-color: lightseagreen;
  border-radius: 12px;
  width: 350px;
  top: 20px;
  height: 40px;
  font-weight: bold;
`;

export const PasswordUser = styled.TextInput`
  background-color: lightseagreen;
  border-radius: 12px;
  width: 350px;
  top: 40px;
  height: 40px;
  font-weight: bold;
`;

export const PasswordRecovery = styled.View`
  top: 60px;
  width: 350px;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-between;
`;
