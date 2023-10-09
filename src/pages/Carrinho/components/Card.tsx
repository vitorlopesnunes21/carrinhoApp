import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import marguerita from "../../../../assets/Pizza-Margherita-1024x685.jpg";
import quatroQueijos from "../../../../assets/4queijos.jpg";
import frango from "../../../../assets/Pizza-de-Frango-com-Catupiry.jpg";

export default function () {
  return (
    <>
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
            <Image source={frango} style={styles.fotoPizzaFrango} />
          </View>
        </View>
      </View>
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
  },
  fotoPizza: {
    maxHeight: 110,
    minHeight: 110,
    width: 150,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  fotoPizzaFrango: {
    maxHeight: 139,
    minHeight: 139,
    width: 150,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  fotoPizzaDiv: {
    position: "absolute",
    marginLeft: "63%",
  },
});
