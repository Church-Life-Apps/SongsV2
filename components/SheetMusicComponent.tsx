import React from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";

//define the component props
interface SheetMusicComponentProps {
  imageUrl: string;
}

//used Dimensions to get specific device window width and height, we may want to move this to our screens.
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SheetMusicComponent: React.FC<SheetMusicComponentProps> = ({ imageUrl }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ width: windowWidth, height: windowHeight }}>
        <Image source={{ uri: imageUrl }} style={{ flex: 1 }} resizeMode="contain" />
      </View>
    </ScrollView>
  );
};

export default SheetMusicComponent;
