import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

const CustomButton = ({buttonText, handlePress, key, width, colorB, buttonHeight, ...styleProps}) => {
	return (
		<TouchableOpacity key={key} onPress={() => handlePress(buttonText)} style={{...styleProps, marginBottom: 10}}>
			<View style={{...styles.button, width: width, backgroundColor: colorB, height: buttonHeight}}>
				<Text style={{...styles.buttonText}}>
					{buttonText}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		height: 50,
		borderRadius: 5,
		paddingHorizontal: 10
	},
	buttonText: {
		color: "white",
		fontSize: 18
	},
});

export default CustomButton;
