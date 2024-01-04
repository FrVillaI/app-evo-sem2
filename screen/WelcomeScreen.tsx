import { Button, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function WelcomeScreen({ navigation }: any) {
    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/550x/f6/80/76/f68076d3bbc96fc5cac99714e05f16fd.jpg' }}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Isaac Villacis</Text>
                <Button
                    title='Agregar Gastos'
                    onPress={() => navigation.navigate('Tabs')}
                    color="#084868" 
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.5)', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white', 
        marginBottom: 20,
    },
    buttonText: {
      color: 'black',
  },
});
