import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#212121",
    padding: "30px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "50px",
  },
  img: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: "20px",
    color: "white",
  },
  btnStart: {
    backgroundColor: "#721E20",
    paddingHorizontal: "25px",
    paddingVertical: "20px",
    borderRadius: "10px",
    marginBottom: "60px",
  },
  btnAbout: {
    backgroundColor: "#721E20",
    paddingHorizontal: "15px",
    paddingVertical: "10px",
    borderRadius: "10px",
    marginBottom: "50px",
  },
});
