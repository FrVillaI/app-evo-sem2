import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

export default function ApiListScreen() {
    const [datos, setdatos] = useState([])

    const API_BICICLETAS = 'https://jritsqmet.github.io/web-api/bicicletas.json'

    useEffect(() => {

        fetch(API_BICICLETAS)
            .then((response) => response.json())
            .then((data) => setdatos(data.bicicletas))
            .catch((error) => (console.log(error)))
        //console.log(datos)
    }, [])

    type bicicletas = {
        modelo: string,
        tipo: string,
        precio: string,
        color: string,
        marca: string
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>APP LIST</Text>
            <FlatList
                data={datos}
                renderItem={({ item }: { item: bicicletas }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>Modelo: {item.modelo}</Text>
                        <Text style={styles.text}>Descripcion: </Text>
                        <Text style={styles.text}>Tipo: {item.tipo}</Text>
                        <Text style={styles.text}>Color: {item.color}</Text>
                        <Text style={styles.text}>Marca: {item.marca}</Text>
                        <Text style={styles.text}>Precio: {item.precio}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    itemContainer: {
        alignItems: 'center',
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 8,
        borderRadius: 8,
    },
    img: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        marginRight: 8,
        borderRadius: 4,
    },
    textContainer: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        marginBottom: 4,
    },
})