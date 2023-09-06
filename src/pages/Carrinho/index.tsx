import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import topo from "../../../assets/Logo3.png";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <View>
        <Image source={topo} style={styles.topo} />
      </View>
      <View>
        <Text style={styles.titulo}>Mama Mia</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    color: "black",
    fontSize: 24,
    lineHeight: 26,
    padding: 16,
    fontFamily: "QSemiBold",
  }
});
