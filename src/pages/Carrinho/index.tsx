import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import topo from "../../../assets/Logo3.png";
import marguerita from "../../../assets/pizzaMarguerita.png"

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <View style={styles.bg}>
        <View>
          <Image source={topo} style={styles.topo} />
        </View>

        <View>
          <Text style={styles.titulo}>Mama Mia</Text>
          <View>
            <Text style={styles.descricao}>
              As pizzas mais italianas da Etec ou algo assim
            </Text>
          </View>
        </View>

        <View style={styles.cardapio}>

          <View style={styles.pizzaCard}>
            <View style={styles.pizzaTextos}>
              <Text style={styles.PizzaNome}>Marguerita</Text>
              <View>
              <Text style={styles.PizzaDescricao}>Formaggio, Pomodoro, Bsilico e mais nada texto para teste</Text>
              <Text style={styles.PizzaPreco}>R$ 59.90</Text>
              </View>
            </View>

            <View style={styles.fotoPizzaDiv}>
            <Image source={marguerita} style={styles.fotoPizza} />
            </View>
          </View>

        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    /**  backgroundColor: "red", */
    height: "100%",
  },
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
  },
  descricao: {
    color: "black",
    fontSize: 16,
    lineHeight: 16,
    paddingLeft: 16,
    paddingRight: 16,
    fontFamily: "QRegular",
  },
  cardapio: {
    color: "black",
    fontSize: 24,
    lineHeight: 26,
    padding: 16,
    gap: 10,
  },
  pizzaCard: {
    backgroundColor: "gray",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8
  },
  pizzaTextos: {
    display: "flex",
    flexDirection: "column",
    marginRight: "25%"
  },
  PizzaNome: {
    color: "black",
    fontSize: 24,
    lineHeight: 26,
    fontFamily: "QSemiBold",
  },
  PizzaDescricao: {
    color: "black",
    fontSize: 16,
    lineHeight: 16,
    marginRight: "25%",
    fontFamily: "QRegular",
  },
  PizzaPreco: {
    color: "green",
    fontSize: 16,
    lineHeight: 16,
    paddingLeft: 16,
    paddingRight: 16,
    fontFamily: "QRegular",
  },

  /** Terminar de ajeitar o tamanho da imagem */

  fotoPizza: {
    height: 152,
    width: 152,
    backgroundColor: "red",
  },
  fotoPizzaDiv: {
    position: "absolute",
    marginLeft: "62.5%"
  }
});
