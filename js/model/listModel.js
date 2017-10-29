// create the object literal
var listModel={defined: true,dom:null};

listModel.data=[]; // ons model!

// basis functies, door de manier van declareren, worden deze NIET gehoist!
// dus moet ik deze eerste definieren.
listModel.createElement=function(data)
{
	listModel.data.push(data);
};
/* haal een element weg */
listModel.deleteElement=function(nr)
{
	listModel.data.splice(nr,1); // remove from Array;
};
/* haal alle elementen weg */
listModel.clear=function()
{
	listModel.data=[];
};

/* update een element */
listModel.updateElement=function(nr,data)
{
	listModel.data[nr]=data; 
};

/* geef een lijstje met alle elementen terug */
listModel.getElements=function()
{
	return listModel.data;
};

// bij init maken we even wat voorbeeld boeken.
listModel.init=function(dom)
{
	console.log("listModel init");
	// maak even wat boeken aan..
	var boek={
			title: "Alles draait om Liza",
			isbn: 9789402237672, 
			auteurs: "Edwin Santbergen"};
	listModel.createElement(boek);
	
	var boek={
			title: "Meer dan coke",
			isbn: 9789461314291, 
			auteurs: "Hilde Sabbe / Benjamin Feys"};
	listModel.createElement(boek);
	
	var boek={
			title: "Zijn zonder jezelf",
			isbn: 9789082699807, 
			auteurs: "Jeroen Landsman"};
	listModel.createElement(boek);
}
