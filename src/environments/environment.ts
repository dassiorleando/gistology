// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

/**
 * Non-prod environment file
 * @author dassiorleando
 */
export const environment = {
  production: false,

  // You may be using a different API link for dev
  serverUrl: 'http://localhost:3000'
};
