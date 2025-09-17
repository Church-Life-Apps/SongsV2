import { PendingSong, Song, Songbook, SongWithLyrics } from "../models/SongsApiModels";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export async function fetchSongbooks(): Promise<Songbook[]> {
  return await fetch(`${baseUrl}/songbooks`).then((response) => response.json());
}

export async function fetchSongbookMetadata(songbookId: string): Promise<Songbook> {
  return await fetch(`${baseUrl}/songbooks/${songbookId}`).then((response) => response.json());
}

export async function fetchSongs(songbookId: string): Promise<Song[]> {
  return await fetch(`${baseUrl}/songbooks/${songbookId}/songs`).then((response) => response.json());
}

export async function fetchSongDetails(songbookId: string, songNumber: number): Promise<SongWithLyrics> {
  return await fetch(`${baseUrl}/songbooks/${songbookId}/songs/${songNumber}`).then((response) => response.json());
}

export async function proposeSong(song: PendingSong) {
  return await fetch(`${baseUrl}/proposals/${song.songbookId}/${song.number}`, {
    method: "PUT",
    body: JSON.stringify(song),
    headers: { "Content-Type": "application/json", Authorization: "Bearer XXX" },
  });
}

export async function createSong(song: PendingSong) {
  return await fetch(`${baseUrl}/songbooks/${song.songbookId}/songs/${song.number}`, {
    method: "PUT",
    body: JSON.stringify(song),
    headers: { "Content-Type": "application/json", "x-api-key": `${process.env.EXPO_PUBLIC_API_KEY}` },
  });
}

export async function searchSongs(searchText: string, songbookId: string | undefined) {
  return await fetch(`${baseUrl}/search`, {
    method: "POST",
    body: JSON.stringify({ searchText, songbook: songbookId }),
  })
    .then((response) => response.json())
    .then((searchSongsResponse) => searchSongsResponse.matchedSongs);
}
