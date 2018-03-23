define(['dart_sdk', 'packages/components_codelab/src/scores/scores.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/scorecard/scorecard.template', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/scorecard/scorecard', 'packages/components_codelab/src/scores/scores', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/src/laminate/overlay/render/overlay_style_config', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/src/laminate/overlay/render/overlay_dom_render_service', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/quiver/time', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/angular_components.template'], function(dart_sdk, scores$46css, view_type, constants, view, app_view_utils, scorecard, dom_service, scorecard$, scores, app_view, alignment, module, angular_2, disposer, ng_zone, imperative_view, dom_ruler, angular_2$, module$, opaque_token, overlay_style_config, zindexer, overlay_dom_render_service, overlay_service, dom_popup_source, time, managed_zone, reflector, angular, angular_components) {
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
  const scorecard__scorecard$46template = scorecard.scorecard__scorecard$46template;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const scorecard__scorecard = scorecard$.scorecard__scorecard;
  const src__scores__scores = scores.src__scores__scores;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__component_loader = app_view.src__core__linker__component_loader;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__angular__imperative_view__imperative_view = imperative_view.utils__angular__imperative_view__imperative_view;
  const laminate__ruler__dom_ruler = dom_ruler.laminate__ruler__dom_ruler;
  const utils__angular__managed_zone__angular_2 = angular_2$.utils__angular__managed_zone__angular_2;
  const laminate__overlay__module = module$.laminate__overlay__module;
  const src__core__di__opaque_token = opaque_token.src__core__di__opaque_token;
  const src__laminate__overlay__render__overlay_style_config = overlay_style_config.src__laminate__overlay__render__overlay_style_config;
  const laminate__overlay__zindexer = zindexer.laminate__overlay__zindexer;
  const src__laminate__overlay__render__overlay_dom_render_service = overlay_dom_render_service.src__laminate__overlay__render__overlay_dom_render_service;
  const src__laminate__overlay__overlay_service = overlay_service.src__laminate__overlay__overlay_service;
  const src__laminate__popup__dom_popup_source = dom_popup_source.src__laminate__popup__dom_popup_source;
  const time$ = time.time;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const angular_components$46template = angular_components.angular_components$46template;
  const _root = Object.create(null);
  const src__scores__scores$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfScoresComponent = () => (AppViewOfScoresComponent = dart.constFn(src__core__linker__app_view.AppView$(src__scores__scores.ScoresComponent)))();
  let AppViewAndintToAppViewOfScoresComponent = () => (AppViewAndintToAppViewOfScoresComponent = dart.constFn(dart.fnType(AppViewOfScoresComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfScoresComponent = () => (ComponentRefOfScoresComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__scores__scores.ScoresComponent)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfScoresComponent = () => (ComponentFactoryOfScoresComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__scores__scores.ScoresComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__scores__scores$46template, {
    /*src__scores__scores$46template.styles$ScoresComponent*/get styles$ScoresComponent() {
      return dart.constList([src__scores__scores$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _compView_0 = Symbol('_compView_0');
  const _ScorecardComponent_0_5 = Symbol('_ScorecardComponent_0_5');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _ScorecardComponent_1_5 = Symbol('_ScorecardComponent_1_5');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_5 = Symbol('_expr_5');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  src__scores__scores$46template.ViewScoresComponent0 = class ViewScoresComponent0 extends src__core__linker__app_view.AppView$(src__scores__scores.ScoresComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0] = new scorecard__scorecard$46template.ViewScorecardComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      parentRenderNode[$append](this[_el_0]);
      this[_el_0].className = 'betting themeable';
      this.createAttr(this[_el_0], 'label', 'Betting');
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_ScorecardComponent_0_5] = new scorecard__scorecard.ScorecardComponent.new(this[_compView_0].ref, html.HtmlElement._check(this[_el_0]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_0].create(this[_ScorecardComponent_0_5], [const$ || (const$ = dart.constList([], dart.dynamic)), const$0 || (const$0 = dart.constList([], dart.dynamic)), const$1 || (const$1 = dart.constList([], dart.dynamic)), const$2 || (const$2 = dart.constList([], dart.dynamic))]);
      this[_compView_1] = new scorecard__scorecard$46template.ViewScorecardComponent0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      parentRenderNode[$append](this[_el_1]);
      this[_el_1].className = 'investing themeable';
      this.createAttr(this[_el_1], 'description', '...');
      this.createAttr(this[_el_1], 'label', 'Investing');
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_ScorecardComponent_1_5] = new scorecard__scorecard.ScorecardComponent.new(this[_compView_1].ref, html.HtmlElement._check(this[_el_1]), utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_compView_1].create(this[_ScorecardComponent_1_5], [const$3 || (const$3 = dart.constList([], dart.dynamic)), const$4 || (const$4 = dart.constList([], dart.dynamic)), const$5 || (const$5 = dart.constList([], dart.dynamic)), const$6 || (const$6 = dart.constList([], dart.dynamic))]);
      this.init(const$7 || (const$7 = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_ScorecardComponent_0_5].label = 'Betting';
        changed = true;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate1('$', _ctx.cash, '');
      if (!(this[_expr_1] == currVal_1)) {
        this[_ScorecardComponent_0_5].value = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      let l = _ctx.outcomeDescription;
      let currVal_2 = l != null ? l : '';
      if (!(this[_expr_2] === currVal_2)) {
        this[_ScorecardComponent_0_5].description = currVal_2;
        changed = true;
        this[_expr_2] = currVal_2;
      }
      let currVal_3 = src__core__linker__app_view_utils.interpolate0(dart.notNull(_ctx.cash) > dart.notNull(_ctx.altCash) ? 'positive' : dart.notNull(_ctx.cash) < dart.notNull(_ctx.altCash) ? 'negative' : 'neutral');
      if (!core.identical(this[_expr_3], currVal_3)) {
        this[_ScorecardComponent_0_5].changeType = core.String._check(currVal_3);
        changed = true;
        this[_expr_3] = core.String._check(currVal_3);
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_ScorecardComponent_1_5].label = 'Investing';
        changed = true;
        this[_ScorecardComponent_1_5].description = '...';
        changed = true;
      }
      let currVal_5 = src__core__linker__app_view_utils.interpolate1('$', _ctx.altCash, '');
      if (!(this[_expr_5] == currVal_5)) {
        this[_ScorecardComponent_1_5].value = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      this[_compView_1].detectHostChanges(firstCheck);
      this[_compView_0].detectChanges();
      this[_compView_1].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      let t$ = this[_compView_1];
      t$ == null ? null : t$.destroy();
    }
  };
  (src__scores__scores$46template.ViewScoresComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_ScorecardComponent_0_5] = null;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_ScorecardComponent_1_5] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_5] = null;
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
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__scores__scores$46template.ViewScoresComponent0, () => ({
    __proto__: dart.getFields(src__scores__scores$46template.ViewScoresComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(scorecard__scorecard$46template.ViewScorecardComponent0),
    [_ScorecardComponent_0_5]: dart.fieldType(scorecard__scorecard.ScorecardComponent),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(scorecard__scorecard$46template.ViewScorecardComponent0),
    [_ScorecardComponent_1_5]: dart.fieldType(scorecard__scorecard.ScorecardComponent),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_2]: dart.fieldType(core.String),
    [_expr_3]: dart.fieldType(core.String),
    [_expr_5]: dart.fieldType(core.String)
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
  const _ScoresComponent_0_5 = Symbol('_ScoresComponent_0_5');
  const __defaultPopupPositions_0_6 = Symbol('__defaultPopupPositions_0_6');
  const __Window_0_7 = Symbol('__Window_0_7');
  const __DomService_0_8 = Symbol('__DomService_0_8');
  const __AcxImperativeViewUtils_0_9 = Symbol('__AcxImperativeViewUtils_0_9');
  const __Document_0_10 = Symbol('__Document_0_10');
  const __DomRuler_0_11 = Symbol('__DomRuler_0_11');
  const __ManagedZone_0_12 = Symbol('__ManagedZone_0_12');
  const __overlayContainerName_0_13 = Symbol('__overlayContainerName_0_13');
  const __overlayContainerParent_0_14 = Symbol('__overlayContainerParent_0_14');
  const __overlayContainer_0_15 = Symbol('__overlayContainer_0_15');
  const __overlaySyncDom_0_16 = Symbol('__overlaySyncDom_0_16');
  const __overlayRepositionLoop_0_17 = Symbol('__overlayRepositionLoop_0_17');
  const __OverlayStyleConfig_0_18 = Symbol('__OverlayStyleConfig_0_18');
  const __ZIndexer_0_19 = Symbol('__ZIndexer_0_19');
  const __OverlayDomRenderService_0_20 = Symbol('__OverlayDomRenderService_0_20');
  const __OverlayService_0_21 = Symbol('__OverlayService_0_21');
  const __DomPopupSourceFactory_0_22 = Symbol('__DomPopupSourceFactory_0_22');
  const __Clock_0_23 = Symbol('__Clock_0_23');
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  const _defaultPopupPositions_0_6 = Symbol('_defaultPopupPositions_0_6');
  const _Window_0_7 = Symbol('_Window_0_7');
  const _DomService_0_8 = Symbol('_DomService_0_8');
  const _AcxImperativeViewUtils_0_9 = Symbol('_AcxImperativeViewUtils_0_9');
  const _Document_0_10 = Symbol('_Document_0_10');
  const _DomRuler_0_11 = Symbol('_DomRuler_0_11');
  const _ManagedZone_0_12 = Symbol('_ManagedZone_0_12');
  let const$22;
  const _overlayContainerName_0_13 = Symbol('_overlayContainerName_0_13');
  let const$23;
  const _overlayContainerParent_0_14 = Symbol('_overlayContainerParent_0_14');
  let const$24;
  const _overlayContainer_0_15 = Symbol('_overlayContainer_0_15');
  const _overlaySyncDom_0_16 = Symbol('_overlaySyncDom_0_16');
  const _overlayRepositionLoop_0_17 = Symbol('_overlayRepositionLoop_0_17');
  const _OverlayStyleConfig_0_18 = Symbol('_OverlayStyleConfig_0_18');
  const _ZIndexer_0_19 = Symbol('_ZIndexer_0_19');
  const _OverlayDomRenderService_0_20 = Symbol('_OverlayDomRenderService_0_20');
  const _OverlayService_0_21 = Symbol('_OverlayService_0_21');
  const _DomPopupSourceFactory_0_22 = Symbol('_DomPopupSourceFactory_0_22');
  let const$25;
  const _Clock_0_23 = Symbol('_Clock_0_23');
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  src__scores__scores$46template._ViewScoresComponentHost0 = class _ViewScoresComponentHost0 extends src__core__linker__app_view.AppView {
    get [_defaultPopupPositions_0_6]() {
      if (this[__defaultPopupPositions_0_6] == null) {
        this[__defaultPopupPositions_0_6] = const$21 || (const$21 = dart.constList([const$8 || (const$8 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top center'}))), const$10 || (const$10 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top right', originX: const$9 || (const$9 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$12 || (const$12 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top left', originX: const$11 || (const$11 = dart.const(new laminate__enums__alignment.Alignment.new('Start', 'flex-start')))}))), const$14 || (const$14 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom center', originY: const$13 || (const$13 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$17 || (const$17 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom right', originX: const$15 || (const$15 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end'))), originY: const$16 || (const$16 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$20 || (const$20 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom left', originX: const$18 || (const$18 = dart.const(new laminate__enums__alignment.Alignment.new('Start', 'flex-start'))), originY: const$19 || (const$19 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))})))], laminate__enums__alignment.RelativePosition));
      }
      return this[__defaultPopupPositions_0_6];
    }
    get [_Window_0_7]() {
      if (this[__Window_0_7] == null) {
        this[__Window_0_7] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_7];
    }
    get [_DomService_0_8]() {
      if (this[__DomService_0_8] == null) {
        this[__DomService_0_8] = utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_7]));
      }
      return this[__DomService_0_8];
    }
    get [_AcxImperativeViewUtils_0_9]() {
      if (this[__AcxImperativeViewUtils_0_9] == null) {
        this[__AcxImperativeViewUtils_0_9] = new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__AcxImperativeViewUtils_0_9];
    }
    get [_Document_0_10]() {
      if (this[__Document_0_10] == null) {
        this[__Document_0_10] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_10];
    }
    get [_DomRuler_0_11]() {
      if (this[__DomRuler_0_11] == null) {
        this[__DomRuler_0_11] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_10]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]));
      }
      return this[__DomRuler_0_11];
    }
    get [_ManagedZone_0_12]() {
      if (this[__ManagedZone_0_12] == null) {
        this[__ManagedZone_0_12] = new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_12];
    }
    get [_overlayContainerName_0_13]() {
      if (this[__overlayContainerName_0_13] == null) {
        this[__overlayContainerName_0_13] = laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$22 || (const$22 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_13];
    }
    get [_overlayContainerParent_0_14]() {
      if (this[__overlayContainerParent_0_14] == null) {
        this[__overlayContainerParent_0_14] = laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_10]), this.injectorGet(const$23 || (const$23 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerParent'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_14];
    }
    get [_overlayContainer_0_15]() {
      if (this[__overlayContainer_0_15] == null) {
        this[__overlayContainer_0_15] = laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_13]), html.HtmlElement._check(this[_overlayContainerParent_0_14]), this.injectorGet(const$24 || (const$24 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_15];
    }
    get [_overlaySyncDom_0_16]() {
      if (this[__overlaySyncDom_0_16] == null) {
        this[__overlaySyncDom_0_16] = true;
      }
      return this[__overlaySyncDom_0_16];
    }
    get [_overlayRepositionLoop_0_17]() {
      if (this[__overlayRepositionLoop_0_17] == null) {
        this[__overlayRepositionLoop_0_17] = true;
      }
      return this[__overlayRepositionLoop_0_17];
    }
    get [_OverlayStyleConfig_0_18]() {
      if (this[__OverlayStyleConfig_0_18] == null) {
        this[__OverlayStyleConfig_0_18] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_10]));
      }
      return this[__OverlayStyleConfig_0_18];
    }
    get [_ZIndexer_0_19]() {
      if (this[__ZIndexer_0_19] == null) {
        this[__ZIndexer_0_19] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_19];
    }
    get [_OverlayDomRenderService_0_20]() {
      if (this[__OverlayDomRenderService_0_20] == null) {
        this[__OverlayDomRenderService_0_20] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_18], html.HtmlElement._check(this[_overlayContainer_0_15]), core.String._check(this[_overlayContainerName_0_13]), this[_DomRuler_0_11], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_8]), this[_AcxImperativeViewUtils_0_9], this[_overlaySyncDom_0_16], this[_overlayRepositionLoop_0_17], this[_ZIndexer_0_19]);
      }
      return this[__OverlayDomRenderService_0_20];
    }
    get [_OverlayService_0_21]() {
      if (this[__OverlayService_0_21] == null) {
        this[__OverlayService_0_21] = new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_16], this[_OverlayDomRenderService_0_20], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_21];
    }
    get [_DomPopupSourceFactory_0_22]() {
      if (this[__DomPopupSourceFactory_0_22] == null) {
        this[__DomPopupSourceFactory_0_22] = new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(this[_DomRuler_0_11]);
      }
      return this[__DomPopupSourceFactory_0_22];
    }
    get [_Clock_0_23]() {
      if (this[__Clock_0_23] == null) {
        this[__Clock_0_23] = const$25 || (const$25 = dart.const(new time$.Clock.new()));
      }
      return this[__Clock_0_23];
    }
    build() {
      this[_compView_0] = new src__scores__scores$46template.ViewScoresComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_ScoresComponent_0_5] = new src__scores__scores.ScoresComponent.new();
      this[_compView_0].create(this[_ScoresComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfScoresComponent()).new(0, this, this.rootEl, this[_ScoresComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === (const$26 || (const$26 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions')))) && 0 === nodeIndex) {
        return this[_defaultPopupPositions_0_6];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_7];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_8];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_9];
      }
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_10];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_11];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_12];
      }
      if (token === (const$27 || (const$27 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName')))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_13];
      }
      if (token === (const$28 || (const$28 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerParent')))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_14];
      }
      if (token === (const$29 || (const$29 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer')))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_15];
      }
      if (token === (const$30 || (const$30 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlaySyncDom')))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_16];
      }
      if (token === (const$31 || (const$31 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop')))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_17];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_18];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_19];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_20];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_21];
      }
      if (token === dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory) && 0 === nodeIndex) {
        return this[_DomPopupSourceFactory_0_22];
      }
      if ((token === dart.wrapType(time$.Clock) || token === (const$32 || (const$32 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))))) && 0 === nodeIndex) {
        return this[_Clock_0_23];
      }
      return notFoundResult;
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
    this[__defaultPopupPositions_0_6] = null;
    this[__Window_0_7] = null;
    this[__DomService_0_8] = null;
    this[__AcxImperativeViewUtils_0_9] = null;
    this[__Document_0_10] = null;
    this[__DomRuler_0_11] = null;
    this[__ManagedZone_0_12] = null;
    this[__overlayContainerName_0_13] = null;
    this[__overlayContainerParent_0_14] = null;
    this[__overlayContainer_0_15] = null;
    this[__overlaySyncDom_0_16] = null;
    this[__overlayRepositionLoop_0_17] = null;
    this[__OverlayStyleConfig_0_18] = null;
    this[__ZIndexer_0_19] = null;
    this[__OverlayDomRenderService_0_20] = null;
    this[__OverlayService_0_21] = null;
    this[__DomPopupSourceFactory_0_22] = null;
    this[__Clock_0_23] = null;
    src__scores__scores$46template._ViewScoresComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__scores__scores$46template._ViewScoresComponentHost0.prototype;
  dart.addTypeTests(src__scores__scores$46template._ViewScoresComponentHost0);
  dart.setMethodSignature(src__scores__scores$46template._ViewScoresComponentHost0, () => ({
    __proto__: dart.getMethods(src__scores__scores$46template._ViewScoresComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__scores__scores$46template._ViewScoresComponentHost0, () => ({
    __proto__: dart.getGetters(src__scores__scores$46template._ViewScoresComponentHost0.__proto__),
    [_defaultPopupPositions_0_6]: dart.fnType(core.List$(laminate__enums__alignment.RelativePosition), []),
    [_Window_0_7]: dart.fnType(dart.dynamic, []),
    [_DomService_0_8]: dart.fnType(dart.dynamic, []),
    [_AcxImperativeViewUtils_0_9]: dart.fnType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, []),
    [_Document_0_10]: dart.fnType(dart.dynamic, []),
    [_DomRuler_0_11]: dart.fnType(laminate__ruler__dom_ruler.DomRuler, []),
    [_ManagedZone_0_12]: dart.fnType(utils__angular__managed_zone__angular_2.Angular2ManagedZone, []),
    [_overlayContainerName_0_13]: dart.fnType(dart.dynamic, []),
    [_overlayContainerParent_0_14]: dart.fnType(dart.dynamic, []),
    [_overlayContainer_0_15]: dart.fnType(dart.dynamic, []),
    [_overlaySyncDom_0_16]: dart.fnType(core.bool, []),
    [_overlayRepositionLoop_0_17]: dart.fnType(core.bool, []),
    [_OverlayStyleConfig_0_18]: dart.fnType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, []),
    [_ZIndexer_0_19]: dart.fnType(laminate__overlay__zindexer.ZIndexer, []),
    [_OverlayDomRenderService_0_20]: dart.fnType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, []),
    [_OverlayService_0_21]: dart.fnType(src__laminate__overlay__overlay_service.OverlayService, []),
    [_DomPopupSourceFactory_0_22]: dart.fnType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory, []),
    [_Clock_0_23]: dart.fnType(time$.Clock, [])
  }));
  dart.setFieldSignature(src__scores__scores$46template._ViewScoresComponentHost0, () => ({
    __proto__: dart.getFields(src__scores__scores$46template._ViewScoresComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__scores__scores$46template.ViewScoresComponent0),
    [_ScoresComponent_0_5]: dart.fieldType(src__scores__scores.ScoresComponent),
    [__defaultPopupPositions_0_6]: dart.fieldType(ListOfRelativePosition()),
    [__Window_0_7]: dart.fieldType(dart.dynamic),
    [__DomService_0_8]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_9]: dart.fieldType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils),
    [__Document_0_10]: dart.fieldType(dart.dynamic),
    [__DomRuler_0_11]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_12]: dart.fieldType(utils__angular__managed_zone__angular_2.Angular2ManagedZone),
    [__overlayContainerName_0_13]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_14]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_15]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_16]: dart.fieldType(core.bool),
    [__overlayRepositionLoop_0_17]: dart.fieldType(core.bool),
    [__OverlayStyleConfig_0_18]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_19]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_20]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_21]: dart.fieldType(src__laminate__overlay__overlay_service.OverlayService),
    [__DomPopupSourceFactory_0_22]: dart.fieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory),
    [__Clock_0_23]: dart.fieldType(time$.Clock)
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
    angular_components$46template.initReflector();
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
