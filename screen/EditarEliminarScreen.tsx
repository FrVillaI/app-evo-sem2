import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { deleteGastos, updateGastos } from '../componets/FireBaseActions';

export default function EditarEliminarScreen() {

    const [id, setid] = useState('')
    const [monto, setmonto] = useState('')
    const [categoria, setcategoria] = useState('')
    const [descripcion, setdescripcion] = useState('')
    const [idE, setidE] = useState('')

  const eliminarUsuario = () => {
    deleteGastos(idE);
    mostrarMensajeEl();
  };

  const actualizarUsuario = () => {
    updateGastos(id, monto, categoria,descripcion);
    mostrarMensajeAc();
  };

  const mostrarMensajeAc = () => {
    Alert.alert('Éxito', 'Se actualizo la información con éxito', [{ text: 'OK' }]);
  };

  const mostrarMensajeEl = () => {
    Alert.alert('Éxito', 'Se elimino la información con éxito', [{ text: 'OK' }]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Actualizar Gastos</Text>
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

      <Button title='Actualizar' onPress={() => actualizarUsuario()} color='green' />

      <View style={styles.container}>
      <Text style={styles.title}>Eliminar Gasto</Text>
      <TextInput
        style={styles.input}
        placeholder='Ingrese la cedula'
        onChangeText={(texto) => setidE(texto)}
      />

      <Button title='Eliminar' onPress={() => eliminarUsuario()} color='red' />
    </View>
    </View>
  )
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