import React, {useState} from 'react';
import {Keyboard, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View} from "react-native";
import {BASE_URL, CAR_LIST_AND_CAR_DETAIL_SCREENS, CONTAINER_STYLES, INPUTS} from "../../../utils/constants";
import CustomButton from "../../button/button.component";

const AddNewCarComponent = ({navigation}) => {
	const [textInput, setText] = useState({});
	const {height} = useWindowDimensions();

	const addItem = () => {
		fetch(`${BASE_URL}/cars.json`, {
			method: "POST",
			body: JSON.stringify(textInput)
		})
			.then(response => {
				return response.json()
			})
			.then(data => {
				navigation.navigate(CAR_LIST_AND_CAR_DETAIL_SCREENS.CARS_LIST)
			})
			.catch(error => {
			});
		setText('');
		Keyboard.dismiss();
	};

	return (
		<ScrollView style={{height: height, backgroundColor: "#fff"}}>
			<View style={CONTAINER_STYLES.container}>
				<View>
					<Text style={styles.text}>Image URL</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => {
							setText({...textInput, [INPUTS.PHOTO]: text});
						}}
						placeholder="Image URL"
					/>
				</View>
				<View>
					<Text style={styles.text}>Make of Car</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => {
							setText({...textInput, [INPUTS.MAKE]: text});
						}}
						placeholder="Make"
					/>
				</View>
				<View>
					<Text style={styles.text}>Model of Car</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => {
							setText({...textInput, [INPUTS.MODEL]: text});
						}}
						placeholder="Model"
					/>
				</View>
				<View>
					<Text style={styles.text}>Manufacturing Year</Text>
					<TextInput
						style={styles.textInput}
						keyboardType="numeric"
						onChangeText={(text) => {
							setText({...textInput, [INPUTS.MANUFACTURING_YEAR]: text});
						}}
						placeholder="Manufacturing Year"
					/>
				</View>
				<View>
					<Text style={styles.text}>Engine Power</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => {
							setText({...textInput, [INPUTS.ENGINE_POWER]: text});
						}}
						placeholder="Engine Power"
					/>
				</View>
				<View>
					<Text style={styles.text}>Color</Text>
					<TextInput
						style={styles.textInput}
						onChangeText={(text) => {
							setText({...textInput, [INPUTS.COLOR]: text});
						}}
						placeholder="Color"
					/>
				</View>
				<CustomButton
					buttonText="Save Car"
					width={250}
					buttonHeight={50}
					handlePress={addItem}
					colorB="royalblue"
					marginTop={20}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 16,
		fontWeight: "bold"
	},
	textInput: {
		paddingLeft: 20,
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		width: 250,
		height: 50,
		marginVertical: 10,
	},
});

export default AddNewCarComponent;
