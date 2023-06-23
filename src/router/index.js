import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Admission from '../views/Admission.vue'
import Articles from '../views/ArticlesView.vue'
import ConnexionAdmin from '../views/ConnexionAdmin.vue'
import Galerie from '../views/Galerie.vue'
import Services from '../views/Services.vue'

import { getAuth, onAuthStateChanged } from "firebase/auth";

var isAdmin = true; // variable qui sert a afficher les composants cachés, mais qui n'est pas responsable de leur fonctionnalité
// autrement dit, elle contrôle leur visibilité, mais ces composants ne fonctionnent uniquement lorsque l'utilisateur s'est connecté avec firebase

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {  template a suivre pour écrire une route, attention aux potentiels enfants


    //   path: '/',
    //   name: 'home',
    //   component: HomeView OU component: ()=> {import HomeView from '../views/HomeView.vue'}
    // }

    {
      path: '/',
      name: 'accueil',
      component: HomeView
    },

    {
      path: '/admission',
      name: "admission à l'établissement",
      component: Admission
    },

    {
      path: '/articles',
      name: 'articles',
      component: Articles,
    },

    {
      path: '/connexion-admin',
      name: 'connexion administration',
      component: ConnexionAdmin,
    },

    {
      path: '/galerie',
      name: "galerie photos",
      component: Galerie
    },
    {
      path: '/services',
      name: "services proposés",
      component: Services
    },
    {
      path: '/contacts',
      name: "contacts au sein de l'ehpad",
      component: ()=> import('../views/Contacts.vue')
    }
  ]
})

 


const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener(),
          resolve(user);
      },
      reject
    );
  });
}



router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("Vous n'avez pas accès à cette page");
      next("/");
    }
  } else {
    next();
  }
})

export function getIsAdmin() {
  return isAdmin;
}

export default router