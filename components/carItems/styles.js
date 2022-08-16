import { StyleSheet } from "react-native-web";

const styles =StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%",
      },
      titles: {
        marginTop: "20%",
        width: "100%",
        alignItems: "center",
      },
      title: {
        fontSize: "40px",
        fontWeight: "500",
      },
      subtitle: {
        fontSize: "16",
        color: "#5c5e62",
      },
      image: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover',
        position:'absolute'
      },
      btnContainer:{

        position:'absolute',
        bottom: 50,
        width: '100%'


      }
})

export default styles