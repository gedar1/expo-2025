import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className='flex items-center justify-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary'>
        <View className='flex items-center justify-center bg-white rounded-full w-24 h-24 '>
          <Text className='text-3xl font-firacode-light text-primary'>GD</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer