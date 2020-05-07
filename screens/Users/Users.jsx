import React, { useEffect } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import UserItem from '../../components/UserItem/UserItem'
import Screen from 'components/ui/Screen'

const Users = ({ navigation, users, getUsers }) => {
  useEffect(() => {
    getUsers()
  }, [])

  const renderUser = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('chat', { receiverId: item.uid })}
    >
      <UserItem {...item} />
    </TouchableOpacity>
  )

  return (
    <Screen pb={10}>
      <FlatList
        data={users}
        keyExtractor={user => user.uid}
        renderItem={renderUser}
      />
    </Screen>
  )
}

export default Users
