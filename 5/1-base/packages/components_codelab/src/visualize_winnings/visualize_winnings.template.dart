// **************************************************************************
// Generator: Instance of 'Compiler'
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
import 'dart:html' as import3;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import7;
import 'package:angular/angular.dart';

const List<dynamic> styles$VisualizeWinningsComponent = const [import0.styles];

class ViewVisualizeWinningsComponent0 extends AppView<import2.VisualizeWinningsComponent> {
  bool _query_canvas_1_0_isDirty = true;
  import3.DivElement _el_0;
  import3.CanvasElement _el_1;
  var _expr_0;
  static RenderComponentType _renderType;
  ViewVisualizeWinningsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('visualize-winnings');
    _renderType ??= import7.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$VisualizeWinningsComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.VisualizeWinningsComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_0);
    _el_1 = createAndAppend(doc, 'canvas', _el_0);
    createAttr(_el_1, 'height', '100');
    createAttr(_el_1, 'width', '300');
    addShimC(_el_1);
    ctx.canvas = _el_1;
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

AppView<import2.VisualizeWinningsComponent> viewFactory_VisualizeWinningsComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewVisualizeWinningsComponent0(parentView, parentIndex);
}

const List<dynamic> styles$VisualizeWinningsComponentHost = const [];

class _ViewVisualizeWinningsComponentHost0 extends AppView<dynamic> {
  ViewVisualizeWinningsComponent0 _compView_0;
  import2.VisualizeWinningsComponent _VisualizeWinningsComponent_0_5;
  _ViewVisualizeWinningsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef build() {
    _compView_0 = new ViewVisualizeWinningsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _VisualizeWinningsComponent_0_5 = new import2.VisualizeWinningsComponent();
    _compView_0.create(_VisualizeWinningsComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.VisualizeWinningsComponent>(0, this, rootEl, _VisualizeWinningsComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _VisualizeWinningsComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_VisualizeWinningsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
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
