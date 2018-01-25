// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'lottery_simulator.dart';
export 'lottery_simulator.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'src/help/help.dart';
import 'src/scores/scores.dart';
import 'src/settings/settings.dart';
import 'src/settings/settings_component.dart';
import 'src/stats/stats.dart';
import 'src/visualize_winnings/visualize_winnings.dart';
import 'package:intl/intl.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'src/help/help.template.dart' as _ref1;
import 'src/scores/scores.template.dart' as _ref2;
import 'src/settings/settings.template.dart' as _ref3;
import 'src/settings/settings_component.template.dart' as _ref4;
import 'src/stats/stats.template.dart' as _ref5;
import 'src/visualize_winnings/visualize_winnings.template.dart' as _ref6;

import 'package:components_codelab/lottery_simulator.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'lottery_simulator.dart' as import2;
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'dart:html' as import4;
import 'src/scores/scores.template.dart' as import5;
import 'src/scores/scores.dart' as import6;
import 'src/stats/stats.template.dart' as import7;
import 'src/stats/stats.dart' as import8;
import 'src/visualize_winnings/visualize_winnings.template.dart' as import9;
import 'src/visualize_winnings/visualize_winnings.dart' as import10;
import 'src/settings/settings_component.template.dart' as import11;
import 'src/settings/settings_component.dart' as import12;
import 'src/help/help.template.dart' as import13;
import 'src/help/help.dart' as import14;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import16;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import18;
import 'package:angular/angular.dart';
import 'src/settings/settings.dart' as import20;

const List<dynamic> styles$AppComponent = const [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  final import3.QueryList _viewQuery_vis_0 = new import3.QueryList();
  import4.Element _el_0;
  import4.DivElement _el_2;
  import4.Element _el_3;
  import4.DivElement _el_5;
  import4.Element _el_6;
  import4.Text _text_7;
  import4.Element _el_8;
  import5.ViewScoresComponent0 _compView_8;
  import6.ScoresComponent _ScoresComponent_8_4;
  import4.DivElement _el_9;
  import4.DivElement _el_10;
  import4.Element _el_11;
  import4.Text _text_12;
  import4.DivElement _el_13;
  import4.Element _el_14;
  import4.Text _text_15;
  import4.DivElement _el_16;
  import4.Element _el_18;
  import4.Text _text_19;
  import4.Element _el_20;
  import4.Element _el_21;
  import4.DivElement _el_22;
  import4.DivElement _el_23;
  import4.ButtonElement _el_24;
  import4.ButtonElement _el_26;
  import4.ButtonElement _el_28;
  import4.ButtonElement _el_30;
  import4.DivElement _el_32;
  import4.Element _el_33;
  import4.InputElement _el_34;
  import4.DivElement _el_36;
  import4.DivElement _el_37;
  import4.Element _el_38;
  import7.ViewStatsComponent0 _compView_38;
  import8.StatsComponent _StatsComponent_38_4;
  import4.Element _el_39;
  import9.ViewVisualizeWinningsComponent0 _compView_39;
  import10.VisualizeWinningsComponent _VisualizeWinningsComponent_39_4;
  import4.DivElement _el_40;
  import4.Element _el_41;
  import4.Element _el_43;
  import11.ViewSettingsComponent0 _compView_43;
  import12.SettingsComponent _SettingsComponent_43_4;
  import4.DivElement _el_44;
  import4.Element _el_45;
  import4.Element _el_47;
  import13.ViewHelpComponent0 _compView_47;
  import14.HelpComponent _HelpComponent_47_4;
  import4.DivElement _el_48;
  import4.Element _el_49;
  import4.Element _el_51;
  import13.ViewHelpComponent0 _compView_51;
  import14.HelpComponent _HelpComponent_51_4;
  var _expr_0;
  int _expr_1;
  int _expr_2;
  var _expr_3;
  var _expr_4;
  var _expr_5;
  var _expr_6;
  var _expr_7;
  var _expr_8;
  var _expr_9;
  var _expr_11;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, num parentIndex) : super(import16.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import4.document.createElement('lottery-simulator');
    _renderType ??= import18.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.AppComponent> build() {
    final import4.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import4.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_0);
    import4.Text _text_1 = new import4.Text('Lottery Simulator');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, parentRenderNode);
    _el_2.className = 'help';
    addShimC(_el_2);
    _el_3 = createAndAppend(doc, 'p', _el_2);
    addShimE(_el_3);
    import4.Text _text_4 = new import4.Text('Have you always wanted to lose all your money in a lottery?\n   This simulation makes it possible—without, you know, losing all your money.');
    _el_3.append(_text_4);
    _el_5 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_5);
    _el_6 = createAndAppend(doc, 'h2', _el_5);
    addShimE(_el_6);
    _text_7 = new import4.Text('');
    _el_6.append(_text_7);
    _compView_8 = new import5.ViewScoresComponent0(this, 8);
    _el_8 = _compView_8.rootEl;
    _el_5.append(_el_8);
    _el_8.className = 'scores-component';
    addShimC(_el_8);
    _ScoresComponent_8_4 = new import6.ScoresComponent();
    _compView_8.create(_ScoresComponent_8_4, []);
    _el_9 = createDivAndAppend(doc, _el_5);
    _el_9.className = 'days';
    addShimC(_el_9);
    _el_10 = createDivAndAppend(doc, _el_9);
    _el_10.className = 'days__start-day';
    addShimC(_el_10);
    _el_11 = createSpanAndAppend(doc, _el_10);
    addShimE(_el_11);
    _text_12 = new import4.Text('');
    _el_11.append(_text_12);
    _el_13 = createDivAndAppend(doc, _el_9);
    _el_13.className = 'days__end-day';
    addShimC(_el_13);
    _el_14 = createSpanAndAppend(doc, _el_13);
    addShimE(_el_14);
    _text_15 = new import4.Text('');
    _el_14.append(_text_15);
    _el_16 = createDivAndAppend(doc, _el_9);
    _el_16.className = 'clear-floats';
    addShimC(_el_16);
    import4.Text _text_17 = new import4.Text('Progress:');
    _el_5.append(_text_17);
    _el_18 = createAndAppend(doc, 'strong', _el_5);
    addShimE(_el_18);
    _text_19 = new import4.Text('');
    _el_18.append(_text_19);
    _el_20 = createAndAppend(doc, 'br', _el_5);
    addShimE(_el_20);
    _el_21 = createAndAppend(doc, 'progress', _el_5);
    createAttr(_el_21, 'max', '100');
    addShimE(_el_21);
    _el_22 = createDivAndAppend(doc, _el_5);
    _el_22.className = 'controls';
    addShimC(_el_22);
    _el_23 = createDivAndAppend(doc, _el_22);
    _el_23.className = 'controls__fabs';
    addShimC(_el_23);
    _el_24 = createAndAppend(doc, 'button', _el_23);
    createAttr(_el_24, 'id', 'play-button');
    addShimC(_el_24);
    import4.Text _text_25 = new import4.Text('Play');
    _el_24.append(_text_25);
    _el_26 = createAndAppend(doc, 'button', _el_23);
    addShimC(_el_26);
    import4.Text _text_27 = new import4.Text('Step');
    _el_26.append(_text_27);
    _el_28 = createAndAppend(doc, 'button', _el_23);
    addShimC(_el_28);
    import4.Text _text_29 = new import4.Text('Pause');
    _el_28.append(_text_29);
    _el_30 = createAndAppend(doc, 'button', _el_23);
    addShimC(_el_30);
    import4.Text _text_31 = new import4.Text('Reset');
    _el_30.append(_text_31);
    _el_32 = createDivAndAppend(doc, _el_22);
    _el_32.className = 'controls__faster-button';
    addShimC(_el_32);
    _el_33 = createAndAppend(doc, 'label', _el_32);
    addShimE(_el_33);
    _el_34 = createAndAppend(doc, 'input', _el_33);
    createAttr(_el_34, 'type', 'checkbox');
    addShimC(_el_34);
    import4.Text _text_35 = new import4.Text('Go faster');
    _el_33.append(_text_35);
    _el_36 = createDivAndAppend(doc, _el_22);
    _el_36.className = 'clear-floats';
    addShimC(_el_36);
    _el_37 = createDivAndAppend(doc, _el_5);
    _el_37.className = 'history';
    addShimC(_el_37);
    _compView_38 = new import7.ViewStatsComponent0(this, 38);
    _el_38 = _compView_38.rootEl;
    _el_37.append(_el_38);
    _el_38.className = 'history__stats';
    addShimC(_el_38);
    _StatsComponent_38_4 = new import8.StatsComponent();
    _compView_38.create(_StatsComponent_38_4, []);
    _compView_39 = new import9.ViewVisualizeWinningsComponent0(this, 39);
    _el_39 = _compView_39.rootEl;
    _el_37.append(_el_39);
    _el_39.className = 'history__vis';
    addShimC(_el_39);
    _VisualizeWinningsComponent_39_4 = new import10.VisualizeWinningsComponent();
    _compView_39.create(_VisualizeWinningsComponent_39_4, []);
    _el_40 = createDivAndAppend(doc, _el_37);
    _el_40.className = 'clear-floats';
    addShimC(_el_40);
    _el_41 = createAndAppend(doc, 'h2', _el_5);
    addShimE(_el_41);
    import4.Text _text_42 = new import4.Text('Settings');
    _el_41.append(_text_42);
    _compView_43 = new import11.ViewSettingsComponent0(this, 43);
    _el_43 = _compView_43.rootEl;
    _el_5.append(_el_43);
    addShimC(_el_43);
    _SettingsComponent_43_4 = new import12.SettingsComponent();
    _compView_43.create(_SettingsComponent_43_4, []);
    _el_44 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_44);
    _el_45 = createAndAppend(doc, 'h2', _el_44);
    addShimE(_el_45);
    import4.Text _text_46 = new import4.Text('Help');
    _el_45.append(_text_46);
    _compView_47 = new import13.ViewHelpComponent0(this, 47);
    _el_47 = _compView_47.rootEl;
    _el_44.append(_el_47);
    createAttr(_el_47, 'content', 'help');
    addShimC(_el_47);
    _HelpComponent_47_4 = new import14.HelpComponent();
    _compView_47.create(_HelpComponent_47_4, []);
    _el_48 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_48);
    _el_49 = createAndAppend(doc, 'h2', _el_48);
    addShimE(_el_49);
    import4.Text _text_50 = new import4.Text('About');
    _el_49.append(_text_50);
    _compView_51 = new import13.ViewHelpComponent0(this, 51);
    _el_51 = _compView_51.rootEl;
    _el_48.append(_el_51);
    createAttr(_el_51, 'content', 'about');
    addShimC(_el_51);
    _HelpComponent_51_4 = new import14.HelpComponent();
    _compView_51.create(_HelpComponent_51_4, []);
    _el_24.addEventListener('click', eventHandler0(ctx.play));
    _el_26.addEventListener('click', eventHandler0(ctx.step));
    _el_28.addEventListener('click', eventHandler0(ctx.pause));
    _el_30.addEventListener('click', eventHandler0(ctx.reset));
    _el_34.addEventListener('change', eventHandler1(_handle_change_34_0));
    final subscription_0 = _SettingsComponent_43_4.settingsChanged.listen(eventHandler0(ctx.updateFromSettings));
    _viewQuery_vis_0.reset([_VisualizeWinningsComponent_39_4]);
    ctx.vis = _viewQuery_vis_0.first;
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import6.ScoresComponent) && (8 == nodeIndex))) {
      return _ScoresComponent_8_4;
    }
    if ((identical(token, import8.StatsComponent) && (38 == nodeIndex))) {
      return _StatsComponent_38_4;
    }
    if ((identical(token, import10.VisualizeWinningsComponent) && (39 == nodeIndex))) {
      return _VisualizeWinningsComponent_39_4;
    }
    if ((identical(token, import12.SettingsComponent) && (43 == nodeIndex))) {
      return _SettingsComponent_43_4;
    }
    if ((identical(token, import14.HelpComponent) && (47 == nodeIndex))) {
      return _HelpComponent_47_4;
    }
    if ((identical(token, import14.HelpComponent) && (51 == nodeIndex))) {
      return _HelpComponent_51_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_1 = _ctx.altCash;
    if (!identical(_expr_1, currVal_1)) {
      _ScoresComponent_8_4.altCash = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.cash;
    if (!identical(_expr_2, currVal_2)) {
      _ScoresComponent_8_4.cash = currVal_2;
      _expr_2 = currVal_2;
    }
    if (firstCheck) {
      if (!identical(_ctx.winningsMap, null)) {
        (_StatsComponent_38_4.winningsMap = _ctx.winningsMap);
      }
    }
    if (firstCheck) {
      _VisualizeWinningsComponent_39_4.ngOnInit();
    }
    final currVal_11 = _ctx.settings;
    if (!identical(_expr_11, currVal_11)) {
      _SettingsComponent_43_4.settings = currVal_11;
      _expr_11 = currVal_11;
    }
    if (firstCheck) {
      _SettingsComponent_43_4.ngOnInit();
    }
    if (firstCheck) {
      (_HelpComponent_47_4.content = 'help');
    }
    if (firstCheck) {
      (_HelpComponent_51_4.content = 'about');
    }
    final currVal_0 = import18.interpolate1('Playing ', _ctx.settings.lottery.shortName, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_7.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_3 = (_ctx.currentDay ?? '');
    if (!identical(_expr_3, currVal_3)) {
      _text_12.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = import18.interpolate1('', _ctx.settings.years, ' years from now');
    if (!identical(_expr_4, currVal_4)) {
      _text_15.text = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = import18.interpolate1('', _ctx.progress, '%');
    if (!identical(_expr_5, currVal_5)) {
      _text_19.text = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.progress;
    if (!identical(_expr_6, currVal_6)) {
      setProp(_el_21, 'value', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = (_ctx.endOfDays || _ctx.inProgress);
    if (!identical(_expr_7, currVal_7)) {
      setProp(_el_24, 'disabled', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = (_ctx.endOfDays || _ctx.inProgress);
    if (!identical(_expr_8, currVal_8)) {
      setProp(_el_26, 'disabled', currVal_8);
      _expr_8 = currVal_8;
    }
    final bool currVal_9 = !_ctx.inProgress;
    if (!identical(_expr_9, currVal_9)) {
      setProp(_el_28, 'disabled', currVal_9);
      _expr_9 = currVal_9;
    }
    _compView_8.detectChanges();
    _compView_38.detectChanges();
    _compView_39.detectChanges();
    _compView_43.detectChanges();
    _compView_47.detectChanges();
    _compView_51.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_8?.destroy();
    _compView_38?.destroy();
    _compView_39?.destroy();
    _compView_43?.destroy();
    _compView_47?.destroy();
    _compView_51?.destroy();
  }

  void _handle_change_34_0($event) {
    final local_fastCheckbox = _el_34;
    ctx.fastEnabled = local_fastCheckbox.checked;
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import20.Settings _Settings_0_4;
  import2.AppComponent _AppComponent_0_5;
  _ViewAppComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import16.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _Settings_0_4 = new import20.Settings();
    _AppComponent_0_5 = new import2.AppComponent(_Settings_0_4);
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.AppComponent>(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import20.Settings) && (0 == nodeIndex))) {
      return _Settings_0_4;
    }
    if ((identical(token, import2.AppComponent) && (0 == nodeIndex))) {
      return _AppComponent_0_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _AppComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_AppComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewAppComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.AppComponent> AppComponentNgFactory = const ComponentFactory<import2.AppComponent>('lottery-simulator', viewFactory_AppComponentHost0, _AppComponentMetadata);
const _AppComponentMetadata = const [];
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
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
  _ngRef.registerComponent(
    AppComponent,
    AppComponentNgFactory,
  );
}
