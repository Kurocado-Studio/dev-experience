import { ReactTestingLibrary } from '@kurocado-studio/qa';

export { defineConfig, vitestReact } from '@kurocado-studio/qa';

export const reactTestingLibrary = ReactTestingLibrary;

export {
  prettierConfig,
  semanticReleaseAppConfig,
  semanticReleaseNpmConfig,
  eslintNodeConfig,
  eslintReactConfig,
  commitLintConfig,
  defineESLintConfig,
} from '@kurocado-studio/styleguide';
