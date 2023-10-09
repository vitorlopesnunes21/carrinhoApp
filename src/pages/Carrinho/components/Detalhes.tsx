import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView,
  } from "react-native";

export default function Detalhes() {
  return <>
  <View>
            <Text style={styles.titulo}>Mama Mia</Text>
            <View>
              <Text style={styles.descricao}>
                As pizzas mais italianas da Etec ou algo assim
              </Text>
            </View>
          </View>
  </>;
}

const styles = StyleSheet.create ({
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
  })