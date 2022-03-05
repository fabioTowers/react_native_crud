import React, { useState } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Input } from 'react-native-elements'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    return (
        <View style={style.form}>
            <Input 
                placeholder='Digite...'
                onChangeText={name => setUser({...user, name})}
                label='Nome'
                value={user.name}
            />
            <Input 
                placeholder='Digite...'
                onChangeText={email => setUser({...user, email})}
                label='Email'
                value={user.email}
            />
            <Input 
                placeholder='Digite...'
                onChangeText={name => setUser({...user, name})}
                label='Link da foto de perfil'
                value={user.avatarUrl}
            />
            <Button 
                title="Salvar"
                onPress={() => {
                    navigation.goBack()
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12,
    },
})