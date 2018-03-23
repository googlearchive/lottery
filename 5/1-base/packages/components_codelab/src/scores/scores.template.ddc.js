define(['dart_sdk', 'packages/components_codelab/src/scores/scores.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/components_codelab/src/scores/scores', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, scores$46css, view_type, constants, view, app_view_utils, app_view, scores, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__scores__scores$46css$46shim = scores$46css.src__scores__scores$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__scores__scores = scores.src__scores__scores;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__scores__scores$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfScoresComponent = () => (AppViewOfScoresComponent = dart.constFn(src__core__linker__app_view.AppView$(src__scores__scores.ScoresComponent)))();
  let AppViewAndintToAppViewOfScoresComponent = () => (AppViewAndintToAppViewOfScoresComponent = dart.constFn(dart.fnType(AppViewOfScoresComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfScoresComponent = () => (ComponentRefOfScoresComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__scores__scores.ScoresComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfScoresComponent = () => (ComponentFactoryOfScoresComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__scores__scores.ScoresComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__scores__scores$46template, {
    /*src__scores__scores$46template.styles$ScoresComponent*/get styles$ScoresComponent() {
      return dart.constList([src__scores__scores$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _el_3 = Symbol('_el_3');
  const _el_4 = Symbol('_el_4');
  const _text_6 = Symbol('_text_6');
  const _text_7 = Symbol('_text_7');
  const _el_8 = Symbol('_el_8');
  const _el_9 = Symbol('_el_9');
  const _el_11 = Symbol('_el_11');
  const _el_12 = Symbol('_el_12');
  const _text_14 = Symbol('_text_14');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  let const$;
  src__scores__scores$46template.ViewScoresComponent0 = class ViewScoresComponent0 extends src__core__linker__app_view.AppView$(src__scores__scores.ScoresComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'h4', this[_el_0]);
      this.addShimE(this[_el_1]);
      let _text_2 = html.Text.new('Betting');
      this[_el_1][$append](_text_2);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_0]);
      this.addShimE(this[_el_3]);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, 'strong', this[_el_3]);
      this.addShimE(this[_el_4]);
      let _text_5 = html.Text.new('$');
      this[_el_4][$append](_text_5);
      this[_text_6] = html.Text.new('');
      this[_el_4][$append](this[_text_6]);
      this[_text_7] = html.Text.new('');
      this[_el_3][$append](this[_text_7]);
      this[_el_8] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_8]);
      this[_el_9] = src__core__linker__app_view.createAndAppend(doc, 'h4', this[_el_8]);
      this.addShimE(this[_el_9]);
      let _text_10 = html.Text.new('Investing');
      this[_el_9][$append](_text_10);
      this[_el_11] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_8]);
      this.addShimE(this[_el_11]);
      this[_el_12] = src__core__linker__app_view.createAndAppend(doc, 'strong', this[_el_11]);
      this.addShimE(this[_el_12]);
      let _text_13 = html.Text.new('$');
      this[_el_12][$append](_text_13);
      this[_text_14] = html.Text.new('');
      this[_el_12][$append](this[_text_14]);
      let _text_15 = html.Text.new('...');
      this[_el_11][$append](_text_15);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = dart.notNull(_ctx.cash) > dart.notNull(_ctx.altCash) ? 'positive' : dart.notNull(_ctx.cash) < dart.notNull(_ctx.altCash) ? 'negative' : 'neutral';
      if (!(this[_expr_0] === currVal_0)) {
        this.updateChildClass(this[_el_4], currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.cash);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_6][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let l = _ctx.outcomeDescription;
      let currVal_2 = l != null ? l : '';
      if (!(this[_expr_2] === currVal_2)) {
        this[_text_7][$text] = currVal_2;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(_ctx.altCash);
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_text_14][$text] = core.String._check(currVal_3);
        this[_expr_3] = currVal_3;
      }
    }
  };
  (src__scores__scores$46template.ViewScoresComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_el_4] = null;
    this[_text_6] = null;
    this[_text_7] = null;
    this[_el_8] = null;
    this[_el_9] = null;
    this[_el_11] = null;
    this[_el_12] = null;
    this[_text_14] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    src__scores__scores$46template.ViewScoresComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('scores-component'));
    let t = src__scores__scores$46template.ViewScoresComponent0._renderType;
    t == null ? src__scores__scores$46template.ViewScoresComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__scores__scores$46template.styles$ScoresComponent) : t;
    this.setupComponentType(src__scores__scores$46template.ViewScoresComponent0._renderType);
  }).prototype = src__scores__scores$46template.ViewScoresComponent0.prototype;
  dart.addTypeTests(src__scores__scores$46template.ViewScoresComponent0);
  dart.setMethodSignature(src__scores__scores$46template.ViewScoresComponent0, () => ({
    __proto__: dart.getMethods(src__scores__scores$46template.ViewScoresComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__scores__scores.ScoresComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__scores__scores$46template.ViewScoresComponent0, () => ({
    __proto__: dart.getFields(src__scores__scores$46template.ViewScoresComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.Element),
    [_text_6]: dart.fieldType(html.Text),
    [_text_7]: dart.fieldType(html.Text),
    [_el_8]: dart.fieldType(html.DivElement),
    [_el_9]: dart.fieldType(html.Element),
    [_el_11]: dart.fieldType(html.Element),
    [_el_12]: dart.fieldType(html.Element),
    [_text_14]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.String),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic),
    [_expr_3]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__scores__scores$46template.ViewScoresComponent0, {
    /*src__scores__scores$46template.ViewScoresComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__scores__scores$46template.viewFactory_ScoresComponent0 = function(parentView, parentIndex) {
    return new src__scores__scores$46template.ViewScoresComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__scores__scores$46template.viewFactory_ScoresComponent0, AppViewAndintToAppViewOfScoresComponent());
  dart.defineLazy(src__scores__scores$46template, {
    /*src__scores__scores$46template.styles$ScoresComponentHost*/get styles$ScoresComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _ScoresComponent_0_5 = Symbol('_ScoresComponent_0_5');
  src__scores__scores$46template._ViewScoresComponentHost0 = class _ViewScoresComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__scores__scores$46template.ViewScoresComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ScoresComponent_0_5] = new src__scores__scores.ScoresComponent.new();
      this[_compView_0].create(this[_ScoresComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfScoresComponent()).new(0, this, this.rootEl, this[_ScoresComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__scores__scores$46template._ViewScoresComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_ScoresComponent_0_5] = null;
    src__scores__scores$46template._ViewScoresComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__scores__scores$46template._ViewScoresComponentHost0.prototype;
  dart.addTypeTests(src__scores__scores$46template._ViewScoresComponentHost0);
  dart.setMethodSignature(src__scores__scores$46template._ViewScoresComponentHost0, () => ({
    __proto__: dart.getMethods(src__scores__scores$46template._ViewScoresComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__scores__scores$46template._ViewScoresComponentHost0, () => ({
    __proto__: dart.getFields(src__scores__scores$46template._ViewScoresComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__scores__scores$46template.ViewScoresComponent0),
    [_ScoresComponent_0_5]: dart.fieldType(src__scores__scores.ScoresComponent)
  }));
  src__scores__scores$46template.viewFactory_ScoresComponentHost0 = function(parentView, parentIndex) {
    return new src__scores__scores$46template._ViewScoresComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__scores__scores$46template.viewFactory_ScoresComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__scores__scores$46template, {
    /*src__scores__scores$46template.ScoresComponentNgFactory*/get ScoresComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfScoresComponent()).new('scores-component', src__scores__scores$46template.viewFactory_ScoresComponentHost0, src__scores__scores$46template._ScoresComponentMetadata));
    },
    /*src__scores__scores$46template._ScoresComponentMetadata*/get _ScoresComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__scores__scores$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__scores__scores$46template.initReflector = function() {
    if (dart.test(src__scores__scores$46template._visited)) {
      return;
    }
    src__scores__scores$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__scores__scores.ScoresComponent), src__scores__scores$46template.ScoresComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__scores__scores$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/components_codelab/src/scores/scores.template.ddc", {
    "package:components_codelab/src/scores/scores.template.dart": src__scores__scores$46template
  }, '{"version":3,"sourceRoot":"","sources":["scores.template.dart"],"names":[],"mappings":"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","file":"scores.template.ddc.js"}');
  // Exports:
  return {
    src__scores__scores$46template: src__scores__scores$46template
  };
});

//# sourceMappingURL=scores.template.ddc.js.map
