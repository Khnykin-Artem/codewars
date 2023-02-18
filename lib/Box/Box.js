"use strict"

class Box {
    constructor(locked, content) {
        this.locked = locked;
        this._content = content;
    }

    unlock() {
        this.locked = false;
    }

    lock() {
        this.locked = false;
    }

    get content() {
        if(this.locked) {
            throw new Error('Box is locked!');
        } else {
            return this._content;
        }
    }
}