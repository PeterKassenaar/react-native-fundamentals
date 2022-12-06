import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import * as Battery from 'expo-battery';

const BatteryApi = () => {
    // 0. State in this component for the Battery items
    const [isAvailable, setIsAvailable] = useState(null);
    const [batteryLevel, setBatteryLevel] = useState(-1);
    const [batteryState, setBatteryState] = useState(Battery.BatteryState.UNKNOWN);
    const [lowPowerMode, setLowPowerMode] = useState(false);

    // 1. useEffect hook when component loads. Empty dependency array at the end.
    useEffect(() => {
        // 2. Using an async function inside useEffect, and calling it immediately.
        (async () => {
            const [isAvailable, batteryLevel, batteryState, lowPowerMode] = await Promise.all([
                Battery.isAvailableAsync(),
                Battery.getBatteryLevelAsync(),
                Battery.getBatteryStateAsync(),
                Battery.isLowPowerModeEnabledAsync(),
            ]);

            // 3. await all the above Promises, then set the state variables:
            setIsAvailable(isAvailable);
            setBatteryLevel(batteryLevel);
            setBatteryState(batteryState);
            setLowPowerMode(lowPowerMode);
        })();

        // 4. Create event listeners for the variables that are removed/unsubscribed
        // when the component is destroyed
        const batteryLevelListener = Battery.addBatteryLevelListener(({batteryLevel}) =>
            setBatteryLevel(batteryLevel)
        );
        const batteryStateListener = Battery.addBatteryStateListener(({batteryState}) =>
            setBatteryState(batteryState)
        );
        const lowPowerModeListener = Battery.addLowPowerModeListener(({lowPowerMode}) =>
            setLowPowerMode(lowPowerMode)
        );

        // 5. When component is destroyed, remove event listeners/subscribers
        return () => {
            batteryLevelListener && batteryLevelListener.remove();
            batteryStateListener && batteryStateListener.remove();
            lowPowerModeListener && lowPowerModeListener.remove();
        };
    }, [])

    // 6. Translating the batteryState to a useful string
    const getBatteryStateString = (batteryState) => {
        switch (batteryState) {
            case Battery.BatteryState.UNPLUGGED:
                return 'Unplugged';
            case Battery.BatteryState.CHARGING:
                return 'Charging';
            case Battery.BatteryState.FULL:
                return 'Full';
            case Battery.BatteryState.UNKNOWN:
            default:
                return 'Unknown';
        }
    }

    return (
        <View style={styles.container}>
            {/*Only return status etc. if battery is available*/}
            {isAvailable
                ?
                <View>
                    <Text style={styles.label}>Battery Level:</Text>
                    <Text style={styles.value}>{Math.round(batteryLevel * 100)} %</Text>
                    <Text style={styles.label}>State:</Text>
                    <Text style={styles.value}>{getBatteryStateString(batteryState)}</Text>
                    <Text style={styles.label}>Battery available?</Text>
                    <Text style={styles.value}>{isAvailable.toString()}</Text>
                </View>
                : <Text> 'Battery API is not supported on this device' </Text>}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#eee'
    },
    label: {
        fontSize: 24,
    },
    value: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'coral'
    }
})
export default BatteryApi;
