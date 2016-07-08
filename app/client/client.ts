/**
 * Client
 */
export class Client{
	id: number;
	nom: string;
	prenom: string;
	age: number;
	caution: number;
	
	constructor(id: number, nom: string, prenom: string, age: number, caution: number) {
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.age = age;
		this.caution = caution;
	}
}