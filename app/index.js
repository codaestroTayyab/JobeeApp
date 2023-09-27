import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

export default function Home() {

  const router = useRouter(); 
  return (
    <SafeAreaView style = {{flex: 1 , backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen
      options={{
        headerStyle: {
          backgroundColor: COLORS.lightWhite,
        },
        headerShadowVisible: false,
        headerLeft: () => {
          return <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%"/>
        },

        headerRight: () => {
          return <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%"/>
        },
        headerTitle: "",
      }}
    
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style = {{flex: 1, padding: SIZES.medium}}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create();
