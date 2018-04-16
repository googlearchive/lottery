// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'settings_component.dart';
export 'settings_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:components_codelab/src/lottery/lottery.dart';
import 'package:components_codelab/src/settings/settings.dart';
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
import 'package:angular_components/material_expansionpanel/material_expansionpanel.template.dart' as import5;
import 'package:angular_components/material_expansionpanel/material_expansionpanel.dart' as import6;
import 'package:angular_components/material_radio/material_radio_group.template.dart' as import7;
import 'package:angular_components/material_radio/material_radio_group.dart' as import8;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import10;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as import11;
import 'package:angular_components/material_checkbox/material_checkbox.dart' as import12;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import14;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import16;
import 'package:angular/angular.dart';
import 'package:angular/src/core/zone/ng_zone.dart' as import18;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import19;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_components/content/deferred_content_aware.dart' as import21;
import 'package:angular_components/material_radio/material_radio.template.dart' as import22;
import 'package:angular_components/material_radio/material_radio.dart' as import23;
import 'dart:core';
import '../lottery/lottery.dart' as import25;
import 'settings.dart' as import26;
import 'package:angular_components/laminate/enums/alignment.dart' as import27;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import28;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import29;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import30;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import31;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import32;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import33;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import34;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import35;
import 'package:quiver/time.dart' as import36;
import 'package:angular_components/utils/browser/window/module.dart' as import37;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import38;
import 'package:angular_components/utils/disposer/disposer.dart' as import39;
import 'package:angular/src/core/linker/component_loader.dart' as import40;
import 'package:angular_components/laminate/overlay/module.dart' as import41;
import 'package:angular/src/core/di/opaque_token.dart' as import42;
import 'package:angular_components/laminate/enums/alignment.dart' as import43;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import44;

const List<dynamic> styles$SettingsComponent = const [import0.styles];

class ViewSettingsComponent0 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import4.MaterialExpansionPanelSet _MaterialExpansionPanelSet_0_5;
  bool _query_MaterialExpansionPanel_0_0_isDirty = true;
  import3.Element _el_1;
  import5.ViewMaterialExpansionPanel0 _compView_1;
  import6.MaterialExpansionPanel _MaterialExpansionPanel_1_5;
  bool _query_AutoFocusDirective_1_0_isDirty = true;
  import3.DivElement _el_2;
  import3.Element _el_3;
  import3.Element _el_5;
  import7.ViewMaterialRadioGroupComponent0 _compView_5;
  import8.MaterialRadioGroupComponent _MaterialRadioGroupComponent_5_5;
  bool _query_MaterialRadioComponent_5_0_isDirty = true;
  ViewContainer _appEl_6;
  import10.NgFor _NgFor_6_9;
  import3.Element _el_7;
  import3.Element _el_9;
  import7.ViewMaterialRadioGroupComponent0 _compView_9;
  import8.MaterialRadioGroupComponent _MaterialRadioGroupComponent_9_5;
  bool _query_MaterialRadioComponent_9_0_isDirty = true;
  ViewContainer _appEl_10;
  import10.NgFor _NgFor_10_9;
  import3.Element _el_11;
  import5.ViewMaterialExpansionPanel0 _compView_11;
  import6.MaterialExpansionPanel _MaterialExpansionPanel_11_5;
  bool _query_AutoFocusDirective_11_0_isDirty = true;
  import3.DivElement _el_12;
  import3.Element _el_13;
  import3.Element _el_15;
  import7.ViewMaterialRadioGroupComponent0 _compView_15;
  import8.MaterialRadioGroupComponent _MaterialRadioGroupComponent_15_5;
  bool _query_MaterialRadioComponent_15_0_isDirty = true;
  ViewContainer _appEl_16;
  import10.NgFor _NgFor_16_9;
  import3.Element _el_17;
  import3.Element _el_18;
  import3.Text _text_21;
  import3.Element _el_22;
  import3.Element _el_24;
  import7.ViewMaterialRadioGroupComponent0 _compView_24;
  import8.MaterialRadioGroupComponent _MaterialRadioGroupComponent_24_5;
  bool _query_MaterialRadioComponent_24_0_isDirty = true;
  ViewContainer _appEl_25;
  import10.NgFor _NgFor_25_9;
  import3.Element _el_26;
  import3.Element _el_27;
  import3.Text _text_30;
  import3.Element _el_31;
  import5.ViewMaterialExpansionPanel0 _compView_31;
  import6.MaterialExpansionPanel _MaterialExpansionPanel_31_5;
  bool _query_AutoFocusDirective_31_0_isDirty = true;
  import3.DivElement _el_32;
  import3.Element _el_33;
  import3.Element _el_35;
  import11.ViewMaterialCheckboxComponent0 _compView_35;
  import12.MaterialCheckboxComponent _MaterialCheckboxComponent_35_5;
  import3.Element _el_36;
  import3.Element _el_37;
  import7.ViewMaterialRadioGroupComponent0 _compView_37;
  import8.MaterialRadioGroupComponent _MaterialRadioGroupComponent_37_5;
  bool _query_MaterialRadioComponent_37_0_isDirty = true;
  ViewContainer _appEl_38;
  import10.NgFor _NgFor_38_9;
  import3.Element _el_39;
  import3.Element _el_41;
  import7.ViewMaterialRadioGroupComponent0 _compView_41;
  import8.MaterialRadioGroupComponent _MaterialRadioGroupComponent_41_5;
  bool _query_MaterialRadioComponent_41_0_isDirty = true;
  ViewContainer _appEl_42;
  import10.NgFor _NgFor_42_9;
  String _expr_1;
  String _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  String _expr_11;
  bool _expr_13;
  static RenderComponentType _renderType;
  ViewSettingsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('settings-component');
    _renderType ??= import16.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$SettingsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'material-expansionpanel-set', parentRenderNode);
    addShimE(_el_0);
    _MaterialExpansionPanelSet_0_5 = new import4.MaterialExpansionPanelSet();
    _compView_1 = new import5.ViewMaterialExpansionPanel0(this, 1);
    _el_1 = _compView_1.rootEl;
    _el_0.append(_el_1);
    createAttr(_el_1, 'name', 'Wallet');
    addShimC(_el_1);
    _MaterialExpansionPanel_1_5 = new import6.MaterialExpansionPanel(parentView.injectorGet(import18.NgZone, viewData.parentIndex), _compView_1.ref, parentView.injectorGet(import19.DomService, viewData.parentIndex));
    _el_2 = doc.createElement('div');
    addShimC(_el_2);
    _el_3 = createAndAppend(doc, 'h3', _el_2);
    addShimE(_el_3);
    import3.Text _text_4 = new import3.Text('Initial cash');
    _el_3.append(_text_4);
    _compView_5 = new import7.ViewMaterialRadioGroupComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    _el_2.append(_el_5);
    addShimC(_el_5);
    _MaterialRadioGroupComponent_5_5 = new import8.MaterialRadioGroupComponent(parentView.injectorGet(import18.NgZone, viewData.parentIndex), null);
    final _anchor_6 = createViewContainerAnchor();
    _appEl_6 = new ViewContainer(6, 5, this, _anchor_6);
    TemplateRef _TemplateRef_6_8 = new TemplateRef(_appEl_6, viewFactory_SettingsComponent1);
    _NgFor_6_9 = new import10.NgFor(_appEl_6, _TemplateRef_6_8);
    _compView_5.create(_MaterialRadioGroupComponent_5_5, [
      [_appEl_6]
    ]);
    _el_7 = createAndAppend(doc, 'h3', _el_2);
    addShimE(_el_7);
    import3.Text _text_8 = new import3.Text('Daily disposable income');
    _el_7.append(_text_8);
    _compView_9 = new import7.ViewMaterialRadioGroupComponent0(this, 9);
    _el_9 = _compView_9.rootEl;
    _el_2.append(_el_9);
    addShimC(_el_9);
    _MaterialRadioGroupComponent_9_5 = new import8.MaterialRadioGroupComponent(parentView.injectorGet(import18.NgZone, viewData.parentIndex), null);
    final _anchor_10 = createViewContainerAnchor();
    _appEl_10 = new ViewContainer(10, 9, this, _anchor_10);
    TemplateRef _TemplateRef_10_8 = new TemplateRef(_appEl_10, viewFactory_SettingsComponent2);
    _NgFor_10_9 = new import10.NgFor(_appEl_10, _TemplateRef_10_8);
    _compView_9.create(_MaterialRadioGroupComponent_9_5, [
      [_appEl_10]
    ]);
    _compView_1.create(_MaterialExpansionPanel_1_5, [
      const [],
      const [],
      const [],
      [_el_2],
      const []
    ]);
    _compView_11 = new import5.ViewMaterialExpansionPanel0(this, 11);
    _el_11 = _compView_11.rootEl;
    _el_0.append(_el_11);
    _el_11.className = 'betting-panel';
    createAttr(_el_11, 'name', 'Betting');
    addShimC(_el_11);
    _MaterialExpansionPanel_11_5 = new import6.MaterialExpansionPanel(parentView.injectorGet(import18.NgZone, viewData.parentIndex), _compView_11.ref, parentView.injectorGet(import19.DomService, viewData.parentIndex));
    _el_12 = doc.createElement('div');
    addShimC(_el_12);
    _el_13 = createAndAppend(doc, 'h3', _el_12);
    addShimE(_el_13);
    import3.Text _text_14 = new import3.Text('Lottery');
    _el_13.append(_text_14);
    _compView_15 = new import7.ViewMaterialRadioGroupComponent0(this, 15);
    _el_15 = _compView_15.rootEl;
    _el_12.append(_el_15);
    addShimC(_el_15);
    _MaterialRadioGroupComponent_15_5 = new import8.MaterialRadioGroupComponent(parentView.injectorGet(import18.NgZone, viewData.parentIndex), null);
    final _anchor_16 = createViewContainerAnchor();
    _appEl_16 = new ViewContainer(16, 15, this, _anchor_16);
    TemplateRef _TemplateRef_16_8 = new TemplateRef(_appEl_16, viewFactory_SettingsComponent3);
    _NgFor_16_9 = new import10.NgFor(_appEl_16, _TemplateRef_16_8);
    _compView_15.create(_MaterialRadioGroupComponent_15_5, [
      [_appEl_16]
    ]);
    _el_17 = createAndAppend(doc, 'p', _el_12);
    addShimE(_el_17);
    _el_18 = createAndAppend(doc, 'strong', _el_17);
    addShimE(_el_18);
    import3.Text _text_19 = new import3.Text('Description:');
    _el_18.append(_text_19);
    import3.Text _text_20 = new import3.Text(' ');
    _el_17.append(_text_20);
    _text_21 = new import3.Text('');
    _el_17.append(_text_21);
    _el_22 = createAndAppend(doc, 'h3', _el_12);
    addShimE(_el_22);
    import3.Text _text_23 = new import3.Text('Strategy');
    _el_22.append(_text_23);
    _compView_24 = new import7.ViewMaterialRadioGroupComponent0(this, 24);
    _el_24 = _compView_24.rootEl;
    _el_12.append(_el_24);
    addShimC(_el_24);
    _MaterialRadioGroupComponent_24_5 = new import8.MaterialRadioGroupComponent(parentView.injectorGet(import18.NgZone, viewData.parentIndex), null);
    final _anchor_25 = createViewContainerAnchor();
    _appEl_25 = new ViewContainer(25, 24, this, _anchor_25);
    TemplateRef _TemplateRef_25_8 = new TemplateRef(_appEl_25, viewFactory_SettingsComponent4);
    _NgFor_25_9 = new import10.NgFor(_appEl_25, _TemplateRef_25_8);
    _compView_24.create(_MaterialRadioGroupComponent_24_5, [
      [_appEl_25]
    ]);
    _el_26 = createAndAppend(doc, 'p', _el_12);
    addShimE(_el_26);
    _el_27 = createAndAppend(doc, 'strong', _el_26);
    addShimE(_el_27);
    import3.Text _text_28 = new import3.Text('Description:');
    _el_27.append(_text_28);
    import3.Text _text_29 = new import3.Text(' ');
    _el_26.append(_text_29);
    _text_30 = new import3.Text('');
    _el_26.append(_text_30);
    _compView_11.create(_MaterialExpansionPanel_11_5, [
      const [],
      const [],
      const [],
      [_el_12],
      const []
    ]);
    _compView_31 = new import5.ViewMaterialExpansionPanel0(this, 31);
    _el_31 = _compView_31.rootEl;
    _el_0.append(_el_31);
    createAttr(_el_31, 'name', 'Other');
    addShimC(_el_31);
    _MaterialExpansionPanel_31_5 = new import6.MaterialExpansionPanel(parentView.injectorGet(import18.NgZone, viewData.parentIndex), _compView_31.ref, parentView.injectorGet(import19.DomService, viewData.parentIndex));
    _el_32 = doc.createElement('div');
    addShimC(_el_32);
    _el_33 = createAndAppend(doc, 'h3', _el_32);
    addShimE(_el_33);
    import3.Text _text_34 = new import3.Text('Annual interest rate');
    _el_33.append(_text_34);
    _compView_35 = new import11.ViewMaterialCheckboxComponent0(this, 35);
    _el_35 = _compView_35.rootEl;
    _el_32.append(_el_35);
    createAttr(_el_35, 'label', 'Investing');
    addShimC(_el_35);
    _MaterialCheckboxComponent_35_5 = new import12.MaterialCheckboxComponent(_el_35, _compView_35.ref, null, null, null);
    _compView_35.create(_MaterialCheckboxComponent_35_5, [const []]);
    _el_36 = createAndAppend(doc, 'br', _el_32);
    addShimE(_el_36);
    _compView_37 = new import7.ViewMaterialRadioGroupComponent0(this, 37);
    _el_37 = _compView_37.rootEl;
    _el_32.append(_el_37);
    addShimC(_el_37);
    _MaterialRadioGroupComponent_37_5 = new import8.MaterialRadioGroupComponent(parentView.injectorGet(import18.NgZone, viewData.parentIndex), null);
    final _anchor_38 = createViewContainerAnchor();
    _appEl_38 = new ViewContainer(38, 37, this, _anchor_38);
    TemplateRef _TemplateRef_38_8 = new TemplateRef(_appEl_38, viewFactory_SettingsComponent5);
    _NgFor_38_9 = new import10.NgFor(_appEl_38, _TemplateRef_38_8);
    _compView_37.create(_MaterialRadioGroupComponent_37_5, [
      [_appEl_38]
    ]);
    _el_39 = createAndAppend(doc, 'h3', _el_32);
    addShimE(_el_39);
    import3.Text _text_40 = new import3.Text('Length of simulation');
    _el_39.append(_text_40);
    _compView_41 = new import7.ViewMaterialRadioGroupComponent0(this, 41);
    _el_41 = _compView_41.rootEl;
    _el_32.append(_el_41);
    addShimC(_el_41);
    _MaterialRadioGroupComponent_41_5 = new import8.MaterialRadioGroupComponent(parentView.injectorGet(import18.NgZone, viewData.parentIndex), null);
    final _anchor_42 = createViewContainerAnchor();
    _appEl_42 = new ViewContainer(42, 41, this, _anchor_42);
    TemplateRef _TemplateRef_42_8 = new TemplateRef(_appEl_42, viewFactory_SettingsComponent6);
    _NgFor_42_9 = new import10.NgFor(_appEl_42, _TemplateRef_42_8);
    _compView_41.create(_MaterialRadioGroupComponent_41_5, [
      [_appEl_42]
    ]);
    _compView_31.create(_MaterialExpansionPanel_31_5, [
      const [],
      const [],
      const [],
      [_el_32],
      const []
    ]);
    _MaterialExpansionPanelSet_0_5.panels = [_MaterialExpansionPanel_1_5, _MaterialExpansionPanel_11_5, _MaterialExpansionPanel_31_5];
    final subscription_0 = _MaterialExpansionPanel_1_5.save.listen(eventHandler0(ctx.settingsUpdated));
    final subscription_1 = _MaterialExpansionPanel_1_5.cancel.listen(eventHandler0(ctx.resetWallet));
    final subscription_2 = _MaterialExpansionPanel_11_5.save.listen(eventHandler0(ctx.settingsUpdated));
    final subscription_3 = _MaterialExpansionPanel_11_5.cancel.listen(eventHandler0(ctx.resetBetting));
    final subscription_4 = _MaterialExpansionPanel_31_5.save.listen(eventHandler0(ctx.settingsUpdated));
    final subscription_5 = _MaterialExpansionPanel_31_5.cancel.listen(eventHandler0(ctx.resetOther));
    final subscription_6 = _MaterialCheckboxComponent_35_5.onChecked.listen(eventHandler1(_handle_checkedChange_35_0));
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5, subscription_6]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import8.MaterialRadioGroupComponent) && ((5 <= nodeIndex) && (nodeIndex <= 6)))) {
      return _MaterialRadioGroupComponent_5_5;
    }
    if ((identical(token, import8.MaterialRadioGroupComponent) && ((9 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _MaterialRadioGroupComponent_9_5;
    }
    if (((identical(token, import6.MaterialExpansionPanel) || identical(token, import21.DeferredContentAware)) && ((1 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _MaterialExpansionPanel_1_5;
    }
    if ((identical(token, import8.MaterialRadioGroupComponent) && ((15 <= nodeIndex) && (nodeIndex <= 16)))) {
      return _MaterialRadioGroupComponent_15_5;
    }
    if ((identical(token, import8.MaterialRadioGroupComponent) && ((24 <= nodeIndex) && (nodeIndex <= 25)))) {
      return _MaterialRadioGroupComponent_24_5;
    }
    if (((identical(token, import6.MaterialExpansionPanel) || identical(token, import21.DeferredContentAware)) && ((11 <= nodeIndex) && (nodeIndex <= 30)))) {
      return _MaterialExpansionPanel_11_5;
    }
    if ((identical(token, import8.MaterialRadioGroupComponent) && ((37 <= nodeIndex) && (nodeIndex <= 38)))) {
      return _MaterialRadioGroupComponent_37_5;
    }
    if ((identical(token, import8.MaterialRadioGroupComponent) && ((41 <= nodeIndex) && (nodeIndex <= 42)))) {
      return _MaterialRadioGroupComponent_41_5;
    }
    if (((identical(token, import6.MaterialExpansionPanel) || identical(token, import21.DeferredContentAware)) && ((31 <= nodeIndex) && (nodeIndex <= 42)))) {
      return _MaterialExpansionPanel_31_5;
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
      _MaterialExpansionPanel_1_5.name = 'Wallet';
      changed = true;
    }
    final currVal_1 = import16.interpolate2('Initial: \$', _ctx.settings.initialCash, '. Daily disposable income: \$', _ctx.settings.dailyDisposable, '.');
    if (!identical(_expr_1, currVal_1)) {
      _MaterialExpansionPanel_1_5.secondaryText = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    if (firstCheck) {
      _MaterialExpansionPanel_1_5.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.initialCashOptions, null)) {
        (_NgFor_6_9.ngForOf = _ctx.initialCashOptions);
      }
    }
    _NgFor_6_9.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.dailyDisposableOptions, null)) {
        (_NgFor_10_9.ngForOf = _ctx.dailyDisposableOptions);
      }
    }
    _NgFor_10_9.ngDoCheck();
    changed = false;
    if (firstCheck) {
      _MaterialExpansionPanel_11_5.name = 'Betting';
      changed = true;
    }
    final currVal_5 = import16.interpolate2('Lottery: ', _ctx.settings.lottery.shortName, '. Strategy: ', _ctx.settings.strategy.shortName, '.');
    if (!identical(_expr_5, currVal_5)) {
      _MaterialExpansionPanel_11_5.secondaryText = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_11.markAsCheckOnce();
    }
    if (firstCheck) {
      _MaterialExpansionPanel_11_5.ngOnInit();
    }
    changed = false;
    if (changed) {
      _compView_15.markAsCheckOnce();
    }
    final currVal_6 = _ctx.settings.lotteries;
    if (!identical(_expr_6, currVal_6)) {
      _NgFor_16_9.ngForOf = currVal_6;
      _expr_6 = currVal_6;
    }
    _NgFor_16_9.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_24.markAsCheckOnce();
    }
    final currVal_8 = _ctx.settings.strategies;
    if (!identical(_expr_8, currVal_8)) {
      _NgFor_25_9.ngForOf = currVal_8;
      _expr_8 = currVal_8;
    }
    _NgFor_25_9.ngDoCheck();
    changed = false;
    if (firstCheck) {
      _MaterialExpansionPanel_31_5.name = 'Other';
      changed = true;
    }
    final currVal_11 = import16.interpolate2('Interest rate: ', _ctx.settings.interestRate, '%. Years: ', _ctx.settings.years, '.');
    if (!identical(_expr_11, currVal_11)) {
      _MaterialExpansionPanel_31_5.secondaryText = currVal_11;
      changed = true;
      _expr_11 = currVal_11;
    }
    if (changed) {
      _compView_31.markAsCheckOnce();
    }
    if (firstCheck) {
      _MaterialExpansionPanel_31_5.ngOnInit();
    }
    changed = false;
    if (firstCheck) {
      _MaterialCheckboxComponent_35_5.label = 'Investing';
      changed = true;
    }
    final currVal_13 = _ctx.isInvesting;
    if (!identical(_expr_13, currVal_13)) {
      _MaterialCheckboxComponent_35_5.checked = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
    }
    if (changed) {
      _compView_35.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_37.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.interestRateOptions, null)) {
        (_NgFor_38_9.ngForOf = _ctx.interestRateOptions);
      }
    }
    _NgFor_38_9.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_41.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.yearsOptions, null)) {
        (_NgFor_42_9.ngForOf = _ctx.yearsOptions);
      }
    }
    _NgFor_42_9.ngDoCheck();
    _appEl_6.detectChangesInNestedViews();
    _appEl_10.detectChangesInNestedViews();
    _appEl_16.detectChangesInNestedViews();
    _appEl_25.detectChangesInNestedViews();
    _appEl_38.detectChangesInNestedViews();
    _appEl_42.detectChangesInNestedViews();
    if (_query_MaterialRadioComponent_5_0_isDirty) {
      _MaterialRadioGroupComponent_5_5.list = _appEl_6.mapNestedViews((_ViewSettingsComponent1 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_5_0_isDirty = false;
    }
    if (_query_MaterialRadioComponent_9_0_isDirty) {
      _MaterialRadioGroupComponent_9_5.list = _appEl_10.mapNestedViews((_ViewSettingsComponent2 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_9_0_isDirty = false;
    }
    if (_query_MaterialRadioComponent_15_0_isDirty) {
      _MaterialRadioGroupComponent_15_5.list = _appEl_16.mapNestedViews((_ViewSettingsComponent3 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_15_0_isDirty = false;
    }
    if (_query_MaterialRadioComponent_24_0_isDirty) {
      _MaterialRadioGroupComponent_24_5.list = _appEl_25.mapNestedViews((_ViewSettingsComponent4 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_24_0_isDirty = false;
    }
    if (_query_MaterialRadioComponent_37_0_isDirty) {
      _MaterialRadioGroupComponent_37_5.list = _appEl_38.mapNestedViews((_ViewSettingsComponent5 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_37_0_isDirty = false;
    }
    if (_query_MaterialRadioComponent_41_0_isDirty) {
      _MaterialRadioGroupComponent_41_5.list = _appEl_42.mapNestedViews((_ViewSettingsComponent6 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_41_0_isDirty = false;
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_5_5.ngAfterContentInit();
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_9_5.ngAfterContentInit();
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_15_5.ngAfterContentInit();
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_24_5.ngAfterContentInit();
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_37_5.ngAfterContentInit();
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_41_5.ngAfterContentInit();
    }
    final currVal_7 = import16.interpolate0(_ctx.lottery.description);
    if (!identical(_expr_7, currVal_7)) {
      _text_21.text = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_9 = import16.interpolate0(_ctx.strategy.description);
    if (!identical(_expr_9, currVal_9)) {
      _text_30.text = currVal_9;
      _expr_9 = currVal_9;
    }
    _compView_35.detectHostChanges(firstCheck);
    _compView_1.detectChanges();
    _compView_5.detectChanges();
    _compView_9.detectChanges();
    _compView_11.detectChanges();
    _compView_15.detectChanges();
    _compView_24.detectChanges();
    _compView_31.detectChanges();
    _compView_35.detectChanges();
    _compView_37.detectChanges();
    _compView_41.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_6?.destroyNestedViews();
    _appEl_10?.destroyNestedViews();
    _appEl_16?.destroyNestedViews();
    _appEl_25?.destroyNestedViews();
    _appEl_38?.destroyNestedViews();
    _appEl_42?.destroyNestedViews();
    _compView_1?.destroy();
    _compView_5?.destroy();
    _compView_9?.destroy();
    _compView_11?.destroy();
    _compView_15?.destroy();
    _compView_24?.destroy();
    _compView_31?.destroy();
    _compView_35?.destroy();
    _compView_37?.destroy();
    _compView_41?.destroy();
    _MaterialRadioGroupComponent_5_5.ngOnDestroy();
    _MaterialRadioGroupComponent_9_5.ngOnDestroy();
    _MaterialExpansionPanel_1_5.ngOnDestroy();
    _MaterialRadioGroupComponent_15_5.ngOnDestroy();
    _MaterialRadioGroupComponent_24_5.ngOnDestroy();
    _MaterialExpansionPanel_11_5.ngOnDestroy();
    _MaterialRadioGroupComponent_37_5.ngOnDestroy();
    _MaterialRadioGroupComponent_41_5.ngOnDestroy();
    _MaterialExpansionPanel_31_5.ngOnDestroy();
    _MaterialExpansionPanelSet_0_5.ngOnDestroy();
  }

  void _handle_checkedChange_35_0($event) {
    ctx.isInvesting = $event;
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewSettingsComponent0(parentView, parentIndex);
}

class _ViewSettingsComponent1 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import22.ViewMaterialRadioComponent0 _compView_0;
  import23.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_2;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import22.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import23.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_5_5, null, null);
    import3.Text _text_1 = new import3.Text('\$');
    _text_2 = new import3.Text('');
    _compView_0.create(_MaterialRadioComponent_0_5, [
      [_text_1, _text_2]
    ]);
    final subscription_0 = _MaterialRadioComponent_0_5.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
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
      _MaterialRadioComponent_0_5.checked = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = import16.interpolate0(local_item);
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_5_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final int local_item = locals['\$implicit'];
    ctx.initialCash = ($event ? local_item : ctx.initialCash);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent1(parentView, parentIndex);
}

class _ViewSettingsComponent2 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import22.ViewMaterialRadioComponent0 _compView_0;
  import23.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_2;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent2(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import22.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import23.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_9_5, null, null);
    import3.Text _text_1 = new import3.Text('\$');
    _text_2 = new import3.Text('');
    _compView_0.create(_MaterialRadioComponent_0_5, [
      [_text_1, _text_2]
    ]);
    final subscription_0 = _MaterialRadioComponent_0_5.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
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
      _MaterialRadioComponent_0_5.checked = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = import16.interpolate0(local_item);
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_9_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final int local_item = locals['\$implicit'];
    ctx.dailyDisposable = ($event ? local_item : ctx.dailyDisposable);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent2(parentView, parentIndex);
}

class _ViewSettingsComponent3 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import22.ViewMaterialRadioComponent0 _compView_0;
  import23.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent3(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import22.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import23.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_15_5, null, null);
    _text_1 = new import3.Text('');
    _compView_0.create(_MaterialRadioComponent_0_5, [
      [_text_1]
    ]);
    final subscription_0 = _MaterialRadioComponent_0_5.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import25.Lottery local_item = locals['\$implicit'];
    changed = false;
    final currVal_0 = (local_item == _ctx.lottery);
    if (!identical(_expr_0, currVal_0)) {
      _MaterialRadioComponent_0_5.checked = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = import16.interpolate0(local_item.name);
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_15_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final import25.Lottery local_item = locals['\$implicit'];
    ctx.lottery = ($event ? local_item : ctx.lottery);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent3(parentView, parentIndex);
}

class _ViewSettingsComponent4 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import22.ViewMaterialRadioComponent0 _compView_0;
  import23.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_1;
  import3.Text _text_3;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewSettingsComponent4(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import22.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import23.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_24_5, null, null);
    _text_1 = new import3.Text('');
    import3.Text _text_2 = new import3.Text(' (');
    _text_3 = new import3.Text('');
    import3.Text _text_4 = new import3.Text(')');
    _compView_0.create(_MaterialRadioComponent_0_5, [
      [_text_1, _text_2, _text_3, _text_4]
    ]);
    final subscription_0 = _MaterialRadioComponent_0_5.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
    init([_el_0], [subscription_0]);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final import26.Strategy local_item = locals['\$implicit'];
    changed = false;
    final currVal_0 = (local_item == _ctx.strategy);
    if (!identical(_expr_0, currVal_0)) {
      _MaterialRadioComponent_0_5.checked = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = import16.interpolate0(local_item.shortName);
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import16.interpolate0(local_item.name);
    if (!identical(_expr_2, currVal_2)) {
      _text_3.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_24_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final import26.Strategy local_item = locals['\$implicit'];
    ctx.strategy = ($event ? local_item : ctx.strategy);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent4(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent4(parentView, parentIndex);
}

class _ViewSettingsComponent5 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import22.ViewMaterialRadioComponent0 _compView_0;
  import23.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_1;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  _ViewSettingsComponent5(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import22.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import23.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_37_5, null, null);
    _text_1 = new import3.Text('');
    import3.Text _text_2 = new import3.Text('%');
    _compView_0.create(_MaterialRadioComponent_0_5, [
      [_text_1, _text_2]
    ]);
    final subscription_0 = _MaterialRadioComponent_0_5.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
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
      _MaterialRadioComponent_0_5.disabled = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    final currVal_1 = (local_value == _ctx.interestRate);
    if (!identical(_expr_1, currVal_1)) {
      _MaterialRadioComponent_0_5.checked = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_2 = import16.interpolate0(local_value);
    if (!identical(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_37_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final int local_value = locals['\$implicit'];
    ctx.interestRate = ($event ? local_value : ctx.interestRate);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent5(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent5(parentView, parentIndex);
}

class _ViewSettingsComponent6 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import22.ViewMaterialRadioComponent0 _compView_0;
  import23.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_1;
  import3.Text _text_3;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewSettingsComponent6(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import22.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import23.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_41_5, null, null);
    _text_1 = new import3.Text('');
    import3.Text _text_2 = new import3.Text(' year');
    _text_3 = new import3.Text('');
    _compView_0.create(_MaterialRadioComponent_0_5, [
      [_text_1, _text_2, _text_3]
    ]);
    final subscription_0 = _MaterialRadioComponent_0_5.onChecked.listen(eventHandler1(_handle_checkedChange_0_0));
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
      _MaterialRadioComponent_0_5.checked = currVal_0;
      changed = true;
      _expr_0 = currVal_0;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    final currVal_1 = import16.interpolate0(local_value);
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import16.interpolate0(((local_value > 1) ? 's' : ''));
    if (!identical(_expr_2, currVal_2)) {
      _text_3.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_41_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final int local_value = locals['\$implicit'];
    ctx.years = ($event ? local_value : ctx.years);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent6(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent6(parentView, parentIndex);
}

const List<dynamic> styles$SettingsComponentHost = const [];

class _ViewSettingsComponentHost0 extends AppView<dynamic> {
  ViewSettingsComponent0 _compView_0;
  import2.SettingsComponent _SettingsComponent_0_5;
  List<import27.RelativePosition> __defaultPopupPositions_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  import28.AcxImperativeViewUtils __AcxImperativeViewUtils_0_9;
  dynamic __Document_0_10;
  import29.DomRuler __DomRuler_0_11;
  import30.Angular2ManagedZone __ManagedZone_0_12;
  dynamic __overlayContainerName_0_13;
  dynamic __overlayContainerParent_0_14;
  dynamic __overlayContainer_0_15;
  bool __overlaySyncDom_0_16;
  bool __overlayRepositionLoop_0_17;
  import31.OverlayStyleConfig __OverlayStyleConfig_0_18;
  import32.ZIndexer __ZIndexer_0_19;
  import33.OverlayDomRenderService __OverlayDomRenderService_0_20;
  import34.OverlayService __OverlayService_0_21;
  import35.DomPopupSourceFactory __DomPopupSourceFactory_0_22;
  import36.Clock __Clock_0_23;
  _ViewSettingsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import14.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<import27.RelativePosition> get _defaultPopupPositions_0_6 {
    if ((this.__defaultPopupPositions_0_6 == null)) {
      (__defaultPopupPositions_0_6 = const [const import27.RelativePosition(animationOrigin: 'top center'), const import27.RelativePosition(animationOrigin: 'top right', originX: const import27.Alignment('End', 'flex-end')), const import27.RelativePosition(animationOrigin: 'top left', originX: const import27.Alignment('Start', 'flex-start')), const import27.RelativePosition(animationOrigin: 'bottom center', originY: const import27.Alignment('End', 'flex-end')), const import27.RelativePosition(animationOrigin: 'bottom right', originX: const import27.Alignment('End', 'flex-end'), originY: const import27.Alignment('End', 'flex-end')), const import27.RelativePosition(animationOrigin: 'bottom left', originX: const import27.Alignment('Start', 'flex-start'), originY: const import27.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_6;
  }

  dynamic get _Window_0_7 {
    if ((this.__Window_0_7 == null)) {
      (__Window_0_7 = import37.getWindow());
    }
    return this.__Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((this.__DomService_0_8 == null)) {
      (__DomService_0_8 = import38.createDomService(this.injectorGet(import19.DomService, this.viewData.parentIndex, null), this.injectorGet(import39.Disposer, this.viewData.parentIndex, null), this.injectorGet(import18.NgZone, this.viewData.parentIndex), this._Window_0_7));
    }
    return this.__DomService_0_8;
  }

  import28.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_9 {
    if ((this.__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = new import28.AcxImperativeViewUtils(this.injectorGet(import40.ComponentLoader, this.viewData.parentIndex), this._DomService_0_8));
    }
    return this.__AcxImperativeViewUtils_0_9;
  }

  dynamic get _Document_0_10 {
    if ((this.__Document_0_10 == null)) {
      (__Document_0_10 = import37.getDocument());
    }
    return this.__Document_0_10;
  }

  import29.DomRuler get _DomRuler_0_11 {
    if ((this.__DomRuler_0_11 == null)) {
      (__DomRuler_0_11 = new import29.DomRuler(this._Document_0_10, this._DomService_0_8));
    }
    return this.__DomRuler_0_11;
  }

  import30.Angular2ManagedZone get _ManagedZone_0_12 {
    if ((this.__ManagedZone_0_12 == null)) {
      (__ManagedZone_0_12 = new import30.Angular2ManagedZone(this.injectorGet(import18.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_12;
  }

  dynamic get _overlayContainerName_0_13 {
    if ((this.__overlayContainerName_0_13 == null)) {
      (__overlayContainerName_0_13 = import41.getDefaultContainerName(this.injectorGet(const import42.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_13;
  }

  dynamic get _overlayContainerParent_0_14 {
    if ((this.__overlayContainerParent_0_14 == null)) {
      (__overlayContainerParent_0_14 = import41.getOverlayContainerParent(this._Document_0_10, this.injectorGet(const import42.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_14;
  }

  dynamic get _overlayContainer_0_15 {
    if ((this.__overlayContainer_0_15 == null)) {
      (__overlayContainer_0_15 = import41.getDefaultContainer(this._overlayContainerName_0_13, this._overlayContainerParent_0_14, this.injectorGet(const import42.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_0_15;
  }

  bool get _overlaySyncDom_0_16 {
    if ((this.__overlaySyncDom_0_16 == null)) {
      (__overlaySyncDom_0_16 = true);
    }
    return this.__overlaySyncDom_0_16;
  }

  bool get _overlayRepositionLoop_0_17 {
    if ((this.__overlayRepositionLoop_0_17 == null)) {
      (__overlayRepositionLoop_0_17 = true);
    }
    return this.__overlayRepositionLoop_0_17;
  }

  import31.OverlayStyleConfig get _OverlayStyleConfig_0_18 {
    if ((this.__OverlayStyleConfig_0_18 == null)) {
      (__OverlayStyleConfig_0_18 = new import31.OverlayStyleConfig(this._Document_0_10));
    }
    return this.__OverlayStyleConfig_0_18;
  }

  import32.ZIndexer get _ZIndexer_0_19 {
    if ((this.__ZIndexer_0_19 == null)) {
      (__ZIndexer_0_19 = new import32.ZIndexer());
    }
    return this.__ZIndexer_0_19;
  }

  import33.OverlayDomRenderService get _OverlayDomRenderService_0_20 {
    if ((this.__OverlayDomRenderService_0_20 == null)) {
      (__OverlayDomRenderService_0_20 = new import33.OverlayDomRenderService(this._OverlayStyleConfig_0_18, this._overlayContainer_0_15, this._overlayContainerName_0_13, this._DomRuler_0_11, this._DomService_0_8, this._AcxImperativeViewUtils_0_9, this._overlaySyncDom_0_16, this._overlayRepositionLoop_0_17, this._ZIndexer_0_19));
    }
    return this.__OverlayDomRenderService_0_20;
  }

  import34.OverlayService get _OverlayService_0_21 {
    if ((this.__OverlayService_0_21 == null)) {
      (__OverlayService_0_21 = new import34.OverlayService(this.injectorGet(import18.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_16, this._OverlayDomRenderService_0_20, this.injectorGet(import34.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_21;
  }

  import35.DomPopupSourceFactory get _DomPopupSourceFactory_0_22 {
    if ((this.__DomPopupSourceFactory_0_22 == null)) {
      (__DomPopupSourceFactory_0_22 = new import35.DomPopupSourceFactory(this._DomRuler_0_11));
    }
    return this.__DomPopupSourceFactory_0_22;
  }

  import36.Clock get _Clock_0_23 {
    if ((this.__Clock_0_23 == null)) {
      (__Clock_0_23 = const import36.Clock());
    }
    return this.__Clock_0_23;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewSettingsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SettingsComponent_0_5 = new import2.SettingsComponent();
    _compView_0.create(_SettingsComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.SettingsComponent>(0, this, rootEl, _SettingsComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import42.OpaqueToken<List<import43.RelativePosition>>('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_6;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import19.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import28.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_10;
    }
    if ((identical(token, import29.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_11;
    }
    if ((identical(token, import44.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_12;
    }
    if ((identical(token, const import42.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_13;
    }
    if ((identical(token, const import42.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_14;
    }
    if ((identical(token, const import42.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_15;
    }
    if ((identical(token, const import42.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_16;
    }
    if ((identical(token, const import42.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_17;
    }
    if ((identical(token, import31.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_18;
    }
    if ((identical(token, import32.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_19;
    }
    if ((identical(token, import33.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_20;
    }
    if ((identical(token, import34.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_21;
    }
    if ((identical(token, import35.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_22;
    }
    if (((identical(token, import36.Clock) || identical(token, const import42.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (0 == nodeIndex))) {
      return _Clock_0_23;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _SettingsComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_SettingsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
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

  _ngRef.registerComponent(SettingsComponent, SettingsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
