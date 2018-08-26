import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%"
  },
  speakerHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  headerIcon: {
    padding: 20
  },
  speakerHeaderText: {
    color: "white",
    textAlign: "center",
    fontSize: 20
  },
  speakerModal: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 10
  },
  speakerImage: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  speakerName: {
    color: "#999999",
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: "600"
  },
  speakerBio: {
    color: "#999999",
    fontSize: 16,
    lineHeight: 24
  },
  buttonText: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: 20,
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
