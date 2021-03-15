//Style
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerSearch: {
    flex: 1,
    alignItems: "center",

    paddingTop: "10%",

    backgroundColor: "#e8f0ff",
  },
  backButton: {
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",

    marginLeft: 15,
    marginBottom: 10,
  },
  goBack: {
    fontSize: 22,
  },
  searchArea: {
    flexDirection: "row",
    alignItems: "center",

    width: "90%",
    height: 50,

    backgroundColor: "#dddddd",
    borderRadius: 8,
  },
  input: {
    width: "85%",
    height: 50,

    padding: 7,

    backgroundColor: "#ffffff",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  iconSearch: {
    alignItems: "center",
    justifyContent: "center",

    width: "15%",
    height: 50,

    backgroundColor: "#1ed6ff",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  error: {
    marginTop: 25,

    fontSize: 18,
  },

  header: {
    alignItems: "center",
    justifyContent: "space-between",

    width: "90%",

    marginTop: "5%",
    paddingVertical: "3%",

    paddingHorizontal: "2%",

    borderRadius: 8,
  },
  date: {
    fontSize: 16,
    color: "#ffffff",
  },
  city: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  temp: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
