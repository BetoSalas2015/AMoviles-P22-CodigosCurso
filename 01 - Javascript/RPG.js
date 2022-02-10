function paladin() {
        this.vida = 100;
        this.mana = 100;
        this.nivel = 1;
        this.xp = 0;
        this.topexp = 20;
        
        this.sanar = function(jugador) {
            if(this.mana >= 10 ) {
                if() {
                    jugador.vida += 10;
                }
                
                
                this.mana -= 10;
                this.xp += 15;
                if(this.xp > this.topexp) {
                    this.evoluciona();
                }
            } else {
                console.log("No enough mana!");
            }
        }

        this.meditar = function() {
            this.mana += 5;
            console.log("Meditando");
        } 

        this.atacar = function(jugador) {
            jugador.vida -= 15;
        }

        this.evoluciona = function() {
            this.nivel++;
            this.xp = 0;
            this.topexp *= 1.3;
            this.vida *= 1.15;
            this.mana *= 1.15;
        }
}

var aladin = new paladin();
var uther = new paladin();

aladin.atacar(uther);
aladin.sanar(uther);
aladin.sanar(uther);
aladin.meditar();

console.log(aladin);
console.log(uther);