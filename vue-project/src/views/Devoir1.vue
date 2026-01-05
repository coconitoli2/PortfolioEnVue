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
        <div class="ContainerWork">
         <h1>Devoir 1 : Mon CV</h1>

         <h2>Description :</h2>
           <p>Ce CV a été créé en index.html et style.css. J'ai créé des liens liés a mes résaux socieaux et des liens
            menant à mon domicile. J'ai aussi indiqué mon adresse email et mon numéro de téléphones pour me contacter
            et des informations sur moi comme mes talents, mes capacités, mes préférences et une photo de moi pour
            montrer
            à quoi je ressemble. J'ai mis aussi des bannières en style.css pour donner un style plus coloré
            et plus adapté a un style professionnel.</p>

              <h2>Mon CV :</h2>
              <iframe class="DevoirCV" src="../CV 2025/index.html" frameborder="200"></iframe>
                 <h2>Les Correction de la W3C ici:</h2>
                  <div class="BlocPictures">
                    <a :href="Img1" target="_blanc">
                        <img src="../assets/image/W3C du CV.png" alt="UneCorrection1">
                    </a>
                    <a :href="Img1Part2" target="_blank">
                        <img src="../assets/image/W3C du cv (partit deux).png" alt="Une_Correction2">
                     </a>
                    <a :href="Img2" target="_blank">
                        <img src="../assets/image/W3C du cv en css.png" alt="Une_Correction3">
                    </a>
                    <a :href="Img2Part2" target="_blank">
                        <img src="../assets/image/W3C du cv en css (partit deux).png" alt="Une_Correction4">
                    </a>
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

<script setup>
    import Img1 from '../assets/image/W3C du CV.png'
    import Img1Part2 from '../assets/image/W3C du cv (partit deux).png'
    import Img2 from '../assets/image/W3C du cv en css.png'
    import Img2Part2 from '../assets/image/W3C du cv en css (partit deux).png'
</script>

<style scoped >
    .IconPortfolio:hover {
        /*Celà crée un effet de zoom sur l'icon*/
    transform: translateX(0%) scale(1.2) rotate(0deg);
    filter: brightness(1.2);
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
    .ContainerWork {
  background-color: white;   /* bloc blanc */
  padding-right: 30px;
  padding-left: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2); /* ombre légère */
  max-width: 1000px; /* largeur maximale */
  width: 100%;       /* s'adapte aux écrans plus petits */
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

.DevoirCV{
    width: 1000px;
    height: 500px;
}

.BlocPictures{
        display: flex;
    /* active flexbox */
    justify-content: center;
    /* centre les images */
    gap: 20px;
    /* espace entre elles */
    flex-wrap: wrap;
    /* permet de passer à la ligne si l'écran est trop petit */
    margin-top: 20px;
}

.BlocPictures img{
    width: 200px;
    /* taille moyenne */
    height: auto;
    /* garde les proportions */
    border-radius: 8px;
    border: 1px solid #ccc;
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

