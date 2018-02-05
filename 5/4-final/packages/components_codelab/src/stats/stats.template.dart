// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'stats.dart';
export 'stats.dart';
import 'package:angular/angular.dart';
// Required for initReflector().
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;

import 'package:components_codelab/src/stats/stats.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'stats.dart' as import2;
import 'dart:html' as import3;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_if.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import6;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import10;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/template_ref.dart';
import 'dart:core';

const List<dynamic> styles$StatsComponent = const [import0.styles];

class ViewStatsComponent0 extends AppView<import2.StatsComponent> {
  import3.UListElement _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  ViewContainer _appEl_2;
  import6.NgFor _NgFor_2_7;
  var _expr_1;
  static RenderComponentType _renderType;
  ViewStatsComponent0(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('stats-component');
    _renderType ??= import10.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$StatsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.StatsComponent> build() {
    final import3.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'ul', parentRenderNode);
    addShimC(_el_0);
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_StatsComponent1);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    var _anchor_2 = ngAnchor.clone(false);
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_StatsComponent2);
    _NgFor_2_7 = new import6.NgFor(_appEl_2, _TemplateRef_2_6);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.StatsComponent _ctx = ctx;
    _NgIf_1_7.ngIf = _ctx.winningsMap.isEmpty;
    final currVal_1 = _ctx.winningsMap.keys;
    if (!identical(_expr_1, currVal_1)) {
      _NgFor_2_7.ngForOf = currVal_1;
      _expr_1 = currVal_1;
    }
    _NgFor_2_7.ngDoCheck();
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
  }
}

AppView<import2.StatsComponent> viewFactory_StatsComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewStatsComponent0(parentView, parentIndex);
}

class _ViewStatsComponent1 extends AppView<import2.StatsComponent> {
  import3.Element _el_0;
  _ViewStatsComponent1(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewStatsComponent0._renderType;
  }
  @override
  ComponentRef<import2.StatsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    import3.Text _text_1 = new import3.Text('(no stats yet)');
    _el_0.append(_text_1);
    init0(_el_0);
    return null;
  }
}

AppView<import2.StatsComponent> viewFactory_StatsComponent1(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewStatsComponent1(parentView, parentIndex);
}

class _ViewStatsComponent2 extends AppView<import2.StatsComponent> {
  import3.Element _el_0;
  ViewContainer _appEl_1;
  NgIf _NgIf_1_7;
  ViewContainer _appEl_2;
  NgIf _NgIf_2_7;
  _ViewStatsComponent2(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.EMBEDDED, {'\$implicit': null}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewStatsComponent0._renderType;
  }
  @override
  ComponentRef<import2.StatsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('li');
    addShimE(_el_0);
    var _anchor_1 = ngAnchor.clone(false);
    _el_0.append(_anchor_1);
    _appEl_1 = new ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_6 = new TemplateRef(_appEl_1, viewFactory_StatsComponent3);
    _NgIf_1_7 = new NgIf(_appEl_1, _TemplateRef_1_6);
    var _anchor_2 = ngAnchor.clone(false);
    _el_0.append(_anchor_2);
    _appEl_2 = new ViewContainer(2, 0, this, _anchor_2);
    TemplateRef _TemplateRef_2_6 = new TemplateRef(_appEl_2, viewFactory_StatsComponent4);
    _NgIf_2_7 = new NgIf(_appEl_2, _TemplateRef_2_6);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final int local_key = locals['\$implicit'];
    _NgIf_1_7.ngIf = (local_key == 0);
    _NgIf_2_7.ngIf = (local_key > 0);
    _appEl_1.detectChangesInNestedViews();
    _appEl_2.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1?.destroyNestedViews();
    _appEl_2?.destroyNestedViews();
  }
}

AppView<import2.StatsComponent> viewFactory_StatsComponent2(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewStatsComponent2(parentView, parentIndex);
}

class _ViewStatsComponent3 extends AppView<import2.StatsComponent> {
  import3.Element _el_0;
  import3.Text _text_2;
  import3.Text _text_4;
  var _expr_0;
  var _expr_1;
  _ViewStatsComponent3(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewStatsComponent0._renderType;
  }
  @override
  ComponentRef<import2.StatsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('span');
    addShimE(_el_0);
    import3.Text _text_1 = new import3.Text('Lost —\n      ');
    _el_0.append(_text_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    import3.Text _text_3 = new import3.Text(' time');
    _el_0.append(_text_3);
    _text_4 = new import3.Text('');
    _el_0.append(_text_4);
    import3.Text _text_5 = new import3.Text('.');
    _el_0.append(_text_5);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.StatsComponent _ctx = ctx;
    final int local_key = parentView.locals['\$implicit'];
    final currVal_0 = import10.interpolate0(_ctx.winningsMap[local_key]);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import10.interpolate0(((_ctx.winningsMap[local_key] > 1) ? 's' : ''));
    if (!identical(_expr_1, currVal_1)) {
      _text_4.text = currVal_1;
      _expr_1 = currVal_1;
    }
  }
}

AppView<import2.StatsComponent> viewFactory_StatsComponent3(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewStatsComponent3(parentView, parentIndex);
}

class _ViewStatsComponent4 extends AppView<import2.StatsComponent> {
  import3.Element _el_0;
  import3.Text _text_2;
  import3.Text _text_4;
  import3.Text _text_6;
  var _expr_0;
  var _expr_1;
  var _expr_2;
  _ViewStatsComponent4(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.EMBEDDED, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    componentType = ViewStatsComponent0._renderType;
  }
  @override
  ComponentRef<import2.StatsComponent> build() {
    var doc = import3.document;
    _el_0 = doc.createElement('span');
    addShimE(_el_0);
    import3.Text _text_1 = new import3.Text('Won \$');
    _el_0.append(_text_1);
    _text_2 = new import3.Text('');
    _el_0.append(_text_2);
    import3.Text _text_3 = new import3.Text(' —\n      ');
    _el_0.append(_text_3);
    _text_4 = new import3.Text('');
    _el_0.append(_text_4);
    import3.Text _text_5 = new import3.Text(' time');
    _el_0.append(_text_5);
    _text_6 = new import3.Text('');
    _el_0.append(_text_6);
    import3.Text _text_7 = new import3.Text('.');
    _el_0.append(_text_7);
    init0(_el_0);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.StatsComponent _ctx = ctx;
    final int local_key = parentView.locals['\$implicit'];
    final currVal_0 = import10.interpolate0(local_key);
    if (!identical(_expr_0, currVal_0)) {
      _text_2.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_1 = import10.interpolate0(_ctx.winningsMap[local_key]);
    if (!identical(_expr_1, currVal_1)) {
      _text_4.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = import10.interpolate0(((_ctx.winningsMap[local_key] > 1) ? 's' : ''));
    if (!identical(_expr_2, currVal_2)) {
      _text_6.text = currVal_2;
      _expr_2 = currVal_2;
    }
  }
}

AppView<import2.StatsComponent> viewFactory_StatsComponent4(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewStatsComponent4(parentView, parentIndex);
}

const List<dynamic> styles$StatsComponentHost = const [];

class _ViewStatsComponentHost0 extends AppView<dynamic> {
  ViewStatsComponent0 _compView_0;
  import2.StatsComponent _StatsComponent_0_4;
  _ViewStatsComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import8.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewStatsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _StatsComponent_0_4 = new import2.StatsComponent();
    _compView_0.create(_StatsComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.StatsComponent>(0, this, rootEl, _StatsComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.StatsComponent) && (0 == nodeIndex))) {
      return _StatsComponent_0_4;
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

AppView viewFactory_StatsComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewStatsComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.StatsComponent> StatsComponentNgFactory = const ComponentFactory<import2.StatsComponent>('stats-component', viewFactory_StatsComponentHost0, _StatsComponentMetadata);
const _StatsComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;
  _ref0.initReflector();
  _ngRef.registerComponent(
    StatsComponent,
    StatsComponentNgFactory,
  );
}
