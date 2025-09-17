import { ICreateSongFormInput } from "../components/forms/CreateSongForm";
import { PendingSong, LyricType, Lyric, SongWithLyrics } from "../models/SongsApiModels";
import { convertSongToLyricFields } from "./LyricUtils";
import { v4 as uuidv4 } from "uuid";

export const songWithLyricsToSongFormInput = (song: SongWithLyrics): ICreateSongFormInput => {
  return {
    bookId: song.songbookId,
    number: song.number.toString(),
    title: song.title,
    songwriter: song.author,
    composer: "",
    presentationOrder: song.presentationOrder,
    imageUrl: song.imageUrl,
    lyrics: convertSongToLyricFields(song),
  };
};

export const songFormInputToPendingSong = (data: ICreateSongFormInput): PendingSong => {
  const lyricCounts = {
    [LyricType.LYRIC_TYPE_BRIDGE]: 0,
    [LyricType.LYRIC_TYPE_CHORUS]: 0,
    [LyricType.LYRIC_TYPE_PRECHORUS]: 0,
    [LyricType.LYRIC_TYPE_VERSE]: 0,
  };
  const songId = uuidv4().toString();
  const song: PendingSong = {
    id: songId,
    songbookId: data.bookId,
    number: parseInt(data.number, 10),
    title: data.title,
    author: data.songwriter,
    music: data.composer,
    presentationOrder: data.presentationOrder,
    imageUrl: data.imageUrl,
    audioUrl: "",
    lyrics: data.lyrics.map((value) => {
      return {
        songId: songId, // uuid
        lyricType: value.lyricType,
        verseNumber: ++lyricCounts[value.lyricType],
        lyrics: value.text,
      } as Lyric;
    }),
    requesterName: "",
    requesterEmail: "",
    requesterNote: "",
  };
  return song;
};

export const songFormInputToSongWithLyrics = (data: ICreateSongFormInput): SongWithLyrics => {
  const lyricCounts = {
    [LyricType.LYRIC_TYPE_BRIDGE]: 0,
    [LyricType.LYRIC_TYPE_CHORUS]: 0,
    [LyricType.LYRIC_TYPE_PRECHORUS]: 0,
    [LyricType.LYRIC_TYPE_VERSE]: 0,
  };
  return {
    id: "",
    songbookId: data.bookId,
    number: parseInt(data.number, 10),
    title: data.title,
    author: data.songwriter,
    music: data.composer,
    presentationOrder: data.presentationOrder,
    imageUrl: "",
    audioUrl: "",
    lyrics: data.lyrics.map((value) => {
      return {
        songId: "", // uuid
        lyricType: value.lyricType,
        verseNumber: ++lyricCounts[value.lyricType],
        lyrics: value.text,
      } as Lyric;
    }),
  };
};
