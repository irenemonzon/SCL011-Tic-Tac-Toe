import React,{Component} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import{MaterialCommunityIcons as Icon}from'react-native-vector-icons';
class App extends Component{

  constructor(props){
    super(props);

    this.state={
      gamestate:[
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ],
      player:1
    }
  }
 
  componentDidMount(){
    this.initgame();
  }
  initgame=()=>{
    this.setState({gamestate:
      [
        [0,0,0],
        [0,0,0],
        [0,0,0]
      ]
    });
  }

  renderIcon =(row,col)=>{
    let IconVal=this.state.gamestate[row][col];
    switch(IconVal)
    {
      case 1: return <Icon name='close' style={styles.iconsX}/>;
      case -1: return <Icon name='circle-outline' style={styles.icon0}/>;
      default: return <View/>;
    }

  }

  render(){

    return(
      <View style={styles.container}>

        <View style={{flexDirection:'row', backgroundColor:'white',}}>

          <TouchableOpacity style={styles.grid}>
          {this.renderIcon(0,0)}
          
          </TouchableOpacity >

          <TouchableOpacity  style={styles.grid}>
          {this.renderIcon (0,1)}
          </TouchableOpacity >

          <TouchableOpacity  style={styles.grid}>
            {this.renderIcon (0,2)}
          </TouchableOpacity >
        
        </View>

        <View style={{flexDirection:'row',backgroundColor:'white'}}>

          <TouchableOpacity style={styles.grid}>
            {this.renderIcon (1,0)}
          </TouchableOpacity >
          <TouchableOpacity style={styles.grid}>
            {this.renderIcon (1,1)}
          </TouchableOpacity >

          <TouchableOpacity  style={styles.grid}>
             {this.renderIcon (1,2)}
          </TouchableOpacity >

        </View>
        
        <View style={{flexDirection:'row',backgroundColor:'white'}}>

          <View style={styles.grid}>
          {this.renderIcon (2,0)}
          </View>
          <View style={styles.grid}>
          {this.renderIcon (2,1)}
          </View>
          <View style={styles.grid}>
          {this.renderIcon (2,2)}
          </View>

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
    borderWidth:2,
    width:100,
    height:100,
    alignItems:'center',
    justifyContent:'center'
  },
  iconsX:{
    color:'red',
    fontSize:60 
  },
  icon0:{
    color:'green',
    fontSize:60
  }
 
})

export default App