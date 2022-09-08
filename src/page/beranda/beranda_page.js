import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import stylesGlobal from '../../utils/style_global';

const BerandaPage = ({ navigation }) => {
    return (
        <View>
            <Text style = {
                stylesGlobal.primer
            }>
                Hello word
            </Text>
        </View>
    );
};

export default BerandaPage;