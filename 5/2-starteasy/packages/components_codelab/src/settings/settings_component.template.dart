// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'settings_component.dart';
export 'settings_component.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:components_codelab/src/lottery/lottery.dart';
import 'package:components_codelab/src/settings/settings.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:components_codelab/src/lottery/lottery.template.dart' as _ref1;
import 'package:components_codelab/src/settings/settings.template.dart' as _ref2;

import 'package:components_codelab/src/settings/settings_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'settings_component.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'dart:core';
import '../lottery/lottery.dart' as import13;
import 'settings.dart' as import14;

const List<dynamic> styles$SettingsComponent = const [import0.styles];

class ViewSettingsComponent0 extends AppView<import2.SettingsComponent> {
  import3.DivElement _el_0;
  import3.DivElement _el_1;
  import3.Element _el_2;
  import3.Element _el_4;
  import3.Text _text_5;
  import3.DivElement _el_6;
  import3.Element _el_7;
  import3.DivElement _el_9;
  ViewContainer _appEl_10;
  import5.NgFor _NgFor_10_7;
  import3.Element _el_11;
  import3.DivElement _el_13;
  ViewContainer _appEl_14;
  import5.NgFor _NgFor_14_7;
  import3.ButtonElement _el_15;
  import3.ButtonElement _el_17;
  import3.DivElement _el_19;
  import3.Element _el_20;
  import3.Element _el_22;
  import3.Text _text_23;
  import3.DivElement _el_24;
  import3.Element _el_25;
  import3.DivElement _el_27;
  ViewContainer _appEl_28;
  import5.NgFor _NgFor_28_7;
  import3.Element _el_29;
  import3.Element _el_30;
  import3.Text _text_32;
  import3.Element _el_33;
  import3.DivElement _el_35;
  ViewContainer _appEl_36;
  import5.NgFor _NgFor_36_7;
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
  import3.InputElement _el_54;
  import3.Element _el_56;
  import3.DivElement _el_57;
  ViewContainer _appEl_58;
  import5.NgFor _NgFor_58_7;
  import3.Element _el_59;
  import3.DivElement _el_61;
  ViewContainer _appEl_62;
  import5.NgFor _NgFor_62_7;
  import3.ButtonElement _el_63;
  import3.ButtonElement _el_65;
  var _expr_0;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  static RenderComponentType _renderType;
  ViewSettingsComponent0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('settings-component');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$SettingsComponent);
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
    _el_9 = createDivAndAppend(doc, _el_6);
    addShimC(_el_9);
    var _anchor_10 = ngAnchor.clone(false);
    _el_9.append(_anchor_10);
    _appEl_10 = new ViewContainer(10, 9, this, _anchor_10);
    TemplateRef _TemplateRef_10_6 = new TemplateRef(_appEl_10, viewFactory_SettingsComponent1);
    _NgFor_10_7 = new import5.NgFor(_appEl_10, _TemplateRef_10_6);
    _el_11 = createAndAppend(doc, 'h3', _el_6);
    addShimE(_el_11);
    import3.Text _text_12 = new import3.Text('Daily disposable income');
    _el_11.append(_text_12);
    _el_13 = createDivAndAppend(doc, _el_6);
    addShimC(_el_13);
    var _anchor_14 = ngAnchor.clone(false);
    _el_13.append(_anchor_14);
    _appEl_14 = new ViewContainer(14, 13, this, _anchor_14);
    TemplateRef _TemplateRef_14_6 = new TemplateRef(_appEl_14, viewFactory_SettingsComponent2);
    _NgFor_14_7 = new import5.NgFor(_appEl_14, _TemplateRef_14_6);
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
    _el_27 = createDivAndAppend(doc, _el_24);
    addShimC(_el_27);
    var _anchor_28 = ngAnchor.clone(false);
    _el_27.append(_anchor_28);
    _appEl_28 = new ViewContainer(28, 27, this, _anchor_28);
    TemplateRef _TemplateRef_28_6 = new TemplateRef(_appEl_28, viewFactory_SettingsComponent3);
    _NgFor_28_7 = new import5.NgFor(_appEl_28, _TemplateRef_28_6);
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
    _el_35 = createDivAndAppend(doc, _el_24);
    addShimC(_el_35);
    var _anchor_36 = ngAnchor.clone(false);
    _el_35.append(_anchor_36);
    _appEl_36 = new ViewContainer(36, 35, this, _anchor_36);
    TemplateRef _TemplateRef_36_6 = new TemplateRef(_appEl_36, viewFactory_SettingsComponent4);
    _NgFor_36_7 = new import5.NgFor(_appEl_36, _TemplateRef_36_6);
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
    _el_53 = createAndAppend(doc, 'label', _el_50);
    addShimE(_el_53);
    _el_54 = createAndAppend(doc, 'input', _el_53);
    createAttr(_el_54, 'type', 'checkbox');
    addShimC(_el_54);
    import3.Text _text_55 = new import3.Text('Investing');
    _el_53.append(_text_55);
    _el_56 = createAndAppend(doc, 'br', _el_50);
    addShimE(_el_56);
    _el_57 = createDivAndAppend(doc, _el_50);
    addShimC(_el_57);
    var _anchor_58 = ngAnchor.clone(false);
    _el_57.append(_anchor_58);
    _appEl_58 = new ViewContainer(58, 57, this, _anchor_58);
    TemplateRef _TemplateRef_58_6 = new TemplateRef(_appEl_58, viewFactory_SettingsComponent5);
    _NgFor_58_7 = new import5.NgFor(_appEl_58, _TemplateRef_58_6);
    _el_59 = createAndAppend(doc, 'h3', _el_50);
    addShimE(_el_59);
    import3.Text _text_60 = new import3.Text('Length of simulation');
    _el_59.append(_text_60);
    _el_61 = createDivAndAppend(doc, _el_50);
    addShimC(_el_61);
    var _anchor_62 = ngAnchor.clone(false);
    _el_61.append(_anchor_62);
    _appEl_62 = new ViewContainer(62, 61, this, _anchor_62);
    TemplateRef _TemplateRef_62_6 = new TemplateRef(_appEl_62, viewFactory_SettingsComponent6);
    _NgFor_62_7 = new import5.NgFor(_appEl_62, _TemplateRef_62_6);
    _el_63 = createAndAppend(doc, 'button', _el_45);
    addShimC(_el_63);
    import3.Text _text_64 = new import3.Text('Save');
    _el_63.append(_text_64);
    _el_65 = createAndAppend(doc, 'button', _el_45);
    addShimC(_el_65);
    import3.Text _text_66 = new import3.Text('Cancel');
    _el_65.append(_text_66);
    _el_15.addEventListener('click', eventHandler0(ctx.settingsUpdated));
    _el_17.addEventListener('click', eventHandler0(ctx.resetWallet));
    _el_41.addEventListener('click', eventHandler0(ctx.settingsUpdated));
    _el_43.addEventListener('click', eventHandler0(ctx.resetBetting));
    _el_54.addEventListener('change', eventHandler1(_handle_change_54_0));
    _el_63.addEventListener('click', eventHandler0(ctx.settingsUpdated));
    _el_65.addEventListener('click', eventHandler0(ctx.resetOther));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(_ctx.initialCashOptions, null)) {
        (_NgFor_10_7.ngForOf = _ctx.initialCashOptions);
      }
    }
    _NgFor_10_7.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.dailyDisposableOptions, null)) {
        (_NgFor_14_7.ngForOf = _ctx.dailyDisposableOptions);
      }
    }
    _NgFor_14_7.ngDoCheck();
    final currVal_4 = _ctx.settings.lotteries;
    if (!identical(_expr_4, currVal_4)) {
      _NgFor_28_7.ngForOf = currVal_4;
      _expr_4 = currVal_4;
    }
    _NgFor_28_7.ngDoCheck();
    final currVal_6 = _ctx.settings.strategies;
    if (!identical(_expr_6, currVal_6)) {
      _NgFor_36_7.ngForOf = currVal_6;
      _expr_6 = currVal_6;
    }
    _NgFor_36_7.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.interestRateOptions, null)) {
        (_NgFor_58_7.ngForOf = _ctx.interestRateOptions);
      }
    }
    _NgFor_58_7.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.yearsOptions, null)) {
        (_NgFor_62_7.ngForOf = _ctx.yearsOptions);
      }
    }
    _NgFor_62_7.ngDoCheck();
    _appEl_10.detectChangesInNestedViews();
    _appEl_14.detectChangesInNestedViews();
    _appEl_28.detectChangesInNestedViews();
    _appEl_36.detectChangesInNestedViews();
    _appEl_58.detectChangesInNestedViews();
    _appEl_62.detectChangesInNestedViews();
    final currVal_0 = import9.interpolate2('Initial: \$', _ctx.settings.initialCash, '. Daily disposable income: \$', _ctx.settings.dailyDisposable, '.');
    if (!identical(_expr_0, currVal_0)) {
      _text_5.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_3 = import9.interpolate2('Lottery: ', _ctx.settings.lottery.shortName, '. Strategy: ', _ctx.settings.strategy.shortName, '.');
    if (!identical(_expr_3, currVal_3)) {
      _text_23.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_5 = import9.interpolate1(' ', _ctx.lottery.description, '');
    if (!identical(_expr_5, currVal_5)) {
      _text_32.text = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_7 = import9.interpolate1(' ', _ctx.strategy.description, '');
    if (!identical(_expr_7, currVal_7)) {
      _text_40.text = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_8 = import9.interpolate2('Interest rate: ', _ctx.settings.interestRate, '%. Years: ', _ctx.settings.years, '.');
    if (!identical(_expr_8, currVal_8)) {
      _text_49.text = currVal_8;
      _expr_8 = currVal_8;
    }
    final currVal_9 = _ctx.isInvesting;
    if (!identical(_expr_9, currVal_9)) {
      setProp(_el_54, 'checked', currVal_9);
      _expr_9 = currVal_9;
    }
  }

  @override
  void destroyInternal() {
    _appEl_10?.destroyNestedViews();
    _appEl_14?.destroyNestedViews();
    _appEl_28?.destroyNestedViews();
    _appEl_36?.destroyNestedViews();
    _appEl_58?.destroyNestedViews();
    _appEl_62?.destroyNestedViews();
  }

  void _handle_change_54_0($event) {
    final local_investingCheckbox = _el_54;
    ctx.isInvesting = local_investingCheckbox.checked;
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewSettingsComponent0(parentView, parentIndex);
}

class _ViewSettingsComponent1 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import3.InputElement _el_1;
  import3.Text _text_2;
  var _expr_0;
  var _expr_1;
  _ViewSettingsComponent1(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('label');
    addShimE(_el_0);
    _el_1 = createAndAppend(doc, 'input', _el_0);
    createAttr(_el_1, 'type', 'radio');
    addShimC(_el_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    _el_1.addEventListener('click', eventHandler1(_handle_click_1_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    final int local_item = locals['\$implicit'];
    final currVal_0 = (local_item == _ctx.initialCash);
    if (!identical(_expr_0, currVal_0)) {
      setProp(_el_1, 'checked', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate1('\$', local_item, '');
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_click_1_0($event) {
    final local_current = _el_1;
    final int local_item = locals['\$implicit'];
    ctx.initialCash = (local_current.checked ? local_item : ctx.initialCash);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent1(parentView, parentIndex);
}

class _ViewSettingsComponent2 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import3.InputElement _el_1;
  import3.Text _text_2;
  var _expr_0;
  var _expr_1;
  _ViewSettingsComponent2(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('label');
    addShimE(_el_0);
    _el_1 = createAndAppend(doc, 'input', _el_0);
    createAttr(_el_1, 'type', 'radio');
    addShimC(_el_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    _el_1.addEventListener('click', eventHandler1(_handle_click_1_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    final int local_item = locals['\$implicit'];
    final currVal_0 = (local_item == _ctx.dailyDisposable);
    if (!identical(_expr_0, currVal_0)) {
      setProp(_el_1, 'checked', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate1('\$', local_item, '');
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_click_1_0($event) {
    final local_current = _el_1;
    final int local_item = locals['\$implicit'];
    ctx.dailyDisposable = (local_current.checked ? local_item : ctx.dailyDisposable);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent2(parentView, parentIndex);
}

class _ViewSettingsComponent3 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import3.InputElement _el_1;
  import3.Text _text_2;
  var _expr_0;
  var _expr_1;
  _ViewSettingsComponent3(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('label');
    addShimE(_el_0);
    _el_1 = createAndAppend(doc, 'input', _el_0);
    createAttr(_el_1, 'type', 'radio');
    addShimC(_el_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    _el_1.addEventListener('click', eventHandler1(_handle_click_1_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    final import13.Lottery local_item = locals['\$implicit'];
    final currVal_0 = (local_item == _ctx.lottery);
    if (!identical(_expr_0, currVal_0)) {
      setProp(_el_1, 'checked', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate0(local_item.name);
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_click_1_0($event) {
    final local_current = _el_1;
    final import13.Lottery local_item = locals['\$implicit'];
    ctx.lottery = (local_current.checked ? local_item : ctx.lottery);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent3(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent3(parentView, parentIndex);
}

class _ViewSettingsComponent4 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import3.InputElement _el_1;
  import3.Text _text_2;
  var _expr_0;
  var _expr_1;
  _ViewSettingsComponent4(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('label');
    addShimE(_el_0);
    _el_1 = createAndAppend(doc, 'input', _el_0);
    createAttr(_el_1, 'type', 'radio');
    addShimC(_el_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    _el_1.addEventListener('click', eventHandler1(_handle_click_1_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    final import14.Strategy local_item = locals['\$implicit'];
    final currVal_0 = (local_item == _ctx.strategy);
    if (!identical(_expr_0, currVal_0)) {
      setProp(_el_1, 'checked', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate2('', local_item.shortName, ' (', local_item.name, ')');
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_click_1_0($event) {
    final local_current = _el_1;
    final import14.Strategy local_item = locals['\$implicit'];
    ctx.strategy = (local_current.checked ? local_item : ctx.strategy);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent4(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent4(parentView, parentIndex);
}

class _ViewSettingsComponent5 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import3.InputElement _el_1;
  import3.Text _text_2;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewSettingsComponent5(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('label');
    addShimE(_el_0);
    _el_1 = createAndAppend(doc, 'input', _el_0);
    createAttr(_el_1, 'type', 'radio');
    addShimC(_el_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    _el_1.addEventListener('click', eventHandler1(_handle_click_1_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    final int local_value = locals['\$implicit'];
    final currVal_0 = (local_value == _ctx.interestRate);
    if (!identical(_expr_0, currVal_0)) {
      setProp(_el_1, 'checked', currVal_0);
      _expr_0 = currVal_0;
    }
    final bool currVal_1 = !_ctx.isInvesting;
    if (!identical(_expr_1, currVal_1)) {
      setProp(_el_1, 'disabled', currVal_1);
      _expr_1 = currVal_1;
    }
    final currVal_2 = import9.interpolate1('', local_value, '%');
    if (!identical(_expr_2, currVal_2)) {
      _text_2.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }

  void _handle_click_1_0($event) {
    final local_current = _el_1;
    final int local_value = locals['\$implicit'];
    ctx.interestRate = (local_current.checked ? local_value : ctx.interestRate);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent5(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent5(parentView, parentIndex);
}

class _ViewSettingsComponent6 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import3.InputElement _el_1;
  import3.Text _text_2;
  var _expr_0;
  var _expr_1;
  _ViewSettingsComponent6(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewSettingsComponent0._renderType;
  }
  @override
  ComponentRef<import2.SettingsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('label');
    addShimE(_el_0);
    _el_1 = createAndAppend(doc, 'input', _el_0);
    createAttr(_el_1, 'type', 'radio');
    addShimC(_el_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    _el_1.addEventListener('click', eventHandler1(_handle_click_1_0));
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    final int local_value = locals['\$implicit'];
    final currVal_0 = (local_value == _ctx.years);
    if (!identical(_expr_0, currVal_0)) {
      setProp(_el_1, 'checked', currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate2('', local_value, ' year', ((local_value > 1) ? 's' : ''), '');
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_click_1_0($event) {
    final local_current = _el_1;
    final int local_value = locals['\$implicit'];
    ctx.years = (local_current.checked ? local_value : ctx.years);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent6(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewSettingsComponent6(parentView, parentIndex);
}

const List<dynamic> styles$SettingsComponentHost = const [];

class _ViewSettingsComponentHost0 extends AppView<dynamic> {
  ViewSettingsComponent0 _compView_0;
  import2.SettingsComponent _SettingsComponent_0_4;
  _ViewSettingsComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
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
  _ngRef.registerComponent(
    SettingsComponent,
    SettingsComponentNgFactory,
  );
}
