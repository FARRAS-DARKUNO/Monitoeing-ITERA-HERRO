import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // backgroundColor: 'red',
        paddingHorizontal: 10,
        marginVertical: 20,
    },
    insideCard: {
        width: '100%',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    persenData: {
        width: '45%',
        height: 180,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#171717',
        shadowOpacity: 1,
        borderRadius: 10,
        elevation: 1,
        shadowRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    titleAndIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageIcon: {
        height: 24,
        width: 24,
        backgroundColor: 'red',
        resizeMode: 'stretch',
    },

});

export default styles