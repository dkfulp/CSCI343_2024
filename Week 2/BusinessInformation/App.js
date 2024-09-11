import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.root}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/business_image.jpg")}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Cracker Barrel</Text>
          <Text
            style={styles.text}
            onPress={() => {
              Linking.openURL(
                "https://www.crackerbarrel.com/Locations/States/sc/myrtle-beach/566/?utm_source=google&utm_medium=maps&utm_campaign=crackerbarrelurl"
              );
            }}
          >
            www.crackerbarrel.com
          </Text>
          <Text
            style={styles.text}
            onPress={() => {
              Linking.openURL("tel:8439168241");
            }}
          >
            843-916-8241
          </Text>
          <Text
            style={styles.text}
            onPress={() => {
              Linking.openURL("https://maps.app.goo.gl/Hyh5VFie1519mfyj7");
            }}
          >
            Open in Google Maps
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#551505",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 2,
    marginTop: 100,
    width: "100%",
  },
  image: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
    backgroundColor: "white",
    borderWidth: 3,
    borderColor: "#efbf81",
  },
  infoContainer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
  },
  name: {
    fontSize: 55,
    textAlign: "center",
    color: "#f9a812",
    fontWeight: "bold",
    marginBottom: 40,
  },
  text: {
    fontSize: 35,
    color: "#f9a812",
    fontStyle: "italic",
    marginBottom: 10,
  },
});
