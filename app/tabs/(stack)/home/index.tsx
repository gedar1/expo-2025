import { View, Text } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const HomeScreen = () => {
  return (
    <View className='flex-1 items-center justify-start'>

      <CustomButton className='w-96' children='products' color='primary' onPress={() => router.push('/tabs/(stack)/products')} />
      <CustomButton className='w-96' children='profile' color='secondary' onPress={() => router.push('/tabs/(stack)/profile')} />
      <CustomButton className='w-96' children='settings' color='tertiary' onPress={() => router.push('/tabs/(stack)/settings')} />
      {/* <Link href="/products">Products</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/settings">Settings</Link> */}
      <Link href="/tabs/(stack)/products" asChild>
        <CustomButton className='w-96' children='products' color='primary' />
      </Link>
    </View>
  )
}

export default HomeScreen