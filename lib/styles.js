import { StyleSheet } from "react-native";
export const hairlineWidth = StyleSheet.hairlineWidth;
export default StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.4,
    backgroundColor: "#000",
  },
  wrapper: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "flex-end",
    // alignSelf: "flex-end"
  },
  body: {
    // flex: 1,
    // alignSelf: "stretch",
    backgroundColor: "#e5e5e5",
  },
  titleBox: {
    minHeight: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  titleText: {
    color: "#757575",
    fontSize: 14,
    textAlign: "center",
  },
  messageBox: {
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  messageText: {
    color: "#9a9a9a",
    fontSize: 12,
  },
  buttonBox: {
    height: 50,
    marginTop: hairlineWidth,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  buttonText: {
    fontSize: 18,
  },
  cancelButtonBox: {
    height: 50,
    marginTop: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
