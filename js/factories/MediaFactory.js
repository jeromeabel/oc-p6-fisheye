class MediaFactory {
    constructor(data) {
        if (data.image) {
            return new MediaImage(data);
        } else if (data.video) {
            return new MediaVideo(data);
        } else {
            throw "MediaFactory Error : Unkown type";
        }
    }
}