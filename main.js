// numéro de l'image actuellement visualisée
var imgActuelle = 0;

// tableau listant toutes les images
var images = ["img/rayane.png","img/Alicia.png","img/amal.png","img/asia.png","img/axel.png","img/fredd.png","img/khaoula.png"
,"img/lea.png","img/luka.png","img/kevin.png","img/mehdi.png","img/najet.png","img/soumaya.png","img/tom.png","img/yanis.png"];


// tableau listant toutes les légendes
var legendes = [
    "Se pardonner et s’accepter tel que l’on est,voila ce que signifie être fort.", // rayane
    "xxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx",        // alicia
    " Il n’y a qu’une seule réussite : arriver à vivre sa vie comme on l’entend.",  // alicia
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" ,        // asia
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxx" ,        // axel
    "Tous seul on va vite , ensemble on vas <a href='https://www.youtube.com/watch?v=zF6BxDIRHjo&list=RDTMl0LLp2oQM&index=10'>p</a>lus loin..." ,        // fredd
    "Les perdants trouvent des excuses, les gagnants des moyens." , //kahoula
    "Il faut toujours un coup de folie pour bâtir un destin.",  //lea
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxx",         // luka
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxx"  ,      // kevin
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxx"  ,       // mehdi
    "La vie est un mystère qu'il faut vivre  et non un problème qu'il faut résoudre..."  , // najet
    "Tous arrive à point à qui sait attendre." , // soumaya
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxx",          // tom
    "Rien n'est Impossible"  , // yanis
    
];

// référence au diaporama que nous modifierons
var diaporama = document.querySelector("#diaporama");

// référence à la balise image que nous modifierons
var image = document.querySelector("#diaporama img");

// référence à la balise de légende que nous modifierons
var legende = document.querySelector("#diaporama #legende");

// on applique la 1ere image par défaut :
majImage();

// fonction appelée lors d'un clic sur le bouton #btDroite
function imgSuivante(){
    // on passe à l'image suivante
    imgActuelle++;
    // si imgActuelle est plus grand que la dernière clé du tableau images, on la remet à 0
    if(imgActuelle >= images.length) imgActuelle=0;
    majImage();
}

// fonction appelée lors d'un clic sur le bouton #btGauche
function imgPrecedente(){
    // on passe à l'image précédente
    imgActuelle--;
    // si imgActuelle est plus petit que 0, on le redéfinit à que la dernière clé du tableau images (case 3)
    if(imgActuelle < 0) imgActuelle= images.length-1;
    majImage();
}

// met à jour l'attribut src de la balise image avec le chemin
// d'image stocké dans la case imgActuelle du tableau (soit 0 soit 1 soit 2 soit 3)
function majImage(){
    console.log(imgActuelle,images[imgActuelle]);
    diaporama.className="";
    diaporama.style.opacity=0;
    setTimeout(function(){
        diaporama.className="animate__animated animate__rollIn";
        image.setAttribute("src",images[imgActuelle]);
        legende.innerHTML=legendes[imgActuelle];
    },100);
}

function changeColor() {
   // Génère une couleur aléatoire
   let color = '#'+Math.floor(Math.random()*16777215).toString(16);
   // Modifie la couleur de fond de l'élément "diaporama"
   document.getElementById("diaporama").style.backgroundColor = color;
}
