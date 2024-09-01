import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Color,
  Border,
  FontFamily,
  FontSize,
  Padding,
  Gap,
} from "../GlobalStyles";

const IPhone8 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.iphone81, styles.frameFlexBox]}>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View
          style={[styles.screenshot20240831At1247Parent, styles.frame7FlexBox]}
        >
          <Image
            style={styles.screenshot20240831At1247}
            contentFit="cover"
            source={require("../assets/screenshot-20240831-at-124728pm-1.png")}
          />
          <Text style={styles.searchResults}>Search Results</Text>
          <Image
            style={styles.screenshot20240831At104}
            contentFit="cover"
            source={require("../assets/screenshot-20240831-at-10450pm-1.png")}
          />
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={[styles.gurgaonWrapper, styles.parentFlexBox]}>
            <Text style={[styles.gurgaon, styles.skyContainerTypo]}>
              Gurgaon
            </Text>
          </View>
          <Pressable
            style={[styles.frame3, styles.frameFlexBox]}
            onPress={() => navigation.navigate("IPhone81")}
          >
            <View style={styles.vectorParent}>
              <Image
                style={[styles.frameChild, styles.icon1Layout]}
                contentFit="cover"
                source={require("../assets/rectangle-5.png")}
              />
              <View
                style={[
                  styles.skyDandelionsApartment16SParent,
                  styles.skyLayout,
                ]}
              >
                <Text
                  style={[
                    styles.skyDandelionsApartmentContainer,
                    styles.skyLayout,
                  ]}
                >
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
                  source={require("../assets/star-1.png")}
                />
              </View>
              <Image
                style={[styles.icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/1-1.png")}
              />
            </View>
          </Pressable>
        </View>
        <View style={styles.frame4}>
          <View style={[styles.frame3, styles.frameFlexBox]}>
            <Pressable
              style={[styles.parent, styles.parentFlexBox]}
              onPress={() => navigation.navigate("IPhone81")}
            >
              <Image
                style={[styles.icon1, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/1-11.png")}
              />
              <View style={styles.skyDandelionsApartment16SGroup}>
                <Text
                  style={[
                    styles.skyDandelionsApartmentContainer1,
                    styles.groupItemPosition,
                  ]}
                >
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
                  style={[styles.groupItem, styles.groupItemPosition]}
                  contentFit="cover"
                  source={require("../assets/star-11.png")}
                />
              </View>
            </Pressable>
          </View>
          <View style={[styles.frame6, styles.frameFlexBox]}>
            <View
              style={[
                styles.screenshot20240831At1247Parent,
                styles.frame7FlexBox,
              ]}
            >
              <View style={[styles.frame7, styles.frame7FlexBox]}>
                <Image
                  style={styles.screenshot20240831At1026}
                  contentFit="cover"
                  source={require("../assets/screenshot-20240831-at-102617pm-1.png")}
                />
                <View style={[styles.frame8, styles.parentFlexBox1]}>
                  <Image
                    style={styles.screenshot20240831At1027}
                    contentFit="cover"
                    source={require("../assets/screenshot-20240831-at-102711pm-1.png")}
                  />
                  <Image
                    style={styles.screenshot20240831At10271}
                    contentFit="cover"
                    source={require("../assets/screenshot-20240831-at-102756pm-1.png")}
                  />
                </View>
              </View>
              <Image
                style={styles.screenshot20240831At1028}
                contentFit="cover"
                source={require("../assets/screenshot-20240831-at-102832pm-1.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
  },
  frame7FlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  parentFlexBox: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_mini,
    justifyContent: "flex-end",
    alignSelf: "stretch",
  },
  skyContainerTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.imprimaRegular,
  },
  icon1Layout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  skyLayout: {
    width: 130,
    height: 139,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    height: 152,
    borderRadius: Border.br_mini,
  },
  groupItemPosition: {
    top: "50%",
    position: "absolute",
  },
  parentFlexBox1: {
    flexDirection: "row",
    alignItems: "center",
  },
  screenshot20240831At1247: {
    width: 63,
    height: 56,
  },
  searchResults: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.imprimaRegular,
  },
  screenshot20240831At104: {
    width: 78,
    height: 56,
  },
  screenshot20240831At1247Parent: {
    alignSelf: "stretch",
  },
  frame: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  gurgaon: {
    fontSize: FontSize.size_xl,
    width: 76,
    height: 18,
  },
  gurgaonWrapper: {
    height: 55,
    paddingHorizontal: 46,
    paddingVertical: Padding.p_mid,
  },
  frameChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxHeight: "100%",
    position: "absolute",
    width: "100%",
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
    marginLeft: -65,
    top: 0,
    height: 139,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.imprimaRegular,
  },
  groupChild: {
    marginLeft: -56,
    top: 46,
    width: 9,
    height: 9,
    left: "50%",
    position: "absolute",
  },
  skyDandelionsApartment16SParent: {
    marginLeft: 13.5,
    top: 24,
    height: 139,
  },
  icon: {
    top: 17,
    width: 153,
    left: 0,
    position: "absolute",
  },
  vectorParent: {
    height: 181,
    alignSelf: "stretch",
  },
  frame3: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  frame2: {
    gap: 19,
    justifyContent: "flex-end",
    width: 321,
    overflow: "hidden",
  },
  icon1: {
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
  skyDandelionsApartmentContainer1: {
    marginTop: -69.5,
    width: 147,
    left: 0,
    height: 139,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.imprimaRegular,
  },
  groupItem: {
    marginTop: -23.5,
    left: 10,
    width: 10,
    height: 9,
  },
  skyDandelionsApartment16SGroup: {
    height: 139,
    flex: 1,
  },
  parent: {
    paddingHorizontal: 8,
    paddingTop: 14,
    paddingBottom: Padding.p_mini,
    gap: Gap.gap_sm,
    flexDirection: "row",
    alignItems: "center",
  },
  screenshot20240831At1026: {
    width: 28,
    height: 32,
  },
  screenshot20240831At1027: {
    width: 30,
    height: 34,
  },
  screenshot20240831At10271: {
    width: 33,
    height: 50,
  },
  frame8: {
    width: 113,
    gap: 50,
    height: 50,
    overflow: "hidden",
  },
  frame7: {
    width: 198,
    overflow: "hidden",
  },
  screenshot20240831At1028: {
    width: 27,
    height: 31,
  },
  frame6: {
    alignSelf: "stretch",
  },
  frame4: {
    gap: 36,
    width: 321,
    alignItems: "center",
    overflow: "hidden",
  },
  frame1: {
    gap: 34,
    alignSelf: "stretch",
    alignItems: "center",
    overflow: "hidden",
  },
  iphone81: {
    backgroundColor: Color.colorWhite,
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_mini,
    gap: Gap.gap_md,
    alignItems: "center",
    width: "100%",
    flex: 1,
  },
});

export default IPhone8;
