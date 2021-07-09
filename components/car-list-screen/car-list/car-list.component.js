import React, {useLayoutEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {StatusBar} from "expo-status-bar";
import CarItemComponent from "./car-item/car-item.component";
import {BASE_URL, CAR_LIST_AND_CAR_DETAIL_SCREENS, CONTAINER_STYLES, INPUTS} from "../../../utils/constants";
import CustomButton from "../../button/button.component";

const CarListComponent = ({navigation}) => {
	const [carsList, setCarsList] = useState([]);

	const getData = async () => {
		const response = await fetch(`${BASE_URL}/cars.json`);
		const data = await response.json();
		const list = [];
		Object.keys(data).map(key => {
			list.push({key: key, value: data[key]});
		});
		setCarsList(list)
	};

	getData();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<View style={{marginRight: 10}}>
					<CustomButton
						handlePress={() => {
							navigation.navigate(CAR_LIST_AND_CAR_DETAIL_SCREENS.ADD_NEW_CAR)
						}}
						buttonText="Add New Car"
						colorB="royalblue"
						width={120}
						buttonHeight={40}
						borderRadius={5}/>
				</View>
			),
		});
	}, []);

	return (
		<View style={{...CONTAINER_STYLES.container}}>
			<ScrollView>
				{carsList.map(({key, value}, index) => {
					return (
						<CarItemComponent
							carsList={carsList}
							setCarsList={setCarsList}
							navigation={navigation}
							key={index}
							imageUrl={value[INPUTS.PHOTO]}
							make={value[INPUTS.MAKE]}
							model={value[INPUTS.MODEL]}
							id={key}
							completeObject={value}
						/>
					);
				})}
			</ScrollView>
			<StatusBar style="auto"/>
		</View>
	);
};

export default CarListComponent;
