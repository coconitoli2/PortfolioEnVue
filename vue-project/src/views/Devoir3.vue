<template>
    <header>
        <nav class="NavBar">
       
        <a :href="`/`">
          <img class="IconPortfolio" src="../assets/icon/pixil-frame-0.png" alt="IconPortfolio">
        </a>
         <h1 class="ParagrapheNav" >Mon Portfolio</h1>
         <img class="IconGestion" src="../assets/icon/pixil-frame-1.png" alt="IconGestion">
    </nav>
    </header>
    <main class="Main">
        <div class="BoxDiv">
            <h1>Devoir 3 : Dynamiser un Espace Commentaire</h1>
            <h2>Description :</h2>
            <ul>
                <h1>Voici les informations et explications sur ce devoir.</h1>
                <li>Objectif : Créer un espace de commentaires interactif</li>
                <li>Technologies utilisées : HTML, CSS, JavaScript</li>
                <li>Fonctionnalités : Ajouter, supprimer, et visualiser des commentaires</li>
            </ul>
            <div>
                <h1>Visualisation du devoir :</h1>
                <iframe class="imageDevoir" src="../UnEspaceAuCommentaire/index.html" frameborder="200"></iframe>
            </div>
            
        </div>
    </main>
      <footer>
        <div class="LienSocial">
            <a href="https://github.com/coconitoli2">
                <img class="GithubIcon" src="../assets/icon/GitHub-Logo-700x394.png" alt="GithubIcon">
            </a>
            <a href="https://discord.com/channels/@me/1378419902372646924">
                <img class="DiscordIcon" src="../assets/icon/discord-logo-0.png" alt="DiscordIcon">
            </a>
        </div>

    </footer>

</template>

<script setup></script>
<style scoped>

.IconPortfolio:hover {
        /*Celà crée un effet de zoom sur l'icon*/
    transform: translateX(0%) scale(1.2) rotate(0deg);
    filter: brightness(1.2);
    }

    .NavBar{
    display: flex;
    background-image: url("../assets/image/fond-sac-plastique-froisse-rouge.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;   
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.Main{
     background-image: url("../assets/image/Grille_Sur_Font_Gris.jfif");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        min-height: 100vh;
        padding: 50px 20px; /* espace autour */
        display: flex;
        justify-content: center; /* centrer horizontalement */
        align-items: start;      /* début vertical */
}

.BoxDiv{
    background-color: white;   /* bloc blanc */
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2); /* ombre légère */
  max-width: 1000px; /* largeur maximale */
  width: 100%;       /* s'adapte aux écrans plus petits */
}

.imageDevoir{
    width: 1000px;
 height: 1000px;
}

.LienSocial img {
  width: 40px;
  height: auto;      /* garde les proportions */
  margin-right: 10px;
}

.GithubIcon{
    
    width: 50px;
    height: 10px;

}
.DiscordIcon{
    width: 50px;
    height: 10px;
}

footer{
    background-image: url("../assets/image/Des_cailloux.jfif");
}

</style>