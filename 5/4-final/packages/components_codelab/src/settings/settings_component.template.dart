// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'settings_component.dart';
export 'settings_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:components_codelab/src/lottery/lottery.dart';
import 'package:components_codelab/src/settings/settings.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:components_codelab/src/lottery/lottery.template.dart' as _ref2;
import 'package:components_codelab/src/settings/settings.template.dart' as _ref3;

import 'package:components_codelab/src/settings/settings_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'settings_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular_components/material_expansionpanel/material_expansionpanel_set.dart' as import4;
import 'package:angular/src/core/linker/query_list.dart' as import5;
import 'package:angular_components/material_expansionpanel/material_expansionpanel.template.dart' as import6;
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart' as import7;
import 'package:angular_components/material_radio/material_radio_group.template.dart' as import8;
import 'package:angular_components/material_radio/material_radio_group.dart' as import9;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import11;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as import12;
import 'package:angular_components/material_checkbox/material_checkbox.dart' as import13;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import15;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import17;
import 'package:angular/angular.dart';
import 'package:angular/src/core/zone/ng_zone.dart' as import19;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import20;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_components/content/deferred_content_aware.dart' as import22;
import 'package:angular_components/material_radio/material_radio.template.dart' as import23;
import 'package:angular_components/material_radio/material_radio.dart' as import24;
import 'dart:core';
import '../lottery/lottery.dart' as import26;
import 'settings.dart' as import27;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import28;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import29;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import30;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import31;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import32;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import33;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import34;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import35;
import 'package:angular_components/laminate/enums/alignment.dart' as import36;
import 'package:angular_components/utils/browser/window/module.dart' as import37;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import38;
import 'package:angular_components/utils/disposer/disposer.dart' as import39;
import 'package:angular/src/core/linker/component_loader.dart' as import40;
import 'package:angular_components/laminate/overlay/module.dart' as import41;
import 'package:angular/src/core/di/opaque_token.dart' as import42;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import43;

const List<dynamic> styles$SettingsComponent = const [import0.styles];

class ViewSettingsComponent0 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import4.MaterialExpansionPanelSet _MaterialExpansionPanelSet_0_4;
  final import5.QueryList _query_MaterialExpansionPanel_0_0 = new import5.QueryList();
  import3.Element _el_1;
  import6.ViewMaterialExpansionPanel0 _compView_1;
  import7.MaterialExpansionPanel _MaterialExpansionPanel_1_4;
  final import5.QueryList _query_AutoFocusDirective_1_0 = new import5.QueryList();
  import3.DivElement _el_2;
  import3.Element _el_3;
  import3.Element _el_5;
  import8.ViewMaterialRadioGroupComponent0 _compView_5;
  import9.MaterialRadioGroupComponent _MaterialRadioGroupComponent_5_4;
  final import5.QueryList _query_MaterialRadioComponent_5_0 = new import5.QueryList();
  ViewContainer _appEl_6;
  import11.NgFor _NgFor_6_7;
  import3.Element _el_7;
  import3.Element _el_9;
  import8.ViewMaterialRadioGroupComponent0 _compView_9;
  import9.MaterialRadioGroupComponent _MaterialRadioGroupComponent_9_4;
  final import5.QueryList _query_MaterialRadioComponent_9_0 = new import5.QueryList();
  ViewContainer _appEl_10;
  import11.NgFor _NgFor_10_7;
  import3.Element _el_11;
  import6.ViewMaterialExpansionPanel0 _compView_11;
  import7.MaterialExpansionPanel _MaterialExpansionPanel_11_4;
  final import5.QueryList _query_AutoFocusDirective_11_0 = new import5.QueryList();
  import3.DivElement _el_12;
  import3.Element _el_13;
  import3.Element _el_15;
  import8.ViewMaterialRadioGroupComponent0 _compView_15;
  import9.MaterialRadioGroupComponent _MaterialRadioGroupComponent_15_4;
  final import5.QueryList _query_MaterialRadioComponent_15_0 = new import5.QueryList();
  ViewContainer _appEl_16;
  import11.NgFor _NgFor_16_7;
  import3.Element _el_17;
  import3.Element _el_18;
  import3.Text _text_20;
  import3.Element _el_21;
  import3.Element _el_23;
  import8.ViewMaterialRadioGroupComponent0 _compView_23;
  import9.MaterialRadioGroupComponent _MaterialRadioGroupComponent_23_4;
  final import5.QueryList _query_MaterialRadioComponent_23_0 = new import5.QueryList();
  ViewContainer _appEl_24;
  import11.NgFor _NgFor_24_7;
  import3.Element _el_25;
  import3.Element _el_26;
  import3.Text _text_28;
  import3.Element _el_29;
  import6.ViewMaterialExpansionPanel0 _compView_29;
  import7.MaterialExpansionPanel _MaterialExpansionPanel_29_4;
  final import5.QueryList _query_AutoFocusDirective_29_0 = new import5.QueryList();
  import3.DivElement _el_30;
  import3.Element _el_31;
  import3.Element _el_33;
  import12.ViewMaterialCheckboxComponent0 _compView_33;
  import13.MaterialCheckboxComponent _MaterialCheckboxComponent_33_4;
  import3.Element _el_34;
  import3.Element _el_35;
  import8.ViewMaterialRadioGroupComponent0 _compView_35;
  import9.MaterialRadioGroupComponent _MaterialRadioGroupComponent_35_4;
  final import5.QueryList _query_MaterialRadioComponent_35_0 = new import5.QueryList();
  ViewContainer _appEl_36;
  import11.NgFor _NgFor_36_7;
  import3.Element _el_37;
  import3.Element _el_39;
  import8.ViewMaterialRadioGroupComponent0 _compView_39;
  import9.MaterialRadioGroupComponent _MaterialRadioGroupComponent_39_4;
  final import5.QueryList _query_MaterialRadioComponent_39_0 = new import5.QueryList();
  ViewContainer _appEl_40;
  import11.NgFor _NgFor_40_7;
  String _expr_1;
  String _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  String _expr_11;
  bool _expr_13;
  static RenderComponentType _renderType;
  ViewSettingsComponent0(AppView<dynamic> parentView, num parentIndex) : super(import15.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('settings-component');
    _renderType ??= import17.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$SettingsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'material-expansionpanel-set', parentRenderNode);
    addShimE(_el_0);
    _MaterialExpansionPanelSet_0_4 = new import4.MaterialExpansionPanelSet();
    _compView_1 = new import6.ViewMaterialExpansionPanel0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'name', 'Wallet');
    addShimC(_el_1);
    _MaterialExpansionPanel_1_4 = new import7.MaterialExpansionPanel(parentView.injectorGet(import19.NgZone, viewData.parentIndex), _compView_1.ref, parentView.injectorGet(import20.DomService, viewData.parentIndex));
    _el_2 = doc.createElement('div');
    addShimC(_el_2);
    _el_3 = createAndAppend(doc, 'h3', _el_2);
    addShimE(_el_3);
    import3.Text _text_4 = new import3.Text('Initial cash');
    _el_3.append(_text_4);
    _compView_5 = new import8.ViewMaterialRadioGroupComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    _el_2.append(_el_5);
    addShimC(_el_5);
    _MaterialRadioGroupComponent_5_4 = new import9.MaterialRadioGroupComponent(parentView.injectorGet(import19.NgZone, viewData.parentIndex), null);
    var _anchor_6 = ngAnchor.clone(false);
    _appEl_6 = new ViewContainer(6, 5, this, _anchor_6);
    TemplateRef _TemplateRef_6_6 = new TemplateRef(_appEl_6, viewFactory_SettingsComponent1);
    _NgFor_6_7 = new import11.NgFor(_appEl_6, _TemplateRef_6_6);
    _compView_5.create(_MaterialRadioGroupComponent_5_4, [
      [_appEl_6]
    ]);
    _el_7 = createAndAppend(doc, 'h3', _el_2);
    addShimE(_el_7);
    import3.Text _text_8 = new import3.Text('Daily disposable income');
    _el_7.append(_text_8);
    _compView_9 = new import8.ViewMaterialRadioGroupComponent0(this, 9);
    _el_9 = _compView_9.rootEl;
    _el_2.append(_el_9);
    addShimC(_el_9);
    _MaterialRadioGroupComponent_9_4 = new import9.MaterialRadioGroupComponent(parentView.injectorGet(import19.NgZone, viewData.parentIndex), null);
    var _anchor_10 = ngAnchor.clone(false);
    _appEl_10 = new ViewContainer(10, 9, this, _anchor_10);
    TemplateRef _TemplateRef_10_6 = new TemplateRef(_appEl_10, viewFactory_SettingsComponent2);
    _NgFor_10_7 = new import11.NgFor(_appEl_10, _TemplateRef_10_6);
    _compView_9.create(_MaterialRadioGroupComponent_9_4, [
      [_appEl_10]
    ]);
    _query_AutoFocusDirective_1_0.reset([]);
    _MaterialExpansionPanel_1_4.autoFocusChild = _query_AutoFocusDirective_1_0.first;
    _compView_1.create(_MaterialExpansionPanel_1_4, [
      const [],
      const [],
      [_el_2],
      const []
    ]);
    _compView_11 = new import6.ViewMaterialExpansionPanel0(this, 11);
    _el_11 = _compView_11.rootEl;
    _el_0.append(_el_11);
    _el_11.className = 'betting-panel';
    createAttr(_el_11, 'name', 'Betting');
    addShimC(_el_11);
    _MaterialExpansionPanel_11_4 = new import7.MaterialExpansionPanel(parentView.injectorGet(import19.NgZone, viewData.parentIndex), _compView_11.ref, parentView.injectorGet(import20.DomService, viewData.parentIndex));
    _el_12 = doc.createElement('div');
    addShimC(_el_12);
    _el_13 = createAndAppend(doc, 'h3', _el_12);
    addShimE(_el_13);
    import3.Text _text_14 = new import3.Text('Lottery');
    _el_13.append(_text_14);
    _compView_15 = new import8.ViewMaterialRadioGroupComponent0(this, 15);
    _el_15 = _compView_15.rootEl;
    _el_12.append(_el_15);
    addShimC(_el_15);
    _MaterialRadioGroupComponent_15_4 = new import9.MaterialRadioGroupComponent(parentView.injectorGet(import19.NgZone, viewData.parentIndex), null);
    var _anchor_16 = ngAnchor.clone(false);
    _appEl_16 = new ViewContainer(16, 15, this, _anchor_16);
    TemplateRef _TemplateRef_16_6 = new TemplateRef(_appEl_16, viewFactory_SettingsComponent3);
    _NgFor_16_7 = new import11.NgFor(_appEl_16, _TemplateRef_16_6);
    _compView_15.create(_MaterialRadioGroupComponent_15_4, [
      [_appEl_16]
    ]);
    _el_17 = createAndAppend(doc, 'p', _el_12);
    addShimE(_el_17);
    _el_18 = createAndAppend(doc, 'strong', _el_17);
    addShimE(_el_18);
    import3.Text _text_19 = new import3.Text('Description:');
    _el_18.append(_text_19);
    _text_20 = new import3.Text('');
    _el_17.append(_text_20);
    _el_21 = createAndAppend(doc, 'h3', _el_12);
    addShimE(_el_21);
    import3.Text _text_22 = new import3.Text('Strategy');
    _el_21.append(_text_22);
    _compView_23 = new import8.ViewMaterialRadioGroupComponent0(this, 23);
    _el_23 = _compView_23.rootEl;
    _el_12.append(_el_23);
    addShimC(_el_23);
    _MaterialRadioGroupComponent_23_4 = new import9.MaterialRadioGroupComponent(parentView.injectorGet(import19.NgZone, viewData.parentIndex), null);
    var _anchor_24 = ngAnchor.clone(false);
    _appEl_24 = new ViewContainer(24, 23, this, _anchor_24);
    TemplateRef _TemplateRef_24_6 = new TemplateRef(_appEl_24, viewFactory_SettingsComponent4);
    _NgFor_24_7 = new import11.NgFor(_appEl_24, _TemplateRef_24_6);
    _compView_23.create(_MaterialRadioGroupComponent_23_4, [
      [_appEl_24]
    ]);
    _el_25 = createAndAppend(doc, 'p', _el_12);
    addShimE(_el_25);
    _el_26 = createAndAppend(doc, 'strong', _el_25);
    addShimE(_el_26);
    import3.Text _text_27 = new import3.Text('Description:');
    _el_26.append(_text_27);
    _text_28 = new import3.Text('');
    _el_25.append(_text_28);
    _query_AutoFocusDirective_11_0.reset([]);
    _MaterialExpansionPanel_11_4.autoFocusChild = _query_AutoFocusDirective_11_0.first;
    _compView_11.create(_MaterialExpansionPanel_11_4, [
      const [],
      const [],
      [_el_12],
      const []
    ]);
    _compView_29 = new import6.ViewMaterialExpansionPanel0(this, 29);
    _el_29 = _compView_29.rootEl;
    _el_0.append(_el_29);
    createAttr(_el_29, 'name', 'Other');
    addShimC(_el_29);
    _MaterialExpansionPanel_29_4 = new import7.MaterialExpansionPanel(parentView.injectorGet(import19.NgZone, viewData.parentIndex), _compView_29.ref, parentView.injectorGet(import20.DomService, viewData.parentIndex));
    _el_30 = doc.createElement('div');
    addShimC(_el_30);
    _el_31 = createAndAppend(doc, 'h3', _el_30);
    addShimE(_el_31);
    import3.Text _text_32 = new import3.Text('Annual interest rate');
    _el_31.append(_text_32);
    _compView_33 = new import12.ViewMaterialCheckboxComponent0(this, 33);
    _el_33 = _compView_33.rootEl;
    _el_30.append(_el_33);
    createAttr(_el_33, 'label', 'Investing');
    addShimC(_el_33);
    _MaterialCheckboxComponent_33_4 = new import13.MaterialCheckboxComponent(_el_33, _compView_33.ref, null, null, null);
    _compView_33.create(_MaterialCheckboxComponent_33_4, [const []]);
    _el_34 = createAndAppend(doc, 'br', _el_30);
    addShimE(_el_34);
    _compView_35 = new import8.ViewMaterialRadioGroupComponent0(this, 35);
    _el_35 = _compView_35.rootEl;
    _el_30.append(_el_35);
    addShimC(_el_35);
    _MaterialRadioGroupComponent_35_4 = new import9.MaterialRadioGroupComponent(parentView.injectorGet(import19.NgZone, viewData.parentIndex), null);
    var _anchor_36 = ngAnchor.clone(false);
    _appEl_36 = new ViewContainer(36, 35, this, _anchor_36);
    TemplateRef _TemplateRef_36_6 = new TemplateRef(_appEl_36, viewFactory_SettingsComponent5);
    _NgFor_36_7 = new import11.NgFor(_appEl_36, _TemplateRef_36_6);
    _compView_35.create(_MaterialRadioGroupComponent_35_4, [
      [_appEl_36]
    ]);
    _el_37 = createAndAppend(doc, 'h3', _el_30);
    addShimE(_el_37);
    import3.Text _text_38 = new import3.Text('Length of simulation');
    _el_37.append(_text_38);
    _compView_39 = new import8.ViewMaterialRadioGroupComponent0(this, 39);
    _el_39 = _compView_39.rootEl;
    _el_30.append(_el_39);
    addShimC(_el_39);
    _MaterialRadioGroupComponent_39_4 = new import9.MaterialRadioGroupComponent(parentView.injectorGet(import19.NgZone, viewData.parentIndex), null);
    var _anchor_40 = ngAnchor.clone(false);
    _appEl_40 = new ViewContainer(40, 39, this, _anchor_40);
    TemplateRef _TemplateRef_40_6 = new TemplateRef(_appEl_40, viewFactory_SettingsComponent6);
    _NgFor_40_7 = new import11.NgFor(_appEl_40, _TemplateRef_40_6);
    _compView_39.create(_MaterialRadioGroupComponent_39_4, [
      [_appEl_40]
    ]);
    _query_AutoFocusDirective_29_0.reset([]);
    _MaterialExpansionPanel_29_4.autoFocusChild = _query_AutoFocusDirective_29_0.first;
    _compView_29.create(_MaterialExpansionPanel_29_4, [
      const [],
      const [],
      [_el_30],
      const []
    ]);
    final subscription_0 = _MaterialExpansionPanel_1_4.save.listen(eventHandler0(ctx.settingsUpdated));
    final subscription_1 = _MaterialExpansionPanel_1_4.cancel.listen(eventHandler0(ctx.resetWallet));
    final subscription_2 = _MaterialExpansionPanel_11_4.save.listen(eventHandler0(ctx.settingsUpdated));
    final subscription_3 = _MaterialExpansionPanel_11_4.cancel.listen(eventHandler0(ctx.resetBetting));
    final subscription_4 = _MaterialExpansionPanel_29_4.save.listen(eventHandler0(ctx.settingsUpdated));
    final subscription_5 = _MaterialExpansionPanel_29_4.cancel.listen(eventHandler0(ctx.resetOther));
    final subscription_6 = _MaterialCheckboxComponent_33_4.onChecked.listen(eventHandler1(_handle_checkedChange_33_0));
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import9.MaterialRadioGroupComponent) && ((5 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialRadioGroupComponent_5_4;
    }
    if ((identical(token, import9.MaterialRadioGroupComponent) && ((9 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _MaterialRadioGroupComponent_9_4;
    }
    if (((identical(token, import7.MaterialExpansionPanel) || identical(token, import22.DeferredContentAware)) && ((1 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _MaterialExpansionPanel_1_4;
    }
    if ((identical(token, import9.MaterialRadioGroupComponent) && ((15 <= nodeIndex) && (nodeIndex <= 16)))) {
      return _MaterialRadioGroupComponent_15_4;
    }
    if ((identical(token, import9.MaterialRadioGroupComponent) && ((23 <= nodeIndex) && (nodeIndex <= 24)))) {
      return _MaterialRadioGroupComponent_23_4;
    }
    if (((identical(token, import7.MaterialExpansionPanel) || identical(token, import22.DeferredContentAware)) && ((11 <= nodeIndex) && (nodeIndex <= 28)))) {
      return _MaterialExpansionPanel_11_4;
    }
    if ((identical(token, import9.MaterialRadioGroupComponent) && ((35 <= nodeIndex) && (nodeIndex <= 36)))) {
      return _MaterialRadioGroupComponent_35_4;
    }
    if ((identical(token, import9.MaterialRadioGroupComponent) && ((39 <= nodeIndex) && (nodeIndex <= 40)))) {
      return _MaterialRadioGroupComponent_39_4;
    }
    if (((identical(token, import7.MaterialExpansionPanel) || identical(token, import22.DeferredContentAware)) && ((29 <= nodeIndex) && (nodeIndex <= 40)))) {
      return _MaterialExpansionPanel_29_4;
    }
    if ((identical(token, import4.MaterialExpansionPanelSet) && ((0 <= nodeIndex) && (nodeIndex <= 40)))) {
      return _MaterialExpansionPanelSet_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _MaterialExpansionPanel_1_4.name = 'Wallet';
      changed = true;
    }
    final currVal_1 = import17.interpolate2('Initial: \$', _ctx.settings.initialCash, '. Daily disposable income: \$', _ctx.settings.dailyDisposable, '.');
    if (!identical(_expr_1, currVal_1)) {
      _MaterialExpansionPanel_1_4.secondaryText = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if (firstCheck) {
      _MaterialExpansionPanel_1_4.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.initialCashOptions, null)) {
        (_NgFor_6_7.ngForOf = _ctx.initialCashOptions);
      }
    }
    _NgFor_6_7.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.dailyDisposableOptions, null)) {
        (_NgFor_10_7.ngForOf = _ctx.dailyDisposableOptions);
      }
    }
    _NgFor_10_7.ngDoCheck();
    changed = false;
    if (firstCheck) {
      _MaterialExpansionPanel_11_4.name = 'Betting';
      changed = true;
    }
    final currVal_5 = import17.interpolate2('Lottery: ', _ctx.settings.lottery.shortName, '. Strategy: ', _ctx.settings.strategy.shortName, '.');
    if (!identical(_expr_5, currVal_5)) {
      _MaterialExpansionPanel_11_4.secondaryText = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_11.markAsCheckOnce();
    }
    if (firstCheck) {
      _MaterialExpansionPanel_11_4.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_15.markAsCheckOnce();
    }
    final currVal_6 = _ctx.settings.lotteries;
    if (!identical(_expr_6, currVal_6)) {
      _NgFor_16_7.ngForOf = currVal_6;
      _expr_6 = currVal_6;
    }
    _NgFor_16_7.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_23.markAsCheckOnce();
    }
    final currVal_8 = _ctx.settings.strategies;
    if (!identical(_expr_8, currVal_8)) {
      _NgFor_24_7.ngForOf = currVal_8;
      _expr_8 = currVal_8;
    }
    _NgFor_24_7.ngDoCheck();
    changed = false;
    if (firstCheck) {
      _MaterialExpansionPanel_29_4.name = 'Other';
      changed = true;
    }
    final currVal_11 = import17.interpolate2('Interest rate: ', _ctx.settings.interestRate, '%. Years: ', _ctx.settings.years, '.');
    if (!identical(_expr_11, currVal_11)) {
      _MaterialExpansionPanel_29_4.secondaryText = currVal_11;
      changed = true;
      _expr_11 = currVal_11;
    }
    if (changed) {
      _compView_29.markAsCheckOnce();
    }
    if (firstCheck) {
      _MaterialExpansionPanel_29_4.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialCheckboxComponent_33_4.label = 'Investing';
      changed = true;
    }
    final currVal_13 = _ctx.isInvesting;
    if (!identical(_expr_13, currVal_13)) {
      _MaterialCheckboxComponent_33_4.checked = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
    }
    if (changed) {
      _compView_33.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_35.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.interestRateOptions, null)) {
        (_NgFor_36_7.ngForOf = _ctx.interestRateOptions);
      }
    }
    _NgFor_36_7.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_39.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.yearsOptions, null)) {
        (_NgFor_40_7.ngForOf = _ctx.yearsOptions);
      }
    }
    _NgFor_40_7.ngDoCheck();
    _appEl_6.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    _appEl_16.detectChangesInNestedViews();
    _appEl_24.detectChangesInNestedViews();
    _appEl_36.detectChangesInNestedViews();
    _appEl_40.detectChangesInNestedViews();
    if (_query_MaterialRadioComponent_5_0.dirty) {
      _query_MaterialRadioComponent_5_0.reset([
        _appEl_6.mapNestedViews((_ViewSettingsComponent1 nestedView) {
          return [nestedView._MaterialRadioComponent_0_4];
        })
      ]);
      _MaterialRadioGroupComponent_5_4.list = _query_MaterialRadioComponent_5_0;
      _query_MaterialRadioComponent_5_0.notifyOnChanges();
    }
    if (_query_MaterialRadioComponent_9_0.dirty) {
      _query_MaterialRadioComponent_9_0.reset([
        _appEl_10.mapNestedViews((_ViewSettingsComponent2 nestedView) {
          return [nestedView._MaterialRadioComponent_0_4];
        })
      ]);
      _MaterialRadioGroupComponent_9_4.list = _query_MaterialRadioComponent_9_0;
      _query_MaterialRadioComponent_9_0.notifyOnChanges();
    }
    if (_query_MaterialRadioComponent_15_0.dirty) {
      _query_MaterialRadioComponent_15_0.reset([
        _appEl_16.mapNestedViews((_ViewSettingsComponent3 nestedView) {
          return [nestedView._MaterialRadioComponent_0_4];
        })
      ]);
      _MaterialRadioGroupComponent_15_4.list = _query_MaterialRadioComponent_15_0;
      _query_MaterialRadioComponent_15_0.notifyOnChanges();
    }
    if (_query_MaterialRadioComponent_23_0.dirty) {
      _query_MaterialRadioComponent_23_0.reset([
        _appEl_24.mapNestedViews((_ViewSettingsComponent4 nestedView) {
          return [nestedView._MaterialRadioComponent_0_4];
        })
      ]);
      _MaterialRadioGroupComponent_23_4.list = _query_MaterialRadioComponent_23_0;
      _query_MaterialRadioComponent_23_0.notifyOnChanges();
    }
    if (_query_MaterialRadioComponent_35_0.dirty) {
      _query_MaterialRadioComponent_35_0.reset([
        _appEl_36.mapNestedViews((_ViewSettingsComponent5 nestedView) {
          return [nestedView._MaterialRadioComponent_0_4];
        })
      ]);
      _MaterialRadioGroupComponent_35_4.list = _query_MaterialRadioComponent_35_0;
      _query_MaterialRadioComponent_35_0.notifyOnChanges();
    }
    if (_query_MaterialRadioComponent_39_0.dirty) {
      _query_MaterialRadioComponent_39_0.reset([
        _appEl_40.mapNestedViews((_ViewSettingsComponent6 nestedView) {
          return [nestedView._MaterialRadioComponent_0_4];
        })
      ]);
      _MaterialRadioGroupComponent_39_4.list = _query_MaterialRadioComponent_39_0;
      _query_MaterialRadioComponent_39_0.notifyOnChanges();
    }
    if (_query_MaterialExpansionPanel_0_0.dirty) {
      _query_MaterialExpansionPanel_0_0.reset([_MaterialExpansionPanel_1_4, _MaterialExpansionPanel_11_4, _MaterialExpansionPanel_29_4]);
      _MaterialExpansionPanelSet_0_4.panels = _query_MaterialExpansionPanel_0_0;
      _query_MaterialExpansionPanel_0_0.notifyOnChanges();
    }
    final currVal_7 = import17.interpolate1(' ', _ctx.lottery.description, '');
    if (!identical(_expr_7, currVal_7)) {
      _text_20.text = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_9 = import17.interpolate1(' ', _ctx.strategy.description, '');
    if (!identical(_expr_9, currVal_9)) {
      _text_28.text = currVal_9;
      _expr_9 = currVal_9;
    }
    _compView_33.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_5.detectChanges();
    _compView_9.detectChanges();
    _compView_11.detectChanges();
    _compView_15.detectChanges();
    _compView_23.detectChanges();
    _compView_29.detectChanges();
    _compView_33.detectChanges();
    _compView_35.detectChanges();
    _compView_39.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_6?.destroyNestedViews();
    _appEl_10?.destroyNestedViews();
    _appEl_16?.destroyNestedViews();
    _appEl_24?.destroyNestedViews();
    _appEl_36?.destroyNestedViews();
    _appEl_40?.destroyNestedViews();
    _compView_1?.destroy();
    _compView_5?.destroy();
    _compView_9?.destroy();
    _compView_11?.destroy();
    _compView_15?.destroy();
    _compView_23?.destroy();
    _compView_29?.destroy();
    _compView_33?.destroy();
    _compView_35?.destroy();
    _compView_39?.destroy();
    _MaterialRadioGroupComponent_5_4.ngOnDestroy();
    _MaterialRadioGroupComponent_9_4.ngOnDestroy();
    _MaterialExpansionPanel_1_4.ngOnDestroy();
    _MaterialRadioGroupComponent_15_4.ngOnDestroy();
    _MaterialRadioGroupComponent_23_4.ngOnDestroy();
    _MaterialExpansionPanel_11_4.ngOnDestroy();
    _MaterialRadioGroupComponent_35_4.ngOnDestroy();
    _MaterialRadioGroupComponent_39_4.ngOnDestroy();
    _MaterialExpansionPanel_29_4.ngOnDestroy();
    _MaterialExpansionPanelSet_0_4.ngOnDestroy();
  }

  void _handle_checkedChange_33_0($event) {
    ctx.isInvesting = $event;
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewSettingsComponent0(parentView, parentIndex);
}

class _ViewSettingsComponent1 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import23.ViewMaterialRadioComponent0 _compView_0;
  import24.MaterialRadioComponent _MaterialRadioComponent_0_4;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent1(AppView<dynamic> parentView, num parentIndex) : super(import15.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import23.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_4 = new import24.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_5_4, null, null);
    _text_1 = new import3.Text('');
    _compView_0.create(_MaterialRadioComponent_0_4, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialRadioComponent_0_4.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final int local_item = locals['\$implicit'];
    changed = false;
    final currVal_0 = (local_item == _ctx.initialCash);
    if (!identical(_expr_0, currVal_0)) {
      _MaterialRadioComponent_0_4.checked = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = import17.interpolate1('\$', local_item, '');
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_5_0.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_4.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final int local_item = locals['\$implicit'];
    ctx.initialCash = ($event ? local_item : ctx.initialCash);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent1(parentView, parentIndex);
}

class _ViewSettingsComponent2 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import23.ViewMaterialRadioComponent0 _compView_0;
  import24.MaterialRadioComponent _MaterialRadioComponent_0_4;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent2(AppView<dynamic> parentView, num parentIndex) : super(import15.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import23.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_4 = new import24.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_9_4, null, null);
    _text_1 = new import3.Text('');
    _compView_0.create(_MaterialRadioComponent_0_4, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialRadioComponent_0_4.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final int local_item = locals['\$implicit'];
    changed = false;
    final currVal_0 = (local_item == _ctx.dailyDisposable);
    if (!identical(_expr_0, currVal_0)) {
      _MaterialRadioComponent_0_4.checked = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = import17.interpolate1('\$', local_item, '');
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_9_0.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_4.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final int local_item = locals['\$implicit'];
    ctx.dailyDisposable = ($event ? local_item : ctx.dailyDisposable);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent2(parentView, parentIndex);
}

class _ViewSettingsComponent3 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import23.ViewMaterialRadioComponent0 _compView_0;
  import24.MaterialRadioComponent _MaterialRadioComponent_0_4;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent3(AppView<dynamic> parentView, num parentIndex) : super(import15.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import23.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_4 = new import24.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_15_4, null, null);
    _text_1 = new import3.Text('');
    _compView_0.create(_MaterialRadioComponent_0_4, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialRadioComponent_0_4.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import26.Lottery local_item = locals['\$implicit'];
    changed = false;
    final currVal_0 = (local_item == _ctx.lottery);
    if (!identical(_expr_0, currVal_0)) {
      _MaterialRadioComponent_0_4.checked = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = import17.interpolate0(local_item.name);
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_15_0.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_4.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final import26.Lottery local_item = locals['\$implicit'];
    ctx.lottery = ($event ? local_item : ctx.lottery);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent3(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent3(parentView, parentIndex);
}

class _ViewSettingsComponent4 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import23.ViewMaterialRadioComponent0 _compView_0;
  import24.MaterialRadioComponent _MaterialRadioComponent_0_4;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent4(AppView<dynamic> parentView, num parentIndex) : super(import15.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import23.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_4 = new import24.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_23_4, null, null);
    _text_1 = new import3.Text('');
    _compView_0.create(_MaterialRadioComponent_0_4, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialRadioComponent_0_4.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import27.Strategy local_item = locals['\$implicit'];
    changed = false;
    final currVal_0 = (local_item == _ctx.strategy);
    if (!identical(_expr_0, currVal_0)) {
      _MaterialRadioComponent_0_4.checked = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = import17.interpolate2('', local_item.shortName, ' (', local_item.name, ')');
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_23_0.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_4.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final import27.Strategy local_item = locals['\$implicit'];
    ctx.strategy = ($event ? local_item : ctx.strategy);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent4(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent4(parentView, parentIndex);
}

class _ViewSettingsComponent5 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import23.ViewMaterialRadioComponent0 _compView_0;
  import24.MaterialRadioComponent _MaterialRadioComponent_0_4;
  import3.Text _text_1;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  _ViewSettingsComponent5(AppView<dynamic> parentView, num parentIndex) : super(import15.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import23.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_4 = new import24.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_35_4, null, null);
    _text_1 = new import3.Text('');
    _compView_0.create(_MaterialRadioComponent_0_4, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialRadioComponent_0_4.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final int local_value = locals['\$implicit'];
    changed = false;
    final bool currVal_0 = !_ctx.isInvesting;
    if (!identical(_expr_0, currVal_0)) {
      _MaterialRadioComponent_0_4.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = (local_value == _ctx.interestRate);
    if (!identical(_expr_1, currVal_1)) {
      _MaterialRadioComponent_0_4.checked = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_2 = import17.interpolate1('', local_value, '%');
    if (!identical(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_35_0.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_4.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final int local_value = locals['\$implicit'];
    ctx.interestRate = ($event ? local_value : ctx.interestRate);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent5(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent5(parentView, parentIndex);
}

class _ViewSettingsComponent6 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import23.ViewMaterialRadioComponent0 _compView_0;
  import24.MaterialRadioComponent _MaterialRadioComponent_0_4;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent6(AppView<dynamic> parentView, num parentIndex) : super(import15.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import23.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_4 = new import24.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_39_4, null, null);
    _text_1 = new import3.Text('');
    _compView_0.create(_MaterialRadioComponent_0_4, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialRadioComponent_0_4.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final int local_value = locals['\$implicit'];
    changed = false;
    final currVal_0 = (local_value == _ctx.years);
    if (!identical(_expr_0, currVal_0)) {
      _MaterialRadioComponent_0_4.checked = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = import17.interpolate2('', local_value, ' year', ((local_value > 1) ? 's' : ''), '');
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_39_0.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_4.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final int local_value = locals['\$implicit'];
    ctx.years = ($event ? local_value : ctx.years);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent6(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent6(parentView, parentIndex);
}

const List<dynamic> styles$SettingsComponentHost = const [];

class _ViewSettingsComponentHost0 extends AppView<dynamic> {
  ViewSettingsComponent0 _compView_0;
  import2.SettingsComponent _SettingsComponent_0_4;
  List<dynamic> __defaultPopupPositions_0_5;
  dynamic __Window_0_6;
  dynamic __DomService_0_7;
  import28.AcxImperativeViewUtils __AcxImperativeViewUtils_0_8;
  dynamic __Document_0_9;
  import29.DomRuler __DomRuler_0_10;
  import30.Angular2ManagedZone __ManagedZone_0_11;
  dynamic __overlayContainerName_0_12;
  dynamic __overlayContainerParent_0_13;
  dynamic __overlayContainer_0_14;
  bool __overlaySyncDom_0_15;
  bool __overlayRepositionLoop_0_16;
  import31.OverlayStyleConfig __OverlayStyleConfig_0_17;
  import32.ZIndexer __ZIndexer_0_18;
  import33.OverlayDomRenderService __OverlayDomRenderService_0_19;
  import34.OverlayService __OverlayService_0_20;
  import35.DomPopupSourceFactory __DomPopupSourceFactory_0_21;
  _ViewSettingsComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import15.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<dynamic> get _defaultPopupPositions_0_5 {
    if ((this.__defaultPopupPositions_0_5 == null)) {
      (__defaultPopupPositions_0_5 = const [const import36.RelativePosition(animationOrigin: 'top center'), const import36.RelativePosition(animationOrigin: 'top right', originX: const import36.Alignment('End', 'flex-end')), const import36.RelativePosition(animationOrigin: 'top left', originX: const import36.Alignment('Start', 'flex-start')), const import36.RelativePosition(animationOrigin: 'bottom center', originY: const import36.Alignment('End', 'flex-end')), const import36.RelativePosition(animationOrigin: 'bottom right', originX: const import36.Alignment('End', 'flex-end'), originY: const import36.Alignment('End', 'flex-end')), const import36.RelativePosition(animationOrigin: 'bottom left', originX: const import36.Alignment('Start', 'flex-start'), originY: const import36.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_5;
  }

  dynamic get _Window_0_6 {
    if ((this.__Window_0_6 == null)) {
      (__Window_0_6 = import37.getWindow());
    }
    return this.__Window_0_6;
  }

  dynamic get _DomService_0_7 {
    if ((this.__DomService_0_7 == null)) {
      (__DomService_0_7 = import38.createDomService(this.injectorGet(import20.DomService, this.viewData.parentIndex, null), this.injectorGet(import39.Disposer, this.viewData.parentIndex, null), this.injectorGet(import19.NgZone, this.viewData.parentIndex), this._Window_0_6));
    }
    return this.__DomService_0_7;
  }

  import28.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_8 {
    if ((this.__AcxImperativeViewUtils_0_8 == null)) {
      (__AcxImperativeViewUtils_0_8 = new import28.AcxImperativeViewUtils(this.injectorGet(import40.ComponentLoader, this.viewData.parentIndex), this._DomService_0_7));
    }
    return this.__AcxImperativeViewUtils_0_8;
  }

  dynamic get _Document_0_9 {
    if ((this.__Document_0_9 == null)) {
      (__Document_0_9 = import37.getDocument());
    }
    return this.__Document_0_9;
  }

  import29.DomRuler get _DomRuler_0_10 {
    if ((this.__DomRuler_0_10 == null)) {
      (__DomRuler_0_10 = new import29.DomRuler(this._Document_0_9, this._DomService_0_7));
    }
    return this.__DomRuler_0_10;
  }

  import30.Angular2ManagedZone get _ManagedZone_0_11 {
    if ((this.__ManagedZone_0_11 == null)) {
      (__ManagedZone_0_11 = new import30.Angular2ManagedZone(this.injectorGet(import19.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_11;
  }

  dynamic get _overlayContainerName_0_12 {
    if ((this.__overlayContainerName_0_12 == null)) {
      (__overlayContainerName_0_12 = import41.getDefaultContainerName(this.injectorGet(const import42.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_12;
  }

  dynamic get _overlayContainerParent_0_13 {
    if ((this.__overlayContainerParent_0_13 == null)) {
      (__overlayContainerParent_0_13 = import41.getOverlayContainerParent(this._Document_0_9, this.injectorGet(const import42.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_13;
  }

  dynamic get _overlayContainer_0_14 {
    if ((this.__overlayContainer_0_14 == null)) {
      (__overlayContainer_0_14 = import41.getDefaultContainer(this._overlayContainerName_0_12, this._overlayContainerParent_0_13, this.injectorGet(const import42.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_0_14;
  }

  bool get _overlaySyncDom_0_15 {
    if ((this.__overlaySyncDom_0_15 == null)) {
      (__overlaySyncDom_0_15 = true);
    }
    return this.__overlaySyncDom_0_15;
  }

  bool get _overlayRepositionLoop_0_16 {
    if ((this.__overlayRepositionLoop_0_16 == null)) {
      (__overlayRepositionLoop_0_16 = false);
    }
    return this.__overlayRepositionLoop_0_16;
  }

  import31.OverlayStyleConfig get _OverlayStyleConfig_0_17 {
    if ((this.__OverlayStyleConfig_0_17 == null)) {
      (__OverlayStyleConfig_0_17 = new import31.OverlayStyleConfig(this._Document_0_9));
    }
    return this.__OverlayStyleConfig_0_17;
  }

  import32.ZIndexer get _ZIndexer_0_18 {
    if ((this.__ZIndexer_0_18 == null)) {
      (__ZIndexer_0_18 = new import32.ZIndexer());
    }
    return this.__ZIndexer_0_18;
  }

  import33.OverlayDomRenderService get _OverlayDomRenderService_0_19 {
    if ((this.__OverlayDomRenderService_0_19 == null)) {
      (__OverlayDomRenderService_0_19 = new import33.OverlayDomRenderService(this._OverlayStyleConfig_0_17, this._overlayContainer_0_14, this._overlayContainerName_0_12, this._DomRuler_0_10, this._DomService_0_7, this._AcxImperativeViewUtils_0_8, this._overlaySyncDom_0_15, this._overlayRepositionLoop_0_16, this._ZIndexer_0_18));
    }
    return this.__OverlayDomRenderService_0_19;
  }

  import34.OverlayService get _OverlayService_0_20 {
    if ((this.__OverlayService_0_20 == null)) {
      (__OverlayService_0_20 = new import34.OverlayService(this.injectorGet(import19.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_15, this._OverlayDomRenderService_0_19, this.injectorGet(import34.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_20;
  }

  import35.DomPopupSourceFactory get _DomPopupSourceFactory_0_21 {
    if ((this.__DomPopupSourceFactory_0_21 == null)) {
      (__DomPopupSourceFactory_0_21 = new import35.DomPopupSourceFactory(this._DomRuler_0_10));
    }
    return this.__DomPopupSourceFactory_0_21;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewSettingsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SettingsComponent_0_4 = new import2.SettingsComponent();
    _compView_0.create(_SettingsComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.SettingsComponent>(0, this, rootEl, _SettingsComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.SettingsComponent) && (0 == nodeIndex))) {
      return _SettingsComponent_0_4;
    }
    if ((identical(token, const import42.OpaqueToken('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_5;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_6;
    }
    if ((identical(token, import20.DomService) && (0 == nodeIndex))) {
      return _DomService_0_7;
    }
    if ((identical(token, import28.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_8;
    }
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_9;
    }
    if ((identical(token, import29.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_10;
    }
    if ((identical(token, import43.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_11;
    }
    if ((identical(token, const import42.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_12;
    }
    if ((identical(token, const import42.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_13;
    }
    if ((identical(token, const import42.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_14;
    }
    if ((identical(token, const import42.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_15;
    }
    if ((identical(token, const import42.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_16;
    }
    if ((identical(token, import31.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_17;
    }
    if ((identical(token, import32.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_18;
    }
    if ((identical(token, import33.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_19;
    }
    if ((identical(token, import34.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_20;
    }
    if ((identical(token, import35.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_21;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _SettingsComponent_0_4.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_SettingsComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.SettingsComponent> SettingsComponentNgFactory = const ComponentFactory<import2.SettingsComponent>('settings-component', viewFactory_SettingsComponentHost0, _SettingsComponentMetadata);
const _SettingsComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ngRef.registerComponent(
    SettingsComponent,
    SettingsComponentNgFactory,
  );
}
