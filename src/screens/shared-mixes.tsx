import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default function SharedMixes() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.fullWrapper}>
                <View style={[styles.unevenRowContainer]}>
                     <View style={[styles.defaultBoxContainer, {height: 60, width: 60, marginTop: -5}]}>   
                        <View style={[styles.circle, {backgroundColor: '#f2d0a4'}]}>
                            <Text style={[styles.defaultText, {fontWeight: 'bold', fontSize: 35, marginTop: -5, paddingLeft: 5}]}>←</Text>
                        </View>
                    </View>
                    <Text style={[styles.title, {marginLeft: 10}]}>Shared Mixes</Text>
                </View>
                
                <Text style={[styles.defaultText, {fontWeight: 'bold', marginLeft: -5}]}>Featured Mix</Text>
                
                <View style={[styles.defaultBoxContainer, {marginBottom: 30}]}>
                    <View style={[styles.defaultBox, {backgroundColor: '#a4303f', height: 240}]}>
                        <View style={[styles.unevenRowContainer]}>
                            <View style={[styles.defaultBoxContainer, {height: 20, width: 100}]}>
                                <View style = {[styles.defaultBox, {backgroundColor: 'white', marginTop: -3.5, marginLeft: 25, position: 'absolute'}]}>
                                    <Text style={[styles.defaultText, {fontSize: 11, color: '#a4303f', position: 'absolute', paddingLeft: 18, marginTop: 2.5, fontWeight: 'bold'}]}>ACTIVE NOW</Text>
                                </View>
                            </View>
                            <Text style={[styles.defaultText, {fontSize: 10, color: 'white', position: 'absolute', paddingLeft: 250, marginTop: 20}]}>Updated 15m ago</Text>
                        </View>
                        <Text style={[styles.defaultText, {color: 'white', position:'absolute', paddingTop: 60, paddingLeft: 20, fontSize: 30, fontWeight: 'bold'}]}>Friday Vibes</Text>
                        <Text style={[styles.defaultText, {color: 'white', position:'absolute', paddingTop: 110, paddingLeft: 20, fontSize: 15}]}>Weekly high-energy tracks hand-picked for the weekend launch.</Text>
                        <View style={[styles.unevenRowContainer]}>
                            <View style={[styles.defaultBoxContainer, {height: 60, width: 60}]}>
                                <View style={[styles.circle, {backgroundColor: '#bc9ec1', marginTop: 82.5, marginLeft: 27.5, position: 'absolute', width: 40, height: 40}]}>
                                    <Text style={[styles.defaultText, {color: 'white', fontSize: 20 ,fontWeight: 'bold', paddingTop: 5, paddingLeft: 11.5, position: 'absolute'}]}>M</Text>
                                </View>
                            </View>
                            <View style={[styles.defaultBoxContainer, {height: 60, width: 60}]}>
                                <View style={[styles.circle, {backgroundColor: '#c8d6af', marginTop: 82.5, marginLeft: 15, position: 'absolute', width: 40, height: 40}]}>
                                    <Text style={[styles.defaultText, {fontSize: 20 ,fontWeight: 'bold', paddingTop: 5, paddingLeft: 13, position: 'absolute'}]}>J</Text>
                                </View>
                            </View>
                            <View style={[styles.defaultBoxContainer, {height: 60, width: 60}]}>
                                <View style={[styles.circle, {backgroundColor: '#f2d0a4', marginTop: 82.5, marginLeft: 2, position: 'absolute', width: 40, height: 40}]}>
                                    <Text style={[styles.defaultText, {fontSize: 20 ,fontWeight: 'bold', paddingTop: 5, paddingLeft: 14, position: 'absolute'}]}>S</Text>
                                </View>
                            </View>
                            <View style={[styles.defaultBoxContainer, {height: 60, width: 60}]}>
                                <View style={[styles.circle, {backgroundColor: '#ffeccc', marginTop: 82.5, marginLeft: -9, position: 'absolute', width: 40, height: 40}]}>
                                    <Text style={[styles.defaultText, {fontSize: 20 ,fontWeight: 'bold', paddingTop: 5, paddingLeft: 9, position: 'absolute'}]}>+2</Text>
                                </View>
                            </View>
                            <View style={[styles.defaultBoxContainer, {height: 60, width: 60}]}>
                                <View style={[styles.circle, {backgroundColor: '#f2d0a4', marginTop: 80, marginLeft: 30, position: 'absolute'}]}>
                                    <Text style={[styles.defaultText, {color: '#a4303f', fontSize: 25 ,fontWeight: 'bold', paddingTop: 7, paddingLeft: 14, position: 'absolute'}]}>▷</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[styles.unevenRowContainer]}>
                    <Text style={[styles.defaultText, {fontWeight: 'bold', paddingTop: 80}]}>Friends' Mixes</Text>
                    <View style={[styles.defaultBoxContainer, {height: 20, width: 100}]}>
                        <View style={[styles.defaultBox, {backgroundColor: '#c8d6af', marginTop: 32.5, marginLeft: 110, height: 20, width: 100, alignItems: 'center', justifyContent: 'center'}]}>
                            <Text style={[styles.defaultText, {fontWeight: 'bold', fontSize: 12.5}]}>Friends Only</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.defaultBoxContainer}>
                    <View style={[styles.defaultBox, {height: 75}]}/>
                    <View style={[styles.rowContainer, {position: 'absolute', paddingLeft: 20, paddingTop: 7.5}]}>
                        <Text style={[styles.defaultText, {fontWeight: 'bold', fontSize: 15}]}>Chill Sunday Mornings</Text>
                        <Text style={[styles.defaultText, {fontSize: 10, paddingLeft: 125, paddingTop: 0}]}>2h ago</Text>
                    </View>
                    <Text style={[styles.defaultText, {position: 'absolute', fontSize: 12.5, paddingLeft: 35, paddingTop: 42.5}]}>3 contributors  •  32 songs</Text>
                    <Text style = {[styles.defaultText, {position: 'absolute', fontSize: 15, color: '#a4303f', paddingLeft: 315, paddingTop: 40}]}>❯</Text>

                </View>

                <View style={[styles.defaultBoxContainer, {marginTop: -60}]}>
                    <View style={[styles.defaultBox, {height: 75}]}/>
                    <View style={[styles.rowContainer, {position: 'absolute', paddingLeft: 20, paddingTop: 7.5}]}>
                        <Text style={[styles.defaultText, {fontWeight: 'bold', fontSize: 15}]}>Workout Hits</Text>
                        <Text style={[styles.defaultText, {fontSize: 10, paddingLeft: 190, paddingTop: 0}]}>1d ago</Text>
                    </View>
                    <Text style={[styles.defaultText, {position: 'absolute', fontSize: 12.5, paddingLeft: 35, paddingTop: 42.5}]}>5 contributors  •  45 songs</Text>
                    <Text style = {[styles.defaultText, {position: 'absolute', fontSize: 15, color: '#a4303f', paddingLeft: 315, paddingTop: 40}]}>❯</Text>
                </View>

                <View style={[styles.defaultBoxContainer, {marginTop: -60}]}>
                    <View style={[styles.defaultBox, {height: 75}]}/>
                    <View style={[styles.rowContainer, {position: 'absolute', paddingLeft: 20, paddingTop: 7.5}]}>
                        <Text style={[styles.defaultText, {fontWeight: 'bold', fontSize: 15}]}>Indie Discoveries</Text>
                        <Text style={[styles.defaultText, {fontSize: 10, paddingLeft: 160, paddingTop: 0}]}>3d ago</Text>
                    </View>
                    <Text style={[styles.defaultText, {position: 'absolute', fontSize: 12.5, paddingLeft: 35, paddingTop: 42.5}]}>3 contributors  •  18 songs</Text>
                    <Text style = {[styles.defaultText, {position: 'absolute', fontSize: 15, color: '#a4303f', paddingLeft: 315, paddingTop: 40}]}>❯</Text>

                </View>

                <View style={[styles.defaultBoxContainer, {marginTop: -45}]}>
                    <View style={[styles.defaultBox, {height: 60, backgroundColor: '#a4303f', borderRadius: 25}]}/>
                    <Text style={[styles.defaultText, {fontWeight: 'bold', fontSize: 17.5, position: 'absolute', color: 'white', paddingTop: 16, alignSelf: 'center'}]}>+  Create Mix with Friends</Text>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#ffeccc",
    },
    fullWrapper: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 40,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 15,
        marginBottom: 20,
        marginTop: 5,
        alignSelf: 'flex-start',
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
        marginVertical: 10,
    },
    rowContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 10,
    },
    defaultText: {
        fontSize: 20,
        color: 'black',
        //fontWeight: 'bold',
    },
    defaultBoxContainer: {
        width: 350,
        height: 150,
        alignSelf: 'center',
        //marginBottom: 40,
        marginTop: 20,
    },
    defaultBox: {
        width: '100%',
        height: '100%',
        borderRadius: 25,
        backgroundColor: 'white',
    }
})