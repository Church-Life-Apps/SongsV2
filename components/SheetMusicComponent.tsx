import React from "react";
import { View } from "react-native";
import ImageModal from "react-native-image-modal";

// define the component props
interface SheetMusicComponentProps {
  imageUrl: string;
}

// used Dimensions to get specific device window width and height, we may want to move this to our screens.

const SheetMusicComponent: React.FC<SheetMusicComponentProps> = ({ imageUrl }) => {
  return (
    <View style={{ flex: 1, alignSelf: "center" }}>
      <ImageModal source={{ uri: imageUrl }} style={{ width: 320, height: 500 }} resizeMode="contain" />
    </View>
  );
};

export default SheetMusicComponent;
