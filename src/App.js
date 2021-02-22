import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
  Dimensions,
} from 'react-native';

const {height} = Dimensions.get('window');

export default function App() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="always">
      <View style={{flexGrow: 1}}>
        <Text style={styles.header}>Shared Discount Calculator</Text>
        <View style={styles.hr} />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Jumlah Produk</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Ongkos Kirim</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nominal Diskon (Rp)</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.header2, {marginBottom: 10}]}>Produk 1</Text>
          <TextInput
            style={styles.input}
            placeholder="Nama Produk (Opsional)"
          />
          <TextInput style={styles.input} placeholder="Harga (Rp)" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.header2, {marginBottom: 10}]}>Produk 2</Text>
          <TextInput
            style={styles.input}
            placeholder="Nama Produk (Opsional)"
          />
          <TextInput style={styles.input} placeholder="Harga (Rp)" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.header2, {marginBottom: 10}]}>Produk 3</Text>
          <TextInput
            style={styles.input}
            placeholder="Nama Produk (Opsional)"
          />
          <TextInput style={styles.input} placeholder="Harga (Rp)" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={[styles.header2, {marginBottom: 10}]}>Produk 4</Text>
          <TextInput
            style={styles.input}
            placeholder="Nama Produk (Opsional)"
          />
          <TextInput style={styles.input} placeholder="Harga (Rp)" />
        </View>
        {/* <View style={styles.inputContainer}>
          <Button title="Tambah Produk" />
        </View> */}
        <View style={styles.inputContainer}>
          <Button title="Hitung Harga Produk Setelah Diskon" />
        </View>
        <View style={styles.inputContainer}>
          <Button title="Reset" />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  header2: {
    fontSize: 20,
  },
  label: {
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'gainsboro',
    backgroundColor: '#fefefe',
    marginBottom: 5,
  },
  hr: {
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginVertical: 15,
  },
});
