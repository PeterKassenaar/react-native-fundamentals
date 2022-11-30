import {StyleSheet, Text, View} from 'react-native';
import PersonTouchable from "./components/PersonTouchable";
import {useState} from "react";
import PersonPressable from "./components/PersonPressable";

export default function App() {

    const [selectedPerson, setSelectedPerson] = useState('');

    const selectPerson = (person) =>{
        setSelectedPerson(person)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>List of people:</Text>
            {/*2. Persons as Touchables */}
            <PersonTouchable />

            {/*3. If you handle a press here, in the parent component. You would*/}
            {/*create a prop called select (or the like)*/}
            {/*<PersonFlatList select={(person)=>selectPerson(person)} />*/}

            {/*4. Using Pressable (more modern way of handling interaction):*/}
            {/*<PersonPressable/>*/}
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
        fontSize: 26,
        backgroundColor: '#eee',
        paddingTop: 40,
    },
});
