import React from "react";
import { View, Text, FlatList } from "react-native";

export class Home extends React.Component{

	state={
		data:[]
	}

	componentWillMount(){
		this.getData();
	}

	getData = () =>{
		this.setState({},()=>fetch('http://192.168.1.100:3000/api/todoItems/').then(res=>res.json()).then(result=>{
			if(result){
				this.setState({
					data:result.map(item=>({
						...item
					}))
				})
			}
		}))
	}

	render(){
		return <View style={{height: '100%'}}>
		
			<View style={{paddingTop:40, backgroundColor:'#2e3641', height: 80}}>
				<Text style={{color: '#fff', fontSize: 18, lineHeight:40, paddingLeft:10}}>Title</Text>
			</View>
			<View style={{paddingTop:10, paddingLeft: 10}}>
				<FlatList 
					data={this.state.data}
					renderItem={({item})=><View>
						<Text style={{fontSize: 14, fontWeight:'bold', lineHeight:30}}>{item.title}</Text>
						<Text style={{paddingBottom:15}}>{item.description}</Text>
					</View>}
				/>
			</View>
		</View>
	}



}