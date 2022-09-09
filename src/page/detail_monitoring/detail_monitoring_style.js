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
    realTime: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    dataRealtime: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        // backgroundColor: 'red',
        width: '75%',
    },
    cisrcle: {
        height: 45,
        width: 45,
        backgroundColor: '#ffff',
        borderRadius: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textRealtime: {
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%'
    },
    checkOn: {
        width: '25%',
        height: 25,
        backgroundColor: '#ffff',
        borderRadius: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export default styles