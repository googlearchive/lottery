define(['dart_sdk', 'packages/components_codelab/src/stats/stats.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/components_codelab/src/stats/stats', 'packages/angular/src/common/directives/ng_if', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, stats$46css, view_type, constants, view, app_view_utils, app_view, ng_for, stats, ng_if, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__stats__stats$46css$46shim = stats$46css.src__stats__stats$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__stats__stats = stats.src__stats__stats;
  const src__common__directives__ng_if = ng_if.src__common__directives__ng_if;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__stats__stats$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $isEmpty = dartx.isEmpty;
  const $keys = dartx.keys;
  const $_get = dartx._get;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfNode = () => (JSArrayOfNode = dart.constFn(_interceptors.JSArray$(html.Node)))();
  let AppViewOfStatsComponent = () => (AppViewOfStatsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__stats__stats.StatsComponent)))();
  let AppViewAndintToAppViewOfStatsComponent = () => (AppViewAndintToAppViewOfStatsComponent = dart.constFn(dart.fnType(AppViewOfStatsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfStatsComponent = () => (ComponentRefOfStatsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__stats__stats.StatsComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfStatsComponent = () => (ComponentFactoryOfStatsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__stats__stats.StatsComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__stats__stats$46template, {
    /*src__stats__stats$46template.styles$StatsComponent*/get styles$StatsComponent() {
      return dart.constList([src__stats__stats$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _anchor_1 = Symbol('_anchor_1');
  const _el_1_0 = Symbol('_el_1_0');
  const _text_1_1 = Symbol('_text_1_1');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgFor_2_9 = Symbol('_NgFor_2_9');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  src__stats__stats$46template.ViewStatsComponent0 = class ViewStatsComponent0 extends src__core__linker__app_view.AppView$(src__stats__stats.StatsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', parentRenderNode));
      this.addShimC(this[_el_0]);
      this[_anchor_1] = html.Comment._check(src__core__linker__app_view.ngAnchor[$clone](false));
      this[_el_0][$append](this[_anchor_1]);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], src__stats__stats$46template.viewFactory_StatsComponent2);
      this[_NgFor_2_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_2], _TemplateRef_2_8);
      this.init([], null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let currVal_0 = _ctx.winningsMap[$isEmpty] === true;
      if (!(this[_expr_0] === currVal_0)) {
        if (currVal_0) {
          let doc = html.document;
          this[_el_1_0] = doc[$createElement]('li');
          this.addShimE(this[_el_1_0]);
          this[_text_1_1] = html.Text.new('(no stats yet)');
          this[_el_1_0][$append](this[_text_1_1]);
          this.addInlinedNodes(this[_anchor_1], JSArrayOfNode().of([this[_el_1_0]]));
        } else {
          this.removeInlinedNodes(JSArrayOfNode().of([this[_el_1_0]]));
        }
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = _ctx.winningsMap[$keys];
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_NgFor_2_9].ngForOf = currVal_1;
        this[_expr_1] = currVal_1;
      }
      this[_NgFor_2_9].ngDoCheck();
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_2];
      t == null ? null : t.destroyNestedViews();
    }
  };
  (src__stats__stats$46template.ViewStatsComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_anchor_1] = null;
    this[_el_1_0] = null;
    this[_text_1_1] = null;
    this[_appEl_2] = null;
    this[_NgFor_2_9] = null;
    this[_expr_0] = false;
    this[_expr_1] = null;
    src__stats__stats$46template.ViewStatsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('stats-component'));
    let t = src__stats__stats$46template.ViewStatsComponent0._renderType;
    t == null ? src__stats__stats$46template.ViewStatsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__stats__stats$46template.styles$StatsComponent) : t;
    this.setupComponentType(src__stats__stats$46template.ViewStatsComponent0._renderType);
  }).prototype = src__stats__stats$46template.ViewStatsComponent0.prototype;
  dart.addTypeTests(src__stats__stats$46template.ViewStatsComponent0);
  dart.setMethodSignature(src__stats__stats$46template.ViewStatsComponent0, () => ({
    __proto__: dart.getMethods(src__stats__stats$46template.ViewStatsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__stats__stats.StatsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__stats__stats$46template.ViewStatsComponent0, () => ({
    __proto__: dart.getFields(src__stats__stats$46template.ViewStatsComponent0.__proto__),
    [_el_0]: dart.fieldType(html.UListElement),
    [_anchor_1]: dart.fieldType(html.Comment),
    [_el_1_0]: dart.fieldType(html.Element),
    [_text_1_1]: dart.fieldType(html.Text),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_2_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__stats__stats$46template.ViewStatsComponent0, {
    /*src__stats__stats$46template.ViewStatsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__stats__stats$46template.viewFactory_StatsComponent0 = function(parentView, parentIndex) {
    return new src__stats__stats$46template.ViewStatsComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__stats__stats$46template.viewFactory_StatsComponent0, AppViewAndintToAppViewOfStatsComponent());
  const _appEl_1 = Symbol('_appEl_1');
  const _NgIf_1_9 = Symbol('_NgIf_1_9');
  const _NgIf_2_9 = Symbol('_NgIf_2_9');
  src__stats__stats$46template._ViewStatsComponent2 = class _ViewStatsComponent2 extends src__core__linker__app_view.AppView$(src__stats__stats.StatsComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('li');
      this.addShimE(this[_el_0]);
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], src__stats__stats$46template.viewFactory_StatsComponent3);
      this[_NgIf_1_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_1], _TemplateRef_1_8);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], src__stats__stats$46template.viewFactory_StatsComponent4);
      this[_NgIf_2_9] = new src__common__directives__ng_if.NgIf.new(this[_appEl_2], _TemplateRef_2_8);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let local_key = core.int._check(this.locals[$_get]('$implicit'));
      this[_NgIf_1_9].ngIf = local_key === 0;
      this[_NgIf_2_9].ngIf = dart.notNull(local_key) > 0;
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
    }
  };
  (src__stats__stats$46template._ViewStatsComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_appEl_1] = null;
    this[_NgIf_1_9] = null;
    this[_appEl_2] = null;
    this[_NgIf_2_9] = null;
    src__stats__stats$46template._ViewStatsComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__stats__stats$46template.ViewStatsComponent0._renderType;
  }).prototype = src__stats__stats$46template._ViewStatsComponent2.prototype;
  dart.addTypeTests(src__stats__stats$46template._ViewStatsComponent2);
  dart.setMethodSignature(src__stats__stats$46template._ViewStatsComponent2, () => ({
    __proto__: dart.getMethods(src__stats__stats$46template._ViewStatsComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__stats__stats.StatsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__stats__stats$46template._ViewStatsComponent2, () => ({
    __proto__: dart.getFields(src__stats__stats$46template._ViewStatsComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_1_9]: dart.fieldType(src__common__directives__ng_if.NgIf),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgIf_2_9]: dart.fieldType(src__common__directives__ng_if.NgIf)
  }));
  src__stats__stats$46template.viewFactory_StatsComponent2 = function(parentView, parentIndex) {
    return new src__stats__stats$46template._ViewStatsComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__stats__stats$46template.viewFactory_StatsComponent2, AppViewAndintToAppViewOfStatsComponent());
  const _text_2 = Symbol('_text_2');
  const _text_4 = Symbol('_text_4');
  src__stats__stats$46template._ViewStatsComponent3 = class _ViewStatsComponent3 extends src__core__linker__app_view.AppView$(src__stats__stats.StatsComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('Lost —\n      ');
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      let _text_3 = html.Text.new(' time');
      this[_el_0][$append](_text_3);
      this[_text_4] = html.Text.new('');
      this[_el_0][$append](this[_text_4]);
      let _text_5 = html.Text.new('.');
      this[_el_0][$append](_text_5);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_key = core.int._check(this.parentView.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.winningsMap[$_get](local_key));
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(dart.notNull(_ctx.winningsMap[$_get](local_key)) > 1 ? 's' : '');
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_4][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
  };
  (src__stats__stats$46template._ViewStatsComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_text_4] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__stats__stats$46template._ViewStatsComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__stats__stats$46template.ViewStatsComponent0._renderType;
  }).prototype = src__stats__stats$46template._ViewStatsComponent3.prototype;
  dart.addTypeTests(src__stats__stats$46template._ViewStatsComponent3);
  dart.setMethodSignature(src__stats__stats$46template._ViewStatsComponent3, () => ({
    __proto__: dart.getMethods(src__stats__stats$46template._ViewStatsComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__stats__stats.StatsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__stats__stats$46template._ViewStatsComponent3, () => ({
    __proto__: dart.getFields(src__stats__stats$46template._ViewStatsComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__stats__stats$46template.viewFactory_StatsComponent3 = function(parentView, parentIndex) {
    return new src__stats__stats$46template._ViewStatsComponent3.new(parentView, parentIndex);
  };
  dart.fn(src__stats__stats$46template.viewFactory_StatsComponent3, AppViewAndintToAppViewOfStatsComponent());
  const _text_6 = Symbol('_text_6');
  const _expr_2 = Symbol('_expr_2');
  src__stats__stats$46template._ViewStatsComponent4 = class _ViewStatsComponent4 extends src__core__linker__app_view.AppView$(src__stats__stats.StatsComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('span');
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('Won $');
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      let _text_3 = html.Text.new(' —\n      ');
      this[_el_0][$append](_text_3);
      this[_text_4] = html.Text.new('');
      this[_el_0][$append](this[_text_4]);
      let _text_5 = html.Text.new(' time');
      this[_el_0][$append](_text_5);
      this[_text_6] = html.Text.new('');
      this[_el_0][$append](this[_text_6]);
      let _text_7 = html.Text.new('.');
      this[_el_0][$append](_text_7);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_key = core.int._check(this.parentView.locals[$_get]('$implicit'));
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(local_key);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_2][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.winningsMap[$_get](local_key));
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_4][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(dart.notNull(_ctx.winningsMap[$_get](local_key)) > 1 ? 's' : '');
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_6][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
  };
  (src__stats__stats$46template._ViewStatsComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_text_4] = null;
    this[_text_6] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__stats__stats$46template._ViewStatsComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__stats__stats$46template.ViewStatsComponent0._renderType;
  }).prototype = src__stats__stats$46template._ViewStatsComponent4.prototype;
  dart.addTypeTests(src__stats__stats$46template._ViewStatsComponent4);
  dart.setMethodSignature(src__stats__stats$46template._ViewStatsComponent4, () => ({
    __proto__: dart.getMethods(src__stats__stats$46template._ViewStatsComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__stats__stats.StatsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__stats__stats$46template._ViewStatsComponent4, () => ({
    __proto__: dart.getFields(src__stats__stats$46template._ViewStatsComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_text_2]: dart.fieldType(html.Text),
    [_text_4]: dart.fieldType(html.Text),
    [_text_6]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__stats__stats$46template.viewFactory_StatsComponent4 = function(parentView, parentIndex) {
    return new src__stats__stats$46template._ViewStatsComponent4.new(parentView, parentIndex);
  };
  dart.fn(src__stats__stats$46template.viewFactory_StatsComponent4, AppViewAndintToAppViewOfStatsComponent());
  dart.defineLazy(src__stats__stats$46template, {
    /*src__stats__stats$46template.styles$StatsComponentHost*/get styles$StatsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _StatsComponent_0_5 = Symbol('_StatsComponent_0_5');
  src__stats__stats$46template._ViewStatsComponentHost0 = class _ViewStatsComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__stats__stats$46template.ViewStatsComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_StatsComponent_0_5] = new src__stats__stats.StatsComponent.new();
      this[_compView_0].create(this[_StatsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfStatsComponent()).new(0, this, this.rootEl, this[_StatsComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__stats__stats$46template._ViewStatsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_StatsComponent_0_5] = null;
    src__stats__stats$46template._ViewStatsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__stats__stats$46template._ViewStatsComponentHost0.prototype;
  dart.addTypeTests(src__stats__stats$46template._ViewStatsComponentHost0);
  dart.setMethodSignature(src__stats__stats$46template._ViewStatsComponentHost0, () => ({
    __proto__: dart.getMethods(src__stats__stats$46template._ViewStatsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__stats__stats$46template._ViewStatsComponentHost0, () => ({
    __proto__: dart.getFields(src__stats__stats$46template._ViewStatsComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__stats__stats$46template.ViewStatsComponent0),
    [_StatsComponent_0_5]: dart.fieldType(src__stats__stats.StatsComponent)
  }));
  src__stats__stats$46template.viewFactory_StatsComponentHost0 = function(parentView, parentIndex) {
    return new src__stats__stats$46template._ViewStatsComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__stats__stats$46template.viewFactory_StatsComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__stats__stats$46template, {
    /*src__stats__stats$46template.StatsComponentNgFactory*/get StatsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfStatsComponent()).new('stats-component', src__stats__stats$46template.viewFactory_StatsComponentHost0, src__stats__stats$46template._StatsComponentMetadata));
    },
    /*src__stats__stats$46template._StatsComponentMetadata*/get _StatsComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__stats__stats$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__stats__stats$46template.initReflector = function() {
    if (dart.test(src__stats__stats$46template._visited)) {
      return;
    }
    src__stats__stats$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__stats__stats.StatsComponent), src__stats__stats$46template.StatsComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__stats__stats$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/components_codelab/src/stats/stats.template.ddc", {
    "package:components_codelab/src/stats/stats.template.dart": src__stats__stats$46template
  }, '{"version":3,"sourceRoot":"","sources":["stats.template.dart"],"names":[],"mappings":";;;;QA8Mc,IAAO;;;;QArL8B,8BAAO;;;;QActC,iCAAO;;;;;;;;;;;;;;;;;;;;iFAuKb,IAAO;;;;;;;;MArLD,kDAAqB;YAAG,iBAAO,AAAQ,8BAAD,OAAO;;;;;;;;;;;;;AAmB7D,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAc,AAgKR,IAAO,SAhKS;AAC1B,iBAAK,GAAG,AA+JE,IAAO,qBA/JT,2CAAe,CAAC,GAAG,EAAE,MAAM,gBAAgB;AACnD,mBAAQ,CAAC,WAAK;AACd,qBAAS,GAAG,AA6JF,IAAO,gBA7JL,oCAAQ,QAAM,CAAC;AAC3B,iBAAK,SAAO,CAAC,eAAS;AACtB,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,wDAA2B;AACpF,sBAAU,GAAG,IAAI,yCAAa,CAAC,cAAQ,EAAE,gBAAgB;AACzD,eAAI,CAAC,IAAI;AACT,YAAO;IACT;;AAIE,UAA6B,OAAO,QAAG;AACvC,UAAM,YAAa,IAAI,YAAY,UAAQ,KAAI;AAC/C,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,YAAI,SAAS,EAAE;AACb,cAAI,MAAc,AA4IZ,IAAO,SA5Ia;AAC1B,uBAAO,GAAG,GAAG,gBAAc,CAAC;AAC5B,uBAAQ,CAAC,aAAO;AAChB,yBAAS,GAAG,AAAI,AAyIV,IAAO,SAzIe,CAAC;AAC7B,uBAAO,SAAO,CAAC,eAAS;AACxB,8BAAe,CAAC,eAAS,EAAE,oBAAC,aAAO;eAC9B;AACL,iCAAkB,CAAC,oBAAC,aAAO;;AAE7B,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,YAAY,OAAK;AACvC,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,wBAAU,QAAQ,GAAG,SAAS;AAC9B,qBAAO,GAAG,SAAS;;AAErB,sBAAU,UAAU;AACpB,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;IACV;;mEApDoB,UAA2B,EAAE,WAAe;IAT3C,WAAK;IACV,eAAS;IACT,aAAO;IACV,eAAS;IACR,cAAQ;IACR,gBAAU;IACnB,aAAO,GAAG;IACX,aAAO;AAEyD,8EAAM,qCAAgB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACpK,eAAM,GAAG,AAwKC,IAAO,oBAxKR,AAAQ,AAwKP,IAAO,SAxKQ,gBAAc,CAAC;AACxC,wEAAW;gBAAX,4DAAW,GAAK,AAAA,AAAQ,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,kDAAqB;AAC3G,2BAAkB,CAAC,4DAAW;EAChC;;;;;;;;;;4BAqKY,IAAO;gCAAP,IAAO;8BAAP,IAAO;gCAAP,IAAO;;;;;;;MA1KQ,4DAAW;;;;;sEAwDoB,UAA2B,EAAE,WAAe;AACtG,UAAO,KAAI,oDAAmB,CAAC,UAAU,EAAE,WAAW;EACxD;;;;;;;AAaI,UAAI,MAAc,AAmGR,IAAO,SAnGS;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,mBAAQ,CAAC,WAAK;AACd,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,wDAA2B;AACpF,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,UAAI,YAAY,oCAAQ,QAAM,CAAC;AAC/B,iBAAK,SAAO,CAAC,SAAS;AACtB,oBAAQ,GAAG,IAAI,mDAAa,CAAC,GAAG,GAAG,MAAM,SAAS;AAClD,UAAY,mBAAmB,IAAI,+CAAW,CAAC,cAAQ,EAAE,wDAA2B;AACpF,qBAAS,GAAG,IAAI,uCAAI,CAAC,cAAQ,EAAE,gBAAgB;AAC/C,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAAU,4BAAY,WAAM,QAAC;AAC7B,qBAAS,KAAK,GAAI,SAAS,KAAI;AAC/B,qBAAS,KAAK,GAAc,aAAV,SAAS,IAAG;AAC9B,oBAAQ,2BAA2B;AACnC,oBAAQ,2BAA2B;IACrC;;AAIE,4BAAQ;;AACR,6BAAQ;;IACV;;oEAnCqB,UAA2B,EAAE,WAAe;IALjD,WAAK;IACP,cAAQ;IACjB,eAAS;IACA,cAAQ;IACjB,eAAS;AACuD,+EAAM,qCAAgB,SAAS,EAAE,0CAAC,aAAc,QAAO,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACtL,sBAAa,GAAG,gDAAmB,YAAY;EACjD;;;;;;;;;;4BAsGY,IAAO;;;;;;sEAlEuC,UAA2B,EAAE,WAAe;AACtG,UAAO,KAAI,qDAAoB,CAAC,UAAU,EAAE,WAAW;EACzD;;;;;;AAaI,UAAI,MAAc,AAmDR,IAAO,SAnDS;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,mBAAQ,CAAC,WAAK;AACd,UAAa,UAAU,AAAI,AAgDjB,IAAO,SAhDsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,mBAAO,GAAG,AAAI,AA8CJ,IAAO,SA9CS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,UAAa,UAAU,AAAI,AA4CjB,IAAO,SA5CsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,mBAAO,GAAG,AAAI,AA0CJ,IAAO,SA1CS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,UAAa,UAAU,AAAI,AAwCjB,IAAO,SAxCsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAA6B,OAAO,QAAG;AACvC,UAAU,4BAAY,eAAU,OAAO,QAAC;AACxC,UAAM,YAzIU,AAyIE,AAAQ,iCAzIH,aAyIe,CAAC,IAAI,YAAY,QAAC,SAAS;AACjE,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;AAErB,UAAM,YA9IU,AA8IE,AAAQ,iCA9IH,aA8Ie,CAAE,AAA6B,aAA5B,IAAI,YAAY,QAAC,SAAS,KAAI,IAAK,MAAM;AAClF,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;oEApCqB,UAA2B,EAAE,WAAe;IALjD,WAAK;IACR,aAAO;IACP,aAAO;IAChB,aAAO;IACP,aAAO;AAC0D,+EAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACpK,sBAAa,GAAG,gDAAmB,YAAY;EACjD;;;;;;;;;4BAsDY,IAAO;8BAAP,IAAO;8BAAP,IAAO;;;;sEAjBuC,UAA2B,EAAE,WAAe;AACtG,UAAO,KAAI,qDAAoB,CAAC,UAAU,EAAE,WAAW;EACzD;;;;;;AAeI,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,GAAG,gBAAc,CAAC;AAC1B,mBAAQ,CAAC,WAAK;AACd,UAAa,UAHH,AAGa,AAAI,IAHV,SAGsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,mBAAO,GALG,AAKA,AAAI,IALG,SAKS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,UAAa,UAPH,AAOa,AAAI,IAPV,SAOsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,mBAAO,GATG,AASA,AAAI,IATG,SASS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,UAAa,UAXH,AAWa,AAAI,IAXV,SAWsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,mBAAO,GAbG,AAaA,AAAI,IAbG,SAaS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,UAAa,UAfH,AAea,AAAI,IAfV,SAesB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,gBAAK,CAAC,WAAK;AACX,YAAO;IACT;;AAIE,UAA6B,OAAO,QAAG;AACvC,UAAU,4BAAY,eAAU,OAAO,QAAC;AACxC,UAAM,YAhMU,AAgME,AAAQ,iCAhMH,aAgMe,CAAC,SAAS;AAChD,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;AAErB,UAAM,YArMU,AAqME,AAAQ,iCArMH,aAqMe,CAAC,IAAI,YAAY,QAAC,SAAS;AACjE,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;AAErB,UAAM,YA1MU,AA0ME,AAAQ,iCA1MH,aA0Me,CAAE,AAA6B,aAA5B,IAAI,YAAY,QAAC,SAAS,KAAI,IAAK,MAAM;AAClF,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;IAEvB;;oEA7CqB,UAA2B,EAAE,WAAe;IAPjD,WAAK;IACR,aAAO;IACP,aAAO;IACP,aAAO;IAChB,aAAO;IACP,aAAO;IACP,aAAO;AAC0D,+EAAM,qCAAgB,SAAS,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACpK,sBAAa,GAAG,gDAAmB,YAAY;EACjD;;;;;;;;;4BAGY,IAAO;8BAAP,IAAO;8BAAP,IAAO;8BAAP,IAAO;;;;;sEA2CuC,UAA2B,EAAE,WAAe;AACtG,UAAO,KAAI,qDAAoB,CAAC,UAAU,EAAE,WAAW;EACzD;;;MAEoB,sDAAyB;YAAG;;;;;;;AAQ5C,uBAAW,GAAG,IAAI,oDAAmB,CAAC,MAAM;AAC5C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,+BAAmB,GAAG,IAAI,oCAAsB;AAChD,uBAAW,OAAO,CAAC,yBAAmB,EAAE,qBAAgB;AACxD,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,oCAAoC,CAAC,GAAG,MAAM,WAAM,EAAE,yBAAmB;IACtF;;AAIE,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;wEAnByB,UAA2B,EAAE,WAAe;IAFjD,iBAAW;IACR,yBAAmB;AAC+B,mFAAM,qCAAgB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;0EAsBjI,UAA2B,EAAE,WAAe;AAClF,UAAO,KAAI,yDAAwB,CAAC,UAAU,EAAE,WAAW;EAC7D;;;MAE+C,oDAAuB;YAAG,gBAAM,wCAAwC,CAAC,mBAAmB,4DAA+B,EAAE,oDAAuB;;MAC7L,oDAAuB;YAAG;;MAC5B,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAO,oCAAiB,CAAC,+CAAc,EAAE,oDAAuB;AAChE,IAAM,gCAAa;EACrB","file":"stats.template.ddc.js"}');
  // Exports:
  return {
    src__stats__stats$46template: src__stats__stats$46template
  };
});

//# sourceMappingURL=stats.template.ddc.js.map
