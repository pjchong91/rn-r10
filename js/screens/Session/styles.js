import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white"
  },
  presentor: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "white"
    paddingTop: 20,
    paddingBottom: 20
  },
  presentorContainer: {
    marginTop: 20
  },
  presentorIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  presentorName: {
    fontWeight: "600"
  },
  divider: {
    height: 1,
    backgroundColor: "#e6e6e6",
    marginBottom: 20
  },
  sessionLocation: {
    fontSize: 16,
    fontWeight: "400",
    color: "#999999"
  },
  sessionTitle: {
    fontSize: 24,
    fontWeight: "600"
  },
  sessionTime: {
    color: "#cf392a",
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  heartAlign: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  buttonText: {
    textAlign: "center"
  },
  buttonTextContainer: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
