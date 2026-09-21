import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../components/AppButton";
import { GS } from "../styles/GlobalStyle";

export default function ListingDetailsScreen({ route }) {
  // Annoncen kommer fra MarketplaceScreen via navigation.
  const listing = route?.params?.listing;
  const imageSource = listing?.image || (listing?.imageUrl ? { uri: listing.imageUrl } : null);

  if (!listing) {
    return (
      <SafeAreaView style={GS.container}>
        <View style={GS.center}>
          <Text>Ingen annonce valgt.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={GS.container}>
      <ScrollView contentContainerStyle={GS.screen}>
        {imageSource ? (
          <Image source={imageSource} style={GS.detailsImage} />
        ) : null}
        <Text style={GS.title}>{listing.title}</Text>
        <Text style={GS.price}>{listing.price} kr.</Text>

        <View style={GS.card}>
          <Text style={GS.label}>Kategori</Text>
          <Text style={GS.meta}>{listing.category}</Text>
          <Text style={GS.label}>Størrelse</Text>
          <Text style={GS.meta}>{listing.size}</Text>
          <Text style={GS.label}>Stand</Text>
          <Text style={GS.meta}>{listing.condition}</Text>
          <Text style={GS.label}>Lokation</Text>
          <Text style={GS.meta}>{listing.location}</Text>
          <Text style={GS.label}>Sælger</Text>
          <Text style={GS.meta}>{listing.seller}</Text>
        </View>

        <View style={GS.card}>
          <Text style={GS.label}>Beskrivelse</Text>
          <Text>{listing.description}</Text>
        </View>

        {/* Mock-knap der viser hvor kontakt-funktionen senere kan bygges. */}
        <AppButton title="Kontakt sælger" onPress={() => {}} />
      </ScrollView>
    </SafeAreaView>
  );
}
