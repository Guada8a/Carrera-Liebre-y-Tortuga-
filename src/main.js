import Liebre from "./liebre.js";
import Tortuga from "./tortuga.js";
let liebre = new Liebre();
let tortuga = new Tortuga();
let str_c1 = '', str_c2 = '', str_final = '';
let i = 1;
do {
    str_c1 = `Liebre:` + liebre.avanzar();
    str_c2 = `\t\tsTortuga:` + tortuga.avanzar();

    str_final += `Marca ${i}:[`+ str_c1 + str_c2 + `]\n`;
    i++;
} while (liebre._pos < 100 && tortuga._pos < 100);

console.log(str_final);

if (liebre.getPosicion() > tortuga.getPosicion())
    console.log(`La Liebre es la ganadora!!!`);
else if (liebre.getPosicion() == tortuga.getPosicion())
    console.log(`HAY EMPATE!!!!`);
else
    console.log(`La Tortuga es la ganadora!!!`);
