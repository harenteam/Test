import {ImageBackground, StyleSheet, View, Text, FlatList, TextInput} from 'react-native';
import Artist from "./components/entity/Artist";
import CountryFlag from "react-native-country-flag";
import {flags,song,bandes,country} from "./components/data/data";

export default function App() {

    const dataObject = [];
    for(let i = 0; i<= 24; i++){
        const x = new Artist(
            flags[i],
            country[i],
            bandes[i],
            song[i],
            0
        );
        dataObject[i] = x;
    }


    const renderItem = ({ item }) => (
        <View style={styles.artistConstainer}>
            <View style={styles.contryCont}>
                <CountryFlag isoCode={item.flagCount} size={10} style={styles.flagC} />
                <View style={styles.txtCountry}>
                    <Text style={styles.txt} >{item.country}</Text>
                </View>
            </View>
            <View style={styles.bands}>
                <Text style={styles.txt}>{item.bandName}</Text>
                <Text style={styles.txt}>{item.song}</Text>
            </View>
            <View style={styles.noteCont}>
                <View style={styles.inptCont}>
                    <TextInput style={styles.inpt} onChangeText={(e)=>console.log(e)} />
                    <Text style={styles.txtInpt}> / 2</Text>
                </View>
                <View style={styles.inptCont}>
                    <TextInput style={styles.inpt} onChangeText={(e)=>console.log(e)} />
                    <Text style={styles.txtInpt}> / 3</Text>
                </View>
                <View style={styles.inptCont}>
                    <TextInput style={styles.inpt} onChangeText={(e)=>console.log(e)}/>
                    <Text style={styles.txtInpt}> / 5</Text>
                </View>

            </View>
        </View>
    );



  return (
      <ImageBackground source={require("./assets/euroBg.jpg")} resizeMode="cover" style={styles.container}>
              <FlatList
                  data={dataObject}
                  renderItem={renderItem}
                  keyExtractor={item => item.flagCount}
                  horizontal={true}
                  style={styles.flatl}
              />
          </ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      alignContent:"center",
    width:"100%",
  },
    flagC: {
      height:70,
        width:70,
      borderRadius: 100
    },
    artistConstainer:{
      backgroundColor : "rgba(0, 0, 0, 0.2)",
      height: 250,
      width: 500,
      marginRight:50,
      justifyContent: 'center',
      top:450,
      borderRadius:8,
},
    txt:{
      color:"white"
    },
    contryCont:{
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-around"
    },
    bands:{
        margin:20,
        padding:10,
        backgroundColor : "rgba(0, 0, 0, 0.2)",
        width:160,
        height: 120,
        alignItems:"center",
        justifyContent:"space-around"

    },

    txtCountry:{
        color: "white",
        backgroundColor : "rgba(0, 0, 0, 0.2)",
        height:40,
        width:200,
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center"
    },
    noteCont:{
        alignSelf:"flex-end",
        backgroundColor : "rgba(0, 0, 0, 0.2)",
        height:150,
        width:240,
        marginTop:-160,
        marginRight:36,
        justifyContent:"space-around"
    },
    inptCont:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-end",
        marginRight:16
    },
    txtInpt:{
        color : "grey",
        fontSize:22,


    },
    inpt:{
        backgroundColor : "rgba(0, 0, 0, 0.4)",
        height:35,
        width:50,
        color:"grey",
        textAlign:"center",
        fontSize:22
    }
});
