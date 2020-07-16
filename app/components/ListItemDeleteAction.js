import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ListItemDeleteAction() {
    return (
        <View style={styles.delete}>
        </View>
    )
}

const styles = StyleSheet.create({
    delete: {
        backgroundColor: 'red',
        flex: 1

    }
})
