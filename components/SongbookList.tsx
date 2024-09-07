import { Text, Image, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { Songbook } from "../models/SongsApiModels";
import { FlatGrid } from "react-native-super-grid";

const SongbookList = ({ songbooks, onPress }: { songbooks: Songbook[]; onPress: (item: Songbook) => void }) => {
  const { width: windowWidth } = useWindowDimensions();
  const images = {
    SHL: require("../assets/images/book_covers/SHL.jpg"),
    SFOG: require("../assets/images/book_covers/SFOG.jpg"),
    GENERIC: require("../assets/images/book_covers/generic.jpg"),
    // Add more book cover images here
  };
  type ImageKeys = keyof typeof images; // "SHL" | "SFOG" | "GENERIC"
  const bookWidth =
    windowWidth > 700
      ? Math.min(windowWidth / 3 - 25, 325)
      : windowWidth > 350
        ? Math.floor(windowWidth / 2) - 30
        : Math.min(windowWidth - 30, 300);

  return (
    <View className="w-full h-full overflow-y-auto">
      <FlatGrid
        itemDimension={bookWidth}
        data={songbooks.map((book) => ({
          data: book,
        }))}
        spacing={20}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ maxWidth: bookWidth, maxHeight: bookWidth * 1.5 }}
            className="cursor-pointer mb-4"
            onPress={() => onPress(item.data)}
          >
            <Image
              source={images[item.data.id.toUpperCase() as ImageKeys] ?? images["GENERIC"]}
              alt="Songbook Cover"
              style={{ maxWidth: bookWidth, maxHeight: bookWidth * 1.5 }}
              className="border-2 border-gray-900 rounded-lg object-contain"
              resizeMode="cover"
            />
            <Text className="font-bold font-lg whitespace-nowrap">{item.data.fullName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SongbookList;
