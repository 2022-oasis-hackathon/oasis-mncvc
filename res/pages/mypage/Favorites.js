import React,{useState, useEffect} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import LikeCard from '../../components/LikeCard'
import * as Application from 'expo-application';
const isIOS = Platform.OS === 'ios';
import {firebase_db} from "../../../firebaseConfig"
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Favorites({navigation,route}){
    
    const [seed, setSeed] = useState([])
    const [ready,setReady] = useState(true)

    useEffect(()=>{

        getLike()
    },[])

    const getLike = async () => {
        let userUniqueId;
        if(isIOS){
        let iosId = await Application.getIosIdForVendorAsync();
            userUniqueId = iosId
        }else{
            userUniqueId = await Application.androidId
        }

        console.log("userid",userUniqueId)
        firebase_db.ref('/like/'+userUniqueId).once('value').then((snapshot) => {
            let seed = snapshot.val();
            
            
            
            if(seed && seed.length > 0){  
                setSeed(seed);
                setReady(false)
            }

         
        })
    }



    return (
     < SafeAreaView>
        <ScrollView style={styles.container}>
        {
            seed.map((content,i)=>{
                return(<LikeCard key={i} content={content} navigation={navigation}/>)
            })
        }
     </ScrollView>
</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff"
    }
})