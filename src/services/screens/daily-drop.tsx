import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function DailyDrop() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.fullWrapper}>
                <View style={[styles.unevenRowContainer]}>
                    <View style={[styles.circle, {backgroundColor: '#f2d0a4'}]} />
                    <Text style={styles.title}>Daily Drop</Text>
                </View>
                <View style= {styles.redBoxContainer}>
                    <View style={styles.redBox}/>
                    <Text style={styles.redBoxPromptText}>TODAY'S PROMPT</Text>
                    <Text style={styles.redBoxSmallText}>closes in 4h</Text>
                    <Text style={styles.redBoxText}>Pick a song that describes your current mood</Text>
                </View>

                <Text style={styles.findText}>Find a song</Text>

                <View style={styles.searchBoxContainer}>
                    <View style={styles.searchBox}/>
                    <Text style={styles.searchBoxText}>Search tracks, artists, albums...</Text>
                </View>

                <View style={styles.orangeBoxContainer}>
                    <View style={styles.orangeBox}/>
                    <Text style = {styles.orangeBoxSongText}>Song Name</Text>
                    <Text style = {styles.orangeBoxArtistText}>Artist Name</Text>
                    <Text style={styles.orangeBoxText}>Open in Spotify</Text>
                </View>

                <Text style={styles.feelText}>How does this song make you feel?</Text>
                
                <View style={styles.evenRowContainer}>
                    <View style={[styles.circle, {backgroundColor: 'white'}]} />
                    <View style={[styles.circle, {backgroundColor: 'white'}]} />
                    <View style={[styles.circle, {backgroundColor: 'white'}]} />
                    <View style={[styles.circle, {backgroundColor: 'white'}]} />
                    <View style={[styles.circle, {backgroundColor: 'white'}]} />
                </View>
                
                <Text style={styles.captionText}>Add a caption</Text>
            
                <View style={styles.captionBoxContainer}>
                    <View style={styles.captionBox}/>
                    <Text style={styles.captionBoxText}>Example Caption</Text>
                </View>

                <View style={styles.dropButtonContainer}>
                    <View style={styles.dropButton}/>
                    <Text style={styles.dropButtonText}>Drop It</Text>
                </View>

                <Text style={styles.friendDropsText}>Friends' Drops Today</Text>

                <View style={styles.friendBoxContainer}>
                    <View style={styles.friendBox}/>
                    <Text style={styles.friendNameText}>Friend Name</Text>
                    <Text style={styles.friendSongText}>Song Name</Text>
                    <Text style={styles.friendArtistText}>Artist Name</Text>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffeccc',
    },
    fullWrapper: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 40,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 10,
        marginBottom: 20,
        alignSelf: 'flex-start',
        paddingLeft: 15,
        color: '#000000',
    },
    redBoxContainer: {
        width: 350,
        height: 150,
        alignSelf: 'center',
        marginBottom: 25,
    },
    redBox: {
        width: '100%',
        height: '100%',
        backgroundColor: '#a4303f',
        borderRadius: 25,
    },
    redBoxPromptText: {
        position: 'absolute',
        color: '#ffffff',
        fontSize: 12.5,
        fontWeight: 'bold',
        paddingLeft: 25,
        paddingTop: 30,
    },
    redBoxSmallText: {
        position: 'absolute',
        color: '#ffffff',
        fontSize: 12.5,
        paddingLeft: 165,
        paddingTop: 30,
    },
    redBoxText: {
        position: 'absolute',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 25,
        paddingLeft: 20,
        paddingTop: 65,
    },
    findText: {
        fontSize: 15,
        color: '#000000',
        //marginTop: 10,
        fontWeight: 'bold',
        marginLeft: 5,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    searchBoxContainer: {
        width: 350,
        height: 50, 
        alignSelf: 'center',
    },
    searchBox: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
    searchBoxText: {
        position: 'absolute',
        color: '#000000',
        fontSize: 15,
        textAlign: 'left',
        paddingLeft: 55,
        paddingTop: 15,
    },
    orangeBoxContainer: {
        width: 350,
        height: 150,
        //alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
    },
    orangeBox: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f2d0a4',
        borderRadius: 25,
    },
    orangeBoxSongText: {
        position: 'absolute',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 100,
        paddingBottom: 60,
    },
    orangeBoxArtistText: {
        position: 'absolute',
        color: '#000000',
        fontSize: 12.5,
        paddingLeft: 100,
        //paddingTop: 0,
    },
        orangeBoxText: {
        position: 'absolute',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 12.5,
        paddingHorizontal: 30,
        paddingTop: 70,
        paddingLeft: 50,
    },
    feelText: {
        fontSize: 15,
        color: '#000000',
        marginTop: 30,
        fontWeight: 'bold',
        marginLeft: 5,
        alignSelf: 'flex-start',
        paddingBottom: 15,
    },
    captionText: {
        fontSize: 15,
        color: '#000000',
        marginTop: 20,
        fontWeight: 'bold',
        marginLeft: 5,
        alignSelf: 'flex-start',
        marginBottom: 15,
    },
    captionBoxContainer: {
        width: 350,
        height: 80,
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 15,
    },
    captionBox: {
        width: '100%',
        height:'100%',
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
    captionBoxText: {
        position: 'absolute',
        fontSize: 15,
        color: '#000000',
        marginLeft: 5,
        alignSelf: 'flex-start',
        padding: 15,
    },
    dropButtonContainer: {
        width: 350,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 5,
        marginTop: 10,
    },
    dropButton: {
        width: '100%',
        height: '100%',
        backgroundColor: '#a4303f',
        borderRadius: 25,
    },
    dropButtonText: {
        position: 'absolute',
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 20,
    },
    friendDropsText: {
        fontSize: 20,
        color: '#000000',
        marginTop: 15,
        marginBottom: 15,
        fontWeight: 'bold',
        marginLeft: 5,
        alignSelf: 'flex-start',
    },
    friendBoxContainer: {
        width: 350,
        height: 70,
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 75,
    },
    friendBox: {
        width: '100%',
        height:'100%',
        backgroundColor: '#ffffff',
        borderRadius: 15,
    },
    friendNameText: {
        position: 'absolute',
        fontSize: 15,
        color: "#000000",
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 70,
        alignSelf: 'flex-start',
    },
    friendSongText: {
        position: 'absolute',
        fontSize: 12.5,
        color: "#000000",
        marginLeft: 70,
        alignSelf: 'flex-start',
        paddingTop: 40,
    },
    friendArtistText: {
        position: 'absolute',
        fontSize: 12.5,
        color: "#000000",
        marginLeft: 70,
        alignSelf: 'flex-start',
        paddingTop: 40,
        paddingLeft: 90,
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 9999,
    },
    evenRowContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginVertical: 10,
    },
    unevenRowContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        marginVertical: 10,
    },
});
