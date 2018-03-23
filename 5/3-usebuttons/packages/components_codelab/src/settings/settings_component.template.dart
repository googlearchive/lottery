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
import 'package:angular_components/material_radio/material_radio_group.template.dart' as import4;
import 'package:angular_components/material_radio/material_radio_group.dart' as import5;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import7;
import 'package:angular_components/material_checkbox/material_checkbox.template.dart' as import8;
import 'package:angular_components/material_checkbox/material_checkbox.dart' as import9;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import11;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/core/zone/ng_zone.dart' as import15;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular_components/material_radio/material_radio.template.dart' as import17;
import 'package:angular_components/material_radio/material_radio.dart' as import18;
import 'dart:core';
import '../lottery/lottery.dart' as import20;
import 'settings.dart' as import21;
import 'package:angular_components/laminate/enums/alignment.dart' as import22;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import23;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import24;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import25;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import26;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import27;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import28;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import29;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import30;
import 'package:quiver/time.dart' as import31;
import 'package:angular_components/utils/browser/window/module.dart' as import32;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import33;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import34;
import 'package:angular_components/utils/disposer/disposer.dart' as import35;
import 'package:angular/src/core/linker/component_loader.dart' as import36;
import 'package:angular_components/laminate/overlay/module.dart' as import37;
import 'package:angular/src/core/di/opaque_token.dart' as import38;
import 'package:angular_components/laminate/enums/alignment.dart' as import39;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import40;

const List<dynamic> styles$SettingsComponent = const [import0.styles];

class ViewSettingsComponent0 extends AppView<import2.SettingsComponent> {
  import3.DivElement _el_0;
  import3.DivElement _el_1;
  import3.Element _el_2;
  import3.Element _el_4;
  import3.Text _text_6;
  import3.Text _text_8;
  import3.DivElement _el_10;
  import3.Element _el_11;
  import3.Element _el_13;
  import4.ViewMaterialRadioGroupComponent0 _compView_13;
  import5.MaterialRadioGroupComponent _MaterialRadioGroupComponent_13_5;
  bool _query_MaterialRadioComponent_13_0_isDirty = true;
  ViewContainer _appEl_14;
  import7.NgFor _NgFor_14_9;
  import3.Element _el_15;
  import3.Element _el_17;
  import4.ViewMaterialRadioGroupComponent0 _compView_17;
  import5.MaterialRadioGroupComponent _MaterialRadioGroupComponent_17_5;
  bool _query_MaterialRadioComponent_17_0_isDirty = true;
  ViewContainer _appEl_18;
  import7.NgFor _NgFor_18_9;
  import3.ButtonElement _el_19;
  import3.ButtonElement _el_21;
  import3.DivElement _el_23;
  import3.Element _el_24;
  import3.Element _el_26;
  import3.Text _text_28;
  import3.Text _text_30;
  import3.DivElement _el_32;
  import3.Element _el_33;
  import3.Element _el_35;
  import4.ViewMaterialRadioGroupComponent0 _compView_35;
  import5.MaterialRadioGroupComponent _MaterialRadioGroupComponent_35_5;
  bool _query_MaterialRadioComponent_35_0_isDirty = true;
  ViewContainer _appEl_36;
  import7.NgFor _NgFor_36_9;
  import3.Element _el_37;
  import3.Element _el_38;
  import3.Text _text_41;
  import3.Element _el_42;
  import3.Element _el_44;
  import4.ViewMaterialRadioGroupComponent0 _compView_44;
  import5.MaterialRadioGroupComponent _MaterialRadioGroupComponent_44_5;
  bool _query_MaterialRadioComponent_44_0_isDirty = true;
  ViewContainer _appEl_45;
  import7.NgFor _NgFor_45_9;
  import3.Element _el_46;
  import3.Element _el_47;
  import3.Text _text_50;
  import3.ButtonElement _el_51;
  import3.ButtonElement _el_53;
  import3.DivElement _el_55;
  import3.Element _el_56;
  import3.Element _el_58;
  import3.Text _text_60;
  import3.Text _text_62;
  import3.DivElement _el_64;
  import3.Element _el_65;
  import3.Element _el_67;
  import8.ViewMaterialCheckboxComponent0 _compView_67;
  import9.MaterialCheckboxComponent _MaterialCheckboxComponent_67_5;
  import3.Element _el_68;
  import3.Element _el_69;
  import4.ViewMaterialRadioGroupComponent0 _compView_69;
  import5.MaterialRadioGroupComponent _MaterialRadioGroupComponent_69_5;
  bool _query_MaterialRadioComponent_69_0_isDirty = true;
  ViewContainer _appEl_70;
  import7.NgFor _NgFor_70_9;
  import3.Element _el_71;
  import3.Element _el_73;
  import4.ViewMaterialRadioGroupComponent0 _compView_73;
  import5.MaterialRadioGroupComponent _MaterialRadioGroupComponent_73_5;
  bool _query_MaterialRadioComponent_73_0_isDirty = true;
  ViewContainer _appEl_74;
  import7.NgFor _NgFor_74_9;
  import3.ButtonElement _el_75;
  import3.ButtonElement _el_77;
  var _expr_0;
  var _expr_1;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_10;
  var _expr_11;
  bool _expr_13;
  static RenderComponentType _renderType;
  ViewSettingsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('settings-component');
    _renderType ??= import13.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$SettingsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
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
    import3.Text _text_5 = new import3.Text('Initial: \$');
    _el_4.append(_text_5);
    _text_6 = new import3.Text('');
    _el_4.append(_text_6);
    import3.Text _text_7 = new import3.Text('. Daily disposable income: \$');
    _el_4.append(_text_7);
    _text_8 = new import3.Text('');
    _el_4.append(_text_8);
    import3.Text _text_9 = new import3.Text('.');
    _el_4.append(_text_9);
    _el_10 = createDivAndAppend(doc, _el_1);
    addShimC(_el_10);
    _el_11 = createAndAppend(doc, 'h3', _el_10);
    addShimE(_el_11);
    import3.Text _text_12 = new import3.Text('Initial cash');
    _el_11.append(_text_12);
    _compView_13 = new import4.ViewMaterialRadioGroupComponent0(this, 13);
    _el_13 = _compView_13.rootEl;
    _el_10.append(_el_13);
    addShimC(_el_13);
    _MaterialRadioGroupComponent_13_5 = new import5.MaterialRadioGroupComponent(parentView.injectorGet(import15.NgZone, viewData.parentIndex), null);
    var _anchor_14 = ngAnchor.clone(false);
    _appEl_14 = new ViewContainer(14, 13, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = new TemplateRef(_appEl_14, viewFactory_SettingsComponent1);
    _NgFor_14_9 = new import7.NgFor(_appEl_14, _TemplateRef_14_8);
    _compView_13.create(_MaterialRadioGroupComponent_13_5, [
      [_appEl_14]
    ]);
    _el_15 = createAndAppend(doc, 'h3', _el_10);
    addShimE(_el_15);
    import3.Text _text_16 = new import3.Text('Daily disposable income');
    _el_15.append(_text_16);
    _compView_17 = new import4.ViewMaterialRadioGroupComponent0(this, 17);
    _el_17 = _compView_17.rootEl;
    _el_10.append(_el_17);
    addShimC(_el_17);
    _MaterialRadioGroupComponent_17_5 = new import5.MaterialRadioGroupComponent(parentView.injectorGet(import15.NgZone, viewData.parentIndex), null);
    var _anchor_18 = ngAnchor.clone(false);
    _appEl_18 = new ViewContainer(18, 17, this, _anchor_18);
    TemplateRef _TemplateRef_18_8 = new TemplateRef(_appEl_18, viewFactory_SettingsComponent2);
    _NgFor_18_9 = new import7.NgFor(_appEl_18, _TemplateRef_18_8);
    _compView_17.create(_MaterialRadioGroupComponent_17_5, [
      [_appEl_18]
    ]);
    _el_19 = createAndAppend(doc, 'button', _el_1);
    addShimC(_el_19);
    import3.Text _text_20 = new import3.Text('Save');
    _el_19.append(_text_20);
    _el_21 = createAndAppend(doc, 'button', _el_1);
    addShimC(_el_21);
    import3.Text _text_22 = new import3.Text('Cancel');
    _el_21.append(_text_22);
    _el_23 = createDivAndAppend(doc, _el_0);
    _el_23.className = 'betting-panel';
    addShimC(_el_23);
    _el_24 = createAndAppend(doc, 'h2', _el_23);
    addShimE(_el_24);
    import3.Text _text_25 = new import3.Text('Betting');
    _el_24.append(_text_25);
    _el_26 = createAndAppend(doc, 'p', _el_23);
    addShimE(_el_26);
    import3.Text _text_27 = new import3.Text('Lottery: ');
    _el_26.append(_text_27);
    _text_28 = new import3.Text('');
    _el_26.append(_text_28);
    import3.Text _text_29 = new import3.Text('. Strategy: ');
    _el_26.append(_text_29);
    _text_30 = new import3.Text('');
    _el_26.append(_text_30);
    import3.Text _text_31 = new import3.Text('.');
    _el_26.append(_text_31);
    _el_32 = createDivAndAppend(doc, _el_23);
    addShimC(_el_32);
    _el_33 = createAndAppend(doc, 'h3', _el_32);
    addShimE(_el_33);
    import3.Text _text_34 = new import3.Text('Lottery');
    _el_33.append(_text_34);
    _compView_35 = new import4.ViewMaterialRadioGroupComponent0(this, 35);
    _el_35 = _compView_35.rootEl;
    _el_32.append(_el_35);
    addShimC(_el_35);
    _MaterialRadioGroupComponent_35_5 = new import5.MaterialRadioGroupComponent(parentView.injectorGet(import15.NgZone, viewData.parentIndex), null);
    var _anchor_36 = ngAnchor.clone(false);
    _appEl_36 = new ViewContainer(36, 35, this, _anchor_36);
    TemplateRef _TemplateRef_36_8 = new TemplateRef(_appEl_36, viewFactory_SettingsComponent3);
    _NgFor_36_9 = new import7.NgFor(_appEl_36, _TemplateRef_36_8);
    _compView_35.create(_MaterialRadioGroupComponent_35_5, [
      [_appEl_36]
    ]);
    _el_37 = createAndAppend(doc, 'p', _el_32);
    addShimE(_el_37);
    _el_38 = createAndAppend(doc, 'strong', _el_37);
    addShimE(_el_38);
    import3.Text _text_39 = new import3.Text('Description:');
    _el_38.append(_text_39);
    import3.Text _text_40 = new import3.Text(' ');
    _el_37.append(_text_40);
    _text_41 = new import3.Text('');
    _el_37.append(_text_41);
    _el_42 = createAndAppend(doc, 'h3', _el_32);
    addShimE(_el_42);
    import3.Text _text_43 = new import3.Text('Strategy');
    _el_42.append(_text_43);
    _compView_44 = new import4.ViewMaterialRadioGroupComponent0(this, 44);
    _el_44 = _compView_44.rootEl;
    _el_32.append(_el_44);
    addShimC(_el_44);
    _MaterialRadioGroupComponent_44_5 = new import5.MaterialRadioGroupComponent(parentView.injectorGet(import15.NgZone, viewData.parentIndex), null);
    var _anchor_45 = ngAnchor.clone(false);
    _appEl_45 = new ViewContainer(45, 44, this, _anchor_45);
    TemplateRef _TemplateRef_45_8 = new TemplateRef(_appEl_45, viewFactory_SettingsComponent4);
    _NgFor_45_9 = new import7.NgFor(_appEl_45, _TemplateRef_45_8);
    _compView_44.create(_MaterialRadioGroupComponent_44_5, [
      [_appEl_45]
    ]);
    _el_46 = createAndAppend(doc, 'p', _el_32);
    addShimE(_el_46);
    _el_47 = createAndAppend(doc, 'strong', _el_46);
    addShimE(_el_47);
    import3.Text _text_48 = new import3.Text('Description:');
    _el_47.append(_text_48);
    import3.Text _text_49 = new import3.Text(' ');
    _el_46.append(_text_49);
    _text_50 = new import3.Text('');
    _el_46.append(_text_50);
    _el_51 = createAndAppend(doc, 'button', _el_23);
    addShimC(_el_51);
    import3.Text _text_52 = new import3.Text('Save');
    _el_51.append(_text_52);
    _el_53 = createAndAppend(doc, 'button', _el_23);
    addShimC(_el_53);
    import3.Text _text_54 = new import3.Text('Cancel');
    _el_53.append(_text_54);
    _el_55 = createDivAndAppend(doc, _el_0);
    addShimC(_el_55);
    _el_56 = createAndAppend(doc, 'h2', _el_55);
    addShimE(_el_56);
    import3.Text _text_57 = new import3.Text('Other');
    _el_56.append(_text_57);
    _el_58 = createAndAppend(doc, 'p', _el_55);
    addShimE(_el_58);
    import3.Text _text_59 = new import3.Text('Interest rate: ');
    _el_58.append(_text_59);
    _text_60 = new import3.Text('');
    _el_58.append(_text_60);
    import3.Text _text_61 = new import3.Text('%. Years: ');
    _el_58.append(_text_61);
    _text_62 = new import3.Text('');
    _el_58.append(_text_62);
    import3.Text _text_63 = new import3.Text('.');
    _el_58.append(_text_63);
    _el_64 = createDivAndAppend(doc, _el_55);
    addShimC(_el_64);
    _el_65 = createAndAppend(doc, 'h3', _el_64);
    addShimE(_el_65);
    import3.Text _text_66 = new import3.Text('Annual interest rate');
    _el_65.append(_text_66);
    _compView_67 = new import8.ViewMaterialCheckboxComponent0(this, 67);
    _el_67 = _compView_67.rootEl;
    _el_64.append(_el_67);
    createAttr(_el_67, 'label', 'Investing');
    addShimC(_el_67);
    _MaterialCheckboxComponent_67_5 = new import9.MaterialCheckboxComponent(_el_67, _compView_67.ref, null, null, null);
    _compView_67.create(_MaterialCheckboxComponent_67_5, [const []]);
    _el_68 = createAndAppend(doc, 'br', _el_64);
    addShimE(_el_68);
    _compView_69 = new import4.ViewMaterialRadioGroupComponent0(this, 69);
    _el_69 = _compView_69.rootEl;
    _el_64.append(_el_69);
    addShimC(_el_69);
    _MaterialRadioGroupComponent_69_5 = new import5.MaterialRadioGroupComponent(parentView.injectorGet(import15.NgZone, viewData.parentIndex), null);
    var _anchor_70 = ngAnchor.clone(false);
    _appEl_70 = new ViewContainer(70, 69, this, _anchor_70);
    TemplateRef _TemplateRef_70_8 = new TemplateRef(_appEl_70, viewFactory_SettingsComponent5);
    _NgFor_70_9 = new import7.NgFor(_appEl_70, _TemplateRef_70_8);
    _compView_69.create(_MaterialRadioGroupComponent_69_5, [
      [_appEl_70]
    ]);
    _el_71 = createAndAppend(doc, 'h3', _el_64);
    addShimE(_el_71);
    import3.Text _text_72 = new import3.Text('Length of simulation');
    _el_71.append(_text_72);
    _compView_73 = new import4.ViewMaterialRadioGroupComponent0(this, 73);
    _el_73 = _compView_73.rootEl;
    _el_64.append(_el_73);
    addShimC(_el_73);
    _MaterialRadioGroupComponent_73_5 = new import5.MaterialRadioGroupComponent(parentView.injectorGet(import15.NgZone, viewData.parentIndex), null);
    var _anchor_74 = ngAnchor.clone(false);
    _appEl_74 = new ViewContainer(74, 73, this, _anchor_74);
    TemplateRef _TemplateRef_74_8 = new TemplateRef(_appEl_74, viewFactory_SettingsComponent6);
    _NgFor_74_9 = new import7.NgFor(_appEl_74, _TemplateRef_74_8);
    _compView_73.create(_MaterialRadioGroupComponent_73_5, [
      [_appEl_74]
    ]);
    _el_75 = createAndAppend(doc, 'button', _el_55);
    addShimC(_el_75);
    import3.Text _text_76 = new import3.Text('Save');
    _el_75.append(_text_76);
    _el_77 = createAndAppend(doc, 'button', _el_55);
    addShimC(_el_77);
    import3.Text _text_78 = new import3.Text('Cancel');
    _el_77.append(_text_78);
    _el_19.addEventListener('click', eventHandler0(ctx.settingsUpdated));
    _el_21.addEventListener('click', eventHandler0(ctx.resetWallet));
    _el_51.addEventListener('click', eventHandler0(ctx.settingsUpdated));
    _el_53.addEventListener('click', eventHandler0(ctx.resetBetting));
    final subscription_0 = _MaterialCheckboxComponent_67_5.onChecked.listen(eventHandler1(_handle_checkedChange_67_0));
    _el_75.addEventListener('click', eventHandler0(ctx.settingsUpdated));
    _el_77.addEventListener('click', eventHandler0(ctx.resetOther));
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import5.MaterialRadioGroupComponent) && ((13 <= nodeIndex) && (nodeIndex <= 14)))) {
      return _MaterialRadioGroupComponent_13_5;
    }
    if ((identical(token, import5.MaterialRadioGroupComponent) && ((17 <= nodeIndex) && (nodeIndex <= 18)))) {
      return _MaterialRadioGroupComponent_17_5;
    }
    if ((identical(token, import5.MaterialRadioGroupComponent) && ((35 <= nodeIndex) && (nodeIndex <= 36)))) {
      return _MaterialRadioGroupComponent_35_5;
    }
    if ((identical(token, import5.MaterialRadioGroupComponent) && ((44 <= nodeIndex) && (nodeIndex <= 45)))) {
      return _MaterialRadioGroupComponent_44_5;
    }
    if ((identical(token, import5.MaterialRadioGroupComponent) && ((69 <= nodeIndex) && (nodeIndex <= 70)))) {
      return _MaterialRadioGroupComponent_69_5;
    }
    if ((identical(token, import5.MaterialRadioGroupComponent) && ((73 <= nodeIndex) && (nodeIndex <= 74)))) {
      return _MaterialRadioGroupComponent_73_5;
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
      _compView_13.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.initialCashOptions, null)) {
        (_NgFor_14_9.ngForOf = _ctx.initialCashOptions);
      }
    }
    _NgFor_14_9.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_17.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.dailyDisposableOptions, null)) {
        (_NgFor_18_9.ngForOf = _ctx.dailyDisposableOptions);
      }
    }
    _NgFor_18_9.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_35.markAsCheckOnce();
    }
    final currVal_6 = _ctx.settings.lotteries;
    if (!identical(_expr_6, currVal_6)) {
      _NgFor_36_9.ngForOf = currVal_6;
      _expr_6 = currVal_6;
    }
    _NgFor_36_9.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_44.markAsCheckOnce();
    }
    final currVal_8 = _ctx.settings.strategies;
    if (!identical(_expr_8, currVal_8)) {
      _NgFor_45_9.ngForOf = currVal_8;
      _expr_8 = currVal_8;
    }
    _NgFor_45_9.ngDoCheck();
    changed = false;
    if (firstCheck) {
      _MaterialCheckboxComponent_67_5.label = 'Investing';
      changed = true;
    }
    final currVal_13 = _ctx.isInvesting;
    if (!identical(_expr_13, currVal_13)) {
      _MaterialCheckboxComponent_67_5.checked = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
    }
    if (changed) {
      _compView_67.markAsCheckOnce();
    }
    changed = false;
    if (changed) {
      _compView_69.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.interestRateOptions, null)) {
        (_NgFor_70_9.ngForOf = _ctx.interestRateOptions);
      }
    }
    _NgFor_70_9.ngDoCheck();
    changed = false;
    if (changed) {
      _compView_73.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.yearsOptions, null)) {
        (_NgFor_74_9.ngForOf = _ctx.yearsOptions);
      }
    }
    _NgFor_74_9.ngDoCheck();
    _appEl_14.detectChangesInNestedViews();
    _appEl_18.detectChangesInNestedViews();
    _appEl_36.detectChangesInNestedViews();
    _appEl_45.detectChangesInNestedViews();
    _appEl_70.detectChangesInNestedViews();
    _appEl_74.detectChangesInNestedViews();
    if (_query_MaterialRadioComponent_13_0_isDirty) {
      _MaterialRadioGroupComponent_13_5.list = _appEl_14.mapNestedViews((_ViewSettingsComponent1 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_13_0_isDirty = false;
    }
    if (_query_MaterialRadioComponent_17_0_isDirty) {
      _MaterialRadioGroupComponent_17_5.list = _appEl_18.mapNestedViews((_ViewSettingsComponent2 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_17_0_isDirty = false;
    }
    if (_query_MaterialRadioComponent_35_0_isDirty) {
      _MaterialRadioGroupComponent_35_5.list = _appEl_36.mapNestedViews((_ViewSettingsComponent3 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_35_0_isDirty = false;
    }
    if (_query_MaterialRadioComponent_44_0_isDirty) {
      _MaterialRadioGroupComponent_44_5.list = _appEl_45.mapNestedViews((_ViewSettingsComponent4 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_44_0_isDirty = false;
    }
    if (_query_MaterialRadioComponent_69_0_isDirty) {
      _MaterialRadioGroupComponent_69_5.list = _appEl_70.mapNestedViews((_ViewSettingsComponent5 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_69_0_isDirty = false;
    }
    if (_query_MaterialRadioComponent_73_0_isDirty) {
      _MaterialRadioGroupComponent_73_5.list = _appEl_74.mapNestedViews((_ViewSettingsComponent6 nestedView) {
        return [nestedView._MaterialRadioComponent_0_5];
      });
      _query_MaterialRadioComponent_73_0_isDirty = false;
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_13_5.ngAfterContentInit();
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_17_5.ngAfterContentInit();
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_35_5.ngAfterContentInit();
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_44_5.ngAfterContentInit();
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_69_5.ngAfterContentInit();
    }
    if (firstCheck) {
      _MaterialRadioGroupComponent_73_5.ngAfterContentInit();
    }
    final currVal_0 = import13.interpolate0(_ctx.settings.initialCash);
    if (!identical(_expr_0, currVal_0)) {
      _text_6.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import13.interpolate0(_ctx.settings.dailyDisposable);
    if (!identical(_expr_1, currVal_1)) {
      _text_8.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_4 = import13.interpolate0(_ctx.settings.lottery.shortName);
    if (!identical(_expr_4, currVal_4)) {
      _text_28.text = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = import13.interpolate0(_ctx.settings.strategy.shortName);
    if (!identical(_expr_5, currVal_5)) {
      _text_30.text = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_7 = import13.interpolate0(_ctx.lottery.description);
    if (!identical(_expr_7, currVal_7)) {
      _text_41.text = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_9 = import13.interpolate0(_ctx.strategy.description);
    if (!identical(_expr_9, currVal_9)) {
      _text_50.text = currVal_9;
      _expr_9 = currVal_9;
    }
    final currVal_10 = import13.interpolate0(_ctx.settings.interestRate);
    if (!identical(_expr_10, currVal_10)) {
      _text_60.text = currVal_10;
      _expr_10 = currVal_10;
    }
    final currVal_11 = import13.interpolate0(_ctx.settings.years);
    if (!identical(_expr_11, currVal_11)) {
      _text_62.text = currVal_11;
      _expr_11 = currVal_11;
    }
    _compView_67.detectHostChanges(firstCheck);
    _compView_13.detectChanges();
    _compView_17.detectChanges();
    _compView_35.detectChanges();
    _compView_44.detectChanges();
    _compView_67.detectChanges();
    _compView_69.detectChanges();
    _compView_73.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_14?.destroyNestedViews();
    _appEl_18?.destroyNestedViews();
    _appEl_36?.destroyNestedViews();
    _appEl_45?.destroyNestedViews();
    _appEl_70?.destroyNestedViews();
    _appEl_74?.destroyNestedViews();
    _compView_13?.destroy();
    _compView_17?.destroy();
    _compView_35?.destroy();
    _compView_44?.destroy();
    _compView_67?.destroy();
    _compView_69?.destroy();
    _compView_73?.destroy();
    _MaterialRadioGroupComponent_13_5.ngOnDestroy();
    _MaterialRadioGroupComponent_17_5.ngOnDestroy();
    _MaterialRadioGroupComponent_35_5.ngOnDestroy();
    _MaterialRadioGroupComponent_44_5.ngOnDestroy();
    _MaterialRadioGroupComponent_69_5.ngOnDestroy();
    _MaterialRadioGroupComponent_73_5.ngOnDestroy();
  }

  void _handle_checkedChange_67_0($event) {
    ctx.isInvesting = $event;
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewSettingsComponent0(parentView, parentIndex);
}

class _ViewSettingsComponent1 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import17.ViewMaterialRadioComponent0 _compView_0;
  import18.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_2;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import17.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import18.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_13_5, null, null);
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
    final currVal_1 = import13.interpolate0(local_item);
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_13_0_isDirty = true;
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
  import17.ViewMaterialRadioComponent0 _compView_0;
  import18.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_2;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent2(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import17.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import18.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_17_5, null, null);
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
    final currVal_1 = import13.interpolate0(local_item);
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_17_0_isDirty = true;
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
  import17.ViewMaterialRadioComponent0 _compView_0;
  import18.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_1;
  bool _expr_0;
  var _expr_1;
  _ViewSettingsComponent3(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import17.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import18.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_35_5, null, null);
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
    final import20.Lottery local_item = locals['\$implicit'];
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
    final currVal_1 = import13.interpolate0(local_item.name);
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_35_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final import20.Lottery local_item = locals['\$implicit'];
    ctx.lottery = ($event ? local_item : ctx.lottery);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent3(parentView, parentIndex);
}

class _ViewSettingsComponent4 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import17.ViewMaterialRadioComponent0 _compView_0;
  import18.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_1;
  import3.Text _text_3;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewSettingsComponent4(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import17.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import18.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_44_5, null, null);
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
    final import21.Strategy local_item = locals['\$implicit'];
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
    final currVal_1 = import13.interpolate0(local_item.shortName);
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import13.interpolate0(local_item.name);
    if (!identical(_expr_2, currVal_2)) {
      _text_3.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_44_0_isDirty = true;
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _MaterialRadioComponent_0_5.ngOnDestroy();
  }

  void _handle_checkedChange_0_0($event) {
    final import21.Strategy local_item = locals['\$implicit'];
    ctx.strategy = ($event ? local_item : ctx.strategy);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent4(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent4(parentView, parentIndex);
}

class _ViewSettingsComponent5 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import17.ViewMaterialRadioComponent0 _compView_0;
  import18.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_1;
  bool _expr_0;
  bool _expr_1;
  var _expr_2;
  _ViewSettingsComponent5(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import17.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import18.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_69_5, null, null);
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
    final currVal_2 = import13.interpolate0(local_value);
    if (!identical(_expr_2, currVal_2)) {
      _text_1.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_69_0_isDirty = true;
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
  import17.ViewMaterialRadioComponent0 _compView_0;
  import18.MaterialRadioComponent _MaterialRadioComponent_0_5;
  import3.Text _text_1;
  import3.Text _text_3;
  bool _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewSettingsComponent6(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    _compView_0 = new import17.ViewMaterialRadioComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    addShimC(_el_0);
    _MaterialRadioComponent_0_5 = new import18.MaterialRadioComponent(_el_0, _compView_0.ref, (parentView as ViewSettingsComponent0)._MaterialRadioGroupComponent_73_5, null, null);
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
    final currVal_1 = import13.interpolate0(local_value);
    if (!identical(_expr_1, currVal_1)) {
      _text_1.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import13.interpolate0(((local_value > 1) ? 's' : ''));
    if (!identical(_expr_2, currVal_2)) {
      _text_3.text = currVal_2;
      _expr_2 = currVal_2;
    }
    _compView_0.detectChanges();
  }

  @override
  void dirtyParentQueriesInternal() {
    (parentView as ViewSettingsComponent0)._query_MaterialRadioComponent_73_0_isDirty = true;
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
  List<import22.RelativePosition> __defaultPopupPositions_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  import23.AcxImperativeViewUtils __AcxImperativeViewUtils_0_9;
  dynamic __Document_0_10;
  import24.DomRuler __DomRuler_0_11;
  import25.Angular2ManagedZone __ManagedZone_0_12;
  dynamic __overlayContainerName_0_13;
  dynamic __overlayContainerParent_0_14;
  dynamic __overlayContainer_0_15;
  bool __overlaySyncDom_0_16;
  bool __overlayRepositionLoop_0_17;
  import26.OverlayStyleConfig __OverlayStyleConfig_0_18;
  import27.ZIndexer __ZIndexer_0_19;
  import28.OverlayDomRenderService __OverlayDomRenderService_0_20;
  import29.OverlayService __OverlayService_0_21;
  import30.DomPopupSourceFactory __DomPopupSourceFactory_0_22;
  import31.Clock __Clock_0_23;
  _ViewSettingsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import11.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<import22.RelativePosition> get _defaultPopupPositions_0_6 {
    if ((this.__defaultPopupPositions_0_6 == null)) {
      (__defaultPopupPositions_0_6 = const [const import22.RelativePosition(animationOrigin: 'top center'), const import22.RelativePosition(animationOrigin: 'top right', originX: const import22.Alignment('End', 'flex-end')), const import22.RelativePosition(animationOrigin: 'top left', originX: const import22.Alignment('Start', 'flex-start')), const import22.RelativePosition(animationOrigin: 'bottom center', originY: const import22.Alignment('End', 'flex-end')), const import22.RelativePosition(animationOrigin: 'bottom right', originX: const import22.Alignment('End', 'flex-end'), originY: const import22.Alignment('End', 'flex-end')), const import22.RelativePosition(animationOrigin: 'bottom left', originX: const import22.Alignment('Start', 'flex-start'), originY: const import22.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_6;
  }

  dynamic get _Window_0_7 {
    if ((this.__Window_0_7 == null)) {
      (__Window_0_7 = import32.getWindow());
    }
    return this.__Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((this.__DomService_0_8 == null)) {
      (__DomService_0_8 = import33.createDomService(this.injectorGet(import34.DomService, this.viewData.parentIndex, null), this.injectorGet(import35.Disposer, this.viewData.parentIndex, null), this.injectorGet(import15.NgZone, this.viewData.parentIndex), this._Window_0_7));
    }
    return this.__DomService_0_8;
  }

  import23.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_9 {
    if ((this.__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = new import23.AcxImperativeViewUtils(this.injectorGet(import36.ComponentLoader, this.viewData.parentIndex), this._DomService_0_8));
    }
    return this.__AcxImperativeViewUtils_0_9;
  }

  dynamic get _Document_0_10 {
    if ((this.__Document_0_10 == null)) {
      (__Document_0_10 = import32.getDocument());
    }
    return this.__Document_0_10;
  }

  import24.DomRuler get _DomRuler_0_11 {
    if ((this.__DomRuler_0_11 == null)) {
      (__DomRuler_0_11 = new import24.DomRuler(this._Document_0_10, this._DomService_0_8));
    }
    return this.__DomRuler_0_11;
  }

  import25.Angular2ManagedZone get _ManagedZone_0_12 {
    if ((this.__ManagedZone_0_12 == null)) {
      (__ManagedZone_0_12 = new import25.Angular2ManagedZone(this.injectorGet(import15.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_12;
  }

  dynamic get _overlayContainerName_0_13 {
    if ((this.__overlayContainerName_0_13 == null)) {
      (__overlayContainerName_0_13 = import37.getDefaultContainerName(this.injectorGet(const import38.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_13;
  }

  dynamic get _overlayContainerParent_0_14 {
    if ((this.__overlayContainerParent_0_14 == null)) {
      (__overlayContainerParent_0_14 = import37.getOverlayContainerParent(this._Document_0_10, this.injectorGet(const import38.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_14;
  }

  dynamic get _overlayContainer_0_15 {
    if ((this.__overlayContainer_0_15 == null)) {
      (__overlayContainer_0_15 = import37.getDefaultContainer(this._overlayContainerName_0_13, this._overlayContainerParent_0_14, this.injectorGet(const import38.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
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

  import26.OverlayStyleConfig get _OverlayStyleConfig_0_18 {
    if ((this.__OverlayStyleConfig_0_18 == null)) {
      (__OverlayStyleConfig_0_18 = new import26.OverlayStyleConfig(this._Document_0_10));
    }
    return this.__OverlayStyleConfig_0_18;
  }

  import27.ZIndexer get _ZIndexer_0_19 {
    if ((this.__ZIndexer_0_19 == null)) {
      (__ZIndexer_0_19 = new import27.ZIndexer());
    }
    return this.__ZIndexer_0_19;
  }

  import28.OverlayDomRenderService get _OverlayDomRenderService_0_20 {
    if ((this.__OverlayDomRenderService_0_20 == null)) {
      (__OverlayDomRenderService_0_20 = new import28.OverlayDomRenderService(this._OverlayStyleConfig_0_18, this._overlayContainer_0_15, this._overlayContainerName_0_13, this._DomRuler_0_11, this._DomService_0_8, this._AcxImperativeViewUtils_0_9, this._overlaySyncDom_0_16, this._overlayRepositionLoop_0_17, this._ZIndexer_0_19));
    }
    return this.__OverlayDomRenderService_0_20;
  }

  import29.OverlayService get _OverlayService_0_21 {
    if ((this.__OverlayService_0_21 == null)) {
      (__OverlayService_0_21 = new import29.OverlayService(this.injectorGet(import15.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_16, this._OverlayDomRenderService_0_20, this.injectorGet(import29.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_21;
  }

  import30.DomPopupSourceFactory get _DomPopupSourceFactory_0_22 {
    if ((this.__DomPopupSourceFactory_0_22 == null)) {
      (__DomPopupSourceFactory_0_22 = new import30.DomPopupSourceFactory(this._DomRuler_0_11));
    }
    return this.__DomPopupSourceFactory_0_22;
  }

  import31.Clock get _Clock_0_23 {
    if ((this.__Clock_0_23 == null)) {
      (__Clock_0_23 = const import31.Clock());
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
    if ((identical(token, const import38.OpaqueToken<List<import39.RelativePosition>>('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_6;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import34.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import23.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_10;
    }
    if ((identical(token, import24.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_11;
    }
    if ((identical(token, import40.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_12;
    }
    if ((identical(token, const import38.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_13;
    }
    if ((identical(token, const import38.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_14;
    }
    if ((identical(token, const import38.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_15;
    }
    if ((identical(token, const import38.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_16;
    }
    if ((identical(token, const import38.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_17;
    }
    if ((identical(token, import26.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_18;
    }
    if ((identical(token, import27.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_19;
    }
    if ((identical(token, import28.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_20;
    }
    if ((identical(token, import29.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_21;
    }
    if ((identical(token, import30.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_22;
    }
    if (((identical(token, import31.Clock) || identical(token, const import38.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (0 == nodeIndex))) {
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
