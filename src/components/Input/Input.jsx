import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Style from './Input.Style';

const Input = ({setText, text, handleAddTodo}) => {
  const [changeColor, setChangeColor] = useState('#808080');

  return (
    <View style={Style.container}>
      <TextInput
        style={Style.textInput}
        placeholder="Yapılacak Ekle..."
        onChangeText={setText}
        value={text}
        onFocus={() => setChangeColor('orange')}
        onBlur={() => setChangeColor('#808080')}
      />
      <TouchableOpacity
        style={{
          margin: 10,
          padding: 10,
          backgroundColor: `${changeColor}`,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          fontWeight: 'bold',
        }}
        onPress={handleAddTodo}>
        <Text style={{color: 'white'}}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Input;
