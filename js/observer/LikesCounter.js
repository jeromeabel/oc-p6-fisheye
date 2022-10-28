// Observer Pattern
class LikesCounter {
    constructor() {
        this.count = 0;
        this.$likesCount =  document.querySelector('.likes__count')
    }

    update(action, value) {
        if (action === 'ADD') {
            this.count += value;
        } else if (action === 'RESET') {
            this.count = 0;
        } else {
            throw "Likes Counter Error : Unknow action"
        }
        this.$likesCount.innerHTML = this.count
    }
}