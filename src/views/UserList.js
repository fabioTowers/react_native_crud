import React from 'react'
import { Alert, FlatList, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'
import users from '../data/users'

export default props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    console.warn('Delete ' + user.id)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem
                key={user.id} 
                onPress={() => props.navigation.navigate('UserForm', user)} 
                bottomDivider
            >
                <Avatar rounded source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron
                    onPress={() => navigation.navigate('userForm', user)}
                    iconProps={{name: "edit"}}
                    iconStyle={{fontSize: 25, color: "orange"}}
                />
                <ListItem.Chevron
                    onPress={() => confirmUserDeletion(user)}
                    iconProps={{name: 'delete'}}
                    iconStyle={{fontSize: 25, color: "red"}}
                />
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}