define(['dart_sdk', 'packages/components_codelab/src/settings/settings_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_expansionpanel/material_expansionpanel_set', 'packages/angular_components/material_expansionpanel/material_expansionpanel.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/material_expansionpanel/material_expansionpanel', 'packages/angular_components/material_radio/material_radio.template', 'packages/angular_components/material_radio/material_radio', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/angular_components/src/model/action/async_action', 'packages/angular_components/content/deferred_content_aware', 'packages/components_codelab/src/settings/settings_component', 'packages/components_codelab/src/lottery/lottery', 'packages/components_codelab/src/settings/settings', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/src/laminate/overlay/render/overlay_style_config', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/src/laminate/overlay/render/overlay_dom_render_service', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/quiver/time', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/angular_components.template', 'packages/components_codelab/src/lottery/lottery.template', 'packages/components_codelab/src/settings/settings.template'], function(dart_sdk, settings_component$46css, view_type, constants, view, app_view_utils, app_view, material_expansionpanel_set, material_expansionpanel, ng_zone, dom_service, material_expansionpanel$, material_radio, material_radio$, ng_for, material_checkbox, material_checkbox$, async_action, deferred_content_aware, settings_component, lottery, settings, alignment, module, angular_2, disposer, imperative_view, dom_ruler, angular_2$, module$, opaque_token, overlay_style_config, zindexer, overlay_dom_render_service, overlay_service, dom_popup_source, time, managed_zone, reflector, angular, angular_components, lottery$, settings$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__settings__settings_component$46css$46shim = settings_component$46css.src__settings__settings_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__core__linker__component_loader = app_view.src__core__linker__component_loader;
  const material_expansionpanel__material_expansionpanel_set = material_expansionpanel_set.material_expansionpanel__material_expansionpanel_set;
  const material_expansionpanel__material_expansionpanel$46template = material_expansionpanel.material_expansionpanel__material_expansionpanel$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
  const material_expansionpanel__material_expansionpanel = material_expansionpanel$.material_expansionpanel__material_expansionpanel;
  const material_radio__material_radio_group$46template = material_radio.material_radio__material_radio_group$46template;
  const material_radio__material_radio$46template = material_radio.material_radio__material_radio$46template;
  const material_radio__material_radio_group = material_radio$.material_radio__material_radio_group;
  const material_radio__material_radio = material_radio$.material_radio__material_radio;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const src__model__action__async_action = async_action.src__model__action__async_action;
  const content__deferred_content_aware = deferred_content_aware.content__deferred_content_aware;
  const src__settings__settings_component = settings_component.src__settings__settings_component;
  const src__lottery__lottery = lottery.src__lottery__lottery;
  const src__settings__settings = settings.src__settings__settings;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__disposer__disposer = disposer.utils__disposer__disposer;
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
  const src__lottery__lottery$46template = lottery$.src__lottery__lottery$46template;
  const src__settings__settings$46template = settings$.src__settings__settings$46template;
  const _root = Object.create(null);
  const src__settings__settings_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
  let JSArrayOfDivElement = () => (JSArrayOfDivElement = dart.constFn(_interceptors.JSArray$(html.DivElement)))();
  let JSArrayOfMaterialExpansionPanel = () => (JSArrayOfMaterialExpansionPanel = dart.constFn(_interceptors.JSArray$(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel)))();
  let AsyncActionOfbool = () => (AsyncActionOfbool = dart.constFn(src__model__action__async_action.AsyncAction$(core.bool)))();
  let JSArrayOfMaterialRadioComponent = () => (JSArrayOfMaterialRadioComponent = dart.constFn(_interceptors.JSArray$(material_radio__material_radio.MaterialRadioComponent)))();
  let ListOfMaterialRadioComponent = () => (ListOfMaterialRadioComponent = dart.constFn(core.List$(material_radio__material_radio.MaterialRadioComponent)))();
  let _ViewSettingsComponent1ToListOfMaterialRadioComponent = () => (_ViewSettingsComponent1ToListOfMaterialRadioComponent = dart.constFn(dart.fnType(ListOfMaterialRadioComponent(), [src__settings__settings_component$46template._ViewSettingsComponent1])))();
  let _ViewSettingsComponent2ToListOfMaterialRadioComponent = () => (_ViewSettingsComponent2ToListOfMaterialRadioComponent = dart.constFn(dart.fnType(ListOfMaterialRadioComponent(), [src__settings__settings_component$46template._ViewSettingsComponent2])))();
  let _ViewSettingsComponent3ToListOfMaterialRadioComponent = () => (_ViewSettingsComponent3ToListOfMaterialRadioComponent = dart.constFn(dart.fnType(ListOfMaterialRadioComponent(), [src__settings__settings_component$46template._ViewSettingsComponent3])))();
  let _ViewSettingsComponent4ToListOfMaterialRadioComponent = () => (_ViewSettingsComponent4ToListOfMaterialRadioComponent = dart.constFn(dart.fnType(ListOfMaterialRadioComponent(), [src__settings__settings_component$46template._ViewSettingsComponent4])))();
  let _ViewSettingsComponent5ToListOfMaterialRadioComponent = () => (_ViewSettingsComponent5ToListOfMaterialRadioComponent = dart.constFn(dart.fnType(ListOfMaterialRadioComponent(), [src__settings__settings_component$46template._ViewSettingsComponent5])))();
  let _ViewSettingsComponent6ToListOfMaterialRadioComponent = () => (_ViewSettingsComponent6ToListOfMaterialRadioComponent = dart.constFn(dart.fnType(ListOfMaterialRadioComponent(), [src__settings__settings_component$46template._ViewSettingsComponent6])))();
  let AppViewOfSettingsComponent = () => (AppViewOfSettingsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent)))();
  let AppViewAndintToAppViewOfSettingsComponent = () => (AppViewAndintToAppViewOfSettingsComponent = dart.constFn(dart.fnType(AppViewOfSettingsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let JSArrayOfText = () => (JSArrayOfText = dart.constFn(_interceptors.JSArray$(html.Text)))();
  let ComponentRefOfSettingsComponent = () => (ComponentRefOfSettingsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent)))();
  let ListOfRelativePosition = () => (ListOfRelativePosition = dart.constFn(core.List$(laminate__enums__alignment.RelativePosition)))();
  let OpaqueTokenOfListOfRelativePosition = () => (OpaqueTokenOfListOfRelativePosition = dart.constFn(src__core__di__opaque_token.OpaqueToken$(ListOfRelativePosition())))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfSettingsComponent = () => (ComponentFactoryOfSettingsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__settings__settings_component.SettingsComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__settings__settings_component$46template, {
    /*src__settings__settings_component$46template.styles$SettingsComponent*/get styles$SettingsComponent() {
      return dart.constList([src__settings__settings_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _MaterialExpansionPanelSet_0_5 = Symbol('_MaterialExpansionPanelSet_0_5');
  const _query_MaterialExpansionPanel_0_0_isDirty = Symbol('_query_MaterialExpansionPanel_0_0_isDirty');
  const _el_1 = Symbol('_el_1');
  const _compView_1 = Symbol('_compView_1');
  const _MaterialExpansionPanel_1_5 = Symbol('_MaterialExpansionPanel_1_5');
  const _query_AutoFocusDirective_1_0_isDirty = Symbol('_query_AutoFocusDirective_1_0_isDirty');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _el_5 = Symbol('_el_5');
  const _compView_5 = Symbol('_compView_5');
  const _MaterialRadioGroupComponent_5_5 = Symbol('_MaterialRadioGroupComponent_5_5');
  const _query_MaterialRadioComponent_5_0_isDirty = Symbol('_query_MaterialRadioComponent_5_0_isDirty');
  const _appEl_6 = Symbol('_appEl_6');
  const _NgFor_6_9 = Symbol('_NgFor_6_9');
  const _el_7 = Symbol('_el_7');
  const _el_9 = Symbol('_el_9');
  const _compView_9 = Symbol('_compView_9');
  const _MaterialRadioGroupComponent_9_5 = Symbol('_MaterialRadioGroupComponent_9_5');
  const _query_MaterialRadioComponent_9_0_isDirty = Symbol('_query_MaterialRadioComponent_9_0_isDirty');
  const _appEl_10 = Symbol('_appEl_10');
  const _NgFor_10_9 = Symbol('_NgFor_10_9');
  const _el_11 = Symbol('_el_11');
  const _compView_11 = Symbol('_compView_11');
  const _MaterialExpansionPanel_11_5 = Symbol('_MaterialExpansionPanel_11_5');
  const _query_AutoFocusDirective_11_0_isDirty = Symbol('_query_AutoFocusDirective_11_0_isDirty');
  const _el_12 = Symbol('_el_12');
  const _el_13 = Symbol('_el_13');
  const _el_15 = Symbol('_el_15');
  const _compView_15 = Symbol('_compView_15');
  const _MaterialRadioGroupComponent_15_5 = Symbol('_MaterialRadioGroupComponent_15_5');
  const _query_MaterialRadioComponent_15_0_isDirty = Symbol('_query_MaterialRadioComponent_15_0_isDirty');
  const _appEl_16 = Symbol('_appEl_16');
  const _NgFor_16_9 = Symbol('_NgFor_16_9');
  const _el_17 = Symbol('_el_17');
  const _el_18 = Symbol('_el_18');
  const _text_21 = Symbol('_text_21');
  const _el_22 = Symbol('_el_22');
  const _el_24 = Symbol('_el_24');
  const _compView_24 = Symbol('_compView_24');
  const _MaterialRadioGroupComponent_24_5 = Symbol('_MaterialRadioGroupComponent_24_5');
  const _query_MaterialRadioComponent_24_0_isDirty = Symbol('_query_MaterialRadioComponent_24_0_isDirty');
  const _appEl_25 = Symbol('_appEl_25');
  const _NgFor_25_9 = Symbol('_NgFor_25_9');
  const _el_26 = Symbol('_el_26');
  const _el_27 = Symbol('_el_27');
  const _text_30 = Symbol('_text_30');
  const _el_31 = Symbol('_el_31');
  const _compView_31 = Symbol('_compView_31');
  const _MaterialExpansionPanel_31_5 = Symbol('_MaterialExpansionPanel_31_5');
  const _query_AutoFocusDirective_31_0_isDirty = Symbol('_query_AutoFocusDirective_31_0_isDirty');
  const _el_32 = Symbol('_el_32');
  const _el_33 = Symbol('_el_33');
  const _el_35 = Symbol('_el_35');
  const _compView_35 = Symbol('_compView_35');
  const _MaterialCheckboxComponent_35_5 = Symbol('_MaterialCheckboxComponent_35_5');
  const _el_36 = Symbol('_el_36');
  const _el_37 = Symbol('_el_37');
  const _compView_37 = Symbol('_compView_37');
  const _MaterialRadioGroupComponent_37_5 = Symbol('_MaterialRadioGroupComponent_37_5');
  const _query_MaterialRadioComponent_37_0_isDirty = Symbol('_query_MaterialRadioComponent_37_0_isDirty');
  const _appEl_38 = Symbol('_appEl_38');
  const _NgFor_38_9 = Symbol('_NgFor_38_9');
  const _el_39 = Symbol('_el_39');
  const _el_41 = Symbol('_el_41');
  const _compView_41 = Symbol('_compView_41');
  const _MaterialRadioGroupComponent_41_5 = Symbol('_MaterialRadioGroupComponent_41_5');
  const _query_MaterialRadioComponent_41_0_isDirty = Symbol('_query_MaterialRadioComponent_41_0_isDirty');
  const _appEl_42 = Symbol('_appEl_42');
  const _NgFor_42_9 = Symbol('_NgFor_42_9');
  const _expr_1 = Symbol('_expr_1');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_11 = Symbol('_expr_11');
  const _expr_13 = Symbol('_expr_13');
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
  const _handle_checkedChange_35_0 = Symbol('_handle_checkedChange_35_0');
  let const$12;
  const _MaterialRadioComponent_0_5 = Symbol('_MaterialRadioComponent_0_5');
  src__settings__settings_component$46template.ViewSettingsComponent0 = class ViewSettingsComponent0 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'material-expansionpanel-set', parentRenderNode);
      this.addShimE(this[_el_0]);
      this[_MaterialExpansionPanelSet_0_5] = new material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet.new();
      this[_compView_1] = new material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.new(this, 1);
      this[_el_1] = this[_compView_1].rootEl;
      this[_el_0][$append](this[_el_1]);
      this.createAttr(this[_el_1], 'name', 'Wallet');
      this.addShimC(html.HtmlElement._check(this[_el_1]));
      this[_MaterialExpansionPanel_1_5] = new material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_compView_1].ref, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_el_2] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_2]);
      this.addShimE(this[_el_3]);
      let _text_4 = html.Text.new('Initial cash');
      this[_el_3][$append](_text_4);
      this[_compView_5] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 5);
      this[_el_5] = this[_compView_5].rootEl;
      this[_el_2][$append](this[_el_5]);
      this.addShimC(html.HtmlElement._check(this[_el_5]));
      this[_MaterialRadioGroupComponent_5_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_6 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_6] = new src__core__linker__view_container.ViewContainer.new(6, 5, this, _anchor_6);
      let _TemplateRef_6_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_6], src__settings__settings_component$46template.viewFactory_SettingsComponent1);
      this[_NgFor_6_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_6], _TemplateRef_6_8);
      this[_compView_5].create(this[_MaterialRadioGroupComponent_5_5], [JSArrayOfViewContainer().of([this[_appEl_6]])]);
      this[_el_7] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_2]);
      this.addShimE(this[_el_7]);
      let _text_8 = html.Text.new('Daily disposable income');
      this[_el_7][$append](_text_8);
      this[_compView_9] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 9);
      this[_el_9] = this[_compView_9].rootEl;
      this[_el_2][$append](this[_el_9]);
      this.addShimC(html.HtmlElement._check(this[_el_9]));
      this[_MaterialRadioGroupComponent_9_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_10 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_10] = new src__core__linker__view_container.ViewContainer.new(10, 9, this, _anchor_10);
      let _TemplateRef_10_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_10], src__settings__settings_component$46template.viewFactory_SettingsComponent2);
      this[_NgFor_10_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_10], _TemplateRef_10_8);
      this[_compView_9].create(this[_MaterialRadioGroupComponent_9_5], [JSArrayOfViewContainer().of([this[_appEl_10]])]);
      this[_compView_1].create(this[_MaterialExpansionPanel_1_5], [const$ || (const$ = dart.constList([], dart.dynamic)), const$0 || (const$0 = dart.constList([], dart.dynamic)), const$1 || (const$1 = dart.constList([], dart.dynamic)), JSArrayOfDivElement().of([this[_el_2]]), const$2 || (const$2 = dart.constList([], dart.dynamic))]);
      this[_compView_11] = new material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.new(this, 11);
      this[_el_11] = this[_compView_11].rootEl;
      this[_el_0][$append](this[_el_11]);
      this[_el_11].className = 'betting-panel';
      this.createAttr(this[_el_11], 'name', 'Betting');
      this.addShimC(html.HtmlElement._check(this[_el_11]));
      this[_MaterialExpansionPanel_11_5] = new material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_compView_11].ref, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_el_12] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_12]);
      this[_el_13] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_12]);
      this.addShimE(this[_el_13]);
      let _text_14 = html.Text.new('Lottery');
      this[_el_13][$append](_text_14);
      this[_compView_15] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 15);
      this[_el_15] = this[_compView_15].rootEl;
      this[_el_12][$append](this[_el_15]);
      this.addShimC(html.HtmlElement._check(this[_el_15]));
      this[_MaterialRadioGroupComponent_15_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_16 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_16] = new src__core__linker__view_container.ViewContainer.new(16, 15, this, _anchor_16);
      let _TemplateRef_16_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_16], src__settings__settings_component$46template.viewFactory_SettingsComponent3);
      this[_NgFor_16_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_16], _TemplateRef_16_8);
      this[_compView_15].create(this[_MaterialRadioGroupComponent_15_5], [JSArrayOfViewContainer().of([this[_appEl_16]])]);
      this[_el_17] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_12]);
      this.addShimE(this[_el_17]);
      this[_el_18] = src__core__linker__app_view.createAndAppend(doc, 'strong', this[_el_17]);
      this.addShimE(this[_el_18]);
      let _text_19 = html.Text.new('Description:');
      this[_el_18][$append](_text_19);
      let _text_20 = html.Text.new(' ');
      this[_el_17][$append](_text_20);
      this[_text_21] = html.Text.new('');
      this[_el_17][$append](this[_text_21]);
      this[_el_22] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_12]);
      this.addShimE(this[_el_22]);
      let _text_23 = html.Text.new('Strategy');
      this[_el_22][$append](_text_23);
      this[_compView_24] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 24);
      this[_el_24] = this[_compView_24].rootEl;
      this[_el_12][$append](this[_el_24]);
      this.addShimC(html.HtmlElement._check(this[_el_24]));
      this[_MaterialRadioGroupComponent_24_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_25 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_25] = new src__core__linker__view_container.ViewContainer.new(25, 24, this, _anchor_25);
      let _TemplateRef_25_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_25], src__settings__settings_component$46template.viewFactory_SettingsComponent4);
      this[_NgFor_25_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_25], _TemplateRef_25_8);
      this[_compView_24].create(this[_MaterialRadioGroupComponent_24_5], [JSArrayOfViewContainer().of([this[_appEl_25]])]);
      this[_el_26] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_12]);
      this.addShimE(this[_el_26]);
      this[_el_27] = src__core__linker__app_view.createAndAppend(doc, 'strong', this[_el_26]);
      this.addShimE(this[_el_27]);
      let _text_28 = html.Text.new('Description:');
      this[_el_27][$append](_text_28);
      let _text_29 = html.Text.new(' ');
      this[_el_26][$append](_text_29);
      this[_text_30] = html.Text.new('');
      this[_el_26][$append](this[_text_30]);
      this[_compView_11].create(this[_MaterialExpansionPanel_11_5], [const$3 || (const$3 = dart.constList([], dart.dynamic)), const$4 || (const$4 = dart.constList([], dart.dynamic)), const$5 || (const$5 = dart.constList([], dart.dynamic)), JSArrayOfDivElement().of([this[_el_12]]), const$6 || (const$6 = dart.constList([], dart.dynamic))]);
      this[_compView_31] = new material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0.new(this, 31);
      this[_el_31] = this[_compView_31].rootEl;
      this[_el_0][$append](this[_el_31]);
      this.createAttr(this[_el_31], 'name', 'Other');
      this.addShimC(html.HtmlElement._check(this[_el_31]));
      this[_MaterialExpansionPanel_31_5] = new material_expansionpanel__material_expansionpanel.MaterialExpansionPanel.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), this[_compView_31].ref, utils__browser__dom_service__dom_service.DomService._check(this.parentView.injectorGet(dart.wrapType(utils__browser__dom_service__dom_service.DomService), this.viewData.parentIndex)));
      this[_el_32] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_32]);
      this[_el_33] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_32]);
      this.addShimE(this[_el_33]);
      let _text_34 = html.Text.new('Annual interest rate');
      this[_el_33][$append](_text_34);
      this[_compView_35] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 35);
      this[_el_35] = this[_compView_35].rootEl;
      this[_el_32][$append](this[_el_35]);
      this.createAttr(this[_el_35], 'label', 'Investing');
      this.addShimC(html.HtmlElement._check(this[_el_35]));
      this[_MaterialCheckboxComponent_35_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_35]), this[_compView_35].ref, null, null, null);
      this[_compView_35].create(this[_MaterialCheckboxComponent_35_5], [const$7 || (const$7 = dart.constList([], dart.dynamic))]);
      this[_el_36] = src__core__linker__app_view.createAndAppend(doc, 'br', this[_el_32]);
      this.addShimE(this[_el_36]);
      this[_compView_37] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 37);
      this[_el_37] = this[_compView_37].rootEl;
      this[_el_32][$append](this[_el_37]);
      this.addShimC(html.HtmlElement._check(this[_el_37]));
      this[_MaterialRadioGroupComponent_37_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_38 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_38] = new src__core__linker__view_container.ViewContainer.new(38, 37, this, _anchor_38);
      let _TemplateRef_38_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_38], src__settings__settings_component$46template.viewFactory_SettingsComponent5);
      this[_NgFor_38_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_38], _TemplateRef_38_8);
      this[_compView_37].create(this[_MaterialRadioGroupComponent_37_5], [JSArrayOfViewContainer().of([this[_appEl_38]])]);
      this[_el_39] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_32]);
      this.addShimE(this[_el_39]);
      let _text_40 = html.Text.new('Length of simulation');
      this[_el_39][$append](_text_40);
      this[_compView_41] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 41);
      this[_el_41] = this[_compView_41].rootEl;
      this[_el_32][$append](this[_el_41]);
      this.addShimC(html.HtmlElement._check(this[_el_41]));
      this[_MaterialRadioGroupComponent_41_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_42 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_42] = new src__core__linker__view_container.ViewContainer.new(42, 41, this, _anchor_42);
      let _TemplateRef_42_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_42], src__settings__settings_component$46template.viewFactory_SettingsComponent6);
      this[_NgFor_42_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_42], _TemplateRef_42_8);
      this[_compView_41].create(this[_MaterialRadioGroupComponent_41_5], [JSArrayOfViewContainer().of([this[_appEl_42]])]);
      this[_compView_31].create(this[_MaterialExpansionPanel_31_5], [const$8 || (const$8 = dart.constList([], dart.dynamic)), const$9 || (const$9 = dart.constList([], dart.dynamic)), const$10 || (const$10 = dart.constList([], dart.dynamic)), JSArrayOfDivElement().of([this[_el_32]]), const$11 || (const$11 = dart.constList([], dart.dynamic))]);
      this[_MaterialExpansionPanelSet_0_5].panels = JSArrayOfMaterialExpansionPanel().of([this[_MaterialExpansionPanel_1_5], this[_MaterialExpansionPanel_11_5], this[_MaterialExpansionPanel_31_5]]);
      let subscription_0 = this[_MaterialExpansionPanel_1_5].save.listen(this.eventHandler0(AsyncActionOfbool(), dart.bind(this.ctx, 'settingsUpdated')));
      let subscription_1 = this[_MaterialExpansionPanel_1_5].cancel.listen(this.eventHandler0(AsyncActionOfbool(), dart.bind(this.ctx, 'resetWallet')));
      let subscription_2 = this[_MaterialExpansionPanel_11_5].save.listen(this.eventHandler0(AsyncActionOfbool(), dart.bind(this.ctx, 'settingsUpdated')));
      let subscription_3 = this[_MaterialExpansionPanel_11_5].cancel.listen(this.eventHandler0(AsyncActionOfbool(), dart.bind(this.ctx, 'resetBetting')));
      let subscription_4 = this[_MaterialExpansionPanel_31_5].save.listen(this.eventHandler0(AsyncActionOfbool(), dart.bind(this.ctx, 'settingsUpdated')));
      let subscription_5 = this[_MaterialExpansionPanel_31_5].cancel.listen(this.eventHandler0(AsyncActionOfbool(), dart.bind(this.ctx, 'resetOther')));
      let subscription_6 = this[_MaterialCheckboxComponent_35_5].onChecked.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_checkedChange_35_0)));
      this.init(const$12 || (const$12 = dart.constList([], dart.dynamic)), [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 5 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 6) {
        return this[_MaterialRadioGroupComponent_5_5];
      }
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 9 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_MaterialRadioGroupComponent_9_5];
      }
      if ((token === dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 1 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 10) {
        return this[_MaterialExpansionPanel_1_5];
      }
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 15 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 16) {
        return this[_MaterialRadioGroupComponent_15_5];
      }
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 24 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 25) {
        return this[_MaterialRadioGroupComponent_24_5];
      }
      if ((token === dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 11 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 30) {
        return this[_MaterialExpansionPanel_11_5];
      }
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 37 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 38) {
        return this[_MaterialRadioGroupComponent_37_5];
      }
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 41 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 42) {
        return this[_MaterialRadioGroupComponent_41_5];
      }
      if ((token === dart.wrapType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel) || token === dart.wrapType(content__deferred_content_aware.DeferredContentAware)) && 31 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 42) {
        return this[_MaterialExpansionPanel_31_5];
      }
      if (token === dart.wrapType(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 42) {
        return this[_MaterialExpansionPanelSet_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (firstCheck) {
        this[_MaterialExpansionPanel_1_5].name = 'Wallet';
        changed = true;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate2('Initial: $', _ctx.settings.initialCash, '. Daily disposable income: $', _ctx.settings.dailyDisposable, '.');
      if (!(this[_expr_1] == currVal_1)) {
        this[_MaterialExpansionPanel_1_5].secondaryText = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_1].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialExpansionPanel_1_5].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_5].markAsCheckOnce();
      }
      if (firstCheck) {
        if (!(_ctx.initialCashOptions == null)) {
          this[_NgFor_6_9].ngForOf = _ctx.initialCashOptions;
        }
      }
      this[_NgFor_6_9].ngDoCheck();
      changed = false;
      if (changed) {
        this[_compView_9].markAsCheckOnce();
      }
      if (firstCheck) {
        if (!(_ctx.dailyDisposableOptions == null)) {
          this[_NgFor_10_9].ngForOf = _ctx.dailyDisposableOptions;
        }
      }
      this[_NgFor_10_9].ngDoCheck();
      changed = false;
      if (firstCheck) {
        this[_MaterialExpansionPanel_11_5].name = 'Betting';
        changed = true;
      }
      let currVal_5 = src__core__linker__app_view_utils.interpolate2('Lottery: ', _ctx.settings.lottery.shortName, '. Strategy: ', _ctx.settings.strategy.shortName, '.');
      if (!(this[_expr_5] == currVal_5)) {
        this[_MaterialExpansionPanel_11_5].secondaryText = currVal_5;
        changed = true;
        this[_expr_5] = currVal_5;
      }
      if (changed) {
        this[_compView_11].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialExpansionPanel_11_5].ngOnInit();
      }
      changed = false;
      if (changed) {
        this[_compView_15].markAsCheckOnce();
      }
      let currVal_6 = _ctx.settings.lotteries;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_NgFor_16_9].ngForOf = currVal_6;
        this[_expr_6] = currVal_6;
      }
      this[_NgFor_16_9].ngDoCheck();
      changed = false;
      if (changed) {
        this[_compView_24].markAsCheckOnce();
      }
      let currVal_8 = _ctx.settings.strategies;
      if (!core.identical(this[_expr_8], currVal_8)) {
        this[_NgFor_25_9].ngForOf = currVal_8;
        this[_expr_8] = currVal_8;
      }
      this[_NgFor_25_9].ngDoCheck();
      changed = false;
      if (firstCheck) {
        this[_MaterialExpansionPanel_31_5].name = 'Other';
        changed = true;
      }
      let currVal_11 = src__core__linker__app_view_utils.interpolate2('Interest rate: ', _ctx.settings.interestRate, '%. Years: ', _ctx.settings.years, '.');
      if (!(this[_expr_11] == currVal_11)) {
        this[_MaterialExpansionPanel_31_5].secondaryText = currVal_11;
        changed = true;
        this[_expr_11] = currVal_11;
      }
      if (changed) {
        this[_compView_31].markAsCheckOnce();
      }
      if (firstCheck) {
        this[_MaterialExpansionPanel_31_5].ngOnInit();
      }
      changed = false;
      if (firstCheck) {
        this[_MaterialCheckboxComponent_35_5].label = 'Investing';
        changed = true;
      }
      let currVal_13 = _ctx.isInvesting;
      if (!(this[_expr_13] == currVal_13)) {
        this[_MaterialCheckboxComponent_35_5].checked = currVal_13;
        changed = true;
        this[_expr_13] = currVal_13;
      }
      if (changed) {
        this[_compView_35].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_37].markAsCheckOnce();
      }
      if (firstCheck) {
        if (!(_ctx.interestRateOptions == null)) {
          this[_NgFor_38_9].ngForOf = _ctx.interestRateOptions;
        }
      }
      this[_NgFor_38_9].ngDoCheck();
      changed = false;
      if (changed) {
        this[_compView_41].markAsCheckOnce();
      }
      if (firstCheck) {
        if (!(_ctx.yearsOptions == null)) {
          this[_NgFor_42_9].ngForOf = _ctx.yearsOptions;
        }
      }
      this[_NgFor_42_9].ngDoCheck();
      this[_appEl_6].detectChangesInNestedViews();
      this[_appEl_10].detectChangesInNestedViews();
      this[_appEl_16].detectChangesInNestedViews();
      this[_appEl_25].detectChangesInNestedViews();
      this[_appEl_38].detectChangesInNestedViews();
      this[_appEl_42].detectChangesInNestedViews();
      if (dart.test(this[_query_MaterialRadioComponent_5_0_isDirty])) {
        this[_MaterialRadioGroupComponent_5_5].list = this[_appEl_6].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__settings__settings_component$46template._ViewSettingsComponent1, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewSettingsComponent1ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_5_0_isDirty] = false;
      }
      if (dart.test(this[_query_MaterialRadioComponent_9_0_isDirty])) {
        this[_MaterialRadioGroupComponent_9_5].list = this[_appEl_10].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__settings__settings_component$46template._ViewSettingsComponent2, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewSettingsComponent2ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_9_0_isDirty] = false;
      }
      if (dart.test(this[_query_MaterialRadioComponent_15_0_isDirty])) {
        this[_MaterialRadioGroupComponent_15_5].list = this[_appEl_16].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__settings__settings_component$46template._ViewSettingsComponent3, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewSettingsComponent3ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_15_0_isDirty] = false;
      }
      if (dart.test(this[_query_MaterialRadioComponent_24_0_isDirty])) {
        this[_MaterialRadioGroupComponent_24_5].list = this[_appEl_25].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__settings__settings_component$46template._ViewSettingsComponent4, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewSettingsComponent4ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_24_0_isDirty] = false;
      }
      if (dart.test(this[_query_MaterialRadioComponent_37_0_isDirty])) {
        this[_MaterialRadioGroupComponent_37_5].list = this[_appEl_38].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__settings__settings_component$46template._ViewSettingsComponent5, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewSettingsComponent5ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_37_0_isDirty] = false;
      }
      if (dart.test(this[_query_MaterialRadioComponent_41_0_isDirty])) {
        this[_MaterialRadioGroupComponent_41_5].list = this[_appEl_42].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__settings__settings_component$46template._ViewSettingsComponent6, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewSettingsComponent6ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_41_0_isDirty] = false;
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_5_5].ngAfterContentInit();
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_9_5].ngAfterContentInit();
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_15_5].ngAfterContentInit();
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_24_5].ngAfterContentInit();
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_37_5].ngAfterContentInit();
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_41_5].ngAfterContentInit();
      }
      let currVal_7 = src__core__linker__app_view_utils.interpolate0(_ctx.lottery.description);
      if (!core.identical(this[_expr_7], currVal_7)) {
        this[_text_21][$text] = core.String._check(currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_9 = src__core__linker__app_view_utils.interpolate0(_ctx.strategy.description);
      if (!core.identical(this[_expr_9], currVal_9)) {
        this[_text_30][$text] = core.String._check(currVal_9);
        this[_expr_9] = currVal_9;
      }
      this[_compView_35].detectHostChanges(firstCheck);
      this[_compView_1].detectChanges();
      this[_compView_5].detectChanges();
      this[_compView_9].detectChanges();
      this[_compView_11].detectChanges();
      this[_compView_15].detectChanges();
      this[_compView_24].detectChanges();
      this[_compView_31].detectChanges();
      this[_compView_35].detectChanges();
      this[_compView_37].detectChanges();
      this[_compView_41].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_6];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_10];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_16];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_25];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_38];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_appEl_42];
      t$3 == null ? null : t$3.destroyNestedViews();
      let t$4 = this[_compView_1];
      t$4 == null ? null : t$4.destroy();
      let t$5 = this[_compView_5];
      t$5 == null ? null : t$5.destroy();
      let t$6 = this[_compView_9];
      t$6 == null ? null : t$6.destroy();
      let t$7 = this[_compView_11];
      t$7 == null ? null : t$7.destroy();
      let t$8 = this[_compView_15];
      t$8 == null ? null : t$8.destroy();
      let t$9 = this[_compView_24];
      t$9 == null ? null : t$9.destroy();
      let t$10 = this[_compView_31];
      t$10 == null ? null : t$10.destroy();
      let t$11 = this[_compView_35];
      t$11 == null ? null : t$11.destroy();
      let t$12 = this[_compView_37];
      t$12 == null ? null : t$12.destroy();
      let t$13 = this[_compView_41];
      t$13 == null ? null : t$13.destroy();
      this[_MaterialRadioGroupComponent_5_5].ngOnDestroy();
      this[_MaterialRadioGroupComponent_9_5].ngOnDestroy();
      this[_MaterialExpansionPanel_1_5].ngOnDestroy();
      this[_MaterialRadioGroupComponent_15_5].ngOnDestroy();
      this[_MaterialRadioGroupComponent_24_5].ngOnDestroy();
      this[_MaterialExpansionPanel_11_5].ngOnDestroy();
      this[_MaterialRadioGroupComponent_37_5].ngOnDestroy();
      this[_MaterialRadioGroupComponent_41_5].ngOnDestroy();
      this[_MaterialExpansionPanel_31_5].ngOnDestroy();
      this[_MaterialExpansionPanelSet_0_5].ngOnDestroy();
    }
    [_handle_checkedChange_35_0]($event) {
      this.ctx.isInvesting = core.bool._check($event);
    }
  };
  (src__settings__settings_component$46template.ViewSettingsComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_MaterialExpansionPanelSet_0_5] = null;
    this[_query_MaterialExpansionPanel_0_0_isDirty] = true;
    this[_el_1] = null;
    this[_compView_1] = null;
    this[_MaterialExpansionPanel_1_5] = null;
    this[_query_AutoFocusDirective_1_0_isDirty] = true;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_compView_5] = null;
    this[_MaterialRadioGroupComponent_5_5] = null;
    this[_query_MaterialRadioComponent_5_0_isDirty] = true;
    this[_appEl_6] = null;
    this[_NgFor_6_9] = null;
    this[_el_7] = null;
    this[_el_9] = null;
    this[_compView_9] = null;
    this[_MaterialRadioGroupComponent_9_5] = null;
    this[_query_MaterialRadioComponent_9_0_isDirty] = true;
    this[_appEl_10] = null;
    this[_NgFor_10_9] = null;
    this[_el_11] = null;
    this[_compView_11] = null;
    this[_MaterialExpansionPanel_11_5] = null;
    this[_query_AutoFocusDirective_11_0_isDirty] = true;
    this[_el_12] = null;
    this[_el_13] = null;
    this[_el_15] = null;
    this[_compView_15] = null;
    this[_MaterialRadioGroupComponent_15_5] = null;
    this[_query_MaterialRadioComponent_15_0_isDirty] = true;
    this[_appEl_16] = null;
    this[_NgFor_16_9] = null;
    this[_el_17] = null;
    this[_el_18] = null;
    this[_text_21] = null;
    this[_el_22] = null;
    this[_el_24] = null;
    this[_compView_24] = null;
    this[_MaterialRadioGroupComponent_24_5] = null;
    this[_query_MaterialRadioComponent_24_0_isDirty] = true;
    this[_appEl_25] = null;
    this[_NgFor_25_9] = null;
    this[_el_26] = null;
    this[_el_27] = null;
    this[_text_30] = null;
    this[_el_31] = null;
    this[_compView_31] = null;
    this[_MaterialExpansionPanel_31_5] = null;
    this[_query_AutoFocusDirective_31_0_isDirty] = true;
    this[_el_32] = null;
    this[_el_33] = null;
    this[_el_35] = null;
    this[_compView_35] = null;
    this[_MaterialCheckboxComponent_35_5] = null;
    this[_el_36] = null;
    this[_el_37] = null;
    this[_compView_37] = null;
    this[_MaterialRadioGroupComponent_37_5] = null;
    this[_query_MaterialRadioComponent_37_0_isDirty] = true;
    this[_appEl_38] = null;
    this[_NgFor_38_9] = null;
    this[_el_39] = null;
    this[_el_41] = null;
    this[_compView_41] = null;
    this[_MaterialRadioGroupComponent_41_5] = null;
    this[_query_MaterialRadioComponent_41_0_isDirty] = true;
    this[_appEl_42] = null;
    this[_NgFor_42_9] = null;
    this[_expr_1] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_11] = null;
    this[_expr_13] = null;
    src__settings__settings_component$46template.ViewSettingsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('settings-component'));
    let t = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
    t == null ? src__settings__settings_component$46template.ViewSettingsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__settings__settings_component$46template.styles$SettingsComponent) : t;
    this.setupComponentType(src__settings__settings_component$46template.ViewSettingsComponent0._renderType);
  }).prototype = src__settings__settings_component$46template.ViewSettingsComponent0.prototype;
  dart.addTypeTests(src__settings__settings_component$46template.ViewSettingsComponent0);
  dart.setMethodSignature(src__settings__settings_component$46template.ViewSettingsComponent0, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template.ViewSettingsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_35_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template.ViewSettingsComponent0, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template.ViewSettingsComponent0.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_MaterialExpansionPanelSet_0_5]: dart.fieldType(material_expansionpanel__material_expansionpanel_set.MaterialExpansionPanelSet),
    [_query_MaterialExpansionPanel_0_0_isDirty]: dart.fieldType(core.bool),
    [_el_1]: dart.fieldType(html.Element),
    [_compView_1]: dart.fieldType(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0),
    [_MaterialExpansionPanel_1_5]: dart.fieldType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel),
    [_query_AutoFocusDirective_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.Element),
    [_el_5]: dart.fieldType(html.Element),
    [_compView_5]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_5_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_5_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_6]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_6_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_7]: dart.fieldType(html.Element),
    [_el_9]: dart.fieldType(html.Element),
    [_compView_9]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_9_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_9_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_10]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_10_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_11]: dart.fieldType(html.Element),
    [_compView_11]: dart.fieldType(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0),
    [_MaterialExpansionPanel_11_5]: dart.fieldType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel),
    [_query_AutoFocusDirective_11_0_isDirty]: dart.fieldType(core.bool),
    [_el_12]: dart.fieldType(html.DivElement),
    [_el_13]: dart.fieldType(html.Element),
    [_el_15]: dart.fieldType(html.Element),
    [_compView_15]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_15_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_15_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_16]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_16_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_17]: dart.fieldType(html.Element),
    [_el_18]: dart.fieldType(html.Element),
    [_text_21]: dart.fieldType(html.Text),
    [_el_22]: dart.fieldType(html.Element),
    [_el_24]: dart.fieldType(html.Element),
    [_compView_24]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_24_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_24_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_25]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_25_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_26]: dart.fieldType(html.Element),
    [_el_27]: dart.fieldType(html.Element),
    [_text_30]: dart.fieldType(html.Text),
    [_el_31]: dart.fieldType(html.Element),
    [_compView_31]: dart.fieldType(material_expansionpanel__material_expansionpanel$46template.ViewMaterialExpansionPanel0),
    [_MaterialExpansionPanel_31_5]: dart.fieldType(material_expansionpanel__material_expansionpanel.MaterialExpansionPanel),
    [_query_AutoFocusDirective_31_0_isDirty]: dart.fieldType(core.bool),
    [_el_32]: dart.fieldType(html.DivElement),
    [_el_33]: dart.fieldType(html.Element),
    [_el_35]: dart.fieldType(html.Element),
    [_compView_35]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_35_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
    [_el_36]: dart.fieldType(html.Element),
    [_el_37]: dart.fieldType(html.Element),
    [_compView_37]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_37_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_37_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_38]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_38_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_39]: dart.fieldType(html.Element),
    [_el_41]: dart.fieldType(html.Element),
    [_compView_41]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_41_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_41_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_42]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_42_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_expr_1]: dart.fieldType(core.String),
    [_expr_5]: dart.fieldType(core.String),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(core.String),
    [_expr_13]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__settings__settings_component$46template.ViewSettingsComponent0, {
    /*src__settings__settings_component$46template.ViewSettingsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__settings__settings_component$46template.viewFactory_SettingsComponent0 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template.ViewSettingsComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent0, AppViewAndintToAppViewOfSettingsComponent());
  const _compView_0 = Symbol('_compView_0');
  const _text_2 = Symbol('_text_2');
  const _expr_0 = Symbol('_expr_0');
  const _handle_checkedChange_0_0 = Symbol('_handle_checkedChange_0_0');
  src__settings__settings_component$46template._ViewSettingsComponent1 = class _ViewSettingsComponent1 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      this[_compView_0] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_MaterialRadioGroupComponent_5_5], null, null);
      let _text_1 = html.Text.new('$');
      this[_text_2] = html.Text.new('');
      this[_compView_0].create(this[_MaterialRadioComponent_0_5], [JSArrayOfText().of([_text_1, this[_text_2]])]);
      let subscription_0 = this[_MaterialRadioComponent_0_5].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_checkedChange_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_item = core.int._check(this.locals[$_get]('$implicit'));
      changed = false;
      let currVal_0 = local_item == _ctx.initialCash;
      if (!(this[_expr_0] === currVal_0)) {
        this[_MaterialRadioComponent_0_5].checked = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_query_MaterialRadioComponent_5_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialRadioComponent_0_5].ngOnDestroy();
    }
    [_handle_checkedChange_0_0]($event) {
      let local_item = core.int._check(this.locals[$_get]('$implicit'));
      this.ctx.initialCash = dart.dtest($event) ? local_item : this.ctx.initialCash;
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialRadioComponent_0_5] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__settings__settings_component$46template._ViewSettingsComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponent1.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponent1);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponent1, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponent1, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_radio__material_radio$46template.ViewMaterialRadioComponent0),
    [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio__material_radio.MaterialRadioComponent),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__settings__settings_component$46template.viewFactory_SettingsComponent1 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent1, AppViewAndintToAppViewOfSettingsComponent());
  src__settings__settings_component$46template._ViewSettingsComponent2 = class _ViewSettingsComponent2 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      this[_compView_0] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_MaterialRadioGroupComponent_9_5], null, null);
      let _text_1 = html.Text.new('$');
      this[_text_2] = html.Text.new('');
      this[_compView_0].create(this[_MaterialRadioComponent_0_5], [JSArrayOfText().of([_text_1, this[_text_2]])]);
      let subscription_0 = this[_MaterialRadioComponent_0_5].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_checkedChange_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_item = core.int._check(this.locals[$_get]('$implicit'));
      changed = false;
      let currVal_0 = local_item == _ctx.dailyDisposable;
      if (!(this[_expr_0] === currVal_0)) {
        this[_MaterialRadioComponent_0_5].checked = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_query_MaterialRadioComponent_9_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialRadioComponent_0_5].ngOnDestroy();
    }
    [_handle_checkedChange_0_0]($event) {
      let local_item = core.int._check(this.locals[$_get]('$implicit'));
      this.ctx.dailyDisposable = dart.dtest($event) ? local_item : this.ctx.dailyDisposable;
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialRadioComponent_0_5] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__settings__settings_component$46template._ViewSettingsComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponent2.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponent2);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponent2, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponent2, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_radio__material_radio$46template.ViewMaterialRadioComponent0),
    [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio__material_radio.MaterialRadioComponent),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__settings__settings_component$46template.viewFactory_SettingsComponent2 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent2, AppViewAndintToAppViewOfSettingsComponent());
  const _text_1 = Symbol('_text_1');
  src__settings__settings_component$46template._ViewSettingsComponent3 = class _ViewSettingsComponent3 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      this[_compView_0] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_MaterialRadioGroupComponent_15_5], null, null);
      this[_text_1] = html.Text.new('');
      this[_compView_0].create(this[_MaterialRadioComponent_0_5], [JSArrayOfText().of([this[_text_1]])]);
      let subscription_0 = this[_MaterialRadioComponent_0_5].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_checkedChange_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_item = src__lottery__lottery.Lottery._check(this.locals[$_get]('$implicit'));
      changed = false;
      let currVal_0 = dart.equals(local_item, _ctx.lottery);
      if (!(this[_expr_0] === currVal_0)) {
        this[_MaterialRadioComponent_0_5].checked = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item.name);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_1][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_query_MaterialRadioComponent_15_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialRadioComponent_0_5].ngOnDestroy();
    }
    [_handle_checkedChange_0_0]($event) {
      let local_item = src__lottery__lottery.Lottery._check(this.locals[$_get]('$implicit'));
      this.ctx.lottery = dart.dtest($event) ? local_item : this.ctx.lottery;
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialRadioComponent_0_5] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__settings__settings_component$46template._ViewSettingsComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponent3.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponent3);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponent3, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponent3, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_radio__material_radio$46template.ViewMaterialRadioComponent0),
    [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio__material_radio.MaterialRadioComponent),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__settings__settings_component$46template.viewFactory_SettingsComponent3 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponent3.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent3, AppViewAndintToAppViewOfSettingsComponent());
  const _text_3 = Symbol('_text_3');
  const _expr_2 = Symbol('_expr_2');
  src__settings__settings_component$46template._ViewSettingsComponent4 = class _ViewSettingsComponent4 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      this[_compView_0] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_MaterialRadioGroupComponent_24_5], null, null);
      this[_text_1] = html.Text.new('');
      let _text_2 = html.Text.new(' (');
      this[_text_3] = html.Text.new('');
      let _text_4 = html.Text.new(')');
      this[_compView_0].create(this[_MaterialRadioComponent_0_5], [JSArrayOfText().of([this[_text_1], _text_2, this[_text_3], _text_4])]);
      let subscription_0 = this[_MaterialRadioComponent_0_5].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_checkedChange_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_item = src__settings__settings.Strategy._check(this.locals[$_get]('$implicit'));
      changed = false;
      let currVal_0 = dart.equals(local_item, _ctx.strategy);
      if (!(this[_expr_0] === currVal_0)) {
        this[_MaterialRadioComponent_0_5].checked = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item.shortName);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_1][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_item.name);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_3][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_query_MaterialRadioComponent_24_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialRadioComponent_0_5].ngOnDestroy();
    }
    [_handle_checkedChange_0_0]($event) {
      let local_item = src__settings__settings.Strategy._check(this.locals[$_get]('$implicit'));
      this.ctx.strategy = dart.dtest($event) ? local_item : this.ctx.strategy;
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialRadioComponent_0_5] = null;
    this[_text_1] = null;
    this[_text_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__settings__settings_component$46template._ViewSettingsComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponent4.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponent4);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponent4, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponent4, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_radio__material_radio$46template.ViewMaterialRadioComponent0),
    [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio__material_radio.MaterialRadioComponent),
    [_text_1]: dart.fieldType(html.Text),
    [_text_3]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__settings__settings_component$46template.viewFactory_SettingsComponent4 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponent4.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent4, AppViewAndintToAppViewOfSettingsComponent());
  src__settings__settings_component$46template._ViewSettingsComponent5 = class _ViewSettingsComponent5 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      this[_compView_0] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_MaterialRadioGroupComponent_37_5], null, null);
      this[_text_1] = html.Text.new('');
      let _text_2 = html.Text.new('%');
      this[_compView_0].create(this[_MaterialRadioComponent_0_5], [JSArrayOfText().of([this[_text_1], _text_2])]);
      let subscription_0 = this[_MaterialRadioComponent_0_5].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_checkedChange_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_value = core.int._check(this.locals[$_get]('$implicit'));
      changed = false;
      let currVal_0 = !dart.test(_ctx.isInvesting);
      if (!(this[_expr_0] === currVal_0)) {
        this[_MaterialRadioComponent_0_5].disabled = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = local_value == _ctx.interestRate;
      if (!(this[_expr_1] === currVal_1)) {
        this[_MaterialRadioComponent_0_5].checked = currVal_1;
        changed = true;
        this[_expr_1] = currVal_1;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_value);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_1][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_query_MaterialRadioComponent_37_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialRadioComponent_0_5].ngOnDestroy();
    }
    [_handle_checkedChange_0_0]($event) {
      let local_value = core.int._check(this.locals[$_get]('$implicit'));
      this.ctx.interestRate = dart.dtest($event) ? local_value : this.ctx.interestRate;
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialRadioComponent_0_5] = null;
    this[_text_1] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__settings__settings_component$46template._ViewSettingsComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponent5.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponent5);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponent5, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponent5, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_radio__material_radio$46template.ViewMaterialRadioComponent0),
    [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio__material_radio.MaterialRadioComponent),
    [_text_1]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__settings__settings_component$46template.viewFactory_SettingsComponent5 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponent5.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent5, AppViewAndintToAppViewOfSettingsComponent());
  src__settings__settings_component$46template._ViewSettingsComponent6 = class _ViewSettingsComponent6 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      this[_compView_0] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_MaterialRadioGroupComponent_41_5], null, null);
      this[_text_1] = html.Text.new('');
      let _text_2 = html.Text.new(' year');
      this[_text_3] = html.Text.new('');
      this[_compView_0].create(this[_MaterialRadioComponent_0_5], [JSArrayOfText().of([this[_text_1], _text_2, this[_text_3]])]);
      let subscription_0 = this[_MaterialRadioComponent_0_5].onChecked.listen(this.eventHandler1(core.bool, core.bool, dart.bind(this, _handle_checkedChange_0_0)));
      this.init([this[_el_0]], [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      let local_value = core.int._check(this.locals[$_get]('$implicit'));
      changed = false;
      let currVal_0 = local_value == _ctx.years;
      if (!(this[_expr_0] === currVal_0)) {
        this[_MaterialRadioComponent_0_5].checked = currVal_0;
        changed = true;
        this[_expr_0] = currVal_0;
      }
      if (changed) {
        this[_compView_0].markAsCheckOnce();
      }
      this[_compView_0].detectHostChanges(firstCheck);
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_value);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_1][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(dart.notNull(local_value) > 1 ? 's' : '');
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_3][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_compView_0].detectChanges();
    }
    dirtyParentQueriesInternal() {
      src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_query_MaterialRadioComponent_41_0_isDirty] = true;
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
      this[_MaterialRadioComponent_0_5].ngOnDestroy();
    }
    [_handle_checkedChange_0_0]($event) {
      let local_value = core.int._check(this.locals[$_get]('$implicit'));
      this.ctx.years = dart.dtest($event) ? local_value : this.ctx.years;
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponent6.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_compView_0] = null;
    this[_MaterialRadioComponent_0_5] = null;
    this[_text_1] = null;
    this[_text_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__settings__settings_component$46template._ViewSettingsComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponent6.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponent6);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponent6, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    dirtyParentQueriesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_checkedChange_0_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponent6, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponent6.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_compView_0]: dart.fieldType(material_radio__material_radio$46template.ViewMaterialRadioComponent0),
    [_MaterialRadioComponent_0_5]: dart.fieldType(material_radio__material_radio.MaterialRadioComponent),
    [_text_1]: dart.fieldType(html.Text),
    [_text_3]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(core.bool),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__settings__settings_component$46template.viewFactory_SettingsComponent6 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponent6.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent6, AppViewAndintToAppViewOfSettingsComponent());
  dart.defineLazy(src__settings__settings_component$46template, {
    /*src__settings__settings_component$46template.styles$SettingsComponentHost*/get styles$SettingsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _SettingsComponent_0_5 = Symbol('_SettingsComponent_0_5');
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
  let const$13;
  let const$14;
  let const$15;
  let const$16;
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
  const _defaultPopupPositions_0_6 = Symbol('_defaultPopupPositions_0_6');
  const _Window_0_7 = Symbol('_Window_0_7');
  const _DomService_0_8 = Symbol('_DomService_0_8');
  const _AcxImperativeViewUtils_0_9 = Symbol('_AcxImperativeViewUtils_0_9');
  const _Document_0_10 = Symbol('_Document_0_10');
  const _DomRuler_0_11 = Symbol('_DomRuler_0_11');
  const _ManagedZone_0_12 = Symbol('_ManagedZone_0_12');
  let const$27;
  const _overlayContainerName_0_13 = Symbol('_overlayContainerName_0_13');
  let const$28;
  const _overlayContainerParent_0_14 = Symbol('_overlayContainerParent_0_14');
  let const$29;
  const _overlayContainer_0_15 = Symbol('_overlayContainer_0_15');
  const _overlaySyncDom_0_16 = Symbol('_overlaySyncDom_0_16');
  const _overlayRepositionLoop_0_17 = Symbol('_overlayRepositionLoop_0_17');
  const _OverlayStyleConfig_0_18 = Symbol('_OverlayStyleConfig_0_18');
  const _ZIndexer_0_19 = Symbol('_ZIndexer_0_19');
  const _OverlayDomRenderService_0_20 = Symbol('_OverlayDomRenderService_0_20');
  const _OverlayService_0_21 = Symbol('_OverlayService_0_21');
  const _DomPopupSourceFactory_0_22 = Symbol('_DomPopupSourceFactory_0_22');
  let const$30;
  const _Clock_0_23 = Symbol('_Clock_0_23');
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  src__settings__settings_component$46template._ViewSettingsComponentHost0 = class _ViewSettingsComponentHost0 extends src__core__linker__app_view.AppView {
    get [_defaultPopupPositions_0_6]() {
      if (this[__defaultPopupPositions_0_6] == null) {
        this[__defaultPopupPositions_0_6] = const$26 || (const$26 = dart.constList([const$13 || (const$13 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top center'}))), const$15 || (const$15 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top right', originX: const$14 || (const$14 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$17 || (const$17 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top left', originX: const$16 || (const$16 = dart.const(new laminate__enums__alignment.Alignment.new('Start', 'flex-start')))}))), const$19 || (const$19 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom center', originY: const$18 || (const$18 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$22 || (const$22 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom right', originX: const$20 || (const$20 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end'))), originY: const$21 || (const$21 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$25 || (const$25 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom left', originX: const$23 || (const$23 = dart.const(new laminate__enums__alignment.Alignment.new('Start', 'flex-start'))), originY: const$24 || (const$24 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))})))], laminate__enums__alignment.RelativePosition));
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
        this[__overlayContainerName_0_13] = laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$27 || (const$27 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_13];
    }
    get [_overlayContainerParent_0_14]() {
      if (this[__overlayContainerParent_0_14] == null) {
        this[__overlayContainerParent_0_14] = laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_10]), this.injectorGet(const$28 || (const$28 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerParent'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_14];
    }
    get [_overlayContainer_0_15]() {
      if (this[__overlayContainer_0_15] == null) {
        this[__overlayContainer_0_15] = laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_13]), html.HtmlElement._check(this[_overlayContainerParent_0_14]), this.injectorGet(const$29 || (const$29 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer'))), this.viewData.parentIndex, null));
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
        this[__Clock_0_23] = const$30 || (const$30 = dart.const(new time$.Clock.new()));
      }
      return this[__Clock_0_23];
    }
    build() {
      this[_compView_0] = new src__settings__settings_component$46template.ViewSettingsComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_SettingsComponent_0_5] = new src__settings__settings_component.SettingsComponent.new();
      this[_compView_0].create(this[_SettingsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfSettingsComponent()).new(0, this, this.rootEl, this[_SettingsComponent_0_5]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === (const$31 || (const$31 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions')))) && 0 === nodeIndex) {
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
      if (token === (const$32 || (const$32 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName')))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_13];
      }
      if (token === (const$33 || (const$33 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerParent')))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_14];
      }
      if (token === (const$34 || (const$34 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer')))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_15];
      }
      if (token === (const$35 || (const$35 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlaySyncDom')))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_16];
      }
      if (token === (const$36 || (const$36 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop')))) && 0 === nodeIndex) {
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
      if ((token === dart.wrapType(time$.Clock) || token === (const$37 || (const$37 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))))) && 0 === nodeIndex) {
        return this[_Clock_0_23];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_SettingsComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_SettingsComponent_0_5] = null;
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
    src__settings__settings_component$46template._ViewSettingsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponentHost0.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponentHost0);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponentHost0, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__settings__settings_component$46template._ViewSettingsComponentHost0, () => ({
    __proto__: dart.getGetters(src__settings__settings_component$46template._ViewSettingsComponentHost0.__proto__),
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
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponentHost0, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__settings__settings_component$46template.ViewSettingsComponent0),
    [_SettingsComponent_0_5]: dart.fieldType(src__settings__settings_component.SettingsComponent),
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
  src__settings__settings_component$46template.viewFactory_SettingsComponentHost0 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__settings__settings_component$46template, {
    /*src__settings__settings_component$46template.SettingsComponentNgFactory*/get SettingsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfSettingsComponent()).new('settings-component', src__settings__settings_component$46template.viewFactory_SettingsComponentHost0, src__settings__settings_component$46template._SettingsComponentMetadata));
    },
    /*src__settings__settings_component$46template._SettingsComponentMetadata*/get _SettingsComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__settings__settings_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__settings__settings_component$46template.initReflector = function() {
    if (dart.test(src__settings__settings_component$46template._visited)) {
      return;
    }
    src__settings__settings_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__settings__settings_component.SettingsComponent), src__settings__settings_component$46template.SettingsComponentNgFactory);
    angular$46template.initReflector();
    angular_components$46template.initReflector();
    src__lottery__lottery$46template.initReflector();
    src__settings__settings$46template.initReflector();
  };
  dart.fn(src__settings__settings_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/components_codelab/src/settings/settings_component.template.ddc", {
    "package:components_codelab/src/settings/settings_component.template.dart": src__settings__settings_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["settings_component.template.dart"],"names":[],"mappings":"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","file":"settings_component.template.ddc.js"}');
  // Exports:
  return {
    src__settings__settings_component$46template: src__settings__settings_component$46template
  };
});

//# sourceMappingURL=settings_component.template.ddc.js.map
