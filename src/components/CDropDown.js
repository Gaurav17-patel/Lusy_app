// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React, { useState } from "react";
// import { Fonts } from "../constant";
// import { Colors } from "../theme";
// import {
//   horizontalScale,
//   moderateScale,
//   verticalScale,
// } from "../helper/Metrics";
// import { checkbox, unCheckbox } from "../assets";
// import AntDesign from "react-native-vector-icons/AntDesign";

// const CDropDown = (props) => {
//   // const [openD, setOpenD] = useState(false);
//   const [selectval, setSelectval] = useState("");
//   // const [checked, setChecked] = useState(false);

//   return (
//     <>
//       <View style={styles.dropContainer}>
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <Image
//             source={props.checked ? checkbox : unCheckbox}
//             style={styles.checkboxStyle}
//           />

//           <Text style={styles.dropdownTxt}>{props.title}</Text>
//         </View>

//         <TouchableOpacity onPress={props.onArrowPress}>
//           <AntDesign name="down" size={15} />
//         </TouchableOpacity>
//       </View>

//       <View
//         style={{
//           display: props.open && props.data ? "flex" : "none",
//           marginTop: 0,
//           marginBottom: 40,
//         }}
//       >
//         <Text style={styles.heading}>average duration?</Text>
//         <View style={styles.dataContainer}>
//           {props.data &&
//             props.data.length > 0 &&
//             props.data.map((item, index) => {
//               return (
//                 <TouchableOpacity
//                   style={styles.itemContainer}
//                   // onPress={() => {
//                   //   setSelectval(item.name);
//                   //   setChecked(true);
//                   // }}
//                   onPress={props.onItemPress}
//                   key={index}
//                 >
//                   <Text
//                     style={[
//                       styles.itemTxt,
//                       {
//                         backgroundColor:
//                           selectval != item.name
//                             ? Colors.onBoardBackground
//                             : "rgba(255, 212, 101, 0.25)",
//                       },
//                     ]}
//                   >
//                     {item.name}
//                   </Text>
//                 </TouchableOpacity>
//               );
//             })}
//         </View>
//       </View>
//     </>
//   );
// };

// export default CDropDown;

// const styles = StyleSheet.create({
//   dropContainer: {
//     flexDirection: "row",
//     marginTop: verticalScale(9),
//     padding: moderateScale(9),
//     marginHorizontal: horizontalScale(22),
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   dropdownTxt: {
//     fontSize: moderateScale(17),
//     fontFamily: Fonts.fontExtraBoldMontserrat,
//     marginLeft: horizontalScale(8),
//     color: Colors.deactiveDotBorderColor,
//   },
//   itemContainer: {
//     margin: 9,
//     width: "100%",
//   },
//   itemTxt: {
//     fontSize: moderateScale(17),
//     fontFamily: Fonts.fontExtraBoldMontserrat,
//     color: Colors.deactiveDotBorderColor,
//     textAlign: "center",
//   },
//   saveTxt: {
//     color: Colors.onBoardBackground,
//     textAlign: "center",
//     fontSize: moderateScale(21),
//     fontFamily: Fonts.fontExtraBoldMontserrat,
//   },
//   saveBtn: {
//     alignSelf: "center",
//     backgroundColor: Colors.deactiveDotBorderColor,
//     width: horizontalScale(263),
//     height: verticalScale(60),
//     marginTop: verticalScale(12),
//     justifyContent: "center",
//     borderRadius: moderateScale(16),
//   },
//   dataContainer: {
//     borderWidth: 2,
//     width: "90%",
//     alignSelf: "center",
//     alignItems: "center",
//     height: "auto",
//     borderRadius: 9,
//     borderBottomWidth: 6,
//   },
//   checkboxStyle: {
//     width: horizontalScale(28),
//     height: verticalScale(32),
//     resizeMode: "contain",
//   },
//   heading: {
//     fontSize: 18,
//     textAlign: "center",
//     marginBottom: 9,
//     color: Colors.deactiveDotBorderColor,
//   },
// });
