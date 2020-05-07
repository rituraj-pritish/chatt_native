import React from 'react'

import CustomText from 'components/ui/CustomText'
import { ItemWrapper, Avatar, Online } from './UserItem.styled'

const UserItem = ({ displayName, online, photoURL }) => {
  return (
    <ItemWrapper>
      <Avatar source={{ uri: photoURL }}>{online && <Online />}</Avatar>
      <CustomText>{displayName}</CustomText>
    </ItemWrapper>
  )
}

export default UserItem
