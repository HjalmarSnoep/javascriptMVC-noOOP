// create the object literal
var updateView={defined: true,dom:null};

// add some methods to this view.

updateView.updateRecord=function()
{
	let dom=updateView.dom; 
	let nr=updateView.nr; 
	let boek={};

	boek.title=	dom.getElementsByClassName("title")[0].value;
	boek.auteurs=dom.getElementsByClassName("auteur")[0].value;
	boek.isbn=dom.getElementsByClassName("isbn")[0].value;

	listModel.updateElement(nr,boek);
	showSection("list");
};

updateView.cancel=function()
{
	console.log("cancel create");
	showSection("list");
};

// init should be created last, it references function above.
updateView.init=function(dom,rest)
{
	// de rest is de rest operator, dus een array van de andere variabelen, behalve dom.
	var nr=parseInt(rest[0]); // nu is de eerste variabele in die array dus een integer!
	
	updateView.dom=dom; // bewaar een referentie naar de dom van deze sectie.
	updateView.nr=nr; // bewaar een referentie naar het nummer van het element dat we editen.

	console.log("updateView init for book "+nr+"("+typeof(nr)+")");
	
	// knoppen in footer aansluiten.
	let ok=dom.getElementsByClassName("ok")[0];
	ok.addEventListener("click",updateView.updateRecord);
	let cancel=dom.getElementsByClassName("cancel")[0];
	cancel.addEventListener("click",updateView.cancel);

	// get  info voor dit boek
	let boeken=listModel.getElements();
	let boek=boeken[nr];
	
	// show the info, zodra deze pagina getoond wordt.
	dom.getElementsByClassName("title")[0].value=boek.title;
	dom.getElementsByClassName("auteur")[0].value=boek.auteurs;
	dom.getElementsByClassName("isbn")[0].value=boek.isbn;
	
	
}