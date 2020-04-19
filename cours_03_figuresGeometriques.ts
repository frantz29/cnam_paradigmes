abstract class Figure {
    nbCote : number;
    taille : number;
    aire : number;
    perimetre : number;

    constructor(taille: number) {
	this.nbCote = 3;
	this.perimetre = this.taille*this.nbCote;
	this.aire = 0;
    }

    rapport() {
	let rap = "Cette figure a" + this.nbCote + " côtés, une aire de " + this.aire + " et un périmètre de " + this.perimetre +"."
	return rap;
    }
}

class Triangle extends Figure {
    private hauteur : number;

    constructor(nbCote: number, aire: number, perimetre: number) {
	super(nbCote, aire, perimetre) ;
	this.hauteur 1.7325080* 


}



