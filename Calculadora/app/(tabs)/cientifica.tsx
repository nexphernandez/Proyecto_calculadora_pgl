import { Colors } from '@/app-example/constants/theme';
import { Text, View, StyleSheet } from 'react-native';

export default function cientificaScreen(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
    },
});