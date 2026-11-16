import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function Friends() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.fullWrapper}>

                <View style={styles.unevenRowContainer}>
                    <View style={[styles.circle, {backgroundColor: '#f2d0a4'}]} />
                    <Text style={styles.title}>Friends</Text>
                </View>

                <View style={styles.searchBoxContainer}>
                    <View style={styles.searchBox}/>
                    <Text style={styles.searchBoxText}>Search friends...</Text>
                </View>

                <Text style={styles.sectionText}>Your Friends</Text>

                <View style={styles.friendRow}>
                    <View style={[styles.avatar, {backgroundColor: '#f2d0a4'}]}>
                        <Text style={styles.avatarText}>M</Text>
                    </View>
                    <View style={styles.friendInfo}>
                        <Text style={styles.friendName}>Marisol Reyes</Text>
                        <Text style={styles.friendSub}>Golden Hour — JVKE</Text>
                    </View>
                    <View style={styles.tagPill}>
                        <Text style={styles.tagPillText}>Friends</Text>
                    </View>
                </View>

                <View style={styles.friendRow}>
                    <View style={[styles.avatar, {backgroundColor: '#bc9ec1'}]}>
                        <Text style={[styles.avatarText, {color: '#ffffff'}]}>D</Text>
                    </View>
                    <View style={styles.friendInfo}>
                        <Text style={styles.friendName}>Deshawn Cole</Text>
                        <Text style={styles.friendSub}>Sunday Best — Surfaces</Text>
                    </View>
                    <View style={styles.tagPill}>
                        <Text style={styles.tagPillText}>Friends</Text>
                    </View>
                </View>

                <View style={styles.friendRow}>
                    <View style={[styles.avatar, {backgroundColor: '#c8d6af'}]}>
                        <Text style={styles.avatarText}>P</Text>
                    </View>
                    <View style={styles.friendInfo}>
                        <Text style={styles.friendName}>Priya Nair</Text>
                        <Text style={styles.friendSub}>Blue — Yung Kai</Text>
                    </View>
                    <View style={styles.tagPill}>
                        <Text style={styles.tagPillText}>Friends</Text>
                    </View>
                </View>

                <Text style={[styles.sectionText, {marginTop: 30}]}>Suggestions</Text>

                <View style={styles.friendRow}>
                    <View style={[styles.avatar, {backgroundColor: '#f2d0a4'}]}>
                        <Text style={styles.avatarText}>O</Text>
                    </View>
                    <View style={styles.friendInfo}>
                        <Text style={styles.friendName}>Omar Diaz</Text>
                        <Text style={styles.friendSub}>4 mutual friends</Text>
                    </View>
                    <View style={styles.addButton}>
                        <Text style={styles.addButtonText}>Add</Text>
                    </View>
                </View>

                <View style={styles.friendRow}>
                    <View style={[styles.avatar, {backgroundColor: '#bc9ec1'}]}>
                        <Text style={[styles.avatarText, {color: '#ffffff'}]}>K</Text>
                    </View>
                    <View style={styles.friendInfo}>
                        <Text style={styles.friendName}>Kayla Wu</Text>
                        <Text style={styles.friendSub}>2 mutual friends</Text>
                    </View>
                    <View style={styles.addButton}>
                        <Text style={styles.addButtonText}>Add</Text>
                    </View>
                </View>

                <View style={styles.friendRow}>
                    <View style={[styles.avatar, {backgroundColor: '#c8d6af'}]}>
                        <Text style={styles.avatarText}>S</Text>
                    </View>
                    <View style={styles.friendInfo}>
                        <Text style={styles.friendName}>Sam Patel</Text>
                        <Text style={styles.friendSub}>1 mutual friend</Text>
                    </View>
                    <View style={styles.pendingPill}>
                        <Text style={styles.pendingPillText}>Pending</Text>
                    </View>
                </View>

                <View style={styles.findButtonContainer}>
                    <Text style={styles.findButtonText}>+  Find More Friends</Text>
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
    searchBoxContainer: {
        width: 350,
        height: 50,
        alignSelf: 'center',
        marginBottom: 25,
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
        paddingLeft: 20,
        paddingTop: 15,
    },
    sectionText: {
        fontSize: 15,
        color: '#000000',
        fontWeight: 'bold',
        marginLeft: 5,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    friendRow: {
        width: 350,
        minHeight: 70,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginBottom: 10,
    },
    avatar: {
        width: 44,
        height: 44,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
    },
    avatarText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 17,
    },
    friendInfo: {
        flex: 1,
    },
    friendName: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000000',
    },
    friendSub: {
        fontSize: 12.5,
        color: '#000000',
        marginTop: 2,
    },
    tagPill: {
        backgroundColor: '#c8d6af',
        borderRadius: 9999,
        paddingVertical: 6,
        paddingHorizontal: 14,
    },
    tagPillText: {
        fontSize: 12.5,
        fontWeight: 'bold',
        color: '#000000',
    },
    addButton: {
        backgroundColor: '#a4303f',
        borderRadius: 9999,
        paddingVertical: 7,
        paddingHorizontal: 16,
    },
    addButtonText: {
        fontSize: 12.5,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    pendingPill: {
        backgroundColor: '#ffeccc',
        borderRadius: 9999,
        paddingVertical: 7,
        paddingHorizontal: 14,
    },
    pendingPillText: {
        fontSize: 12.5,
        fontWeight: 'bold',
        color: '#000000',
    },
    findButtonContainer: {
        width: 350,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#a4303f',
        borderRadius: 25,
        marginTop: 20,
        marginBottom: 75,
    },
    findButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 17.5,
    },
});
