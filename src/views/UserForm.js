import React, { useContext, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements'
import UsersContext from '../context/UsersContext'

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(UsersContext)

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
                onChangeText={avatarUrl => setUser({...user, avatarUrl})}
                label='Link da foto de perfil'
                value={user.avatarUrl}
            />
            <Button 
                title="Salvar"
                containerStyle={{
                    
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                titleStyle={{ fontWeight: 'bold', fontSize: 17 }}
                buttonStyle={{
                    borderRadius: 5
                }}
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    })
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