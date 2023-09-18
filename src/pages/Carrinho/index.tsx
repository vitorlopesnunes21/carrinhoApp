import React from "react";
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from "react-native";
import topo from "../../../assets/Logo4.png";
import marguerita from "../../../assets/Pizza-Margherita-1024x685.jpg";
import quatroQueijos from "../../../assets/4queijos.jpg";
import frango from "../../../assets/Pizza-de-Frango-com-Catupiry.jpg";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("screen").width;

export default function Carrinho() {
  return (
    <>
      <ScrollView style={styles.bg}>
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

        <View style={styles.body}>
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
                  <Text style={styles.PizzaDescricao}>
                    Mussarela, Tomate e Manjericão
                  </Text>
                  <Text style={styles.PizzaPreco}>R$ 59.90</Text>
                </View>
              </View>

              <View style={styles.fotoPizzaDiv}>
                <Image source={marguerita} style={styles.fotoPizza} />
              </View>
            </View>

            <View style={styles.pizzaCard}>
              <View style={styles.pizzaTextos}>
                <Text style={styles.PizzaNome}>Quatro Quejos</Text>
                <View>
                  <Text style={styles.PizzaDescricao}>
                    Mussarela, Provolone, Parmesão, Gorgonzola
                  </Text>
                  <Text style={styles.PizzaPreco}>R$ 59.90</Text>
                </View>
              </View>

              <View style={styles.fotoPizzaDiv}>
                <Image source={quatroQueijos} style={styles.fotoPizza} />
              </View>
            </View>

            <View style={styles.pizzaCard}>
              <View style={styles.pizzaTextos}>
                <Text style={styles.PizzaNome}>Frango Catupiry</Text>
                <View>
                  <Text style={styles.PizzaDescricao}>
                    Mussarela, Frango e Catupiry
                  </Text>
                  <Text style={styles.PizzaPreco}>R$ 59.90</Text>
                </View>
              </View>

              <View style={styles.fotoPizzaDiv}>
                <Image source={frango} style={styles.fotoPizza} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    height: "100%",
  },
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  body: {
    backgroundColor: "#303030",
  },
  titulo: {
    color: "#f1f1f1",
    fontSize: 24,
    lineHeight: 26,
    padding: 16,
    fontFamily: "QSemiBold",
  },
  descricao: {
    color: "#f1f1f1",
    fontSize: 16,
    lineHeight: 16,
    paddingLeft: 16,
    paddingRight: 16,
    fontFamily: "QRegular",
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
