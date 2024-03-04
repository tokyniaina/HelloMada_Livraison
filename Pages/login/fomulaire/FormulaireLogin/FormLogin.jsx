import { View, Text, TextInput, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
import { s } from "./FormLogin.style";
import IconUserInput from "../../../../assets/images/IconUserInput.png";
import IconPasswordInput from "../../../../assets/images/IconPasswordInput.png";
import Txt from "../../../../Components/Txt/Txt";

const FormLogin = () => {
  return (
    <View style={s.containerFormLogin}>
      <View style={s.formInput}>
        <TextInput style={s.styleInputText} placeholder="UserName" />
        <Image style={s.iconLogin} source={IconUserInput} />
      </View>
      <View style={s.formInput}>
        <TextInput style={s.styleInputText} current-password placeholder="Password" />
        <Image style={s.iconLogin} source={IconPasswordInput} />
      </View>
        <TouchableOpacity style={s.bouttonValid}>
            <Txt>Valider</Txt>
        </TouchableOpacity>
      <View style={s.textInfo}>
        <TouchableOpacity>
            <Txt>Mot de passe oublier</Txt>
        </TouchableOpacity>
        <TouchableOpacity>
            <Txt>S'inscrire</Txt>
        </TouchableOpacity>
        
        
      </View>
    </View>
  );
};

export default FormLogin;
