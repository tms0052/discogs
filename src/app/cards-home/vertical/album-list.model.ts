export class AlbumListModel{
    img: string;
    album: string;
    artist: string;

    constructor(img: string, album: string, artist: string){
        this.img = img;
        this.album = album;
        this.artist = artist;
    }
}