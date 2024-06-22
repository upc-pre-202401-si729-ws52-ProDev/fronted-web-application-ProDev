import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient} from "@angular/common/http";
import {provideClientHydration} from "@angular/platform-browser";

const firebaseConfig = {
  apiKey: "AIzaSyBFxMoFIjXjIdy_YpsfSyZZtosURgR5r_A",
  authDomain: "ecomarket-ws52-8f77c.firebaseapp.com",
  projectId: "ecomarket-ws52-8f77c",
  storageBucket: "ecomarket-ws52-8f77c.appspot.com",
  messagingSenderId: "65886648049",
  appId: "1:65886648049:web:1ef3bf2d51f8d656e51b50",
  measurementId: "G-M72CVP0NNE"


};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),provideHttpClient(),provideClientHydration(),importProvidersFrom([
    // @ts-ignore
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // @ts-ignore
    provideAuth(()=> getAuth()),
  ]),]
};
