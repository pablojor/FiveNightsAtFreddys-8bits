//--------------------Clase Animatronicos
var Animatronics = require('./Animatronics.js'); 
 

//----------------BonnieChica
function BonnieChica(sprite, attackSound, moveSound, path, hour, actTime, attackTime, Var)
{
    Animatronics.apply(this,[sprite, attackSound, moveSound, path, hour, actTime, Var]);
    
    this._sprite.frame = 2;
    this.dinningRoom = false;
    this.inOffice = false;
    this.attacking = false;
    this.var = Var;
    this.attackTime = attackTime;
};
BonnieChica.prototype = Object.create(Animatronics.prototype);
BonnieChica.prototype.constructor = BonnieChica;

BonnieChica.prototype.randomAnim = function(game)
{
    if (this._sprite.visible || this._sprite.alpha == 1)
    {
        this._sprite.frame = 1
        game.time.events.add(1000, function()
        {
            this._sprite.frame = 0;
        }, this);
    }
}
BonnieChica.prototype.preChangeNight = function(night)
{
    this.attackTimeIni = this.attackTime[night];
    this.changeNight(night);
}
BonnieChica.prototype.dinningRoomTrue = function()
{
    this.dinningRoom = true;
}
BonnieChica.prototype.dinningRoomFalse = function()
{
    this.dinningRoom = false;
}
BonnieChica.prototype.move = function(game, otherAnimatronic, staticEffect, door, light, freddy)
{
    if(!this.inOffice)
    {
        //Tiempo para moverse
        var timeToMove = Math.floor(((Math.random() * (this._actualActTime.max - this._actualActTime.min)) + this._actualActTime.min) * 1000);

        //Cambiar el pos del animatronico
        game.time.events.add(timeToMove, function()
        {
            //Controlar que, si esta atacando, no se mueva
            if(!this.inOffice)
            {
                this._antPos = this._pos;

                if (this._pos._number == 2)
                {
                    var percentage = Math.floor(Math.random() * (101 - 0));

                    if (!this._pos._attack)
                    {
                        if (percentage > this.var._2roomsPercentage1)
                        {
                            if(this._path[this._pos._room2]._name == "diningRoom" && !otherAnimatronic.dinningRoom)
                            {
                                this._pos = this._path[this._pos._room2];
                                this.dinningRoomTrue();
                            }
                            else if (this._path[this._pos._room2]._name != "diningRoom")
                            {
                                this._pos = this._path[this._pos._room2];
                                this.dinningRoomFalse();
                            }
                        }
                        else if (this._path[this._pos._room1]._name == "diningRoom" && !otherAnimatronic.dinningRoom)
                        {
                            this._pos = this._path[this._pos._room1];
                            this.dinningRoomTrue();
                        }
                        else if (this._path[this._pos._room1]._name != "diningRoom")
                        {
                            this._pos = this._path[this._pos._room1];
                            this.dinningRoomFalse();
                        }
                    }
                    else
                    {
                        
                        if (!light.getActive() && percentage > this.var._2roomsPercentage1)
                            this.attack(game ,door, light, staticEffect, freddy);   
                        else
                            this._pos = this._path[this._pos._room1];
                    }
                }
                else if (this._pos._number == 3)
                {
                    var percentage = Math.floor(Math.random() * (101 - 0));

                    if (!this._pos._attack)
                    {
                        if (percentage > this.var._3roomsPercentage1)
                        {

                            if(this._path[this._pos._room3]._name == "diningRoom" && !otherAnimatronic.dinningRoom)
                            {
                                this._pos = this._path[this._pos._room3];
                                this.dinningRoomTrue();
                            }
                            else if (this._path[this._pos._room3]._name != "diningRoom")
                            {
                                this._pos = this._path[this._pos._room3];
                                this.dinningRoomFalse();
                            }
                        }
                        else if (percentage > this.var._3roomsPercentage2)
                        {
                            if(this._path[this._pos._room2]._name == "diningRoom" && !otherAnimatronic.dinningRoom)
                            {
                                this._pos = this._path[this._pos._room2];
                                this.dinningRoomTrue();
                            }
                            else if (this._path[this._pos._room2]._name != "diningRoom")
                            {
                                this._pos = this._path[this._pos._room2];
                                this.dinningRoomFalse();
                            }
                        }
                        else if (this._path[this._pos._room1]._name == "diningRoom" && !otherAnimatronic.dinningRoom)
                        {
                            this._pos = this._path[this._pos._room1];
                            this.dinningRoomTrue();
                        }
                        else if (this._path[this._pos._room1]._name != "diningRoom")
                        {
                            this._pos = this._path[this._pos._room1];
                            this.dinningRoomFalse();
                        }
                    }
                    else
                    {
                        if (!light.getActive() && percentage > this.var._3roomsPercentage1)
                            this.attack(game ,door, light, staticEffect, freddy);
                        else if (percentage > this.var._3roomsPercentage2)
                            this._pos = this._path[this._pos._room2];
                        else
                            this._pos = this._path[this._pos._room1];
                    }
                }
                else
                {
                    if (this._path[this._pos._room1]._name == "diningRoom" && !otherAnimatronic.dinningRoom)
                    {
                        this._sprite.frame = 0;
                        this._pos = this._path[this._pos._room1];
                        this.dinningRoomTrue();
                    }
                    else if (this._path[this._pos._room1]._name != "diningRoom")
                    {
                        this._pos = this._path[this._pos._room1];
                        this.dinningRoomFalse();
                    }
                }

                //FreddyOscuro
                if (this._antPos != this._pos)
                {
                    if(this._antPos._name == freddy._pos._name)
                        freddy.hideDarkSprite();
                    else if(this._pos._name == freddy._pos._name)
                        freddy.showDarkSprite();
                //Controlar que el efecto de static effect aparezca cuando miras donde estan o donde se van a mover
                    if ((game.camera.x == this._pos._posCam.x && game.camera.y == this._pos._posCam.y) || (game.camera.x == this._antPos._posCam.x && game.camera.y == this._antPos._posCam.y)) //HACER SI ESTA EN MONITOR
                        this.moveEffect(game, staticEffect);
                    
                    var audioRandom = Math.random() * (1 - 0)
                    if(audioRandom > 0.8)
                        this._moveSound.play();

                    this._sprite.x = this._pos._x;    this._sprite.y = this._pos._y;
                }

                if(!this.inOffice)
                this.move(game, otherAnimatronic, staticEffect, door, light, freddy);
            }
        }, this);
    }

}
BonnieChica.prototype.isInOffice = function()
{
    return this.inOffice;
}
BonnieChica.prototype.isAttacking = function()
{
    return this.attacking;
}
BonnieChica.prototype.attack = function(game, door, light, staticEffect, freddy)
{
    if(!this.inOffice)
    {
        if (game.camera.x == this._pos._posCam.x && game.camera.y == this._pos._posCam.y)
            this.moveEffect(game, staticEffect);

        if (freddy._pos._name == this._pos._name)
            freddy.hideDarkSprite();
            
        this.alphaSprite(0);
        this.attacking = true;
        var timeToMove = Math.floor(((Math.random() * (this.attackTimeIni.max - this.attackTimeIni.min)) + this.attackTimeIni.min) * 1000);//Cambiar por tiempos de ataque

        game.time.events.add(timeToMove, function()
        {
            if(!this.inOffice)
            {
                if(!door.getActive())
                {
                    if(light.getActive()) 
                        light.turnOff();

                    this.inOffice = true;
                    light.enabledInput(false);
                    door.enabledInput(false);
                }
                else
                {
                    if(this._pos._number == 3)
                        this._pos = this._path[this._pos._room2];
                    else
                        this._pos = this._path[this._pos._room1];
                    
                    this._sprite.x = this._pos._x;    this._sprite.y = this._pos._y;
                    this.alphaSprite(1);

                    if (game.camera.x == this._pos._posCam.x && game.camera.y == this._pos._posCam.y)
                        this.moveEffect(game, staticEffect);

                    if (freddy._pos._name == this._pos._name)
                        freddy.showDarkSprite();
                }
                this.attacking = false;
            }
        }, this);
    }

}

module.exports = BonnieChica;