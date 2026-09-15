import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GS } from "../styles/GlobalStyle";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={GS.container}>
      <ScrollView contentContainerStyle={GS.screen}>
        <Text style={GS.title}>Profil</Text>
        <Text style={GS.subtitle}>
          I denne prototype er profilen en mockup. Senere kan den udvides med login,
          egne annoncer, favoritter og beskeder.
        </Text>

        <View style={GS.card}>
          <Text style={GS.cardTitle}>Daniel</Text>
          <Text style={GS.meta}>Cykelrytter • København</Text>
          <Text>Aktive annoncer: 0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
