import {Image, StyleSheet, View} from "react-native";

const CatPics = () => {

    const cats = [
        'https://www.vets4pets.com/siteassets/species/cat/kitten/tiny-kitten-in-field.jpg',
        'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/video/caring_for_your_kitten_video/650x350_caring_for_your_kitten_video.jpg',
        'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&w=1000&q=80',
        'https://imgix.bustle.com/uploads/image/2018/10/18/4e1afb93-afba-49fe-96e6-b2bbd1ea0125-safe-toys-for-kittens.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70'
    ];

    return (
        cats.map((cat, index) =>
            <Image source={{uri: cat}} key={index} style={styles.catPic}/>)
    );
};

const styles = StyleSheet.create({
    catPic: {
        flex:1,
        width: undefined,
        height:undefined
    }
})

export default CatPics;
