import React,{ useState } from "react";
import { style } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { View } from 'react-native'
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { useAuth } from "../../contexts/auth";

export default function Login (){

    const [email, setEmail] = useState('arthur@gmail.com');
    const [password, setPassword] = useState('12345');
    const [showPassword, setShowPassword] = useState(true);
    const { login } = useAuth();

    return(
        <View style={style.container}>
            <View style={style.boxMid}>
                <Input 
                    title="E-MAIL"
                    value={email}
                    onChangeText={setEmail}
                    IconRight={MaterialIcons}
                    iconRightName="email"
                />
                <Input 
                    title="SENHA"
                    value={password}
                    onChangeText={setPassword}
                    IconRight={Octicons}
                    iconRightName={showPassword ? "eye-closed": "eye"}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                    secureTextEntry={showPassword ? true : false}
                    multiline={false}
                />
            </View>
            <View style={style.boxBottom}>
                <Button text="ENTRAR" onPress={()=> login(email, password)}/>
            </View>
        </View>
    )
}