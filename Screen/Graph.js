import { Text, View, StyleSheet, Image, ScrollView,SafeAreaView } from 'react-native'
import React, { Component } from 'react'

export default class Graph extends Component {
  render() {
    return (
      <SafeAreaView>
<ScrollView>
      <View>
        <View style={{top:20}}>
          <Text style={{fontSize:12,fontWeight:'500',left:25,color:'#161616',top:2}}>3000</Text>
          <Image source={require("../assets/line.png")} style={{position:'absolute',top:11,alignSelf:'center',width:280,left:75}} />
          <Text style={{fontSize:12,top:25,left:25,fontWeight:'500',color:'#161616'}}>2500</Text>
          <Image source={require("../assets/line.png")} style={{position:'absolute',top:50,alignSelf:'center',width:280,left:75}} />
          <Text style={{fontSize:12,left:23,top:50,fontWeight:'500',color:'#161616'}}> 2000</Text>
          <Image source={require("../assets/line.png")} style={{position:'absolute',top:90,alignSelf:'center',width:278,left:75}} />
          <Text style={{fontSize:12,left:25,top:70,fontWeight:'500',color:'#161616'}}>1500</Text>
          <Image source={require("../assets/line.png")} style={{position:'absolute',top:130,alignSelf:'center',width:278,left:75}} />
          <Text style={{fontSize:12,top:87,left:25,fontWeight:'500',color:'#161616'}}>1000</Text>
          <Image source={require("../assets/line.png")} style={{position:'absolute',top:163,alignSelf:'center',width:278,left:75}} />
          <Text style={{fontSize:12,top:105,left:27,fontWeight:'500',color:'#161616'}}>500</Text>
          <Image source={require("../assets/line.png")} style={{position:'absolute',top:197,alignSelf:'center',width:278,left:75}} />

          <Image source={require("../assets/graph.png")} style={{position:'absolute',alignSelf:'center',top:51,width:250,height:145,left:104}} />
          <Image source={require("../assets/graphline.png")} style={{position:'absolute',alignSelf:'center',top:51,width:250,height:145,left:104}} />

        </View>
        <View style={{justifyContent:'space-around',flexDirection:'row',margin:150,}}>
          <View>
          <Text style={{fontSize:12,top:45,left:25,fontWeight:'500',color:'#161616'}}>mon</Text>
          <Text style={{fontSize:12,top:45,left:25,fontWeight:'500',color:'#161616'}}>tue</Text>
          <Text style={{fontSize:12,top:45,left:25,fontWeight:'500',color:'#161616'}}>wed</Text>
          <Text style={{fontSize:12,top:45,left:25,fontWeight:'500',color:'#161616'}}>thu</Text>
          <Text style={{fontSize:12,top:45,left:25,fontWeight:'500',color:'#161616'}}>fri</Text>
          <Text style={{fontSize:12,top:45,left:25,fontWeight:'500',color:'#161616'}}>sat</Text>
          <Text style={{fontSize:12,top:45,left:25,fontWeight:'500',color:'#161616'}}>sun</Text>
        </View>
        </View>
</View>


      </ScrollView>
      </SafeAreaView>
    )
  }
}