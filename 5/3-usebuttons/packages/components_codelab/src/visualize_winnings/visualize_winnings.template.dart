// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'visualize_winnings.dart';
export 'visualize_winnings.dart';
import 'dart:html';
import 'package:angular/angular.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:components_codelab/src/visualize_winnings/visualize_winnings.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'visualize_winnings.dart' as import2;
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'dart:html' as import4;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/core/linker/element_ref.dart';

const List<dynamic> styles$VisualizeWinningsComponent = const [import0.styles];

class ViewVisualizeWinningsComponent0 extends AppView<import2.VisualizeWinningsComponent> {
  final import3.QueryList _viewQuery_canvas_0 = new import3.QueryList();
  import4.DivElement _el_0;
  import4.CanvasElement _el_1;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewVisualizeWinningsComponent0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import4.document.createElement('visualize-winnings');
    _renderType ??= import8.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$VisualizeWinningsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.VisualizeWinningsComponent> build() {
    final import4.HtmlElement parentRenderNode = initViewRoot(rootEl);
    var doc = import4.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'canvas', _el_0);
    createAttr(_el_1, 'height', '100');
    createAttr(_el_1, 'width', '300');
    addShimC(_el_1);
    _viewQuery_canvas_0.reset([new ElementRef(_el_1)]);
    ctx.canvas = _viewQuery_canvas_0.first;
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.VisualizeWinningsComponent _ctx = ctx;
    final currVal_0 = (_ctx.hasData ? 'block' : 'none');
    if (!identical(_expr_0, currVal_0)) {
      _el_1.style.setProperty('display', currVal_0?.toString());
      _expr_0 = currVal_0;
    }
  }
}

AppView<import2.VisualizeWinningsComponent> viewFactory_VisualizeWinningsComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewVisualizeWinningsComponent0(parentView, parentIndex);
}

const List<dynamic> styles$VisualizeWinningsComponentHost = const [];

class _ViewVisualizeWinningsComponentHost0 extends AppView<dynamic> {
  ViewVisualizeWinningsComponent0 _compView_0;
  import2.VisualizeWinningsComponent _VisualizeWinningsComponent_0_4;
  _ViewVisualizeWinningsComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import6.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewVisualizeWinningsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _VisualizeWinningsComponent_0_4 = new import2.VisualizeWinningsComponent();
    _compView_0.create(_VisualizeWinningsComponent_0_4, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.VisualizeWinningsComponent>(0, this, rootEl, _VisualizeWinningsComponent_0_4);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import2.VisualizeWinningsComponent) && (0 == nodeIndex))) {
      return _VisualizeWinningsComponent_0_4;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _VisualizeWinningsComponent_0_4.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_VisualizeWinningsComponentHost0(AppView<dynamic> parentView, num parentIndex) {
  return new _ViewVisualizeWinningsComponentHost0(parentView, parentIndex);
}

const ComponentFactory<import2.VisualizeWinningsComponent> VisualizeWinningsComponentNgFactory = const ComponentFactory<import2.VisualizeWinningsComponent>('visualize-winnings', viewFactory_VisualizeWinningsComponentHost0, _VisualizeWinningsComponentMetadata);
const _VisualizeWinningsComponentMetadata = const [];
var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(VisualizeWinningsComponent, VisualizeWinningsComponentNgFactory);
  _ref0.initReflector();
}
