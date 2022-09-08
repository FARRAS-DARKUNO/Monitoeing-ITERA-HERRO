import { StyleSheet } from 'react-native';

const SplashScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:"center",
        height: '100%',
        backgroundColor: '#FCFFFC',
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '80%',
        width: '70%',
      },
    logo:{
        // paddingHorizontal: 90
        width: "100%",
        height: 80,
    }
});

export default SplashScreenStyle;