define(['dart_sdk', 'packages/components_codelab/src/visualize_winnings/visualize_winnings.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/components_codelab/src/visualize_winnings/visualize_winnings', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, visualize_winnings$46css, view_type, constants, view, app_view_utils, app_view, visualize_winnings, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__visualize_winnings__visualize_winnings$46css$46shim = visualize_winnings$46css.src__visualize_winnings__visualize_winnings$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__visualize_winnings__visualize_winnings = visualize_winnings.src__visualize_winnings__visualize_winnings;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__visualize_winnings__visualize_winnings$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $toString = dartx.toString;
  const $setProperty = dartx.setProperty;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfVisualizeWinningsComponent = () => (AppViewOfVisualizeWinningsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent)))();
  let AppViewAndintToAppViewOfVisualizeWinningsComponent = () => (AppViewAndintToAppViewOfVisualizeWinningsComponent = dart.constFn(dart.fnType(AppViewOfVisualizeWinningsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfVisualizeWinningsComponent = () => (ComponentRefOfVisualizeWinningsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfVisualizeWinningsComponent = () => (ComponentFactoryOfVisualizeWinningsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__visualize_winnings__visualize_winnings$46template, {
    /*src__visualize_winnings__visualize_winnings$46template.styles$VisualizeWinningsComponent*/get styles$VisualizeWinningsComponent() {
      return dart.constList([src__visualize_winnings__visualize_winnings$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_canvas_1_0_isDirty = Symbol('_query_canvas_1_0_isDirty');
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0 = class ViewVisualizeWinningsComponent0 extends src__core__linker__app_view.AppView$(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_0]);
      this[_el_1] = html.CanvasElement._check(src__core__linker__app_view.createAndAppend(doc, 'canvas', this[_el_0]));
      this.createAttr(this[_el_1], 'height', '100');
      this.createAttr(this[_el_1], 'width', '300');
      this.addShimC(this[_el_1]);
      this.ctx.canvas = this[_el_1];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = dart.test(_ctx.hasData) ? 'block' : 'none';
      if (!(this[_expr_0] === currVal_0)) {
        this[_el_1].style[$setProperty]('display', currVal_0[$toString]());
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0.new = function(parentView, parentIndex) {
    this[_query_canvas_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_el_1] = null;
    this[_expr_0] = null;
    src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('visualize-winnings'));
    let t = src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0._renderType;
    t == null ? src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__visualize_winnings__visualize_winnings$46template.styles$VisualizeWinningsComponent) : t;
    this.setupComponentType(src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0._renderType);
  }).prototype = src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0.prototype;
  dart.addTypeTests(src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0);
  dart.setMethodSignature(src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0, () => ({
    __proto__: dart.getMethods(src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0, () => ({
    __proto__: dart.getFields(src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0.__proto__),
    [_query_canvas_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.CanvasElement),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0, {
    /*src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__visualize_winnings__visualize_winnings$46template.viewFactory_VisualizeWinningsComponent0 = function(parentView, parentIndex) {
    return new src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__visualize_winnings__visualize_winnings$46template.viewFactory_VisualizeWinningsComponent0, AppViewAndintToAppViewOfVisualizeWinningsComponent());
  dart.defineLazy(src__visualize_winnings__visualize_winnings$46template, {
    /*src__visualize_winnings__visualize_winnings$46template.styles$VisualizeWinningsComponentHost*/get styles$VisualizeWinningsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _VisualizeWinningsComponent_0_5 = Symbol('_VisualizeWinningsComponent_0_5');
  src__visualize_winnings__visualize_winnings$46template._ViewVisualizeWinningsComponentHost0 = class _ViewVisualizeWinningsComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_VisualizeWinningsComponent_0_5] = new src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent.new();
      this[_compView_0].create(this[_VisualizeWinningsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfVisualizeWinningsComponent()).new(0, this, this.rootEl, this[_VisualizeWinningsComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_VisualizeWinningsComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__visualize_winnings__visualize_winnings$46template._ViewVisualizeWinningsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_VisualizeWinningsComponent_0_5] = null;
    src__visualize_winnings__visualize_winnings$46template._ViewVisualizeWinningsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__visualize_winnings__visualize_winnings$46template._ViewVisualizeWinningsComponentHost0.prototype;
  dart.addTypeTests(src__visualize_winnings__visualize_winnings$46template._ViewVisualizeWinningsComponentHost0);
  dart.setMethodSignature(src__visualize_winnings__visualize_winnings$46template._ViewVisualizeWinningsComponentHost0, () => ({
    __proto__: dart.getMethods(src__visualize_winnings__visualize_winnings$46template._ViewVisualizeWinningsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__visualize_winnings__visualize_winnings$46template._ViewVisualizeWinningsComponentHost0, () => ({
    __proto__: dart.getFields(src__visualize_winnings__visualize_winnings$46template._ViewVisualizeWinningsComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0),
    [_VisualizeWinningsComponent_0_5]: dart.fieldType(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent)
  }));
  src__visualize_winnings__visualize_winnings$46template.viewFactory_VisualizeWinningsComponentHost0 = function(parentView, parentIndex) {
    return new src__visualize_winnings__visualize_winnings$46template._ViewVisualizeWinningsComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__visualize_winnings__visualize_winnings$46template.viewFactory_VisualizeWinningsComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__visualize_winnings__visualize_winnings$46template, {
    /*src__visualize_winnings__visualize_winnings$46template.VisualizeWinningsComponentNgFactory*/get VisualizeWinningsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfVisualizeWinningsComponent()).new('visualize-winnings', src__visualize_winnings__visualize_winnings$46template.viewFactory_VisualizeWinningsComponentHost0, src__visualize_winnings__visualize_winnings$46template._VisualizeWinningsComponentMetadata));
    },
    /*src__visualize_winnings__visualize_winnings$46template._VisualizeWinningsComponentMetadata*/get _VisualizeWinningsComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__visualize_winnings__visualize_winnings$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__visualize_winnings__visualize_winnings$46template.initReflector = function() {
    if (dart.test(src__visualize_winnings__visualize_winnings$46template._visited)) {
      return;
    }
    src__visualize_winnings__visualize_winnings$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent), src__visualize_winnings__visualize_winnings$46template.VisualizeWinningsComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__visualize_winnings__visualize_winnings$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/components_codelab/src/visualize_winnings/visualize_winnings.template.ddc", {
    "package:components_codelab/src/visualize_winnings/visualize_winnings.template.dart": src__visualize_winnings__visualize_winnings$46template
  }, '{"version":3,"sourceRoot":"","sources":["visualize_winnings.template.dart"],"names":[],"mappings":";;;;QAsCc,IAAO;;;QAjB0C,wDAAO;;;;QAUlD,iCAAO;;;;;;;;;;;;;;;;;;;MAVP,wFAAiC;YAAG,iBAAO,AAAQ,wDAAD,OAAO;;;;;;;;;;AAezE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AAChD,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAHK,AAGF,IAHS,sBAGT,2CAAe,CAAC,GAAG,EAAE,UAAU,WAAK;AAC5C,qBAAU,CAAC,WAAK,EAAE,UAAU;AAC5B,qBAAU,CAAC,WAAK,EAAE,SAAS;AAC3B,mBAAQ,CAAC,WAAK;AACd,cAAG,OAAO,GAAG,WAAK;AAClB,eAAI,CAAC,uDAAU;AACf,YAAO;IACT;;AAIE,UAAyC,OAAO,QAAG;AACnD,UAAM,sBAAa,IAAI,QAAQ,IAAG,UAAU;AAC5C,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,mBAAK,MAAM,cAAY,CAAC,WAAW,SAAS,WAAU;AACtD,qBAAO,GAAG,SAAS;;IAEvB;;yGA7BgC,UAA2B,EAAE,WAAe;IALvE,+BAAyB,GAAG;IACd,WAAK;IACF,WAAK;IACvB,aAAO;AAEqE,oHAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AAChL,eAAM,GAAG,AAQC,IAAO,oBARR,AAAQ,AAQP,IAAO,SARQ,gBAAc,CAAC;AACxC,8GAAW;gBAAX,kGAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,wFAAiC;AACvH,2BAAkB,CAAC,kGAAW;EAChC;;;;;;;;;;4BAKY,IAAO;4BAAP,IAAO;;;;MAVQ,kGAAW;;;;;4GAiC4C,UAA2B,EAAE,WAAe;AAC9H,UAAO,KAAI,0FAA+B,CAAC,UAAU,EAAE,WAAW;EACpE;;;MAEoB,4FAAqC;YAAG;;;;;;;AAQxD,uBAAW,GAAG,IAAI,0FAA+B,CAAC,MAAM;AACxD,iBAAM,GAAG,iBAAW,OAAO;AAC3B,2CAA+B,GAAG,IAAI,0EAAkC;AACxE,uBAAW,OAAO,CAAC,qCAA+B,EAAE,qBAAgB;AACpE,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,gDAAgD,CAAC,GAAG,MAAM,WAAM,EAAE,qCAA+B;IAC9G;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,UAAI,UAAU,EAAE;AACd,6CAA+B,SAAS;;AAE1C,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;8GAvBqC,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,qCAA+B;AACmB,yHAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;gHA0BjI,UAA2B,EAAE,WAAe;AAC9F,UAAO,KAAI,+FAAoC,CAAC,UAAU,EAAE,WAAW;EACzE;;;MAE2D,0FAAmC;YAAG,gBAAM,oDAAoD,CAAC,sBAAsB,kGAA2C,EAAE,0FAAmC;;MAC5P,0FAAmC;YAAG;;MACxC,+DAAQ;YAAG;;;;;AAEb,kBAAI,+DAAQ,GAAE;AACZ;;AAEF,sEAAW;AAEX,IAAO,oCAAiB,CAAC,qFAA0B,EAAE,0FAAmC;AACxF,IAAM,gCAAa;EACrB","file":"visualize_winnings.template.ddc.js"}');
  // Exports:
  return {
    src__visualize_winnings__visualize_winnings$46template: src__visualize_winnings__visualize_winnings$46template
  };
});

//# sourceMappingURL=visualize_winnings.template.ddc.js.map
