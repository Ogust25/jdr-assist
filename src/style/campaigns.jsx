import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#212121",
    padding: "30px",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: "40px",
  },
  campaignsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: "20px",
    color: "white",
  },
  btnCampaign: {
    backgroundColor: "#721E20",
    paddingHorizontal: "15px",
    paddingVertical: "5px",
    borderRadius: "10px",
    textAlign: "center",
    marginBottom: "10px",
  },
  btnPlus: {
    backgroundColor: "#721E20",
    paddingHorizontal: "15px",
    paddingVertical: "14px",
    borderRadius: "10px",
    marginTop: "40px",
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
});
