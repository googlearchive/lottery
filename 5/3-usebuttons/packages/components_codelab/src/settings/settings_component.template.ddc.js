define(['dart_sdk', 'packages/components_codelab/src/settings/settings_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular_components/material_radio/material_radio.template', 'packages/angular/src/core/zone/ng_zone', 'packages/angular_components/material_radio/material_radio', 'packages/angular/src/common/directives/ng_for', 'packages/angular_components/material_checkbox/material_checkbox.template', 'packages/angular_components/material_checkbox/material_checkbox', 'packages/components_codelab/src/settings/settings_component', 'packages/components_codelab/src/lottery/lottery', 'packages/components_codelab/src/settings/settings', 'packages/angular_components/laminate/enums/alignment', 'packages/angular_components/utils/browser/window/module', 'packages/angular_components/utils/browser/dom_service/angular_2', 'packages/angular_components/utils/browser/dom_service/dom_service', 'packages/angular_components/utils/disposer/disposer', 'packages/angular_components/utils/angular/imperative_view/imperative_view', 'packages/angular_components/laminate/ruler/dom_ruler', 'packages/angular_components/utils/angular/managed_zone/angular_2', 'packages/angular_components/laminate/overlay/module', 'packages/angular/src/core/di/opaque_token', 'packages/angular_components/src/laminate/overlay/render/overlay_style_config', 'packages/angular_components/laminate/overlay/zindexer', 'packages/angular_components/src/laminate/overlay/render/overlay_dom_render_service', 'packages/angular_components/src/laminate/overlay/overlay_service', 'packages/angular_components/src/laminate/popup/dom_popup_source', 'packages/quiver/time', 'packages/angular_components/src/utils/angular/managed_zone/managed_zone', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/angular_components/angular_components.template', 'packages/components_codelab/src/lottery/lottery.template', 'packages/components_codelab/src/settings/settings.template'], function(dart_sdk, settings_component$46css, view_type, constants, view, app_view_utils, app_view, material_radio, ng_zone, material_radio$, ng_for, material_checkbox, material_checkbox$, settings_component, lottery, settings, alignment, module, angular_2, dom_service, disposer, imperative_view, dom_ruler, angular_2$, module$, opaque_token, overlay_style_config, zindexer, overlay_dom_render_service, overlay_service, dom_popup_source, time, managed_zone, reflector, angular, angular_components, lottery$, settings$) {
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
  const material_radio__material_radio_group$46template = material_radio.material_radio__material_radio_group$46template;
  const material_radio__material_radio$46template = material_radio.material_radio__material_radio$46template;
  const src__core__zone__ng_zone = ng_zone.src__core__zone__ng_zone;
  const material_radio__material_radio_group = material_radio$.material_radio__material_radio_group;
  const material_radio__material_radio = material_radio$.material_radio__material_radio;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const material_checkbox__material_checkbox$46template = material_checkbox.material_checkbox__material_checkbox$46template;
  const material_checkbox__material_checkbox = material_checkbox$.material_checkbox__material_checkbox;
  const src__settings__settings_component = settings_component.src__settings__settings_component;
  const src__lottery__lottery = lottery.src__lottery__lottery;
  const src__settings__settings = settings.src__settings__settings;
  const laminate__enums__alignment = alignment.laminate__enums__alignment;
  const utils__browser__window__module = module.utils__browser__window__module;
  const utils__browser__dom_service__angular_2 = angular_2.utils__browser__dom_service__angular_2;
  const utils__browser__dom_service__dom_service = dom_service.utils__browser__dom_service__dom_service;
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
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let JSArrayOfViewContainer = () => (JSArrayOfViewContainer = dart.constFn(_interceptors.JSArray$(src__core__linker__view_container.ViewContainer)))();
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
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _text_6 = Symbol('_text_6');
  const _text_8 = Symbol('_text_8');
  const _el_10 = Symbol('_el_10');
  const _el_11 = Symbol('_el_11');
  const _el_13 = Symbol('_el_13');
  const _compView_13 = Symbol('_compView_13');
  const _MaterialRadioGroupComponent_13_5 = Symbol('_MaterialRadioGroupComponent_13_5');
  const _query_MaterialRadioComponent_13_0_isDirty = Symbol('_query_MaterialRadioComponent_13_0_isDirty');
  const _appEl_14 = Symbol('_appEl_14');
  const _NgFor_14_9 = Symbol('_NgFor_14_9');
  const _el_15 = Symbol('_el_15');
  const _el_17 = Symbol('_el_17');
  const _compView_17 = Symbol('_compView_17');
  const _MaterialRadioGroupComponent_17_5 = Symbol('_MaterialRadioGroupComponent_17_5');
  const _query_MaterialRadioComponent_17_0_isDirty = Symbol('_query_MaterialRadioComponent_17_0_isDirty');
  const _appEl_18 = Symbol('_appEl_18');
  const _NgFor_18_9 = Symbol('_NgFor_18_9');
  const _el_19 = Symbol('_el_19');
  const _el_21 = Symbol('_el_21');
  const _el_23 = Symbol('_el_23');
  const _el_24 = Symbol('_el_24');
  const _el_26 = Symbol('_el_26');
  const _text_28 = Symbol('_text_28');
  const _text_30 = Symbol('_text_30');
  const _el_32 = Symbol('_el_32');
  const _el_33 = Symbol('_el_33');
  const _el_35 = Symbol('_el_35');
  const _compView_35 = Symbol('_compView_35');
  const _MaterialRadioGroupComponent_35_5 = Symbol('_MaterialRadioGroupComponent_35_5');
  const _query_MaterialRadioComponent_35_0_isDirty = Symbol('_query_MaterialRadioComponent_35_0_isDirty');
  const _appEl_36 = Symbol('_appEl_36');
  const _NgFor_36_9 = Symbol('_NgFor_36_9');
  const _el_37 = Symbol('_el_37');
  const _el_38 = Symbol('_el_38');
  const _text_41 = Symbol('_text_41');
  const _el_42 = Symbol('_el_42');
  const _el_44 = Symbol('_el_44');
  const _compView_44 = Symbol('_compView_44');
  const _MaterialRadioGroupComponent_44_5 = Symbol('_MaterialRadioGroupComponent_44_5');
  const _query_MaterialRadioComponent_44_0_isDirty = Symbol('_query_MaterialRadioComponent_44_0_isDirty');
  const _appEl_45 = Symbol('_appEl_45');
  const _NgFor_45_9 = Symbol('_NgFor_45_9');
  const _el_46 = Symbol('_el_46');
  const _el_47 = Symbol('_el_47');
  const _text_50 = Symbol('_text_50');
  const _el_51 = Symbol('_el_51');
  const _el_53 = Symbol('_el_53');
  const _el_55 = Symbol('_el_55');
  const _el_56 = Symbol('_el_56');
  const _el_58 = Symbol('_el_58');
  const _text_60 = Symbol('_text_60');
  const _text_62 = Symbol('_text_62');
  const _el_64 = Symbol('_el_64');
  const _el_65 = Symbol('_el_65');
  const _el_67 = Symbol('_el_67');
  const _compView_67 = Symbol('_compView_67');
  const _MaterialCheckboxComponent_67_5 = Symbol('_MaterialCheckboxComponent_67_5');
  const _el_68 = Symbol('_el_68');
  const _el_69 = Symbol('_el_69');
  const _compView_69 = Symbol('_compView_69');
  const _MaterialRadioGroupComponent_69_5 = Symbol('_MaterialRadioGroupComponent_69_5');
  const _query_MaterialRadioComponent_69_0_isDirty = Symbol('_query_MaterialRadioComponent_69_0_isDirty');
  const _appEl_70 = Symbol('_appEl_70');
  const _NgFor_70_9 = Symbol('_NgFor_70_9');
  const _el_71 = Symbol('_el_71');
  const _el_73 = Symbol('_el_73');
  const _compView_73 = Symbol('_compView_73');
  const _MaterialRadioGroupComponent_73_5 = Symbol('_MaterialRadioGroupComponent_73_5');
  const _query_MaterialRadioComponent_73_0_isDirty = Symbol('_query_MaterialRadioComponent_73_0_isDirty');
  const _appEl_74 = Symbol('_appEl_74');
  const _NgFor_74_9 = Symbol('_NgFor_74_9');
  const _el_75 = Symbol('_el_75');
  const _el_77 = Symbol('_el_77');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _expr_13 = Symbol('_expr_13');
  let const$;
  const _handle_checkedChange_67_0 = Symbol('_handle_checkedChange_67_0');
  let const$0;
  const _MaterialRadioComponent_0_5 = Symbol('_MaterialRadioComponent_0_5');
  src__settings__settings_component$46template.ViewSettingsComponent0 = class ViewSettingsComponent0 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_1]);
      this.addShimE(this[_el_2]);
      let _text_3 = html.Text.new('Wallet');
      this[_el_2][$append](_text_3);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_1]);
      this.addShimE(this[_el_4]);
      let _text_5 = html.Text.new('Initial: $');
      this[_el_4][$append](_text_5);
      this[_text_6] = html.Text.new('');
      this[_el_4][$append](this[_text_6]);
      let _text_7 = html.Text.new('. Daily disposable income: $');
      this[_el_4][$append](_text_7);
      this[_text_8] = html.Text.new('');
      this[_el_4][$append](this[_text_8]);
      let _text_9 = html.Text.new('.');
      this[_el_4][$append](_text_9);
      this[_el_10] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this.addShimC(this[_el_10]);
      this[_el_11] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_10]);
      this.addShimE(this[_el_11]);
      let _text_12 = html.Text.new('Initial cash');
      this[_el_11][$append](_text_12);
      this[_compView_13] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 13);
      this[_el_13] = this[_compView_13].rootEl;
      this[_el_10][$append](this[_el_13]);
      this.addShimC(html.HtmlElement._check(this[_el_13]));
      this[_MaterialRadioGroupComponent_13_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_14 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_14] = new src__core__linker__view_container.ViewContainer.new(14, 13, this, _anchor_14);
      let _TemplateRef_14_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_14], src__settings__settings_component$46template.viewFactory_SettingsComponent1);
      this[_NgFor_14_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_14], _TemplateRef_14_8);
      this[_compView_13].create(this[_MaterialRadioGroupComponent_13_5], [JSArrayOfViewContainer().of([this[_appEl_14]])]);
      this[_el_15] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_10]);
      this.addShimE(this[_el_15]);
      let _text_16 = html.Text.new('Daily disposable income');
      this[_el_15][$append](_text_16);
      this[_compView_17] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 17);
      this[_el_17] = this[_compView_17].rootEl;
      this[_el_10][$append](this[_el_17]);
      this.addShimC(html.HtmlElement._check(this[_el_17]));
      this[_MaterialRadioGroupComponent_17_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_18 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_18] = new src__core__linker__view_container.ViewContainer.new(18, 17, this, _anchor_18);
      let _TemplateRef_18_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_18], src__settings__settings_component$46template.viewFactory_SettingsComponent2);
      this[_NgFor_18_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_18], _TemplateRef_18_8);
      this[_compView_17].create(this[_MaterialRadioGroupComponent_17_5], [JSArrayOfViewContainer().of([this[_appEl_18]])]);
      this[_el_19] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_1]));
      this.addShimC(this[_el_19]);
      let _text_20 = html.Text.new('Save');
      this[_el_19][$append](_text_20);
      this[_el_21] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_1]));
      this.addShimC(this[_el_21]);
      let _text_22 = html.Text.new('Cancel');
      this[_el_21][$append](_text_22);
      this[_el_23] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_23].className = 'betting-panel';
      this.addShimC(this[_el_23]);
      this[_el_24] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_23]);
      this.addShimE(this[_el_24]);
      let _text_25 = html.Text.new('Betting');
      this[_el_24][$append](_text_25);
      this[_el_26] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_23]);
      this.addShimE(this[_el_26]);
      let _text_27 = html.Text.new('Lottery: ');
      this[_el_26][$append](_text_27);
      this[_text_28] = html.Text.new('');
      this[_el_26][$append](this[_text_28]);
      let _text_29 = html.Text.new('. Strategy: ');
      this[_el_26][$append](_text_29);
      this[_text_30] = html.Text.new('');
      this[_el_26][$append](this[_text_30]);
      let _text_31 = html.Text.new('.');
      this[_el_26][$append](_text_31);
      this[_el_32] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_23]);
      this.addShimC(this[_el_32]);
      this[_el_33] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_32]);
      this.addShimE(this[_el_33]);
      let _text_34 = html.Text.new('Lottery');
      this[_el_33][$append](_text_34);
      this[_compView_35] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 35);
      this[_el_35] = this[_compView_35].rootEl;
      this[_el_32][$append](this[_el_35]);
      this.addShimC(html.HtmlElement._check(this[_el_35]));
      this[_MaterialRadioGroupComponent_35_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_36 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_36] = new src__core__linker__view_container.ViewContainer.new(36, 35, this, _anchor_36);
      let _TemplateRef_36_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_36], src__settings__settings_component$46template.viewFactory_SettingsComponent3);
      this[_NgFor_36_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_36], _TemplateRef_36_8);
      this[_compView_35].create(this[_MaterialRadioGroupComponent_35_5], [JSArrayOfViewContainer().of([this[_appEl_36]])]);
      this[_el_37] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_32]);
      this.addShimE(this[_el_37]);
      this[_el_38] = src__core__linker__app_view.createAndAppend(doc, 'strong', this[_el_37]);
      this.addShimE(this[_el_38]);
      let _text_39 = html.Text.new('Description:');
      this[_el_38][$append](_text_39);
      let _text_40 = html.Text.new(' ');
      this[_el_37][$append](_text_40);
      this[_text_41] = html.Text.new('');
      this[_el_37][$append](this[_text_41]);
      this[_el_42] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_32]);
      this.addShimE(this[_el_42]);
      let _text_43 = html.Text.new('Strategy');
      this[_el_42][$append](_text_43);
      this[_compView_44] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 44);
      this[_el_44] = this[_compView_44].rootEl;
      this[_el_32][$append](this[_el_44]);
      this.addShimC(html.HtmlElement._check(this[_el_44]));
      this[_MaterialRadioGroupComponent_44_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_45 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_45] = new src__core__linker__view_container.ViewContainer.new(45, 44, this, _anchor_45);
      let _TemplateRef_45_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_45], src__settings__settings_component$46template.viewFactory_SettingsComponent4);
      this[_NgFor_45_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_45], _TemplateRef_45_8);
      this[_compView_44].create(this[_MaterialRadioGroupComponent_44_5], [JSArrayOfViewContainer().of([this[_appEl_45]])]);
      this[_el_46] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_32]);
      this.addShimE(this[_el_46]);
      this[_el_47] = src__core__linker__app_view.createAndAppend(doc, 'strong', this[_el_46]);
      this.addShimE(this[_el_47]);
      let _text_48 = html.Text.new('Description:');
      this[_el_47][$append](_text_48);
      let _text_49 = html.Text.new(' ');
      this[_el_46][$append](_text_49);
      this[_text_50] = html.Text.new('');
      this[_el_46][$append](this[_text_50]);
      this[_el_51] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_23]));
      this.addShimC(this[_el_51]);
      let _text_52 = html.Text.new('Save');
      this[_el_51][$append](_text_52);
      this[_el_53] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_23]));
      this.addShimC(this[_el_53]);
      let _text_54 = html.Text.new('Cancel');
      this[_el_53][$append](_text_54);
      this[_el_55] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_55]);
      this[_el_56] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_55]);
      this.addShimE(this[_el_56]);
      let _text_57 = html.Text.new('Other');
      this[_el_56][$append](_text_57);
      this[_el_58] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_55]);
      this.addShimE(this[_el_58]);
      let _text_59 = html.Text.new('Interest rate: ');
      this[_el_58][$append](_text_59);
      this[_text_60] = html.Text.new('');
      this[_el_58][$append](this[_text_60]);
      let _text_61 = html.Text.new('%. Years: ');
      this[_el_58][$append](_text_61);
      this[_text_62] = html.Text.new('');
      this[_el_58][$append](this[_text_62]);
      let _text_63 = html.Text.new('.');
      this[_el_58][$append](_text_63);
      this[_el_64] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_55]);
      this.addShimC(this[_el_64]);
      this[_el_65] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_64]);
      this.addShimE(this[_el_65]);
      let _text_66 = html.Text.new('Annual interest rate');
      this[_el_65][$append](_text_66);
      this[_compView_67] = new material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0.new(this, 67);
      this[_el_67] = this[_compView_67].rootEl;
      this[_el_64][$append](this[_el_67]);
      this.createAttr(this[_el_67], 'label', 'Investing');
      this.addShimC(html.HtmlElement._check(this[_el_67]));
      this[_MaterialCheckboxComponent_67_5] = new material_checkbox__material_checkbox.MaterialCheckboxComponent.new(html.HtmlElement._check(this[_el_67]), this[_compView_67].ref, null, null, null);
      this[_compView_67].create(this[_MaterialCheckboxComponent_67_5], [const$ || (const$ = dart.constList([], dart.dynamic))]);
      this[_el_68] = src__core__linker__app_view.createAndAppend(doc, 'br', this[_el_64]);
      this.addShimE(this[_el_68]);
      this[_compView_69] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 69);
      this[_el_69] = this[_compView_69].rootEl;
      this[_el_64][$append](this[_el_69]);
      this.addShimC(html.HtmlElement._check(this[_el_69]));
      this[_MaterialRadioGroupComponent_69_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_70 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_70] = new src__core__linker__view_container.ViewContainer.new(70, 69, this, _anchor_70);
      let _TemplateRef_70_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_70], src__settings__settings_component$46template.viewFactory_SettingsComponent5);
      this[_NgFor_70_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_70], _TemplateRef_70_8);
      this[_compView_69].create(this[_MaterialRadioGroupComponent_69_5], [JSArrayOfViewContainer().of([this[_appEl_70]])]);
      this[_el_71] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_64]);
      this.addShimE(this[_el_71]);
      let _text_72 = html.Text.new('Length of simulation');
      this[_el_71][$append](_text_72);
      this[_compView_73] = new material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0.new(this, 73);
      this[_el_73] = this[_compView_73].rootEl;
      this[_el_64][$append](this[_el_73]);
      this.addShimC(html.HtmlElement._check(this[_el_73]));
      this[_MaterialRadioGroupComponent_73_5] = new material_radio__material_radio_group.MaterialRadioGroupComponent.new(src__core__zone__ng_zone.NgZone._check(this.parentView.injectorGet(dart.wrapType(src__core__zone__ng_zone.NgZone), this.viewData.parentIndex)), null);
      let _anchor_74 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_appEl_74] = new src__core__linker__view_container.ViewContainer.new(74, 73, this, _anchor_74);
      let _TemplateRef_74_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_74], src__settings__settings_component$46template.viewFactory_SettingsComponent6);
      this[_NgFor_74_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_74], _TemplateRef_74_8);
      this[_compView_73].create(this[_MaterialRadioGroupComponent_73_5], [JSArrayOfViewContainer().of([this[_appEl_74]])]);
      this[_el_75] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_55]));
      this.addShimC(this[_el_75]);
      let _text_76 = html.Text.new('Save');
      this[_el_75][$append](_text_76);
      this[_el_77] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_55]));
      this.addShimC(this[_el_77]);
      let _text_78 = html.Text.new('Cancel');
      this[_el_77][$append](_text_78);
      this[_el_19][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'settingsUpdated')));
      this[_el_21][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'resetWallet')));
      this[_el_51][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'settingsUpdated')));
      this[_el_53][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'resetBetting')));
      let subscription_0 = this[_MaterialCheckboxComponent_67_5].onChecked.listen(this.eventHandler1(dart.dynamic, dart.dynamic, dart.bind(this, _handle_checkedChange_67_0)));
      this[_el_75][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'settingsUpdated')));
      this[_el_77][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'resetOther')));
      this.init(const$0 || (const$0 = dart.constList([], dart.dynamic)), [subscription_0]);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 13 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 14) {
        return this[_MaterialRadioGroupComponent_13_5];
      }
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 17 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 18) {
        return this[_MaterialRadioGroupComponent_17_5];
      }
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 35 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 36) {
        return this[_MaterialRadioGroupComponent_35_5];
      }
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 44 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 45) {
        return this[_MaterialRadioGroupComponent_44_5];
      }
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 69 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 70) {
        return this[_MaterialRadioGroupComponent_69_5];
      }
      if (token === dart.wrapType(material_radio__material_radio_group.MaterialRadioGroupComponent) && 73 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 74) {
        return this[_MaterialRadioGroupComponent_73_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let changed = false;
      let firstCheck = this.cdState === 0;
      changed = false;
      if (changed) {
        this[_compView_13].markAsCheckOnce();
      }
      if (firstCheck) {
        if (!(_ctx.initialCashOptions == null)) {
          this[_NgFor_14_9].ngForOf = _ctx.initialCashOptions;
        }
      }
      this[_NgFor_14_9].ngDoCheck();
      changed = false;
      if (changed) {
        this[_compView_17].markAsCheckOnce();
      }
      if (firstCheck) {
        if (!(_ctx.dailyDisposableOptions == null)) {
          this[_NgFor_18_9].ngForOf = _ctx.dailyDisposableOptions;
        }
      }
      this[_NgFor_18_9].ngDoCheck();
      changed = false;
      if (changed) {
        this[_compView_35].markAsCheckOnce();
      }
      let currVal_6 = _ctx.settings.lotteries;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_NgFor_36_9].ngForOf = currVal_6;
        this[_expr_6] = currVal_6;
      }
      this[_NgFor_36_9].ngDoCheck();
      changed = false;
      if (changed) {
        this[_compView_44].markAsCheckOnce();
      }
      let currVal_8 = _ctx.settings.strategies;
      if (!core.identical(this[_expr_8], currVal_8)) {
        this[_NgFor_45_9].ngForOf = currVal_8;
        this[_expr_8] = currVal_8;
      }
      this[_NgFor_45_9].ngDoCheck();
      changed = false;
      if (firstCheck) {
        this[_MaterialCheckboxComponent_67_5].label = 'Investing';
        changed = true;
      }
      let currVal_13 = _ctx.isInvesting;
      if (!(this[_expr_13] == currVal_13)) {
        this[_MaterialCheckboxComponent_67_5].checked = currVal_13;
        changed = true;
        this[_expr_13] = currVal_13;
      }
      if (changed) {
        this[_compView_67].markAsCheckOnce();
      }
      changed = false;
      if (changed) {
        this[_compView_69].markAsCheckOnce();
      }
      if (firstCheck) {
        if (!(_ctx.interestRateOptions == null)) {
          this[_NgFor_70_9].ngForOf = _ctx.interestRateOptions;
        }
      }
      this[_NgFor_70_9].ngDoCheck();
      changed = false;
      if (changed) {
        this[_compView_73].markAsCheckOnce();
      }
      if (firstCheck) {
        if (!(_ctx.yearsOptions == null)) {
          this[_NgFor_74_9].ngForOf = _ctx.yearsOptions;
        }
      }
      this[_NgFor_74_9].ngDoCheck();
      this[_appEl_14].detectChangesInNestedViews();
      this[_appEl_18].detectChangesInNestedViews();
      this[_appEl_36].detectChangesInNestedViews();
      this[_appEl_45].detectChangesInNestedViews();
      this[_appEl_70].detectChangesInNestedViews();
      this[_appEl_74].detectChangesInNestedViews();
      if (dart.test(this[_query_MaterialRadioComponent_13_0_isDirty])) {
        this[_MaterialRadioGroupComponent_13_5].list = this[_appEl_14].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__settings__settings_component$46template._ViewSettingsComponent1, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewSettingsComponent1ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_13_0_isDirty] = false;
      }
      if (dart.test(this[_query_MaterialRadioComponent_17_0_isDirty])) {
        this[_MaterialRadioGroupComponent_17_5].list = this[_appEl_18].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__settings__settings_component$46template._ViewSettingsComponent2, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewSettingsComponent2ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_17_0_isDirty] = false;
      }
      if (dart.test(this[_query_MaterialRadioComponent_35_0_isDirty])) {
        this[_MaterialRadioGroupComponent_35_5].list = this[_appEl_36].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__settings__settings_component$46template._ViewSettingsComponent3, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewSettingsComponent3ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_35_0_isDirty] = false;
      }
      if (dart.test(this[_query_MaterialRadioComponent_44_0_isDirty])) {
        this[_MaterialRadioGroupComponent_44_5].list = this[_appEl_45].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__settings__settings_component$46template._ViewSettingsComponent4, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewSettingsComponent4ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_44_0_isDirty] = false;
      }
      if (dart.test(this[_query_MaterialRadioComponent_69_0_isDirty])) {
        this[_MaterialRadioGroupComponent_69_5].list = this[_appEl_70].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__settings__settings_component$46template._ViewSettingsComponent5, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewSettingsComponent5ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_69_0_isDirty] = false;
      }
      if (dart.test(this[_query_MaterialRadioComponent_73_0_isDirty])) {
        this[_MaterialRadioGroupComponent_73_5].list = this[_appEl_74].mapNestedViews(material_radio__material_radio.MaterialRadioComponent, src__settings__settings_component$46template._ViewSettingsComponent6, dart.fn(nestedView => JSArrayOfMaterialRadioComponent().of([nestedView[_MaterialRadioComponent_0_5]]), _ViewSettingsComponent6ToListOfMaterialRadioComponent()));
        this[_query_MaterialRadioComponent_73_0_isDirty] = false;
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_13_5].ngAfterContentInit();
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_17_5].ngAfterContentInit();
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_35_5].ngAfterContentInit();
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_44_5].ngAfterContentInit();
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_69_5].ngAfterContentInit();
      }
      if (firstCheck) {
        this[_MaterialRadioGroupComponent_73_5].ngAfterContentInit();
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.initialCash);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_6][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.dailyDisposable);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_8][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_4 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.lottery.shortName);
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_text_28][$text] = core.String._check(currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.strategy.shortName);
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_text_30][$text] = core.String._check(currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_7 = src__core__linker__app_view_utils.interpolate0(_ctx.lottery.description);
      if (!core.identical(this[_expr_7], currVal_7)) {
        this[_text_41][$text] = core.String._check(currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_9 = src__core__linker__app_view_utils.interpolate0(_ctx.strategy.description);
      if (!core.identical(this[_expr_9], currVal_9)) {
        this[_text_50][$text] = core.String._check(currVal_9);
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.interestRate);
      if (!core.identical(this[_expr_10], currVal_10)) {
        this[_text_60][$text] = core.String._check(currVal_10);
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.years);
      if (!core.identical(this[_expr_11], currVal_11)) {
        this[_text_62][$text] = core.String._check(currVal_11);
        this[_expr_11] = currVal_11;
      }
      this[_compView_67].detectHostChanges(firstCheck);
      this[_compView_13].detectChanges();
      this[_compView_17].detectChanges();
      this[_compView_35].detectChanges();
      this[_compView_44].detectChanges();
      this[_compView_67].detectChanges();
      this[_compView_69].detectChanges();
      this[_compView_73].detectChanges();
    }
    destroyInternal() {
      let t = this[_appEl_14];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_18];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_36];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_45];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_70];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_appEl_74];
      t$3 == null ? null : t$3.destroyNestedViews();
      let t$4 = this[_compView_13];
      t$4 == null ? null : t$4.destroy();
      let t$5 = this[_compView_17];
      t$5 == null ? null : t$5.destroy();
      let t$6 = this[_compView_35];
      t$6 == null ? null : t$6.destroy();
      let t$7 = this[_compView_44];
      t$7 == null ? null : t$7.destroy();
      let t$8 = this[_compView_67];
      t$8 == null ? null : t$8.destroy();
      let t$9 = this[_compView_69];
      t$9 == null ? null : t$9.destroy();
      let t$10 = this[_compView_73];
      t$10 == null ? null : t$10.destroy();
      this[_MaterialRadioGroupComponent_13_5].ngOnDestroy();
      this[_MaterialRadioGroupComponent_17_5].ngOnDestroy();
      this[_MaterialRadioGroupComponent_35_5].ngOnDestroy();
      this[_MaterialRadioGroupComponent_44_5].ngOnDestroy();
      this[_MaterialRadioGroupComponent_69_5].ngOnDestroy();
      this[_MaterialRadioGroupComponent_73_5].ngOnDestroy();
    }
    [_handle_checkedChange_67_0]($event) {
      this.ctx.isInvesting = core.bool._check($event);
    }
  };
  (src__settings__settings_component$46template.ViewSettingsComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_text_6] = null;
    this[_text_8] = null;
    this[_el_10] = null;
    this[_el_11] = null;
    this[_el_13] = null;
    this[_compView_13] = null;
    this[_MaterialRadioGroupComponent_13_5] = null;
    this[_query_MaterialRadioComponent_13_0_isDirty] = true;
    this[_appEl_14] = null;
    this[_NgFor_14_9] = null;
    this[_el_15] = null;
    this[_el_17] = null;
    this[_compView_17] = null;
    this[_MaterialRadioGroupComponent_17_5] = null;
    this[_query_MaterialRadioComponent_17_0_isDirty] = true;
    this[_appEl_18] = null;
    this[_NgFor_18_9] = null;
    this[_el_19] = null;
    this[_el_21] = null;
    this[_el_23] = null;
    this[_el_24] = null;
    this[_el_26] = null;
    this[_text_28] = null;
    this[_text_30] = null;
    this[_el_32] = null;
    this[_el_33] = null;
    this[_el_35] = null;
    this[_compView_35] = null;
    this[_MaterialRadioGroupComponent_35_5] = null;
    this[_query_MaterialRadioComponent_35_0_isDirty] = true;
    this[_appEl_36] = null;
    this[_NgFor_36_9] = null;
    this[_el_37] = null;
    this[_el_38] = null;
    this[_text_41] = null;
    this[_el_42] = null;
    this[_el_44] = null;
    this[_compView_44] = null;
    this[_MaterialRadioGroupComponent_44_5] = null;
    this[_query_MaterialRadioComponent_44_0_isDirty] = true;
    this[_appEl_45] = null;
    this[_NgFor_45_9] = null;
    this[_el_46] = null;
    this[_el_47] = null;
    this[_text_50] = null;
    this[_el_51] = null;
    this[_el_53] = null;
    this[_el_55] = null;
    this[_el_56] = null;
    this[_el_58] = null;
    this[_text_60] = null;
    this[_text_62] = null;
    this[_el_64] = null;
    this[_el_65] = null;
    this[_el_67] = null;
    this[_compView_67] = null;
    this[_MaterialCheckboxComponent_67_5] = null;
    this[_el_68] = null;
    this[_el_69] = null;
    this[_compView_69] = null;
    this[_MaterialRadioGroupComponent_69_5] = null;
    this[_query_MaterialRadioComponent_69_0_isDirty] = true;
    this[_appEl_70] = null;
    this[_NgFor_70_9] = null;
    this[_el_71] = null;
    this[_el_73] = null;
    this[_compView_73] = null;
    this[_MaterialRadioGroupComponent_73_5] = null;
    this[_query_MaterialRadioComponent_73_0_isDirty] = true;
    this[_appEl_74] = null;
    this[_NgFor_74_9] = null;
    this[_el_75] = null;
    this[_el_77] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
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
    [_handle_checkedChange_67_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template.ViewSettingsComponent0, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template.ViewSettingsComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.Element),
    [_text_6]: dart.fieldType(html.Text),
    [_text_8]: dart.fieldType(html.Text),
    [_el_10]: dart.fieldType(html.DivElement),
    [_el_11]: dart.fieldType(html.Element),
    [_el_13]: dart.fieldType(html.Element),
    [_compView_13]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_13_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_13_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_14]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_14_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_15]: dart.fieldType(html.Element),
    [_el_17]: dart.fieldType(html.Element),
    [_compView_17]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_17_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_17_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_18]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_18_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_19]: dart.fieldType(html.ButtonElement),
    [_el_21]: dart.fieldType(html.ButtonElement),
    [_el_23]: dart.fieldType(html.DivElement),
    [_el_24]: dart.fieldType(html.Element),
    [_el_26]: dart.fieldType(html.Element),
    [_text_28]: dart.fieldType(html.Text),
    [_text_30]: dart.fieldType(html.Text),
    [_el_32]: dart.fieldType(html.DivElement),
    [_el_33]: dart.fieldType(html.Element),
    [_el_35]: dart.fieldType(html.Element),
    [_compView_35]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_35_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_35_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_36]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_36_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_37]: dart.fieldType(html.Element),
    [_el_38]: dart.fieldType(html.Element),
    [_text_41]: dart.fieldType(html.Text),
    [_el_42]: dart.fieldType(html.Element),
    [_el_44]: dart.fieldType(html.Element),
    [_compView_44]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_44_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_44_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_45]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_45_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_46]: dart.fieldType(html.Element),
    [_el_47]: dart.fieldType(html.Element),
    [_text_50]: dart.fieldType(html.Text),
    [_el_51]: dart.fieldType(html.ButtonElement),
    [_el_53]: dart.fieldType(html.ButtonElement),
    [_el_55]: dart.fieldType(html.DivElement),
    [_el_56]: dart.fieldType(html.Element),
    [_el_58]: dart.fieldType(html.Element),
    [_text_60]: dart.fieldType(html.Text),
    [_text_62]: dart.fieldType(html.Text),
    [_el_64]: dart.fieldType(html.DivElement),
    [_el_65]: dart.fieldType(html.Element),
    [_el_67]: dart.fieldType(html.Element),
    [_compView_67]: dart.fieldType(material_checkbox__material_checkbox$46template.ViewMaterialCheckboxComponent0),
    [_MaterialCheckboxComponent_67_5]: dart.fieldType(material_checkbox__material_checkbox.MaterialCheckboxComponent),
    [_el_68]: dart.fieldType(html.Element),
    [_el_69]: dart.fieldType(html.Element),
    [_compView_69]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_69_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_69_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_70]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_70_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_71]: dart.fieldType(html.Element),
    [_el_73]: dart.fieldType(html.Element),
    [_compView_73]: dart.fieldType(material_radio__material_radio_group$46template.ViewMaterialRadioGroupComponent0),
    [_MaterialRadioGroupComponent_73_5]: dart.fieldType(material_radio__material_radio_group.MaterialRadioGroupComponent),
    [_query_MaterialRadioComponent_73_0_isDirty]: dart.fieldType(core.bool),
    [_appEl_74]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_74_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_75]: dart.fieldType(html.ButtonElement),
    [_el_77]: dart.fieldType(html.ButtonElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
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
  const _handle_checkedChange_0_0 = Symbol('_handle_checkedChange_0_0');
  src__settings__settings_component$46template._ViewSettingsComponent1 = class _ViewSettingsComponent1 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      this[_compView_0] = new material_radio__material_radio$46template.ViewMaterialRadioComponent0.new(this, 0);
      this[_el_0] = this[_compView_0].rootEl;
      this.addShimC(html.HtmlElement._check(this[_el_0]));
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_MaterialRadioGroupComponent_13_5], null, null);
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
      src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_query_MaterialRadioComponent_13_0_isDirty] = true;
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
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_MaterialRadioGroupComponent_17_5], null, null);
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
      src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_query_MaterialRadioComponent_17_0_isDirty] = true;
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
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_MaterialRadioGroupComponent_35_5], null, null);
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
      src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_query_MaterialRadioComponent_35_0_isDirty] = true;
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
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_MaterialRadioGroupComponent_44_5], null, null);
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
      src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_query_MaterialRadioComponent_44_0_isDirty] = true;
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
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_MaterialRadioGroupComponent_69_5], null, null);
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
      src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_query_MaterialRadioComponent_69_0_isDirty] = true;
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
      this[_MaterialRadioComponent_0_5] = new material_radio__material_radio.MaterialRadioComponent.new(html.HtmlElement._check(this[_el_0]), this[_compView_0].ref, src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_MaterialRadioGroupComponent_73_5], null, null);
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
      src__settings__settings_component$46template.ViewSettingsComponent0.as(this.parentView)[_query_MaterialRadioComponent_73_0_isDirty] = true;
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
  let const$13;
  let const$14;
  const _defaultPopupPositions_0_6 = Symbol('_defaultPopupPositions_0_6');
  const _Window_0_7 = Symbol('_Window_0_7');
  const _DomService_0_8 = Symbol('_DomService_0_8');
  const _AcxImperativeViewUtils_0_9 = Symbol('_AcxImperativeViewUtils_0_9');
  const _Document_0_10 = Symbol('_Document_0_10');
  const _DomRuler_0_11 = Symbol('_DomRuler_0_11');
  const _ManagedZone_0_12 = Symbol('_ManagedZone_0_12');
  let const$15;
  const _overlayContainerName_0_13 = Symbol('_overlayContainerName_0_13');
  let const$16;
  const _overlayContainerParent_0_14 = Symbol('_overlayContainerParent_0_14');
  let const$17;
  const _overlayContainer_0_15 = Symbol('_overlayContainer_0_15');
  const _overlaySyncDom_0_16 = Symbol('_overlaySyncDom_0_16');
  const _overlayRepositionLoop_0_17 = Symbol('_overlayRepositionLoop_0_17');
  const _OverlayStyleConfig_0_18 = Symbol('_OverlayStyleConfig_0_18');
  const _ZIndexer_0_19 = Symbol('_ZIndexer_0_19');
  const _OverlayDomRenderService_0_20 = Symbol('_OverlayDomRenderService_0_20');
  const _OverlayService_0_21 = Symbol('_OverlayService_0_21');
  const _DomPopupSourceFactory_0_22 = Symbol('_DomPopupSourceFactory_0_22');
  let const$18;
  const _Clock_0_23 = Symbol('_Clock_0_23');
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  src__settings__settings_component$46template._ViewSettingsComponentHost0 = class _ViewSettingsComponentHost0 extends src__core__linker__app_view.AppView {
    get [_defaultPopupPositions_0_6]() {
      if (this[__defaultPopupPositions_0_6] == null) {
        this[__defaultPopupPositions_0_6] = const$14 || (const$14 = dart.constList([const$1 || (const$1 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top center'}))), const$3 || (const$3 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top right', originX: const$2 || (const$2 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$5 || (const$5 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'top left', originX: const$4 || (const$4 = dart.const(new laminate__enums__alignment.Alignment.new('Start', 'flex-start')))}))), const$7 || (const$7 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom center', originY: const$6 || (const$6 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$10 || (const$10 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom right', originX: const$8 || (const$8 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end'))), originY: const$9 || (const$9 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))}))), const$13 || (const$13 = dart.const(new laminate__enums__alignment.RelativePosition.new({animationOrigin: 'bottom left', originX: const$11 || (const$11 = dart.const(new laminate__enums__alignment.Alignment.new('Start', 'flex-start'))), originY: const$12 || (const$12 = dart.const(new laminate__enums__alignment.Alignment.new('End', 'flex-end')))})))], laminate__enums__alignment.RelativePosition));
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
        this[__overlayContainerName_0_13] = laminate__overlay__module.getDefaultContainerName(this.injectorGet(const$15 || (const$15 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerName_0_13];
    }
    get [_overlayContainerParent_0_14]() {
      if (this[__overlayContainerParent_0_14] == null) {
        this[__overlayContainerParent_0_14] = laminate__overlay__module.getOverlayContainerParent(html.Document._check(this[_Document_0_10]), this.injectorGet(const$16 || (const$16 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerParent'))), this.viewData.parentIndex, null));
      }
      return this[__overlayContainerParent_0_14];
    }
    get [_overlayContainer_0_15]() {
      if (this[__overlayContainer_0_15] == null) {
        this[__overlayContainer_0_15] = laminate__overlay__module.getDefaultContainer(core.String._check(this[_overlayContainerName_0_13]), html.HtmlElement._check(this[_overlayContainerParent_0_14]), this.injectorGet(const$17 || (const$17 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer'))), this.viewData.parentIndex, null));
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
        this[__Clock_0_23] = const$18 || (const$18 = dart.const(new time$.Clock.new()));
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
      if (token === (const$19 || (const$19 = dart.const(new (OpaqueTokenOfListOfRelativePosition()).new('defaultPopupPositions')))) && 0 === nodeIndex) {
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
      if (token === (const$20 || (const$20 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerName')))) && 0 === nodeIndex) {
        return this[_overlayContainerName_0_13];
      }
      if (token === (const$21 || (const$21 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainerParent')))) && 0 === nodeIndex) {
        return this[_overlayContainerParent_0_14];
      }
      if (token === (const$22 || (const$22 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayContainer')))) && 0 === nodeIndex) {
        return this[_overlayContainer_0_15];
      }
      if (token === (const$23 || (const$23 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlaySyncDom')))) && 0 === nodeIndex) {
        return this[_overlaySyncDom_0_16];
      }
      if (token === (const$24 || (const$24 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('overlayRepositionLoop')))) && 0 === nodeIndex) {
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
      if ((token === dart.wrapType(time$.Clock) || token === (const$25 || (const$25 = dart.const(new src__core__di__opaque_token.OpaqueToken.new('third_party.dart_src.acx.material_datepicker.datepickerClock'))))) && 0 === nodeIndex) {
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
