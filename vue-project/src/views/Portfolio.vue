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
   <main class="MainPortfolio">
    <img class="PhotoDeMoi" src="../assets/image/WIN_20250419_10_46_51_Pro.jpg" alt="PhotoDeMoi" onclick="window.open(this.src, '_blank');">
        <h1 class="FirstH1">Description:</h1>
        <div class="ContactMain">
            <a href="https://www.google.fr/maps/place/27+Grande+Rue,+03140+Voussac/" target="_blank">27 Grande Rue 03140 Voussac</a>        
            <a href="mailto:pelissier.vladimir@gmail.com">pelissier.vladimir@gmail.com</a>
            <a href="tel:0664490254">0664490254</a>
        </div>
        <div>
            <h1 class="TextH1">Nom: Pelissier. Prénom: Vladimir.</h1>
            <p class="TextAboutMe">Je m'appelle Vladimir Pelissier, je souhaite me lancer dans l'informatique en utilisant des codes du style: l'UA, le Java, le JavaScript, le CSS et le HTML !</p>
        </div>
        <div class="BoxDevoir">            
                <a :href="`/devoir1`">
                     <img src="/image/Devoir-Cv.png" alt="CV2025" />
                </a>
                <a :href="`/devoir2`">
                    <img class="Devoir2" src="../assets/image/Devoir-CahierDesCharges.png" alt="CahierDesCharges">
                </a>
                <a :href="`/devoir3`">
                    <img class="Devoir3" src="../assets/image/Devoir-DynamiserUnEspaceCommentaire.png" alt="EspaceCommentaire">
                </a>
                
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


<script setup>
</script>



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

a {
    color: white;
    margin-right: 20px;
}

.MainPortfolio {
  background-image: url("../assets/image/Grille_Sur_Font_Gris.jfif");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 80vh;  /* minimum hauteur */
  padding-bottom: 50px; /* espace entre main et footer */
  text-align: center;
}

.PhotoDeMoi {
  cursor: pointer;
  display: block;        /* nécessaire pour margin auto normalement*/
  margin: 20px auto 0;
  width: 250px;          /* taille de l'image */
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0,0,0,0.2); /* l'effet d'ombre */
}

.FirstH1{
    color: white;
}

.TextH1{
    color: white;
}

.TextAboutMe{
    color: white;
}

.BoxDevoir img {
  display: inline-block;  /* permet de rester sur la même ligne */
  margin-right: 10px;     /* espace entre les images */
width: 250px;
}

.BoxDevoir img:last-child {
  margin-right: 0;        /* pas de marge après la dernière */
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
