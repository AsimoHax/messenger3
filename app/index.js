import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import "../global.css"

export default function Home(){
    return (
        <View className={"flex-1 justify-center items-center"}>
            <ActivityIndicator size="large" color={'#00BFFF'} animating={true}/>
        </View>
    )
}
