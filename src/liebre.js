import Paso from './paso.js';
export default class Liebre{
    constructor(){
        this._pos = 0;
        this._paso = new Paso();
    }
    avanzar() {
        let paso = this._paso.caminar();
        if (paso < 5)
            this._pos += 0;
        else if (paso < 9)
            this._pos += 9;
        else if (paso < 11)
            this._pos -= 12;
        else if (paso < 18)
            this._pos += 1;
        else
            this._pos -= 2;

        if (this._pos > 100)
            return this._pos = 100;
        else
            return this._pos;
    }
    getPosicion() {
        return this._pos;
    }
}