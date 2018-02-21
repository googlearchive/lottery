// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'help.dart';
export 'help.dart';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:components_codelab/src/help/help.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'help.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/common/directives/ng_switch.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';

const List<dynamic> styles$HelpComponent = const [import0.styles];

class ViewHelpComponent0 extends AppView<import2.HelpComponent> {
  import3.DivElement _el_0;
  import4.NgSwitch _NgSwitch_0_4;
  ViewContainer _appEl_1;
  import4.NgSwitchWhen _NgSwitchWhen_1_7;
  ViewContainer _appEl_2;
  import4.NgSwitchWhen _NgSwitchWhen_2_7;
  ViewContainer _appEl_3;
  import4.NgSwitchDefault _NgSwitchDefault_3_7;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewHelpComponent0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('help-component');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$HelpComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.HelpComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    _el_0.className = 'help';
    addShimC(_el_0);
    _NgSwitch_0_4 = new import4.NgSwitch();
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_HelpComponent1);
    _NgSwitchWhen_1_7 = new import4.NgSwitchWhen(_appEl_1, _TemplateRef_1_6, _NgSwitch_0_4);
    var _anchor_2 = ngAnchor.clone(false);
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_HelpComponent2);
    _NgSwitchWhen_2_7 = new import4.NgSwitchWhen(_appEl_2, _TemplateRef_2_6, _NgSwitch_0_4);
    var _anchor_3 = ngAnchor.clone(false);
    _el_0.append(_anchor_3);
    _appEl_3 = new ViewContainer(3, 0, this, _anchor_3);
    TemplateRef _TemplateRef_3_6 = new TemplateRef(_appEl_3, viewFactory_HelpComponent3);
    _NgSwitchDefault_3_7 = new import4.NgSwitchDefault(_appEl_3, _TemplateRef_3_6, _NgSwitch_0_4);
    init(const [], null);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import4.NgSwitch) && ((0 <= nodeIndex) && (nodeIndex <= 3)))) {
      return _NgSwitch_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.HelpComponent _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    final currVal_0 = _ctx.content;
    if (!identical(_expr_0, currVal_0)) {
      _NgSwitch_0_4.ngSwitch = currVal_0;
      _expr_0 = currVal_0;
    }
    if (firstCheck) {
      (_NgSwitchWhen_1_7.ngSwitchWhen = 'help');
    }
    if (firstCheck) {
      (_NgSwitchWhen_2_7.ngSwitchWhen = 'about');
    }
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
    _appEl_3.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
    _appEl_3?.destroyNestedViews();
  }
}

AppView<import2.HelpComponent> viewFactory_HelpComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewHelpComponent0(parentView, parentIndex);
}

class _ViewHelpComponent1 extends AppView<import2.HelpComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.Element _el_3;
  import3.Element _el_5;
  import3.UListElement _el_7;
  import3.Element _el_8;
  import3.Element _el_10;
  import3.Element _el_12;
  import3.Element _el_15;
  import3.Element _el_18;
  import3.Element _el_21;
  import3.Element _el_23;
  import3.Element _el_26;
  import3.Element _el_29;
  import3.Element _el_30;
  import3.Element _el_33;
  import3.Element _el_35;
  import3.Element _el_36;
  import3.Element _el_38;
  import3.Element _el_40;
  import3.Element _el_43;
  import3.Element _el_45;
  import3.Element _el_47;
  import3.Element _el_48;
  import3.Element _el_50;
  import3.Element _el_51;
  import3.Element _el_53;
  import3.Element _el_55;
  _ViewHelpComponent1(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHelpComponent0._renderType;
  }
  @override
  ComponentRef<import2.HelpComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_1);
    import3.Text _text_2 = new import3.Text('It\'s hard to explain what a spectacularly bad idea it is to bet in a lottery.\n      You have a better chance of being struck by lightning—twice—than winning the\n      Powerball lottery. But that doesn\'t stop people from trying.');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_3);
    import3.Text _text_4 = new import3.Text('Our approach is to let people see the results of betting on the lottery,\n      versus saving their disposable income.\n      It all happens much more quickly than in real life,\n      and you won\'t lose a cent.');
    _el_3.append(_text_4);
    _el_5 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_5);
    import3.Text _text_6 = new import3.Text('Here\'s how the simulation works:');
    _el_5.append(_text_6);
    _el_7 = createAndAppend(doc, 'ul', _el_0);
    addShimC(_el_7);
    _el_8 = createAndAppend(doc, 'li', _el_7);
    addShimE(_el_8);
    import3.Text _text_9 = new import3.Text('Each "day" has two phases. First you earn your disposable income (\$2, by default).\n        Then you bet, immediately getting the results.');
    _el_8.append(_text_9);
    _el_10 = createAndAppend(doc, 'li', _el_7);
    addShimE(_el_10);
    import3.Text _text_11 = new import3.Text('You can choose different');
    _el_10.append(_text_11);
    _el_12 = createAndAppend(doc, 'b', _el_10);
    addShimE(_el_12);
    import3.Text _text_13 = new import3.Text('betting strategies');
    _el_12.append(_text_13);
    import3.Text _text_14 = new import3.Text('and even different');
    _el_10.append(_text_14);
    _el_15 = createAndAppend(doc, 'b', _el_10);
    addShimE(_el_15);
    import3.Text _text_16 = new import3.Text('lotteries');
    _el_15.append(_text_16);
    import3.Text _text_17 = new import3.Text('.\n        We only simulate one');
    _el_10.append(_text_17);
    _el_18 = createAndAppend(doc, 'em', _el_10);
    addShimE(_el_18);
    import3.Text _text_19 = new import3.Text('real');
    _el_18.append(_text_19);
    import3.Text _text_20 = new import3.Text('lottery, at the moment, but even the mythical\n        fair lottery is interesting.');
    _el_10.append(_text_20);
    _el_21 = createAndAppend(doc, 'li', _el_7);
    addShimE(_el_21);
    import3.Text _text_22 = new import3.Text('You can also choose the');
    _el_21.append(_text_22);
    _el_23 = createAndAppend(doc, 'b', _el_21);
    addShimE(_el_23);
    import3.Text _text_24 = new import3.Text('length of time');
    _el_23.append(_text_24);
    import3.Text _text_25 = new import3.Text('to simulate and the');
    _el_21.append(_text_25);
    _el_26 = createAndAppend(doc, 'b', _el_21);
    addShimE(_el_26);
    import3.Text _text_27 = new import3.Text('interest rate');
    _el_26.append(_text_27);
    import3.Text _text_28 = new import3.Text('for your invested money.');
    _el_21.append(_text_28);
    _el_29 = createAndAppend(doc, 'li', _el_7);
    addShimE(_el_29);
    _el_30 = createAndAppend(doc, 'b', _el_29);
    addShimE(_el_30);
    import3.Text _text_31 = new import3.Text('Everything is completely random.');
    _el_30.append(_text_31);
    import3.Text _text_32 = new import3.Text('It\'s perfectly possible for you to win the jackpot here,\n        but it\'s just as unlikely to happen as it is in real life.');
    _el_29.append(_text_32);
    _el_33 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_33);
    import3.Text _text_34 = new import3.Text('Tips');
    _el_33.append(_text_34);
    _el_35 = createAndAppend(doc, 'dl', _el_0);
    addShimE(_el_35);
    _el_36 = createAndAppend(doc, 'dt', _el_35);
    addShimE(_el_36);
    import3.Text _text_37 = new import3.Text('Simulation running too slowly?');
    _el_36.append(_text_37);
    _el_38 = createAndAppend(doc, 'dd', _el_35);
    addShimE(_el_38);
    import3.Text _text_39 = new import3.Text('Toggle');
    _el_38.append(_text_39);
    _el_40 = createAndAppend(doc, 'b', _el_38);
    addShimE(_el_40);
    import3.Text _text_41 = new import3.Text('Go faster');
    _el_40.append(_text_41);
    import3.Text _text_42 = new import3.Text('.');
    _el_38.append(_text_42);
    _el_43 = createAndAppend(doc, 'dt', _el_35);
    addShimE(_el_43);
    import3.Text _text_44 = new import3.Text('Simulation running too quickly?');
    _el_43.append(_text_44);
    _el_45 = createAndAppend(doc, 'dd', _el_35);
    addShimE(_el_45);
    import3.Text _text_46 = new import3.Text('Click the Pause button:');
    _el_45.append(_text_46);
    _el_47 = createAndAppend(doc, 'material-icon', _el_45);
    createAttr(_el_47, 'aria-label', 'image from the Pause button');
    createAttr(_el_47, 'icon', 'pause');
    addShimE(_el_47);
    _el_48 = createAndAppend(doc, 'br', _el_45);
    addShimE(_el_48);
    import3.Text _text_49 = new import3.Text('Then click the Step button to advance one phase (half a day):');
    _el_45.append(_text_49);
    _el_50 = createAndAppend(doc, 'material-icon', _el_45);
    createAttr(_el_50, 'aria-label', 'image from the Step button');
    createAttr(_el_50, 'icon', 'skip_next');
    addShimE(_el_50);
    _el_51 = createAndAppend(doc, 'dt', _el_35);
    addShimE(_el_51);
    import3.Text _text_52 = new import3.Text('Want to start all over?');
    _el_51.append(_text_52);
    _el_53 = createAndAppend(doc, 'dd', _el_35);
    addShimE(_el_53);
    import3.Text _text_54 = new import3.Text('Click the Reset button:');
    _el_53.append(_text_54);
    _el_55 = createAndAppend(doc, 'material-icon', _el_53);
    createAttr(_el_55, 'aria-label', 'image from the Reset button');
    createAttr(_el_55, 'icon', 'replay');
    addShimE(_el_55);
    init0(_el_0);
    return null;
  }
}

AppView<import2.HelpComponent> viewFactory_HelpComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHelpComponent1(parentView, parentIndex);
}

class _ViewHelpComponent2 extends AppView<import2.HelpComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.Element _el_2;
  import3.UListElement _el_4;
  import3.Element _el_5;
  import3.Element _el_7;
  import3.Element _el_9;
  import3.Element _el_11;
  import3.AnchorElement _el_13;
  import3.AnchorElement _el_16;
  import3.Element _el_19;
  import3.Element _el_21;
  import3.AnchorElement _el_22;
  import3.Element _el_25;
  import3.Element _el_26;
  import3.AnchorElement _el_27;
  import3.Element _el_29;
  import3.Element _el_31;
  import3.AnchorElement _el_32;
  import3.Element _el_34;
  import3.AnchorElement _el_36;
  import3.Element _el_39;
  import3.AnchorElement _el_40;
  import3.Element _el_42;
  _ViewHelpComponent2(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHelpComponent0._renderType;
  }
  @override
  ComponentRef<import2.HelpComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'img', _el_0);
    createAttr(_el_1, 'align', 'right');
    createAttr(_el_1, 'alt', 'Cartoon guy presents a lottery machine ejecting powerballs');
    createAttr(_el_1, 'height', '300px');
    createAttr(_el_1, 'src', 'img/cartoon.jpeg');
    addShimE(_el_1);
    _el_2 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_2);
    import3.Text _text_3 = new import3.Text('Two facets of this app might interest you:');
    _el_2.append(_text_3);
    _el_4 = createAndAppend(doc, 'ul', _el_0);
    addShimC(_el_4);
    _el_5 = createAndAppend(doc, 'li', _el_4);
    addShimE(_el_5);
    import3.Text _text_6 = new import3.Text('How the lottery results are calculated');
    _el_5.append(_text_6);
    _el_7 = createAndAppend(doc, 'li', _el_4);
    addShimE(_el_7);
    import3.Text _text_8 = new import3.Text('How this app was coded');
    _el_7.append(_text_8);
    _el_9 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_9);
    import3.Text _text_10 = new import3.Text('How the lottery results are calculated');
    _el_9.append(_text_10);
    _el_11 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_11);
    import3.Text _text_12 = new import3.Text('This app uses simple probabilities from sources such as the');
    _el_11.append(_text_12);
    _el_13 = createAndAppend(doc, 'a', _el_11);
    createAttr(_el_13, 'href', 'http://www.powerball.com/powerball/pb_prizes.asp');
    addShimC(_el_13);
    import3.Text _text_14 = new import3.Text('Powerball site');
    _el_13.append(_text_14);
    import3.Text _text_15 = new import3.Text('to draw tickets. You can go much deeper using');
    _el_11.append(_text_15);
    _el_16 = createAndAppend(doc, 'a', _el_11);
    createAttr(_el_16, 'href', 'https://en.wikipedia.org/wiki/Lottery_mathematics');
    addShimC(_el_16);
    import3.Text _text_17 = new import3.Text('lottery mathematics');
    _el_16.append(_text_17);
    import3.Text _text_18 = new import3.Text('.');
    _el_11.append(_text_18);
    _el_19 = createAndAppend(doc, 'h2', _el_0);
    addShimE(_el_19);
    import3.Text _text_20 = new import3.Text('How this app was coded');
    _el_19.append(_text_20);
    _el_21 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_21);
    _el_22 = createAndAppend(doc, 'a', _el_21);
    createAttr(_el_22, 'href', 'https://github.com/filiph');
    addShimC(_el_22);
    import3.Text _text_23 = new import3.Text('Filip');
    _el_22.append(_text_23);
    import3.Text _text_24 = new import3.Text('wrote this app to accompany a code lab demonstrating\n      how to use an early release of AngularDart Components.\n      More information:');
    _el_21.append(_text_24);
    _el_25 = createAndAppend(doc, 'dl', _el_0);
    addShimE(_el_25);
    _el_26 = createAndAppend(doc, 'dt', _el_25);
    addShimE(_el_26);
    _el_27 = createAndAppend(doc, 'a', _el_26);
    createAttr(_el_27, 'href', 'http://www.dartlang.org');
    addShimC(_el_27);
    import3.Text _text_28 = new import3.Text('www.dartlang.org');
    _el_27.append(_text_28);
    _el_29 = createAndAppend(doc, 'dd', _el_25);
    addShimE(_el_29);
    import3.Text _text_30 = new import3.Text('The Dart language and libraries.');
    _el_29.append(_text_30);
    _el_31 = createAndAppend(doc, 'dt', _el_25);
    addShimE(_el_31);
    _el_32 = createAndAppend(doc, 'a', _el_31);
    createAttr(_el_32, 'href', 'http://webdev.dartlang.org');
    addShimC(_el_32);
    import3.Text _text_33 = new import3.Text('webdev.dartlang.org');
    _el_32.append(_text_33);
    _el_34 = createAndAppend(doc, 'dd', _el_25);
    addShimE(_el_34);
    import3.Text _text_35 = new import3.Text('How to write web apps with Dart. Includes');
    _el_34.append(_text_35);
    _el_36 = createAndAppend(doc, 'a', _el_34);
    createAttr(_el_36, 'href', 'https://webdev.dartlang.org/codelabs');
    addShimC(_el_36);
    import3.Text _text_37 = new import3.Text('code\n	       labs');
    _el_36.append(_text_37);
    import3.Text _text_38 = new import3.Text('—step-by-step introductions to writing Dart code for the web.');
    _el_34.append(_text_38);
    _el_39 = createAndAppend(doc, 'dt', _el_25);
    addShimE(_el_39);
    _el_40 = createAndAppend(doc, 'a', _el_39);
    createAttr(_el_40, 'href', 'http://angulardart.org');
    addShimC(_el_40);
    import3.Text _text_41 = new import3.Text('angulardart.org');
    _el_40.append(_text_41);
    _el_42 = createAndAppend(doc, 'dd', _el_25);
    addShimE(_el_42);
    import3.Text _text_43 = new import3.Text('Detailed documentation for using AngularDart.');
    _el_42.append(_text_43);
    init0(_el_0);
    return null;
  }
}

AppView<import2.HelpComponent> viewFactory_HelpComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHelpComponent2(parentView, parentIndex);
}

class _ViewHelpComponent3 extends AppView<import2.HelpComponent> {
  import3.DivElement _el_0;
  import3.Text _text_2;
  var _expr_0;
  _ViewHelpComponent3(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewHelpComponent0._renderType;
  }
  @override
  ComponentRef<import2.HelpComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('div');
    addShimC(_el_0);
    import3.Text _text_1 = new import3.Text(' Uh oh. You\'ve found a bug. No content available for ');
    _el_0.append(_text_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    import3.Text _text_3 = new import3.Text('. ');
    _el_0.append(_text_3);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.HelpComponent _ctx = ctx;
    final currVal_0 = (_ctx.content ?? '');
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.HelpComponent> viewFactory_HelpComponent3(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHelpComponent3(parentView, parentIndex);
}

const List<dynamic> styles$HelpComponentHost = const [];

class _ViewHelpComponentHost0 extends AppView<dynamic> {
  ViewHelpComponent0 _compView_0;
  import2.HelpComponent _HelpComponent_0_4;
  _ViewHelpComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import7.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewHelpComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HelpComponent_0_4 = new import2.HelpComponent();
    _compView_0.create(_HelpComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.HelpComponent>(0, this, rootEl, _HelpComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.HelpComponent) && (0 == nodeIndex))) {
      return _HelpComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_HelpComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewHelpComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.HelpComponent> HelpComponentNgFactory = const ComponentFactory<import2.HelpComponent>('help-component', viewFactory_HelpComponentHost0, _HelpComponentMetadata);
const _HelpComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HelpComponent, HelpComponentNgFactory);
  _ref0.initReflector();
}
