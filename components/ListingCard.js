import { Image, Text, TouchableOpacity, View } from "react-native";
import { GS } from "../styles/GlobalStyle";

export default function ListingCard({ listing, onPress }) {
  const imageSource = listing.image || (listing.imageUrl ? { uri: listing.imageUrl } : null);

  return (
    <TouchableOpacity style={GS.card} onPress={onPress}>
      {imageSource ? (
        <Image source={imageSource} style={GS.listingImage} />
      ) : null}
      <Text style={GS.cardTitle}>{listing.title}</Text>
      <Text style={GS.meta}>
        {listing.category} • {listing.size} • {listing.condition}
      </Text>
      <View>
        <Text style={GS.price}>{listing.price} kr.</Text>
        <Text style={GS.meta}>{listing.location}</Text>
      </View>
    </TouchableOpacity>
  );
}
