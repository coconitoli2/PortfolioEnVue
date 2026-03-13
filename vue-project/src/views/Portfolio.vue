<template>
   <Header></Header>
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
    
  <Footer></Footer>
</template>


<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
</script>



<style scoped>
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
</style>
