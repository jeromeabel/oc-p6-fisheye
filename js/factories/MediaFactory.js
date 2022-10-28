// Factory Pattern
// Return an Media object depending on type
class MediaFactory {
  constructor(media) {
    if (media.image) {
      return new MediaImage(media);
    } else if (media.video) {
      return new MediaVideo(media);
    } else {
      throw "MediaFactory Error : Unkown type";
    }
  }
}