import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

const App = () => {
  return (
    <SafeAreaView >
      {/* <Redirect href="/tabs/(stack)/home" /> */}
      <Redirect href="/drawer" />
    </SafeAreaView>
  )
  // return (
  //   // <SafeAreaView>
  //   <View className='mt-10 flex-1 items-center justify-center'>
  //     <Text className='text-3xl font-firacode-light text-primary'>Sara Arbelaez</Text>
  //     <Text className='text-2xl font-firacode-regular text-primary-200'>Sara Arbelaez</Text>
  //     <Text className='text-xl font-firacode-medium text-primary-300'>Sara Arbelaez</Text>
  //     <Link href="/products" className='text-2xl font-workSans-black'>Products</Link>
  //   </View>
  //   //</SafeAreaView> 
  // )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});