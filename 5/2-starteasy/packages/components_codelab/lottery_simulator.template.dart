// **************************************************************************
// Generator: Instance of 'Compiler'
// **************************************************************************

// ignore_for_file: cancel_subscriptions,constant_identifier_names,duplicate_import,non_constant_identifier_names,library_prefixes,UNUSED_IMPORT,UNUSED_SHOWN_NAME
import 'lottery_simulator.dart';
export 'lottery_simulator.dart';
import 'dart:async';
import 'package:angular/angular.dart';
import 'package:angular_components/angular_components.dart';
import 'src/help/help.dart';
import 'src/scores/scores.dart';
import 'src/settings/settings.dart';
import 'src/settings/settings_component.dart';
import 'src/stats/stats.dart';
import 'src/visualize_winnings/visualize_winnings.dart';
import 'package:intl/intl.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:angular_components/angular_components.template.dart' as _ref1;
import 'src/help/help.template.dart' as _ref2;
import 'src/scores/scores.template.dart' as _ref3;
import 'src/settings/settings.template.dart' as _ref4;
import 'src/settings/settings_component.template.dart' as _ref5;
import 'src/stats/stats.template.dart' as _ref6;
import 'src/visualize_winnings/visualize_winnings.template.dart' as _ref7;
import 'package:components_codelab/lottery_simulator.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'lottery_simulator.dart' as import2;
import 'dart:html' as import3;
import 'src/scores/scores.template.dart' as import4;
import 'src/scores/scores.dart' as import5;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import7;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import8;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import9;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import10;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import11;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import12;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import13;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import14;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import15;
import 'package:quiver/time.dart' as import16;
import 'package:angular_components/material_progress/material_progress.template.dart' as import17;
import 'package:angular_components/material_progress/material_progress.dart' as import18;
import 'package:angular_components/material_icon/material_icon.template.dart' as import19;
import 'package:angular_components/material_icon/material_icon.dart' as import20;
import 'src/stats/stats.template.dart' as import21;
import 'src/stats/stats.dart' as import22;
import 'src/visualize_winnings/visualize_winnings.template.dart' as import23;
import 'src/visualize_winnings/visualize_winnings.dart' as import24;
import 'src/settings/settings_component.template.dart' as import25;
import 'src/settings/settings_component.dart' as import26;
import 'src/help/help.template.dart' as import27;
import 'src/help/help.dart' as import28;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import30;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import32;
import 'package:angular/angular.dart';
import 'package:angular_components/utils/browser/window/module.dart' as import34;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import35;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import36;
import 'package:angular_components/utils/disposer/disposer.dart' as import37;
import 'package:angular/src/core/zone/ng_zone.dart' as import38;
import 'package:angular/src/core/linker/component_loader.dart' as import39;
import 'package:angular_components/laminate/overlay/module.dart' as import40;
import 'package:angular/src/core/di/opaque_token.dart' as import41;
import 'package:angular_components/laminate/enums/alignment.dart' as import42;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import43;
import 'src/settings/settings.dart' as import44;

const List<dynamic> styles$AppComponent = const [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  bool _query_vis_1_0_isDirty = true;
  import3.Element _el_0;
  import3.DivElement _el_2;
  import3.Element _el_3;
  import3.DivElement _el_5;
  import3.Element _el_6;
  import3.Text _text_8;
  import3.Element _el_9;
  import4.ViewScoresComponent0 _compView_9;
  import5.ScoresComponent _ScoresComponent_9_5;
  List<import7.RelativePosition> __defaultPopupPositions_9_6;
  dynamic __Window_9_7;
  dynamic __DomService_9_8;
  import8.AcxImperativeViewUtils __AcxImperativeViewUtils_9_9;
  dynamic __Document_9_10;
  import9.DomRuler __DomRuler_9_11;
  import10.Angular2ManagedZone __ManagedZone_9_12;
  dynamic __overlayContainerName_9_13;
  dynamic __overlayContainerParent_9_14;
  dynamic __overlayContainer_9_15;
  bool __overlaySyncDom_9_16;
  bool __overlayRepositionLoop_9_17;
  import11.OverlayStyleConfig __OverlayStyleConfig_9_18;
  import12.ZIndexer __ZIndexer_9_19;
  import13.OverlayDomRenderService __OverlayDomRenderService_9_20;
  import14.OverlayService __OverlayService_9_21;
  import15.DomPopupSourceFactory __DomPopupSourceFactory_9_22;
  import16.Clock __Clock_9_23;
  import3.DivElement _el_10;
  import3.DivElement _el_11;
  import3.Element _el_12;
  import3.Text _text_13;
  import3.DivElement _el_14;
  import3.Element _el_15;
  import3.Text _text_16;
  import3.DivElement _el_18;
  import3.Element _el_19;
  import17.ViewMaterialProgressComponent0 _compView_19;
  import18.MaterialProgressComponent _MaterialProgressComponent_19_5;
  import3.DivElement _el_20;
  import3.DivElement _el_21;
  import3.ButtonElement _el_22;
  import3.Element _el_23;
  import19.ViewMaterialIconComponent0 _compView_23;
  import20.MaterialIconComponent _MaterialIconComponent_23_5;
  import3.ButtonElement _el_24;
  import3.Element _el_25;
  import19.ViewMaterialIconComponent0 _compView_25;
  import20.MaterialIconComponent _MaterialIconComponent_25_5;
  import3.ButtonElement _el_26;
  import3.Element _el_27;
  import19.ViewMaterialIconComponent0 _compView_27;
  import20.MaterialIconComponent _MaterialIconComponent_27_5;
  import3.ButtonElement _el_28;
  import3.Element _el_29;
  import19.ViewMaterialIconComponent0 _compView_29;
  import20.MaterialIconComponent _MaterialIconComponent_29_5;
  import3.DivElement _el_30;
  import3.Element _el_31;
  import3.InputElement _el_32;
  import3.DivElement _el_34;
  import3.DivElement _el_35;
  import3.Element _el_36;
  import21.ViewStatsComponent0 _compView_36;
  import22.StatsComponent _StatsComponent_36_5;
  import3.Element _el_37;
  import23.ViewVisualizeWinningsComponent0 _compView_37;
  import24.VisualizeWinningsComponent _VisualizeWinningsComponent_37_5;
  import3.DivElement _el_38;
  import3.Element _el_39;
  import3.Element _el_41;
  import25.ViewSettingsComponent0 _compView_41;
  import26.SettingsComponent _SettingsComponent_41_5;
  import3.DivElement _el_42;
  import3.Element _el_43;
  import3.Element _el_45;
  import27.ViewHelpComponent0 _compView_45;
  import28.HelpComponent _HelpComponent_45_5;
  import3.DivElement _el_46;
  import3.Element _el_47;
  import3.Element _el_49;
  import27.ViewHelpComponent0 _compView_49;
  import28.HelpComponent _HelpComponent_49_5;
  var _expr_0;
  int _expr_1;
  int _expr_2;
  var _expr_3;
  var _expr_4;
  int _expr_5;
  var _expr_6;
  var _expr_8;
  var _expr_10;
  var _expr_14;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import30.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('lottery-simulator');
    _renderType ??= import32.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  List<import7.RelativePosition> get _defaultPopupPositions_9_6 {
    if ((this.__defaultPopupPositions_9_6 == null)) {
      (__defaultPopupPositions_9_6 = const [const import7.RelativePosition(animationOrigin: 'top center'), const import7.RelativePosition(animationOrigin: 'top right', originX: const import7.Alignment('End', 'flex-end')), const import7.RelativePosition(animationOrigin: 'top left', originX: const import7.Alignment('Start', 'flex-start')), const import7.RelativePosition(animationOrigin: 'bottom center', originY: const import7.Alignment('End', 'flex-end')), const import7.RelativePosition(animationOrigin: 'bottom right', originX: const import7.Alignment('End', 'flex-end'), originY: const import7.Alignment('End', 'flex-end')), const import7.RelativePosition(animationOrigin: 'bottom left', originX: const import7.Alignment('Start', 'flex-start'), originY: const import7.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_9_6;
  }

  dynamic get _Window_9_7 {
    if ((this.__Window_9_7 == null)) {
      (__Window_9_7 = import34.getWindow());
    }
    return this.__Window_9_7;
  }

  dynamic get _DomService_9_8 {
    if ((this.__DomService_9_8 == null)) {
      (__DomService_9_8 = import35.createDomService(this.parentView.injectorGet(import36.DomService, this.viewData.parentIndex, null), this.parentView.injectorGet(import37.Disposer, this.viewData.parentIndex, null), this.parentView.injectorGet(import38.NgZone, this.viewData.parentIndex), this._Window_9_7));
    }
    return this.__DomService_9_8;
  }

  import8.AcxImperativeViewUtils get _AcxImperativeViewUtils_9_9 {
    if ((this.__AcxImperativeViewUtils_9_9 == null)) {
      (__AcxImperativeViewUtils_9_9 = new import8.AcxImperativeViewUtils(this.parentView.injectorGet(import39.ComponentLoader, this.viewData.parentIndex), this._DomService_9_8));
    }
    return this.__AcxImperativeViewUtils_9_9;
  }

  dynamic get _Document_9_10 {
    if ((this.__Document_9_10 == null)) {
      (__Document_9_10 = import34.getDocument());
    }
    return this.__Document_9_10;
  }

  import9.DomRuler get _DomRuler_9_11 {
    if ((this.__DomRuler_9_11 == null)) {
      (__DomRuler_9_11 = new import9.DomRuler(this._Document_9_10, this._DomService_9_8));
    }
    return this.__DomRuler_9_11;
  }

  import10.Angular2ManagedZone get _ManagedZone_9_12 {
    if ((this.__ManagedZone_9_12 == null)) {
      (__ManagedZone_9_12 = new import10.Angular2ManagedZone(this.parentView.injectorGet(import38.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_9_12;
  }

  dynamic get _overlayContainerName_9_13 {
    if ((this.__overlayContainerName_9_13 == null)) {
      (__overlayContainerName_9_13 = import40.getDefaultContainerName(this.parentView.injectorGet(const import41.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_9_13;
  }

  dynamic get _overlayContainerParent_9_14 {
    if ((this.__overlayContainerParent_9_14 == null)) {
      (__overlayContainerParent_9_14 = import40.getOverlayContainerParent(this._Document_9_10, this.parentView.injectorGet(const import41.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_9_14;
  }

  dynamic get _overlayContainer_9_15 {
    if ((this.__overlayContainer_9_15 == null)) {
      (__overlayContainer_9_15 = import40.getDefaultContainer(this._overlayContainerName_9_13, this._overlayContainerParent_9_14, this.parentView.injectorGet(const import41.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_9_15;
  }

  bool get _overlaySyncDom_9_16 {
    if ((this.__overlaySyncDom_9_16 == null)) {
      (__overlaySyncDom_9_16 = true);
    }
    return this.__overlaySyncDom_9_16;
  }

  bool get _overlayRepositionLoop_9_17 {
    if ((this.__overlayRepositionLoop_9_17 == null)) {
      (__overlayRepositionLoop_9_17 = true);
    }
    return this.__overlayRepositionLoop_9_17;
  }

  import11.OverlayStyleConfig get _OverlayStyleConfig_9_18 {
    if ((this.__OverlayStyleConfig_9_18 == null)) {
      (__OverlayStyleConfig_9_18 = new import11.OverlayStyleConfig(this._Document_9_10));
    }
    return this.__OverlayStyleConfig_9_18;
  }

  import12.ZIndexer get _ZIndexer_9_19 {
    if ((this.__ZIndexer_9_19 == null)) {
      (__ZIndexer_9_19 = new import12.ZIndexer());
    }
    return this.__ZIndexer_9_19;
  }

  import13.OverlayDomRenderService get _OverlayDomRenderService_9_20 {
    if ((this.__OverlayDomRenderService_9_20 == null)) {
      (__OverlayDomRenderService_9_20 = new import13.OverlayDomRenderService(this._OverlayStyleConfig_9_18, this._overlayContainer_9_15, this._overlayContainerName_9_13, this._DomRuler_9_11, this._DomService_9_8, this._AcxImperativeViewUtils_9_9, this._overlaySyncDom_9_16, this._overlayRepositionLoop_9_17, this._ZIndexer_9_19));
    }
    return this.__OverlayDomRenderService_9_20;
  }

  import14.OverlayService get _OverlayService_9_21 {
    if ((this.__OverlayService_9_21 == null)) {
      (__OverlayService_9_21 = new import14.OverlayService(this.parentView.injectorGet(import38.NgZone, this.viewData.parentIndex), this._overlaySyncDom_9_16, this._OverlayDomRenderService_9_20, this.parentView.injectorGet(import14.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_9_21;
  }

  import15.DomPopupSourceFactory get _DomPopupSourceFactory_9_22 {
    if ((this.__DomPopupSourceFactory_9_22 == null)) {
      (__DomPopupSourceFactory_9_22 = new import15.DomPopupSourceFactory(this._DomRuler_9_11));
    }
    return this.__DomPopupSourceFactory_9_22;
  }

  import16.Clock get _Clock_9_23 {
    if ((this.__Clock_9_23 == null)) {
      (__Clock_9_23 = const import16.Clock());
    }
    return this.__Clock_9_23;
  }

  @override
  ComponentRef<import2.AppComponent> build() {
    final _rootEl = rootEl;
    final import3.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    var doc = import3.document;
    _el_0 = createAndAppend(doc, 'h1', parentRenderNode);
    addShimE(_el_0);
    import3.Text _text_1 = new import3.Text('Lottery Simulator');
    _el_0.append(_text_1);
    _el_2 = createDivAndAppend(doc, parentRenderNode);
    _el_2.className = 'help';
    addShimC(_el_2);
    _el_3 = createAndAppend(doc, 'p', _el_2);
    addShimE(_el_3);
    import3.Text _text_4 = new import3.Text('Have you always wanted to lose all your money in a lottery?\n   This simulation makes it possible—without, you know, losing all your money.');
    _el_3.append(_text_4);
    _el_5 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_5);
    _el_6 = createAndAppend(doc, 'h2', _el_5);
    addShimE(_el_6);
    import3.Text _text_7 = new import3.Text('Playing ');
    _el_6.append(_text_7);
    _text_8 = new import3.Text('');
    _el_6.append(_text_8);
    _compView_9 = new import4.ViewScoresComponent0(this, 9);
    _el_9 = _compView_9.rootEl;
    _el_5.append(_el_9);
    _el_9.className = 'scores-component';
    addShimC(_el_9);
    _ScoresComponent_9_5 = new import5.ScoresComponent();
    _compView_9.create(_ScoresComponent_9_5, []);
    _el_10 = createDivAndAppend(doc, _el_5);
    _el_10.className = 'days';
    addShimC(_el_10);
    _el_11 = createDivAndAppend(doc, _el_10);
    _el_11.className = 'days__start-day';
    addShimC(_el_11);
    _el_12 = createSpanAndAppend(doc, _el_11);
    addShimE(_el_12);
    _text_13 = new import3.Text('');
    _el_12.append(_text_13);
    _el_14 = createDivAndAppend(doc, _el_10);
    _el_14.className = 'days__end-day';
    addShimC(_el_14);
    _el_15 = createSpanAndAppend(doc, _el_14);
    addShimE(_el_15);
    _text_16 = new import3.Text('');
    _el_15.append(_text_16);
    import3.Text _text_17 = new import3.Text(' years from now');
    _el_15.append(_text_17);
    _el_18 = createDivAndAppend(doc, _el_10);
    _el_18.className = 'clear-floats';
    addShimC(_el_18);
    _compView_19 = new import17.ViewMaterialProgressComponent0(this, 19);
    _el_19 = _compView_19.rootEl;
    _el_5.append(_el_19);
    _el_19.className = 'life-progress';
    addShimC(_el_19);
    _MaterialProgressComponent_19_5 = new import18.MaterialProgressComponent(null, _compView_19.ref, _el_19);
    _compView_19.create(_MaterialProgressComponent_19_5, []);
    _el_20 = createDivAndAppend(doc, _el_5);
    _el_20.className = 'controls';
    addShimC(_el_20);
    _el_21 = createDivAndAppend(doc, _el_20);
    _el_21.className = 'controls__fabs';
    addShimC(_el_21);
    _el_22 = createAndAppend(doc, 'button', _el_21);
    createAttr(_el_22, 'aria-label', 'Play');
    createAttr(_el_22, 'id', 'play-button');
    addShimC(_el_22);
    _compView_23 = new import19.ViewMaterialIconComponent0(this, 23);
    _el_23 = _compView_23.rootEl;
    _el_22.append(_el_23);
    createAttr(_el_23, 'icon', 'play_arrow');
    addShimC(_el_23);
    _MaterialIconComponent_23_5 = new import20.MaterialIconComponent(_el_23);
    _compView_23.create(_MaterialIconComponent_23_5, []);
    _el_24 = createAndAppend(doc, 'button', _el_21);
    createAttr(_el_24, 'aria-label', 'Step');
    addShimC(_el_24);
    _compView_25 = new import19.ViewMaterialIconComponent0(this, 25);
    _el_25 = _compView_25.rootEl;
    _el_24.append(_el_25);
    createAttr(_el_25, 'icon', 'skip_next');
    addShimC(_el_25);
    _MaterialIconComponent_25_5 = new import20.MaterialIconComponent(_el_25);
    _compView_25.create(_MaterialIconComponent_25_5, []);
    _el_26 = createAndAppend(doc, 'button', _el_21);
    createAttr(_el_26, 'aria-label', 'Pause');
    addShimC(_el_26);
    _compView_27 = new import19.ViewMaterialIconComponent0(this, 27);
    _el_27 = _compView_27.rootEl;
    _el_26.append(_el_27);
    createAttr(_el_27, 'icon', 'pause');
    addShimC(_el_27);
    _MaterialIconComponent_27_5 = new import20.MaterialIconComponent(_el_27);
    _compView_27.create(_MaterialIconComponent_27_5, []);
    _el_28 = createAndAppend(doc, 'button', _el_21);
    createAttr(_el_28, 'aria-label', 'Reset');
    addShimC(_el_28);
    _compView_29 = new import19.ViewMaterialIconComponent0(this, 29);
    _el_29 = _compView_29.rootEl;
    _el_28.append(_el_29);
    createAttr(_el_29, 'icon', 'replay');
    addShimC(_el_29);
    _MaterialIconComponent_29_5 = new import20.MaterialIconComponent(_el_29);
    _compView_29.create(_MaterialIconComponent_29_5, []);
    _el_30 = createDivAndAppend(doc, _el_20);
    _el_30.className = 'controls__faster-button';
    addShimC(_el_30);
    _el_31 = createAndAppend(doc, 'label', _el_30);
    addShimE(_el_31);
    _el_32 = createAndAppend(doc, 'input', _el_31);
    createAttr(_el_32, 'type', 'checkbox');
    addShimC(_el_32);
    import3.Text _text_33 = new import3.Text('Go faster');
    _el_31.append(_text_33);
    _el_34 = createDivAndAppend(doc, _el_20);
    _el_34.className = 'clear-floats';
    addShimC(_el_34);
    _el_35 = createDivAndAppend(doc, _el_5);
    _el_35.className = 'history';
    addShimC(_el_35);
    _compView_36 = new import21.ViewStatsComponent0(this, 36);
    _el_36 = _compView_36.rootEl;
    _el_35.append(_el_36);
    _el_36.className = 'history__stats';
    addShimC(_el_36);
    _StatsComponent_36_5 = new import22.StatsComponent();
    _compView_36.create(_StatsComponent_36_5, []);
    _compView_37 = new import23.ViewVisualizeWinningsComponent0(this, 37);
    _el_37 = _compView_37.rootEl;
    _el_35.append(_el_37);
    _el_37.className = 'history__vis';
    addShimC(_el_37);
    _VisualizeWinningsComponent_37_5 = new import24.VisualizeWinningsComponent();
    _compView_37.create(_VisualizeWinningsComponent_37_5, []);
    _el_38 = createDivAndAppend(doc, _el_35);
    _el_38.className = 'clear-floats';
    addShimC(_el_38);
    _el_39 = createAndAppend(doc, 'h2', _el_5);
    addShimE(_el_39);
    import3.Text _text_40 = new import3.Text('Settings');
    _el_39.append(_text_40);
    _compView_41 = new import25.ViewSettingsComponent0(this, 41);
    _el_41 = _compView_41.rootEl;
    _el_5.append(_el_41);
    addShimC(_el_41);
    _SettingsComponent_41_5 = new import26.SettingsComponent();
    _compView_41.create(_SettingsComponent_41_5, []);
    _el_42 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_42);
    _el_43 = createAndAppend(doc, 'h2', _el_42);
    addShimE(_el_43);
    import3.Text _text_44 = new import3.Text('Help');
    _el_43.append(_text_44);
    _compView_45 = new import27.ViewHelpComponent0(this, 45);
    _el_45 = _compView_45.rootEl;
    _el_42.append(_el_45);
    createAttr(_el_45, 'content', 'help');
    addShimC(_el_45);
    _HelpComponent_45_5 = new import28.HelpComponent();
    _compView_45.create(_HelpComponent_45_5, []);
    _el_46 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_46);
    _el_47 = createAndAppend(doc, 'h2', _el_46);
    addShimE(_el_47);
    import3.Text _text_48 = new import3.Text('About');
    _el_47.append(_text_48);
    _compView_49 = new import27.ViewHelpComponent0(this, 49);
    _el_49 = _compView_49.rootEl;
    _el_46.append(_el_49);
    createAttr(_el_49, 'content', 'about');
    addShimC(_el_49);
    _HelpComponent_49_5 = new import28.HelpComponent();
    _compView_49.create(_HelpComponent_49_5, []);
    _el_22.addEventListener('click', eventHandler0(ctx.play));
    _el_24.addEventListener('click', eventHandler0(ctx.step));
    _el_26.addEventListener('click', eventHandler0(ctx.pause));
    _el_28.addEventListener('click', eventHandler0(ctx.reset));
    _el_32.addEventListener('change', eventHandler1(_handle_change_32_0));
    final subscription_0 = _SettingsComponent_41_5.settingsChanged.listen(eventHandler0(ctx.updateFromSettings));
    ctx.vis = _VisualizeWinningsComponent_37_5;
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import41.OpaqueToken<List<import42.RelativePosition>>('defaultPopupPositions')) && (9 == nodeIndex))) {
      return _defaultPopupPositions_9_6;
    }
    if ((identical(token, import3.Window) && (9 == nodeIndex))) {
      return _Window_9_7;
    }
    if ((identical(token, import36.DomService) && (9 == nodeIndex))) {
      return _DomService_9_8;
    }
    if ((identical(token, import8.AcxImperativeViewUtils) && (9 == nodeIndex))) {
      return _AcxImperativeViewUtils_9_9;
    }
    if ((identical(token, import3.Document) && (9 == nodeIndex))) {
      return _Document_9_10;
    }
    if ((identical(token, import9.DomRuler) && (9 == nodeIndex))) {
      return _DomRuler_9_11;
    }
    if ((identical(token, import43.ManagedZone) && (9 == nodeIndex))) {
      return _ManagedZone_9_12;
    }
    if ((identical(token, const import41.OpaqueToken('overlayContainerName')) && (9 == nodeIndex))) {
      return _overlayContainerName_9_13;
    }
    if ((identical(token, const import41.OpaqueToken('overlayContainerParent')) && (9 == nodeIndex))) {
      return _overlayContainerParent_9_14;
    }
    if ((identical(token, const import41.OpaqueToken('overlayContainer')) && (9 == nodeIndex))) {
      return _overlayContainer_9_15;
    }
    if ((identical(token, const import41.OpaqueToken('overlaySyncDom')) && (9 == nodeIndex))) {
      return _overlaySyncDom_9_16;
    }
    if ((identical(token, const import41.OpaqueToken('overlayRepositionLoop')) && (9 == nodeIndex))) {
      return _overlayRepositionLoop_9_17;
    }
    if ((identical(token, import11.OverlayStyleConfig) && (9 == nodeIndex))) {
      return _OverlayStyleConfig_9_18;
    }
    if ((identical(token, import12.ZIndexer) && (9 == nodeIndex))) {
      return _ZIndexer_9_19;
    }
    if ((identical(token, import13.OverlayDomRenderService) && (9 == nodeIndex))) {
      return _OverlayDomRenderService_9_20;
    }
    if ((identical(token, import14.OverlayService) && (9 == nodeIndex))) {
      return _OverlayService_9_21;
    }
    if ((identical(token, import15.DomPopupSourceFactory) && (9 == nodeIndex))) {
      return _DomPopupSourceFactory_9_22;
    }
    if (((identical(token, import16.Clock) || identical(token, const import41.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (9 == nodeIndex))) {
      return _Clock_9_23;
    }
    if ((identical(token, import18.MaterialProgressComponent) && (19 == nodeIndex))) {
      return _MaterialProgressComponent_19_5;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    final currVal_1 = _ctx.altCash;
    if (!identical(_expr_1, currVal_1)) {
      _ScoresComponent_9_5.altCash = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.cash;
    if (!identical(_expr_2, currVal_2)) {
      _ScoresComponent_9_5.cash = currVal_2;
      _expr_2 = currVal_2;
    }
    changed = false;
    final currVal_5 = _ctx.progress;
    if (!identical(_expr_5, currVal_5)) {
      _MaterialProgressComponent_19_5.activeProgress = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_19.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_23_5.icon = 'play_arrow';
      changed = true;
    }
    if (changed) {
      _compView_23.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_25_5.icon = 'skip_next';
      changed = true;
    }
    if (changed) {
      _compView_25.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_27_5.icon = 'pause';
      changed = true;
    }
    if (changed) {
      _compView_27.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_29_5.icon = 'replay';
      changed = true;
    }
    if (changed) {
      _compView_29.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.winningsMap, null)) {
        (_StatsComponent_36_5.winningsMap = _ctx.winningsMap);
      }
    }
    if (firstCheck) {
      _VisualizeWinningsComponent_37_5.ngOnInit();
    }
    final currVal_14 = _ctx.settings;
    if (!identical(_expr_14, currVal_14)) {
      _SettingsComponent_41_5.settings = currVal_14;
      _expr_14 = currVal_14;
    }
    if (firstCheck) {
      _SettingsComponent_41_5.ngOnInit();
    }
    if (firstCheck) {
      (_HelpComponent_45_5.content = 'help');
    }
    if (firstCheck) {
      (_HelpComponent_49_5.content = 'about');
    }
    final currVal_0 = import32.interpolate0(_ctx.settings.lottery.shortName);
    if (!identical(_expr_0, currVal_0)) {
      _text_8.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_3 = (_ctx.currentDay ?? '');
    if (!identical(_expr_3, currVal_3)) {
      _text_13.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = import32.interpolate0(_ctx.settings.years);
    if (!identical(_expr_4, currVal_4)) {
      _text_16.text = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_6 = (_ctx.endOfDays || _ctx.inProgress);
    if (!identical(_expr_6, currVal_6)) {
      setProp(_el_22, 'disabled', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_8 = (_ctx.endOfDays || _ctx.inProgress);
    if (!identical(_expr_8, currVal_8)) {
      setProp(_el_24, 'disabled', currVal_8);
      _expr_8 = currVal_8;
    }
    final bool currVal_10 = !_ctx.inProgress;
    if (!identical(_expr_10, currVal_10)) {
      setProp(_el_26, 'disabled', currVal_10);
      _expr_10 = currVal_10;
    }
    _compView_9.detectChanges();
    _compView_19.detectChanges();
    _compView_23.detectChanges();
    _compView_25.detectChanges();
    _compView_27.detectChanges();
    _compView_29.detectChanges();
    _compView_36.detectChanges();
    _compView_37.detectChanges();
    _compView_41.detectChanges();
    _compView_45.detectChanges();
    _compView_49.detectChanges();
    if (firstCheck) {
      _MaterialProgressComponent_19_5.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_9?.destroy();
    _compView_19?.destroy();
    _compView_23?.destroy();
    _compView_25?.destroy();
    _compView_27?.destroy();
    _compView_29?.destroy();
    _compView_36?.destroy();
    _compView_37?.destroy();
    _compView_41?.destroy();
    _compView_45?.destroy();
    _compView_49?.destroy();
    _MaterialProgressComponent_19_5.ngOnDestroy();
  }

  void _handle_change_32_0($event) {
    final local_fastCheckbox = _el_32;
    ctx.fastEnabled = local_fastCheckbox.checked;
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import44.Settings _Settings_0_5;
  import2.AppComponent _AppComponent_0_6;
  List<import7.RelativePosition> __defaultPopupPositions_0_7;
  dynamic __Window_0_8;
  dynamic __DomService_0_9;
  import8.AcxImperativeViewUtils __AcxImperativeViewUtils_0_10;
  dynamic __Document_0_11;
  import9.DomRuler __DomRuler_0_12;
  import10.Angular2ManagedZone __ManagedZone_0_13;
  dynamic __overlayContainerName_0_14;
  dynamic __overlayContainerParent_0_15;
  dynamic __overlayContainer_0_16;
  bool __overlaySyncDom_0_17;
  bool __overlayRepositionLoop_0_18;
  import11.OverlayStyleConfig __OverlayStyleConfig_0_19;
  import12.ZIndexer __ZIndexer_0_20;
  import13.OverlayDomRenderService __OverlayDomRenderService_0_21;
  import14.OverlayService __OverlayService_0_22;
  import15.DomPopupSourceFactory __DomPopupSourceFactory_0_23;
  import16.Clock __Clock_0_24;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import30.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<import7.RelativePosition> get _defaultPopupPositions_0_7 {
    if ((this.__defaultPopupPositions_0_7 == null)) {
      (__defaultPopupPositions_0_7 = const [const import7.RelativePosition(animationOrigin: 'top center'), const import7.RelativePosition(animationOrigin: 'top right', originX: const import7.Alignment('End', 'flex-end')), const import7.RelativePosition(animationOrigin: 'top left', originX: const import7.Alignment('Start', 'flex-start')), const import7.RelativePosition(animationOrigin: 'bottom center', originY: const import7.Alignment('End', 'flex-end')), const import7.RelativePosition(animationOrigin: 'bottom right', originX: const import7.Alignment('End', 'flex-end'), originY: const import7.Alignment('End', 'flex-end')), const import7.RelativePosition(animationOrigin: 'bottom left', originX: const import7.Alignment('Start', 'flex-start'), originY: const import7.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_7;
  }

  dynamic get _Window_0_8 {
    if ((this.__Window_0_8 == null)) {
      (__Window_0_8 = import34.getWindow());
    }
    return this.__Window_0_8;
  }

  dynamic get _DomService_0_9 {
    if ((this.__DomService_0_9 == null)) {
      (__DomService_0_9 = import35.createDomService(this.injectorGet(import36.DomService, this.viewData.parentIndex, null), this.injectorGet(import37.Disposer, this.viewData.parentIndex, null), this.injectorGet(import38.NgZone, this.viewData.parentIndex), this._Window_0_8));
    }
    return this.__DomService_0_9;
  }

  import8.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_10 {
    if ((this.__AcxImperativeViewUtils_0_10 == null)) {
      (__AcxImperativeViewUtils_0_10 = new import8.AcxImperativeViewUtils(this.injectorGet(import39.ComponentLoader, this.viewData.parentIndex), this._DomService_0_9));
    }
    return this.__AcxImperativeViewUtils_0_10;
  }

  dynamic get _Document_0_11 {
    if ((this.__Document_0_11 == null)) {
      (__Document_0_11 = import34.getDocument());
    }
    return this.__Document_0_11;
  }

  import9.DomRuler get _DomRuler_0_12 {
    if ((this.__DomRuler_0_12 == null)) {
      (__DomRuler_0_12 = new import9.DomRuler(this._Document_0_11, this._DomService_0_9));
    }
    return this.__DomRuler_0_12;
  }

  import10.Angular2ManagedZone get _ManagedZone_0_13 {
    if ((this.__ManagedZone_0_13 == null)) {
      (__ManagedZone_0_13 = new import10.Angular2ManagedZone(this.injectorGet(import38.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_13;
  }

  dynamic get _overlayContainerName_0_14 {
    if ((this.__overlayContainerName_0_14 == null)) {
      (__overlayContainerName_0_14 = import40.getDefaultContainerName(this.injectorGet(const import41.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_14;
  }

  dynamic get _overlayContainerParent_0_15 {
    if ((this.__overlayContainerParent_0_15 == null)) {
      (__overlayContainerParent_0_15 = import40.getOverlayContainerParent(this._Document_0_11, this.injectorGet(const import41.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_15;
  }

  dynamic get _overlayContainer_0_16 {
    if ((this.__overlayContainer_0_16 == null)) {
      (__overlayContainer_0_16 = import40.getDefaultContainer(this._overlayContainerName_0_14, this._overlayContainerParent_0_15, this.injectorGet(const import41.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_0_16;
  }

  bool get _overlaySyncDom_0_17 {
    if ((this.__overlaySyncDom_0_17 == null)) {
      (__overlaySyncDom_0_17 = true);
    }
    return this.__overlaySyncDom_0_17;
  }

  bool get _overlayRepositionLoop_0_18 {
    if ((this.__overlayRepositionLoop_0_18 == null)) {
      (__overlayRepositionLoop_0_18 = true);
    }
    return this.__overlayRepositionLoop_0_18;
  }

  import11.OverlayStyleConfig get _OverlayStyleConfig_0_19 {
    if ((this.__OverlayStyleConfig_0_19 == null)) {
      (__OverlayStyleConfig_0_19 = new import11.OverlayStyleConfig(this._Document_0_11));
    }
    return this.__OverlayStyleConfig_0_19;
  }

  import12.ZIndexer get _ZIndexer_0_20 {
    if ((this.__ZIndexer_0_20 == null)) {
      (__ZIndexer_0_20 = new import12.ZIndexer());
    }
    return this.__ZIndexer_0_20;
  }

  import13.OverlayDomRenderService get _OverlayDomRenderService_0_21 {
    if ((this.__OverlayDomRenderService_0_21 == null)) {
      (__OverlayDomRenderService_0_21 = new import13.OverlayDomRenderService(this._OverlayStyleConfig_0_19, this._overlayContainer_0_16, this._overlayContainerName_0_14, this._DomRuler_0_12, this._DomService_0_9, this._AcxImperativeViewUtils_0_10, this._overlaySyncDom_0_17, this._overlayRepositionLoop_0_18, this._ZIndexer_0_20));
    }
    return this.__OverlayDomRenderService_0_21;
  }

  import14.OverlayService get _OverlayService_0_22 {
    if ((this.__OverlayService_0_22 == null)) {
      (__OverlayService_0_22 = new import14.OverlayService(this.injectorGet(import38.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_17, this._OverlayDomRenderService_0_21, this.injectorGet(import14.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_22;
  }

  import15.DomPopupSourceFactory get _DomPopupSourceFactory_0_23 {
    if ((this.__DomPopupSourceFactory_0_23 == null)) {
      (__DomPopupSourceFactory_0_23 = new import15.DomPopupSourceFactory(this._DomRuler_0_12));
    }
    return this.__DomPopupSourceFactory_0_23;
  }

  import16.Clock get _Clock_0_24 {
    if ((this.__Clock_0_24 == null)) {
      (__Clock_0_24 = const import16.Clock());
    }
    return this.__Clock_0_24;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _Settings_0_5 = new import44.Settings();
    _AppComponent_0_6 = new import2.AppComponent(_Settings_0_5);
    _compView_0.create(_AppComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.AppComponent>(0, this, rootEl, _AppComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import44.Settings) && (0 == nodeIndex))) {
      return _Settings_0_5;
    }
    if ((identical(token, const import41.OpaqueToken<List<import42.RelativePosition>>('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_7;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_8;
    }
    if ((identical(token, import36.DomService) && (0 == nodeIndex))) {
      return _DomService_0_9;
    }
    if ((identical(token, import8.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_10;
    }
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_11;
    }
    if ((identical(token, import9.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_12;
    }
    if ((identical(token, import43.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_13;
    }
    if ((identical(token, const import41.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_14;
    }
    if ((identical(token, const import41.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_15;
    }
    if ((identical(token, const import41.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_16;
    }
    if ((identical(token, const import41.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_17;
    }
    if ((identical(token, const import41.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_18;
    }
    if ((identical(token, import11.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_19;
    }
    if ((identical(token, import12.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_20;
    }
    if ((identical(token, import13.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_21;
    }
    if ((identical(token, import14.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_22;
    }
    if ((identical(token, import15.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_23;
    }
    if (((identical(token, import16.Clock) || identical(token, const import41.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (0 == nodeIndex))) {
      return _Clock_0_24;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      _AppComponent_0_6.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0?.destroy();
  }
}

AppView viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
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
  _ref7.initReflector();
}
