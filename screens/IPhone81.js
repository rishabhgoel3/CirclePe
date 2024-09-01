import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontSize,
  FontFamily,
  Color,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

const IPhone81 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone82}>
      <View style={styles.frame}>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("IPhone8")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/frame-1.png")}
          />
        </Pressable>
        <Text style={styles.transactionReview}>Transaction Review</Text>
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-51.png")}
        />
        <View style={styles.skyDandelionsApartment16SParent}>
          <Text style={styles.skyDandelionsApartmentContainer}>
            <Text style={styles.skyDandelionsApartment}>{`Sky Dandelions 
Apartment
     `}</Text>
            <Text style={styles.sector28}>{`1.6
        Sector 28


`}</Text>
            <Text style={styles.text}> $22,000/</Text>
            <Text style={styles.month}>{`month
`}</Text>
            <Text style={styles.sector28}>{`

`}</Text>
          </Text>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/star-12.png")}
          />
        </View>
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/1-12.png")}
        />
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.groupItem} />
        <View style={styles.groupInner} />
        <View style={styles.rectangleView} />
        <Text style={styles.selectPeriod}>Select Period</Text>
        <View style={styles.groupChild1} />
        <Text style={styles.months}>3 months</Text>
        <Text style={styles.months1}>6 months</Text>
        <Text style={styles.months2}>9 months</Text>
      </View>
      <View style={styles.frame1}>
        <Text style={styles.paymentDetails}>Payment Details</Text>
        <View style={styles.frameItem} />
        <Text style={styles.periodTime6Container}>
          <Text
            style={styles.skyDandelionsApartment}
          >{`Period TIme                              6 months
Monthly Payment .                   $22,020
Security Deposit                       $ 0
`}</Text>
          <Text style={styles.text}> </Text>
        </Text>
        <View style={styles.frameInner} />
        <Text
          style={styles.total132120}
        >{`TOTAL                              132,120       `}</Text>
      </View>
      <Pressable
        style={styles.iphone82Inner}
        onPress={() => navigation.navigate("IPhone82")}
      >
        <View style={styles.rectangleGroup}>
          <View style={styles.frameChild1} />
          <View style={styles.frame2}>
            <Text style={styles.payWithCircle}>Pay With Circle</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    position: "relative",
    width: 60,
    height: 55,
  },
  transactionReview: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "center",
  },
  frame: {
    width: 277,
    height: 55,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_lg,
    marginRight: 60,
  },
  frameChild: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  skyDandelionsApartment: {
    fontSize: FontSize.size_base,
  },
  sector28: {
    fontSize: FontSize.size_3xs,
  },
  text: {
    fontSize: FontSize.size_mini,
  },
  month: {
    fontSize: FontSize.size_xs,
  },
  skyDandelionsApartmentContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 130,
    height: 139,
  },
  groupChild: {
    position: "absolute",
    top: 46,
    left: 9,
    width: 9,
    height: 9,
  },
  skyDandelionsApartment16SParent: {
    position: "absolute",
    top: 24,
    left: 173,
    width: 130,
    height: 139,
  },
  icon1: {
    position: "absolute",
    top: 17,
    left: 8,
    borderRadius: Border.br_mini,
    width: 153,
    height: 152,
  },
  vectorParent: {
    width: 320,
    height: 181,
    marginRight: 17,
  },
  groupItem: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    width: 320,
    height: 68,
  },
  groupInner: {
    position: "absolute",
    top: 44,
    left: 233,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGainsboro,
    width: 87,
    height: 24,
  },
  rectangleView: {
    position: "absolute",
    top: 44,
    left: 16,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGainsboro,
    width: 87,
    height: 24,
  },
  selectPeriod: {
    position: "absolute",
    top: 12,
    left: 14,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 125,
    height: 22,
  },
  groupChild1: {
    position: "absolute",
    top: 44,
    left: 125,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDodgerblue,
    width: 87,
    height: 24,
  },
  months: {
    position: "absolute",
    top: 50,
    left: 30,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 52,
    height: 12,
  },
  months1: {
    position: "absolute",
    top: 47,
    left: 143,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 52,
    height: 12,
  },
  months2: {
    position: "absolute",
    top: 50,
    left: 251,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 52,
    height: 12,
  },
  rectangleParent: {
    width: 320,
    height: 68,
    marginRight: 17,
  },
  paymentDetails: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 195,
    height: 28,
  },
  frameItem: {
    position: "absolute",
    top: 28,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGainsboro,
    width: 296,
    height: 144,
  },
  periodTime6Container: {
    position: "absolute",
    top: 44,
    left: 10,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 270,
    height: 118,
  },
  frameInner: {
    position: "absolute",
    top: 118,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue,
    width: 296,
    height: 54,
  },
  total132120: {
    position: "absolute",
    top: 130,
    left: 9,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 271,
    height: 15,
  },
  frame1: {
    width: 296,
    height: 172,
    overflow: "hidden",
    marginRight: 7,
  },
  frameChild1: {
    position: "relative",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDodgerblue,
    width: 245,
    height: 40,
  },
  payWithCircle: {
    position: "relative",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 203,
    height: 12,
  },
  frame2: {
    width: 203,
    height: 26,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: -191,
  },
  rectangleGroup: {
    width: 257,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  iphone82Inner: {
    width: 257,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  iphone82: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_6xl,
    gap: Gap.gap_sm,
  },
});

export default IPhone81;
