// TODO: timeline page

import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet, ScrollView } from "react-native";

import Header from '@/components/Header';
import Carousel from '@/components/carousel/Carousel';
import CardView from '@/components/timeline/CardView';
import CategoryView from '@/components/timeline/CategoryView';

export default function Timeline() {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel />
        <CategoryView />
        <CardView />
      </ScrollView>
      <Header />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
});
