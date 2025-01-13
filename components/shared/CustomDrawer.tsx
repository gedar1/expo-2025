import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'

const CustomDrawer = () => {
  return (
    <DrawerContentScrollView>
      <View className='flex-1 items-center justify-center'>
        <View className='flex-1 items-center justify-center '>
          <Text className='text-3xl font-firacode-light text-primary'>GD</Text>
        </View>
      </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer