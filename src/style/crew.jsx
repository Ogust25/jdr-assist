import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    position: "relative",
    height: "100vh",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  error: {
    color: "red",
  },
});
