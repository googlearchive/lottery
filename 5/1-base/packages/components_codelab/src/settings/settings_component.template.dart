// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'settings_component.dart';
export 'settings_component.dart';
import 'package:angular/angular.dart';
import 'package:components_codelab/src/lottery/lottery.dart';
import 'package:components_codelab/src/settings/settings.dart';
import 'dart:async';
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
  import3.Text _text_6;
  import3.Text _text_8;
  import3.DivElement _el_10;
  import3.Element _el_11;
  import3.DivElement _el_13;
  ViewContainer _appEl_14;
  import5.NgFor _NgFor_14_9;
  import3.Element _el_15;
  import3.DivElement _el_17;
  ViewContainer _appEl_18;
  import5.NgFor _NgFor_18_9;
  import3.ButtonElement _el_19;
  import3.ButtonElement _el_21;
  import3.DivElement _el_23;
  import3.Element _el_24;
  import3.Element _el_26;
  import3.Text _text_28;
  import3.Text _text_30;
  import3.DivElement _el_32;
  import3.Element _el_33;
  import3.DivElement _el_35;
  ViewContainer _appEl_36;
  import5.NgFor _NgFor_36_9;
  import3.Element _el_37;
  import3.Element _el_38;
  import3.Text _text_41;
  import3.Element _el_42;
  import3.DivElement _el_44;
  ViewContainer _appEl_45;
  import5.NgFor _NgFor_45_9;
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
  import3.InputElement _el_68;
  import3.Element _el_70;
  import3.DivElement _el_71;
  ViewContainer _appEl_72;
  import5.NgFor _NgFor_72_9;
  import3.Element _el_73;
  import3.DivElement _el_75;
  ViewContainer _appEl_76;
  import5.NgFor _NgFor_76_9;
  import3.ButtonElement _el_77;
  import3.ButtonElement _el_79;
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
  var _expr_12;
  static RenderComponentType _renderType;
  ViewSettingsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('settings-component');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$SettingsComponent);
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
    _el_13 = createDivAndAppend(doc, _el_10);
    addShimC(_el_13);
    final _anchor_14 = createViewContainerAnchor();
    _el_13.append(_anchor_14);
    _appEl_14 = new ViewContainer(14, 13, this, _anchor_14);
    TemplateRef _TemplateRef_14_8 = new TemplateRef(_appEl_14, viewFactory_SettingsComponent1);
    _NgFor_14_9 = new import5.NgFor(_appEl_14, _TemplateRef_14_8);
    _el_15 = createAndAppend(doc, 'h3', _el_10);
    addShimE(_el_15);
    import3.Text _text_16 = new import3.Text('Daily disposable income');
    _el_15.append(_text_16);
    _el_17 = createDivAndAppend(doc, _el_10);
    addShimC(_el_17);
    final _anchor_18 = createViewContainerAnchor();
    _el_17.append(_anchor_18);
    _appEl_18 = new ViewContainer(18, 17, this, _anchor_18);
    TemplateRef _TemplateRef_18_8 = new TemplateRef(_appEl_18, viewFactory_SettingsComponent2);
    _NgFor_18_9 = new import5.NgFor(_appEl_18, _TemplateRef_18_8);
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
    _el_35 = createDivAndAppend(doc, _el_32);
    addShimC(_el_35);
    final _anchor_36 = createViewContainerAnchor();
    _el_35.append(_anchor_36);
    _appEl_36 = new ViewContainer(36, 35, this, _anchor_36);
    TemplateRef _TemplateRef_36_8 = new TemplateRef(_appEl_36, viewFactory_SettingsComponent3);
    _NgFor_36_9 = new import5.NgFor(_appEl_36, _TemplateRef_36_8);
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
    _el_44 = createDivAndAppend(doc, _el_32);
    addShimC(_el_44);
    final _anchor_45 = createViewContainerAnchor();
    _el_44.append(_anchor_45);
    _appEl_45 = new ViewContainer(45, 44, this, _anchor_45);
    TemplateRef _TemplateRef_45_8 = new TemplateRef(_appEl_45, viewFactory_SettingsComponent4);
    _NgFor_45_9 = new import5.NgFor(_appEl_45, _TemplateRef_45_8);
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
    _el_67 = createAndAppend(doc, 'label', _el_64);
    addShimE(_el_67);
    _el_68 = createAndAppend(doc, 'input', _el_67);
    createAttr(_el_68, 'type', 'checkbox');
    addShimC(_el_68);
    import3.Text _text_69 = new import3.Text('Investing');
    _el_67.append(_text_69);
    _el_70 = createAndAppend(doc, 'br', _el_64);
    addShimE(_el_70);
    _el_71 = createDivAndAppend(doc, _el_64);
    addShimC(_el_71);
    final _anchor_72 = createViewContainerAnchor();
    _el_71.append(_anchor_72);
    _appEl_72 = new ViewContainer(72, 71, this, _anchor_72);
    TemplateRef _TemplateRef_72_8 = new TemplateRef(_appEl_72, viewFactory_SettingsComponent5);
    _NgFor_72_9 = new import5.NgFor(_appEl_72, _TemplateRef_72_8);
    _el_73 = createAndAppend(doc, 'h3', _el_64);
    addShimE(_el_73);
    import3.Text _text_74 = new import3.Text('Length of simulation');
    _el_73.append(_text_74);
    _el_75 = createDivAndAppend(doc, _el_64);
    addShimC(_el_75);
    final _anchor_76 = createViewContainerAnchor();
    _el_75.append(_anchor_76);
    _appEl_76 = new ViewContainer(76, 75, this, _anchor_76);
    TemplateRef _TemplateRef_76_8 = new TemplateRef(_appEl_76, viewFactory_SettingsComponent6);
    _NgFor_76_9 = new import5.NgFor(_appEl_76, _TemplateRef_76_8);
    _el_77 = createAndAppend(doc, 'button', _el_55);
    addShimC(_el_77);
    import3.Text _text_78 = new import3.Text('Save');
    _el_77.append(_text_78);
    _el_79 = createAndAppend(doc, 'button', _el_55);
    addShimC(_el_79);
    import3.Text _text_80 = new import3.Text('Cancel');
    _el_79.append(_text_80);
    _el_19.addEventListener('click', eventHandler0(ctx.settingsUpdated));
    _el_21.addEventListener('click', eventHandler0(ctx.resetWallet));
    _el_51.addEventListener('click', eventHandler0(ctx.settingsUpdated));
    _el_53.addEventListener('click', eventHandler0(ctx.resetBetting));
    _el_68.addEventListener('change', eventHandler1(_handle_change_68_0));
    _el_77.addEventListener('click', eventHandler0(ctx.settingsUpdated));
    _el_79.addEventListener('click', eventHandler0(ctx.resetOther));
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.SettingsComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(_ctx.initialCashOptions, null)) {
        (_NgFor_14_9.ngForOf = _ctx.initialCashOptions);
      }
    }
    _NgFor_14_9.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.dailyDisposableOptions, null)) {
        (_NgFor_18_9.ngForOf = _ctx.dailyDisposableOptions);
      }
    }
    _NgFor_18_9.ngDoCheck();
    final currVal_6 = _ctx.settings.lotteries;
    if (!identical(_expr_6, currVal_6)) {
      _NgFor_36_9.ngForOf = currVal_6;
      _expr_6 = currVal_6;
    }
    _NgFor_36_9.ngDoCheck();
    final currVal_8 = _ctx.settings.strategies;
    if (!identical(_expr_8, currVal_8)) {
      _NgFor_45_9.ngForOf = currVal_8;
      _expr_8 = currVal_8;
    }
    _NgFor_45_9.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.interestRateOptions, null)) {
        (_NgFor_72_9.ngForOf = _ctx.interestRateOptions);
      }
    }
    _NgFor_72_9.ngDoCheck();
    if (firstCheck) {
      if (!identical(_ctx.yearsOptions, null)) {
        (_NgFor_76_9.ngForOf = _ctx.yearsOptions);
      }
    }
    _NgFor_76_9.ngDoCheck();
    _appEl_14.detectChangesInNestedViews();
    _appEl_18.detectChangesInNestedViews();
    _appEl_36.detectChangesInNestedViews();
    _appEl_45.detectChangesInNestedViews();
    _appEl_72.detectChangesInNestedViews();
    _appEl_76.detectChangesInNestedViews();
    final currVal_0 = import9.interpolate0(_ctx.settings.initialCash);
    if (!identical(_expr_0, currVal_0)) {
      _text_6.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import9.interpolate0(_ctx.settings.dailyDisposable);
    if (!identical(_expr_1, currVal_1)) {
      _text_8.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_4 = import9.interpolate0(_ctx.settings.lottery.shortName);
    if (!identical(_expr_4, currVal_4)) {
      _text_28.text = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = import9.interpolate0(_ctx.settings.strategy.shortName);
    if (!identical(_expr_5, currVal_5)) {
      _text_30.text = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_7 = import9.interpolate0(_ctx.lottery.description);
    if (!identical(_expr_7, currVal_7)) {
      _text_41.text = currVal_7;
      _expr_7 = currVal_7;
    }
    final currVal_9 = import9.interpolate0(_ctx.strategy.description);
    if (!identical(_expr_9, currVal_9)) {
      _text_50.text = currVal_9;
      _expr_9 = currVal_9;
    }
    final currVal_10 = import9.interpolate0(_ctx.settings.interestRate);
    if (!identical(_expr_10, currVal_10)) {
      _text_60.text = currVal_10;
      _expr_10 = currVal_10;
    }
    final currVal_11 = import9.interpolate0(_ctx.settings.years);
    if (!identical(_expr_11, currVal_11)) {
      _text_62.text = currVal_11;
      _expr_11 = currVal_11;
    }
    final currVal_12 = _ctx.isInvesting;
    if (!identical(_expr_12, currVal_12)) {
      setProp(_el_68, 'checked', currVal_12);
      _expr_12 = currVal_12;
    }
  }

  @override
  void destroyInternal() {
    _appEl_14?.destroyNestedViews();
    _appEl_18?.destroyNestedViews();
    _appEl_36?.destroyNestedViews();
    _appEl_45?.destroyNestedViews();
    _appEl_72?.destroyNestedViews();
    _appEl_76?.destroyNestedViews();
  }

  void _handle_change_68_0($event) {
    final local_investingCheckbox = _el_68;
    ctx.isInvesting = local_investingCheckbox.checked;
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewSettingsComponent0(parentView, parentIndex);
}

class _ViewSettingsComponent1 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import3.InputElement _el_1;
  import3.Text _text_3;
  var _expr_0;
  var _expr_1;
  _ViewSettingsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    import3.Text _text_2 = new import3.Text('\$');
    _el_0.append(_text_2);
    _text_3 = new import3.Text('');
    _el_0.append(_text_3);
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
    final currVal_1 = import9.interpolate0(local_item);
    if (!identical(_expr_1, currVal_1)) {
      _text_3.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_click_1_0($event) {
    final local_current = _el_1;
    final int local_item = locals['\$implicit'];
    ctx.initialCash = (local_current.checked ? local_item : ctx.initialCash);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent1(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent1(parentView, parentIndex);
}

class _ViewSettingsComponent2 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import3.InputElement _el_1;
  import3.Text _text_3;
  var _expr_0;
  var _expr_1;
  _ViewSettingsComponent2(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    import3.Text _text_2 = new import3.Text('\$');
    _el_0.append(_text_2);
    _text_3 = new import3.Text('');
    _el_0.append(_text_3);
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
    final currVal_1 = import9.interpolate0(local_item);
    if (!identical(_expr_1, currVal_1)) {
      _text_3.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }

  void _handle_click_1_0($event) {
    final local_current = _el_1;
    final int local_item = locals['\$implicit'];
    ctx.dailyDisposable = (local_current.checked ? local_item : ctx.dailyDisposable);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent2(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent2(parentView, parentIndex);
}

class _ViewSettingsComponent3 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import3.InputElement _el_1;
  import3.Text _text_2;
  var _expr_0;
  var _expr_1;
  _ViewSettingsComponent3(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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

AppView<import2.SettingsComponent> viewFactory_SettingsComponent3(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent3(parentView, parentIndex);
}

class _ViewSettingsComponent4 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import3.InputElement _el_1;
  import3.Text _text_2;
  import3.Text _text_4;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewSettingsComponent4(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    import3.Text _text_3 = new import3.Text(' (');
    _el_0.append(_text_3);
    _text_4 = new import3.Text('');
    _el_0.append(_text_4);
    import3.Text _text_5 = new import3.Text(')');
    _el_0.append(_text_5);
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
    final currVal_1 = import9.interpolate0(local_item.shortName);
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import9.interpolate0(local_item.name);
    if (!identical(_expr_2, currVal_2)) {
      _text_4.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }

  void _handle_click_1_0($event) {
    final local_current = _el_1;
    final import14.Strategy local_item = locals['\$implicit'];
    ctx.strategy = (local_current.checked ? local_item : ctx.strategy);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent4(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent4(parentView, parentIndex);
}

class _ViewSettingsComponent5 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import3.InputElement _el_1;
  import3.Text _text_2;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewSettingsComponent5(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    import3.Text _text_3 = new import3.Text('%');
    _el_0.append(_text_3);
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
    final currVal_2 = import9.interpolate0(local_value);
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

AppView<import2.SettingsComponent> viewFactory_SettingsComponent5(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent5(parentView, parentIndex);
}

class _ViewSettingsComponent6 extends AppView<import2.SettingsComponent> {
  import3.Element _el_0;
  import3.InputElement _el_1;
  import3.Text _text_2;
  import3.Text _text_4;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewSettingsComponent6(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.embedded, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
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
    import3.Text _text_3 = new import3.Text(' year');
    _el_0.append(_text_3);
    _text_4 = new import3.Text('');
    _el_0.append(_text_4);
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
    final currVal_1 = import9.interpolate0(local_value);
    if (!identical(_expr_1, currVal_1)) {
      _text_2.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import9.interpolate0(((local_value > 1) ? 's' : ''));
    if (!identical(_expr_2, currVal_2)) {
      _text_4.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }

  void _handle_click_1_0($event) {
    final local_current = _el_1;
    final int local_value = locals['\$implicit'];
    ctx.years = (local_current.checked ? local_value : ctx.years);
  }
}

AppView<import2.SettingsComponent> viewFactory_SettingsComponent6(AppView<dynamic> parentView, int parentIndex) {
  return new _ViewSettingsComponent6(parentView, parentIndex);
}

const List<dynamic> styles$SettingsComponentHost = const [];

class _ViewSettingsComponentHost0 extends AppView<dynamic> {
  ViewSettingsComponent0 _compView_0;
  import2.SettingsComponent _SettingsComponent_0_5;
  _ViewSettingsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
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
}
