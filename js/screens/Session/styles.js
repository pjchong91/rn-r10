import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    minHeight: "100%"
  },
  presentor: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20
  },
  presentorContainer: {
    marginTop: 20,
    color: Platform.select({
      android: "#999999",
      ios: "#999999"
    })
  },
  presentorIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  presentorName: {
    fontWeight: "600",
    fontSize: 16
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
  sessionDescription: {
    fontSize: 18,
    color: Platform.select({
      ios: "#000000",
      android: "#999999"
    })
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
    textAlign: "center",
    lineHeight: 20,
    fontSize: 16,
    color: "white",
    fontWeight: "600",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  },
  buttonTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
