import React from 'react';
import {Alert, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import {BASE_URL} from "../../../../utils/constants";

const CarItemComponent = ({imageUrl, make, model, id, navigation, setCarsList, carsList, completeObject}) => {
	const {width} = useWindowDimensions();
	const CARD_WIDTH = ((width - 20));
	const CARD_HEIGHT = 70;

	const deleteCarItem = () => {
		Alert.alert(
			`Are you sure you want to delete?`,
			"The selected car would be deleted!",
			[
				{
					text: "No",
					onPress: () => {
					}
				},
				{
					text: "Yes",
					onPress: () => {
						fetch(`${BASE_URL}/cars/${id}.json`, {
							method: "DELETE"
						})
							.then(response => {
								setCarsList(carsList.filter(obj => obj.key !== id));
							})
							.catch(error => {
							});
					}
				}
			]
		);
	};

	return (
		<TouchableOpacity activeOpacity={1} onPress={() => {
			navigation.navigate("CAR_DETAILS", {completeObject: completeObject})
		}}>
			<View style={{...styles.carItemContainer, width: CARD_WIDTH, height: CARD_HEIGHT}}>
				<View style={{flexDirection: "row"}}>
					<View>
						<Image
							style={{...styles.image, height: CARD_HEIGHT, width: CARD_HEIGHT}}
							source={{
								uri: imageUrl.indexOf("www") > -1 ? imageUrl : "https://via.placeholder.com/150"
							}}
						/>
					</View>
					<View style={styles.textContainer}>
						<Text style={{marginBottom: 5}}>
							<Text style={styles.type}>Make: </Text>
							<Text style={styles.fontSize}>{make}</Text>
						</Text>
						<Text style={{marginBottom: 5}}>
							<Text style={styles.type}>Model: </Text>
							<Text style={styles.fontSize}>{model}</Text>
						</Text>
					</View>
				</View>
				<TouchableOpacity onPress={deleteCarItem}>
					<View style={styles.crossContainer}>
						<Text style={styles.crossItself}>x</Text>
					</View>
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	carItemContainer: {
		borderWidth: 1,
		borderColor: "#c4c0c0",
		borderRadius: 8,
		flexDirection: "row",
		marginBottom: 10,
		backgroundColor: "#fff",
		justifyContent: "space-between"
	},
	image: {
		borderRadius: 8,
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0
	},
	textContainer: {
		marginLeft: 20,
		justifyContent: "center"
	},
	type: {
		fontSize: 18,
		fontWeight: "bold"
	},
	fontSize: {
		fontSize: 18
	},
	crossContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	crossItself: {
		width: 30,
		height: 30,
		borderRadius: 50,
		backgroundColor: "red",
		fontSize: 22,
		margin: 10,
		marginRight: 20,
		color: "#fff",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center"
	}
});

export default CarItemComponent;
