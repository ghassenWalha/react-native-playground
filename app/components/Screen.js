import React from 'react';
import {
    SafeAreaView, StyleSheet
} from 'react-native'
import Constants from 'expo-constants'
import { useDeviceOrientation } from '@react-native-community/hooks'

const Screen = ({ children }) => {
    const { landscape } = useDeviceOrientation();
    const height = { height: landscape ? '100%' : '100%' }
    return (
        <SafeAreaView style={styles.safeForAndroid}>
            {children}
        </SafeAreaView>);
}

export default Screen;

const styles = StyleSheet.create({
    safeForAndroid: {
        paddingTop: Constants.statusBarHeight
    }
});