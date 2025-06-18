import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
    provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { authInterceptorFn } from './interceptors/auth.interceptor';
import { errorInterceptorFn } from './interceptors/error.interceptor';
import { loadingInterceptorFn } from './interceptors/loading.interceptor';
import { loggingInterceptorFn } from './interceptors/logging.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([
        authInterceptorFn,
        errorInterceptorFn,
        loadingInterceptorFn,
        loggingInterceptorFn,
      ])
    ),
  ],
};
