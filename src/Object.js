/**
 * Created by Shahid on 2/23/2016.
 */



Object.prototype.extend = function (object) {

    for (var i in object) {
        if (object.hasOwnProperty(i)) {
            if (typeof this[i] == "object" && this.hasOwnProperty(i)) {
                this[i].extend(object[i]);
            } else {
                this[i] = object[i];
            }
        }
    }
    return defaults;
};