import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LISTINGS } from "../data/mockListings";
import { GS } from "../styles/GlobalStyle";

const MY_NAME = "Daniel";

export default function ProfileScreen() {
  const myListings = LISTINGS.filter((listing) => listing.seller === MY_NAME);

  return (
    <SafeAreaView style={GS.container}>
      <View style={GS.simpleListScreen}>
        <Text style={GS.title}>Profil</Text>
        <Text style={GS.subtitle}>{MY_NAME} • Cykelrytter • København</Text>
        <Text style={GS.sectionTitle}>Mine aktive annoncer: {myListings.length}</Text>

        <View style={GS.simpleListBox}>
          <FlatList
            data={myListings}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View style={GS.profileListItem}>
                  <Text style={GS.profileListTitle}>{item.title}</Text>
                  <Text style={GS.profileListMeta}>
                    {item.category} • {item.size} • {item.condition}
                  </Text>
                  <Text style={GS.profileListPrice}>{item.price} kr.</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
