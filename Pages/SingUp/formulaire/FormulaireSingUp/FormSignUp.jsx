import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import IconUserInput from "../../../../assets/images/IconUserInput.png";
import IconPasswordInput from "../../../../assets/images/IconPasswordInput.png";
import IconMail from "../../../../assets/images/IconMail.jpg";
import Icontelephone from "../../../../assets/images/Icontelephone.jpg";
import Txt from "../../../../Components/Txt/Txt";
import { useNavigation } from "@react-navigation/native";
import { s } from "./FormSignUp.style";

const FormSignUp = () => {
  const nav = useNavigation();
  return (
    <View style={s.containerFormSignUp}>
      <View style={s.formInput}>
        <TextInput style={s.styleInputText} placeholder="UserName" />
        <Image style={s.iconSignUp} source={IconUserInput} />
      </View>
      <View style={s.formInput}>
        <TextInput style={s.styleInputText} placeholder="Telephone" />
        <Image style={s.iconSignUp} source={Icontelephone} />
      </View>
      <View style={s.formInput}>
        <TextInput style={s.styleInputText} placeholder="E-mail" />
        <Image style={s.iconSignUp} source={IconMail} />
      </View>
      <View style={s.formInput}>
        <TextInput
          style={s.styleInputText}
          current-password
          placeholder="Password"
        />
        <Image style={s.iconSignUp} source={IconPasswordInput} />
      </View>
      <View style={s.formInput}>
        <TextInput
          style={s.styleInputText}
          current-password
          placeholder="Confirmation mot de passe"
        />
        <Image style={s.iconSignUp} source={IconPasswordInput} />
      </View>
      <TouchableOpacity style={s.bouttonValid}>
        <Txt>Valider</Txt>
      </TouchableOpacity>
      <View style={s.textInfo}>
        
        <TouchableOpacity onPress={() => nav.goBack()}>
          <Txt>Se connecter</Txt>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormSignUp;
