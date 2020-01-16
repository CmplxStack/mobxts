const tsconfig = require("./tsconfig.json");
const path = require("path");

/**
 * Transforms tsconfig paths to Jest compatible moduleNameMapper syntax
 * Only takes the first path for each key in tsconfig.compilerOptions.paths
 * Takes 'baseUrl' into consideration
 * @param {Object} tsconfig
 */
export const transformTsPathsToJestPaths = (tsconfig) => {
  const { paths = {}, baseUrl = "" } = tsconfig.compilerOptions;
  const resolvedBase = path.join("<rootDir>", baseUrl);
  return Object.keys(paths).reduce(
    (acc, key) =>
      key === "*"
        ? acc
        : {
            ...acc,
            ["^" + key.replace("*", "(.*)") + "$"]: path.join(
              resolvedBase,
              paths[key][0].replace("*", "$1"),
            ),
          },
    {},
  );
};
