import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { History } from "../screens/History";
import { Settings } from "../screens/Settings";
import { Profile } from "../screens/Profile";
import { useRoute } from "@react-navigation/native";

const { Navigator, Screen } = createBottomTabNavigator();

type RouteParams = {
  name: string;
};

export function TabRoutes() {

  const route = useRoute();

  const { name } = route.params as RouteParams;

  return (
    <Navigator initialRouteName="profile" screenOptions={{ headerShown: false }}>
      <Screen name="Profile" component={Profile} initialParams={{ name }} />
      <Screen name="History" component={History} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
}



