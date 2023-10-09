import topo from "../../../../assets/Logo4.png";
import { StyleSheet, Image, Dimensions, } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("screen").width;

export default function Topo() {
    return <>
    <LinearGradient
          style={{
            width: "100%",
            height: (578 / 768) * width,
          }}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={["#900000", "#151515"]}
        >
          <Image source={topo} style={styles.topo} />
        </LinearGradient>
    </>
}

const styles = StyleSheet.create ({
    
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
})