import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
// Importaciones de servicios mock si están disponibles
// import { AuthServiceMock } from './path/to/auth.service.mock';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {provideHttpClient} from "@angular/common/http";
import {provideClientHydration} from "@angular/platform-browser";

// const firebaseConfig = { ... }; // Configuración de Firebase comentada

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideClientHydration(),
    importProvidersFrom([
      // Configuraciones de Firebase comentadas
      // provideFirebaseApp(() => initializeApp(firebaseConfig)),
      // provideAuth(()=> getAuth()),

      // Añadir aquí la inyección de servicios mock o locales si es necesario
    ]),
    provideAnimationsAsync(),
  ]
};
