import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { onValue, ref } from 'firebase/database';
import { db } from '../config/config';

export default function VerDatosScreen() {
  const [id, setid] = useState('');
  const [monto, setmonto] = useState('')
  const [categoria, setcategoria] = useState('')
  const [descripcion, setdescripcion] = useState('')
  const [datos, setDatos] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const starCountRef = ref(db, 'gastos/');
    const fetchData = () => {
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const dataArr: any = Object.keys(data).map((key) => ({ key, ...data[key] }));
          setDatos(dataArr);
        } else {
          setDatos(data);
        }
      });
    };

    fetchData();
  }, []);

  type gastos = {
    key: string
    categoria: string;
    monto: string;
    descripcion: string;
  };

  function buscarGasto() {
    const foundGasto = datos.find((gasto: gastos) => gasto.key === id);

    if (foundGasto) {
      setmonto(foundGasto.monto);
      setcategoria(foundGasto.categoria);
      setdescripcion(foundGasto.descripcion);
    } else {
      console.log('Gasto not found');
      setmonto('');
      setcategoria('');
      setdescripcion('');
    }
  }

  const handleItemPress = (item: gastos) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Ver Datos</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese ID"
        onChangeText={(texto) => setid(texto)}
      />
      <Button title="Buscar Gasto" onPress={buscarGasto} />

      <View style={styles.itemContainer}>
        <Text style={styles.label}>Monto:</Text>
        <Text style={styles.text}>{monto}</Text>
        <Text style={styles.label}>Categoria:</Text>
        <Text style={styles.text}>{categoria}</Text>
        <Text style={styles.label}>Descripcion:</Text>
        <Text style={styles.text}>{descripcion}</Text>
      </View>

      <Text style={styles.headerText}>Gastos</Text>

      <FlatList
        data={datos}
        renderItem={({ item }: { item: gastos }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <View style={styles.itemContainer}>
              <Text style={styles.label}>Monto:</Text>
              <Text style={styles.text}>{item.monto}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.headerText}>Detalle del Gasto</Text>
          {selectedItem && (
            <View style={styles.itemContainer}>
              <Text style={styles.label}>Monto:</Text>
              <Text style={styles.text}>{selectedItem.monto}</Text>
              <Text style={styles.label}>Categoria:</Text>
              <Text style={styles.text}>{selectedItem.categoria}</Text>
              <Text style={styles.label}>Descripcion:</Text>
              <Text style={styles.text}>{selectedItem.descripcion}</Text>
            </View>
          )}
          <Button title="Cerrar Detalle" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  modalContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
});