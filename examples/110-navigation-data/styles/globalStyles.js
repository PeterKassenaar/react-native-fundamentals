import {StyleSheet} from "react-native";

// We're defining global styles to be used in all screens.
// They are imported over there.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyText: {
        fontSize:24,
    }
});
export default styles
