class MediaCardFactory {
    constructor(data, type){
        if (type === "image") {
            return new ImageCard(data);
        } else if (type === "video") {
            return new VideoCard(data);
        } else {
            throw "Unkown type";
        }
    }
}