import db from "./model/data";
import Card from "./components/Card";
import { SafeAreaView,  View, FlatList } from 'react-native';


export default function App() {
  return (
        <>
            <View style={{height: 20}}></View>
            <FlatList
                data={db}
                renderItem ={({item}) => <Card {...item} />}
            />
        </>
  );
}