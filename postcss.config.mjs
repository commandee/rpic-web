import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import postcssReporter from "postcss-reporter";
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [postcssPresetEnv(), autoprefixer(), cssnano(), postcssReporter()]
};
