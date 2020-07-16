import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Alert, Platform, StatusBar, View } from 'react-native';
import { userDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function safeLayoutRendering() {
    const { landscape } = useDeviceOrientation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ height: landscape ? '100%' : '30%' }}></View>


        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    },
});
