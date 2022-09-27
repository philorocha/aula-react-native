import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Input, Button, Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModernHeader from 'react-native-modern-header';


const Flex = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, alignItems: "center"}}>
        <Avatar
          rounded
          size="xlarge"
          source={{
            uri:
              'https://avatars.githubusercontent.com/u/14117712?v=4',
          }}
          
        />
      </View>
      <View style={{ flex: 1 }}>
        <Input
          label='E-mail'
          leftIcon={
            <Icon
              name='envelope'
              size={24}
              color='black'
            />
          }
        />
        <Input
          label='Senha'
          secureTextEntry={true}
          leftIcon={
            <Icon
              name='lock'
              size={24}
              color='black'
            />
          }
        />
        <View style={{marginBottom: 10}}>
          <Button
            title="Logar"
          />
        </View>                                                       
        
        <Button
          title="Cadastre-se"
        />
      </View>

      <View style={{ flex: 1 }}>
        
      </View>
    </View>
  );
};

const Cadastro = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      
      <View style={{ flex: 0.5, alignItems: "center" }}>
        <ModernHeader title="Cadastro"
          titleTextStyle={{color: "white"}}
          style={{backgroundColor: "rgb(32, 137, 220)"}}
          leftComponentDisable
          rightComponentDisable
        />
      </View>
      <View style={{ flex: 0.25 }}>
        <Input
          label='Nome'
        />
        <Input
          label='E-mail'
          textContentType="emailAddress"
        />
        <Input
          label='Senha'
          secureTextEntry={true}
        />
                                                                        
        <Button
          title="Cadastrar"
        />
      </View>

      <View style={{ flex: 1 }}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    padding: 2,
  },
});

export default Cadastro;