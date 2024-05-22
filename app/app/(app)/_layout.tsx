import {Redirect, usePathname, useRootNavigationState} from 'expo-router';
import React from 'react';
import {Text} from 'react-native'
import {Drawer} from "expo-router/drawer";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: 'index',
};

export default function AppLayout() {
	const pathName = usePathname();
	const rootNavigationState = useRootNavigationState();

	//https://stackoverflow.com/questions/76828511/expo-router-error-attempted-to-navigate-before-mounting-the-root-layout-compone
	const isLoading = !rootNavigationState?.key

	// AUTHENTICATION: Followed this guide: https://docs.expo.dev/router/reference/authentication/

	// You can keep the splash screen open, or render a loading screen like we do here.

	if (isLoading) {
		return <Text>Loading...</Text>;
	}

	// This layout can be deferred because it's not the root layout.
	return <Drawer
		backBehavior={"history"} // in order to have even a history stack in the drawer https://github.com/expo/expo/issues/27889
		screenOptions={{
			drawerType: 'permanent', // Use a permanent drawer on large devices.
			drawerStyle: {
				width: 200, // Apply the dynamically calculated width.
			},
		}}
		>
		<Drawer.Screen
			key={"test/index"}
			name={"test/index"} // The route name must match the URL from the root for navigation.
			options={{
				unmountOnBlur: true, // This will unmount the page in order to free up memory but at the cost of loading time
				// @ts-ignore - Expo's TypeScript definitions might not recognize 'visible' as a valid option.
				label: "Test",
				title: "Test",
			}}
		/>
	</Drawer>
}
