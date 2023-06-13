<script setup>
import { ref, reactive } from 'vue';
//import firebase from "firebase";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';// import router
const router = useRouter();

let email = ref("");
let password = ref("");
let errMsg = ref();

let isLoggedIn = ref(false);



let auth = getAuth();
onAuthStateChanged(auth, (webUser) => {
    if (webUser) {
        isLoggedIn = true;
    } else {
        isLoggedIn = false;
    }
})


function login() { // we also renamed this method
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            //console.log('Connexion avec succès');
            //console.log(userCredential);
            router.push('/articles');
        })
        .catch(error => {
            switch (error.code) {
                case 'auth/invalid-email':
                    errMsg.value = 'E-mail invalide'
                    break;
                case 'auth/user-not-found':
                    errMsg.value = 'Aucun compte trouvé avec cet E-mail'
                    break;
                case 'auth/wrong-password':
                    errMsg.value = 'Mot de passe incorrect'
                    break;
                default:
                    errMsg.value = 'E-mail ou mot de passe incorrect'
                    break;
            }
        });
}

function logout() {
    signOut(auth)
    router.push("/")
}


//& DEBUG

           function afficherIsLoggedIn(){
               console.log(`${isLoggedIn}`)                                    
           }
</script>

<template>
            <button @click="afficherIsLoggedIn">afficher isLoggedIn</button>
    <form @submit.prevent="login">
        <!-- Email input -->
        <div class="form-outline mb-4">
            <p class="title">Veuillez vous connecter</p>
            <label class="form-label" for="form2Example1">Adresse mail</label>
            <input type="email" id="form2Example1" class="form-control" placeholder="Entrez votre E-mail" v-model="email" />
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">Mot de passe</label>
            <input type="password" id="form2Example2" class="form-control" placeholder="Entrez votre mot de passe"
                v-model="password" />
        </div>
        <p class="errorMsg" v-if="errMsg">{{ errMsg }}</p><br>

        <!-- Submit button -->
        <button type="submit" id="button-auth" class="btn btn-primary btn-block mb-4">Connexion</button>

        <div v-show="isLoggedIn.valueOf()">
            <button @click="logout">se déconnecter</button>

        </div>

    </form>
</template>