import Paso from './paso.js';
export default class Tortuga {
    constructor() {
        this._pos = 0;
        this._paso = new Paso();
    }
    avanzar() {
        let paso = this._paso.caminar();
        if (paso <= 10)
            this._pos += 3;
        else if (paso < 17)
            this._pos -= 6;
        else
            this._pos += 1;
        
        if (this._pos > 100)
            return this._pos = 100;
        else
            return this._pos;
    }
    getPosicion() {
        return this._pos;
    }
}