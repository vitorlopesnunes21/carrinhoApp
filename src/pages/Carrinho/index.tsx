import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import Topo from "./components/Topo";
import Detalhes from "./components/Detalhes";
import Card from "./components/Card";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <ScrollView style={styles.bg}>
        <Topo />

        <View style={styles.body}>
          <Detalhes />
          <Card/>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    height: "100%",
  },
  body: {
    backgroundColor: "#303030",
  },

  cardapio: {
    fontSize: 24,
    lineHeight: 26,
    padding: 16,
    gap: 10,
  },
  pizzaCard: {
    backgroundColor: "#606060",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    maxHeight: 150,
  },
  pizzaTextos: {
    display: "flex",
    flexDirection: "column",
    marginRight: "25%",
  },
  PizzaNome: {
    color: "#f1f1f1",
    fontSize: 24,
    lineHeight: 26,
    marginRight: "25%",
    fontFamily: "QSemiBold",
  },
  PizzaDescricao: {
    color: "#f1f1f1",
    fontSize: 16,
    lineHeight: 16,
    marginRight: "25%",
    fontFamily: "QRegular",
  },
  PizzaPreco: {
    color: "#009930",
    fontSize: 20,
    lineHeight: 26,
    fontFamily: "QSemiBold",
    marginTop: "16.7%",
  },
  fotoPizza: {
    height: 140,
    width: 150,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  fotoPizzaDiv: {
    position: "absolute",
    marginLeft: "63%",
  },
});
