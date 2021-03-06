import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({
    MontserratRegular: require("../../assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("../../assets/fonts/Montserrat-Bold.ttf"),
    MontserratSemiBold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratMedium: require("../../assets/fonts/Montserrat-Medium.ttf"),
  });
