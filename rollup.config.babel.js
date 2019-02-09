import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import postcss from "rollup-plugin-postcss";

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "prop-types": "PropTypes"
};

export default {
  input: "./src/index.js",
  output: [
    {
      file: "./build/index.js",
      format: "umd",
      name: "sitcontrols2",
      sourcemap: true,
      globals
    },
    {
      file: "./build/index.module.js",
      format: "es",
      name: "sitcontrols2",
      sourcemap: true,
      globals
    }
  ],
  plugins: [
    postcss({
      modules: true,
      extract: true
    }),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-parameters"]
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    resolve(),
    commonjs()
  ],
  external: ["react", "react-dom", "prop-types", "react-fontawesome"]
};
