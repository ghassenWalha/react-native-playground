import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";

import AppText from "./AppText";

import colors from "../config/colors.json";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({ title, subTitle, image, onPress, renderRightActions, renderLeftActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions} renderLeftActions={renderLeftActions}>
      <TouchableHighlight onPress={onPress}
        underlayColor={colors.light}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>

    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
