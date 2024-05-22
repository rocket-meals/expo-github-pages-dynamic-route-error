import {View, Text} from 'react-native';
import {useLocalSearchParams} from "expo-router";

export default function TabOneScreen() {

	const { username } = useLocalSearchParams<{ username: string }>();

	return (
		<View>
			<Text>{"Hello from Test: "+username}</Text>
		</View>
	)
}