import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./screens/HomeScreen";
import MarketplaceScreen from "./screens/MarketplaceScreen";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import SellItemScreen from "./screens/SellItemScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { Farver } from "./styles/GlobalStyle";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MarketplaceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Marketplace"
        component={MarketplaceScreen}
        options={{ title: "Køb udstyr" }}
      />
      <Stack.Screen
        name="Listing Details"
        component={ListingDetailsScreen}
        options={{ title: "Annonce" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName = "ellipse-outline";

              if (route.name === "Forside") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Køb") {
                iconName = focused ? "search" : "search-outline";
              } else if (route.name === "Sælg") {
                iconName = focused ? "add-circle" : "add-circle-outline";
              } else if (route.name === "Profil") {
                iconName = focused ? "person" : "person-outline";
              }

              return <Ionicons name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: Farver.primær,
            tabBarInactiveTintColor: Farver.muted,
            headerShown: false,
          })}
        >
          <Tab.Screen name="Forside" component={HomeScreen} />
          <Tab.Screen name="Køb" component={MarketplaceStack} />
          <Tab.Screen name="Sælg" component={SellItemScreen} />
          <Tab.Screen name="Profil" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
