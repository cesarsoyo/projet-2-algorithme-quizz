const prompt = require('prompt-sync')()


let questOne = {
    question: "1. Parmi les méthodes suivantes, quelle pratique devrait être évitée lors de l'optimisation des performances du chargement initial des ressources?",
    reponses:
        [
            "Réponse A: Utiliser des techniques de prefetching et de preloading pour charger les ressources critiques.",
            "Réponse B: Minifier et concaténer les fichiers CSS et JavaScript pour réduire le nombre de requêtes réseau.",
            "Réponse C: Convertir les fichiers en code morse pour accélérer le transfert de données.",
            "Réponse D: Utiliser des polyfills pour garantir la compatibilité avec les anciens navigateurs.",
            "Réponse E: Utiliser des images vectorielles pour réduire la taille des fichiers image.",
        ],
    goodAnswer: "C",
}

let questTwo = {
    question:
        "2. Quelle approche ne devrait pas être privilégiée pour garantir la sécurité des données utilisateur?",
    reponses:
        [
            "Réponse A: Utiliser des tokens d'authentification tels que JWT pour autoriser les requêtes entre le front-end et le back-end.",
            "Réponse B: Mettre en place un protocole HTTPS pour chiffrer les échanges entre le navigateur et le serveur.",
            "Réponse C: Stocker les mots de passe des utilisateurs dans des fichiers texte non chiffrés.",
            "Réponse D: Utiliser un jeu de clés mystiques pour chiffrer les données, uniquement accessible par télépathie.",
            "Réponse E: Mener des audits de sécurité réguliers pour identifier les vulnérabilités potentielles.",
        ],
    goodAnswer: "D"

}


let questThree = {
    question:
        "3. Parmi les méthodes suivantes, quelle pratique ne devrait pas être encouragée pour garantir une expérience utilisateur fluide?",
    reponses:
        [
            "Réponse A: Engager des clowns pour distraire les utilisateurs pendant le chargement des ressources.",
            "Réponse B: Utiliser des loaders ou des spinners pour indiquer visuellement le chargement des ressources.",
            "Réponse C: Optimiser la taille des images en utilisant des formats plus légers tels que WebP ou AVIF.",
            "Réponse D: Jouer de la musique d'ascenseur pendant le chargement pour divertir les utilisateurs.",
            "Réponse E: Utiliser des placeholders flous pour simuler le chargement progressif des images.",
        ],
    goodAnswer: "A"
}

let questFour = {
    question:
        "4. Quelle méthode ne devrait pas être adoptée pour améliorer la compatibilité inter-navigateurs des fonctionnalités HTML5?",
    reponses:
        [
            "Réponse A: Utiliser des polyfills pour combler les lacunes de compatibilité des navigateurs.",
            "Réponse B: Effectuer des tests approfondis sur différents navigateurs pour identifier les fonctionnalités non prises en charge.",
            "Réponse C: Éviter d'utiliser des préfixes de vendeurs pour encourager l'adoption des spécifications émergentes.",
            "Réponse D: Utiliser des outils de transpilation pour convertir le code JavaScript en une version compatible avec les anciens navigateurs.",
            "Réponse E: Demander aux navigateurs de faire une pause pour permettre aux utilisateurs de rattraper leur retard.",
        ],
    goodAnswer: "E"
}

let questFive = {
    question:
        "5. Quelle pratique ne contribue pas à améliorer la maintenabilité du code CSS?",
    reponses:
        [
            "Réponse A: Utiliser des préprocesseurs CSS pour organiser et réutiliser les styles.",
            "Réponse B: Utiliser des noms de classes significatifs pour une meilleure lisibilité du code.",
            "Réponse C: Diviser les styles en modules logiques pour faciliter la gestion des feuilles de style.",
            "Réponse D: Convertir le code CSS en emoji pour simplifier la lecture.",
            "Réponse E: Inclure des commentaires détaillés pour documenter le code CSS.",
        ],
    goodAnswer: "E"
}


let questSix = {
    question:
        "6. Parmi les approches suivantes, quelle pratique ne devrait pas être privilégiée pour optimiser les performances du rendu initial d'une application web?",
    reponses:
        [
            "Réponse A: Utiliser des techniques de lazy loading pour charger les ressources uniquement lorsque nécessaire.",
            "Réponse B: Organiser une course de tortues pour déterminer quelle ressource chargera en premier.",
            "Réponse C: Réduire la taille des images en les compressant sans compromettre leur qualité.",
            "Réponse D: Utiliser des prefetching pour charger les ressources avant leur demande.",
            "Réponse E: Mettre en cache toutes les ressources possibles dès le chargement initial.",
        ],
    goodAnswer: "B"
}


let questSeven = {
    question:
        "7. Quelle méthode ne contribue pas à améliorer la performance des scripts JavaScript?",
    reponses:
        [
            "Réponse A: Utiliser des algorithmes de compression comme Brotli ou Gzip pour réduire la taille des fichiers JavaScript.",
            "Réponse B: Éviter les boucles infinies pour ne pas surcharger le navigateur.",
            "Réponse C: Utiliser des fonctions asynchrones et des promesses pour éviter les blocages du thread principal.",
            "Réponse D: Faire réciter le code JavaScript par un perroquet pour accélérer son exécution.",
            "Réponse E: Écrire tout le code JavaScript en majuscules pour le rendre plus rapide à lire.",
        ],
    goodAnswer: "D"
}


let questEight = {
    question:
        "8. Parmi les pratiques suivantes, quelle approche ne devrait pas être encouragée pour garantir une accessibilité maximale sur un site web?",
    reponses:
        [
            "Réponse A: Utiliser des balises sémantiques pour améliorer la structure du contenu.",
            "Réponse B: Ajouter des attributs ARIA pour améliorer l'accessibilité des éléments interactifs.",
            "Réponse C: Assurer un contraste de couleur suffisant pour le texte et les arrière-plans.",
            "Réponse D: Utiliser uniquement des couleurs pour indiquer les états d'interaction des éléments.",
            "Réponse E: Inviter des extraterrestres à tester l'accessibilité pour une perspective intergalactique.",
        ],
    goodAnswer: "E"
}


let tabQuest = [questOne, questTwo, questThree, questFour, questFive, questSix, questSeven, questEight]
let choice = null;
let counter = 0;

main()
async function main() {
    console.log("\nSalut à tous les futurs développeurs web! Prêts pour un quizz étrange? (｡◕‿◕｡)");
    await sleep(4000)
    console.log("\nIci, cherchez l'erreur parmi cinq réponses. Mais attention, si vous trouvez la bonne réponse, aucun point pour vous! \nOui, vous avez bien entendu, seule la faute vous mène à la victoire. ( ͡° ͜ʖ ͡°) ");
    await sleep(9000)
    console.log("\nAlors, oserez-vous défier ce jeu de devinettes inversé? \nBonne chance et que le hasard soit avec vous dans ce jeu étrange et funeste! ☜(⌒▽⌒)☞ ");
    await sleep(6000)
    console.log("\nPour répondre, il vous suffit de saisir en MAJUSCULE la lettre de l'option choisie   ԅ(≖‿≖ԅ) ");
    await sleep(5000)
    console.log("\nALORS, ON COMMENCEEEEEE !!!!!! (づ｡◕‿‿◕｡)づ ");
    await sleep(4000)
    for (let i = 0; i < tabQuest.length; i++) {
        let el = tabQuest[i]
        console.log("\n" + el.question + "\n");
        for (let j = 0; j < el.reponses.length; j++) {
            await sleep(2000)
            const element = el.reponses[j];
            console.log(element);
        }
        await sleep(2000)
        choice = prompt("\nTa réponse :  ")
        while (choice != "A" && choice != "B" && choice != "C" && choice != "D" && choice != "E") {
            choice = prompt("\nTu ne sais pas choisir parmi cinq lettres ? A, B, C, D ou E ?   ")
        }
        if (choice === el.goodAnswer) {
            await sleep(1000)
            console.log("\nBonne reponse!  (⊃｡•́‿•̀｡)⊃  ");
            counter++
            await sleep(1000)
        } else {
            await sleep(1000)
            console.log("\nDommage! Mauvaise réponse, risque mortel pour toi!  (๑•́ ₃ •̀๑)  ");
            await sleep(1000)
        }
    }
    await sleep(2000)
    console.log("C'est fini !");
    await sleep(4500)
    console.log("\nTon destin dans ce jeu est marqué par un score de : \n-----------  " + counter + " points!!!  ------------");
    
    if (counter <= 4) {
        await sleep(2000)
        console.log("\nPerdant! Tu devrais étudier plus. C'est un examen pour les enfants du primaire  щ（ﾟДﾟщ） ")
    } else if (counter > 4 && counter < 6) {
        await sleep(2000)
        console.log("\nAh, je suis surpris! Je ne m'attendais pas à ça de toi! Peut-être que tu dépasseras mes attentes dans un futur lointain  (•̀ᴗ•́)و ̑̑  ")
    } else {
        await sleep(2000)
        console.log("\nFélicitations, petit scarabée! Ma maîtrise est contagieuse, même pour les experts. Ah, la grandeur est une seconde nature pour moi!  (っ˘ڡ˘ς)  ")
    }
}


function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}