import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: 20
  },
  logo: {
    marginTop: 20,
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
    fontSize: 24,
    fontWeight: "600"
    // paddingTop: 20,
    // paddingBottom: 20
  },
  bodyText: {
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20
    // paddingLeft: 10,
    // paddingRight: 10
  },
  codeHeader: {
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20,
    color: "#9963ea",
    fontWeight: "600"
  },
  codeText: {
    fontSize: 18
  }
});

export default styles;
