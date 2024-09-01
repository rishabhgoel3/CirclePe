import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Gap } from "../GlobalStyles";

const IPhone83 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone84}>
      <View style={styles.frame}>
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <View style={styles.rentAtZeroSecurityDepositWrapper}>
          <Text style={styles.rentAtZeroContainer}>
            <Text style={styles.rentAt}>{`Rent at `}</Text>
            <Text style={styles.zero}>{`ZERO `}</Text>
            <Text style={styles.rentAt}>{`security deposit ✨ `}</Text>
          </Text>
        </View>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <Text style={styles.setUp}>Set - up no cost EMI in 3 days</Text>
          </View>
          <View style={styles.frameChild} />
          <Image
            style={styles.screenshot20240901At1216}
            contentFit="cover"
            source={require("../assets/screenshot-20240901-at-121624pm-1.png")}
          />
        </View>
        <View style={styles.frame3}>
          <View style={styles.frameItem} />
          <Text style={styles.byClickingThisContainer}>
            <Text
              style={styles.rentAt}
            >{`by clicking this you approved your `}</Text>
            <Text
              style={styles.termsAndConditions}
            >{`terms and conditions `}</Text>
            <Text style={styles.rentAt}>{`and `}</Text>
            <Text style={styles.privacyPolicy}>privacy policy</Text>
            <Text style={styles.rentAt}>{` `}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.frame4}>
        <Pressable
          style={styles.rectangleParent}
          onPress={() => navigation.navigate("IPhone84")}
        >
          <View style={styles.groupChild} />
          <Text style={styles.getStarted}>{`Get Started ->`}</Text>
        </Pressable>
        <Pressable
          style={styles.goBack}
          onPress={() => navigation.navigate("IPhone82")}
        >
          <Text style={styles.goBack1}>GO Back</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "relative",
    width: 101,
    height: 46,
    overflow: "hidden",
  },
  rentAt: {
    color: Color.colorBlack,
  },
  zero: {
    color: Color.colorBlue,
  },
  rentAtZeroContainer: {
    position: "relative",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.imprimaRegular,
    textAlign: "left",
    width: 287,
    height: 25,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  rentAtZeroSecurityDepositWrapper: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue,
    width: 300,
    height: 32,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 1,
  },
  setUp: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 193,
    height: 24,
  },
  frame2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 326,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  frameChild: {
    position: "absolute",
    top: 24,
    left: 0,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    width: 326,
    height: 431,
  },
  screenshot20240901At1216: {
    position: "absolute",
    top: 42,
    left: 13,
    width: 300,
    height: 404,
  },
  frame1: {
    width: 326,
    height: 455,
    overflow: "hidden",
    marginLeft: 1,
  },
  frameItem: {
    position: "relative",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderRadius: 10,
    backgroundColor: Color.colorGainsboro,
    width: 16,
    height: 14,
  },
  termsAndConditions: {
    color: "#83a8df",
  },
  privacyPolicy: {
    color: "#5c8eb4",
  },
  byClickingThisContainer: {
    position: "relative",
    fontSize: 9,
    fontFamily: FontFamily.imprimaRegular,
    textAlign: "left",
    width: 260,
    height: 24,
  },
  frame3: {
    width: 280,
    height: 24,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 4,
    marginRight: 19,
  },
  frame: {
    width: 327,
    height: 588,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 9,
  },
  groupChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: "#439cfa",
    width: 204,
    height: 25,
  },
  getStarted: {
    position: "absolute",
    top: 5,
    left: 57,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 153,
    height: 13,
  },
  rectangleParent: {
    width: 210,
    height: 25,
    marginRight: 11,
  },
  goBack1: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "center",
    width: 105,
    height: 14,
  },
  goBack: {
    height: 14,
    marginRight: 18,
  },
  frame4: {
    width: 221,
    height: 46,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_xs,
  },
  iphone84: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: Gap.gap_xs,
  },
});

export default IPhone83;
