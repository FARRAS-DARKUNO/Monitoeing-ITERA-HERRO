import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        padding: 20,
        flexDirection: "column-reverse",
    },
    buttonBack: {
        // justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        width: '60%'
    },
    detail: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'red',
        marginBottom: 10,
    },

});

export default styles