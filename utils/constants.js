import {StyleSheet} from "react-native";

export const DRAWER_SCREENS = {
	CAR_LIST: 'Cars',
	CAR_BRAND_LIST: 'Cars Brands',
};

export const CAR_LIST_AND_CAR_DETAIL_SCREENS = {
	CARS_LIST: 'CARS_LIST',
	CAR_DETAILS: 'CAR_DETAILS',
	ADD_NEW_CAR: 'ADD_NEW_CAR'
};

export const INPUTS = {
	PHOTO: 'PHOTO',
	MAKE: 'MAKE',
	MODEL: 'MODEL',
	MANUFACTURING_YEAR: 'MANUFACTURING_YEAR',
	ENGINE_POWER: 'ENGINE_POWER',
	COLOR: 'COLOR'
};

export const BASE_URL = "https://terminal-exam-lab-mad-default-rtdb.asia-southeast1.firebasedatabase.app";

export const CAR_BRADS = [];

export const CONTAINER_STYLES = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 10
	}
});
