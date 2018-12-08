'use strict';

var Const = require('./const.js')
var MenuScene = require('./scenes/menuScene.js');
var GameScene = require('./scenes/gameScene.js');
var DeathScene = require('./scenes/deathScene.js');
var WinScene = require('./scenes/winScene.js');

var BootScene = 
{
  preload: function () 
  {
    // load here assets required for the loading screen
    this.game.load.image('preloader_bar', 'images/preloader_bar.png');
  },

  create: function () 
  {
    this.game.state.start('preloader');
  }
};


var PreloaderScene =
{
  preload: function () 
  {
    this.loadingBar = this.game.add.sprite(0, 240, 'preloader_bar');
    this.loadingBar.anchor.setTo(0, 0.5);
    this.load.setPreloadSprite(this.loadingBar);

    // TODO: load here the assets for the game
    //Rooms
    this.game.load.image('showStage','./images/rooms/ShowStage.png');
    this.game.load.image('dinningRoom','./images/rooms/DinningRoom.png');
    this.game.load.image('backstage','./images/rooms/Backstage.png');
    this.game.load.image('supplyCloset', './images/rooms/SupplyCloset.png');
    this.game.load.image('wHallCorner','./images/rooms/W.Hall Corner.png');
    this.game.load.image('westHall', './images/rooms/West Hall.png');
    this.game.load.image('westHall', './images/rooms/West Hall.png');
    this.game.load.image('kitchen', './images/rooms/kitchenText.png');
    this.game.load.image('eHallCorner','./images/rooms/E.Hall Corner.png');
    this.game.load.image('eastHall','./images/rooms/East Hall.png');
    this.game.load.image('restrooms','./images/rooms/Restrooms.png');
    this.game.load.image('pirateCov1', './images/rooms/PirateCove.png');
    this.game.load.image('pirateCov2', './images/rooms/PirateCove2.png');
    this.game.load.image('pirateCov3', './images/rooms/PirateCove3.png');
    this.game.load.image('office', './images/rooms/Office.png');

    //Animatronics
    this.game.load.spritesheet('bonnie','./images/animatronics/Bonnie.png', 33, 66, 3);
    this.game.load.image('screamerBonnie', './images/animatronics/screamerBonnie.png');
    this.game.load.image('bonnieAttack', './images/animatronics/BonnieAttack.png');
    this.game.load.spritesheet('chica','./images/animatronics/Chica.png', 33, 66, 3);
    this.game.load.image('screamerChica', './images/animatronics/screamerChica.png');
    this.game.load.image('chicaAttack', './images/animatronics/ChicaAttack.png');
    this.game.load.spritesheet('freddy','./images/animatronics/Freddy.png', 33, 66, 3);
    this.game.load.spritesheet('darkFreddy','./images/animatronics/FreddyDark.png', 33, 66, 2);
    this.game.load.image('screamerFreddy', './images/animatronics/screamerFreddy.png');
    this.game.load.spritesheet('freddyAttack', './images/animatronics/FreddyAttack.png', 33, 33, 2);
    this.game.load.image('foxy','./images/animatronics/Foxy.png');
    this.game.load.spritesheet('foxyRun','./images/animatronics/FoxyRun.png', 33, 66, 2);
    this.game.load.image('screamerFoxy', './images/animatronics/screamerFoxy.png');

    //Objects
    this.game.load.spritesheet('buttonsCameras', './images/items/buttonsCameras.png', 33, 33, 22);
    this.game.load.spritesheet('buttonLight', './images/items/buttonLight.png', 33, 66, 2);
    this.game.load.spritesheet('buttonDoor', './images/items/buttonDoor.png', 33, 66, 2);
    this.game.load.spritesheet('doorClose', './images/items/doorClose.png', 264, 462, 3)
    this.game.load.spritesheet('doorOpen', './images/items/doorOpen.png', 264, 462, 3)
    this.game.load.image('camerasMap', './images/items/camerasMap.png');
    this.game.load.image('edge', './images/items/edge.png');
    this.game.load.spritesheet('RECPoint', './images/items/RECPoint.png', 33, 33, 2);
    this.game.load.image('sideEdge', './images/items/sideEdge.png');
    this.game.load.spritesheet('buttonMonitor', './images/items/monitorButton.png', 396, 66, 2);
    this.game.load.image('leftLight', './images/items/LeftLight.png');
    this.game.load.image('rightLight', './images/items/RightLight.png');
    this.game.load.spritesheet('battery', './images/items/battery.png', 143, 66, 4);

    //Effects
    this.game.load.spritesheet('staticEffect', './images/effect/static.png', 800, 600, 5);

    //Text
    
    this.game.load.image('REC', './images/texts/REC.png');
    this.game.load.spritesheet('camerasTexts', './images/texts/camerasNames.png', 364, 66, 11);
    this.game.load.spritesheet('manyTexts', './images/texts/manyTexts.png', 264, 66, 5);
    this.game.load.spritesheet('numbers', './images/texts/numbers.png', 33, 66, 10);
    this.game.load.image('titleText', './images/texts/Title.png');
    this.game.load.spritesheet('newGameText', './images/texts/NewGame.png', 276, 66, 2);
  },

  create: function () 
  {
    this.game.state.start('menu');
  }
};


window.onload = function () 
{
  var game = new Phaser.Game(792, 594, Phaser.AUTO, 'game');

  game.state.add('boot', BootScene);
  game.state.add('preloader', PreloaderScene);
  game.state.add('menu', MenuScene);
  game.state.add('game', GameScene);
  game.state.add('death', DeathScene);
  game.state.add('win', WinScene);


  game.state.start('boot');
};


function Main()
{
  /*
  Create
  {
    Se crea 1 menu,
    Se crea phoneguy,
    Se crea 1 night,
    Se crea 1 office.
  }

  Update
  {
    Audio phoneGuy.

    Bucle del juego
    {
      Booleano de finPartida,
      Cambio a escena oficina,
      Actualizacion de los animatronicos,
      Input.
    }
  }


  */
}