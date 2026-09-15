import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../components/AppButton";
import { GS } from "../styles/GlobalStyle";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={GS.container}>
      <ScrollView contentContainerStyle={GS.screen}>
        <View style={GS.hero}>
          <Text style={GS.heroTitle}>CykelMarked</Text>
          <Text style={GS.heroText}>
            Køb og sælg brugt cykeltøj, sko, hjelme, briller og landevejsudstyr.
          </Text>
        </View>

        <Text style={GS.title}>Giv udstyr et ekstra liv</Text>
        <Text style={GS.subtitle}>
          Appen er en simpel markedsplads for cykelryttere, hvor man kan finde
          brugt kvalitetsudstyr eller sætte sit eget til salg.
        </Text>

        <AppButton title="Se annoncer" onPress={() => navigation.navigate("Køb")} />
      </ScrollView>
    </SafeAreaView>
  );
}
