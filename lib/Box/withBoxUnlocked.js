"use strict"

const withBoxUnlocked = function(box, f) {
    const locked = box.locked;

    try {
        box.unlock();
        f()
    } catch(e) {
        throw e;
    } finally {
        locked
        &&
        box.lock();
    }
}