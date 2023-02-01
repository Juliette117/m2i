let filmsdujour = [
        {
            titre : "HaraKiri, 1962, Masaki Kobayashi" ,
            affiche : "./Assets/Images/harakiri affiche.jpg",
            synopsis : "Au XVIIe siècle, le Japon n'est plus en guerre et le pays est dirigé avec fermeté. Hanshirô Tsugumo, un rônin (samouraï errant) sans travail parmi tant d'autres, décide de frapper à la porte du puissant clan des Ii. Reçu par Kageyu Saitô, l'intendant du clan, il lui demande la permission d'accomplir le suicide par harakiri dans la résidence. Tentant de l'en dissuader, Saitô commence alors à lui raconter l'histoire de Motome Chijiwa, un ancien rônin qui souhaitait accomplir, lui aussi, le même rituel. ",
        },
        {
            titre : "Les Sept Samouraïs, 1954, Akira Kurozawa",
            affiche : "./Assets/Images/septsamourais affiche.png",
            synopsis : "Au Moyen-Age, la tranquillité d'un petit village japonais est troublée par les attaques répétées d'une bande de pillards. Sept samouraïs sans maître acceptent de défendre les paysans impuissants. ",
        },
        {
            titre : "Battle Royale, 2001, Kinji Fukasaku",
            affiche : "./Assets/Images/battleroyale affiche.jpg",
            synopsis : "Dans un avenir proche, les élèves de la classe B de 3ème du collège Shiroiwa ont été amenés sur une île déserte par une armée mystérieuse : ils vont participer à un jeu de massacre dont la règle consiste à s'entretuer."
        },
        {
            titre : "Akira, 1991, Katsuhiro Ōtomo",
            affiche : "./Assets/Images/AKIRA_(1988_poster).jpg",
            synopsis :"Tetsuo, un adolescent ayant vécu une enfance difficile, est la victime d'expériences visant à développer les capacités psychiques qui dorment en chacun de nous. Ainsi doté d'une puissance que lui meme ne peut imaginer, Tetsuo décide de partir en guerre contre le monde qui l'a opprimé. Dès lors, Il se retrouve au coeur d'une légende populaire qui annonce le retour prochain d'Akira, un enfant aux pouvoirs extra-ordinaires censé délivrer Tokyo du chaos..."
        },
        {
            titre :"Ring, 1998, Hideo Nakata",
            affiche : "./Assets/Images/ring affiche.jpg",
            synopsis : "Tokyo, fin des années 2000, une ru­meur se répand parmi les adoles­cents : visionner une mystérieuse cassette vidéo provoquerait une mort cer­taine au bout d’une semaine. Après le dé­cès inexplicable de sa nièce, la journaliste Reiko Asakawa décide de mener l’enquête mais se retrouve elle-même sous le coup de la malédiction. Pendant les sept jours qui lui restent à vivre, elle devra remonter à l’origine de la vidéo fatale et affronter le spectre qui hante les télévisions : Sadako."
        },
        {
            titre : "Kimi no Na wa., 2016, Makoto Shinkai",
            affiche : "./Assets/Images/kiminonawa affiche.jpg",
            synopsis : "Mitsuha, adolescente coincée dans une famille traditionnelle, rêve de quitter ses montagnes natales pour découvrir la vie trépidante de Tokyo. Elle est loin d'imaginer pouvoir vivre l'aventure urbaine dans la peau de... Taki, un jeune lycéen vivant à Tokyo. À travers ses rêves, Mitsuha se voit littéralement propulsée dans la vie du jeune garçon. Quel mystère se cache derrière ces rêves étranges qui unissent deux destinées que tout oppose et qui ne se sont jamais rencontrées ?"
        },
        {
            titre : "Godzilla, 1954, Ishirô Honda",
            affiche : "./Assets/Images/afifche godzilla.jpg",
            synopsis : "Dans les années cinquante, au Japon. Réveillé d'un sommeil séculaire par les essais nucléaires américains, un monstre antédiluvien apparemment indestructible, baptisé Godzilla, vient ravager la ville de Tokyo. Un reporter arrivé des États-Unis en est témoin."
        },
        {
            titre : "Hana-bi, 1997, Takeshi Kitano",
            affiche : "./Assets/Images/hana-bi affiche.png",
            synopsis : "Un policier n'hésite pas à braquer une banque pour offrir un dernier voyage à sa femme mourante et aider des proches."
        },
        {
            titre : "Le Château ambulant, 2005, Hayao Miyazaki",
            affiche : "./Assets/Images/chateauambulant affiche.jpg",
            synopsis : "Sophie, une orpheline de 18 ans, travaille dur dans la boutique de chapelier que lui a laissée son père. Un jour, en ville, elle croise Hauru, un magicien très séduisant, mais faible de caractère. Une sorcière, se méprenant sur leurs sentiments, change Sophie en une vieille femme de 90 ans."
        }
]
function getRandomItem(filmsdujour) {
    let randomIndex = Math.floor(Math.random() * filmsdujour.length);
    let item = filmsdujour[randomIndex];
    return item;
}

let result = getRandomItem(filmsdujour);
console.log(result);
.innerHTML = result;


/*cibler un élément aléatoire avec un calcul 
injecter valeurs variable js dans le html pas l'inverse. 
affiche en sous-élément pour chaque film
objet film avec différents attributs*/

//let film = document.getElementById("film");
//console.log(film);
