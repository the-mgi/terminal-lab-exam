import React from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from "react-native";
import {INPUTS} from "../../../utils/constants";

const CarDetailsComponent = ({navigation, route}) => {
	const {width, height} = useWindowDimensions();
	const {completeObject} = route.params;

	const {
		[INPUTS.PHOTO]: imageUrl,
		[INPUTS.MAKE]: make,
		[INPUTS.MODEL]: model,
		[INPUTS.COLOR]: color,
		[INPUTS.ENGINE_POWER]: enginePower,
		[INPUTS.MANUFACTURING_YEAR]: manufacturingYear
	} = completeObject;

	return (
		<View style={{...styles.mainDetailsContainer, height: height, width: width}}>
			<View style={styles.innerContainer}>
				<Image
					style={{...styles.image, width: (width - 40), height: 200}}
					source={{
						uri: imageUrl.indexOf("www") > -1 ? imageUrl : "https://via.placeholder.com/150"
					}}
				/>
				<View style={{marginTop: 20}}>
					<Text style={styles.textContainer}>
						<Text style={styles.bold}>Make of Car: </Text>
						<Text style={styles.text}>{make}</Text>
					</Text>
					<Text style={styles.textContainer}>
						<Text style={styles.bold}>Model of Car: </Text>
						<Text style={styles.text}>{model}</Text>
					</Text>
					<Text style={styles.textContainer}>
						<Text style={styles.bold}>Manufacturing Year of Car: </Text>
						<Text style={styles.text}>{manufacturingYear}</Text>
					</Text>
					<Text style={styles.textContainer}>
						<Text style={styles.bold}>Engine Power of Car: </Text>
						<Text style={styles.text}>{enginePower}</Text>
					</Text>
					<Text style={styles.textContainer}>
						<Text style={styles.bold}>Color of Car: </Text>
						<Text style={styles.text}>{color.toUpperCase()}</Text>
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainDetailsContainer: {
		backgroundColor: "#fff",
		alignItems: "center",
	},
	innerContainer: {
		margin: 10
	},
	image: {
		borderRadius: 5
	},
	textContainer: {
		marginBottom: 10
	},
	bold: {
		fontSize: 18,
		fontWeight: "bold"
	},
	text: {
		fontSize: 18
	},
	colorContainer: {
		borderWidth: 1,
		borderColor: "gray",
		width: 50,
		height: 50
	}
});

export default CarDetailsComponent;
