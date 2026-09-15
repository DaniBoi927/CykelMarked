import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListingCard from "../components/ListingCard";
import { LISTINGS } from "../data/mockListings";
import { GS } from "../styles/GlobalStyle";

export default function MarketplaceScreen({ navigation }) {
  return (
    <SafeAreaView style={GS.container}>
      <FlatList
        data={LISTINGS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={GS.screen}
        ListHeaderComponent={
          <>
            <Text style={GS.title}>Annoncer</Text>
            <Text style={GS.subtitle}>Find brugt cykeltøj og udstyr nær dig.</Text>
          </>
        }
        renderItem={({ item }) => (
          <ListingCard
            listing={item}
            onPress={() => navigation.navigate("Listing Details", { listing: item })}
          />
        )}
      />
    </SafeAreaView>
  );
}
