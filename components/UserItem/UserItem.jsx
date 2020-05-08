import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CustomText from 'components/ui/CustomText'
import { ItemWrapper, Avatar, Online } from './UserItem.styled'
import {
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from 'react-native'

const UserItem = ({ displayName, online, photoURL, uid }) => {
  const navigation = useNavigation()
  let Touchable = TouchableOpacity

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback
  }

  const handlePress = () => {
    navigation.navigate('chat', {
      name: displayName.split(' ')[0],
      receiverId: uid,
      photoURL
    })
  }

  return (
    <Touchable onPress={handlePress}>
      <ItemWrapper>
        {/* <View> */}
        <Avatar source={{ uri: photoURL }}>{online && <Online />}</Avatar>
        <CustomText>{displayName}</CustomText>
        {/* </View> */}
      </ItemWrapper>
    </Touchable>
  )
}

export default UserItem
