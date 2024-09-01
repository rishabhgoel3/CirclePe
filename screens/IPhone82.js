import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import {
  Border,
  Color,
  FontSize,
  FontFamily,
  Gap,
  Padding,
} from "../GlobalStyles";

const IPhone82 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone83}>
      <View style={styles.frame}>
        <View style={styles.frame1}>
          <Pressable
            style={styles.rectangleParent}
            onPress={() => navigation.navigate("IPhone83")}
          >
            <View style={styles.groupChild} />
            <Text style={styles.payWithCircle}>Pay With Circle</Text>
          </Pressable>
        </View>
        <View style={styles.frame1}>
          <Pressable
            style={styles.goBack}
            onPress={() => navigation.navigate("IPhone81")}
          >
            <Text style={styles.goBack1}>GO Back</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.iphone82}>
        <View style={styles.frame3}>
          <Pressable
            style={styles.screenshot20240831At1247}
            onPress={() => navigation.navigate("IPhone8")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/screenshot-20240831-at-124728pm-2.png")}
            />
          </Pressable>
          <Text style={styles.transactionReview}>Transaction Review</Text>
        </View>
        <View style={styles.frame4}>
          <View style={styles.vectorParent}>
            <Image
              style={styles.groupItem}
              contentFit="cover"
              source={require("../assets/rectangle-52.png")}
            />
            <Image
              style={styles.icon1}
              contentFit="cover"
              source={require("../assets/1-13.png")}
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
                style={styles.groupInner}
                contentFit="cover"
                source={require("../assets/star-13.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleGroup}>
            <View style={styles.rectangleView} />
            <View style={styles.groupChild1} />
            <View style={styles.groupChild2} />
            <Text style={styles.selectPeriod}>Select Period</Text>
            <View style={styles.groupChild3} />
            <Text style={styles.months}>3 months</Text>
            <Text style={styles.months1}>6 months</Text>
            <Text style={styles.months2}>9 months</Text>
          </View>
          <View style={styles.rentAtZeroSecurityDepositParent}>
            <Text style={styles.rentAtZeroContainer}>
              <Text style={styles.rentAt}>{`Rent at `}</Text>
              <Text style={styles.zero}>{`ZERO `}</Text>
              <Text style={styles.rentAt}>{`security deposit ✨ `}</Text>
            </Text>
            <Image
              style={styles.image1Icon}
              contentFit="cover"
              source={require("../assets/image-1.png")}
            />
            <Text style={styles.approved}>APPROVED</Text>
          </View>
          <View style={styles.imageParent}>
            <Image
              style={styles.imageIcon}
              contentFit="cover"
              source={require("../assets/image1.png")}
            />
            <Image
              style={styles.imageIcon1}
              contentFit="cover"
              source={require("../assets/image1.png")}
            />
            <Image
              style={styles.imageIcon2}
              contentFit="cover"
              source={require("../assets/image1.png")}
            />
            <Text style={styles.newRentOfferContainer}>
              <Text style={styles.rentAt}>{`New Rent Offer : `}</Text>
              <Text style={styles.text2}>20,000</Text>
            </Text>
            <Text style={styles.zeroSecurityDepositContainer}>
              <Text style={styles.rentAt}>{`Zero Security Deposit `}</Text>
              <Text style={styles.text2}>move-in</Text>
            </Text>
            <Text style={styles.monthsSalaryCoverContainer}>
              <Text style={styles.rentAt}>{`3-Months `}</Text>
              <Text style={styles.text2}>Salary cover</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDodgerblue,
    width: 261,
    height: 40,
  },
  payWithCircle: {
    position: "absolute",
    top: 7,
    left: 58,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 216,
    height: 12,
  },
  rectangleParent: {
    alignSelf: "stretch",
    position: "relative",
    height: 40,
  },
  frame1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  goBack1: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "right",
    width: 105,
    height: 14,
  },
  goBack: {
    position: "relative",
  },
  frame: {
    position: "absolute",
    top: 584,
    left: 51,
    width: 273,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 6,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  screenshot20240831At1247: {
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
  frame3: {
    width: 277,
    height: 55,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_lg,
    marginRight: 60,
  },
  groupItem: {
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
  icon1: {
    position: "absolute",
    top: 17,
    left: 8,
    borderRadius: Border.br_mini,
    width: 161,
    height: 152,
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
    width: 137,
    height: 139,
  },
  groupInner: {
    position: "absolute",
    top: 46,
    left: 10,
    width: 9,
    height: 9,
  },
  skyDandelionsApartment16SParent: {
    position: "absolute",
    top: 24,
    left: 182,
    width: 137,
    height: 139,
  },
  vectorParent: {
    alignSelf: "start",
    height: 181,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    width: 337,
    height: 68,
  },
  groupChild1: {
    position: "absolute",
    top: 44,
    left: 245,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGainsboro,
    width: 92,
    height: 24,
  },
  groupChild2: {
    position: "absolute",
    top: 44,
    left: 17,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorGainsboro,
    width: 92,
    height: 24,
  },
  selectPeriod: {
    position: "absolute",
    top: 12,
    left: 15,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 132,
    height: 22,
  },
  groupChild3: {
    position: "absolute",
    top: 44,
    left: 132,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorDodgerblue,
    width: 92,
    height: 24,
  },
  months: {
    position: "absolute",
    top: 50,
    left: 32,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 55,
    height: 12,
  },
  months1: {
    position: "absolute",
    top: 47,
    left: 151,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 55,
    height: 12,
  },
  months2: {
    position: "absolute",
    top: 50,
    left: 264,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 55,
    height: 12,
  },
  rectangleGroup: {
    alignSelf: "start",
    height: 68,
  },
  rentAt: {
    color: Color.colorBlack,
  },
  zero: {
    color: Color.colorBlue,
  },
  rentAtZeroContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.imprimaRegular,
    textAlign: "left",
    width: 297,
    height: 25,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  image1Icon: {
    position: "absolute",
    top: 41,
    left: 118,
    width: 49,
    height: 48,
  },
  approved: {
    position: "absolute",
    top: 89,
    left: 68,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorCornflowerblue_100,
    textAlign: "center",
    width: 150,
    height: 18,
  },
  rentAtZeroSecurityDepositParent: {
    alignSelf: "start",
    height: 107,
    marginLeft: 20,
  },
  imageIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_23xl,
    width: 33,
    height: 33,
  },
  imageIcon1: {
    position: "absolute",
    top: 44,
    left: 0,
    borderRadius: Border.br_23xl,
    width: 33,
    height: 33,
  },
  imageIcon2: {
    position: "absolute",
    top: 88,
    left: 0,
    borderRadius: Border.br_23xl,
    width: 33,
    height: 33,
  },
  text2: {
    color: Color.colorCornflowerblue_100,
  },
  newRentOfferContainer: {
    position: "absolute",
    top: 4,
    left: 38,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.imprimaRegular,
    textAlign: "left",
    width: 187,
    height: 19,
  },
  zeroSecurityDepositContainer: {
    position: "absolute",
    top: 52,
    left: 37,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.imprimaRegular,
    textAlign: "left",
    width: 198,
    height: 17,
  },
  monthsSalaryCoverContainer: {
    position: "absolute",
    top: 94,
    left: 36,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.imprimaRegular,
    textAlign: "left",
    width: 199,
    height: 19,
  },
  imageParent: {
    alignSelf: "start",
    height: 121,
    marginLeft: 51,
  },
  frame4: {
    width: 337,
    height: 542,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_md,
  },
  iphone82: {
    position: "absolute",
    top: -83,
    left: 0,
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 667,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_lgi,
    paddingTop: Padding.p_6xl,
    paddingBottom: 33,
    gap: Gap.gap_sm,
  },
  iphone83: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default IPhone82;
