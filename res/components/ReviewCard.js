import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function ReviewCard({content,navigation}){

    let isLike = ()=>{
        
    }
    console.log(content)
    return(
      <View style={{ height: 150, padding: 12, borderBottomWidth: 1, borderColor: '#d4d4d4' }}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 8 }} >
          <View style={{ width: '12.5%' }}>
            <View style={{ width: 40, backgroundColor: 'wheat', height: 40, borderRadius: '50%', marginRight: 8 }} >
            </View>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '87.5%' }} >
            <Text style={{ fontSize: 12, fontWeight: '600' }} >닉네임</Text>

            <View style={{ display: 'flex', flexDirection: 'row' }} >
              <Text style={{ fontSize: 10, fontWeight: '500', color: '#6d6d6d', marginRight: 4 }} >날짜</Text>
              <TouchableOpacity>
                <Ionicons name='settings-outline' size={12} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: 8 }} >
            <View style={{ marginBottom: 2 }} >
              <Text style={{ fontSize: 10, fontWeight: '500', color: '#2d2d2d' }} >맛 평점</Text>  
            </View>      
            <View>
              <Text style={{ fontSize: 10, fontWeight: '500', color: '#2d2d2d' }} >
                신선도 평점
              </Text>
            </View>      
        </View>

        <Text style={{ fontSize: 12, fontWeight: '500', marginBottom: 4 }} >
          본문
        </Text>

        <View >
          <Text style={{ fontSize: 10 }} >좋아요 수</Text>
        </View>

      </View>
    )
}

