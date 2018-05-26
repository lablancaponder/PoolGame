let sprites = {};

let assetsStillLoading = 0;

function assetsLoadingLoop(callback) {
  if (assetsStillLoading) {
    requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
  } else {
    callback();
  }
}

function loadAssets(callback) {
  function loadSprites(fileName) {
    assetsStillLoading++;

    let spriteImage = new Image();
    spriteImage.src = "./assets/sprites/" + fileName;

    spriteImage.onload = function() {
      assetsStillLoading--;
    };
    return spriteImage;
  }
  sprites.background = loadSprites("tablebackground.png");
  sprites.stick = loadSprites("spr_stick.png");

  assetsLoadingLoop(callback);
}
