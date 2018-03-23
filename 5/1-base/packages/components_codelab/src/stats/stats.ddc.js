define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__stats__stats = Object.create(_root);
  let MapOfint$int = () => (MapOfint$int = dart.constFn(core.Map$(core.int, core.int)))();
  src__stats__stats.StatsComponent = class StatsComponent extends core.Object {
    get winningsMap() {
      return this[winningsMap];
    }
    set winningsMap(value) {
      this[winningsMap] = value;
    }
  };
  (src__stats__stats.StatsComponent.new = function() {
    this[winningsMap] = null;
  }).prototype = src__stats__stats.StatsComponent.prototype;
  dart.addTypeTests(src__stats__stats.StatsComponent);
  const winningsMap = Symbol("StatsComponent.winningsMap");
  dart.setFieldSignature(src__stats__stats.StatsComponent, () => ({
    __proto__: dart.getFields(src__stats__stats.StatsComponent.__proto__),
    winningsMap: dart.fieldType(MapOfint$int())
  }));
  dart.trackLibraries("packages/components_codelab/src/stats/stats.ddc", {
    "package:components_codelab/src/stats/stats.dart": src__stats__stats
  }, '{"version":3,"sourceRoot":"","sources":["stats.dart"],"names":[],"mappings":";;;;;;;;;IAcgB;;;;;;;;qBAAW;EAC3B","file":"stats.ddc.js"}');
  // Exports:
  return {
    src__stats__stats: src__stats__stats
  };
});

//# sourceMappingURL=stats.ddc.js.map
