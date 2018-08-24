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
  }
});

export default styles;
