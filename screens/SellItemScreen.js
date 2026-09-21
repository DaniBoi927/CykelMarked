import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../components/AppButton";
import { GS } from "../styles/GlobalStyle";

const initialState = {
  // Felterne bruges til formularen på Sælg-siden.
  title: "",
  category: "",
  size: "",
  condition: "",
  price: "",
  imageUrl: "",
  description: "",
};

const labels = {
  title: "Titel",
  category: "Kategori",
  size: "Størrelse",
  condition: "Stand",
  price: "Pris",
  imageUrl: "Billede-link",
  description: "Beskrivelse",
};

export default function SellItemScreen() {
  const [form, setForm] = useState(initialState);

  // Opdaterer et formularfelt ad gangen.
  const updateField = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const submitListing = () => {
    // Simpel validering før annoncen "oprettes".
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
