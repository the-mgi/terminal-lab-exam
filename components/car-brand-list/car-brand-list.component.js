import React from 'react';
import {ScrollView, View} from 'react-native';
import {CONTAINER_STYLES} from "../../utils/constants";
import CarBrandItemComponent from "./car-brand-item/car-brand-item.component";

const CAR_BRAND = {
	name: "Toyota",
	founded: "1990"
};

const carBrandsList = [CAR_BRAND, CAR_BRAND, CAR_BRAND, CAR_BRAND, CAR_BRAND, CAR_BRAND, CAR_BRAND, CAR_BRAND, CAR_BRAND, CAR_BRAND,]

const CarBrandListComponent = () => {
	return (
		<View style={{...CONTAINER_STYLES.container, paddingTop: 50}}>
			<ScrollView>
				{carBrandsList.map(({name, founded}, index) => {
					return (
						<CarBrandItemComponent
							name={name}
							founded={founded}
							key={index}
						/>
					);
				})}
			</ScrollView>
		</View>
	);
};

export default CarBrandListComponent;
