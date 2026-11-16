import {StyleSheet, Text, View, ScrollView, Pressable} from 'react-native';
import {useAuth} from '../context/AuthContext';

export default function Profile() {
    const {signOut} = useAuth();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.fullWrapper}>

                <View style={styles.unevenRowContainer}>
                    <View style={[styles.circle, {backgroundColor: '#f2d0a4'}]} />
                    <Text style={styles.title}>Profile</Text>
                </View>

                <View style={styles.profileHeader}>
                    <View style={[styles.bigAvatar, {backgroundColor: '#bc9ec1'}]}>
                        <Text style={styles.bigAvatarText}>J</Text>
                    </View>
                    <Text style={styles.name}>Jordan Lee</Text>
                    <Text style={styles.handle}>@jordanlee</Text>
                    <Text style={styles.stats}>86 posts  •  204 friends  •  5 mixes</Text>
                </View>

                <Text style={styles.sectionText}>Favorite Artists</Text>
                <View style={styles.evenRowContainer}>
                    <View style={[styles.artistCircle, {backgroundColor: '#f2d0a4'}]}>
                        <Text style={styles.artistInitial}>J</Text>
                    </View>
                    <View style={[styles.artistCircle, {backgroundColor: '#bc9ec1'}]}>
                        <Text style={[styles.artistInitial, {color: '#ffffff'}]}>S</Text>
                    </View>
                    <View style={[styles.artistCircle, {backgroundColor: '#c8d6af'}]}>
                        <Text style={styles.artistInitial}>Y</Text>
                    </View>
                    <View style={[styles.artistCircle, {backgroundColor: '#f2d0a4'}]}>
                        <Text style={styles.artistInitial}>R</Text>
                    </View>
                    <View style={[styles.artistCircle, {backgroundColor: '#ffeccc'}]}>
                        <Text style={styles.artistInitial}>+3</Text>
                    </View>
                </View>

                <Text style={[styles.sectionText, {marginTop: 25}]}>Recent Drops</Text>

                <View style={styles.dropCard}>
                    <Text style={styles.dropCardSong}>Golden Hour</Text>
                    <Text style={styles.dropCardArtist}>JVKE</Text>
                    <Text style={styles.dropCardMood}>feeling golden</Text>
                </View>

                <View style={styles.dropCard}>
                    <Text style={styles.dropCardSong}>Sunday Best</Text>
                    <Text style={styles.dropCardArtist}>Surfaces</Text>
                    <Text style={styles.dropCardMood}>feeling easy</Text>
                </View>

                {/* Mock: flips isSignedIn back to false. Firebase Auth replaces this later. */}
                <Pressable style={styles.signOutContainer} onPress={signOut}>
                    <Text style={styles.signOutText}>Sign Out</Text>
                </Pressable>

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
    circle: {
        width: 50,
        height: 50,
        borderRadius: 9999,
    },
    unevenRowContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 10,
    },
    evenRowContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 30,
    },
    bigAvatar: {
        width: 90,
        height: 90,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    bigAvatarText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 32,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    handle: {
        fontSize: 12.5,
        color: '#000000',
        marginTop: 2,
        marginBottom: 12,
    },
    stats: {
        fontSize: 12.5,
        color: '#000000',
    },
    sectionText: {
        fontSize: 15,
        color: '#000000',
        fontWeight: 'bold',
        marginLeft: 5,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    artistCircle: {
        width: 50,
        height: 50,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
    },
    artistInitial: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000000',
    },
    dropCard: {
        width: 350,
        minHeight: 90,
        alignSelf: 'center',
        backgroundColor: '#f2d0a4',
        borderRadius: 25,
        justifyContent: 'center',
        paddingHorizontal: 25,
        paddingVertical: 18,
        marginBottom: 15,
    },
    dropCardSong: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000000',
    },
    dropCardArtist: {
        fontSize: 12.5,
        color: '#000000',
        marginTop: 2,
    },
    dropCardMood: {
        fontSize: 12.5,
        color: '#000000',
        marginTop: 8,
    },
    signOutContainer: {
        width: 350,
        height: 60,
        alignSelf: 'center',
        backgroundColor: '#a4303f',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        marginBottom: 75,
    },
    signOutText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 20,
    },
});
