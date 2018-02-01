// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'scores.dart';
export 'scores.dart';
import 'package:angular/angular.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;

import 'package:components_codelab/src/scores/scores.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'scores.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/angular.dart';

const List<dynamic> styles$ScoresComponent = const [import0.styles];

class ViewScoresComponent0 extends AppView<import2.ScoresComponent> {
  import3.DivElement _el_0;
  import3.Element _el_1;
  import3.Element _el_3;
  import3.Element _el_4;
  import3.Text _text_5;
  import3.Text _text_6;
  import3.DivElement _el_7;
  import3.Element _el_8;
  import3.Element _el_10;
  import3.Element _el_11;
  import3.Text _text_12;
  String _expr_0;
  var _expr_1;
  var _expr_2;
  var _expr_3;
  static RenderComponentType _renderType;
  ViewScoresComponent0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('scores-component');
    _renderType ??= import7.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$ScoresComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.ScoresComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'h4', _el_0);
    addShimE(_el_1);
    import3.Text _text_2 = new import3.Text('Betting');
    _el_1.append(_text_2);
    _el_3 = createAndAppend(doc, 'p', _el_0);
    addShimE(_el_3);
    _el_4 = createAndAppend(doc, 'strong', _el_3);
    addShimE(_el_4);
    _text_5 = new import3.Text('');
    _el_4.append(_text_5);
    _text_6 = new import3.Text('');
    _el_3.append(_text_6);
    _el_7 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_7);
    _el_8 = createAndAppend(doc, 'h4', _el_7);
    addShimE(_el_8);
    import3.Text _text_9 = new import3.Text('Investing');
    _el_8.append(_text_9);
    _el_10 = createAndAppend(doc, 'p', _el_7);
    addShimE(_el_10);
    _el_11 = createAndAppend(doc, 'strong', _el_10);
    addShimE(_el_11);
    _text_12 = new import3.Text('');
    _el_11.append(_text_12);
    import3.Text _text_13 = new import3.Text('...');
    _el_10.append(_text_13);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ScoresComponent _ctx = ctx;
    final currVal_0 = ((_ctx.cash > _ctx.altCash) ? 'positive' : ((_ctx.cash < _ctx.altCash) ? 'negative' : 'neutral'));
    if (!identical(_expr_0, currVal_0)) {
      this.updateChildClass(_el_4, currVal_0);
      _expr_0 = currVal_0;
    }
    final currVal_1 = import7.interpolate1('\$', _ctx.cash, '');
    if (!identical(_expr_1, currVal_1)) {
      _text_5.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import7.interpolate0(_ctx.outcomeDescription);
    if (!identical(_expr_2, currVal_2)) {
      _text_6.text = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = import7.interpolate1('\$', _ctx.altCash, '');
    if (!identical(_expr_3, currVal_3)) {
      _text_12.text = currVal_3;
      _expr_3 = currVal_3;
    }
  }
}

AppView<import2.ScoresComponent> viewFactory_ScoresComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewScoresComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ScoresComponentHost = const [];

class _ViewScoresComponentHost0 extends AppView<dynamic> {
  ViewScoresComponent0 _compView_0;
  import2.ScoresComponent _ScoresComponent_0_4;
  _ViewScoresComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import5.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewScoresComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ScoresComponent_0_4 = new import2.ScoresComponent();
    _compView_0.create(_ScoresComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.ScoresComponent>(0, this, rootEl, _ScoresComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.ScoresComponent) && (0 == nodeIndex))) {
      return _ScoresComponent_0_4;
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

AppView viewFactory_ScoresComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewScoresComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.ScoresComponent> ScoresComponentNgFactory = const ComponentFactory<import2.ScoresComponent>('scores-component', viewFactory_ScoresComponentHost0, _ScoresComponentMetadata);
const _ScoresComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ngRef.registerComponent(
    ScoresComponent,
    ScoresComponentNgFactory,
  );
}