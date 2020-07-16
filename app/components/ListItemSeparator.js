import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../config/colors.json';
export default function ListItemSeparator() {
    return (
        <View style={styles.separator}>

        </View>
    )
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.light
    }
})
