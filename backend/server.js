// server.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

// Initialisation de l'Admin SDK avec vos identifiants Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dinane-fae32-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = admin.database();

// Références vers les nœuds de la base de données
const interactionsRef = db.ref("interactions");
// Ici on suppose qu'on utilise un nœud "cube" pour stocker l'état du cube (couleur, position, etc.)
const cubeRef = db.ref("cube");
// Pour le scénario escape room, un nœud dédié pour l'état de la salle (ex. si le puzzle est résolu)
const escapeRoomRef = db.ref("escapeRoom");

console.log("Backend Node.js démarré, en écoute des interactions...");

// Écoute en continu les nouvelles interactions enregistrées dans Firebase
interactionsRef.on("child_changed", snapshot => {
  const interaction = snapshot.val();
  console.log("Nouvelle interaction reçue :", interaction);

  // Si l'interaction est de type "touch" ou "click", on met à jour la couleur du cube
  if (interaction.type === "touch" || interaction.type === "click") {
    // Génère une couleur aléatoire, par exemple "0xff00aa"
    const randomColor = "0x" + Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, '0');
    console.log("Mise à jour de la couleur du cube vers :", randomColor);
    cubeRef.update({ color: randomColor });
  }
  
  // Pour le scénario d'escape room, on peut avoir une interaction de type "puzzle"
  // L'interaction peut contenir, par exemple, un code saisi par un joueur
  if (interaction.type === "puzzle") {
    // Supposons que le code correct pour débloquer la salle est "OPEN123"
    if (interaction.code === "OPEN123") {
      console.log("Puzzle résolu – Escape room débloquée !");
      // Mise à jour de l'état de l'escape room
      escapeRoomRef.update({ solved: true, solvedAt: Date.now() });
    } else {
      console.log("Code incorrect pour le puzzle :", interaction.code);
      // On peut, par exemple, enregistrer une tentative incorrecte
      // escapeRoomRef.child('attempts').push({ code: interaction.code, timestamp: Date.now() });
    }
  }
  
  // On supprime l'interaction traitée pour éviter de la retraiter ultérieurement
  snapshot.ref.remove();
});
