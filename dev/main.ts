window.addEventListener("load", function() {
    // hack to get for-of working in safari with HTMLCollection en NodeList
    NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    HTMLCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

    // create the game
    new Game();
});