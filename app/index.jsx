import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <Link href={'/Login'}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontFamily:"outfit"}}>Hii Asutosh</Text>
    </View>
    </Link>
  );
}
