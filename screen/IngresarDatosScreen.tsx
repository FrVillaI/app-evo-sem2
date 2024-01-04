import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { guardarGastos } from '../componets/FireBaseActions'

export default function IngresarDatosScreen() {

  const [id, setid] = useState('')
  const [monto, setmonto] = useState('')
  const [categoria, setcategoria] = useState('')
  const [descripcion, setdescripcion] = useState('')

  const guadarUsuario = () => {
    guardarGastos(id, monto, categoria, descripcion);
    mostrarMensaje();
  };

  const mostrarMensaje = () => {
    Alert.alert('Éxito', 'Se agregó la información con éxito', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresar Gastos</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese ID'
        onChangeText={(texto) => setid(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder='Ingrese el Monto'
        onChangeText={(texto) => setmonto(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder='Ingrese la Categoria'
        onChangeText={(texto) => setcategoria(texto)}
      />

      <TextInput
        style={styles.input}
        placeholder='Ingrese la Descripcion'
        onChangeText={(texto) => setdescripcion(texto)}
      />

      <Button title='Guardar' onPress={guadarUsuario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
  },
})