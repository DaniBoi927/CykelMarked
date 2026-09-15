import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../components/AppButton";
import { GS } from "../styles/GlobalStyle";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={GS.container}>
      <ScrollView contentContainerStyle={GS.homeScreen}>
        <View style={GS.hero}>
          <Text style={GS.heroTitle}>Cykel Marked</Text>
          <Text style={GS.heroText}>
            Køb og sælg brugt cykeltøj, sko, hjelme, briller og udstyr til landevej.
          </Text>
          <View style={GS.heroStatRow}>
            <View style={GS.heroStat}>
              <Text style={GS.heroStatNumber}>3</Text>
              <Text style={GS.heroStatLabel}>aktive annoncer</Text>
            </View>
          </View>
        </View>

        <View style={GS.homeIntro}>
          <Text style={GS.title}>Giv udstyr et ekstra liv</Text>
          <Text style={GS.subtitle}>
            En markedsplads for cykelryttere, hvor brugt sudstyr kan
            skifte hænder hurtigt og overskueligt.
          </Text>
        </View>

        <View style={GS.featureGrid}>
          <View style={GS.featureCard}>
            <Text style={GS.featureIcon}>1</Text>
            <Text style={GS.featureTitle}>Find og køb udstyr</Text>
            <Text style={GS.featureText}>Se trøjer, sko, briller og andet gear.</Text>
          </View>
          <View style={GS.featureCard}>
            <Text style={GS.featureIcon}>2</Text>
            <Text style={GS.featureTitle}>Sælg nemt dit grej</Text>
            <Text style={GS.featureText}>Opret en annonce med pris, stand og størrelse.</Text>
          </View>
        </View>

        <AppButton title="Tryk for at se annoncer" onPress={() => navigation.navigate("Køb")} />
      </ScrollView>
    </SafeAreaView>
  );
}
