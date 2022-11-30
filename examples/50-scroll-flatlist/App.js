import {StyleSheet, Text, View} from 'react-native';
import PersonList from "./components/PersonList";

export default function App() {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Persons in ScrollView:</Text>
            {/*1. Persons inside a simple ScrollView*/}
            <PersonList />
            {/*2. Persons inside a more complex (but more flexible) FlatList */}
            {/*<PersonFlatList />*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 32,
        backgroundColor: '#eee',
        paddingTop: 40,
    },
});
