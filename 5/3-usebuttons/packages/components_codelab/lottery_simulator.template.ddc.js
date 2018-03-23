define(['dart_sdk', 'packages/components_codelab/lottery_simulator.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer', 'packages/angular/src/core/zone/ng_zone', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/src/laminate/overlay/render/overlay_style_config', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/src/laminate/overlay/render/overlay_dom_render_service', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/quiver/time', 'packages/components_codelab/src/scores/scores.template', 'packages/components_codelab/src/scores/scores', 'packages/angular_components/material_progress/material_progress.template', 'packages/angular_components/material_progress/material_progress', 'packages/angular_components/material_button/material_fab.template', 'packages/angular_components/material_button/material_fab', 'packages/angular_components/material_icon/material_icon.template', 'packages/angular_components/material_icon/material_icon', 'packages/angular_components/material_toggle/material_toggle.template', 'packages/angular_components/material_toggle/material_toggle', 'packages/components_codelab/src/stats/stats.template', 'packages/components_codelab/src/stats/stats', 'packages/components_codelab/src/visualize_winnings/visualize_winnings.template', 'packages/components_codelab/src/visualize_winnings/visualize_winnings', 'packages/components_codelab/src/settings/settings_component.template', 'packages/components_codelab/src/settings/settings_component', 'packages/components_codelab/src/help/help.template', 'packages/components_codelab/src/help/help', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/components_codelab/lottery_simulator', 'packages/components_codelab/src/settings/settings', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/angular_components.template', 'packages/components_codelab/src/settings/settings.template'], function(dart_sdk, lottery_simulator$46css, view_type, constants, view, app_view_utils, alignment, module, angular_2, dom_service, disposer, ng_zone, app_view, imperative_view, dom_ruler, angular_2$, module$, opaque_token, overlay_style_config, zindexer, overlay_dom_render_service, overlay_service, dom_popup_source, time, scores, scores$, material_progress, material_progress$, material_fab, material_fab$, material_icon, material_icon$, material_toggle, material_toggle$, stats, stats$, visualize_winnings, visualize_winnings$, settings_component, settings_component$, help, help$, managed_zone, lottery_simulator, settings, reflector, angular, angular_components, settings$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lottery_simulator$46css$46shim = lottery_simulator$46css.lottery_simulator$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const src__core__linker__component_loader = app_view.src__core__linker__component_loader;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
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
  const src__scores__scores$46template = scores.src__scores__scores$46template;
  const src__scores__scores = scores$.src__scores__scores;
  const material_progress__material_progress$46template = material_progress.material_progress__material_progress$46template;
  const material_progress__material_progress = material_progress$.material_progress__material_progress;
  const material_button__material_fab$46template = material_fab.material_button__material_fab$46template;
  const material_button__material_fab = material_fab$.material_button__material_fab;
  const material_icon__material_icon$46template = material_icon.material_icon__material_icon$46template;
  const material_icon__material_icon = material_icon$.material_icon__material_icon;
  const material_toggle__material_toggle$46template = material_toggle.material_toggle__material_toggle$46template;
  const material_toggle__material_toggle = material_toggle$.material_toggle__material_toggle;
  const src__stats__stats$46template = stats.src__stats__stats$46template;
  const src__stats__stats = stats$.src__stats__stats;
  const src__visualize_winnings__visualize_winnings$46template = visualize_winnings.src__visualize_winnings__visualize_winnings$46template;
  const src__visualize_winnings__visualize_winnings = visualize_winnings$.src__visualize_winnings__visualize_winnings;
  const src__settings__settings_component$46template = settings_component.src__settings__settings_component$46template;
  const src__settings__settings_component = settings_component$.src__settings__settings_component;
  const src__help__help$46template = help.src__help__help$46template;
  const src__help__help = help$.src__help__help;
  const src__utils__angular__managed_zone__managed_zone = managed_zone.src__utils__angular__managed_zone__managed_zone;
  const lottery_simulator$ = lottery_simulator.lottery_simulator;
  const src__settings__settings = settings.src__settings__settings;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const angular_components$46template = angular_components.angular_components$46template;
  const src__settings__settings$46template = settings$.src__settings__settings$46template;
  const _root = Object.create(null);
  const lottery_simulator$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfElement = () => (JSArrayOfElement = dart.constFn(_interceptors.JSArray$(html.Element)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(lottery_simulator$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(lottery_simulator$.AppComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(lottery_simulator$.AppComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(lottery_simulator$46template, {
    /*lottery_simulator$46template.styles$AppComponent*/get styles$AppComponent() {
      return dart.constList([lottery_simulator$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_vis_1_0_isDirty = Symbol('_query_vis_1_0_isDirty');
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _el_5 = Symbol('_el_5');
  const _el_6 = Symbol('_el_6');
  const _text_8 = Symbol('_text_8');
  const _el_9 = Symbol('_el_9');
  const _compView_9 = Symbol('_compView_9');
  const _ScoresComponent_9_5 = Symbol('_ScoresComponent_9_5');
  const __defaultPopupPositions_9_6 = Symbol('__defaultPopupPositions_9_6');
  const __Window_9_7 = Symbol('__Window_9_7');
  const __DomService_9_8 = Symbol('__DomService_9_8');
  const __AcxImperativeViewUtils_9_9 = Symbol('__AcxImperativeViewUtils_9_9');
  const __Document_9_10 = Symbol('__Document_9_10');
  const __DomRuler_9_11 = Symbol('__DomRuler_9_11');
  const __ManagedZone_9_12 = Symbol('__ManagedZone_9_12');
  const __overlayContainerName_9_13 = Symbol('__overlayContainerName_9_13');
  const __overlayContainerParent_9_14 = Symbol('__overlayContainerParent_9_14');
  const __overlayContainer_9_15 = Symbol('__overlayContainer_9_15');
  const __overlaySyncDom_9_16 = Symbol('__overlaySyncDom_9_16');
  const __overlayRepositionLoop_9_17 = Symbol('__overlayRepositionLoop_9_17');
  const __OverlayStyleConfig_9_18 = Symbol('__OverlayStyleConfig_9_18');
  const __ZIndexer_9_19 = Symbol('__ZIndexer_9_19');
  const __OverlayDomRenderService_9_20 = Symbol('__OverlayDomRenderService_9_20');
  const __OverlayService_9_21 = Symbol('__OverlayService_9_21');
  const __DomPopupSourceFactory_9_22 = Symbol('__DomPopupSourceFactory_9_22');
  const __Clock_9_23 = Symbol('__Clock_9_23');
  const _el_10 = Symbol('_el_10');
  const _el_11 = Symbol('_el_11');
  const _el_12 = Symbol('_el_12');
  const _text_13 = Symbol('_text_13');
  const _el_14 = Symbol('_el_14');
  const _el_15 = Symbol('_el_15');
  const _text_16 = Symbol('_text_16');
  const _el_18 = Symbol('_el_18');
  const _el_19 = Symbol('_el_19');
  const _compView_19 = Symbol('_compView_19');
  const _MaterialProgressComponent_19_5 = Symbol('_MaterialProgressComponent_19_5');
  const _el_20 = Symbol('_el_20');
  const _el_21 = Symbol('_el_21');
  const _el_22 = Symbol('_el_22');
  const _compView_22 = Symbol('_compView_22');
  const _MaterialFabComponent_22_5 = Symbol('_MaterialFabComponent_22_5');
  const _el_23 = Symbol('_el_23');
  const _compView_23 = Symbol('_compView_23');
  const _MaterialIconComponent_23_5 = Symbol('_MaterialIconComponent_23_5');
  const _el_24 = Symbol('_el_24');
  const _compView_24 = Symbol('_compView_24');
  const _MaterialFabComponent_24_5 = Symbol('_MaterialFabComponent_24_5');
  const _el_25 = Symbol('_el_25');
  const _compView_25 = Symbol('_compView_25');
  const _MaterialIconComponent_25_5 = Symbol('_MaterialIconComponent_25_5');
  const _el_26 = Symbol('_el_26');
  const _compView_26 = Symbol('_compView_26');
  const _MaterialFabComponent_26_5 = Symbol('_MaterialFabComponent_26_5');
  const _el_27 = Symbol('_el_27');
  const _compView_27 = Symbol('_compView_27');
  const _MaterialIconComponent_27_5 = Symbol('_MaterialIconComponent_27_5');
  const _el_28 = Symbol('_el_28');
  const _compView_28 = Symbol('_compView_28');
  const _MaterialFabComponent_28_5 = Symbol('_MaterialFabComponent_28_5');
  const _el_29 = Symbol('_el_29');
  const _compView_29 = Symbol('_compView_29');
  const _MaterialIconComponent_29_5 = Symbol('_MaterialIconComponent_29_5');
  const _el_30 = Symbol('_el_30');
  const _compView_30 = Symbol('_compView_30');
  const _MaterialToggleComponent_30_5 = Symbol('_MaterialToggleComponent_30_5');
  const _el_31 = Symbol('_el_31');
  const _el_32 = Symbol('_el_32');
  const _el_33 = Symbol('_el_33');
  const _compView_33 = Symbol('_compView_33');
  const _StatsComponent_33_5 = Symbol('_StatsComponent_33_5');
  const _el_34 = Symbol('_el_34');
  const _compView_34 = Symbol('_compView_34');
  const _VisualizeWinningsComponent_34_5 = Symbol('_VisualizeWinningsComponent_34_5');
  const _el_35 = Symbol('_el_35');
  const _el_36 = Symbol('_el_36');
  const _el_38 = Symbol('_el_38');
  const _compView_38 = Symbol('_compView_38');
  const _SettingsComponent_38_5 = Symbol('_SettingsComponent_38_5');
  const __defaultPopupPositions_38_6 = Symbol('__defaultPopupPositions_38_6');
  const __Window_38_7 = Symbol('__Window_38_7');
  const __DomService_38_8 = Symbol('__DomService_38_8');
  const __AcxImperativeViewUtils_38_9 = Symbol('__AcxImperativeViewUtils_38_9');
  const __Document_38_10 = Symbol('__Document_38_10');
  const __DomRuler_38_11 = Symbol('__DomRuler_38_11');
  const __ManagedZone_38_12 = Symbol('__ManagedZone_38_12');
  const __overlayContainerName_38_13 = Symbol('__overlayContainerName_38_13');
  const __overlayContainerParent_38_14 = Symbol('__overlayContainerParent_38_14');
  const __overlayContainer_38_15 = Symbol('__overlayContainer_38_15');
  const __overlaySyncDom_38_16 = Symbol('__overlaySyncDom_38_16');
  const __overlayRepositionLoop_38_17 = Symbol('__overlayRepositionLoop_38_17');
  const __OverlayStyleConfig_38_18 = Symbol('__OverlayStyleConfig_38_18');
  const __ZIndexer_38_19 = Symbol('__ZIndexer_38_19');
  const __OverlayDomRenderService_38_20 = Symbol('__OverlayDomRenderService_38_20');
  const __OverlayService_38_21 = Symbol('__OverlayService_38_21');
  const __DomPopupSourceFactory_38_22 = Symbol('__DomPopupSourceFactory_38_22');
  const __Clock_38_23 = Symbol('__Clock_38_23');
  const _el_39 = Symbol('_el_39');
  const _el_40 = Symbol('_el_40');
  const _el_42 = Symbol('_el_42');
  const _compView_42 = Symbol('_compView_42');
  const _HelpComponent_42_5 = Symbol('_HelpComponent_42_5');
  const _el_43 = Symbol('_el_43');
  const _el_44 = Symbol('_el_44');
  const _el_46 = Symbol('_el_46');
  const _compView_46 = Symbol('_compView_46');
  const _HelpComponent_46_5 = Symbol('_HelpComponent_46_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_9 = Symbol('_expr_9');
  const _expr_12 = Symbol('_expr_12');
  const _expr_18 = Symbol('_expr_18');
  const _expr_20 = Symbol('_expr_20');
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  const _defaultPopupPositions_9_6 = Symbol('_defaultPopupPositions_9_6');
  const _Window_9_7 = Symbol('_Window_9_7');
  const _DomService_9_8 = Symbol('_DomService_9_8');
  const _AcxImperativeViewUtils_9_9 = Symbol('_AcxImperativeViewUtils_9_9');
  const _Document_9_10 = Symbol('_Document_9_10');
  const _DomRuler_9_11 = Symbol('_DomRuler_9_11');
  const _ManagedZone_9_12 = Symbol('_ManagedZone_9_12');
  let const$13;
  const _overlayContainerName_9_13 = Symbol('_overlayContainerName_9_13');
  let const$14;
  const _overlayContainerParent_9_14 = Symbol('_overlayContainerParent_9_14');
  let const$15;
  const _overlayContainer_9_15 = Symbol('_overlayContainer_9_15');
  const _overlaySyncDom_9_16 = Symbol('_overlaySyncDom_9_16');
  const _overlayRepositionLoop_9_17 = Symbol('_overlayRepositionLoop_9_17');
  const _OverlayStyleConfig_9_18 = Symbol('_OverlayStyleConfig_9_18');
  const _ZIndexer_9_19 = Symbol('_ZIndexer_9_19');
  const _OverlayDomRenderService_9_20 = Symbol('_OverlayDomRenderService_9_20');
  const _OverlayService_9_21 = Symbol('_OverlayService_9_21');
  const _DomPopupSourceFactory_9_22 = Symbol('_DomPopupSourceFactory_9_22');
  let const$16;
  const _Clock_9_23 = Symbol('_Clock_9_23');
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  const _defaultPopupPositions_38_6 = Symbol('_defaultPopupPositions_38_6');
  const _Window_38_7 = Symbol('_Window_38_7');
  const _DomService_38_8 = Symbol('_DomService_38_8');
  const _AcxImperativeViewUtils_38_9 = Symbol('_AcxImperativeViewUtils_38_9');
  const _Document_38_10 = Symbol('_Document_38_10');
  const _DomRuler_38_11 = Symbol('_DomRuler_38_11');
  const _ManagedZone_38_12 = Symbol('_ManagedZone_38_12');
  let const$31;
  const _overlayContainerName_38_13 = Symbol('_overlayContainerName_38_13');
  let const$32;
  const _overlayContainerParent_38_14 = Symbol('_overlayContainerParent_38_14');
  let const$33;
  const _overlayContainer_38_15 = Symbol('_overlayContainer_38_15');
  const _overlaySyncDom_38_16 = Symbol('_overlaySyncDom_38_16');
  const _overlayRepositionLoop_38_17 = Symbol('_overlayRepositionLoop_38_17');
  const _OverlayStyleConfig_38_18 = Symbol('_OverlayStyleConfig_38_18');
  const _ZIndexer_38_19 = Symbol('_ZIndexer_38_19');
  const _OverlayDomRenderService_38_20 = Symbol('_OverlayDomRenderService_38_20');
  const _OverlayService_38_21 = Symbol('_OverlayService_38_21');
  const _DomPopupSourceFactory_38_22 = Symbol('_DomPopupSourceFactory_38_22');
  let const$34;
  const _Clock_38_23 = Symbol('_Clock_38_23');
  let const$35;
  const _handle_checkedChange_30_0 = Symbol('_handle_checkedChange_30_0');
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  lottery_simulator$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(lottery_simulator$.AppComponent) {
    get [_defaultPopupPositions_9_6]() {
      if (this[__defaultPopupPositions_9_6] == null) {
        this[__defaultPopupPositions_9_6] = const$12 || (const$12 = dart.constList([const$ || (const$ = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top center'}))), const$1 || (const$1 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top right', originX: const$0 || (const$0 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$3 || (const$3 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top left', originX: const$2 || (const$2 = dart.const(new laminate__enums__alignment.Alignment.new('Start', 'flex-start')))}))), const$5 || (const$5 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom center', originY: const$4 || (const$4 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$8 || (const$8 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom right', originX: const$6 || (const$6 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end'))), originY: const$7 || (const$7 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$11 || (const$11 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom left', originX: const$9 || (const$9 = dart.const(new laminate__enums__alignment.Alignment.new('Start', 'flex-start'))), originY: const$10 || (const$10 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))})))], laminate__enums__alignment.RelativePosition));
      }
      return this[__defaultPopupPositions_9_6];
    }
    get [_Window_9_7]() {
      if (this[__Window_9_7] == null) {
        this[__Window_9_7] = utils__browser__window__module.getWindow();
      }
      return this[__Window_9_7];
    }
    get [_DomService_9_8]() {
      if (this[__DomService_9_8] == null) {
        this[__DomService_9_8] = utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_9_7]));
      }
      return this[__DomService_9_8];
    }
    get [_AcxImperativeViewUtils_9_9]() {
      if (this[__AcxImperativeViewUtils_9_9] == null) {
        this[__AcxImperativeViewUtils_9_9] = new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_9_8]));
      }
      return this[__AcxImperativeViewUtils_9_9];
    }
    get [_Document_9_10]() {
      if (this[__Document_9_10] == null) {
        this[__Document_9_10] = utils__browser__window__module.getDocument();
      }
      return this[__Document_9_10];
    }
    get [_DomRuler_9_11]() {
      if (this[__DomRuler_9_11] == null) {
        this[__DomRuler_9_11] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_9_10]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_9_8]));
      }
      return this[__DomRuler_9_11];
    }
    get [_ManagedZone_9_12]() {
      if (this[__ManagedZone_9_12] == null) {
        this[__ManagedZone_9_12] = new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_9_12];
    }
    get [_overlayContainerName_9_13]() {
      if (this[__overlayContainerName_9_13] == null) {
        this[__overlayContainerName_9_13] = laminate__overlay__module.getDefaultContainerName(this.parentView.injectorGet(const$13 || (const$13 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_9_13];
    }
    get [_overlayContainerParent_9_14]() {
      if (this[__overlayContainerParent_9_14] == null) {
        this[__overlayContainerParent_9_14] = laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_9_10]), this.parentView.injectorGet(const$14 || (const$14 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerParent'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_9_14];
    }
    get [_overlayContainer_9_15]() {
      if (this[__overlayContainer_9_15] == null) {
        this[__overlayContainer_9_15] = laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_9_13]), html.HtmlElement._check(this[_overlayContainerParent_9_14]), this.parentView.injectorGet(const$15 || (const$15 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_9_15];
    }
    get [_overlaySyncDom_9_16]() {
      if (this[__overlaySyncDom_9_16] == null) {
        this[__overlaySyncDom_9_16] = true;
      }
      return this[__overlaySyncDom_9_16];
    }
    get [_overlayRepositionLoop_9_17]() {
      if (this[__overlayRepositionLoop_9_17] == null) {
        this[__overlayRepositionLoop_9_17] = true;
      }
      return this[__overlayRepositionLoop_9_17];
    }
    get [_OverlayStyleConfig_9_18]() {
      if (this[__OverlayStyleConfig_9_18] == null) {
        this[__OverlayStyleConfig_9_18] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_9_10]));
      }
      return this[__OverlayStyleConfig_9_18];
    }
    get [_ZIndexer_9_19]() {
      if (this[__ZIndexer_9_19] == null) {
        this[__ZIndexer_9_19] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_9_19];
    }
    get [_OverlayDomRenderService_9_20]() {
      if (this[__OverlayDomRenderService_9_20] == null) {
        this[__OverlayDomRenderService_9_20] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_9_18], html.HtmlElement._check(this[_overlayContainer_9_15]), core.String._check(this[_overlayContainerName_9_13]), this[_DomRuler_9_11], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_9_8]), this[_AcxImperativeViewUtils_9_9], this[_overlaySyncDom_9_16], this[_overlayRepositionLoop_9_17], this[_ZIndexer_9_19]);
      }
      return this[__OverlayDomRenderService_9_20];
    }
    get [_OverlayService_9_21]() {
      if (this[__OverlayService_9_21] == null) {
        this[__OverlayService_9_21] = new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_9_16], this[_OverlayDomRenderService_9_20], src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_9_21];
    }
    get [_DomPopupSourceFactory_9_22]() {
      if (this[__DomPopupSourceFactory_9_22] == null) {
        this[__DomPopupSourceFactory_9_22] = new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(this[_DomRuler_9_11]);
      }
      return this[__DomPopupSourceFactory_9_22];
    }
    get [_Clock_9_23]() {
      if (this[__Clock_9_23] == null) {
        this[__Clock_9_23] = const$16 || (const$16 = dart.const(new time$.Clock.new()));
      }
      return this[__Clock_9_23];
    }
    get [_defaultPopupPositions_38_6]() {
      if (this[__defaultPopupPositions_38_6] == null) {
        this[__defaultPopupPositions_38_6] = const$30 || (const$30 = dart.constList([const$17 || (const$17 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top center'}))), const$19 || (const$19 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top right', originX: const$18 || (const$18 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$21 || (const$21 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top left', originX: const$20 || (const$20 = dart.const(new laminate__enums__alignment.Alignment.new('Start', 'flex-start')))}))), const$23 || (const$23 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom center', originY: const$22 || (const$22 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$26 || (const$26 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom right', originX: const$24 || (const$24 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end'))), originY: const$25 || (const$25 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$29 || (const$29 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom left', originX: const$27 || (const$27 = dart.const(new laminate__enums__alignment.Alignment.new('Start', 'flex-start'))), originY: const$28 || (const$28 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))})))], laminate__enums__alignment.RelativePosition));
      }
      return this[__defaultPopupPositions_38_6];
    }
    get [_Window_38_7]() {
      if (this[__Window_38_7] == null) {
        this[__Window_38_7] = utils__browser__window__module.getWindow();
      }
      return this[__Window_38_7];
    }
    get [_DomService_38_8]() {
      if (this[__DomService_38_8] == null) {
        this[__DomService_38_8] = utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.parentView.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_38_7]));
      }
      return this[__DomService_38_8];
    }
    get [_AcxImperativeViewUtils_38_9]() {
      if (this[__AcxImperativeViewUtils_38_9] == null) {
        this[__AcxImperativeViewUtils_38_9] = new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.parentView.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_38_8]));
      }
      return this[__AcxImperativeViewUtils_38_9];
    }
    get [_Document_38_10]() {
      if (this[__Document_38_10] == null) {
        this[__Document_38_10] = utils__browser__window__module.getDocument();
      }
      return this[__Document_38_10];
    }
    get [_DomRuler_38_11]() {
      if (this[__DomRuler_38_11] == null) {
        this[__DomRuler_38_11] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_38_10]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_38_8]));
      }
      return this[__DomRuler_38_11];
    }
    get [_ManagedZone_38_12]() {
      if (this[__ManagedZone_38_12] == null) {
        this[__ManagedZone_38_12] = new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_38_12];
    }
    get [_overlayContainerName_38_13]() {
      if (this[__overlayContainerName_38_13] == null) {
        this[__overlayContainerName_38_13] = laminate__overlay__module.getDefaultContainerName(this.parentView.injectorGet(const$31 || (const$31 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_38_13];
    }
    get [_overlayContainerParent_38_14]() {
      if (this[__overlayContainerParent_38_14] == null) {
        this[__overlayContainerParent_38_14] = laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_38_10]), this.parentView.injectorGet(const$32 || (const$32 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerParent'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_38_14];
    }
    get [_overlayContainer_38_15]() {
      if (this[__overlayContainer_38_15] == null) {
        this[__overlayContainer_38_15] = laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_38_13]), html.HtmlElement._check(this[_overlayContainerParent_38_14]), this.parentView.injectorGet(const$33 || (const$33 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_38_15];
    }
    get [_overlaySyncDom_38_16]() {
      if (this[__overlaySyncDom_38_16] == null) {
        this[__overlaySyncDom_38_16] = true;
      }
      return this[__overlaySyncDom_38_16];
    }
    get [_overlayRepositionLoop_38_17]() {
      if (this[__overlayRepositionLoop_38_17] == null) {
        this[__overlayRepositionLoop_38_17] = true;
      }
      return this[__overlayRepositionLoop_38_17];
    }
    get [_OverlayStyleConfig_38_18]() {
      if (this[__OverlayStyleConfig_38_18] == null) {
        this[__OverlayStyleConfig_38_18] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_38_10]));
      }
      return this[__OverlayStyleConfig_38_18];
    }
    get [_ZIndexer_38_19]() {
      if (this[__ZIndexer_38_19] == null) {
        this[__ZIndexer_38_19] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_38_19];
    }
    get [_OverlayDomRenderService_38_20]() {
      if (this[__OverlayDomRenderService_38_20] == null) {
        this[__OverlayDomRenderService_38_20] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_38_18], html.HtmlElement._check(this[_overlayContainer_38_15]), core.String._check(this[_overlayContainerName_38_13]), this[_DomRuler_38_11], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_38_8]), this[_AcxImperativeViewUtils_38_9], this[_overlaySyncDom_38_16], this[_overlayRepositionLoop_38_17], this[_ZIndexer_38_19]);
      }
      return this[__OverlayDomRenderService_38_20];
    }
    get [_OverlayService_38_21]() {
      if (this[__OverlayService_38_21] == null) {
        this[__OverlayService_38_21] = new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_38_16], this[_OverlayDomRenderService_38_20], src__laminate__overlay__overlay_service.OverlayService._check(this.parentView.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_38_21];
    }
    get [_DomPopupSourceFactory_38_22]() {
      if (this[__DomPopupSourceFactory_38_22] == null) {
        this[__DomPopupSourceFactory_38_22] = new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(this[_DomRuler_38_11]);
      }
      return this[__DomPopupSourceFactory_38_22];
    }
    get [_Clock_38_23]() {
      if (this[__Clock_38_23] == null) {
        this[__Clock_38_23] = const$34 || (const$34 = dart.const(new time$.Clock.new()));
      }
      return this[__Clock_38_23];
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h1', parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('Lottery Simulator');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_2].className = 'help';
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_2]);
      this.addShimE(this[_el_3]);
      let _text_4 = html.Text.new('Have you always wanted to lose all your money in a lottery?\n   This simulation makes it possible—without, you know, losing all your money.');
      this[_el_3][$append](_text_4);
      this[_el_5] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_5]);
      this[_el_6] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_5]);
      this.addShimE(this[_el_6]);
      let _text_7 = html.Text.new('Playing ');
      this[_el_6][$append](_text_7);
      this[_text_8] = html.Text.new('');
      this[_el_6][$append](this[_text_8]);
      this[_compView_9] = new src__scores__scores$46template.ViewScoresComponent0.new(this, 9);
      this[_el_9] = this[_compView_9].rootEl;
      this[_el_5][$append](this[_el_9]);
      this[_el_9].className = 'scores-component';
      this.addShimC(html.HtmlElement._check(this[_el_9]));
      this[_ScoresComponent_9_5] = new src__scores__scores.ScoresComponent.new();
      this[_compView_9].create(this[_ScoresComponent_9_5], []);
      this[_el_10] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_5]);
      this[_el_10].className = 'days';
      this.addShimC(this[_el_10]);
      this[_el_11] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_10]);
      this[_el_11].className = 'days__start-day';
      this.addShimC(this[_el_11]);
      this[_el_12] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_11]);
      this.addShimE(this[_el_12]);
      this[_text_13] = html.Text.new('');
      this[_el_12][$append](this[_text_13]);
      this[_el_14] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_10]);
      this[_el_14].className = 'days__end-day';
      this.addShimC(this[_el_14]);
      this[_el_15] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_14]);
      this.addShimE(this[_el_15]);
      this[_text_16] = html.Text.new('');
      this[_el_15][$append](this[_text_16]);
      let _text_17 = html.Text.new(' years from now');
      this[_el_15][$append](_text_17);
      this[_el_18] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_10]);
      this[_el_18].className = 'clear-floats';
      this.addShimC(this[_el_18]);
      this[_compView_19] = new material_progress__material_progress$46template.ViewMaterialProgressComponent0.new(this, 19);
      this[_el_19] = this[_compView_19].rootEl;
      this[_el_5][$append](this[_el_19]);
      this[_el_19].className = 'life-progress';
      this.addShimC(html.HtmlElement._check(this[_el_19]));
      this[_MaterialProgressComponent_19_5] = new material_progress__material_progress.MaterialProgressComponent.new(null, this[_compView_19].ref, html.HtmlElement._check(this[_el_19]));
      this[_compView_19].create(this[_MaterialProgressComponent_19_5], []);
      this[_el_20] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_5]);
      this[_el_20].className = 'controls';
      this.addShimC(this[_el_20]);
      this[_el_21] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_20]);
      this[_el_21].className = 'controls__fabs';
      this.addShimC(this[_el_21]);
      this[_compView_22] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 22);
      this[_el_22] = this[_compView_22].rootEl;
      this[_el_21][$append](this[_el_22]);
      this.createAttr(this[_el_22], 'aria-label', 'Play');
      this.createAttr(this[_el_22], 'id', 'play-button');
      this.createAttr(this[_el_22], 'raised', '');
      this.addShimC(html.HtmlElement._check(this[_el_22]));
      this[_MaterialFabComponent_22_5] = new material_button__material_fab.MaterialFabComponent.new(html.HtmlElement._check(this[_el_22]), this[_compView_22].ref);
      this[_compView_23] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 23);
      this[_el_23] = this[_compView_23].rootEl;
      this.createAttr(this[_el_23], 'icon', 'play_arrow');
      this.addShimC(html.HtmlElement._check(this[_el_23]));
      this[_MaterialIconComponent_23_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_23]));
      this[_compView_23].create(this[_MaterialIconComponent_23_5], []);
      this[_compView_22].create(this[_MaterialFabComponent_22_5], [JSArrayOfElement().of([this[_el_23]])]);
      this[_compView_24] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 24);
      this[_el_24] = this[_compView_24].rootEl;
      this[_el_21][$append](this[_el_24]);
      this.createAttr(this[_el_24], 'aria-label', 'Step');
      this.createAttr(this[_el_24], 'mini', '');
      this.createAttr(this[_el_24], 'raised', '');
      this.addShimC(html.HtmlElement._check(this[_el_24]));
      this[_MaterialFabComponent_24_5] = new material_button__material_fab.MaterialFabComponent.new(html.HtmlElement._check(this[_el_24]), this[_compView_24].ref);
      this[_compView_25] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 25);
      this[_el_25] = this[_compView_25].rootEl;
      this.createAttr(this[_el_25], 'icon', 'skip_next');
      this.addShimC(html.HtmlElement._check(this[_el_25]));
      this[_MaterialIconComponent_25_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_25]));
      this[_compView_25].create(this[_MaterialIconComponent_25_5], []);
      this[_compView_24].create(this[_MaterialFabComponent_24_5], [JSArrayOfElement().of([this[_el_25]])]);
      this[_compView_26] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 26);
      this[_el_26] = this[_compView_26].rootEl;
      this[_el_21][$append](this[_el_26]);
      this.createAttr(this[_el_26], 'aria-label', 'Pause');
      this.createAttr(this[_el_26], 'mini', '');
      this.createAttr(this[_el_26], 'raised', '');
      this.addShimC(html.HtmlElement._check(this[_el_26]));
      this[_MaterialFabComponent_26_5] = new material_button__material_fab.MaterialFabComponent.new(html.HtmlElement._check(this[_el_26]), this[_compView_26].ref);
      this[_compView_27] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 27);
      this[_el_27] = this[_compView_27].rootEl;
      this.createAttr(this[_el_27], 'icon', 'pause');
      this.addShimC(html.HtmlElement._check(this[_el_27]));
      this[_MaterialIconComponent_27_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_27]));
      this[_compView_27].create(this[_MaterialIconComponent_27_5], []);
      this[_compView_26].create(this[_MaterialFabComponent_26_5], [JSArrayOfElement().of([this[_el_27]])]);
      this[_compView_28] = new material_button__material_fab$46template.ViewMaterialFabComponent0.new(this, 28);
      this[_el_28] = this[_compView_28].rootEl;
      this[_el_21][$append](this[_el_28]);
      this.createAttr(this[_el_28], 'aria-label', 'Reset');
      this.createAttr(this[_el_28], 'mini', '');
      this.createAttr(this[_el_28], 'raised', '');
      this.addShimC(html.HtmlElement._check(this[_el_28]));
      this[_MaterialFabComponent_28_5] = new material_button__material_fab.MaterialFabComponent.new(html.HtmlElement._check(this[_el_28]), this[_compView_28].ref);
      this[_compView_29] = new material_icon__material_icon$46template.ViewMaterialIconComponent0.new(this, 29);
      this[_el_29] = this[_compView_29].rootEl;
      this.createAttr(this[_el_29], 'icon', 'replay');
      this.addShimC(html.HtmlElement._check(this[_el_29]));
      this[_MaterialIconComponent_29_5] = new material_icon__material_icon.MaterialIconComponent.new(html.HtmlElement._check(this[_el_29]));
      this[_compView_29].create(this[_MaterialIconComponent_29_5], []);
      this[_compView_28].create(this[_MaterialFabComponent_28_5], [JSArrayOfElement().of([this[_el_29]])]);
      this[_compView_30] = new material_toggle__material_toggle$46template.ViewMaterialToggleComponent0.new(this, 30);
      this[_el_30] = this[_compView_30].rootEl;
      this[_el_20][$append](this[_el_30]);
      this[_el_30].className = 'controls__faster-button themeable';
      this.createAttr(this[_el_30], 'label', 'Go faster');
      this.addShimC(html.HtmlElement._check(this[_el_30]));
      this[_MaterialToggleComponent_30_5] = new material_toggle__material_toggle.MaterialToggleComponent.new();
      this[_compView_30].create(this[_MaterialToggleComponent_30_5], [const$35 || (const$35 = dart.constList([], dart.dynamic))]);
      this[_el_31] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_20]);
      this[_el_31].className = 'clear-floats';
      this.addShimC(this[_el_31]);
      this[_el_32] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_5]);
      this[_el_32].className = 'history';
      this.addShimC(this[_el_32]);
      this[_compView_33] = new src__stats__stats$46template.ViewStatsComponent0.new(this, 33);
      this[_el_33] = this[_compView_33].rootEl;
      this[_el_32][$append](this[_el_33]);
      this[_el_33].className = 'history__stats';
      this.addShimC(html.HtmlElement._check(this[_el_33]));
      this[_StatsComponent_33_5] = new src__stats__stats.StatsComponent.new();
      this[_compView_33].create(this[_StatsComponent_33_5], []);
      this[_compView_34] = new src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0.new(this, 34);
      this[_el_34] = this[_compView_34].rootEl;
      this[_el_32][$append](this[_el_34]);
      this[_el_34].className = 'history__vis';
      this.addShimC(html.HtmlElement._check(this[_el_34]));
      this[_VisualizeWinningsComponent_34_5] = new src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent.new();
      this[_compView_34].create(this[_VisualizeWinningsComponent_34_5], []);
      this[_el_35] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_32]);
      this[_el_35].className = 'clear-floats';
      this.addShimC(this[_el_35]);
      this[_el_36] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_5]);
      this.addShimE(this[_el_36]);
      let _text_37 = html.Text.new('Settings');
      this[_el_36][$append](_text_37);
      this[_compView_38] = new src__settings__settings_component$46template.ViewSettingsComponent0.new(this, 38);
      this[_el_38] = this[_compView_38].rootEl;
      this[_el_5][$append](this[_el_38]);
      this.addShimC(html.HtmlElement._check(this[_el_38]));
      this[_SettingsComponent_38_5] = new src__settings__settings_component.SettingsComponent.new();
      this[_compView_38].create(this[_SettingsComponent_38_5], []);
      this[_el_39] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_39]);
      this[_el_40] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_39]);
      this.addShimE(this[_el_40]);
      let _text_41 = html.Text.new('Help');
      this[_el_40][$append](_text_41);
      this[_compView_42] = new src__help__help$46template.ViewHelpComponent0.new(this, 42);
      this[_el_42] = this[_compView_42].rootEl;
      this[_el_39][$append](this[_el_42]);
      this.createAttr(this[_el_42], 'content', 'help');
      this.addShimC(html.HtmlElement._check(this[_el_42]));
      this[_HelpComponent_42_5] = new src__help__help.HelpComponent.new();
      this[_compView_42].create(this[_HelpComponent_42_5], []);
      this[_el_43] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_43]);
      this[_el_44] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_43]);
      this.addShimE(this[_el_44]);
      let _text_45 = html.Text.new('About');
      this[_el_44][$append](_text_45);
      this[_compView_46] = new src__help__help$46template.ViewHelpComponent0.new(this, 46);
      this[_el_46] = this[_compView_46].rootEl;
      this[_el_43][$append](this[_el_46]);
      this.createAttr(this[_el_46], 'content', 'about');
      this.addShimC(html.HtmlElement._check(this[_el_46]));
      this[_HelpComponent_46_5] = new src__help__help.HelpComponent.new();
      this[_compView_46].create(this[_HelpComponent_46_5], []);
      let subscription_0 = this[_MaterialFabComponent_22_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'play')));
      let subscription_1 = this[_MaterialFabComponent_24_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'step')));
      let subscription_2 = this[_MaterialFabComponent_26_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'pause')));
      let subscription_3 = this[_MaterialFabComponent_28_5].trigger.listen(this.eventHandler0(html.UIEvent, dart.bind(this.ctx, 'reset')));
      let subscription_4 = this[_MaterialToggleComponent_30_5].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_checkedChange_30_0)));
      let subscription_5 = this[_SettingsComponent_38_5].settingsChanged.listen(this.eventHandler0(core.Null, dart.bind(this.ctx, 'updateFromSettings')));
      this.ctx.vis = this[_VisualizeWinningsComponent_34_5];
      this.init(const$36 || (const$36 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === (const$37 || (const$37 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions')))) && 9 === nodeIndex) {
        return this[_defaultPopupPositions_9_6];
      }
      if (token === dart.wrapType(html.Window) && 9 === nodeIndex) {
        return this[_Window_9_7];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 9 === nodeIndex) {
        return this[_DomService_9_8];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 9 === nodeIndex) {
        return this[_AcxImperativeViewUtils_9_9];
      }
      if (token === dart.wrapType(html.Document) && 9 === nodeIndex) {
        return this[_Document_9_10];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 9 === nodeIndex) {
        return this[_DomRuler_9_11];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 9 === nodeIndex) {
        return this[_ManagedZone_9_12];
      }
      if (token === (const$38 || (const$38 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName')))) && 9 === nodeIndex) {
        return this[_overlayContainerName_9_13];
      }
      if (token === (const$39 || (const$39 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerParent')))) && 9 === nodeIndex) {
        return this[_overlayContainerParent_9_14];
      }
      if (token === (const$40 || (const$40 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer')))) && 9 === nodeIndex) {
        return this[_overlayContainer_9_15];
      }
      if (token === (const$41 || (const$41 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlaySyncDom')))) && 9 === nodeIndex) {
        return this[_overlaySyncDom_9_16];
      }
      if (token === (const$42 || (const$42 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop')))) && 9 === nodeIndex) {
        return this[_overlayRepositionLoop_9_17];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 9 === nodeIndex) {
        return this[_OverlayStyleConfig_9_18];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 9 === nodeIndex) {
        return this[_ZIndexer_9_19];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 9 === nodeIndex) {
        return this[_OverlayDomRenderService_9_20];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 9 === nodeIndex) {
        return this[_OverlayService_9_21];
      }
      if (token === dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory) && 9 === nodeIndex) {
        return this[_DomPopupSourceFactory_9_22];
      }
      if ((token === dart.wrapType(time$.Clock) || token === (const$43 || (const$43 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))))) && 9 === nodeIndex) {
        return this[_Clock_9_23];
      }
      if (token === dart.wrapType(material_progress__material_progress.MaterialProgressComponent) && 19 === nodeIndex) {
        return this[_MaterialProgressComponent_19_5];
      }
      if (token === (const$44 || (const$44 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions')))) && 38 === nodeIndex) {
        return this[_defaultPopupPositions_38_6];
      }
      if (token === dart.wrapType(html.Window) && 38 === nodeIndex) {
        return this[_Window_38_7];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 38 === nodeIndex) {
        return this[_DomService_38_8];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 38 === nodeIndex) {
        return this[_AcxImperativeViewUtils_38_9];
      }
      if (token === dart.wrapType(html.Document) && 38 === nodeIndex) {
        return this[_Document_38_10];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 38 === nodeIndex) {
        return this[_DomRuler_38_11];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 38 === nodeIndex) {
        return this[_ManagedZone_38_12];
      }
      if (token === (const$45 || (const$45 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName')))) && 38 === nodeIndex) {
        return this[_overlayContainerName_38_13];
      }
      if (token === (const$46 || (const$46 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerParent')))) && 38 === nodeIndex) {
        return this[_overlayContainerParent_38_14];
      }
      if (token === (const$47 || (const$47 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer')))) && 38 === nodeIndex) {
        return this[_overlayContainer_38_15];
      }
      if (token === (const$48 || (const$48 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlaySyncDom')))) && 38 === nodeIndex) {
        return this[_overlaySyncDom_38_16];
      }
      if (token === (const$49 || (const$49 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop')))) && 38 === nodeIndex) {
        return this[_overlayRepositionLoop_38_17];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 38 === nodeIndex) {
        return this[_OverlayStyleConfig_38_18];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 38 === nodeIndex) {
        return this[_ZIndexer_38_19];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 38 === nodeIndex) {
        return this[_OverlayDomRenderService_38_20];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 38 === nodeIndex) {
        return this[_OverlayService_38_21];
      }
      if (token === dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory) && 38 === nodeIndex) {
        return this[_DomPopupSourceFactory_38_22];
      }
      if ((token === dart.wrapType(time$.Clock) || token === (const$50 || (const$50 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))))) && 38 === nodeIndex) {
        return this[_Clock_38_23];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let currVal_1 = _ctx.altCash;
      if (!(this[_expr_1] == currVal_1)) {
        this[_ScoresComponent_9_5].altCash = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.cash;
      if (!(this[_expr_2] == currVal_2)) {
        this[_ScoresComponent_9_5].cash = currVal_2;
        this[_expr_2] = currVal_2;
      }
      changed = false;
      let currVal_5 = _ctx.progress;
      if (!(this[_expr_5] == currVal_5)) {
        this[_MaterialProgressComponent_19_5].activeProgress = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_19].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialFabComponent_22_5].raised = true;
        changed = true;
      }
      let currVal_6 = dart.test(_ctx.endOfDays) || dart.test(_ctx.inProgress);
      if (!(this[_expr_6] === currVal_6)) {
        this[_MaterialFabComponent_22_5].disabled = currVal_6;
        changed = true;
        this[_expr_6] = currVal_6;
      }
      if (changed) {
        this[_compView_22].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_23_5].icon = 'play_arrow';
        changed = true;
      }
      if (changed) {
        this[_compView_23].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialFabComponent_24_5].raised = true;
        changed = true;
      }
      let currVal_9 = dart.test(_ctx.endOfDays) || dart.test(_ctx.inProgress);
      if (!(this[_expr_9] === currVal_9)) {
        this[_MaterialFabComponent_24_5].disabled = currVal_9;
        changed = true;
        this[_expr_9] = currVal_9;
      }
      if (changed) {
        this[_compView_24].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_25_5].icon = 'skip_next';
        changed = true;
      }
      if (changed) {
        this[_compView_25].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialFabComponent_26_5].raised = true;
        changed = true;
      }
      let currVal_12 = !dart.test(_ctx.inProgress);
      if (!(this[_expr_12] === currVal_12)) {
        this[_MaterialFabComponent_26_5].disabled = currVal_12;
        changed = true;
        this[_expr_12] = currVal_12;
      }
      if (changed) {
        this[_compView_26].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_27_5].icon = 'pause';
        changed = true;
      }
      if (changed) {
        this[_compView_27].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialFabComponent_28_5].raised = true;
        changed = true;
      }
      if (changed) {
        this[_compView_28].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialIconComponent_29_5].icon = 'replay';
        changed = true;
      }
      if (changed) {
        this[_compView_29].markAsCheckOnce();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialToggleComponent_30_5].label = 'Go faster';
        changed = true;
      }
      let currVal_18 = _ctx.fastEnabled;
      if (!(this[_expr_18] == currVal_18)) {
        this[_MaterialToggleComponent_30_5].checked = currVal_18;
        changed = true;
        this[_expr_18] = currVal_18;
      }
      if (changed) {
        this[_compView_30].markAsCheckOnce();
      }
      if (firstCheck) {
        if (!(_ctx.winningsMap == null)) {
          this[_StatsComponent_33_5].winningsMap = _ctx.winningsMap;
        }
      }
      if (firstCheck) {
        this[_VisualizeWinningsComponent_34_5].ngOnInit();
      }
      let currVal_20 = _ctx.settings;
      if (!core.identical(this[_expr_20], currVal_20)) {
        this[_SettingsComponent_38_5].settings = currVal_20;
        this[_expr_20] = currVal_20;
      }
      if (firstCheck) {
        this[_SettingsComponent_38_5].ngOnInit();
      }
      if (firstCheck) {
        this[_HelpComponent_42_5].content = 'help';
      }
      if (firstCheck) {
        this[_HelpComponent_46_5].content = 'about';
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.lottery.shortName);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_8][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let l = _ctx.currentDay;
      let currVal_3 = l != null ? l : '';
      if (!(this[_expr_3] === currVal_3)) {
        this[_text_13][$text] = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.years);
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_text_16][$text] = core.String._check(currVal_4);
        this[_expr_4] = currVal_4;
      }
      this[_compView_22].detectHostChanges(firstCheck);
      this[_compView_24].detectHostChanges(firstCheck);
      this[_compView_26].detectHostChanges(firstCheck);
      this[_compView_28].detectHostChanges(firstCheck);
      this[_compView_9].detectChanges();
      this[_compView_19].detectChanges();
      this[_compView_22].detectChanges();
      this[_compView_23].detectChanges();
      this[_compView_24].detectChanges();
      this[_compView_25].detectChanges();
      this[_compView_26].detectChanges();
      this[_compView_27].detectChanges();
      this[_compView_28].detectChanges();
      this[_compView_29].detectChanges();
      this[_compView_30].detectChanges();
      this[_compView_33].detectChanges();
      this[_compView_34].detectChanges();
      this[_compView_38].detectChanges();
      this[_compView_42].detectChanges();
      this[_compView_46].detectChanges();
      if (firstCheck) {
        this[_MaterialProgressComponent_19_5].ngAfterViewInit();
      }
      if (firstCheck) {
        this[_MaterialToggleComponent_30_5].ngAfterViewInit();
      }
    }
    destroyInternal() {
      let t = this[_compView_9];
      t == null ? null : t.destroy();
      let t$ = this[_compView_19];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_22];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_23];
      t$1 == null ? null : t$1.destroy();
      let t$2 = this[_compView_24];
      t$2 == null ? null : t$2.destroy();
      let t$3 = this[_compView_25];
      t$3 == null ? null : t$3.destroy();
      let t$4 = this[_compView_26];
      t$4 == null ? null : t$4.destroy();
      let t$5 = this[_compView_27];
      t$5 == null ? null : t$5.destroy();
      let t$6 = this[_compView_28];
      t$6 == null ? null : t$6.destroy();
      let t$7 = this[_compView_29];
      t$7 == null ? null : t$7.destroy();
      let t$8 = this[_compView_30];
      t$8 == null ? null : t$8.destroy();
      let t$9 = this[_compView_33];
      t$9 == null ? null : t$9.destroy();
      let t$10 = this[_compView_34];
      t$10 == null ? null : t$10.destroy();
      let t$11 = this[_compView_38];
      t$11 == null ? null : t$11.destroy();
      let t$12 = this[_compView_42];
      t$12 == null ? null : t$12.destroy();
      let t$13 = this[_compView_46];
      t$13 == null ? null : t$13.destroy();
      this[_MaterialProgressComponent_19_5].ngOnDestroy();
    }
    [_handle_checkedChange_30_0]($event) {
      this.ctx.fastEnabled = core.bool._check($event);
    }
  };
  (lottery_simulator$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_query_vis_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_el_6] = null;
    this[_text_8] = null;
    this[_el_9] = null;
    this[_compView_9] = null;
    this[_ScoresComponent_9_5] = null;
    this[__defaultPopupPositions_9_6] = null;
    this[__Window_9_7] = null;
    this[__DomService_9_8] = null;
    this[__AcxImperativeViewUtils_9_9] = null;
    this[__Document_9_10] = null;
    this[__DomRuler_9_11] = null;
    this[__ManagedZone_9_12] = null;
    this[__overlayContainerName_9_13] = null;
    this[__overlayContainerParent_9_14] = null;
    this[__overlayContainer_9_15] = null;
    this[__overlaySyncDom_9_16] = null;
    this[__overlayRepositionLoop_9_17] = null;
    this[__OverlayStyleConfig_9_18] = null;
    this[__ZIndexer_9_19] = null;
    this[__OverlayDomRenderService_9_20] = null;
    this[__OverlayService_9_21] = null;
    this[__DomPopupSourceFactory_9_22] = null;
    this[__Clock_9_23] = null;
    this[_el_10] = null;
    this[_el_11] = null;
    this[_el_12] = null;
    this[_text_13] = null;
    this[_el_14] = null;
    this[_el_15] = null;
    this[_text_16] = null;
    this[_el_18] = null;
    this[_el_19] = null;
    this[_compView_19] = null;
    this[_MaterialProgressComponent_19_5] = null;
    this[_el_20] = null;
    this[_el_21] = null;
    this[_el_22] = null;
    this[_compView_22] = null;
    this[_MaterialFabComponent_22_5] = null;
    this[_el_23] = null;
    this[_compView_23] = null;
    this[_MaterialIconComponent_23_5] = null;
    this[_el_24] = null;
    this[_compView_24] = null;
    this[_MaterialFabComponent_24_5] = null;
    this[_el_25] = null;
    this[_compView_25] = null;
    this[_MaterialIconComponent_25_5] = null;
    this[_el_26] = null;
    this[_compView_26] = null;
    this[_MaterialFabComponent_26_5] = null;
    this[_el_27] = null;
    this[_compView_27] = null;
    this[_MaterialIconComponent_27_5] = null;
    this[_el_28] = null;
    this[_compView_28] = null;
    this[_MaterialFabComponent_28_5] = null;
    this[_el_29] = null;
    this[_compView_29] = null;
    this[_MaterialIconComponent_29_5] = null;
    this[_el_30] = null;
    this[_compView_30] = null;
    this[_MaterialToggleComponent_30_5] = null;
    this[_el_31] = null;
    this[_el_32] = null;
    this[_el_33] = null;
    this[_compView_33] = null;
    this[_StatsComponent_33_5] = null;
    this[_el_34] = null;
    this[_compView_34] = null;
    this[_VisualizeWinningsComponent_34_5] = null;
    this[_el_35] = null;
    this[_el_36] = null;
    this[_el_38] = null;
    this[_compView_38] = null;
    this[_SettingsComponent_38_5] = null;
    this[__defaultPopupPositions_38_6] = null;
    this[__Window_38_7] = null;
    this[__DomService_38_8] = null;
    this[__AcxImperativeViewUtils_38_9] = null;
    this[__Document_38_10] = null;
    this[__DomRuler_38_11] = null;
    this[__ManagedZone_38_12] = null;
    this[__overlayContainerName_38_13] = null;
    this[__overlayContainerParent_38_14] = null;
    this[__overlayContainer_38_15] = null;
    this[__overlaySyncDom_38_16] = null;
    this[__overlayRepositionLoop_38_17] = null;
    this[__OverlayStyleConfig_38_18] = null;
    this[__ZIndexer_38_19] = null;
    this[__OverlayDomRenderService_38_20] = null;
    this[__OverlayService_38_21] = null;
    this[__DomPopupSourceFactory_38_22] = null;
    this[__Clock_38_23] = null;
    this[_el_39] = null;
    this[_el_40] = null;
    this[_el_42] = null;
    this[_compView_42] = null;
    this[_HelpComponent_42_5] = null;
    this[_el_43] = null;
    this[_el_44] = null;
    this[_el_46] = null;
    this[_compView_46] = null;
    this[_HelpComponent_46_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_9] = null;
    this[_expr_12] = null;
    this[_expr_18] = null;
    this[_expr_20] = null;
    lottery_simulator$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('lottery-simulator'));
    let t = lottery_simulator$46template.ViewAppComponent0._renderType;
    t == null ? lottery_simulator$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, lottery_simulator$46template.styles$AppComponent) : t;
    this.setupComponentType(lottery_simulator$46template.ViewAppComponent0._renderType);
  }).prototype = lottery_simulator$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(lottery_simulator$46template.ViewAppComponent0);
  dart.setMethodSignature(lottery_simulator$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(lottery_simulator$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(lottery_simulator$.AppComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_30_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setGetterSignature(lottery_simulator$46template.ViewAppComponent0, () => ({
    __proto__: dart.getGetters(lottery_simulator$46template.ViewAppComponent0.__proto__),
    [_defaultPopupPositions_9_6]: dart.fnType(core.List$(laminate__enums__alignment.RelativePosition), []),
    [_Window_9_7]: dart.fnType(dart.dynamic, []),
    [_DomService_9_8]: dart.fnType(dart.dynamic, []),
    [_AcxImperativeViewUtils_9_9]: dart.fnType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, []),
    [_Document_9_10]: dart.fnType(dart.dynamic, []),
    [_DomRuler_9_11]: dart.fnType(laminate__ruler__dom_ruler.DomRuler, []),
    [_ManagedZone_9_12]: dart.fnType(utils__angular__managed_zone__angular_2.Angular2ManagedZone, []),
    [_overlayContainerName_9_13]: dart.fnType(dart.dynamic, []),
    [_overlayContainerParent_9_14]: dart.fnType(dart.dynamic, []),
    [_overlayContainer_9_15]: dart.fnType(dart.dynamic, []),
    [_overlaySyncDom_9_16]: dart.fnType(core.bool, []),
    [_overlayRepositionLoop_9_17]: dart.fnType(core.bool, []),
    [_OverlayStyleConfig_9_18]: dart.fnType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, []),
    [_ZIndexer_9_19]: dart.fnType(laminate__overlay__zindexer.ZIndexer, []),
    [_OverlayDomRenderService_9_20]: dart.fnType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, []),
    [_OverlayService_9_21]: dart.fnType(src__laminate__overlay__overlay_service.OverlayService, []),
    [_DomPopupSourceFactory_9_22]: dart.fnType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory, []),
    [_Clock_9_23]: dart.fnType(time$.Clock, []),
    [_defaultPopupPositions_38_6]: dart.fnType(core.List$(laminate__enums__alignment.RelativePosition), []),
    [_Window_38_7]: dart.fnType(dart.dynamic, []),
    [_DomService_38_8]: dart.fnType(dart.dynamic, []),
    [_AcxImperativeViewUtils_38_9]: dart.fnType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, []),
    [_Document_38_10]: dart.fnType(dart.dynamic, []),
    [_DomRuler_38_11]: dart.fnType(laminate__ruler__dom_ruler.DomRuler, []),
    [_ManagedZone_38_12]: dart.fnType(utils__angular__managed_zone__angular_2.Angular2ManagedZone, []),
    [_overlayContainerName_38_13]: dart.fnType(dart.dynamic, []),
    [_overlayContainerParent_38_14]: dart.fnType(dart.dynamic, []),
    [_overlayContainer_38_15]: dart.fnType(dart.dynamic, []),
    [_overlaySyncDom_38_16]: dart.fnType(core.bool, []),
    [_overlayRepositionLoop_38_17]: dart.fnType(core.bool, []),
    [_OverlayStyleConfig_38_18]: dart.fnType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, []),
    [_ZIndexer_38_19]: dart.fnType(laminate__overlay__zindexer.ZIndexer, []),
    [_OverlayDomRenderService_38_20]: dart.fnType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, []),
    [_OverlayService_38_21]: dart.fnType(src__laminate__overlay__overlay_service.OverlayService, []),
    [_DomPopupSourceFactory_38_22]: dart.fnType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory, []),
    [_Clock_38_23]: dart.fnType(time$.Clock, [])
  }));
  dart.setFieldSignature(lottery_simulator$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(lottery_simulator$46template.ViewAppComponent0.__proto__),
    [_query_vis_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.Element),
    [_el_5]: dart.fieldType(html.DivElement),
    [_el_6]: dart.fieldType(html.Element),
    [_text_8]: dart.fieldType(html.Text),
    [_el_9]: dart.fieldType(html.Element),
    [_compView_9]: dart.fieldType(src__scores__scores$46template.ViewScoresComponent0),
    [_ScoresComponent_9_5]: dart.fieldType(src__scores__scores.ScoresComponent),
    [__defaultPopupPositions_9_6]: dart.fieldType(ListOfRelativePosition()),
    [__Window_9_7]: dart.fieldType(dart.dynamic),
    [__DomService_9_8]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_9_9]: dart.fieldType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils),
    [__Document_9_10]: dart.fieldType(dart.dynamic),
    [__DomRuler_9_11]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_9_12]: dart.fieldType(utils__angular__managed_zone__angular_2.Angular2ManagedZone),
    [__overlayContainerName_9_13]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_9_14]: dart.fieldType(dart.dynamic),
    [__overlayContainer_9_15]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_9_16]: dart.fieldType(core.bool),
    [__overlayRepositionLoop_9_17]: dart.fieldType(core.bool),
    [__OverlayStyleConfig_9_18]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_9_19]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_9_20]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_9_21]: dart.fieldType(src__laminate__overlay__overlay_service.OverlayService),
    [__DomPopupSourceFactory_9_22]: dart.fieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory),
    [__Clock_9_23]: dart.fieldType(time$.Clock),
    [_el_10]: dart.fieldType(html.DivElement),
    [_el_11]: dart.fieldType(html.DivElement),
    [_el_12]: dart.fieldType(html.Element),
    [_text_13]: dart.fieldType(html.Text),
    [_el_14]: dart.fieldType(html.DivElement),
    [_el_15]: dart.fieldType(html.Element),
    [_text_16]: dart.fieldType(html.Text),
    [_el_18]: dart.fieldType(html.DivElement),
    [_el_19]: dart.fieldType(html.Element),
    [_compView_19]: dart.fieldType(material_progress__material_progress$46template.ViewMaterialProgressComponent0),
    [_MaterialProgressComponent_19_5]: dart.fieldType(material_progress__material_progress.MaterialProgressComponent),
    [_el_20]: dart.fieldType(html.DivElement),
    [_el_21]: dart.fieldType(html.DivElement),
    [_el_22]: dart.fieldType(html.Element),
    [_compView_22]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_22_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_el_23]: dart.fieldType(html.Element),
    [_compView_23]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_23_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_el_24]: dart.fieldType(html.Element),
    [_compView_24]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_24_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_el_25]: dart.fieldType(html.Element),
    [_compView_25]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_25_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_el_26]: dart.fieldType(html.Element),
    [_compView_26]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_26_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_el_27]: dart.fieldType(html.Element),
    [_compView_27]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_27_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_el_28]: dart.fieldType(html.Element),
    [_compView_28]: dart.fieldType(material_button__material_fab$46template.ViewMaterialFabComponent0),
    [_MaterialFabComponent_28_5]: dart.fieldType(material_button__material_fab.MaterialFabComponent),
    [_el_29]: dart.fieldType(html.Element),
    [_compView_29]: dart.fieldType(material_icon__material_icon$46template.ViewMaterialIconComponent0),
    [_MaterialIconComponent_29_5]: dart.fieldType(material_icon__material_icon.MaterialIconComponent),
    [_el_30]: dart.fieldType(html.Element),
    [_compView_30]: dart.fieldType(material_toggle__material_toggle$46template.ViewMaterialToggleComponent0),
    [_MaterialToggleComponent_30_5]: dart.fieldType(material_toggle__material_toggle.MaterialToggleComponent),
    [_el_31]: dart.fieldType(html.DivElement),
    [_el_32]: dart.fieldType(html.DivElement),
    [_el_33]: dart.fieldType(html.Element),
    [_compView_33]: dart.fieldType(src__stats__stats$46template.ViewStatsComponent0),
    [_StatsComponent_33_5]: dart.fieldType(src__stats__stats.StatsComponent),
    [_el_34]: dart.fieldType(html.Element),
    [_compView_34]: dart.fieldType(src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0),
    [_VisualizeWinningsComponent_34_5]: dart.fieldType(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent),
    [_el_35]: dart.fieldType(html.DivElement),
    [_el_36]: dart.fieldType(html.Element),
    [_el_38]: dart.fieldType(html.Element),
    [_compView_38]: dart.fieldType(src__settings__settings_component$46template.ViewSettingsComponent0),
    [_SettingsComponent_38_5]: dart.fieldType(src__settings__settings_component.SettingsComponent),
    [__defaultPopupPositions_38_6]: dart.fieldType(ListOfRelativePosition()),
    [__Window_38_7]: dart.fieldType(dart.dynamic),
    [__DomService_38_8]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_38_9]: dart.fieldType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils),
    [__Document_38_10]: dart.fieldType(dart.dynamic),
    [__DomRuler_38_11]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_38_12]: dart.fieldType(utils__angular__managed_zone__angular_2.Angular2ManagedZone),
    [__overlayContainerName_38_13]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_38_14]: dart.fieldType(dart.dynamic),
    [__overlayContainer_38_15]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_38_16]: dart.fieldType(core.bool),
    [__overlayRepositionLoop_38_17]: dart.fieldType(core.bool),
    [__OverlayStyleConfig_38_18]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_38_19]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_38_20]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_38_21]: dart.fieldType(src__laminate__overlay__overlay_service.OverlayService),
    [__DomPopupSourceFactory_38_22]: dart.fieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory),
    [__Clock_38_23]: dart.fieldType(time$.Clock),
    [_el_39]: dart.fieldType(html.DivElement),
    [_el_40]: dart.fieldType(html.Element),
    [_el_42]: dart.fieldType(html.Element),
    [_compView_42]: dart.fieldType(src__help__help$46template.ViewHelpComponent0),
    [_HelpComponent_42_5]: dart.fieldType(src__help__help.HelpComponent),
    [_el_43]: dart.fieldType(html.DivElement),
    [_el_44]: dart.fieldType(html.Element),
    [_el_46]: dart.fieldType(html.Element),
    [_compView_46]: dart.fieldType(src__help__help$46template.ViewHelpComponent0),
    [_HelpComponent_46_5]: dart.fieldType(src__help__help.HelpComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.int),
    [_expr_2]: dart.fieldType(core.int),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(core.int),
    [_expr_6]: dart.fieldType(core.bool),
    [_expr_9]: dart.fieldType(core.bool),
    [_expr_12]: dart.fieldType(core.bool),
    [_expr_18]: dart.fieldType(core.bool),
    [_expr_20]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(lottery_simulator$46template.ViewAppComponent0, {
    /*lottery_simulator$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  lottery_simulator$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new lottery_simulator$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.fn(lottery_simulator$46template.viewFactory_AppComponent0, AppViewAndintToAppViewOfAppComponent());
  dart.defineLazy(lottery_simulator$46template, {
    /*lottery_simulator$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _Settings_0_5 = Symbol('_Settings_0_5');
  const _AppComponent_0_6 = Symbol('_AppComponent_0_6');
  const __defaultPopupPositions_0_7 = Symbol('__defaultPopupPositions_0_7');
  const __Window_0_8 = Symbol('__Window_0_8');
  const __DomService_0_9 = Symbol('__DomService_0_9');
  const __AcxImperativeViewUtils_0_10 = Symbol('__AcxImperativeViewUtils_0_10');
  const __Document_0_11 = Symbol('__Document_0_11');
  const __DomRuler_0_12 = Symbol('__DomRuler_0_12');
  const __ManagedZone_0_13 = Symbol('__ManagedZone_0_13');
  const __overlayContainerName_0_14 = Symbol('__overlayContainerName_0_14');
  const __overlayContainerParent_0_15 = Symbol('__overlayContainerParent_0_15');
  const __overlayContainer_0_16 = Symbol('__overlayContainer_0_16');
  const __overlaySyncDom_0_17 = Symbol('__overlaySyncDom_0_17');
  const __overlayRepositionLoop_0_18 = Symbol('__overlayRepositionLoop_0_18');
  const __OverlayStyleConfig_0_19 = Symbol('__OverlayStyleConfig_0_19');
  const __ZIndexer_0_20 = Symbol('__ZIndexer_0_20');
  const __OverlayDomRenderService_0_21 = Symbol('__OverlayDomRenderService_0_21');
  const __OverlayService_0_22 = Symbol('__OverlayService_0_22');
  const __DomPopupSourceFactory_0_23 = Symbol('__DomPopupSourceFactory_0_23');
  const __Clock_0_24 = Symbol('__Clock_0_24');
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  const _defaultPopupPositions_0_7 = Symbol('_defaultPopupPositions_0_7');
  const _Window_0_8 = Symbol('_Window_0_8');
  const _DomService_0_9 = Symbol('_DomService_0_9');
  const _AcxImperativeViewUtils_0_10 = Symbol('_AcxImperativeViewUtils_0_10');
  const _Document_0_11 = Symbol('_Document_0_11');
  const _DomRuler_0_12 = Symbol('_DomRuler_0_12');
  const _ManagedZone_0_13 = Symbol('_ManagedZone_0_13');
  let const$65;
  const _overlayContainerName_0_14 = Symbol('_overlayContainerName_0_14');
  let const$66;
  const _overlayContainerParent_0_15 = Symbol('_overlayContainerParent_0_15');
  let const$67;
  const _overlayContainer_0_16 = Symbol('_overlayContainer_0_16');
  const _overlaySyncDom_0_17 = Symbol('_overlaySyncDom_0_17');
  const _overlayRepositionLoop_0_18 = Symbol('_overlayRepositionLoop_0_18');
  const _OverlayStyleConfig_0_19 = Symbol('_OverlayStyleConfig_0_19');
  const _ZIndexer_0_20 = Symbol('_ZIndexer_0_20');
  const _OverlayDomRenderService_0_21 = Symbol('_OverlayDomRenderService_0_21');
  const _OverlayService_0_22 = Symbol('_OverlayService_0_22');
  const _DomPopupSourceFactory_0_23 = Symbol('_DomPopupSourceFactory_0_23');
  let const$68;
  const _Clock_0_24 = Symbol('_Clock_0_24');
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  lottery_simulator$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView {
    get [_defaultPopupPositions_0_7]() {
      if (this[__defaultPopupPositions_0_7] == null) {
        this[__defaultPopupPositions_0_7] = const$64 || (const$64 = dart.constList([const$51 || (const$51 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top center'}))), const$53 || (const$53 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top right', originX: const$52 || (const$52 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$55 || (const$55 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top left', originX: const$54 || (const$54 = dart.const(new laminate__enums__alignment.Alignment.new('Start', 'flex-start')))}))), const$57 || (const$57 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom center', originY: const$56 || (const$56 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$60 || (const$60 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom right', originX: const$58 || (const$58 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end'))), originY: const$59 || (const$59 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$63 || (const$63 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom left', originX: const$61 || (const$61 = dart.const(new laminate__enums__alignment.Alignment.new('Start', 'flex-start'))), originY: const$62 || (const$62 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))})))], laminate__enums__alignment.RelativePosition));
      }
      return this[__defaultPopupPositions_0_7];
    }
    get [_Window_0_8]() {
      if (this[__Window_0_8] == null) {
        this[__Window_0_8] = utils__browser__window__module.getWindow();
      }
      return this[__Window_0_8];
    }
    get [_DomService_0_9]() {
      if (this[__DomService_0_9] == null) {
        this[__DomService_0_9] = utils__browser__dom_service__angular_2.createDomService(utils__browser__dom_service__dom_service.DomService._check(this.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex, null)), utils__disposer__disposer.Disposer._check(this.injectorGet(dart.wrapType(utils__disposer__disposer.Disposer), this.viewData.parentIndex, null)), src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), html.Window._check(this[_Window_0_8]));
      }
      return this[__DomService_0_9];
    }
    get [_AcxImperativeViewUtils_0_10]() {
      if (this[__AcxImperativeViewUtils_0_10] == null) {
        this[__AcxImperativeViewUtils_0_10] = new utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils.new(src__core__linker__component_loader.ComponentLoader._check(this.injectorGet(dart.wrapType(src__core__linker__component_loader.ComponentLoader), this.viewData.parentIndex)), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_9]));
      }
      return this[__AcxImperativeViewUtils_0_10];
    }
    get [_Document_0_11]() {
      if (this[__Document_0_11] == null) {
        this[__Document_0_11] = utils__browser__window__module.getDocument();
      }
      return this[__Document_0_11];
    }
    get [_DomRuler_0_12]() {
      if (this[__DomRuler_0_12] == null) {
        this[__DomRuler_0_12] = laminate__ruler__dom_ruler.DomRuler.new(html.Document._check(this[_Document_0_11]), utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_9]));
      }
      return this[__DomRuler_0_12];
    }
    get [_ManagedZone_0_13]() {
      if (this[__ManagedZone_0_13] == null) {
        this[__ManagedZone_0_13] = new utils__angular__managed_zone__angular_2.Angular2ManagedZone.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)));
      }
      return this[__ManagedZone_0_13];
    }
    get [_overlayContainerName_0_14]() {
      if (this[__overlayContainerName_0_14] == null) {
        this[__overlayContainerName_0_14] = laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$65 || (const$65 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_14];
    }
    get [_overlayContainerParent_0_15]() {
      if (this[__overlayContainerParent_0_15] == null) {
        this[__overlayContainerParent_0_15] = laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_11]), this.injectorGet(const$66 || (const$66 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerParent'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_15];
    }
    get [_overlayContainer_0_16]() {
      if (this[__overlayContainer_0_16] == null) {
        this[__overlayContainer_0_16] = laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_14]), html.HtmlElement._check(this[_overlayContainerParent_0_15]), this.injectorGet(const$67 || (const$67 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainer_0_16];
    }
    get [_overlaySyncDom_0_17]() {
      if (this[__overlaySyncDom_0_17] == null) {
        this[__overlaySyncDom_0_17] = true;
      }
      return this[__overlaySyncDom_0_17];
    }
    get [_overlayRepositionLoop_0_18]() {
      if (this[__overlayRepositionLoop_0_18] == null) {
        this[__overlayRepositionLoop_0_18] = true;
      }
      return this[__overlayRepositionLoop_0_18];
    }
    get [_OverlayStyleConfig_0_19]() {
      if (this[__OverlayStyleConfig_0_19] == null) {
        this[__OverlayStyleConfig_0_19] = new src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig.new(html.Document._check(this[_Document_0_11]));
      }
      return this[__OverlayStyleConfig_0_19];
    }
    get [_ZIndexer_0_20]() {
      if (this[__ZIndexer_0_20] == null) {
        this[__ZIndexer_0_20] = laminate__overlay__zindexer.ZIndexer.new();
      }
      return this[__ZIndexer_0_20];
    }
    get [_OverlayDomRenderService_0_21]() {
      if (this[__OverlayDomRenderService_0_21] == null) {
        this[__OverlayDomRenderService_0_21] = new src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService.new(this[_OverlayStyleConfig_0_19], html.HtmlElement._check(this[_overlayContainer_0_16]), core.String._check(this[_overlayContainerName_0_14]), this[_DomRuler_0_12], utils__browser__dom_service__dom_service.DomService._check(this[_DomService_0_9]), this[_AcxImperativeViewUtils_0_10], this[_overlaySyncDom_0_17], this[_overlayRepositionLoop_0_18], this[_ZIndexer_0_20]);
      }
      return this[__OverlayDomRenderService_0_21];
    }
    get [_OverlayService_0_22]() {
      if (this[__OverlayService_0_22] == null) {
        this[__OverlayService_0_22] = new src__laminate__overlay__overlay_service.OverlayService.new(src__core__zone__ng_zone.NgZone._check(this.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_overlaySyncDom_0_17], this[_OverlayDomRenderService_0_21], src__laminate__overlay__overlay_service.OverlayService._check(this.injectorGet(dart.wrapType(src__laminate__overlay__overlay_service.OverlayService), this.viewData.parentIndex, null)));
      }
      return this[__OverlayService_0_22];
    }
    get [_DomPopupSourceFactory_0_23]() {
      if (this[__DomPopupSourceFactory_0_23] == null) {
        this[__DomPopupSourceFactory_0_23] = new src__laminate__popup__dom_popup_source.DomPopupSourceFactory.new(this[_DomRuler_0_12]);
      }
      return this[__DomPopupSourceFactory_0_23];
    }
    get [_Clock_0_24]() {
      if (this[__Clock_0_24] == null) {
        this[__Clock_0_24] = const$68 || (const$68 = dart.const(new time$.Clock.new()));
      }
      return this[__Clock_0_24];
    }
    build() {
      this[_compView_0] = new lottery_simulator$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_Settings_0_5] = new src__settings__settings.Settings.new();
      this[_AppComponent_0_6] = new lottery_simulator$.AppComponent.new(this[_Settings_0_5]);
      this[_compView_0].create(this[_AppComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__settings__settings.Settings) && 0 === nodeIndex) {
        return this[_Settings_0_5];
      }
      if (token === (const$69 || (const$69 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions')))) && 0 === nodeIndex) {
        return this[_defaultPopupPositions_0_7];
      }
      if (token === dart.wrapType(html.Window) && 0 === nodeIndex) {
        return this[_Window_0_8];
      }
      if (token === dart.wrapType(utils__browser__dom_service__dom_service.DomService) && 0 === nodeIndex) {
        return this[_DomService_0_9];
      }
      if (token === dart.wrapType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils) && 0 === nodeIndex) {
        return this[_AcxImperativeViewUtils_0_10];
      }
      if (token === dart.wrapType(html.Document) && 0 === nodeIndex) {
        return this[_Document_0_11];
      }
      if (token === dart.wrapType(laminate__ruler__dom_ruler.DomRuler) && 0 === nodeIndex) {
        return this[_DomRuler_0_12];
      }
      if (token === dart.wrapType(src__utils__angular__managed_zone__managed_zone.ManagedZone) && 0 === nodeIndex) {
        return this[_ManagedZone_0_13];
      }
      if (token === (const$70 || (const$70 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName')))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_14];
      }
      if (token === (const$71 || (const$71 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerParent')))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_15];
      }
      if (token === (const$72 || (const$72 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer')))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_16];
      }
      if (token === (const$73 || (const$73 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlaySyncDom')))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_17];
      }
      if (token === (const$74 || (const$74 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop')))) && 0 === nodeIndex) {
        return this[_overlayRepositionLoop_0_18];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig) && 0 === nodeIndex) {
        return this[_OverlayStyleConfig_0_19];
      }
      if (token === dart.wrapType(laminate__overlay__zindexer.ZIndexer) && 0 === nodeIndex) {
        return this[_ZIndexer_0_20];
      }
      if (token === dart.wrapType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService) && 0 === nodeIndex) {
        return this[_OverlayDomRenderService_0_21];
      }
      if (token === dart.wrapType(src__laminate__overlay__overlay_service.OverlayService) && 0 === nodeIndex) {
        return this[_OverlayService_0_22];
      }
      if (token === dart.wrapType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory) && 0 === nodeIndex) {
        return this[_DomPopupSourceFactory_0_23];
      }
      if ((token === dart.wrapType(time$.Clock) || token === (const$75 || (const$75 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))))) && 0 === nodeIndex) {
        return this[_Clock_0_24];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_AppComponent_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (lottery_simulator$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_Settings_0_5] = null;
    this[_AppComponent_0_6] = null;
    this[__defaultPopupPositions_0_7] = null;
    this[__Window_0_8] = null;
    this[__DomService_0_9] = null;
    this[__AcxImperativeViewUtils_0_10] = null;
    this[__Document_0_11] = null;
    this[__DomRuler_0_12] = null;
    this[__ManagedZone_0_13] = null;
    this[__overlayContainerName_0_14] = null;
    this[__overlayContainerParent_0_15] = null;
    this[__overlayContainer_0_16] = null;
    this[__overlaySyncDom_0_17] = null;
    this[__overlayRepositionLoop_0_18] = null;
    this[__OverlayStyleConfig_0_19] = null;
    this[__ZIndexer_0_20] = null;
    this[__OverlayDomRenderService_0_21] = null;
    this[__OverlayService_0_22] = null;
    this[__DomPopupSourceFactory_0_23] = null;
    this[__Clock_0_24] = null;
    lottery_simulator$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = lottery_simulator$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(lottery_simulator$46template._ViewAppComponentHost0);
  dart.setMethodSignature(lottery_simulator$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(lottery_simulator$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(lottery_simulator$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getGetters(lottery_simulator$46template._ViewAppComponentHost0.__proto__),
    [_defaultPopupPositions_0_7]: dart.fnType(core.List$(laminate__enums__alignment.RelativePosition), []),
    [_Window_0_8]: dart.fnType(dart.dynamic, []),
    [_DomService_0_9]: dart.fnType(dart.dynamic, []),
    [_AcxImperativeViewUtils_0_10]: dart.fnType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils, []),
    [_Document_0_11]: dart.fnType(dart.dynamic, []),
    [_DomRuler_0_12]: dart.fnType(laminate__ruler__dom_ruler.DomRuler, []),
    [_ManagedZone_0_13]: dart.fnType(utils__angular__managed_zone__angular_2.Angular2ManagedZone, []),
    [_overlayContainerName_0_14]: dart.fnType(dart.dynamic, []),
    [_overlayContainerParent_0_15]: dart.fnType(dart.dynamic, []),
    [_overlayContainer_0_16]: dart.fnType(dart.dynamic, []),
    [_overlaySyncDom_0_17]: dart.fnType(core.bool, []),
    [_overlayRepositionLoop_0_18]: dart.fnType(core.bool, []),
    [_OverlayStyleConfig_0_19]: dart.fnType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig, []),
    [_ZIndexer_0_20]: dart.fnType(laminate__overlay__zindexer.ZIndexer, []),
    [_OverlayDomRenderService_0_21]: dart.fnType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService, []),
    [_OverlayService_0_22]: dart.fnType(src__laminate__overlay__overlay_service.OverlayService, []),
    [_DomPopupSourceFactory_0_23]: dart.fnType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory, []),
    [_Clock_0_24]: dart.fnType(time$.Clock, [])
  }));
  dart.setFieldSignature(lottery_simulator$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(lottery_simulator$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(lottery_simulator$46template.ViewAppComponent0),
    [_Settings_0_5]: dart.fieldType(src__settings__settings.Settings),
    [_AppComponent_0_6]: dart.fieldType(lottery_simulator$.AppComponent),
    [__defaultPopupPositions_0_7]: dart.fieldType(ListOfRelativePosition()),
    [__Window_0_8]: dart.fieldType(dart.dynamic),
    [__DomService_0_9]: dart.fieldType(dart.dynamic),
    [__AcxImperativeViewUtils_0_10]: dart.fieldType(utils__angular__imperative_view__imperative_view.AcxImperativeViewUtils),
    [__Document_0_11]: dart.fieldType(dart.dynamic),
    [__DomRuler_0_12]: dart.fieldType(laminate__ruler__dom_ruler.DomRuler),
    [__ManagedZone_0_13]: dart.fieldType(utils__angular__managed_zone__angular_2.Angular2ManagedZone),
    [__overlayContainerName_0_14]: dart.fieldType(dart.dynamic),
    [__overlayContainerParent_0_15]: dart.fieldType(dart.dynamic),
    [__overlayContainer_0_16]: dart.fieldType(dart.dynamic),
    [__overlaySyncDom_0_17]: dart.fieldType(core.bool),
    [__overlayRepositionLoop_0_18]: dart.fieldType(core.bool),
    [__OverlayStyleConfig_0_19]: dart.fieldType(src__laminate__overlay__render__overlay_style_config.OverlayStyleConfig),
    [__ZIndexer_0_20]: dart.fieldType(laminate__overlay__zindexer.ZIndexer),
    [__OverlayDomRenderService_0_21]: dart.fieldType(src__laminate__overlay__render__overlay_dom_render_service.OverlayDomRenderService),
    [__OverlayService_0_22]: dart.fieldType(src__laminate__overlay__overlay_service.OverlayService),
    [__DomPopupSourceFactory_0_23]: dart.fieldType(src__laminate__popup__dom_popup_source.DomPopupSourceFactory),
    [__Clock_0_24]: dart.fieldType(time$.Clock)
  }));
  lottery_simulator$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new lottery_simulator$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(lottery_simulator$46template.viewFactory_AppComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(lottery_simulator$46template, {
    /*lottery_simulator$46template.AppComponentNgFactory*/get AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new('lottery-simulator', lottery_simulator$46template.viewFactory_AppComponentHost0, lottery_simulator$46template._AppComponentMetadata));
    },
    /*lottery_simulator$46template._AppComponentMetadata*/get _AppComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*lottery_simulator$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  lottery_simulator$46template.initReflector = function() {
    if (dart.test(lottery_simulator$46template._visited)) {
      return;
    }
    lottery_simulator$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(lottery_simulator$.AppComponent), lottery_simulator$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
    src__help__help$46template.initReflector();
    src__scores__scores$46template.initReflector();
    src__settings__settings$46template.initReflector();
    src__settings__settings_component$46template.initReflector();
    src__stats__stats$46template.initReflector();
    src__visualize_winnings__visualize_winnings$46template.initReflector();
  };
  dart.fn(lottery_simulator$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/components_codelab/lottery_simulator.template.ddc", {
    "package:components_codelab/lottery_simulator.template.dart": lottery_simulator$46template
  }, '{"version":3,"sourceRoot":"","sources":["lottery_simulator.template.dart"],"names":[],"mappings":";;;;QA6cc,IAAO;;;;QAjY4B,8BAAO;;;;QA8HpC,iCAAQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;uFAmQd,IAAO;;;;;;;;;;MAjYD,gDAAmB;YAAG,iBAAO,AAAQ,8BAAD,OAAO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkI3D,UAAK,iCAAgC,IAAI,MAAO;AAC9C,QAAC,iCAA2B,GAAG,wCAAO,mCAAM,+CAAwB,mBAAkB,kBAAe,qCAAM,+CAAwB,mBAAkB,sBAAsB,qCAAM,wCAAiB,CAAC,OAAO,mBAAc,qCAAM,+CAAwB,mBAAkB,qBAAqB,qCAAM,wCAAiB,CAAC,SAAS,qBAAgB,qCAAM,+CAAwB,mBAAkB,0BAA0B,qCAAM,wCAAiB,CAAC,OAAO,mBAAc,qCAAM,+CAAwB,mBAAkB,yBAAyB,qCAAM,wCAAiB,CAAC,OAAO,wBAAsB,qCAAM,wCAAiB,CAAC,OAAO,mBAAc,uCAAM,+CAAwB,mBAAkB,wBAAwB,qCAAM,wCAAiB,CAAC,SAAS,0BAAwB,uCAAM,wCAAiB,CAAC,OAAO;;AAElxB,YAAO,kCAAgC;IACzC;;AAGE,UAAK,kBAAiB,IAAI,MAAO;AAC/B,QAAC,kBAAY,GAAG,AAAS,wCAAS;;AAEpC,YAAO,mBAAiB;IAC1B;;AAGE,UAAK,sBAAqB,IAAI,MAAO;AACnC,QAAC,sBAAgB,GAAG,AAAS,uDAAgB,4DAAC,eAAe,YAAY,CAAU,kEAAU,EAAE,aAAa,YAAY,EAAE,kDAAO,eAAe,YAAY,CAAU,iDAAQ,EAAE,aAAa,YAAY,EAAE,+CAAO,eAAe,YAAY,CAAU,8CAAM,EAAE,aAAa,YAAY,IAAG,AAgPnR,IAAO,eAhP4Q,iBAAgB;;AAE7S,YAAO,uBAAqB;IAC9B;;AAGE,UAAK,kCAAiC,IAAI,MAAO;AAC/C,QAAC,kCAA4B,GAAG,IAAI,2EAA8B,4DAAC,eAAe,YAAY,CAAU,kEAAe,EAAE,aAAa,YAAY,+DAAG,qBAAoB;;AAE3K,YAAO,mCAAiC;IAC1C;;AAGE,UAAK,qBAAoB,IAAI,MAAO;AAClC,QAAC,qBAAe,GAAG,AAAS,0CAAW;;AAEzC,YAAO,sBAAoB;IAC7B;;AAGE,UAAK,qBAAoB,IAAI,MAAO;AAClC,QAAC,qBAAe,GAAG,AAAI,uCAAgB,CAAC,AA2NhC,IAAO,iBA3NyB,oBAAmB,8DAAE,qBAAoB;;AAEnF,YAAO,sBAAoB;IAC7B;;AAGE,UAAK,wBAAuB,IAAI,MAAO;AACrC,QAAC,wBAAkB,GAAG,IAAI,+DAA4B,wCAAC,eAAe,YAAY,CAAU,8CAAM,EAAE,aAAa,YAAY;;AAE/H,YAAO,yBAAuB;IAChC;;AAGE,UAAK,iCAAgC,IAAI,MAAO;AAC9C,QAAC,iCAA2B,GAAG,AAAS,iDAAuB,CAAC,eAAe,YAAY,CAAC,uCAAM,2CAAoB,CAAC,2BAAyB,aAAa,YAAY,EAAE;;AAE7K,YAAO,kCAAgC;IACzC;;AAGE,UAAK,mCAAkC,IAAI,MAAO;AAChD,QAAC,mCAA6B,GAAG,AAAS,mDAAyB,CAAC,AAsM5D,IAAO,iBAtMqD,oBAAmB,GAAE,eAAe,YAAY,CAAC,uCAAM,2CAAoB,CAAC,6BAA2B,aAAa,YAAY,EAAE;;AAExM,YAAO,oCAAkC;IAC3C;;AAGE,UAAK,6BAA4B,IAAI,MAAO;AAC1C,QAAC,6BAAuB,GAAG,AAAS,6CAAmB,oBAAC,gCAA+B,GAAE,AA+LjF,IAAO,oBA/L0E,kCAAiC,GAAE,eAAe,YAAY,CAAC,uCAAM,2CAAoB,CAAC,uBAAqB,aAAa,YAAY,EAAE;;AAErO,YAAO,8BAA4B;IACrC;;AAGE,UAAK,2BAA0B,IAAI,MAAO;AACxC,QAAC,2BAAqB,GAAG;;AAE3B,YAAO,4BAA0B;IACnC;;AAGE,UAAK,kCAAiC,IAAI,MAAO;AAC/C,QAAC,kCAA4B,GAAG;;AAElC,YAAO,mCAAiC;IAC1C;;AAGE,UAAK,+BAA8B,IAAI,MAAO;AAC5C,QAAC,+BAAyB,GAAG,IAAI,2EAA2B,CAAC,AA0KrD,IAAO,iBA1K8C,oBAAmB;;AAElF,YAAO,gCAA8B;IACvC;;AAGE,UAAK,qBAAoB,IAAI,MAAO;AAClC,QAAC,qBAAe,GAAG,AAAI,wCAAiB;;AAE1C,YAAO,sBAAoB;IAC7B;;AAGE,UAAK,oCAAmC,IAAI,MAAO;AACjD,QAAC,oCAA8B,GAAG,IAAI,sFAAgC,CAAC,8BAA6B,EAAE,AA4J9F,IAAO,oBA5JuF,4BAA2B,sBAAE,gCAA+B,GAAE,oBAAmB,6DAAE,qBAAoB,GAAE,iCAAgC,EAAE,0BAAyB,EAAE,iCAAgC,EAAE,oBAAmB;;AAEnU,YAAO,qCAAmC;IAC5C;;AAGE,UAAK,2BAA0B,IAAI,MAAO;AACxC,QAAC,2BAAqB,GAAG,IAAI,0DAAuB,wCAAC,eAAe,YAAY,CAAU,8CAAM,EAAE,aAAa,YAAY,IAAG,0BAAyB,EAAE,mCAAkC,gEAAE,eAAe,YAAY,CAAU,qEAAc,EAAE,aAAa,YAAY,EAAE;;AAE/Q,YAAO,4BAA0B;IACnC;;AAGE,UAAK,kCAAiC,IAAI,MAAO;AAC/C,QAAC,kCAA4B,GAAG,IAAI,gEAA8B,CAAC,oBAAmB;;AAExF,YAAO,mCAAiC;IAC1C;;AAGE,UAAK,kBAAiB,IAAI,MAAO;AAC/B,QAAC,kBAAY,GAAG,uCAAM,eAAc;;AAEtC,YAAO,mBAAiB;IAC1B;;AAGE,UAAK,kCAAiC,IAAI,MAAO;AAC/C,QAAC,kCAA4B,GAAG,wCAAO,uCAAM,+CAAwB,mBAAkB,kBAAe,uCAAM,+CAAwB,mBAAkB,sBAAsB,uCAAM,wCAAiB,CAAC,OAAO,mBAAc,uCAAM,+CAAwB,mBAAkB,qBAAqB,uCAAM,wCAAiB,CAAC,SAAS,qBAAgB,uCAAM,+CAAwB,mBAAkB,0BAA0B,uCAAM,wCAAiB,CAAC,OAAO,mBAAc,uCAAM,+CAAwB,mBAAkB,yBAAyB,uCAAM,wCAAiB,CAAC,OAAO,wBAAsB,uCAAM,wCAAiB,CAAC,OAAO,mBAAc,uCAAM,+CAAwB,mBAAkB,wBAAwB,uCAAM,wCAAiB,CAAC,SAAS,0BAAwB,uCAAM,wCAAiB,CAAC,OAAO;;AAEnxB,YAAO,mCAAiC;IAC1C;;AAGE,UAAK,mBAAkB,IAAI,MAAO;AAChC,QAAC,mBAAa,GAAG,AAAS,wCAAS;;AAErC,YAAO,oBAAkB;IAC3B;;AAGE,UAAK,uBAAsB,IAAI,MAAO;AACpC,QAAC,uBAAiB,GAAG,AAAS,uDAAgB,4DAAC,eAAe,YAAY,CAAU,kEAAU,EAAE,aAAa,YAAY,EAAE,kDAAO,eAAe,YAAY,CAAU,iDAAQ,EAAE,aAAa,YAAY,EAAE,+CAAO,eAAe,YAAY,CAAU,8CAAM,EAAE,aAAa,YAAY,IAAG,AAkHpR,IAAO,eAlH6Q,kBAAiB;;AAE/S,YAAO,wBAAsB;IAC/B;;AAGE,UAAK,mCAAkC,IAAI,MAAO;AAChD,QAAC,mCAA6B,GAAG,IAAI,2EAA8B,4DAAC,eAAe,YAAY,CAAU,kEAAe,EAAE,aAAa,YAAY,+DAAG,sBAAqB;;AAE7K,YAAO,oCAAkC;IAC3C;;AAGE,UAAK,sBAAqB,IAAI,MAAO;AACnC,QAAC,sBAAgB,GAAG,AAAS,0CAAW;;AAE1C,YAAO,uBAAqB;IAC9B;;AAGE,UAAK,sBAAqB,IAAI,MAAO;AACnC,QAAC,sBAAgB,GAAG,AAAI,uCAAgB,CAAC,AA6FjC,IAAO,iBA7F0B,qBAAoB,8DAAE,sBAAqB;;AAEtF,YAAO,uBAAqB;IAC9B;;AAGE,UAAK,yBAAwB,IAAI,MAAO;AACtC,QAAC,yBAAmB,GAAG,IAAI,+DAA4B,wCAAC,eAAe,YAAY,CAAU,8CAAM,EAAE,aAAa,YAAY;;AAEhI,YAAO,0BAAwB;IACjC;;AAGE,UAAK,kCAAiC,IAAI,MAAO;AAC/C,QAAC,kCAA4B,GAAG,AAAS,iDAAuB,CAAC,eAAe,YAAY,CAAC,uCAAM,2CAAoB,CAAC,2BAAyB,aAAa,YAAY,EAAE;;AAE9K,YAAO,mCAAiC;IAC1C;;AAGE,UAAK,oCAAmC,IAAI,MAAO;AACjD,QAAC,oCAA8B,GAAG,AAAS,mDAAyB,CAAC,AAwE7D,IAAO,iBAxEsD,qBAAoB,GAAE,eAAe,YAAY,CAAC,uCAAM,2CAAoB,CAAC,6BAA2B,aAAa,YAAY,EAAE;;AAE1M,YAAO,qCAAmC;IAC5C;;AAGE,UAAK,8BAA6B,IAAI,MAAO;AAC3C,QAAC,8BAAwB,GAAG,AAAS,6CAAmB,oBAAC,iCAAgC,GAAE,AAiEnF,IAAO,oBAjE4E,mCAAkC,GAAE,eAAe,YAAY,CAAC,uCAAM,2CAAoB,CAAC,uBAAqB,aAAa,YAAY,EAAE;;AAExO,YAAO,+BAA6B;IACtC;;AAGE,UAAK,4BAA2B,IAAI,MAAO;AACzC,QAAC,4BAAsB,GAAG;;AAE5B,YAAO,6BAA2B;IACpC;;AAGE,UAAK,mCAAkC,IAAI,MAAO;AAChD,QAAC,mCAA6B,GAAG;;AAEnC,YAAO,oCAAkC;IAC3C;;AAGE,UAAK,gCAA+B,IAAI,MAAO;AAC7C,QAAC,gCAA0B,GAAG,IAAI,2EAA2B,CAAC,AA4CtD,IAAO,iBA5C+C,qBAAoB;;AAEpF,YAAO,iCAA+B;IACxC;;AAGE,UAAK,sBAAqB,IAAI,MAAO;AACnC,QAAC,sBAAgB,GAAG,AAAI,wCAAiB;;AAE3C,YAAO,uBAAqB;IAC9B;;AAGE,UAAK,qCAAoC,IAAI,MAAO;AAClD,QAAC,qCAA+B,GAAG,IAAI,sFAAgC,CAAC,+BAA8B,EAAE,AA8BhG,IAAO,oBA9ByF,6BAA4B,sBAAE,iCAAgC,GAAE,qBAAoB,6DAAE,sBAAqB,GAAE,kCAAiC,EAAE,2BAA0B,EAAE,kCAAiC,EAAE,qBAAoB;;AAE7U,YAAO,sCAAoC;IAC7C;;AAGE,UAAK,4BAA2B,IAAI,MAAO;AACzC,QAAC,4BAAsB,GAAG,IAAI,0DAAuB,wCAAC,eAAe,YAAY,CAAU,8CAAM,EAAE,aAAa,YAAY,IAAG,2BAA0B,EAAE,oCAAmC,gEAAE,eAAe,YAAY,CAAU,qEAAc,EAAE,aAAa,YAAY,EAAE;;AAElR,YAAO,6BAA2B;IACpC;;AAGE,UAAK,mCAAkC,IAAI,MAAO;AAChD,QAAC,mCAA6B,GAAG,IAAI,gEAA8B,CAAC,qBAAoB;;AAE1F,YAAO,oCAAkC;IAC3C;;AAGE,UAAK,mBAAkB,IAAI,MAAO;AAChC,QAAC,mBAAa,GAAG,uCAAM,eAAc;;AAEvC,YAAO,oBAAkB;IAC3B;;AAIE,UAAM,UAAU,WAAM;AACtB,UAA0B,mBAAmB,iBAAY,CAAC,OAAO;AACjE,UAAI,MAAM,AAAQ,IAAD,SAAS;AAC1B,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,MAAM,gBAAgB;AACnD,mBAAQ,CAAC,WAAK;AACd,UAAa,UAHH,AAGa,AAAI,IAHV,SAGsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AAChD,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,KAAK,WAAK;AACvC,mBAAQ,CAAC,WAAK;AACd,UAAa,UAVH,AAUa,AAAI,IAVV,SAUsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,iBAAK,GAAG,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AAChD,mBAAQ,CAAC,WAAK;AACd,iBAAK,GAAG,2CAAe,CAAC,GAAG,EAAE,MAAM,WAAK;AACxC,mBAAQ,CAAC,WAAK;AACd,UAAa,UAhBH,AAgBa,AAAI,IAhBV,SAgBsB,CAAC;AACxC,iBAAK,SAAO,CAAC,OAAO;AACpB,mBAAO,GAlBG,AAkBA,AAAI,IAlBG,SAkBS,CAAC;AAC3B,iBAAK,SAAO,CAAC,aAAO;AACpB,uBAAW,GAAG,IAAI,uDAA4B,CAAC,MAAM;AACrD,iBAAK,GAAG,iBAAW,OAAO;AAC1B,iBAAK,SAAO,CAAC,WAAK;AAClB,iBAAK,UAAU,GAAG;AAClB,mBAAQ,CAxBE,AAwBD,IAxBQ,oBAwBR,WAAK;AACd,gCAAoB,GAAG,IAAI,uCAAuB;AAClD,uBAAW,OAAO,CAAC,0BAAoB,EAAE;AACzC,kBAAM,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACtC,kBAAM,UAAU,GAAG;AACnB,mBAAQ,CAAC,YAAM;AACf,kBAAM,GAAG,8CAAkB,CAAC,GAAG,EAAE,YAAM;AACvC,kBAAM,UAAU,GAAG;AACnB,mBAAQ,CAAC,YAAM;AACf,kBAAM,GAAG,+CAAmB,CAAC,GAAG,EAAE,YAAM;AACxC,mBAAQ,CAAC,YAAM;AACf,oBAAQ,GAnCE,AAmCC,AAAI,IAnCE,SAmCU,CAAC;AAC5B,kBAAM,SAAO,CAAC,cAAQ;AACtB,kBAAM,GAAG,8CAAkB,CAAC,GAAG,EAAE,YAAM;AACvC,kBAAM,UAAU,GAAG;AACnB,mBAAQ,CAAC,YAAM;AACf,kBAAM,GAAG,+CAAmB,CAAC,GAAG,EAAE,YAAM;AACxC,mBAAQ,CAAC,YAAM;AACf,oBAAQ,GA1CE,AA0CC,AAAI,IA1CE,SA0CU,CAAC;AAC5B,kBAAM,SAAO,CAAC,cAAQ;AACtB,UAAa,WA5CH,AA4Cc,AAAI,IA5CX,SA4CuB,CAAC;AACzC,kBAAM,SAAO,CAAC,QAAQ;AACtB,kBAAM,GAAG,8CAAkB,CAAC,GAAG,EAAE,YAAM;AACvC,kBAAM,UAAU,GAAG;AACnB,mBAAQ,CAAC,YAAM;AACf,wBAAY,GAAG,IAAI,kFAAuC,CAAC,MAAM;AACjE,kBAAM,GAAG,kBAAY,OAAO;AAC5B,iBAAK,SAAO,CAAC,YAAM;AACnB,kBAAM,UAAU,GAAG;AACnB,mBAAQ,CArDE,AAqDD,IArDQ,oBAqDR,YAAM;AACf,2CAA+B,GAAG,IAAI,kEAAkC,CAAC,MAAM,kBAAY,IAAI,EAtDrF,AAsDuF,IAtDhF,oBAsDgF,YAAM;AACvG,wBAAY,OAAO,CAAC,qCAA+B,EAAE;AACrD,kBAAM,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACtC,kBAAM,UAAU,GAAG;AACnB,mBAAQ,CAAC,YAAM;AACf,kBAAM,GAAG,8CAAkB,CAAC,GAAG,EAAE,YAAM;AACvC,kBAAM,UAAU,GAAG;AACnB,mBAAQ,CAAC,YAAM;AACf,wBAAY,GAAG,IAAI,sEAAkC,CAAC,MAAM;AAC5D,kBAAM,GAAG,kBAAY,OAAO;AAC5B,kBAAM,SAAO,CAAC,YAAM;AACpB,qBAAU,CAAC,YAAM,EAAE,cAAc;AACjC,qBAAU,CAAC,YAAM,EAAE,MAAM;AACzB,qBAAU,CAAC,YAAM,EAAE,UAAU;AAC7B,mBAAQ,CApEE,AAoED,IApEQ,oBAoER,YAAM;AACf,sCAA0B,GAAG,IAAI,sDAA6B,CArEpD,AAqEqD,IArE9C,oBAqE8C,YAAM,GAAE,kBAAY,IAAI;AACvF,wBAAY,GAAG,IAAI,sEAAmC,CAAC,MAAM;AAC7D,kBAAM,GAAG,kBAAY,OAAO;AAC5B,qBAAU,CAAC,YAAM,EAAE,QAAQ;AAC3B,mBAAQ,CAzEE,AAyED,IAzEQ,oBAyER,YAAM;AACf,uCAA2B,GAAG,IAAI,sDAA8B,CA1EtD,AA0EuD,IA1EhD,oBA0EgD,YAAM;AACvE,wBAAY,OAAO,CAAC,iCAA2B,EAAE;AACjD,wBAAY,OAAO,CAAC,gCAA0B,EAAE,CAC9C,uBAAC,YAAM;AAET,wBAAY,GAAG,IAAI,sEAAkC,CAAC,MAAM;AAC5D,kBAAM,GAAG,kBAAY,OAAO;AAC5B,kBAAM,SAAO,CAAC,YAAM;AACpB,qBAAU,CAAC,YAAM,EAAE,cAAc;AACjC,qBAAU,CAAC,YAAM,EAAE,QAAQ;AAC3B,qBAAU,CAAC,YAAM,EAAE,UAAU;AAC7B,mBAAQ,CArFE,AAqFD,IArFQ,oBAqFR,YAAM;AACf,sCAA0B,GAAG,IAAI,sDAA6B,CAtFpD,AAsFqD,IAtF9C,oBAsF8C,YAAM,GAAE,kBAAY,IAAI;AACvF,wBAAY,GAAG,IAAI,sEAAmC,CAAC,MAAM;AAC7D,kBAAM,GAAG,kBAAY,OAAO;AAC5B,qBAAU,CAAC,YAAM,EAAE,QAAQ;AAC3B,mBAAQ,CA1FE,AA0FD,IA1FQ,oBA0FR,YAAM;AACf,uCAA2B,GAAG,IAAI,sDAA8B,CA3FtD,AA2FuD,IA3FhD,oBA2FgD,YAAM;AACvE,wBAAY,OAAO,CAAC,iCAA2B,EAAE;AACjD,wBAAY,OAAO,CAAC,gCAA0B,EAAE,CAC9C,uBAAC,YAAM;AAET,wBAAY,GAAG,IAAI,sEAAkC,CAAC,MAAM;AAC5D,kBAAM,GAAG,kBAAY,OAAO;AAC5B,kBAAM,SAAO,CAAC,YAAM;AACpB,qBAAU,CAAC,YAAM,EAAE,cAAc;AACjC,qBAAU,CAAC,YAAM,EAAE,QAAQ;AAC3B,qBAAU,CAAC,YAAM,EAAE,UAAU;AAC7B,mBAAQ,CAtGE,AAsGD,IAtGQ,oBAsGR,YAAM;AACf,sCAA0B,GAAG,IAAI,sDAA6B,CAvGpD,AAuGqD,IAvG9C,oBAuG8C,YAAM,GAAE,kBAAY,IAAI;AACvF,wBAAY,GAAG,IAAI,sEAAmC,CAAC,MAAM;AAC7D,kBAAM,GAAG,kBAAY,OAAO;AAC5B,qBAAU,CAAC,YAAM,EAAE,QAAQ;AAC3B,mBAAQ,CA3GE,AA2GD,IA3GQ,oBA2GR,YAAM;AACf,uCAA2B,GAAG,IAAI,sDAA8B,CA5GtD,AA4GuD,IA5GhD,oBA4GgD,YAAM;AACvE,wBAAY,OAAO,CAAC,iCAA2B,EAAE;AACjD,wBAAY,OAAO,CAAC,gCAA0B,EAAE,CAC9C,uBAAC,YAAM;AAET,wBAAY,GAAG,IAAI,sEAAkC,CAAC,MAAM;AAC5D,kBAAM,GAAG,kBAAY,OAAO;AAC5B,kBAAM,SAAO,CAAC,YAAM;AACpB,qBAAU,CAAC,YAAM,EAAE,cAAc;AACjC,qBAAU,CAAC,YAAM,EAAE,QAAQ;AAC3B,qBAAU,CAAC,YAAM,EAAE,UAAU;AAC7B,mBAAQ,CAvHE,AAuHD,IAvHQ,oBAuHR,YAAM;AACf,sCAA0B,GAAG,IAAI,sDAA6B,CAxHpD,AAwHqD,IAxH9C,oBAwH8C,YAAM,GAAE,kBAAY,IAAI;AACvF,wBAAY,GAAG,IAAI,sEAAmC,CAAC,MAAM;AAC7D,kBAAM,GAAG,kBAAY,OAAO;AAC5B,qBAAU,CAAC,YAAM,EAAE,QAAQ;AAC3B,mBAAQ,CA5HE,AA4HD,IA5HQ,oBA4HR,YAAM;AACf,uCAA2B,GAAG,IAAI,sDAA8B,CA7HtD,AA6HuD,IA7HhD,oBA6HgD,YAAM;AACvE,wBAAY,OAAO,CAAC,iCAA2B,EAAE;AACjD,wBAAY,OAAO,CAAC,gCAA0B,EAAE,CAC9C,uBAAC,YAAM;AAET,wBAAY,GAAG,IAAI,4EAAqC,CAAC,MAAM;AAC/D,kBAAM,GAAG,kBAAY,OAAO;AAC5B,kBAAM,SAAO,CAAC,YAAM;AACpB,kBAAM,UAAU,GAAG;AACnB,qBAAU,CAAC,YAAM,EAAE,SAAS;AAC5B,mBAAQ,CAvIE,AAuID,IAvIQ,oBAuIR,YAAM;AACf,yCAA6B,GAAG,IAAI,4DAAgC;AACpE,wBAAY,OAAO,CAAC,mCAA6B,EAAE,CAAC;AACpD,kBAAM,GAAG,8CAAkB,CAAC,GAAG,EAAE,YAAM;AACvC,kBAAM,UAAU,GAAG;AACnB,mBAAQ,CAAC,YAAM;AACf,kBAAM,GAAG,8CAAkB,CAAC,GAAG,EAAE,WAAK;AACtC,kBAAM,UAAU,GAAG;AACnB,mBAAQ,CAAC,YAAM;AACf,wBAAY,GAAG,IAAI,oDAA4B,CAAC,MAAM;AACtD,kBAAM,GAAG,kBAAY,OAAO;AAC5B,kBAAM,SAAO,CAAC,YAAM;AACpB,kBAAM,UAAU,GAAG;AACnB,mBAAQ,CApJE,AAoJD,IApJQ,oBAoJR,YAAM;AACf,gCAAoB,GAAG,IAAI,oCAAuB;AAClD,wBAAY,OAAO,CAAC,0BAAoB,EAAE;AAC1C,wBAAY,GAAG,IAAI,0FAAwC,CAAC,MAAM;AAClE,kBAAM,GAAG,kBAAY,OAAO;AAC5B,kBAAM,SAAO,CAAC,YAAM;AACpB,kBAAM,UAAU,GAAG;AACnB,mBAAQ,CA3JE,AA2JD,IA3JQ,oBA2JR,YAAM;AACf,4CAAgC,GAAG,IAAI,0EAAmC;AAC1E,wBAAY,OAAO,CAAC,sCAAgC,EAAE;AACtD,kBAAM,GAAG,8CAAkB,CAAC,GAAG,EAAE,YAAM;AACvC,kBAAM,UAAU,GAAG;AACnB,mBAAQ,CAAC,YAAM;AACf,kBAAM,GAAG,2CAAe,CAAC,GAAG,EAAE,MAAM,WAAK;AACzC,mBAAQ,CAAC,YAAM;AACf,UAAa,WAnKH,AAmKc,AAAI,IAnKX,SAmKuB,CAAC;AACzC,kBAAM,SAAO,CAAC,QAAQ;AACtB,wBAAY,GAAG,IAAI,uEAA+B,CAAC,MAAM;AACzD,kBAAM,GAAG,kBAAY,OAAO;AAC5B,iBAAK,SAAO,CAAC,YAAM;AACnB,mBAAQ,CAxKE,AAwKD,IAxKQ,oBAwKR,YAAM;AACf,mCAAuB,GAAG,IAAI,uDAA0B;AACxD,wBAAY,OAAO,CAAC,6BAAuB,EAAE;AAC7C,kBAAM,GAAG,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AACjD,mBAAQ,CAAC,YAAM;AACf,kBAAM,GAAG,2CAAe,CAAC,GAAG,EAAE,MAAM,YAAM;AAC1C,mBAAQ,CAAC,YAAM;AACf,UAAa,WA/KH,AA+Kc,AAAI,IA/KX,SA+KuB,CAAC;AACzC,kBAAM,SAAO,CAAC,QAAQ;AACtB,wBAAY,GAAG,IAAI,iDAA2B,CAAC,MAAM;AACrD,kBAAM,GAAG,kBAAY,OAAO;AAC5B,kBAAM,SAAO,CAAC,YAAM;AACpB,qBAAU,CAAC,YAAM,EAAE,WAAW;AAC9B,mBAAQ,CArLE,AAqLD,IArLQ,oBAqLR,YAAM;AACf,+BAAmB,GAAG,IAAI,iCAAsB;AAChD,wBAAY,OAAO,CAAC,yBAAmB,EAAE;AACzC,kBAAM,GAAG,8CAAkB,CAAC,GAAG,EAAE,gBAAgB;AACjD,mBAAQ,CAAC,YAAM;AACf,kBAAM,GAAG,2CAAe,CAAC,GAAG,EAAE,MAAM,YAAM;AAC1C,mBAAQ,CAAC,YAAM;AACf,UAAa,WA5LH,AA4Lc,AAAI,IA5LX,SA4LuB,CAAC;AACzC,kBAAM,SAAO,CAAC,QAAQ;AACtB,wBAAY,GAAG,IAAI,iDAA2B,CAAC,MAAM;AACrD,kBAAM,GAAG,kBAAY,OAAO;AAC5B,kBAAM,SAAO,CAAC,YAAM;AACpB,qBAAU,CAAC,YAAM,EAAE,WAAW;AAC9B,mBAAQ,CAlME,AAkMD,IAlMQ,oBAkMR,YAAM;AACf,+BAAmB,GAAG,IAAI,iCAAsB;AAChD,wBAAY,OAAO,CAAC,yBAAmB,EAAE;AACzC,UAAM,iBAAiB,gCAA0B,QAAQ,OAAO,CAAC,kBAAa,CArMpE,IAAO,oBAqM8D,QAAG;AAClF,UAAM,iBAAiB,gCAA0B,QAAQ,OAAO,CAAC,kBAAa,CAtMpE,IAAO,oBAsM8D,QAAG;AAClF,UAAM,iBAAiB,gCAA0B,QAAQ,OAAO,CAAC,kBAAa,CAvMpE,IAAO,oBAuM8D,QAAG;AAClF,UAAM,iBAAiB,gCAA0B,QAAQ,OAAO,CAAC,kBAAa,CAxMpE,IAAO,oBAwM8D,QAAG;AAClF,UAAM,iBAAiB,mCAA6B,UAAU,OAAO,CAAC,kBAAa,uBAAC,2CAA0B;AAC9G,UAAM,iBAAiB,6BAAuB,gBAAgB,OAAO,CAAC,kBAAa,sBAAC,QAAG;AACvF,cAAG,IAAI,GAAG,sCAAgC;AAC1C,eAAI,CAAC,2DAAU,CAAC,cAAc,EAAE,cAAc,EAAE,cAAc,EAAE,cAAc,EAAE,cAAc,EAAE,cAAc;AAC9G,YAAO;IACT;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAqD,CAAC,+BAA8B,MAAK,SAAS,EAAI;AAChI,cAAO,iCAA0B;;AAEnC,UAAK,AAAU,KAAK,KAAU,cArNpB,IAAO,QAqNmB,IAAM,MAAK,SAAS,EAAI;AAC1D,cAAO,kBAAW;;AAEpB,UAAK,AAAU,KAAK,KAAW,kEAAU,IAAM,MAAK,SAAS,EAAI;AAC/D,cAAO,sBAAe;;AAExB,UAAK,AAAU,KAAK,KAAU,sFAAsB,IAAM,MAAK,SAAS,EAAI;AAC1E,cAAO,kCAA2B;;AAEpC,UAAK,AAAU,KAAK,KAAU,cA9NpB,IAAO,UA8NqB,IAAM,MAAK,SAAS,EAAI;AAC5D,cAAO,qBAAc;;AAEvB,UAAK,AAAU,KAAK,KAAU,kDAAQ,IAAM,MAAK,SAAS,EAAI;AAC5D,cAAO,qBAAc;;AAEvB,UAAK,AAAU,KAAK,KAAW,0EAAW,IAAM,MAAK,SAAS,EAAI;AAChE,cAAO,wBAAiB;;AAE1B,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,8BAA6B,MAAK,SAAS,EAAI;AAC9F,cAAO,iCAA0B;;AAEnC,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,gCAA+B,MAAK,SAAS,EAAI;AAChG,cAAO,mCAA4B;;AAErC,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,0BAAyB,MAAK,SAAS,EAAI;AAC1F,cAAO,6BAAsB;;AAE/B,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,wBAAuB,MAAK,SAAS,EAAI;AACxF,cAAO,2BAAoB;;AAE7B,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,+BAA8B,MAAK,SAAS,EAAI;AAC/F,cAAO,kCAA2B;;AAEpC,UAAK,AAAU,KAAK,KAAW,sFAAkB,IAAM,MAAK,SAAS,EAAI;AACvE,cAAO,+BAAwB;;AAEjC,UAAK,AAAU,KAAK,KAAW,mDAAQ,IAAM,MAAK,SAAS,EAAI;AAC7D,cAAO,qBAAc;;AAEvB,UAAK,AAAU,KAAK,KAAW,iGAAuB,IAAM,MAAK,SAAS,EAAI;AAC5E,cAAO,oCAA6B;;AAEtC,UAAK,AAAU,KAAK,KAAW,qEAAc,IAAM,MAAK,SAAS,EAAI;AACnE,cAAO,2BAAoB;;AAE7B,UAAK,AAAU,KAAK,KAAW,2EAAqB,IAAM,MAAK,SAAS,EAAI;AAC1E,cAAO,kCAA2B;;AAEpC,WAAM,AAAU,KAAK,KAAW,0BAAK,IAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,uEAAsE,MAAK,SAAS,EAAI;AAC5K,cAAO,kBAAW;;AAEpB,UAAK,AAAU,KAAK,KAAW,6EAAyB,IAAM,OAAM,SAAS,EAAI;AAC/E,cAAO,sCAA+B;;AAExC,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAqD,CAAC,+BAA8B,OAAM,SAAS,EAAI;AACjI,cAAO,kCAA2B;;AAEpC,UAAK,AAAU,KAAK,KAAU,cA9QpB,IAAO,QA8QmB,IAAM,OAAM,SAAS,EAAI;AAC3D,cAAO,mBAAY;;AAErB,UAAK,AAAU,KAAK,KAAW,kEAAU,IAAM,OAAM,SAAS,EAAI;AAChE,cAAO,uBAAgB;;AAEzB,UAAK,AAAU,KAAK,KAAU,sFAAsB,IAAM,OAAM,SAAS,EAAI;AAC3E,cAAO,mCAA4B;;AAErC,UAAK,AAAU,KAAK,KAAU,cAvRpB,IAAO,UAuRqB,IAAM,OAAM,SAAS,EAAI;AAC7D,cAAO,sBAAe;;AAExB,UAAK,AAAU,KAAK,KAAU,kDAAQ,IAAM,OAAM,SAAS,EAAI;AAC7D,cAAO,sBAAe;;AAExB,UAAK,AAAU,KAAK,KAAW,0EAAW,IAAM,OAAM,SAAS,EAAI;AACjE,cAAO,yBAAkB;;AAE3B,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,8BAA6B,OAAM,SAAS,EAAI;AAC/F,cAAO,kCAA2B;;AAEpC,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,gCAA+B,OAAM,SAAS,EAAI;AACjG,cAAO,oCAA6B;;AAEtC,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,0BAAyB,OAAM,SAAS,EAAI;AAC3F,cAAO,8BAAuB;;AAEhC,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,wBAAuB,OAAM,SAAS,EAAI;AACzF,cAAO,4BAAqB;;AAE9B,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,+BAA8B,OAAM,SAAS,EAAI;AAChG,cAAO,mCAA4B;;AAErC,UAAK,AAAU,KAAK,KAAW,sFAAkB,IAAM,OAAM,SAAS,EAAI;AACxE,cAAO,gCAAyB;;AAElC,UAAK,AAAU,KAAK,KAAW,mDAAQ,IAAM,OAAM,SAAS,EAAI;AAC9D,cAAO,sBAAe;;AAExB,UAAK,AAAU,KAAK,KAAW,iGAAuB,IAAM,OAAM,SAAS,EAAI;AAC7E,cAAO,qCAA8B;;AAEvC,UAAK,AAAU,KAAK,KAAW,qEAAc,IAAM,OAAM,SAAS,EAAI;AACpE,cAAO,4BAAqB;;AAE9B,UAAK,AAAU,KAAK,KAAW,2EAAqB,IAAM,OAAM,SAAS,EAAI;AAC3E,cAAO,mCAA4B;;AAErC,WAAM,AAAU,KAAK,KAAW,0BAAK,IAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,uEAAsE,OAAM,SAAS,EAAI;AAC7K,cAAO,mBAAY;;AAErB,YAAO,eAAc;IACvB;;AAIE,UAA2B,OAAO,QAAG;AACrC,UAAK,UAAU;AACf,UAAK,aAAc,YAAY,KAAI;AACnC,UAAM,YAAY,IAAI,QAAQ;AAC9B,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,kCAAoB,QAAQ,GAAG,SAAS;AACxC,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAAY,IAAI,KAAK;AAC3B,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,kCAAoB,KAAK,GAAG,SAAS;AACrC,qBAAO,GAAG,SAAS;;AAErB,aAAO,GAAG;AACV,UAAM,YAAY,IAAI,SAAS;AAC/B,YAAK,AAAU,aAAO,IAAE,SAAS,GAAG;AAClC,6CAA+B,eAAe,GAAG,SAAS;AAC1D,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAI,OAAO,EAAE;AACX,0BAAY,gBAAgB;;AAE9B,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,wCAA0B,OAAO,GAAG;AACpC,eAAO,GAAG;;AAEZ,UAAM,YAA4B,UAAf,IAAI,UAAU,eAAI,IAAI,WAAW;AACpD,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,wCAA0B,SAAS,GAAG,SAAS;AAC/C,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAI,OAAO,EAAE;AACX,0BAAY,gBAAgB;;AAE9B,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,yCAA2B,KAAK,GAAG;AACnC,eAAO,GAAG;;AAEZ,UAAI,OAAO,EAAE;AACX,0BAAY,gBAAgB;;AAE9B,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,wCAA0B,OAAO,GAAG;AACpC,eAAO,GAAG;;AAEZ,UAAM,YAA4B,UAAf,IAAI,UAAU,eAAI,IAAI,WAAW;AACpD,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,wCAA0B,SAAS,GAAG,SAAS;AAC/C,eAAO,GAAG;AACV,qBAAO,GAAG,SAAS;;AAErB,UAAI,OAAO,EAAE;AACX,0BAAY,gBAAgB;;AAE9B,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,yCAA2B,KAAK,GAAG;AACnC,eAAO,GAAG;;AAEZ,UAAI,OAAO,EAAE;AACX,0BAAY,gBAAgB;;AAE9B,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,wCAA0B,OAAO,GAAG;AACpC,eAAO,GAAG;;AAEZ,UAAW,aAAa,WAAC,IAAI,WAAW;AACxC,YAAK,AAAU,cAAQ,KAAE,UAAU,GAAG;AACpC,wCAA0B,SAAS,GAAG,UAAU;AAChD,eAAO,GAAG;AACV,sBAAQ,GAAG,UAAU;;AAEvB,UAAI,OAAO,EAAE;AACX,0BAAY,gBAAgB;;AAE9B,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,yCAA2B,KAAK,GAAG;AACnC,eAAO,GAAG;;AAEZ,UAAI,OAAO,EAAE;AACX,0BAAY,gBAAgB;;AAE9B,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,wCAA0B,OAAO,GAAG;AACpC,eAAO,GAAG;;AAEZ,UAAI,OAAO,EAAE;AACX,0BAAY,gBAAgB;;AAE9B,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,yCAA2B,KAAK,GAAG;AACnC,eAAO,GAAG;;AAEZ,UAAI,OAAO,EAAE;AACX,0BAAY,gBAAgB;;AAE9B,aAAO,GAAG;AACV,UAAI,UAAU,EAAE;AACd,2CAA6B,MAAM,GAAG;AACtC,eAAO,GAAG;;AAEZ,UAAM,aAAa,IAAI,YAAY;AACnC,YAAK,AAAU,cAAQ,IAAE,UAAU,GAAG;AACpC,2CAA6B,QAAQ,GAAG,UAAU;AAClD,eAAO,GAAG;AACV,sBAAQ,GAAG,UAAU;;AAEvB,UAAI,OAAO,EAAE;AACX,0BAAY,gBAAgB;;AAE9B,UAAI,UAAU,EAAE;AACd,cAAK,AAAU,IAAI,YAAY,IAAE,OAAO;AACtC,UAAC,0BAAoB,YAAY,GAAG,IAAI,YAAY;;;AAGxD,UAAI,UAAU,EAAE;AACd,8CAAgC,SAAS;;AAE3C,UAAM,aAAa,IAAI,SAAS;AAChC,WAAK,eAAU,cAAQ,EAAE,UAAU,GAAG;AACpC,qCAAuB,SAAS,GAAG,UAAU;AAC7C,sBAAQ,GAAG,UAAU;;AAEvB,UAAI,UAAU,EAAE;AACd,qCAAuB,SAAS;;AAElC,UAAI,UAAU,EAAE;AACd,QAAC,yBAAmB,QAAQ,GAAG;;AAEjC,UAAI,UAAU,EAAE;AACd,QAAC,yBAAmB,QAAQ,GAAG;;AAEjC,UAAM,YAttBU,AAstBE,AAAS,iCAttBH,aAstBe,CAAC,IAAI,SAAS,QAAQ,UAAU;AACvE,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,qBAAO,OAAK,sBAAG,SAAS;AACxB,qBAAO,GAAG,SAAS;;AAErB,cAAmB,IAAI,WAAW;UAA5B,4BAAgC;AACtC,YAAK,AAAU,aAAO,KAAE,SAAS,GAAG;AAClC,sBAAQ,OAAK,GAAG,SAAS;AACzB,qBAAO,GAAG,SAAS;;AAErB,UAAM,YAhuBU,AAguBE,AAAS,iCAhuBH,aAguBe,CAAC,IAAI,SAAS,MAAM;AAC3D,WAAK,eAAU,aAAO,EAAE,SAAS,GAAG;AAClC,sBAAQ,OAAK,sBAAG,SAAS;AACzB,qBAAO,GAAG,SAAS;;AAErB,wBAAY,kBAAkB,CAAC,UAAU;AACzC,wBAAY,kBAAkB,CAAC,UAAU;AACzC,wBAAY,kBAAkB,CAAC,UAAU;AACzC,wBAAY,kBAAkB,CAAC,UAAU;AACzC,uBAAW,cAAc;AACzB,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,wBAAY,cAAc;AAC1B,UAAI,UAAU,EAAE;AACd,6CAA+B,gBAAgB;;AAEjD,UAAI,UAAU,EAAE;AACd,2CAA6B,gBAAgB;;IAEjD;;AAIE,+BAAW;;AACX,iCAAY;;AACZ,kCAAY;;AACZ,kCAAY;;AACZ,kCAAY;;AACZ,kCAAY;;AACZ,kCAAY;;AACZ,kCAAY;;AACZ,kCAAY;;AACZ,kCAAY;;AACZ,kCAAY;;AACZ,kCAAY;;AACZ,mCAAY;;AACZ,mCAAY;;AACZ,mCAAY;;AACZ,mCAAY;;AACZ,2CAA+B,YAAY;IAC7C;iCAEgC,MAAM;AACpC,cAAG,YAAY,oBAAG,MAAM;IAC1B;;iEA1xBkB,UAA2B,EAAE,WAAe;IAzHzD,4BAAsB,GAAG;IACd,WAAK;IACF,WAAK;IACR,WAAK;IACF,WAAK;IACR,WAAK;IACR,aAAO;IACJ,WAAK;IACQ,iBAAW;IAChB,0BAAoB;IACb,iCAA2B;IAClD,kBAAY;IACZ,sBAAgB;IACO,kCAA4B;IACnD,qBAAe;IACN,qBAAe;IACH,wBAAkB;IACvC,iCAA2B;IAC3B,mCAA6B;IAC7B,6BAAuB;IAC1B,2BAAqB;IACrB,kCAA4B;IACL,+BAAyB;IACnC,qBAAe;IACA,oCAA8B;IACvC,2BAAqB;IACd,kCAA4B;IAC5C,kBAAY;IACR,YAAM;IACN,YAAM;IACT,YAAM;IACT,cAAQ;IACF,YAAM;IACT,YAAM;IACT,cAAQ;IACF,YAAM;IACT,YAAM;IACkB,kBAAY;IACjB,qCAA+B;IAC/C,YAAM;IACN,YAAM;IACT,YAAM;IACa,kBAAY;IACjB,gCAA0B;IACxC,YAAM;IACc,kBAAY;IACjB,iCAA2B;IAC1C,YAAM;IACa,kBAAY;IACjB,gCAA0B;IACxC,YAAM;IACc,kBAAY;IACjB,iCAA2B;IAC1C,YAAM;IACa,kBAAY;IACjB,gCAA0B;IACxC,YAAM;IACc,kBAAY;IACjB,iCAA2B;IAC1C,YAAM;IACa,kBAAY;IACjB,gCAA0B;IACxC,YAAM;IACc,kBAAY;IACjB,iCAA2B;IAC1C,YAAM;IACgB,kBAAY;IACjB,mCAA6B;IAC3C,YAAM;IACN,YAAM;IACT,YAAM;IACO,kBAAY;IACjB,0BAAoB;IAC5B,YAAM;IACmB,kBAAY;IACjB,sCAAgC;IACjD,YAAM;IACT,YAAM;IACN,YAAM;IACU,kBAAY;IACjB,6BAAuB;IACnB,kCAA4B;IACnD,mBAAa;IACb,uBAAiB;IACM,mCAA6B;IACpD,sBAAgB;IACP,sBAAgB;IACJ,yBAAmB;IACxC,kCAA4B;IAC5B,oCAA8B;IAC9B,8BAAwB;IAC3B,4BAAsB;IACtB,mCAA6B;IACN,gCAA0B;IACpC,sBAAgB;IACD,qCAA+B;IACxC,4BAAsB;IACf,mCAA6B;IAC7C,mBAAa;IACT,YAAM;IACT,YAAM;IACN,YAAM;IACM,kBAAY;IACjB,yBAAmB;IACvB,YAAM;IACT,YAAM;IACN,YAAM;IACM,kBAAY;IACjB,yBAAmB;IACtC,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;IACP,aAAO;IACN,aAAO;IACP,aAAO;IACP,cAAQ;IACR,cAAQ;IACT,cAAQ;AAEsD,4EAAM,qCAAiB,UAAU,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;AACnK,eAAM,GAAG,AAoQC,IAAO,oBApQR,AAAQ,AAoQP,IAAO,SApQQ,gBAAc,CAAC;AACxC,sEAAW;gBAAX,0DAAW,GAAK,AAAA,AAAS,iCAAD,aAAa,iBAAiB,CAAC,IAAI,2CAAiB,SAAS,EAAE,gDAAmB;AAC1G,2BAAkB,CAAC,0DAAW;EAChC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4BAiQY,IAAO;4BAAP,IAAO;4BAAP,IAAO;4BAAP,IAAO;4BAAP,IAAO;8BAAP,IAAO;4BAAP,IAAO;;;;;;;;;;;;;;;;;;;;;6BAAP,IAAO;6BAAP,IAAO;6BAAP,IAAO;+BAAP,IAAO;6BAAP,IAAO;6BAAP,IAAO;+BAAP,IAAO;6BAAP,IAAO;6BAAP,IAAO;;;6BAAP,IAAO;6BAAP,IAAO;6BAAP,IAAO;;;6BAAP,IAAO;;;6BAAP,IAAO;;;6BAAP,IAAO;;;6BAAP,IAAO;;;6BAAP,IAAO;;;6BAAP,IAAO;;;6BAAP,IAAO;;;6BAAP,IAAO;;;6BAAP,IAAO;6BAAP,IAAO;6BAAP,IAAO;;;6BAAP,IAAO;;;6BAAP,IAAO;6BAAP,IAAO;6BAAP,IAAO;;;;;;;;;;;;;;;;;;;;;6BAAP,IAAO;6BAAP,IAAO;6BAAP,IAAO;;;6BAAP,IAAO;6BAAP,IAAO;6BAAP,IAAO;;;;;;;;;;;;;;;;MAtQQ,0DAAW;;;;;oEA8xBgB,UAA2B,EAAE,WAAe;AAClG,UAAO,KAAI,kDAAiB,CAAC,UAAU,EAAE,WAAW;EACtD;;;MAEoB,oDAAuB;YAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA0B1C,UAAK,iCAAgC,IAAI,MAAO;AAC9C,QAAC,iCAA2B,GAAG,wCAAO,uCAAM,+CAAwB,mBAAkB,kBAAe,uCAAM,+CAAwB,mBAAkB,sBAAsB,uCAAM,wCAAiB,CAAC,OAAO,mBAAc,uCAAM,+CAAwB,mBAAkB,qBAAqB,uCAAM,wCAAiB,CAAC,SAAS,qBAAgB,uCAAM,+CAAwB,mBAAkB,0BAA0B,uCAAM,wCAAiB,CAAC,OAAO,mBAAc,uCAAM,+CAAwB,mBAAkB,yBAAyB,uCAAM,wCAAiB,CAAC,OAAO,wBAAsB,uCAAM,wCAAiB,CAAC,OAAO,mBAAc,uCAAM,+CAAwB,mBAAkB,wBAAwB,uCAAM,wCAAiB,CAAC,SAAS,0BAAwB,uCAAM,wCAAiB,CAAC,OAAO;;AAElxB,YAAO,kCAAgC;IACzC;;AAGE,UAAK,kBAAiB,IAAI,MAAO;AAC/B,QAAC,kBAAY,GAAG,AAAS,wCAAS;;AAEpC,YAAO,mBAAiB;IAC1B;;AAGE,UAAK,sBAAqB,IAAI,MAAO;AACnC,QAAC,sBAAgB,GAAG,AAAS,uDAAgB,4DAAC,gBAAgB,CAAU,kEAAU,EAAE,aAAa,YAAY,EAAE,kDAAO,gBAAgB,CAAU,iDAAQ,EAAE,aAAa,YAAY,EAAE,+CAAO,gBAAgB,CAAU,8CAAM,EAAE,aAAa,YAAY,IArkB/O,AAqkBkP,IArkB3O,eAqkB2O,iBAAgB;;AAE5Q,YAAO,uBAAqB;IAC9B;;AAGE,UAAK,mCAAkC,IAAI,MAAO;AAChD,QAAC,mCAA6B,GAAG,IAAI,2EAA8B,4DAAC,gBAAgB,CAAU,kEAAe,EAAE,aAAa,YAAY,+DAAG,qBAAoB;;AAEjK,YAAO,oCAAkC;IAC3C;;AAGE,UAAK,qBAAoB,IAAI,MAAO;AAClC,QAAC,qBAAe,GAAG,AAAS,0CAAW;;AAEzC,YAAO,sBAAoB;IAC7B;;AAGE,UAAK,qBAAoB,IAAI,MAAO;AAClC,QAAC,qBAAe,GAAG,AAAI,uCAAgB,CA1lB/B,AA0lBgC,IA1lBzB,iBA0lByB,oBAAmB,8DAAE,qBAAoB;;AAEnF,YAAO,sBAAoB;IAC7B;;AAGE,UAAK,wBAAuB,IAAI,MAAO;AACrC,QAAC,wBAAkB,GAAG,IAAI,+DAA4B,wCAAC,gBAAgB,CAAU,8CAAM,EAAE,aAAa,YAAY;;AAEpH,YAAO,yBAAuB;IAChC;;AAGE,UAAK,iCAAgC,IAAI,MAAO;AAC9C,QAAC,iCAA2B,GAAG,AAAS,iDAAuB,CAAC,gBAAgB,CAAC,uCAAM,2CAAoB,CAAC,2BAAyB,aAAa,YAAY,EAAE;;AAElK,YAAO,kCAAgC;IACzC;;AAGE,UAAK,mCAAkC,IAAI,MAAO;AAChD,QAAC,mCAA6B,GAAG,AAAS,mDAAyB,CA/mB3D,AA+mB4D,IA/mBrD,iBA+mBqD,oBAAmB,GAAE,gBAAgB,CAAC,uCAAM,2CAAoB,CAAC,6BAA2B,aAAa,YAAY,EAAE;;AAE7L,YAAO,oCAAkC;IAC3C;;AAGE,UAAK,6BAA4B,IAAI,MAAO;AAC1C,QAAC,6BAAuB,GAAG,AAAS,6CAAmB,oBAAC,gCAA+B,GAtnB/E,AAsnBiF,IAtnB1E,oBAsnB0E,kCAAiC,GAAE,gBAAgB,CAAC,uCAAM,2CAAoB,CAAC,uBAAqB,aAAa,YAAY,EAAE;;AAE1N,YAAO,8BAA4B;IACrC;;AAGE,UAAK,2BAA0B,IAAI,MAAO;AACxC,QAAC,2BAAqB,GAAG;;AAE3B,YAAO,4BAA0B;IACnC;;AAGE,UAAK,kCAAiC,IAAI,MAAO;AAC/C,QAAC,kCAA4B,GAAG;;AAElC,YAAO,mCAAiC;IAC1C;;AAGE,UAAK,+BAA8B,IAAI,MAAO;AAC5C,QAAC,+BAAyB,GAAG,IAAI,2EAA2B,CA3oBpD,AA2oBqD,IA3oB9C,iBA2oB8C,oBAAmB;;AAElF,YAAO,gCAA8B;IACvC;;AAGE,UAAK,qBAAoB,IAAI,MAAO;AAClC,QAAC,qBAAe,GAAG,AAAI,wCAAiB;;AAE1C,YAAO,sBAAoB;IAC7B;;AAGE,UAAK,oCAAmC,IAAI,MAAO;AACjD,QAAC,oCAA8B,GAAG,IAAI,sFAAgC,CAAC,8BAA6B,EAzpB5F,AAypB8F,IAzpBvF,oBAypBuF,4BAA2B,sBAAE,gCAA+B,GAAE,oBAAmB,6DAAE,qBAAoB,GAAE,kCAAiC,EAAE,0BAAyB,EAAE,iCAAgC,EAAE,oBAAmB;;AAEpU,YAAO,qCAAmC;IAC5C;;AAGE,UAAK,2BAA0B,IAAI,MAAO;AACxC,QAAC,2BAAqB,GAAG,IAAI,0DAAuB,wCAAC,gBAAgB,CAAU,8CAAM,EAAE,aAAa,YAAY,IAAG,0BAAyB,EAAE,mCAAkC,gEAAE,gBAAgB,CAAU,qEAAc,EAAE,aAAa,YAAY,EAAE;;AAEzP,YAAO,4BAA0B;IACnC;;AAGE,UAAK,kCAAiC,IAAI,MAAO;AAC/C,QAAC,kCAA4B,GAAG,IAAI,gEAA8B,CAAC,oBAAmB;;AAExF,YAAO,mCAAiC;IAC1C;;AAGE,UAAK,kBAAiB,IAAI,MAAO;AAC/B,QAAC,kBAAY,GAAG,uCAAM,eAAc;;AAEtC,YAAO,mBAAiB;IAC1B;;AAIE,uBAAW,GAAG,IAAI,kDAAiB,CAAC,MAAM;AAC1C,iBAAM,GAAG,iBAAW,OAAO;AAC3B,yBAAa,GAAG,IAAI,oCAAiB;AACrC,6BAAiB,GAAG,IAAI,mCAAoB,CAAC,mBAAa;AAC1D,uBAAW,OAAO,CAAC,uBAAiB,EAAE,qBAAgB;AACtD,gBAAK,CAAC,WAAM;AACZ,YAAO,KAAI,kCAAkC,CAAC,GAAG,MAAM,WAAM,EAAE,uBAAiB;IAClF;wBAG4B,KAAa,EAAE,SAAa,EAAE,cAAsB;AAC9E,UAAK,AAAU,KAAK,KAAW,+CAAQ,IAAM,MAAK,SAAS,EAAI;AAC7D,cAAO,oBAAa;;AAEtB,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAqD,CAAC,+BAA8B,MAAK,SAAS,EAAI;AAChI,cAAO,iCAA0B;;AAEnC,UAAK,AAAU,KAAK,KAAU,cAtsBpB,IAAO,QAssBmB,IAAM,MAAK,SAAS,EAAI;AAC1D,cAAO,kBAAW;;AAEpB,UAAK,AAAU,KAAK,KAAW,kEAAU,IAAM,MAAK,SAAS,EAAI;AAC/D,cAAO,sBAAe;;AAExB,UAAK,AAAU,KAAK,KAAU,sFAAsB,IAAM,MAAK,SAAS,EAAI;AAC1E,cAAO,mCAA4B;;AAErC,UAAK,AAAU,KAAK,KAAU,cA/sBpB,IAAO,UA+sBqB,IAAM,MAAK,SAAS,EAAI;AAC5D,cAAO,qBAAc;;AAEvB,UAAK,AAAU,KAAK,KAAU,kDAAQ,IAAM,MAAK,SAAS,EAAI;AAC5D,cAAO,qBAAc;;AAEvB,UAAK,AAAU,KAAK,KAAW,0EAAW,IAAM,MAAK,SAAS,EAAI;AAChE,cAAO,wBAAiB;;AAE1B,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,8BAA6B,MAAK,SAAS,EAAI;AAC9F,cAAO,iCAA0B;;AAEnC,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,gCAA+B,MAAK,SAAS,EAAI;AAChG,cAAO,mCAA4B;;AAErC,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,0BAAyB,MAAK,SAAS,EAAI;AAC1F,cAAO,6BAAsB;;AAE/B,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,wBAAuB,MAAK,SAAS,EAAI;AACxF,cAAO,2BAAoB;;AAE7B,UAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,+BAA8B,MAAK,SAAS,EAAI;AAC/F,cAAO,kCAA2B;;AAEpC,UAAK,AAAU,KAAK,KAAW,sFAAkB,IAAM,MAAK,SAAS,EAAI;AACvE,cAAO,+BAAwB;;AAEjC,UAAK,AAAU,KAAK,KAAW,mDAAQ,IAAM,MAAK,SAAS,EAAI;AAC7D,cAAO,qBAAc;;AAEvB,UAAK,AAAU,KAAK,KAAW,iGAAuB,IAAM,MAAK,SAAS,EAAI;AAC5E,cAAO,oCAA6B;;AAEtC,UAAK,AAAU,KAAK,KAAW,qEAAc,IAAM,MAAK,SAAS,EAAI;AACnE,cAAO,2BAAoB;;AAE7B,UAAK,AAAU,KAAK,KAAW,2EAAqB,IAAM,MAAK,SAAS,EAAI;AAC1E,cAAO,kCAA2B;;AAEpC,WAAM,AAAU,KAAK,KAAW,0BAAK,IAAK,AAAU,KAAK,MAAE,uCAAM,2CAAoB,CAAC,uEAAsE,MAAK,SAAS,EAAI;AAC5K,cAAO,kBAAW;;AAEpB,YAAO,eAAc;IACvB;;AAIE,UAAK,aAAc,YAAY,KAAI;AACnC,UAAI,UAAU,EAAE;AACd,+BAAiB,SAAS;;AAE5B,uBAAW,cAAc;IAC3B;;AAIE,+BAAW;;IACb;;sEApNuB,UAA2B,EAAE,WAAe;IArBjD,iBAAW;IACX,mBAAa;IACV,uBAAiB;IACP,iCAA2B;IAClD,kBAAY;IACZ,sBAAgB;IACO,mCAA6B;IACpD,qBAAe;IACN,qBAAe;IACH,wBAAkB;IACvC,iCAA2B;IAC3B,mCAA6B;IAC7B,6BAAuB;IAC1B,2BAAqB;IACrB,kCAA4B;IACL,+BAAyB;IACnC,qBAAe;IACA,oCAA8B;IACvC,2BAAqB;IACd,kCAA4B;IAC5C,kBAAY;AAC4C,iFAAM,qCAAiB,KAAK,EAAE,2CAAI,UAAU,EAAE,WAAW,EAAE,8DAAuB,YAAY;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;wEAuNlI,UAA2B,EAAE,WAAe;AAChF,UAAO,KAAI,uDAAsB,CAAC,UAAU,EAAE,WAAW;EAC3D;;;MAE6C,kDAAqB;YAAG,gBAAM,sCAAsC,CAAC,qBAAqB,0DAA6B,EAAE,kDAAqB;;MACrL,kDAAqB;YAAG;;MAC1B,qCAAQ;YAAG;;;;;AAEb,kBAAI,qCAAQ,GAAE;AACZ;;AAEF,4CAAW;AAEX,IAAO,oCAAiB,CAAC,8CAAY,EAAE,kDAAqB;AAC5D,IAAM,gCAAa;AACnB,IAAM,2CAAa;AACnB,IAAM,wCAAa;AACnB,IAAM,4CAAa;AACnB,IAAM,gDAAa;AACnB,IAAM,0DAAa;AACnB,IAAM,0CAAa;AACnB,IAAM,oEAAa;EACrB","file":"lottery_simulator.template.ddc.js"}');
  // Exports:
  return {
    lottery_simulator$46template: lottery_simulator$46template
  };
});

//# sourceMappingURL=lottery_simulator.template.ddc.js.map
