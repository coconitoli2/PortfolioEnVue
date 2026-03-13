<template>
    <Header></Header>
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
    <Footer></Footer>
</template>

<script setup>
    import Footer from '@/components/Footer.vue';
    import Header from '@/components/Header.vue';
    import Img1 from '../assets/image/W3C du CV.png'
    import Img1Part2 from '../assets/image/W3C du cv (partit deux).png'
    import Img2 from '../assets/image/W3C du cv en css.png'
    import Img2Part2 from '../assets/image/W3C du cv en css (partit deux).png'
</script>

<style scoped >
    
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

</style>

