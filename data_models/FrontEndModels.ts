
import {v4 as uuidv4} from 'uuid';

/*Am I literally just copying the backend data classes, yes I believe so? */

//Data object for individual songbook in Songbooks List API

export interface Songbook {
    id: string;
    fullName: string;
    staticMetadataLink: string; /*what static Metadata are we putting here?*/
    imageUrl: string;
}

//Data object for individual song in songlist, so we have a songlist, and also the view when we click on a song which shows us either the sheet music or just the lyrics depending on what mode we choose. I'm going to call them SHEET MUSIC and LYRIC mode.

export interface Song {
    id: typeof uuidv4;
    songbookId: string;
    number: number;
    title: string;
    author: string;
    music: string;
    presentationOrder: string; /*this won't be shown in the songlist UI, but is required to order the verses of the lyric LYRIC mode?*/
    imageUrl: string; /*actually not sure what image is being used, unless it's the image of the sheet music cause I believe those are all images? */
}


//Lyric Type Enum
export enum LyricType {
    LYRIC_TYPE_VERSE,
    LYRIC_TYPE_PRECHORUS,
    LYRIC_TYPE_CHORUS,
    LYRIC_TYPE_BRIDGE
}

// Data object for Lyrics 
export interface Lyric {
    songId: typeof uuidv4;
    lyricType: LyricType;
    verseNumber: number;
    lyrics: string;
}




// after pressing create new songbook in Songbooks List UI
export function toSongbook(data: any): Songbook {
    return{
        id: data.id ?? '',
        fullName: data.fullName ?? '',
        staticMetadataLink: data.staticMetadataLink ?? '',
        imageUrl: data.imageUrl ?? '',
    };
}
