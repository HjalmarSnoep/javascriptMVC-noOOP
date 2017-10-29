/* 
	CONTROLLER
	dit script laat views zien, en executes het view script, zodra een page/view getoond wordt
*/

/* eerste wat we doen:
	- We verbergen ALLE sections.
*/
hideAllSections();
function hideAllSections()
{
	var sections= document.getElementsByTagName("section");
	//console.log("found "+sections.length+" sections..");
	for(var i=0;i<sections.length;i++)
	{
		sections[i].style.display="none";
	}
}

/* tweede wat we doen:
	- We maken een functie om 1 sectie te laten zien en de rest te verbergen.
	- Iedere sectie heeft een functie, die we kunnen aanroepen. 
	// (dit is natuurlijk een eindige praktijk, maar voor nu wellicht duidelijk)
*/

function showSection(name,...rest)
{
	// deze functie hebben we al, hierboven!
	hideAllSections();
	// we halen de juiste section op
	var dom=document.getElementById(name);
	// laten deze zien
	dom.style.display="block";

	// checken of er een object is dat dezelfde naam heeft.
	var naam=name+"View";
	if(window[naam] && window[naam].defined==true)
	{
		// we hebben een object met dezelfde naam als de section.
		// we geven het een referentie naar de dom (section) 
		window[naam].init(dom,rest); 
	}
}

// INIT THE APPLICATION
listModel.init(); // we only have one model.
// after everything is loaded, we show the FIRST PAGE!
showSection("list");
