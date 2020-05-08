import React, { useEffect } from 'react'
import { FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import UserItem from '../../components/UserItem/UserItem'
import Screen from 'components/ui/Screen'
import theme from 'app/theme'

const Users = ({ users, getUsers, loading }) => {
  useEffect(() => {
    getUsers()
  }, [])

  const renderUser = ({ item }) => <UserItem {...item} />

  if (loading)
    return (
      <Screen flex={1} justifyContent='center' alignItems='center'>
        <ActivityIndicator size={40} color={theme.primary} />
      </Screen>
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
