import { Image, Text, TouchableOpacity, View, } from "react-native";
import { styles} from "../../Styles/auth.styles";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hello</Text>
      <Link href="/profile">
        <Text>Go to Profile</Text>
      </Link>
    </View>
  );
}

