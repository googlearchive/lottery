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
import 'package:angular_components/material_radio/material_radio_group.template.dart' as import4;
import 'package:angular_components/material_radio/material_radio_group.dart' as import5;
import 'package:angular/src/core/linker/query_list.dart' as import6;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import8;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as import9;
import 'package:angular_components/material_checkbox/material_checkbox.dart' as import10;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import12;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import14;
import 'package:angular/angular.dart';
import 'package:angular/src/core/zone/ng_zone.dart' as import16;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_components/material_radio/material_radio.template.dart' as import18;
import 'package:angular_components/material_radio/material_radio.dart' as import19;
import 'dart:core';
import '../lottery/lottery.dart' as import21;
import 'settings.dart' as import22;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import23;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import24;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import25;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import26;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import27;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import28;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import29;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import30;
import 'package:angular_components/laminate/enums/alignment.dart' as import31;
import 'package:angular_components/utils/browser/window/module.dart' as import32;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import33;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import34;
import 'package:angular_components/utils/disposer/disposer.dart' as import35;
import 'package:angular/src/core/linker/component_loader.dart' as import36;
import 'package:angular_components/laminate/overlay/module.dart' as import37;
import 'package:angular/src/core/di/opaque_token.dart' as import38;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import39;

const List<dynamic> styles$SettingsComponent = const [import0.styles];

class ViewSettingsComponent0 extends AppView<import2.SettingsComponent> {
  import3.DivElement _el_0;
  import3.DivElement _el_1;
  import3.Element _el_2;
  import3.Element _el_4;
  import3.Text _text_5;
  import3.DivElement _el_6;
  import3.Element _el_7;
  import3.Element _el_9;
  import4.ViewMaterialRadioGroupComponent0 _compView_9;
  import5.MaterialRadioGroupComponent _MaterialRadioGroupComponent_9_4;
  final import6.QueryList _query_MaterialRadioComponent_9_0 = new import6.QueryList();
  ViewContainer _appEl_10;
  import8.NgFor _NgFor_10_7;
  import3.Element _el_11;
  import3.Element _el_13;
  import4.ViewMaterialRadioGroupComponent0 _compView_13;
  import5.MaterialRadioGroupComponent _MaterialRadioGroupComponent_13_4;
  final import6.QueryList _query_MaterialRadioComponent_13_0 = new import6.QueryList();
  ViewContainer _appEl_14;
  import8.NgFor _NgFor_14_7;
  import3.ButtonElement _el_15;
  import3.ButtonElement _el_17;
  import3.DivElement _el_19;
  import3.Element _el_20;
  import3.Element _el_22;
  import3.Text _text_23;
  import3.DivElement _el_24;
  import3.Element _el_25;
  import3.Element _el_27;
  import4.ViewMaterialRadioGroupComponent0 _compView_27;
  import5.MaterialRadioGroupComponent _MaterialRadioGroupComponent_27_4;
  final import6.QueryList _query_MaterialRadioComponent_27_0 = new import6.QueryList();
  ViewContainer _appEl_28;
  import8.NgFor _NgFor_28_7;
  import3.Element _el_29;
  import3.Element _el_30;
  import3.Text _text_32;
  import3.Element _el_33;
  import3.Element _el_35;
  import4.ViewMaterialRadioGroupComponent0 _compView_35;
  import5.MaterialRadioGroupComponent _MaterialRadioGroupComponent_35_4;
  final import6.QueryList _query_MaterialRadioComponent_35_0 = new import6.QueryList();
  ViewContainer _appEl_36;
  import8.NgFor _NgFor_36_7;
  import3.Element _el_37;
  import3.Element _el_38;
  import3.Text _text_40;
  import3.ButtonElement _el_41;
  import3.ButtonElement _el_43;
  import3.DivElement _el_45;
  import3.Element _el_46;
  import3.Element _el_48;
  import3.Text _text_49;
  import3.DivElement _el_50;
  import3.Element _el_51;
  import3.Element _el_53;
  import9.ViewMaterialCheckboxComponent0 _compView_53;
  import10.MaterialCheckboxComponent _MaterialCheckboxComponent_53_4;
  import3.Element _el_54;
  import3.Element _el_55;
  import4.ViewMaterialRadioGroupComponent0 _compView_55;
  import5.MaterialRadioGroupComponent _MaterialRadioGroupComponent_55_4;
  final import6.QueryList _query_MaterialRadioComponent_55_0 = new import6.QueryList();
  ViewContainer _appEl_56;
  import8.NgFor _NgFor_56_7;
  import3.Element _el_57;
  import3.Element _el_59;
  import4.ViewMaterialRadioGroupComponent0 _compView_59;
  import5.MaterialRadioGroupComponent _MaterialRadioGroupComponent_59_4;
  final import6.QueryList _query_MaterialRadioComponent_59_0 = new import6.QueryList();
  ViewContainer _appEl_60;
  import8.NgFor _NgFor_60_7;
  import3.ButtonElement _el_61;
  import3.ButtonElement _el_63;
  var _expr_0;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  bool _expr_10;
  static RenderComponentType _renderType;
  ViewSettingsComponent0(AppView<dynamic> parentView, num parentIndex) : super(import12.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('settings-component');
    _renderType ??= import14.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$SettingsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_0);
    _el_1 = createDivAndAppend(doc, _el_0);
    addShimC(_el_1);
    _el_2 = createAndAppend(doc, 'h2', _el_1);
    addShimE(_el_2);
    import3.Text _text_3 = new import3.Text('Wallet');
    _el_2.append(_text_3);
    _el_4 = createAndAppend(doc, 'p', _el_1);
    addShimE(_el_4);
    _text_5 = new import3.Text('');
    _el_4.append(_text_5);
    _el_6 = createDivAndAppend(doc, _el_1);
    addShimC(_el_6);
    _el_7 = createAndAppend(doc, 'h3', _el_6);
    addShimE(_el_7);
    import3.Text _text_8 = new import3.Text('Initial cash');
    _el_7.append(_text_8);
    _compView_9 = new import4.ViewMaterialRadioGroupComponent0(this, 9);
    _el_9 = _compView_9.rootEl;
    _el_6.append(_el_9);
    addShimC(_el_9);
    _MaterialRadioGroupComponent_9_4 = new import5.MaterialRadioGroupComponent(parentView.injectorGet(import16.NgZone, viewData.parentIndex), null);
    var _anchor_10 = ngAnchor.clone(false);
    _appEl_10 = new ViewContainer(10, 9, this, _anchor_10);
    TemplateRef _TemplateRef_10_6 = new TemplateRef(_appEl_10, viewFactory_SettingsComponent1);
    _NgFor_10_7 = new import8.NgFor(_appEl_10, _TemplateRef_10_6);
    _compView_9.create(_MaterialRadioGroupComponent_9_4, [
      [_appEl_10]
    ]);
    _el_11 = createAndAppend(doc, 'h3', _el_6);
    addShimE(_el_11);
    import3.Text _text_12 = new import3.Text('Daily disposable income');
    _el_11.append(_text_12);
    _compView_13 = new import4.ViewMaterialRadioGroupComponent0(this, 13);
    _el_13 = _compView_13.rootEl;
    _el_6.append(_el_13);
    addShimC(_el_13);
    _MaterialRadioGroupComponent_13_4 = new import5.MaterialRadioGroupComponent(parentView.injectorGet(import16.NgZone, viewData.parentIndex), null);
    var _anchor_14 = ngAnchor.clone(false);
    _appEl_14 = new ViewContainer(14, 13, this, _anchor_14);
    TemplateRef _TemplateRef_14_6 = new TemplateRef(_appEl_14, viewFactory_SettingsComponent2);
    _NgFor_14_7 = new import8.NgFor(_appEl_14, _TemplateRef_14_6);
    _compView_13.create(_MaterialRadioGroupComponent_13_4, [
      [_appEl_14]
    ]);
    _el_15 = createAndAppend(doc, 'button', _el_1);
    addShimC(_el_15);
    import3.Text _text_16 = new import3.Text('Save');
    _el_15.append(_text_16);
    _el_17 = createAndAppend(doc, 'button', _el_1);
    addShimC(_el_17);
    import3.Text _text_18 = new import3.Text('Cancel');
    _el_17.append(_text_18);
    _el_19 = createDivAndAppend(doc, _el_0);
    _el_19.className = 'betting-panel';
    addShimC(_el_19);
    _el_20 = createAndAppend(doc, 'h2', _el_19);
    addShimE(_el_20);
    import3.Text _text_21 = new import3.Text('Betting');
    _el_20.append(_text_21);
    _el_22 = createAndAppend(doc, 'p', _el_19);
    addShimE(_el_22);
    _text_23 = new import3.Text('');
    _el_22.append(_text_23);
    _el_24 = createDivAndAppend(doc, _el_19);
    addShimC(_el_24);
    _el_25 = createAndAppend(doc, 'h3', _el_24);
    addShimE(_el_25);
    import3.Text _text_26 = new import3.Text('Lottery');
    _el_25.append(_text_26);
    _compView_27 = new import4.ViewMaterialRadioGroupComponent0(this, 27);
    _el_27 = _compView_27.rootEl;
    _el_24.append(_el_27);
    addShimC(_el_27);
    _MaterialRadioGroupComponent_27_4 = new import5.MaterialRadioGroupComponent(parentView.injectorGet(import16.NgZone, viewData.parentIndex), null);
    var _anchor_28 = ngAnchor.clone(false);
    _appEl_28 = new ViewContainer(28, 27, this, _anchor_28);
    TemplateRef _TemplateRef_28_6 = new TemplateRef(_appEl_28, viewFactory_SettingsComponent3);
    _NgFor_28_7 = new import8.NgFor(_appEl_28, _TemplateRef_28_6);
    _compView_27.create(_MaterialRadioGroupComponent_27_4, [
      [_appEl_28]
    ]);
    _el_29 = createAndAppend(doc, 'p', _el_24);
    addShimE(_el_29);
    _el_30 = createAndAppend(doc, 'strong', _el_29);
    addShimE(_el_30);
    import3.Text _text_31 = new import3.Text('Description:');
    _el_30.append(_text_31);
    _text_32 = new import3.Text('');
    _el_29.append(_text_32);
    _el_33 = createAndAppend(doc, 'h3', _el_24);
    addShimE(_el_33);
    import3.Text _text_34 = new import3.Text('Strategy');
    _el_33.append(_text_34);
    _compView_35 = new import4.ViewMaterialRadioGroupComponent0(this, 35);
    _el_35 = _compView_35.rootEl;
    _el_24.append(_el_35);
    addShimC(_el_35);
    _MaterialRadioGroupComponent_35_4 = new import5.MaterialRadioGroupComponent(parentView.injectorGet(import16.NgZone, viewData.parentIndex), null);
    var _anchor_36 = ngAnchor.clone(false);
    _appEl_36 = new ViewContainer(36, 35, this, _anchor_36);
    TemplateRef _TemplateRef_36_6 = new TemplateRef(_appEl_36, viewFactory_SettingsComponent4);
    _NgFor_36_7 = new import8.NgFor(_appEl_36, _TemplateRef_36_6);
    _compView_35.create(_MaterialRadioGroupComponent_35_4, [
      [_appEl_36]
    ]);
    _el_37 = createAndAppend(doc, 'p', _el_24);
    addShimE(_el_37);
    _el_38 = createAndAppend(doc, 'strong', _el_37);
    addShimE(_el_38);
    import3.Text _text_39 = new import3.Text('Description:');
    _el_38.append(_text_39);
    _text_40 = new import3.Text('');
    _el_37.append(_text_40);
    _el_41 = createAndAppend(doc, 'button', _el_19);
    addShimC(_el_41);
    import3.Text _text_42 = new import3.Text('Save');
    _el_41.append(_text_42);
    _el_43 = createAndAppend(doc, 'button', _el_19);
    addShimC(_el_43);
    import3.Text _text_44 = new import3.Text('Cancel');
    _el_43.append(_text_44);
    _el_45 = createDivAndAppend(doc, _el_0);
    addShimC(_el_45);
    _el_46 = createAndAppend(doc, 'h2', _el_45);
    addShimE(_el_46);
    import3.Text _text_47 = new import3.Text('Other');
    _el_46.append(_text_47);
    _el_48 = createAndAppend(doc, 'p', _el_45);
    addShimE(_el_48);
    _text_49 = new import3.Text('');
    _el_48.append(_text_49);
    _el_50 = createDivAndAppend(doc, _el_45);
    addShimC(_el_50);
    _el_51 = createAndAppend(doc, 'h3', _el_50);
    addShimE(_el_51);
    import3.Text _text_52 = new import3.Text('Annual interest rate');
    _el_51.append(_text_52);
    _compView_53 = new import9.ViewMaterialCheckboxComponent0(this, 53);
    _el_53 = _compView_53.rootEl;
    _el_50.append(_el_53);
    createAttr(_el_53, 'label', 'Investing');
    addShimC(_el_53);
    _MaterialCheckboxComponent_53_4 = new import10.MaterialCheckboxComponent(_el_53, _compView_53.ref, null, null, null);
    _compView_53.create(_MaterialCheckboxComponent_53_4, [const []]);
    _el_54 = createAndAppend(doc, 'br', _el_50);
    addShimE(_el_54);
    _compView_55 = new import4.ViewMaterialRadioGroupComponent0(this, 55);
    _el_55 = _compView_55.rootEl;
    _el_50.append(_el_55);
    addShimC(_el_55);
    _MaterialRadioGroupComponent_55_4 = new import5.MaterialRadioGroupComponent(parentView.injectorGet(import16.NgZone, viewData.parentIndex), null);
    var _anchor_56 = ngAnchor.clone(false);
    _appEl_56 = new ViewContainer(56, 55, this, _anchor_56);
    TemplateRef _TemplateRef_56_6 = new TemplateRef(_appEl_56, viewFactory_SettingsComponent5);
    _NgFor_56_7 = new import8.NgFor(_appEl_56, _TemplateRef_56_6);
    _compView_55.create(_MaterialRadioGroupComponent_55_4, [
      [_appEl_56]
    ]);
    _el_57 = createAndAppend(doc, 'h3', _el_50);
    addShimE(_el_57);
    import3.Text _text_58 = new import3.Text('Length of simulation');
    _el_57.append(_text_58);
    _compView_59 = new import4.ViewMaterialRadioGroupComponent0(this, 59);
    _el_59 = _compView_59.rootEl;
    _el_50.append(_el_59);
    addShimC(_el_59);
    _MaterialRadioGroupComponent_59_4 = new import5.MaterialRadioGroupComponent(parentView.injectorGet(import16.NgZone, viewData.parentIndex), null);
    var _anchor_60 = ngAnchor.clone(false);
    _appEl_60 = new ViewContainer(60, 59, this, _anchor_60);
    TemplateRef _TemplateRef_60_6 = new TemplateRef(_appEl_60, viewFactory_SettingsComponent6);
    _NgFor_60_7 = new import8.NgFor(_appEl_60, _TemplateRef_60_6);
    _compView_59.create(_MaterialRadioGroupComponent_59_4, [
      [_appEl_60]
    ]);
    _el_61 = createAndAppend(doc, 'button', _el_45);
    addShimC(_el_61);
    import3.Text _text_62 = new import3.Text('Save');
    _el_61.append(_text_62);
    _el_63 = createAndAppend(doc, 'button', _el_45);
    addShimC(_el_63);
    import3.Text _text_64 = new import3.Text('Cancel');
    _el_63.append(_text_64);
    _el_15.addEventListener('click', eventHandler0(ctx.settingsUpdated));
    _el_17.addEventListener('click', eventHandler0(ctx.resetWallet));
    _el_41.addEventListener('click', eventHandler0(ctx.settingsUpdated));
    _el_43.addEventListener('click', eventHandler0(ctx.resetBetting));
    final subscription_0 = _MaterialCheckboxComponent_53_4.onChecked.listen(eventHandler1(_handle_checkedChange_53_0));
    _el_61.addEventListener('click', eventHandler0(ctx.settingsUpdated));
    _el_63.addEventListener('click', eventHandler0(ctx.resetOther));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.MaterialRadioGroupComponent) && ((9 <= nodeIndex) && (nodeIndex <= 10)))) {
      return _MaterialRadioGroupComponent_9_4;
    }
    if ((identical(token, import5.MaterialRadioGroupComponent) && ((13 <= nodeIndex) && (nodeIndex <= 14)))) {
      return _MaterialRadioGroupComponent_13_4;
    }
    if ((identical(token, import5.MaterialRadioGroupComponent) && ((27 <= nodeIndex) && (nodeIndex <= 28)))) {
      return _MaterialRadioGroupComponent_27_4;
    }
    if ((identical(token, import5.MaterialRadioGroupComponent) && ((35 <= nodeIndex) && (nodeIndex <= 36)))) {
      return _MaterialRadioGroupComponent_35_4;
    }
    if ((identical(token, import5.MaterialRadioGroupComponent) && ((55 <= nodeIndex) && (nodeIndex <= 56)))) {
      return _MaterialRadioGroupComponent_55_4;
    }
    if ((identical(token, import5.MaterialRadioGroupComponent) && ((59 <= nodeIndex) && (nodeIndex <= 60)))) {
      return _MaterialRadioGroupComponent_59_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (changed) {
      _compView_9.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.initialCashOptions, null)) {
        (_NgFor_10_7.ngForOf = _ctx.initialCashOptions);
      }
    }
    _NgFor_10_7.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_13.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.dailyDisposableOptions, null)) {
        (_NgFor_14_7.ngForOf = _ctx.dailyDisposableOptions);
      }
    }
    _NgFor_14_7.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_27.markAsCheckOnce();
    }
    final currVal_4 = _ctx.settings.lotteries;
    if (!identical(_expr_4, currVal_4)) {
      _NgFor_28_7.ngForOf = currVal_4;
      _expr_4 = currVal_4;
    }
    _NgFor_28_7.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_35.markAsCheckOnce();
    }
    final currVal_6 = _ctx.settings.strategies;
    if (!identical(_expr_6, currVal_6)) {
      _NgFor_36_7.ngForOf = currVal_6;
      _expr_6 = currVal_6;
    }
    _NgFor_36_7.ngDoCheck();
    changed = false;
    if (firstCheck) {
      _MaterialCheckboxComponent_53_4.label = 'Investing';
      changed = true;
    }
    final currVal_10 = _ctx.isInvesting;
    if (!identical(_expr_10, currVal_10)) {
      _MaterialCheckboxComponent_53_4.checked = currVal_10;
      changed = true;
      _expr_10 = currVal_10;
    }
    if (changed) {
      _compView_53.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_55.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.interestRateOptions, null)) {
        (_NgFor_56_7.ngForOf = _ctx.interestRateOptions);
      }
    }
    _NgFor_56_7.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_59.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.yearsOptions, null)) {
        (_NgFor_60_7.ngForOf = _ctx.yearsOptions);
      }
    }
    _NgFor_60_7.ngDoCheck();
    _appEl_10.detectChangesInNestedViews();
    _appEl_14.detectChangesInNestedViews();
    _appEl_28.detectChangesInNestedViews();
    _appEl_36.detectChangesInNestedViews();
    _appEl_56.detectChangesInNestedViews();
    _appEl_60.detectChangesInNestedViews();
    if (_query_MaterialRadioComponent_9_0.dirty) {
      _query_MaterialRadioComponent_9_0.reset([
        _appEl_10.mapNestedViews((_ViewSettingsComponent1 nestedView) {
          return [nestedView._MaterialRadioComponent_0_4];
        })
      ]);
      _MaterialRadioGroupComponent_9_4.list = _query_MaterialRadioComponent_9_0;
      _query_MaterialRadioComponent_9_0.notifyOnChanges();
    }
    if (_query_MaterialRadioComponent_13_0.dirty) {
      _query_MaterialRadioComponent_13_0.reset([
        _appEl_14.mapNestedViews((_ViewSettingsComponent2 nestedView) {
          return [nestedView._MaterialRadioComponent_0_4];
        })
      ]);
      _MaterialRadioGroupComponent_13_4.list = _query_MaterialRadioComponent_13_0;
      _query_MaterialRadioComponent_13_0.notifyOnChanges();
    }
    if (_query_MaterialRadioComponent_27_0.dirty) {
      _query_MaterialRadioComponent_27_0.reset([
        _appEl_28.mapNestedViews((_ViewSettingsComponent3 nestedView) {
          return [nestedView._MaterialRadioComponent_0_4];
        })
      ]);
      _MaterialRadioGroupComponent_27_4.list = _query_MaterialRadioComponent_27_0;
      _query_MaterialRadioComponent_27_0.notifyOnChanges();
    }
    if (_query_MaterialRadioComponent_35_0.dirty) {
      _query_MaterialRadioComponent_35_0.reset([
        _appEl_36.mapNestedViews((_ViewSettingsComponent4 nestedView) {
          return [nestedView._MaterialRadioComponent_0_4];
        })
      ]);
      _MaterialRadioGroupComponent_35_4.list = _query_MaterialRadioComponent_35_0;
      _query_MaterialRadioComponent_35_0.notifyOnChanges();
    }
    if (_query_MaterialRadioComponent_55_0.dirty) {
      _query_MaterialRadioComponent_55_0.reset([
        _appEl_56.mapNestedViews((_ViewSettingsComponent5 nestedView) {
          return [nestedView._MaterialRadioComponent_0_4];
        })
      ]);
      _MaterialRadioGroupComponent_55_4.list = _query_MaterialRadioComponent_55_0;
      _query_MaterialRadioComponent_55_0.notifyOnChanges();
    }
    if (_query_MaterialRadioComponent_59_0.dirty) {
      _query_MaterialRadioComponent_59_0.reset([
        _appEl_60.mapNestedViews((_ViewSettingsComponent6 nestedView) {
          return [nestedView._MaterialRadioComponent_0_4];
        })
      ]);
      _MaterialRadioGroupComponent_59_4.list = _query_MaterialRadioComponent_59_0;
      _query_MaterialRadioComponent_59_0.notifyOnChanges();
    }
    final currVal_0 = import14.interpolate2('Initial: \$', _ctx.settings.initialCash, '. Daily disposable income: \$', _ctx.settings.dailyDisposable, '.');
    if (!identical(_expr_0, currVal_0)) {
      _text_5.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_3 = import14.interpolate2('Lottery: ', _ctx.settings.lottery.shortName, '. Strategy: ', _ctx.settings.strategy.shortName, '.');
    if (!identical(_expr_3, currVal_3)) {
      _text_23.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_5 = import14.interpolate1(' ', _ctx.lottery.description, '');
    if (!identical(_expr_5, currVal_5)) {
      _text_32.text = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_7 = import14.interpolate1(' ', _ctx.strategy.description, '');
    if (!identical(_expr_7, currVal_7)) {
      _text_40.text = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = import14.interpolate2('Interest rate: ', _ctx.settings.interestRate, '%. Years: ', _ctx.settings.years, '.');
    if (!identical(_expr_8, currVal_8)) {
      _text_49.text = currVal_8;
      _expr_8 = currVal_8;
    }
    _compView_53.detectHostChanges(firstCheck);
    _compView_9.detectChanges();
    _compView_13.detectChanges();
    _compView_27.detectChanges();
    _compView_35.detectChanges();
    _compView_53.detectChanges();
    _compView_55.detectChanges();
    _compView_59.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_10?.destroyNestedViews();
    _appEl_14?.destroyNestedViews();
    _appEl_28?.destroyNestedViews();
    _appEl_36?.destroyNestedViews();
    _appEl_56?.destroyNestedViews();
    _appEl_60?.destroyNestedViews();
    _compView_9?.destroy();
    _compView_13?.destroy();
    _compView_27?.destroy();
    _compView_35?.destroy();
    _compView_53?.destroy();
    _compView_55?.destroy();
    _compView_59?.destroy();
    _MaterialRadioGroupComponent_9_4.ngOnDestroy();
    _MaterialRadioGroupComponent_13_4.ngOnDestroy();
    _MaterialRadioGroupComponent_27_4.ngOnDestroy();
    _MaterialRadioGroupComponent_35_4.ngOnDestroy();
    _MaterialRadioGroupComponent_55_4.ngOnDestroy();
    _MaterialRadioGroupComponent_59_4.ngOnDestroy();
  }

  void _handle_checkedChange_53_0($event) {
    ctx.isInvesting = $event;
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewSettingsComponent0(parentView, parentIndex);
}

class _ViewSettingsComponent1 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import18.ViewMaterialRadioComponent0 _compView_0;
  import19.MaterialRadioComponent _MaterialRadioComponent_0_4;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent1(AppView<dynamic> parentView, num parentIndex) : super(import12.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import18.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_4 = new import19.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_9_4, null, null);
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
    final currVal_1 = import14.interpolate1('\$', local_item, '');
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
    ctx.initialCash = ($event ? local_item : ctx.initialCash);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent1(parentView, parentIndex);
}

class _ViewSettingsComponent2 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import18.ViewMaterialRadioComponent0 _compView_0;
  import19.MaterialRadioComponent _MaterialRadioComponent_0_4;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent2(AppView<dynamic> parentView, num parentIndex) : super(import12.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import18.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_4 = new import19.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_13_4, null, null);
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
    final currVal_1 = import14.interpolate1('\$', local_item, '');
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_13_0.setDirty();
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
  import18.ViewMaterialRadioComponent0 _compView_0;
  import19.MaterialRadioComponent _MaterialRadioComponent_0_4;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent3(AppView<dynamic> parentView, num parentIndex) : super(import12.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import18.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_4 = new import19.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_27_4, null, null);
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
    final import21.Lottery local_item = locals['\$implicit'];
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
    final currVal_1 = import14.interpolate0(local_item.name);
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_27_0.setDirty();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_4.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final import21.Lottery local_item = locals['\$implicit'];
    ctx.lottery = ($event ? local_item : ctx.lottery);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent3(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent3(parentView, parentIndex);
}

class _ViewSettingsComponent4 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import18.ViewMaterialRadioComponent0 _compView_0;
  import19.MaterialRadioComponent _MaterialRadioComponent_0_4;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent4(AppView<dynamic> parentView, num parentIndex) : super(import12.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import18.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_4 = new import19.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_35_4, null, null);
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
    final import22.Strategy local_item = locals['\$implicit'];
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
    final currVal_1 = import14.interpolate2('', local_item.shortName, ' (', local_item.name, ')');
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
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
    final import22.Strategy local_item = locals['\$implicit'];
    ctx.strategy = ($event ? local_item : ctx.strategy);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent4(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent4(parentView, parentIndex);
}

class _ViewSettingsComponent5 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import18.ViewMaterialRadioComponent0 _compView_0;
  import19.MaterialRadioComponent _MaterialRadioComponent_0_4;
  import3.Text _text_1;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  _ViewSettingsComponent5(AppView<dynamic> parentView, num parentIndex) : super(import12.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import18.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_4 = new import19.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_55_4, null, null);
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
    final currVal_2 = import14.interpolate1('', local_value, '%');
    if (!identical(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_55_0.setDirty();
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
  import18.ViewMaterialRadioComponent0 _compView_0;
  import19.MaterialRadioComponent _MaterialRadioComponent_0_4;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent6(AppView<dynamic> parentView, num parentIndex) : super(import12.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import18.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_4 = new import19.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_59_4, null, null);
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
    final currVal_1 = import14.interpolate2('', local_value, ' year', ((local_value > 1) ? 's' : ''), '');
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_59_0.setDirty();
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
  import23.AcxImperativeViewUtils __AcxImperativeViewUtils_0_8;
  dynamic __Document_0_9;
  import24.DomRuler __DomRuler_0_10;
  import25.Angular2ManagedZone __ManagedZone_0_11;
  dynamic __overlayContainerName_0_12;
  dynamic __overlayContainerParent_0_13;
  dynamic __overlayContainer_0_14;
  bool __overlaySyncDom_0_15;
  bool __overlayRepositionLoop_0_16;
  import26.OverlayStyleConfig __OverlayStyleConfig_0_17;
  import27.ZIndexer __ZIndexer_0_18;
  import28.OverlayDomRenderService __OverlayDomRenderService_0_19;
  import29.OverlayService __OverlayService_0_20;
  import30.DomPopupSourceFactory __DomPopupSourceFactory_0_21;
  _ViewSettingsComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import12.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<dynamic> get _defaultPopupPositions_0_5 {
    if ((this.__defaultPopupPositions_0_5 == null)) {
      (__defaultPopupPositions_0_5 = const [const import31.RelativePosition(animationOrigin: 'top center'), const import31.RelativePosition(animationOrigin: 'top right', originX: const import31.Alignment('End', 'flex-end')), const import31.RelativePosition(animationOrigin: 'top left', originX: const import31.Alignment('Start', 'flex-start')), const import31.RelativePosition(animationOrigin: 'bottom center', originY: const import31.Alignment('End', 'flex-end')), const import31.RelativePosition(animationOrigin: 'bottom right', originX: const import31.Alignment('End', 'flex-end'), originY: const import31.Alignment('End', 'flex-end')), const import31.RelativePosition(animationOrigin: 'bottom left', originX: const import31.Alignment('Start', 'flex-start'), originY: const import31.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_5;
  }

  dynamic get _Window_0_6 {
    if ((this.__Window_0_6 == null)) {
      (__Window_0_6 = import32.getWindow());
    }
    return this.__Window_0_6;
  }

  dynamic get _DomService_0_7 {
    if ((this.__DomService_0_7 == null)) {
      (__DomService_0_7 = import33.createDomService(this.injectorGet(import34.DomService, this.viewData.parentIndex, null), this.injectorGet(import35.Disposer, this.viewData.parentIndex, null), this.injectorGet(import16.NgZone, this.viewData.parentIndex), this._Window_0_6));
    }
    return this.__DomService_0_7;
  }

  import23.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_8 {
    if ((this.__AcxImperativeViewUtils_0_8 == null)) {
      (__AcxImperativeViewUtils_0_8 = new import23.AcxImperativeViewUtils(this.injectorGet(import36.ComponentLoader, this.viewData.parentIndex), this._DomService_0_7));
    }
    return this.__AcxImperativeViewUtils_0_8;
  }

  dynamic get _Document_0_9 {
    if ((this.__Document_0_9 == null)) {
      (__Document_0_9 = import32.getDocument());
    }
    return this.__Document_0_9;
  }

  import24.DomRuler get _DomRuler_0_10 {
    if ((this.__DomRuler_0_10 == null)) {
      (__DomRuler_0_10 = new import24.DomRuler(this._Document_0_9, this._DomService_0_7));
    }
    return this.__DomRuler_0_10;
  }

  import25.Angular2ManagedZone get _ManagedZone_0_11 {
    if ((this.__ManagedZone_0_11 == null)) {
      (__ManagedZone_0_11 = new import25.Angular2ManagedZone(this.injectorGet(import16.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_11;
  }

  dynamic get _overlayContainerName_0_12 {
    if ((this.__overlayContainerName_0_12 == null)) {
      (__overlayContainerName_0_12 = import37.getDefaultContainerName(this.injectorGet(const import38.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_12;
  }

  dynamic get _overlayContainerParent_0_13 {
    if ((this.__overlayContainerParent_0_13 == null)) {
      (__overlayContainerParent_0_13 = import37.getOverlayContainerParent(this._Document_0_9, this.injectorGet(const import38.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_13;
  }

  dynamic get _overlayContainer_0_14 {
    if ((this.__overlayContainer_0_14 == null)) {
      (__overlayContainer_0_14 = import37.getDefaultContainer(this._overlayContainerName_0_12, this._overlayContainerParent_0_13, this.injectorGet(const import38.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
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

  import26.OverlayStyleConfig get _OverlayStyleConfig_0_17 {
    if ((this.__OverlayStyleConfig_0_17 == null)) {
      (__OverlayStyleConfig_0_17 = new import26.OverlayStyleConfig(this._Document_0_9));
    }
    return this.__OverlayStyleConfig_0_17;
  }

  import27.ZIndexer get _ZIndexer_0_18 {
    if ((this.__ZIndexer_0_18 == null)) {
      (__ZIndexer_0_18 = new import27.ZIndexer());
    }
    return this.__ZIndexer_0_18;
  }

  import28.OverlayDomRenderService get _OverlayDomRenderService_0_19 {
    if ((this.__OverlayDomRenderService_0_19 == null)) {
      (__OverlayDomRenderService_0_19 = new import28.OverlayDomRenderService(this._OverlayStyleConfig_0_17, this._overlayContainer_0_14, this._overlayContainerName_0_12, this._DomRuler_0_10, this._DomService_0_7, this._AcxImperativeViewUtils_0_8, this._overlaySyncDom_0_15, this._overlayRepositionLoop_0_16, this._ZIndexer_0_18));
    }
    return this.__OverlayDomRenderService_0_19;
  }

  import29.OverlayService get _OverlayService_0_20 {
    if ((this.__OverlayService_0_20 == null)) {
      (__OverlayService_0_20 = new import29.OverlayService(this.injectorGet(import16.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_15, this._OverlayDomRenderService_0_19, this.injectorGet(import29.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_20;
  }

  import30.DomPopupSourceFactory get _DomPopupSourceFactory_0_21 {
    if ((this.__DomPopupSourceFactory_0_21 == null)) {
      (__DomPopupSourceFactory_0_21 = new import30.DomPopupSourceFactory(this._DomRuler_0_10));
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
    if ((identical(token, const import38.OpaqueToken('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_5;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_6;
    }
    if ((identical(token, import34.DomService) && (0 == nodeIndex))) {
      return _DomService_0_7;
    }
    if ((identical(token, import23.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_8;
    }
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_9;
    }
    if ((identical(token, import24.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_10;
    }
    if ((identical(token, import39.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_11;
    }
    if ((identical(token, const import38.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_12;
    }
    if ((identical(token, const import38.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_13;
    }
    if ((identical(token, const import38.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_14;
    }
    if ((identical(token, const import38.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_15;
    }
    if ((identical(token, const import38.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_16;
    }
    if ((identical(token, import26.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_17;
    }
    if ((identical(token, import27.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_18;
    }
    if ((identical(token, import28.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_19;
    }
    if ((identical(token, import29.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_20;
    }
    if ((identical(token, import30.DomPopupSourceFactory) && (0 == nodeIndex))) {
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
