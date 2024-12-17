
const sounds = {
    '68': new Audio('./sounds/do-80236.mp3'),   
    '82': new Audio('./sounds/c6-82019.mp3'),    
    '70': new Audio('./sounds/re-78500.mp3'),    
    '84': new Audio('./sounds/d6-82018.mp3'),     
    '71': new Audio('./sounds/mi-80239.mp3'),     
    '72': new Audio('./sounds/fa-78409.mp3'),     
    '85': new Audio('./sounds/f6-102819.mp3'),     
    '73': new Audio('./sounds/g6-82014.mp3'),     
    '74': new Audio('./sounds/sol-101774.mp3'),   
    '75': new Audio('./sounds/la-80237.mp3'),     
    '79': new Audio('./sounds/a6-82015.mp3'),     
    '76': new Audio('./sounds/si-80238.mp3')       
};


function playSound(note) {
    const sound = sounds[note];
    if (sound) {
        sound.currentTime = 0; 
        sound.play();
    }
}


const keys = document.querySelectorAll('.piano-ele');
keys.forEach(key => {
    key.addEventListener('click',function() {
        const note = key.getAttribute('data-key');
        playSound(note);
    });
});


document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    const keyCode = {
        'D': '68',
        'R': '82',
        'F': '70',
        'T': '84',
        'G': '71',
        'H': '72',
        'U': '85',
        'I': '73',
        'J': '74',
        'K': '75',
        'O': '79',
        'L': '76'
    };

    if (keyCode[key]) {
        playSound(keyCode[key]);
    }
});



const burgerMenu = document.querySelector("#burger-menu");
const sideBarMenu = document.querySelector("#side-bar");
const mainSection = document.querySelector("#main-section");
const section2=document.querySelector("#section2")
let icrementcontact = document.querySelector("#compteur");
let valeur = +icrementcontact.textContent;

// Fonctions de rappel
const handleAddStyle = (element, style) => {
  element.classList.add(style);
};

const handleRemoveStyle = (element, style) => {
  element.classList.remove(style);
};

// Événements pour le menu burger
burgerMenu.addEventListener("click", () => {
  if (sideBarMenu.classList.contains("display-none")) {
    handleRemoveStyle(sideBarMenu, "display-none");
    handleRemoveStyle(mainSection, "w-100");
  } else {
    handleAddStyle(sideBarMenu, "display-none");
    handleAddStyle(mainSection, "w-100");
  }
});

// Tableau de contacts et bouton
const contacts = [];
const btnCreerContact = document.querySelector("#btnCreerContact");

// Créer une table une fois


// Créer l'en-tête de la table
const tr = document.createElement('ul');
tr.innerHTML = `
  <li >Titre</li>
  
  <li >Numéro de téléphone</li>
  <li >Fonction et entreprise</li>
  <li >Libellés</li>
`;
tr.style.display = "none";
mainSection.appendChild(tr);

btnCreerContact.addEventListener('click', function () {
  // Créer le div parent
  const parent = document.createElement('div');
  parent.style.height = '600px';
  
  parent.style.borderRadius = '25px';
  parent.style.backgroundColor = 'white';
  parent.style.paddingBottom = '100px';
  parent.style.marginLeft = '250px';
  parent.style.marginRight = '50px';
  
  
  parent.style.position = 'relative';
  parent.style.bottom = '200px';

  // Créer le conteneur pour les entrées
  const contenair = document.createElement('div');
  contenair.style.display = 'flex';
  contenair.style.flexDirection = 'column';
  contenair.style.gap = '10px';
  contenair.style.paddingTop='230px';
  // icon person
  const iconeperson = document.createElement('img');
  iconeperson.src = "assets/images/person.png";
  iconeperson.style.width='30px';
  iconeperson.style.position='absolute';
  iconeperson.style.top='230px';
  iconeperson.style.left='65px';
  // icon domain
  const iconedomain = document.createElement('img');
  iconedomain.src = "assets/images/domain.png";
  iconedomain.style.width='30px';
  iconedomain.style.position='absolute';
  iconedomain.style.top='325px';
  iconedomain.style.left='65px';
  // icon call
  const iconecall = document.createElement('img');
  iconecall.src = "assets/images/call.png";
  iconecall.style.width='30px';
  iconecall.style.position='absolute';
  iconecall.style.bottom='105px';
  iconecall.style.left='65px';
// icon mail
  const iconeMail = document.createElement('img');
  iconeMail.src = "assets/images/iconMail.png";
  iconeMail.style.width='30px';
  iconeMail.style.position='absolute';
  iconeMail.style.bottom='150px';
  iconeMail.style.left='65px';
  // image 
  const image = document.createElement('img');
  image.src = "assets/images/photo.png"
  image.style.width="150px";
  image.style.position="absolute";
  image.style.top="20px";
  image.style.left="20px";
  // Bouton retour
  const btnPrecedent = document.createElement('img');
  btnPrecedent.src = "assets/images/retour.png"
  btnPrecedent.style.width="25px";
  btnPrecedent.style.position="absolute";
  btnPrecedent.style.top="10px";
  btnPrecedent.style.left="10px";
  btnPrecedent.addEventListener('click', () => {
    mainSection.style.display = 'block';
    parent.style.display = 'none';
    section2.style.display='none';
    
    tr.style.display="flex";
tr.style.flexDirection='row';
tr.style.justifyContent='space-between';
tr.style.gap='125px';
tr.style.listStyle='none';
    
  });

  // Champs de saisie
  const inputFields = ['Prénom', 'Nom', 'Entreprise', 'Fonction', 'E-mail', 'Téléphone','relation'];
  const inputs = {};

  inputFields.forEach((field) => {
    const input = document.createElement('input');
    input.type = field === 'Email' ? 'email' : 'text';
    input.placeholder = field;
    input.style.padding = '10px';
    
    input.style.borderRadius= '5px';
    input.style.fontSize = '11px';
    input.style.width = '40%';
    input.style.marginLeft = '10%';
    inputs[field] = input;
    contenair.appendChild(input);
  });

  // Bouton enregistrer
  const btnEnregistrer = document.createElement('button');
  btnEnregistrer.textContent = 'Enregistrer';
  
  btnEnregistrer.style.fontSize = '14px';
  btnEnregistrer.style.borderRadius = '20px';
  btnEnregistrer.style.border = 'none';
  btnEnregistrer.style.padding = '12px';
  btnEnregistrer.style.width = '125px';
  btnEnregistrer.style.position = 'absolute';
  btnEnregistrer.style.top = '25px';
  btnEnregistrer.style.right = '425px';
  btnEnregistrer.style.color='white';
  btnEnregistrer.style.backgroundColor='#3333ff';

  btnEnregistrer.addEventListener('click', function () {
    const contact = {
      prenom: inputs['Prénom'].value,
      nom: inputs['Nom'].value,
      entreprise: inputs['Entreprise'].value,
      fonction: inputs['Fonction'].value,
      email: inputs['E-mail'].value,
      telephone: inputs['Téléphone'].value,
      relation: inputs['relation'].value,
    };

    contacts.push(contact);
    afficherContact(); // Mettre à jour l'affichage des contacts

    // Réinitialiser les valeurs des champs
    Object.values(inputs).forEach(input => input.value = '');
    valeur++;
    icrementcontact.textContent = valeur;
    
  });

  // Ajouter les éléments au conteneur
  contenair.appendChild(image);
  contenair.appendChild(btnPrecedent);
  contenair.appendChild(btnEnregistrer);
  contenair.appendChild(iconeMail);
  contenair.appendChild(iconeperson );
  contenair.appendChild( iconedomain );
  contenair.appendChild( iconecall);
  parent.appendChild(contenair);
  mainSection.style.display = 'none';
  document.body.appendChild(parent);
});

// Afficher les contacts
function afficherContact() {
  // Effacer les contacts précédents
  contacts.forEach(contact => {
    const row = document.createElement('ul');
    row.innerHTML = `
    <li>${contact.prenom} ${contact.nom}</li>          
    <li>${contact.telephone}</li>                        
    <li >${contact.fonction}, ${contact.entreprise}</li> 
    <li >${contact.relation}</li>                        
  `;
  row.style.display="flex";
  row.style.flexDirection='row';
  row.style.gap='150px';
row.style.justifyContent='space-between';

row.style.listStyle='none';
    mainSection.appendChild(row);
    
  });
  // Afficher l'en-tête du tableau si des contacts existent
  if (contacts.length > 0) {
    tr.style.display = "block"; 
    // Afficher l'en-tête
  } else {
    tr.style.display = "none"; // Masquer l'en-tête si aucun contact
  }
}
