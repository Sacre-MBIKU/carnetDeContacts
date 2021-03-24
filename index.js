/**
 * Le Programme consiste à gérér un carnet d'adresse
 */

//La variable qui va gérer tous les contacts

var listeOfContacts = []

//Le modèle d'objet Contact

class Contact{
    constructor(nom, prename, group, biographie, image)
    {
        this.nom = nom
        this.prename = prename
        this.group = group
        this.biographie = biographie
        this.image = image
    }

   

}

//La récupération des inputs

var nameInput = document.getElementById("names")

var prenameInput = document.getElementById("prenames")

var groupInput = document.getElementById("group")

var biographieInput = document.getElementById("biographie")

var imageInput = document.getElementById("image")

console.dir(imageInput)


var form = document.getElementById("form")




//la fonction qui va ajouter l'objet dans la liste des contacts



function callbackAjoutContact(event){
    event.preventDefault()

    //Récupération des valurs

    var names = nameInput.value

    var prename = prenameInput.value

    var group = groupInput.value

    if(imageInput.files && imageInput.files[0]){
        imageInput.src = URL.createObjectURL(imageInput.files[0]);
        var image = imageInput.src;
    }
     
   

    var biographie = biographieInput.value

    var newContact = new Contact(names, prename, group,biographie,  image)
    listeOfContacts.push(newContact)
    console.dir(listeOfContacts)
    listeOfContacts.sort()
}

form.addEventListener("submit", callbackAjoutContact)

function calllBackListeElements(){

    var sectionListeOfContacts = document.getElementById("listeOfContacts")
    
   
    for(var i = 0; i < listeOfContacts.length; i++){

        var ul = document.createElement("ul")

       

            var liImage = document.createElement("img")

            

            liImage.setAttribute("src", listeOfContacts[i]["image"] )

            liImage.classList.add("elementsOfListe1")

            var iconCross = document.createElement("img")

            iconCross.setAttribute("src", "times-solid.svg" )

            iconCross.classList.add("elementsOfListe5")

            iconCross.setAttribute("id", "crossLi"+i)

            liImage.classList.add("elementsOfListe1")
  
            var liNom = document.createElement("li")

            liNom.classList.add("elementsOfListe2")
    
            var liGroupe = document.createElement("li")

            liGroupe.classList.add("elementsOfListe3")
    
            var liBiographie = document.createElement("li")

            liBiographie.classList.add("elementsOfListe4")
    
            liNom.innerText = listeOfContacts[i]["nom"]
    
            liGroupe.innerText = listeOfContacts[i]["group"]
    
            liBiographie.innerText = listeOfContacts[i]["biographie"]

        ul.appendChild(liNom)    
        ul.appendChild(liGroupe)    
        ul.appendChild(liBiographie)   
        ul.appendChild(liImage)
        ul.appendChild(iconCross)

        ul.classList.add("listeSpecifiee")
        
        sectionListeOfContacts.appendChild(ul)


    
        
    }

    var listeDeContacts = document.getElementById("listeOfContacts")
   
    var liOfIcons = document.querySelectorAll(".elementsOfListe5")
    var ul = document.getElementsByTagName("ul")
    console.dir(liOfIcons)
    for (let i =0; i< liOfIcons.length;i++) {
        liOfIcons[i].addEventListener('click', function(){
            listeDeContacts.removeChild(this.parentNode);
        })
    }

}










//Getsion de la page


//La gestion de la page
var btnAjoutContact = document.getElementById("btnListeOfContacts")

var btnListeOfContacts = document.getElementById("btnAjoutOfContact")

var container2 = document.getElementById("containerSite2")

var container1 = document.getElementById("containerSite1")

console.log(btnListeOfContacts)
function listeOfContactView()
{

    container1.style.display = "none"
    container2.style.display = "flex"
   
    
    
}

function ajoutOfContactView(){

    container2.style.display = "none"
    container1.style.display = "flex"
    
   
    
    
}

btnAjoutContact.addEventListener("click", listeOfContactView)

btnListeOfContacts.addEventListener("click", ajoutOfContactView)

btnListeOfContacts.addEventListener("click", calllBackListeElements)