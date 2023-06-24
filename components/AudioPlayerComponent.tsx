import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text, Button } from "react-native";
import { Audio } from "expo-av";

// Define the component props
interface AudioPlayerComponentProps {
  audioUrl: string;
}

const AudioPlayerComponent: React.FC<AudioPlayerComponentProps> = ({ audioUrl }) => {
  const [loaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const loadAudio = async () => {
    try {
      // Creating and Loading our music object
      /* const audio = await Audio.Sound.createAsync(require("../assets/sound.mp3"), {}, null, true); */
      const audio = await Audio.Sound.createAsync({ uri: audioUrl }, {}, null);
      setLoaded(audio.sound._loaded);
      setAudio(audio);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadAudio();
  }, []);

  const playAudio = async () => {
    try {
      const status = await audio.sound.playAsync();
      setIsPlaying(true);
    } catch (err) {
      console.log(err);
    }
  };

  const pauseAudio = async () => {
    try {
      const status = await audio.sound.pauseAsync();
      setIsPlaying(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      {loaded ? (
        isPlaying ? (
          <Button title="Pause Sound" onPress={pauseAudio} />
        ) : (
          <Button title="Play Sound" onPress={playAudio} />
        )
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default AudioPlayerComponent;
