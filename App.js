import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {DRAWER_SCREENS} from "./utils/constants";
import CarBrandListComponent from "./components/car-brand-list/car-brand-list.component";
import CarListAndCarDetails from "./components/car-list-screen/car-list-screen.component";

export default function App() {
	const Drawer = createDrawerNavigator();

	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName={DRAWER_SCREENS.CAR_LIST}>
				<Drawer.Screen name={DRAWER_SCREENS.CAR_LIST} component={CarListAndCarDetails}/>
				<Drawer.Screen name={DRAWER_SCREENS.CAR_BRAND_LIST} component={CarBrandListComponent}/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
