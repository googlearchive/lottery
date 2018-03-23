define(['dart_sdk', 'packages/angular/src/core/metadata/lifecycle_hooks'], function(dart_sdk, lifecycle_hooks) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const _root = Object.create(null);
  const src__visualize_winnings__visualize_winnings = Object.create(_root);
  const $context2D = dartx.context2D;
  const $setFillColorHsl = dartx.setFillColorHsl;
  src__visualize_winnings__visualize_winnings.Color = class Color extends core.Object {
    toString() {
      return {
        0: "Color.gray",
        1: "Color.green",
        2: "Color.gold"
      }[this.index];
    }
  };
  (src__visualize_winnings__visualize_winnings.Color.new = function(x) {
    this.index = x;
  }).prototype = src__visualize_winnings__visualize_winnings.Color.prototype;
  dart.addTypeTests(src__visualize_winnings__visualize_winnings.Color);
  dart.setFieldSignature(src__visualize_winnings__visualize_winnings.Color, () => ({
    __proto__: dart.getFields(src__visualize_winnings__visualize_winnings.Color.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__visualize_winnings__visualize_winnings.Color, ['toString']);
  src__visualize_winnings__visualize_winnings.Color.gray = dart.const(new src__visualize_winnings__visualize_winnings.Color.new(0));
  src__visualize_winnings__visualize_winnings.Color.green = dart.const(new src__visualize_winnings__visualize_winnings.Color.new(1));
  src__visualize_winnings__visualize_winnings.Color.gold = dart.const(new src__visualize_winnings__visualize_winnings.Color.new(2));
  src__visualize_winnings__visualize_winnings.Color.values = dart.constList([src__visualize_winnings__visualize_winnings.Color.gray, src__visualize_winnings__visualize_winnings.Color.green, src__visualize_winnings__visualize_winnings.Color.gold], src__visualize_winnings__visualize_winnings.Color);
  const _ctx = Symbol('_ctx');
  const _width = Symbol('_width');
  const _height = Symbol('_height');
  const _x = Symbol('_x');
  const _y = Symbol('_y');
  const _hasData = Symbol('_hasData');
  src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent = class VisualizeWinningsComponent extends core.Object {
    get canvas() {
      return this[canvas];
    }
    set canvas(value) {
      this[canvas] = value;
    }
    get hasData() {
      return this[_hasData];
    }
    increaseCoordinates() {
      let pointSpace = 5 + 1;
      this[_x] = dart.notNull(this[_x]) + pointSpace;
      if (dart.notNull(this[_x]) + pointSpace > dart.notNull(this[_width])) {
        this[_x] = 0;
        this[_y] = dart.notNull(this[_y]) + pointSpace;
        this[_ctx].clearRect(0, this[_y], this[_width], pointSpace * 2);
      }
      if (dart.notNull(this[_y]) + pointSpace > dart.notNull(this[_height])) {
        this[_y] = 0;
        this[_ctx].clearRect(0, this[_y], this[_width], pointSpace * 2);
      }
    }
    ngOnInit() {
      this[_ctx] = this.canvas[$context2D];
      this[_width] = this.canvas.width;
      this[_height] = this.canvas.height;
    }
    renderPoint(color) {
      switch (color) {
        case src__visualize_winnings__visualize_winnings.Color.gray:
        {
          this[_ctx][$setFillColorHsl](0, 0, 74);
          break;
        }
        case src__visualize_winnings__visualize_winnings.Color.green:
        {
          this[_ctx][$setFillColorHsl](66, 70, 54);
          break;
        }
        case src__visualize_winnings__visualize_winnings.Color.gold:
        {
          this[_ctx][$setFillColorHsl](36, 100, 50);
          break;
        }
      }
      this[_ctx].fillRect(this[_x], this[_y], 5, 5);
      this[_ctx].closePath();
      this.increaseCoordinates();
      this[_hasData] = true;
    }
    reset() {
      this[_x] = 0;
      this[_y] = 0;
      this[_hasData] = false;
      let t = this[_ctx];
      t == null ? null : t.clearRect(0, 0, this[_width], this[_height]);
    }
    visualizeBigWin() {
      this.renderPoint(src__visualize_winnings__visualize_winnings.Color.gold);
    }
    visualizeLoss() {
      this.renderPoint(src__visualize_winnings__visualize_winnings.Color.gray);
    }
    visualizeWin() {
      this.renderPoint(src__visualize_winnings__visualize_winnings.Color.green);
    }
  };
  (src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent.new = function() {
    this[canvas] = null;
    this[_ctx] = null;
    this[_width] = null;
    this[_height] = null;
    this[_x] = 0;
    this[_y] = 0;
    this[_hasData] = false;
  }).prototype = src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent.prototype;
  dart.addTypeTests(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent);
  const canvas = Symbol("VisualizeWinningsComponent.canvas");
  src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent, () => ({
    __proto__: dart.getMethods(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent.__proto__),
    increaseCoordinates: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.dynamic, []),
    renderPoint: dart.fnType(dart.void, [src__visualize_winnings__visualize_winnings.Color]),
    reset: dart.fnType(dart.void, []),
    visualizeBigWin: dart.fnType(dart.void, []),
    visualizeLoss: dart.fnType(dart.void, []),
    visualizeWin: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent, () => ({
    __proto__: dart.getGetters(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent.__proto__),
    hasData: dart.fnType(core.bool, [])
  }));
  dart.setFieldSignature(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent, () => ({
    __proto__: dart.getFields(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent.__proto__),
    canvas: dart.fieldType(html.CanvasElement),
    [_ctx]: dart.fieldType(html.CanvasRenderingContext2D),
    [_width]: dart.fieldType(core.int),
    [_height]: dart.fieldType(core.int),
    [_x]: dart.fieldType(core.int),
    [_y]: dart.fieldType(core.int),
    [_hasData]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent, {
    /*src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent._pointSize*/get _pointSize() {
      return 5;
    },
    /*src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent._pointMargin*/get _pointMargin() {
      return 1;
    }
  });
  dart.trackLibraries("packages/components_codelab/src/visualize_winnings/visualize_winnings.ddc", {
    "package:components_codelab/src/visualize_winnings/visualize_winnings.dart": src__visualize_winnings__visualize_winnings
  }, '{"version":3,"sourceRoot":"","sources":["visualize_winnings.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAsBgB;;;;;;;YAcM,eAAQ;;;AAG1B,UAAM,aAAa,AAAW,CAAD,GAAG,CAAY;AAE5C,cAAE,GAzCN,aAyCI,QAAE,IAAI,UAAU;AAChB,UAAO,AAAa,aAAhB,QAAE,IAAG,UAAU,gBAAG,YAAM,GAAE;AAC5B,gBAAE,GAAG;AACL,gBAAE,GA5CR,aA4CM,QAAE,IAAI,UAAU;AAChB,kBAAI,UAAU,CAAC,GAAG,QAAE,EAAE,YAAM,EAAE,AAAW,UAAD,GAAG;;AAE7C,UAAO,AAAa,aAAhB,QAAE,IAAG,UAAU,gBAAG,aAAO,GAAE;AAC7B,gBAAE,GAAG;AACL,kBAAI,UAAU,CAAC,GAAG,QAAE,EAAE,YAAM,EAAE,AAAW,UAAD,GAAG;;IAE/C;;AAIE,gBAAI,GAAG,WAAM,YAAU;AACvB,kBAAM,GAAG,WAAM,MAAM;AACrB,mBAAO,GAAG,WAAM,OAAO;IACzB;gBAEiB,KAAW;AAC1B,cAAQ,KAAK;YACN,kDAAK,KAAK;;AACb,oBAAI,kBAAgB,CAAC,GAAG,GAAG;AAC3B;;YACG,kDAAK,MAAM;;AACd,oBAAI,kBAAgB,CAAC,IAAI,IAAI;AAC7B;;YACG,kDAAK,KAAK;;AACb,oBAAI,kBAAgB,CAAC,IAAI,KAAK;AAC9B;;;AAEJ,gBAAI,SAAS,CAAC,QAAE,EAAE,QAAE,EAAE,CAAU,EAAE,CAAU;AAC5C,gBAAI,UAAU;AACd,8BAAmB;AACnB,oBAAQ,GAAG;IACb;;AAGE,cAAE,GAAG;AACL,cAAE,GAAG;AACL,oBAAQ,GAAG;AACX,wBAAI;qCAAY,GAAG,GAAG,YAAM,EAAE,aAAO;IACvC;;AAGE,sBAAW,CAAC,iDAAK,KAAK;IACxB;;AAGE,sBAAW,CAAC,iDAAK,KAAK;IACxB;;AAGE,sBAAW,CAAC,iDAAK,MAAM;IACzB;;;IAzEc,YAAM;IAEK,UAAI;IAEzB,YAAM;IAEN,aAAO;IAEP,QAAE,GAAG;IAEL,QAAE,GAAG;IAEJ,cAAQ,GAAG;EA8DlB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA/EmB,iFAAU;YAAG;;MAEb,mFAAY;YAAG","file":"visualize_winnings.ddc.js"}');
  // Exports:
  return {
    src__visualize_winnings__visualize_winnings: src__visualize_winnings__visualize_winnings
  };
});

//# sourceMappingURL=visualize_winnings.ddc.js.map
