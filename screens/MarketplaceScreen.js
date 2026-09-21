import { useState } from "react";
import { FlatList, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListingCard from "../components/ListingCard";
import { LISTINGS } from "../data/mockListings";
import { GS } from "../styles/GlobalStyle";

export default function MarketplaceScreen({ navigation }) {
  const [search, setSearch] = useState("");

  // Søger i de vigtigste felter på hver annonce.
  const query = search.trim().toLocaleLowerCase("da-DK");
  const filteredListings = LISTINGS.filter((listing) =>
    [listing.title, listing.category, listing.description, listing.location, listing.size]
      .some((value) => String(value ?? "").toLocaleLowerCase("da-DK").includes(query))
  );

  return (
    <SafeAreaView style={GS.container}>
      {/* FlatList viser alle annoncerne som en scroll-bar liste. */}
      <FlatList
        data={filteredListings}
        keyExtractor={(item) => item.id}
        contentContainerStyle={GS.screen}
        ListHeaderComponent={
          <>
            <Text style={GS.title}>Annoncer</Text>
            <Text style={GS.subtitle}>Find brugt cykeltøj og udstyr nær dig.</Text>
            {/* Inputfeltet filtrerer listen mens brugeren skriver. */}
            <TextInput
              style={GS.input}
              placeholder="Søg i annoncer"
              accessibilityLabel="Søg i annoncer"
              value={search}
              onChangeText={setSearch}
              autoCapitalize="none"
              returnKeyType="search"
            />
          </>
        }
        ListEmptyComponent={<Text style={GS.subtitle}>Ingen annoncer matcher din søgning.</Text>}
        renderItem={({ item }) => (
          <ListingCard
            listing={item}
            // Tryk på en annonce åbner detaljesiden for annoncen.
            onPress={() => navigation.navigate("Listing Details", { listing: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}
