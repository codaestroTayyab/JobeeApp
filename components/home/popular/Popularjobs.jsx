import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../../components/common/cards/popular/PopularJobCard";
import styles from "./popularjobs.style";
import { useRouter } from "expo-router";

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popularjobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>View All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({ item }) => {
            return <PopularJobCard item={item} />;
          }}
          keyExtractor={(item) => item?.jobId}
          contentContainerStyle={{columnGap: SIZES.medium}}
          horizontal
          showsHorizontalScrollIndicator={false}

        />
        )}
        

      </View>
    </View>
  );
};

export default Popularjobs;
