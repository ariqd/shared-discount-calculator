import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const PeopleInput = (props) => {
  const updateName = (name) => props.onPeopleUpdate(props.item.id, name);

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputHeader}>
        <Text style={styles.header2}>Pembeli {props.peopleIndex + 1}</Text>
        {props.item.id > 1 && (
          <TouchableOpacity onPress={() => props.onPeopleDelete(props.item.id)}>
            <Text style={{color: 'red', fontWeight: 'bold'}}>Hapus</Text>
          </TouchableOpacity>
        )}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nama (Opsional)"
        onChangeText={(text) => updateName(text)}
      />
    </View>
  );
};

export default PeopleInput;

const styles = StyleSheet.create({
  label: {
    marginBottom: 5,
  },
  inputContainer: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: 'gainsboro',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  inputHeader: {
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'gainsboro',
    backgroundColor: '#ffffff',
    marginBottom: 5,
  },
});
