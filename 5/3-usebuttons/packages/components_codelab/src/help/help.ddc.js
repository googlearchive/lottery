define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__help__help = Object.create(_root);
  src__help__help.HelpComponent = class HelpComponent extends core.Object {
    get content() {
      return this[content];
    }
    set content(value) {
      this[content] = value;
    }
  };
  (src__help__help.HelpComponent.new = function() {
    this[content] = null;
  }).prototype = src__help__help.HelpComponent.prototype;
  dart.addTypeTests(src__help__help.HelpComponent);
  const content = Symbol("HelpComponent.content");
  dart.setFieldSignature(src__help__help.HelpComponent, () => ({
    __proto__: dart.getFields(src__help__help.HelpComponent.__proto__),
    content: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/components_codelab/src/help/help.ddc", {
    "package:components_codelab/src/help/help.dart": src__help__help
  }, '{"version":3,"sourceRoot":"","sources":["help.dart"],"names":[],"mappings":";;;;;;;;IAoBS;;;;;;;;iBAAO;EAChB","file":"help.ddc.js"}');
  // Exports:
  return {
    src__help__help: src__help__help
  };
});

//# sourceMappingURL=help.ddc.js.map
