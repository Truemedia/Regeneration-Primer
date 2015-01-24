System.config({
  "paths": {
    "*": "*.js",
    "Regeneration-Primer/*": "../../../../lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "backbone": "npm:backbone@1.1.2",
    "jquery": "github:components/jquery@2.1.3",
    "jsonpatch": "npm:jsonpatch@1.0.1",
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "npm:backbone@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "underscore": "npm:underscore@1.7.0"
    }
  }
});

