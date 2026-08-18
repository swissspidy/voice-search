# Voice Search

WordPress plugin that allows visitors to search the site using their voice.

Relies on the Speech Recognition API, which is currently only supported by Chrome [according to caniuse.com](https://caniuse.com/speech-recognition).

## Development

Install dependencies and build the plugin's assets:

```bash
npm install
composer install
npm run build
```

### Linting

```bash
npm run lint:js
npm run lint:css
composer lint
```

### PHP unit tests

```bash
bash bin/install-wp-tests.sh wordpress_test root '' localhost latest
composer test
composer test:multisite
```

### End-to-end tests

End-to-end tests run against a real WordPress site started with
[`@wordpress/env`](https://www.npmjs.com/package/@wordpress/env). They use the
[WordPress Playground](https://wordpress.github.io/wordpress-playground/)
runtime, so Docker is not required:

```bash
npm run build
npm run test:e2e
```

The site is started automatically, but it can also be launched separately with
`npm run wp-env:start`. The Playground runtime only supports a single
environment, so `.wp-env.json` disables the separate tests environment and
serves the development one on the port Playwright expects.

Browsers never expose the Speech Recognition API to an automated session, so the
tests install a fake `webkitSpeechRecognition` implementation that can be driven
from the test. See `tests/e2e/fixtures/speech-recognition.js`.

Set `COLLECT_COVERAGE=true` to additionally collect code coverage for the
plugin's scripts and styles. The report is written to `artifacts/e2e-coverage`.
Coverage requires source maps, so build with:

```bash
WP_DEVTOOL=source-map NODE_ENV=development npm run build
```
