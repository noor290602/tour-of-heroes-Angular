import { ApplicationConfig, importProvidersFrom, makeEnvironmentProviders, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    importProvidersFrom(InMemoryWebApiModule.forRoot(InMemoryDataService))
  ],
};
