import {View, Text, TouchableOpacity} from 'react-native';
import {router, useFocusEffect} from 'expo-router';

export default function TabOneScreen() {

	return (
		<View>
			<Text>{"Hello from Test"}</Text>
			<TouchableOpacity onPress={() => {
				// @ts-ignore
				router.push('/test/NilsBaumgartner1994')
			} }>
				<Text>{"Go to NilsBaumgartner1994"}</Text>
			</TouchableOpacity>
		</View>
	)
}