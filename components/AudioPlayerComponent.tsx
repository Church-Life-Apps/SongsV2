import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Audio } from "expo-av";

const AudioPlayerComponent = () => {
  const [loaded, setLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const loadAudio = async () => {
    try {
      // Creating and Loading our music object and making sure it downloads first
      const audio = await Audio.Sound.createAsync(require("../assets/sound.mp3"), {}, null, true);
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
      setIsPlaying(status.isPlaying);
    } catch (err) {
      console.log(err);
    }
  };

  const pauseAudio = async () => {
    try {
      const status = await audio.sound.pauseAsync();
      setIsPlaying(status.isPlaying);
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
        <Text>Loading... </Text>
      )}
    </View>
  );
};

export default AudioPlayerComponent;
