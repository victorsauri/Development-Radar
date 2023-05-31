import { TechRadarPage } from '@backstage/plugin-tech-radar';
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { Root } from './components/Root';

import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';
import { AlertDisplay, OAuthRequestDialog } from '@backstage/core-components';

const app = createApp();

const routes = (
  <FlatRoutes>
    <Route path="/" element={<Navigate to="dev-radar" />} />
    <Route
      path="/dev-radar"
      element={<TechRadarPage width={1500} height={800} />}
    />
  </FlatRoutes>
);

export default app.createRoot(
  <>
    <AlertDisplay />
    <OAuthRequestDialog />
    <AppRouter>
      <Root>{routes}</Root>
    </AppRouter>
  </>,
);
