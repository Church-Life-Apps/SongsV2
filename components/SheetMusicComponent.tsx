import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

//define the component props
interface SheetMusicComponentProps {
  imageUrl: string;
}

const SheetMusicComponent: React.FC<SheetMusicComponentProps> = ({ imageUrl }) => {
  console.log(imageUrl);

  //sheet music shows up in web, but not app
  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={{ width: 2000, height: 2000 }} resizeMode="contain" />
    </ScrollView>
  );
};

export default SheetMusicComponent;
