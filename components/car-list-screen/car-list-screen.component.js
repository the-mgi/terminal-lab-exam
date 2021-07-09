import React from 'react';
import {createStackNavigator, HeaderBackButton} from "@react-navigation/stack";
import {CAR_LIST_AND_CAR_DETAIL_SCREENS} from "../../utils/constants";
import CarListComponent from "./car-list/car-list.component";
import CarDetailsComponent from "./car-details/car-details.component";
import AddNewCarComponent from "./add-new-car/add-new-car.component";

const Stack = createStackNavigator();
const CarListAndCarDetails = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={CAR_LIST_AND_CAR_DETAIL_SCREENS.CARS_LIST}
				component={CarListComponent}
				options={{
					headerShown: true,
					headerTitle: "Cars"
				}}
			/>
			<Stack.Screen
				name={CAR_LIST_AND_CAR_DETAIL_SCREENS.CAR_DETAILS}
				component={CarDetailsComponent}
				options={{
					headerShown: true,
					headerTitle: "Car Details",
					headerLeft: HeaderBackButton
				}}
			/>
			<Stack.Screen
				name={CAR_LIST_AND_CAR_DETAIL_SCREENS.ADD_NEW_CAR}
				component={AddNewCarComponent}
				options={{
					headerShown: true,
					headerTitle: "Add New Car",
					headerLeft: HeaderBackButton
				}}
			/>
		</Stack.Navigator>
	);
};


export default CarListAndCarDetails;
