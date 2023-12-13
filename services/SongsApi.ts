import { Song, Songbook, SongWithLyrics } from "../models/SongsApiModels";

const baseUrl = "https://api.calebziamba.net";

export async function fetchSongbooks(): Promise<Songbook[]> {
  return await fetch(`${baseUrl}/songbooks`).then((response) => response.json());
}

export async function fetchSongbookMetadata(songbookId: string): Promise<Songbook> {
  return { fullName: "This is Fake", id: songbookId, staticMetadataLink: "", imageUrl: "" }
  // return await fetch(`${baseUrl}/songbooks/${songbookId}`).then((response) => response.json());
}

export async function fetchSongs(songbookId: string): Promise<Song[]> {
  return await fetch(`${baseUrl}/songbooks/${songbookId}`).then((response) => response.json());
}

export async function fetchSongDetails(songbookId: string, songNumber: number): Promise<SongWithLyrics> {
  return await fetch(`${baseUrl}/songbooks/${songbookId}/songs/${songNumber}`).then((response) =>
    response.json()
  );
}
