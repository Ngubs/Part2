import { Text , Image, View} from 'react-native';

const img = require("../assets/images/react-logo.png");

export default function Page() {
  return (
    <View>
        <Image source={img}/>
        <Text>Yebo!!!!!!!!!</Text>
        <Text>Pushing to Git</Text>
    </View>
  );
}
