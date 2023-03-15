import { Song, Songbook, SongWithLyrics } from "../models/SongsApiModels";

const baseUrl = 'https://songs-wzfmn.ondigitalocean.app';

export async function fetchSongbooks(): Promise<Songbook[]> {
  return await fetch(`${baseUrl}/songbooks`)
    .then(response => response.json());
}

export async function fetchSongs(songbookId: string): Promise<Song[]> {
  return await fetch(`${baseUrl}/songs?songbookId=${songbookId}`)
    .then(response => response.json());
}

export async function fetchSongDetails(songbookId: string, songNumber: number): Promise<SongWithLyrics> {
  return await fetch(`${baseUrl}/songs?songbookId=${songbookId}&number=${songNumber}`)
    .then(response => response.json());
}
