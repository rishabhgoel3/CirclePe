import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Border,
  Color,
  FontSize,
  FontFamily,
  Gap,
  Padding,
} from "../GlobalStyles";

const IPhone84 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.iphone86}>
      <View style={styles.frame}>
        <Pressable
          style={styles.image}
          onPress={() => navigation.navigate("IPhone83")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/image.png")}
          />
        </Pressable>
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <Image
            style={styles.screenshot20240901At1232}
            contentFit="cover"
            source={require("../assets/screenshot-20240901-at-123201pm-1.png")}
          />
          <View style={styles.frame3}>
            <View style={styles.frame4}>
              <Image
                style={styles.screenshot20240901At1234}
                contentFit="cover"
                source={require("../assets/screenshot-20240901-at-123403pm-1.png")}
              />
              <View style={styles.rectangleParent}>
                <View style={styles.groupChild} />
                <Text style={styles.rentConvertedTo}>
                  Rent converted to Zero-Cost EMI
                </Text>
              </View>
            </View>
            <View style={styles.frame5}>
              <Text style={styles.coLivingPartnerRentOkContainer}>
                <Text
                  style={styles.coLivingPartner}
                >{`Co-living Partner                      Rent-OK

Payment Amount                      INR XXXX.0

Monthly Rent                             10,000 INR/mo.
`}</Text>
                <Text style={styles.zeroCostEmi}>{`(zero cost -emi)
`}</Text>
                <Text style={styles.coLivingPartner}>{`
Rent Cycle                                   5 Months
`}</Text>
                <Text style={styles.zeroCostEmi}>{`(EMI Duration)
`}</Text>
                <Text style={styles.coLivingPartner}>{`  `}</Text>
              </Text>
              <View style={styles.rectangleGroup}>
                <View style={styles.groupItem} />
                <Text style={styles.zeroCostEmi1}>Zero COST EMI</Text>
              </View>
            </View>
          </View>
          <View style={styles.frame6}>
            <Text style={styles.byClickingOnContainer}>
              <Text
                style={styles.byClickingOn}
              >{`By clicking on next, you acknowledge that you have read `}</Text>
              <Text
                style={styles.viewLoanAgreement}
              >{`View Loan Agreement `}</Text>
              <Text style={styles.byClickingOn}>{`&`}</Text>
              <Text style={styles.kfs}>
                {` `}
                <Text style={styles.kfs1}>KFS</Text>
              </Text>
              <Text style={styles.kfs}>{` `}</Text>
              <Text
                style={styles.agreedToThe}
              >{`agreed to the terms and conditions contained in the loan agreement. `}</Text>
            </Text>
            <View style={styles.rectangleContainer}>
              <View style={styles.groupInner} />
              <Text style={styles.continue}>{`Continue >`}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    borderRadius: Border.br_mini,
    width: "100%",
    height: "100%",
  },
  image: {
    position: "relative",
    width: 62,
    height: 16,
  },
  frame: {
    position: "absolute",
    top: 4,
    left: 8,
    width: 359,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  screenshot20240901At1232: {
    alignSelf: "start",
    maxWidth: "100%",
    overflow: "hidden",
    height: 27,
    width: "100%",
  },
  screenshot20240901At1234: {
    width: 205,
    height: 179,
    marginLeft: 16,
  },
  groupChild: {
    position: "absolute",
    top: 0,
    left: 19,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorAliceblue,
    width: 226,
    height: 25,
  },
  rentConvertedTo: {
    position: "absolute",
    top: 4,
    left: 0,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.imprimaRegular,
    color: "#4b6ee1",
    textAlign: "center",
    width: 265,
    height: 13,
  },
  rectangleParent: {
    width: 265,
    height: 25,
    marginLeft: 28,
  },
  frame4: {
    width: 293,
    height: 224,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
  },
  coLivingPartner: {
    fontSize: FontSize.size_mini,
  },
  zeroCostEmi: {
    fontSize: FontSize.size_3xs,
  },
  coLivingPartnerRentOkContainer: {
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 294,
    height: 163,
    marginLeft: 19,
  },
  groupItem: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: "#d2f4b7",
    width: 250,
    height: 30,
  },
  zeroCostEmi1: {
    position: "absolute",
    top: 8,
    left: 12,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.imprimaRegular,
    color: "#329309",
    textAlign: "center",
    width: 220,
    height: 11,
  },
  rectangleGroup: {
    width: 250,
    height: 30,
    marginLeft: 7,
  },
  frame5: {
    width: 313,
    height: 204,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 11,
  },
  frame3: {
    width: 313,
    height: 443,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
  },
  byClickingOn: {
    color: Color.colorBlack,
  },
  viewLoanAgreement: {
    textDecoration: "underline",
    color: Color.colorCornflowerblue_200,
  },
  kfs1: {
    textDecoration: "underline",
  },
  kfs: {
    color: Color.colorCornflowerblue_200,
  },
  agreedToThe: {
    color: "#0d0e0e",
  },
  byClickingOnContainer: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.imprimaRegular,
    textAlign: "center",
    width: 273,
    height: 36,
    marginLeft: 18,
  },
  groupInner: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_mini,
    backgroundColor: "#4494eb",
    width: 210,
    height: 30,
  },
  continue: {
    position: "absolute",
    top: 8,
    left: 27,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.imprimaRegular,
    color: Color.colorWhite,
    textAlign: "center",
    width: 148,
    height: 15,
  },
  rectangleContainer: {
    width: 210,
    height: 30,
    marginLeft: 19,
  },
  frame6: {
    width: 291,
    height: 82,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: Gap.gap_md,
  },
  frame2: {
    backgroundColor: Color.colorWhite,
    width: 375,
    height: 638,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 12,
    gap: 26,
  },
  frame1: {
    position: "absolute",
    top: 23,
    left: -7,
    width: 389,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  iphone86: {
    position: "relative",
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 667,
    overflow: "hidden",
  },
});

export default IPhone84;
