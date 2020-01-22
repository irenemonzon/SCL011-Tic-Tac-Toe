import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

class App extends Component{

  render(){

    return(
      <View style={styles.container}>

        <View style={{flexDirection:'row'}}>

          <View style={[styles.grid, {borderLeftWidth:0,borderTopWidth:0}]}/>
          <View style={[styles.grid,{borderTopWidth:0}]}/>
          <View style={[styles.grid,{borderTopWidth:0,borderRightWidth:0}]}/>

        </View>

        <View style={{flexDirection:'row'}}>

          <View style={[styles.grid,{borderLeftWidth:0}]}/>
          <View style={styles.grid}/>
          <View style={[styles.grid,{borderRightWidth:0}]}/>

        </View>
        
        <View style={{flexDirection:'row'}}>

          <View style={[styles.grid,{borderLeftWidth:0,borderBottomWidth:0}]}/>
          <View style={[styles.grid,{borderBottomWidth:0}]}/>
          <View style={[styles.grid,{borderBottomWidth:0,borderRightWidth:0}]}/>

        </View>
      </View>
      
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#33F3FF',
    alignItems:'center',
    justifyContent:'center'
  },
  grid:{
    borderWidth:1,
    width:100,
    height:100
  },
 
})

export default App