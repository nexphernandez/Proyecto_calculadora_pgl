import { Colors } from '@/app-example/constants/theme';
import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen(){
    return (
        <view style={styles.container}>
            <Text style={styles.text}>About screen</Text>
        </view>
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