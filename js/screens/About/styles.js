import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10
  },
  logo: {
    // marginTop: 20,
    // marginBottom: 20,
    marginLeft: "auto",
    marginRight: "auto"
  },
  divider: {
    marginTop: 20,
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 2
  },
  headerText: {
    fontSize: 22,
    fontWeight: "600"
    // paddingTop: 20,
    // paddingBottom: 20
  },
  bodyText: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "300"
    // paddingLeft: 10,
    // paddingRight: 10
  },
  codeHeader: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    color: "#9963ea",
    fontWeight: "600"
  },
  codeText: {
    fontSize: 18
  },
  loaderStyles: {
    flex: 1,
    justifyContent: "center"
  },
  loaderText: {
    color: "#9963ea",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "500"
  }
});

export default styles;
