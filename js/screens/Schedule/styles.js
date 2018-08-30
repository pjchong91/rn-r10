import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  timeHeader: {
    width: "100%",
    backgroundColor: "#e6e6e6",
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: "600"
  },
  sessionText: {
    padding: 10
  },
  sessionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8
  },
  sessionLocation: {
    color: "#999999",
    fontWeight: "600",
    fontSize: 16
  },
  separator: {
    height: 2,
    width: "100%",
    backgroundColor: "#e6e6e6"
  }
});

export default styles;
