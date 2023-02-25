import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';

import {HeaderTitle} from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    //* El KeyboardAvoidingView y ScrollView nos permite hacer scroll con el teclado abierto
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="TextInputs" />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su nombre"
            autoCorrect={false} // no muestra sugerencias o errores en nombres raros
            autoCapitalize="words" // cada vez que escribo un nombre se capitaliza
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su email"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
            keyboardAppearance="dark"
          />
          <View style={stylesScreen.switchRow}>
            <Text style={stylesScreen.switchText}>Suscribirse</Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su teléfono"
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
          />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

//? https://reactnative.dev/docs/textinput
//? https://reactnative.dev/docs/keyboardavoidingview
