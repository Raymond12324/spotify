
import { ArtistModel } from './artist.model';

export interface TrackModel {
    _id: number | string;
    name: string;
    album: string;
    cover: string;
    artist: ArtistModel;
    duration: number;
    url: string;
}