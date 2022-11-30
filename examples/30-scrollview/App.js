// 0. Documentation on Images: https://reactnative.dev/docs/image
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CatPics from "./components/CatPics";

export default function App() {
    return (
        <View style={styles.container}>
            {/* 0. Sticky, as it is not inside the scrollview*/}
            <Text style={styles.heading}>Hello, World!</Text>

            {/* 1. Component inside a scrollview, so we can scroll on devices */}
            <ScrollView>
                <CatPics/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 16
    },
    heading: {
        fontSize: 48,
        backgroundColor: '#eee',
    },
    countryImage: {
        width: 400,
        height: 300
    }
});
