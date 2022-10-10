import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Switch,
} from 'react-native';
import stylesGlobal from '../utils/style_global';

const CardMonitoring = (props) => {

    let data = props.data

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View style={styles.card}>
            <View style={styles.titleAndIcon}>
                <Image style={styles.imageIcon} source={{ uri: data.icon }} />
                <View style={stylesGlobal.space10} />
                <Text style={[stylesGlobal.header2, stylesGlobal.primer]}>
                    {data.name}
                </Text>
            </View>

            <Switch
                trackColor={{ false: "#767577", true: "#767577" }}
                thumbColor={isEnabled ? data.color : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 60,
        backgroundColor: '#ffff',
        borderRadius: 10,
        borderColor: '#171717',
        shadowOpacity: 1,
        elevation: 1,
        shadowRadius: 1,
        marginBottom: 10,
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    titleAndIcon: {
        flexDirection: 'row',

    },
    imageIcon: {
        height: 24,
        width: 24,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CardMonitoring