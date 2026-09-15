import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../components/AppButton";
import { GS } from "../styles/GlobalStyle";

const initialState = {
  title: "",
  category: "",
  size: "",
  condition: "",
  price: "",
  description: "",
};

const labels = {
  title: "Titel",
  category: "Kategori",
  size: "Størrelse",
  condition: "Stand",
  price: "Pris",
  description: "Beskrivelse",
};

export default function SellItemScreen() {
  const [form, setForm] = useState(initialState);

  const updateField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const submitListing = () => {
    if (!form.title.trim() || !form.price.trim()) {
      Alert.alert("Udfyld mindst titel og pris.");
      return;
    }

    Alert.alert("Annonce oprettet", "Senere kobler vi denne funktion på Firebase.");
    setForm(initialState);
  };

  return (
    <SafeAreaView style={GS.container}>
      <ScrollView contentContainerStyle={GS.screen}>
        <Text style={GS.title}>Sæt til salg</Text>
        <Text style={GS.subtitle}>Opret en annonce for dit brugte cykeltøj eller udstyr.</Text>

        {Object.keys(initialState).map((key) => (
          <View style={GS.row} key={key}>
            <Text style={GS.label}>{labels[key]}</Text>
            <TextInput
              value={form[key]}
              onChangeText={(text) => updateField(key, text)}
              style={GS.input}
              placeholder={labels[key]}
              keyboardType={key === "price" ? "number-pad" : "default"}
              multiline={key === "description"}
            />
          </View>
        ))}

        <AppButton title="Opret annonce" onPress={submitListing} />
      </ScrollView>
    </SafeAreaView>
  );
}
