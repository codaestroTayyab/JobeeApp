import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./welcome.style";
import { TextInput } from "react-native";
import { SIZES, icons } from "../../../constants";
import { FlatList } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

const Welcome = () => {
  const jobTypes = [
    "Full-Time",
    "Part-Time",
    "Contractor",
    "Internship",
    "Temporary",
  ];
  const [activeJobType, setActiveJobType] = useState("Full-Time");

  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Tayyab</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={styles.tab(activeJobType, item)}
                onPress={() => {
                  setActiveJobType(item);
                  router.push(`/search/${item}`);
                }}
              >
                <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{columnGap: SIZES.small}}
        />
      </View>
    </View>
  );
};

export default Welcome;
