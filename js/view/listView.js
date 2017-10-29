// create the object literal
var listView={defined: true,dom:null};

// add some methods to this view.

listView.update=function()
{
	console.log("updating the listView");
	let dom=listView.dom;
	let boeken=listModel.getElements(); // krijg de boeken van listModel.
	let ul_list=listView.dom.getElementsByTagName("ul");
	let ul=ul_list[0]; // eerste ul element in listview section.
	ul.innerHTML=""; // wis alle nodes in de lijst
	for(i=0;i<boeken.length;i++)
	{
		let li=document.createElement("li");
		// creer wat we in de li element willen hebben
		let img=document.createElement("div");
		img.className="lijstVeld image";
		img.innerHTML='<img src="img/'+boeken[i].isbn+'.jpg" style="height: 50px;">';
		let isbn=document.createElement("div");
		isbn.className="lijstVeld";
		isbn.innerHTML="<span class='label'>isbn:</span><br>"+boeken[i].isbn;
		let title=document.createElement("div");
		title.innerHTML="<span class='label'>titel:</span><br>"+boeken[i].title;
		title.className="lijstVeld";
		let auteur=document.createElement("div");
		auteur.innerHTML="<span class='label'>auteur(s)</span><br>"+boeken[i].auteurs;
		auteur.className="lijstVeld";
		let controls=document.createElement("div");
	
		// create control-buttons per boek
		let edit=document.createElement("button");
		edit.innerHTML="edit";
		edit.setAttribute("action","edit");
		edit.setAttribute("data",i);
		edit.addEventListener("click",listView.controlElement)
		let del=document.createElement("button");
		del.innerHTML="verwijderen";
		del.setAttribute("action","delete");
		del.setAttribute("data",i);
		del.addEventListener("click",listView.controlElement)
		controls.appendChild(edit);
		controls.appendChild(del);
		controls.className="lijstVeld controls";

		li.appendChild(img);
		li.appendChild(isbn);
		li.appendChild(title);
		li.appendChild(auteur);
		li.appendChild(controls);
		ul.appendChild(li);		
	}
}

listView.controlElement=function(ev)
{
	var nr=ev.currentTarget.getAttribute("data");
	var action=ev.currentTarget.getAttribute("action");
	let boeken=listModel.getElements(); // krijg de boeken van listModel.
	switch(action)
	{
		case "delete":
			if(confirm("Weet je zeker dat je '"+boeken[nr].title+"' wilt verwijderen?"))
			{
				listModel.deleteElement(nr);	
				listView.update();// laat zien dat het weg is.
			}
		break;
		case "edit":
			showSection("update",nr);
		break;
	}
}
// dit gebeurd als je op de button in de footer klikt
listView.createRecord=function(ev)
{
	showSection("create");
}
// dit gebeurd als je op de button in de footer klikt
listView.clearData=function(ev)
{
	listModel.clear();
	listView.update();
}
// dit gebeurd als je op de button in de footer klikt
listView.initData=function(ev)
{
	listModel.init();
	listView.update();
}
// init calls update direct, 
// daarom moet update hierboven gemaakt zijn, 
// op deze manier worden functies niet gehoist! 
listView.init=function(dom)
{
	listView.dom=dom; // keep the reference.
	console.log("listView init");
	// sluit de buttons in de footer aan
	let create=document.getElementById("createRecordButton");
	create.addEventListener("click",listView.createRecord);
	let clearButton=document.getElementById("clearDataButton");
	clearButton.addEventListener("click",listView.clearData);
	let initButton=document.getElementById("initDataButton");
	initButton.addEventListener("click",listView.initData);
	// show the list 
	listView.update();
}
