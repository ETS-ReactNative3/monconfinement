import React, { Component } from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';
import Colors from '../../constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function ActivityItem(props) {
    return(
		<TouchableOpacity 
			activeOpacity={.8}
			onPress={() => props.navigation.navigate("Activité", {
				titre: props.titre,
				img: props.img,
				desc: props.desc,
				type: props.type,
			})}
			>
			
			<View style={styles.container}>
				<View style={styles.imgContainer}>
				<Image
					style={styles.img}
					source={props.img}
				/>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.title}>{props.titre}</Text>
					<View style={styles.orangeLine}></View>
					<Text style={styles.description}>{props.desc}</Text>
				</View>
			</View>
		</TouchableOpacity>
    )
}

const styles = StyleSheet.create({
	container: {
		margin: 10,
		width: '95%',
		height: 150,
		borderRadius: 5,

		backgroundColor: Colors.white,

		flexDirection: 'row',

		shadowColor: "#111",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3,
	},

	imgContainer: {
		backgroundColor: Colors.secondary,

		borderTopLeftRadius: 5,
    	borderBottomLeftRadius: 5,
		marginRight: 10,

		flex: 1
	},

	img: {
		flex: 1,
        width: null,
		height: null,
		borderTopLeftRadius: 5,
    	borderBottomLeftRadius: 5,
	},

	textContainer: {
		flex: 2,
		padding: 10,
	},

	title : {
		fontSize: 20,
		marginBottom: 5
	},

	orangeLine: {
		height: 1,
		width: 75,
		marginBottom: 5,
		borderBottomColor: Colors.primary,
    	borderBottomWidth: 2,
	},

	description: {
		fontSize: 15,
		marginTop: 10,
		color: Colors.text
	}
})