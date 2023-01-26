// numéro de l'image actuellement visualisée
var imgActuelle = 0;

// tableau listant toutes les images
var images = ["img/rayane.png","img/Alicia.png","img/amal.png","img/asia.png","img/axel.png","img/fredd.png","img/khaoula.png"
,"img/lea.png","img/luka.png","img/kevin.png","img/mehdi.png","img/najet.png","img/soumaya.png","img/tom.png","img/yanis.png"];
var currentImg = 0;
// tableau listant toutes les images de fond
var imagesFond = ["/img2/rayane.png","img2/alicia3.png","img2/amal.png","","img2/axel2.png","img2/fredd.jpg","img2/khaoula.png","img2/lea.png"
,"img2/luckas.png","img2/kevin2.png","img2/mehdi.png","img2/najet2.PNG","img2/soumaia.png","img2/tom.jpg","img2/yanis.jpg"];


// tableau listant toutes les légendes
var legendes = [
    "Se pardonner et s’accepter tel que l’on est,voila ce que signifie être fort.", // rayane
    "Si personne ne déteste votre travail, personne ne l’aime vraiment non plus.",        // alicia
    " Il n’y a qu’une seule réussite : arriver à vivre sa vie comme on l’entend.",  // alicia
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" ,        // asia
    "Queen" ,        // axel
    "Tous seul on va plus vite , ensemble on vas plus loin. @plus  <a href='https://www.youtube.com/watch?v=zF6BxDIRHjo&list=RDTMl0LLp2oQM&index=10' target='_blank'>:) </a>" ,        // fredd
    "Les perdants trouvent des excuses, les gagnants des moyens." , //kahoula
    "Il faut toujours un coup de folie pour bâtir un destin.",  //lea
    "la vie est courte alors profite de chaque instant",         // luka
    "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxx"  ,      // kevin
    "Il faut toujours viser la lune, car même en cas d'échec, on atterrit dans les étoiles"  ,       // mehdi
    "La vie est un mystère qu'il faut vivre  et non un problème qu'il faut résoudre... "  , // najet
    "Tout arrive à point à qui sait attendre." , // soumaya
    "Ne change pour personne, ta personnalité fait ta force",          // tom
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
     // on met à jour l'image de fond
     fond.style.backgroundImage = "url("+imagesFond[imgActuelle]+")";
     fond.style.backgroundSize = "cover";
     fond.style.backgroundPosition = "center";
     fond.style.backgroundSize = "70%";
     
     majImage();
}

// fonction appelée lors d'un clic sur le bouton #btGauche
function imgPrecedente(){
    // on passe à l'image précédente
    imgActuelle--;
    // si imgActuelle est plus petit que 0, on le redéfinit à que la dernière clé du tableau images (case 3)
    if(imgActuelle < 0) imgActuelle= images.length-1;
    majImage();
    fond.style.backgroundImage = "url("+imagesFond[imgActuelle]+")";
    fond.style.backgroundSize = "cover";
    fond.style.backgroundPosition = "center";
    fond.style.backgroundSize = "70%";
    majImage();
}

// met à jour l'attribut src de la balise image avec le chemin
// d'image stocké dans la case imgActuelle du tableau (soit 0 soit 1 soit 2 soit 3)
function majImage() {
    console.log(imgActuelle, images[imgActuelle]);
    diaporama.className = "animate__animated animate__fadeOut";
    setTimeout(function() {
      image.setAttribute("src", images[imgActuelle]);
      legende.innerHTML = legendes[imgActuelle];
      diaporama.className = "animate__animated animate__fadeIn animate__delay-1.5s";
    }, 1500);
  }