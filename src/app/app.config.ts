import { ApplicationConfig } from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TestRouteReuseStrategy } from './strategy/TestRouteReuseStrategy';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: RouteReuseStrategy, useClass: TestRouteReuseStrategy
    },
    provideRouter(routes)
  ]
};
