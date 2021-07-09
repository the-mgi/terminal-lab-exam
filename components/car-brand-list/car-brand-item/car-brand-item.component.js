import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';

const CarBrandItemComponent = ({name, founded}) => {
	const {width} = useWindowDimensions();
	return (
		<View style={{...styles.carBrandItemContainer, width: width - 20}}>
			<Text style={styles.textContainer}>
				<Text style={styles.bold}>Name: </Text>
				<Text style={styles.text}>{name}</Text>
			</Text>
			<Text style={styles.textContainer}>
				<Text style={styles.bold}>Founded In: </Text>
				<Text>{founded}</Text>
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	carBrandItemContainer: {
		borderColor: "#c4c0c0",
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		marginBottom: 10
	},
	textContainer: {
		marginBottom: 10
	},
	bold: {
		fontSize: 16,
		fontWeight: "bold"
	},
	text: {
		fontSize: 16
	},
});

export default CarBrandItemComponent;
