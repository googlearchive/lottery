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
  import4.Text _text_8;
  import4.Element _el_9;
  import5.ViewScoresComponent0 _compView_9;
  import6.ScoresComponent _ScoresComponent_9_4;
  import4.DivElement _el_10;
  import4.DivElement _el_11;
  import4.Element _el_12;
  import4.Text _text_13;
  import4.DivElement _el_14;
  import4.Element _el_15;
  import4.Text _text_16;
  import4.DivElement _el_18;
  import4.Element _el_20;
  import4.Text _text_21;
  import4.Element _el_23;
  import4.Element _el_24;
  import4.DivElement _el_25;
  import4.DivElement _el_26;
  import4.ButtonElement _el_27;
  import4.ButtonElement _el_29;
  import4.ButtonElement _el_31;
  import4.ButtonElement _el_33;
  import4.DivElement _el_35;
  import4.Element _el_36;
  import4.InputElement _el_37;
  import4.DivElement _el_39;
  import4.DivElement _el_40;
  import4.Element _el_41;
  import7.ViewStatsComponent0 _compView_41;
  import8.StatsComponent _StatsComponent_41_4;
  import4.Element _el_42;
  import9.ViewVisualizeWinningsComponent0 _compView_42;
  import10.VisualizeWinningsComponent _VisualizeWinningsComponent_42_4;
  import4.DivElement _el_43;
  import4.Element _el_44;
  import4.Element _el_46;
  import11.ViewSettingsComponent0 _compView_46;
  import12.SettingsComponent _SettingsComponent_46_4;
  import4.DivElement _el_47;
  import4.Element _el_48;
  import4.Element _el_50;
  import13.ViewHelpComponent0 _compView_50;
  import14.HelpComponent _HelpComponent_50_4;
  import4.DivElement _el_51;
  import4.Element _el_52;
  import4.Element _el_54;
  import13.ViewHelpComponent0 _compView_54;
  import14.HelpComponent _HelpComponent_54_4;
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
    import4.Text _text_7 = new import4.Text('Playing ');
    _el_6.append(_text_7);
    _text_8 = new import4.Text('');
    _el_6.append(_text_8);
    _compView_9 = new import5.ViewScoresComponent0(this, 9);
    _el_9 = _compView_9.rootEl;
    _el_5.append(_el_9);
    _el_9.className = 'scores-component';
    addShimC(_el_9);
    _ScoresComponent_9_4 = new import6.ScoresComponent();
    _compView_9.create(_ScoresComponent_9_4, []);
    _el_10 = createDivAndAppend(doc, _el_5);
    _el_10.className = 'days';
    addShimC(_el_10);
    _el_11 = createDivAndAppend(doc, _el_10);
    _el_11.className = 'days__start-day';
    addShimC(_el_11);
    _el_12 = createSpanAndAppend(doc, _el_11);
    addShimE(_el_12);
    _text_13 = new import4.Text('');
    _el_12.append(_text_13);
    _el_14 = createDivAndAppend(doc, _el_10);
    _el_14.className = 'days__end-day';
    addShimC(_el_14);
    _el_15 = createSpanAndAppend(doc, _el_14);
    addShimE(_el_15);
    _text_16 = new import4.Text('');
    _el_15.append(_text_16);
    import4.Text _text_17 = new import4.Text(' years from now');
    _el_15.append(_text_17);
    _el_18 = createDivAndAppend(doc, _el_10);
    _el_18.className = 'clear-floats';
    addShimC(_el_18);
    import4.Text _text_19 = new import4.Text('Progress:');
    _el_5.append(_text_19);
    _el_20 = createAndAppend(doc, 'strong', _el_5);
    addShimE(_el_20);
    _text_21 = new import4.Text('');
    _el_20.append(_text_21);
    import4.Text _text_22 = new import4.Text('%');
    _el_20.append(_text_22);
    _el_23 = createAndAppend(doc, 'br', _el_5);
    addShimE(_el_23);
    _el_24 = createAndAppend(doc, 'progress', _el_5);
    createAttr(_el_24, 'max', '100');
    addShimE(_el_24);
    _el_25 = createDivAndAppend(doc, _el_5);
    _el_25.className = 'controls';
    addShimC(_el_25);
    _el_26 = createDivAndAppend(doc, _el_25);
    _el_26.className = 'controls__fabs';
    addShimC(_el_26);
    _el_27 = createAndAppend(doc, 'button', _el_26);
    createAttr(_el_27, 'id', 'play-button');
    addShimC(_el_27);
    import4.Text _text_28 = new import4.Text('Play');
    _el_27.append(_text_28);
    _el_29 = createAndAppend(doc, 'button', _el_26);
    addShimC(_el_29);
    import4.Text _text_30 = new import4.Text('Step');
    _el_29.append(_text_30);
    _el_31 = createAndAppend(doc, 'button', _el_26);
    addShimC(_el_31);
    import4.Text _text_32 = new import4.Text('Pause');
    _el_31.append(_text_32);
    _el_33 = createAndAppend(doc, 'button', _el_26);
    addShimC(_el_33);
    import4.Text _text_34 = new import4.Text('Reset');
    _el_33.append(_text_34);
    _el_35 = createDivAndAppend(doc, _el_25);
    _el_35.className = 'controls__faster-button';
    addShimC(_el_35);
    _el_36 = createAndAppend(doc, 'label', _el_35);
    addShimE(_el_36);
    _el_37 = createAndAppend(doc, 'input', _el_36);
    createAttr(_el_37, 'type', 'checkbox');
    addShimC(_el_37);
    import4.Text _text_38 = new import4.Text('Go faster');
    _el_36.append(_text_38);
    _el_39 = createDivAndAppend(doc, _el_25);
    _el_39.className = 'clear-floats';
    addShimC(_el_39);
    _el_40 = createDivAndAppend(doc, _el_5);
    _el_40.className = 'history';
    addShimC(_el_40);
    _compView_41 = new import7.ViewStatsComponent0(this, 41);
    _el_41 = _compView_41.rootEl;
    _el_40.append(_el_41);
    _el_41.className = 'history__stats';
    addShimC(_el_41);
    _StatsComponent_41_4 = new import8.StatsComponent();
    _compView_41.create(_StatsComponent_41_4, []);
    _compView_42 = new import9.ViewVisualizeWinningsComponent0(this, 42);
    _el_42 = _compView_42.rootEl;
    _el_40.append(_el_42);
    _el_42.className = 'history__vis';
    addShimC(_el_42);
    _VisualizeWinningsComponent_42_4 = new import10.VisualizeWinningsComponent();
    _compView_42.create(_VisualizeWinningsComponent_42_4, []);
    _el_43 = createDivAndAppend(doc, _el_40);
    _el_43.className = 'clear-floats';
    addShimC(_el_43);
    _el_44 = createAndAppend(doc, 'h2', _el_5);
    addShimE(_el_44);
    import4.Text _text_45 = new import4.Text('Settings');
    _el_44.append(_text_45);
    _compView_46 = new import11.ViewSettingsComponent0(this, 46);
    _el_46 = _compView_46.rootEl;
    _el_5.append(_el_46);
    addShimC(_el_46);
    _SettingsComponent_46_4 = new import12.SettingsComponent();
    _compView_46.create(_SettingsComponent_46_4, []);
    _el_47 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_47);
    _el_48 = createAndAppend(doc, 'h2', _el_47);
    addShimE(_el_48);
    import4.Text _text_49 = new import4.Text('Help');
    _el_48.append(_text_49);
    _compView_50 = new import13.ViewHelpComponent0(this, 50);
    _el_50 = _compView_50.rootEl;
    _el_47.append(_el_50);
    createAttr(_el_50, 'content', 'help');
    addShimC(_el_50);
    _HelpComponent_50_4 = new import14.HelpComponent();
    _compView_50.create(_HelpComponent_50_4, []);
    _el_51 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_51);
    _el_52 = createAndAppend(doc, 'h2', _el_51);
    addShimE(_el_52);
    import4.Text _text_53 = new import4.Text('About');
    _el_52.append(_text_53);
    _compView_54 = new import13.ViewHelpComponent0(this, 54);
    _el_54 = _compView_54.rootEl;
    _el_51.append(_el_54);
    createAttr(_el_54, 'content', 'about');
    addShimC(_el_54);
    _HelpComponent_54_4 = new import14.HelpComponent();
    _compView_54.create(_HelpComponent_54_4, []);
    _el_27.addEventListener('click', eventHandler0(ctx.play));
    _el_29.addEventListener('click', eventHandler0(ctx.step));
    _el_31.addEventListener('click', eventHandler0(ctx.pause));
    _el_33.addEventListener('click', eventHandler0(ctx.reset));
    _el_37.addEventListener('change', eventHandler1(_handle_change_37_0));
    final subscription_0 = _SettingsComponent_46_4.settingsChanged.listen(eventHandler0(ctx.updateFromSettings));
    _viewQuery_vis_0.reset([_VisualizeWinningsComponent_42_4]);
    ctx.vis = _viewQuery_vis_0.first;
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import6.ScoresComponent) && (9 == nodeIndex))) {
      return _ScoresComponent_9_4;
    }
    if ((identical(token, import8.StatsComponent) && (41 == nodeIndex))) {
      return _StatsComponent_41_4;
    }
    if ((identical(token, import10.VisualizeWinningsComponent) && (42 == nodeIndex))) {
      return _VisualizeWinningsComponent_42_4;
    }
    if ((identical(token, import12.SettingsComponent) && (46 == nodeIndex))) {
      return _SettingsComponent_46_4;
    }
    if ((identical(token, import14.HelpComponent) && (50 == nodeIndex))) {
      return _HelpComponent_50_4;
    }
    if ((identical(token, import14.HelpComponent) && (54 == nodeIndex))) {
      return _HelpComponent_54_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_1 = _ctx.altCash;
    if (!identical(_expr_1, currVal_1)) {
      _ScoresComponent_9_4.altCash = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.cash;
    if (!identical(_expr_2, currVal_2)) {
      _ScoresComponent_9_4.cash = currVal_2;
      _expr_2 = currVal_2;
    }
    if (firstCheck) {
      if (!identical(_ctx.winningsMap, null)) {
        (_StatsComponent_41_4.winningsMap = _ctx.winningsMap);
      }
    }
    if (firstCheck) {
      _VisualizeWinningsComponent_42_4.ngOnInit();
    }
    final currVal_11 = _ctx.settings;
    if (!identical(_expr_11, currVal_11)) {
      _SettingsComponent_46_4.settings = currVal_11;
      _expr_11 = currVal_11;
    }
    if (firstCheck) {
      _SettingsComponent_46_4.ngOnInit();
    }
    if (firstCheck) {
      (_HelpComponent_50_4.content = 'help');
    }
    if (firstCheck) {
      (_HelpComponent_54_4.content = 'about');
    }
    final currVal_0 = import18.interpolate0(_ctx.settings.lottery.shortName);
    if (!identical(_expr_0, currVal_0)) {
      _text_8.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_3 = (_ctx.currentDay ?? '');
    if (!identical(_expr_3, currVal_3)) {
      _text_13.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = import18.interpolate0(_ctx.settings.years);
    if (!identical(_expr_4, currVal_4)) {
      _text_16.text = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = import18.interpolate0(_ctx.progress);
    if (!identical(_expr_5, currVal_5)) {
      _text_21.text = currVal_5;
      _expr_5 = currVal_5;
    }
    final currVal_6 = _ctx.progress;
    if (!identical(_expr_6, currVal_6)) {
      setProp(_el_24, 'value', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_7 = (_ctx.endOfDays || _ctx.inProgress);
    if (!identical(_expr_7, currVal_7)) {
      setProp(_el_27, 'disabled', currVal_7);
      _expr_7 = currVal_7;
    }
    final currVal_8 = (_ctx.endOfDays || _ctx.inProgress);
    if (!identical(_expr_8, currVal_8)) {
      setProp(_el_29, 'disabled', currVal_8);
      _expr_8 = currVal_8;
    }
    final bool currVal_9 = !_ctx.inProgress;
    if (!identical(_expr_9, currVal_9)) {
      setProp(_el_31, 'disabled', currVal_9);
      _expr_9 = currVal_9;
    }
    _compView_9.detectChanges();
    _compView_41.detectChanges();
    _compView_42.detectChanges();
    _compView_46.detectChanges();
    _compView_50.detectChanges();
    _compView_54.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_9?.destroy();
    _compView_41?.destroy();
    _compView_42?.destroy();
    _compView_46?.destroy();
    _compView_50?.destroy();
    _compView_54?.destroy();
  }

  void _handle_change_37_0($event) {
    final local_fastCheckbox = _el_37;
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

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
