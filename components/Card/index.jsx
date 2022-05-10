import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import msgIcon from "../../assets/newMessage.jpg";

const Card = (props) => {

  const about = props.about;
  const comments = props.comments;
  const tags = props.tags;
  const pic = props.picture;

  const stylesCard = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      borderColor: 'gray',
      borderWidth: 2,
      borderRadius: 6,
      margin: 3,
    },
    carImg:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    img:{
      width:100,
      height: 100,
      borderWidth: 2,
      borderRadius: 6,
    },
    about:{
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'justify',
    },
    by:{
      fontSize: 16,
      textAlign: 'left',
    },
    aligntags:{
      flex : 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },     
    viewTags:{
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 6,
      margin: 2,

    },
    tags:{
      fontSize: 16,
      textAlign: 'left',
      backgroundColor: 'black',
      color: 'white',
      padding:2,
    }, 
    msgImg:{
      width: 30,
      height:20,
      margin : 5,
    },  
    comments:{
      flex: 1,
      flexDirection: 'row',
      height:25,
      margin : 3,
    },      
  });
  return (
          <View style={stylesCard.container}>
            <View  style={stylesCard.carImg}>
                <Image source={{uri: `${pic}`}} style={stylesCard.img} />
            </View>
            <View>  
              <View >
                <Text  style={stylesCard.about} >{about.substring(0, 80)}</Text>
              </View>
              <View  style={{height : 42, justifyContent: 'center'}}>
                <Text style={stylesCard.by}>by {props.author}</Text>                
              </View >
              <View>
                    <FlatList style={stylesCard.aligntags}  data={tags} 
                    renderItem={({item}) =><View style={stylesCard.viewTags}><Text style={stylesCard.tags} >{item}</Text></View>}
                    />
              </View>
              <View style={stylesCard.comments} >
                <Image style={stylesCard.msgImg} source={msgIcon} />
                <Text>{comments.length} comments</Text>                    
              </View>
            </View>  
          </View>
  );
}

  export default Card;