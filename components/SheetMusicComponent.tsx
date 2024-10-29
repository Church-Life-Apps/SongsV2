import React from "react";
import { View } from "react-native";
import ImageModal from "react-native-image-modal";
import Button from "./Button";

interface SheetMusicComponentProps {
  imageUrl: string;
}

const SheetMusicComponent: React.FC<SheetMusicComponentProps> = ({ imageUrl }) => {
  const handleDownload = async () => {
    // TODO : ensure this works with mobile platforms, should we decide to expand from web-only
    fetch(imageUrl as string)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.download = imageUrl.replace(/^.*[\\/]/, '');
        a.href = blobUrl;
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
  }

  return (
    <View className="mt-4">
      <ImageModal source={{ uri: imageUrl }} style={{ width: 320, height: 500 }} resizeMode="contain" />
      <Button
        onPress={handleDownload}
        variant="outlineSlate"
        title="Download "
        icon="download"
        className="mx-3"
      ></Button>
    </View>
  );
};

export default SheetMusicComponent;
