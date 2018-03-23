define(['dart_sdk', 'packages/angular/src/di/reflector', 'packages/components_codelab/src/settings/settings', 'packages/angular/angular.template', 'packages/components_codelab/src/lottery/lottery.template'], function(dart_sdk, reflector, settings, angular, lottery) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__di__reflector = reflector.src__di__reflector;
  const src__settings__settings = settings.src__settings__settings;
  const angular$46template = angular.angular$46template;
  const src__lottery__lottery$46template = lottery.src__lottery__lottery$46template;
  const _root = Object.create(null);
  const src__settings__settings$46template = Object.create(_root);
  let VoidToSettings = () => (VoidToSettings = dart.constFn(dart.fnType(src__settings__settings.Settings, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__settings__settings$46template, {
    /*src__settings__settings$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__settings__settings$46template.initReflector = function() {
    if (dart.test(src__settings__settings$46template._visited)) {
      return;
    }
    src__settings__settings$46template._visited = true;
    src__di__reflector.registerFactory(dart.wrapType(src__settings__settings.Settings), dart.fn(() => new src__settings__settings.Settings.new(), VoidToSettings()));
    angular$46template.initReflector();
    src__lottery__lottery$46template.initReflector();
  };
  dart.fn(src__settings__settings$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/components_codelab/src/settings/settings.template.ddc", {
    "package:components_codelab/src/settings/settings.template.dart": src__settings__settings$46template
  }, '{"version":3,"sourceRoot":"","sources":["settings.template.dart"],"names":[],"mappings":";;;;;;;;;;;;;;MAaI,2CAAQ;YAAG;;;;;AAEb,kBAAI,2CAAQ,GAAE;AACZ;;AAEF,kDAAW;AAEX,IAAO,kCAAe,CAAC,+CAAQ,EAAE,cAAM,IAAI,oCAAQ;AACnD,IAAM,gCAAa;AACnB,IAAM,8CAAa;EACrB","file":"settings.template.ddc.js"}');
  // Exports:
  return {
    src__settings__settings$46template: src__settings__settings$46template
  };
});

//# sourceMappingURL=settings.template.ddc.js.map
