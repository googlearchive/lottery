// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'scores.dart';
export 'scores.dart';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'package:components_codelab/src/scores/scores.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'scores.dart' as import2;
import 'dart:html' as import3;
import 'package:angular_components/scorecard/scorecard.template.dart' as import4;
import 'package:angular_components/scorecard/scorecard.dart' as import5;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import7;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import11;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import13;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import14;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import15;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import16;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import17;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import18;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import19;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import20;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import21;
import 'package:quiver/time.dart' as import22;
import 'package:angular_components/utils/browser/window/module.dart' as import23;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import24;
import 'package:angular_components/utils/disposer/disposer.dart' as import25;
import 'package:angular/src/core/zone/ng_zone.dart' as import26;
import 'package:angular/src/core/linker/component_loader.dart' as import27;
import 'package:angular_components/laminate/overlay/module.dart' as import28;
import 'package:angular/src/core/di/opaque_token.dart' as import29;
import 'package:angular_components/laminate/enums/alignment.dart' as import30;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import31;

const List<dynamic> styles$ScoresComponent = const [import0.styles];

class ViewScoresComponent0 extends AppView<import2.ScoresComponent> {
  import3.Element _el_0;
  import4.ViewScorecardComponent0 _compView_0;
  import5.ScorecardComponent _ScorecardComponent_0_5;
  import3.Element _el_1;
  import4.ViewScorecardComponent0 _compView_1;
  import5.ScorecardComponent _ScorecardComponent_1_5;
  String _expr_1;
  String _expr_2;
  String _expr_3;
  String _expr_5;
  static RenderComponentType _renderType;
  ViewScoresComponent0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('scores-component');
    _renderType ??= import9.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$ScoresComponent);
    setupComponentType(_renderType);
  }
  @override
  ComponentRef<import2.ScoresComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = new import4.ViewScorecardComponent0(this, 0);
    _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    _el_0.className = 'betting themeable';
    createAttr(_el_0, 'label', 'Betting');
    addShimC(_el_0);
    _ScorecardComponent_0_5 = new import5.ScorecardComponent(_compView_0.ref, _el_0, parentView.injectorGet(import11.DomService, viewData.parentIndex));
    _compView_0.create(_ScorecardComponent_0_5, [const [], const [], const [], const []]);
    _compView_1 = new import4.ViewScorecardComponent0(this, 1);
    _el_1 = _compView_1.rootEl;
    parentRenderNode.append(_el_1);
    _el_1.className = 'investing themeable';
    createAttr(_el_1, 'description', '...');
    createAttr(_el_1, 'label', 'Investing');
    addShimC(_el_1);
    _ScorecardComponent_1_5 = new import5.ScorecardComponent(_compView_1.ref, _el_1, parentView.injectorGet(import11.DomService, viewData.parentIndex));
    _compView_1.create(_ScorecardComponent_1_5, [const [], const [], const [], const []]);
    init(const [], null);
    return null;
  }

  @override
  void detectChangesInternal() {
    final import2.ScoresComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (firstCheck) {
      _ScorecardComponent_0_5.label = 'Betting';
      changed = true;
    }
    final currVal_1 = import9.interpolate1('\$', _ctx.cash, '');
    if (!identical(_expr_1, currVal_1)) {
      _ScorecardComponent_0_5.value = currVal_1;
      changed = true;
      _expr_1 = currVal_1;
    }
    final currVal_2 = (_ctx.outcomeDescription ?? '');
    if (!identical(_expr_2, currVal_2)) {
      _ScorecardComponent_0_5.description = currVal_2;
      changed = true;
      _expr_2 = currVal_2;
    }
    final currVal_3 = import9.interpolate0(((_ctx.cash > _ctx.altCash) ? 'positive' : ((_ctx.cash < _ctx.altCash) ? 'negative' : 'neutral')));
    if (!identical(_expr_3, currVal_3)) {
      _ScorecardComponent_0_5.changeType = currVal_3;
      changed = true;
      _expr_3 = currVal_3;
    }
    if (changed) {
      _compView_0.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _ScorecardComponent_1_5.label = 'Investing';
      changed = true;
      _ScorecardComponent_1_5.description = '...';
      changed = true;
    }
    final currVal_5 = import9.interpolate1('\$', _ctx.altCash, '');
    if (!identical(_expr_5, currVal_5)) {
      _ScorecardComponent_1_5.value = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_1.markAsCheckOnce();
    }
    _compView_0.detectHostChanges(firstCheck);
    _compView_1.detectHostChanges(firstCheck);
    _compView_0.detectChanges();
    _compView_1.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
    _compView_1?.destroy();
  }
}

AppView<import2.ScoresComponent> viewFactory_ScoresComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewScoresComponent0(parentView, parentIndex);
}

const List<dynamic> styles$ScoresComponentHost = const [];

class _ViewScoresComponentHost0 extends AppView<dynamic> {
  ViewScoresComponent0 _compView_0;
  import2.ScoresComponent _ScoresComponent_0_5;
  List<import13.RelativePosition> __defaultPopupPositions_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  import14.AcxImperativeViewUtils __AcxImperativeViewUtils_0_9;
  dynamic __Document_0_10;
  import15.DomRuler __DomRuler_0_11;
  import16.Angular2ManagedZone __ManagedZone_0_12;
  dynamic __overlayContainerName_0_13;
  dynamic __overlayContainerParent_0_14;
  dynamic __overlayContainer_0_15;
  bool __overlaySyncDom_0_16;
  bool __overlayRepositionLoop_0_17;
  import17.OverlayStyleConfig __OverlayStyleConfig_0_18;
  import18.ZIndexer __ZIndexer_0_19;
  import19.OverlayDomRenderService __OverlayDomRenderService_0_20;
  import20.OverlayService __OverlayService_0_21;
  import21.DomPopupSourceFactory __DomPopupSourceFactory_0_22;
  import22.Clock __Clock_0_23;
  _ViewScoresComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import7.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<import13.RelativePosition> get _defaultPopupPositions_0_6 {
    if ((this.__defaultPopupPositions_0_6 == null)) {
      (__defaultPopupPositions_0_6 = const [const import13.RelativePosition(animationOrigin: 'top center'), const import13.RelativePosition(animationOrigin: 'top right', originX: const import13.Alignment('End', 'flex-end')), const import13.RelativePosition(animationOrigin: 'top left', originX: const import13.Alignment('Start', 'flex-start')), const import13.RelativePosition(animationOrigin: 'bottom center', originY: const import13.Alignment('End', 'flex-end')), const import13.RelativePosition(animationOrigin: 'bottom right', originX: const import13.Alignment('End', 'flex-end'), originY: const import13.Alignment('End', 'flex-end')), const import13.RelativePosition(animationOrigin: 'bottom left', originX: const import13.Alignment('Start', 'flex-start'), originY: const import13.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_6;
  }

  dynamic get _Window_0_7 {
    if ((this.__Window_0_7 == null)) {
      (__Window_0_7 = import23.getWindow());
    }
    return this.__Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((this.__DomService_0_8 == null)) {
      (__DomService_0_8 = import24.createDomService(this.injectorGet(import11.DomService, this.viewData.parentIndex, null), this.injectorGet(import25.Disposer, this.viewData.parentIndex, null), this.injectorGet(import26.NgZone, this.viewData.parentIndex), this._Window_0_7));
    }
    return this.__DomService_0_8;
  }

  import14.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_9 {
    if ((this.__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = new import14.AcxImperativeViewUtils(this.injectorGet(import27.ComponentLoader, this.viewData.parentIndex), this._DomService_0_8));
    }
    return this.__AcxImperativeViewUtils_0_9;
  }

  dynamic get _Document_0_10 {
    if ((this.__Document_0_10 == null)) {
      (__Document_0_10 = import23.getDocument());
    }
    return this.__Document_0_10;
  }

  import15.DomRuler get _DomRuler_0_11 {
    if ((this.__DomRuler_0_11 == null)) {
      (__DomRuler_0_11 = new import15.DomRuler(this._Document_0_10, this._DomService_0_8));
    }
    return this.__DomRuler_0_11;
  }

  import16.Angular2ManagedZone get _ManagedZone_0_12 {
    if ((this.__ManagedZone_0_12 == null)) {
      (__ManagedZone_0_12 = new import16.Angular2ManagedZone(this.injectorGet(import26.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_12;
  }

  dynamic get _overlayContainerName_0_13 {
    if ((this.__overlayContainerName_0_13 == null)) {
      (__overlayContainerName_0_13 = import28.getDefaultContainerName(this.injectorGet(const import29.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_13;
  }

  dynamic get _overlayContainerParent_0_14 {
    if ((this.__overlayContainerParent_0_14 == null)) {
      (__overlayContainerParent_0_14 = import28.getOverlayContainerParent(this._Document_0_10, this.injectorGet(const import29.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_14;
  }

  dynamic get _overlayContainer_0_15 {
    if ((this.__overlayContainer_0_15 == null)) {
      (__overlayContainer_0_15 = import28.getDefaultContainer(this._overlayContainerName_0_13, this._overlayContainerParent_0_14, this.injectorGet(const import29.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
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

  import17.OverlayStyleConfig get _OverlayStyleConfig_0_18 {
    if ((this.__OverlayStyleConfig_0_18 == null)) {
      (__OverlayStyleConfig_0_18 = new import17.OverlayStyleConfig(this._Document_0_10));
    }
    return this.__OverlayStyleConfig_0_18;
  }

  import18.ZIndexer get _ZIndexer_0_19 {
    if ((this.__ZIndexer_0_19 == null)) {
      (__ZIndexer_0_19 = new import18.ZIndexer());
    }
    return this.__ZIndexer_0_19;
  }

  import19.OverlayDomRenderService get _OverlayDomRenderService_0_20 {
    if ((this.__OverlayDomRenderService_0_20 == null)) {
      (__OverlayDomRenderService_0_20 = new import19.OverlayDomRenderService(this._OverlayStyleConfig_0_18, this._overlayContainer_0_15, this._overlayContainerName_0_13, this._DomRuler_0_11, this._DomService_0_8, this._AcxImperativeViewUtils_0_9, this._overlaySyncDom_0_16, this._overlayRepositionLoop_0_17, this._ZIndexer_0_19));
    }
    return this.__OverlayDomRenderService_0_20;
  }

  import20.OverlayService get _OverlayService_0_21 {
    if ((this.__OverlayService_0_21 == null)) {
      (__OverlayService_0_21 = new import20.OverlayService(this.injectorGet(import26.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_16, this._OverlayDomRenderService_0_20, this.injectorGet(import20.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_21;
  }

  import21.DomPopupSourceFactory get _DomPopupSourceFactory_0_22 {
    if ((this.__DomPopupSourceFactory_0_22 == null)) {
      (__DomPopupSourceFactory_0_22 = new import21.DomPopupSourceFactory(this._DomRuler_0_11));
    }
    return this.__DomPopupSourceFactory_0_22;
  }

  import22.Clock get _Clock_0_23 {
    if ((this.__Clock_0_23 == null)) {
      (__Clock_0_23 = const import22.Clock());
    }
    return this.__Clock_0_23;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewScoresComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ScoresComponent_0_5 = new import2.ScoresComponent();
    _compView_0.create(_ScoresComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.ScoresComponent>(0, this, rootEl, _ScoresComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import29.OpaqueToken<List<import30.RelativePosition>>('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_6;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import11.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import14.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_10;
    }
    if ((identical(token, import15.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_11;
    }
    if ((identical(token, import31.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_12;
    }
    if ((identical(token, const import29.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_13;
    }
    if ((identical(token, const import29.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_14;
    }
    if ((identical(token, const import29.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_15;
    }
    if ((identical(token, const import29.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_16;
    }
    if ((identical(token, const import29.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_17;
    }
    if ((identical(token, import17.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_18;
    }
    if ((identical(token, import18.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_19;
    }
    if ((identical(token, import19.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_20;
    }
    if ((identical(token, import20.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_21;
    }
    if ((identical(token, import21.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_22;
    }
    if (((identical(token, import22.Clock) || identical(token, const import29.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (0 == nodeIndex))) {
      return _Clock_0_23;
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

AppView viewFactory_ScoresComponentHost0(AppView<dynamic> parentView, int parentIndex) {
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

  _ngRef.registerComponent(ScoresComponent, ScoresComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
}
