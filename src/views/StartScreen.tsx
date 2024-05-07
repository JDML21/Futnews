import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useReducer, useState } from 'react'

export default function StartScreen({navigation}: any) {

    const [textEmail,setTextEmail] = useState("")
    const [textPassword, setTextPassword] = useState("")
    

    return (
        <View style={{
            flex:1
            }}>
            <Image source={require("../../assets/2.png")} style={{transform:[{rotate:'180deg'}]}}/>       
        <View style={{
            flex:1,
            flexDirection:'column',
            justifyContent:'center',
            backgroundColor:'#FFFFFF'
        }}>
            <TextInput
                    style={{
                        height: 40,
                        width: 350,
                        marginLeft: 20,
                        marginBottom:20,
                        borderWidth: 1,
                        padding: 10,
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        backgroundColor:'#3943B7',
                        borderRadius:20,
                        color:'#ECE5F0'
                    }}
                    onChangeText={setTextEmail}
                    placeholder='Correo'
                    value={textEmail}
                    keyboardType="default"
                />
                <TextInput
                    style={{
                        height: 40,
                        width: 350,
                        marginLeft: 20,
                        marginBottom:30,
                        borderWidth: 1,
                        padding: 10,
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        backgroundColor:'#3943B7',
                        borderRadius:20,
                        color:'#ECE5F0'
                    }}
                    onChangeText={setTextPassword}
                    placeholder='Contraseña'
                    value={textPassword}
                    keyboardType="default"
                />
                <TouchableOpacity
                style={{
                    maxWidth:80,
                    borderRadius:25,
                    backgroundColor:'#3943B7',
                    marginLeft:160
                }}
            >
                <Text style ={{
                            margin:15,
                            textAlign: 'center',
                            color:'#ECE5F0'
                        }}>
                            {"Login"}
                        </Text>
            </TouchableOpacity>
            </View>
            <Image source={require("../../assets/2.png")}/> 
        </View>
        )
    
    }