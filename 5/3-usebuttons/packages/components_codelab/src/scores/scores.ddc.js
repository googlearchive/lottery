define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__scores__scores = Object.create(_root);
  const $round = dartx.round;
  src__scores__scores.ScoresComponent = class ScoresComponent extends core.Object {
    get altCash() {
      return this[altCash];
    }
    set altCash(value) {
      this[altCash] = value;
    }
    get cash() {
      return this[cash];
    }
    set cash(value) {
      this[cash] = value;
    }
    get outcomeDescription() {
      if (this.cash == this.altCash) return "no difference";
      let multiple = dart.notNull(this.cash) / dart.notNull(this.altCash);
      if (dart.notNull(this.cash) > dart.notNull(this.altCash)) {
        let percentage = ((multiple - 1) * 100)[$round]();
        return dart.str`${percentage}% better`;
      }
      let percentage = ((1 - multiple) * 100)[$round]();
      return dart.str`${percentage}% worse`;
    }
  };
  (src__scores__scores.ScoresComponent.new = function() {
    this[altCash] = null;
    this[cash] = null;
  }).prototype = src__scores__scores.ScoresComponent.prototype;
  dart.addTypeTests(src__scores__scores.ScoresComponent);
  const altCash = Symbol("ScoresComponent.altCash");
  const cash = Symbol("ScoresComponent.cash");
  dart.setGetterSignature(src__scores__scores.ScoresComponent, () => ({
    __proto__: dart.getGetters(src__scores__scores.ScoresComponent.__proto__),
    outcomeDescription: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__scores__scores.ScoresComponent, () => ({
    __proto__: dart.getFields(src__scores__scores.ScoresComponent.__proto__),
    altCash: dart.fieldType(core.int),
    cash: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/components_codelab/src/scores/scores.ddc", {
    "package:components_codelab/src/scores/scores.dart": src__scores__scores
  }, '{"version":3,"sourceRoot":"","sources":["scores.dart"],"names":[],"mappings":";;;;;;;;;IAiBM;;;;;;IAGA;;;;;;;AAGF,UAAI,SAAI,IAAI,YAAO,EAAE,MAAO;AAC5B,UAAO,WAAgB,aAAL,SAAI,iBAAG,YAAO;AAChC,UAAS,aAAL,SAAI,iBAAG,YAAO,GAAE;AAClB,YAAI,aAAa,CAAgB,CAAd,AAAS,QAAD,GAAG,KAAK,YAAU;AAC7C,cAAO,YAAE,UAAU;;AAErB,UAAI,aAAa,CAAgB,CAAd,AAAE,IAAE,QAAQ,IAAI,YAAU;AAC7C,YAAO,YAAE,UAAU;IACrB;;;IAdI,aAAO;IAGP,UAAI;EAYV","file":"scores.ddc.js"}');
  // Exports:
  return {
    src__scores__scores: src__scores__scores
  };
});

//# sourceMappingURL=scores.ddc.js.map
