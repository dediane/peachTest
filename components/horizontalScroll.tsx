import React from "react";
import { ScrollView, Image, StyleSheet, View } from "react-native";

interface HorizontalScrollProps {
  images: any[];
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ images }) => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.scrollView}
      showsHorizontalScrollIndicator={false}
    >
      {images.map((image, index) => (
        <View key={index} style={[styles.imageContainer, index === images.length -1 && styles.lastImageContainer]}>
          <Image source={image} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
    padding: 18,
  },
  imageContainer: {
    marginRight: 10,
  },
  lastImageContainer: {
    marginRight: 30,
},
  image: {
    width: 350,
    height: 320,
    borderRadius: 10,
  },
});

export default HorizontalScroll;
