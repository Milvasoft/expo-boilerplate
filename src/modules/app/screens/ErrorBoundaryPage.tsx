import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

const ErrorBoundaryPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hata!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  text:{
    
  }
})

export default ErrorBoundaryPage
