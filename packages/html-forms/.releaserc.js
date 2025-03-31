import { semanticReleaseAppConfig } from '@internal/config';

export default {
  // defaults to not release to NPM
  ...semanticReleaseAppConfig,
  extends: 'semantic-release-monorepo',
};
