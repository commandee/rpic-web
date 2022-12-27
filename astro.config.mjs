import { defineConfig } from 'astro/config';

// https://astro.build/config
import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
    integrations: [purgecss()]
});
