// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: TemplateGenerator
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
// Required for initReflector().
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
import 'package:angular/src/core/linker/query_list.dart' as import3;
import 'dart:html' as import4;
import 'src/scores/scores.template.dart' as import5;
import 'src/scores/scores.dart' as import6;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import7;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import8;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import9;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import10;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import11;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import12;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import13;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import14;
import 'package:angular_components/material_progress/material_progress.template.dart' as import15;
import 'package:angular_components/material_progress/material_progress.dart' as import16;
import 'package:angular_components/material_button/material_fab.template.dart' as import17;
import 'package:angular_components/material_button/material_fab.dart' as import18;
import 'package:angular_components/material_icon/material_icon.template.dart' as import19;
import 'package:angular_components/material_icon/material_icon.dart' as import20;
import 'package:angular_components/material_toggle/material_toggle.template.dart' as import21;
import 'package:angular_components/material_toggle/material_toggle.dart' as import22;
import 'src/stats/stats.template.dart' as import23;
import 'src/stats/stats.dart' as import24;
import 'src/visualize_winnings/visualize_winnings.template.dart' as import25;
import 'src/visualize_winnings/visualize_winnings.dart' as import26;
import 'src/settings/settings_component.template.dart' as import27;
import 'src/settings/settings_component.dart' as import28;
import 'src/help/help.template.dart' as import29;
import 'src/help/help.dart' as import30;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import32;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import34;
import 'package:angular/angular.dart';
import 'package:angular_components/laminate/enums/alignment.dart' as import36;
import 'package:angular_components/utils/browser/window/module.dart' as import37;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import38;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import39;
import 'package:angular_components/utils/disposer/disposer.dart' as import40;
import 'package:angular/src/core/zone/ng_zone.dart' as import41;
import 'package:angular/src/core/linker/component_loader.dart' as import42;
import 'package:angular_components/laminate/overlay/module.dart' as import43;
import 'package:angular/src/core/di/opaque_token.dart' as import44;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import45;
import 'src/settings/settings.dart' as import46;

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
  List<dynamic> __defaultPopupPositions_8_5;
  dynamic __Window_8_6;
  dynamic __DomService_8_7;
  import7.AcxImperativeViewUtils __AcxImperativeViewUtils_8_8;
  dynamic __Document_8_9;
  import8.DomRuler __DomRuler_8_10;
  import9.Angular2ManagedZone __ManagedZone_8_11;
  dynamic __overlayContainerName_8_12;
  dynamic __overlayContainerParent_8_13;
  dynamic __overlayContainer_8_14;
  bool __overlaySyncDom_8_15;
  bool __overlayRepositionLoop_8_16;
  import10.OverlayStyleConfig __OverlayStyleConfig_8_17;
  import11.ZIndexer __ZIndexer_8_18;
  import12.OverlayDomRenderService __OverlayDomRenderService_8_19;
  import13.OverlayService __OverlayService_8_20;
  import14.DomPopupSourceFactory __DomPopupSourceFactory_8_21;
  import4.DivElement _el_9;
  import4.DivElement _el_10;
  import4.Element _el_11;
  import4.Text _text_12;
  import4.DivElement _el_13;
  import4.Element _el_14;
  import4.Text _text_15;
  import4.DivElement _el_16;
  import4.Element _el_17;
  import15.ViewMaterialProgressComponent0 _compView_17;
  import16.MaterialProgressComponent _MaterialProgressComponent_17_4;
  import4.DivElement _el_18;
  import4.DivElement _el_19;
  import4.Element _el_20;
  import17.ViewMaterialFabComponent0 _compView_20;
  import18.MaterialFabComponent _MaterialFabComponent_20_4;
  import4.Element _el_21;
  import19.ViewMaterialIconComponent0 _compView_21;
  import20.MaterialIconComponent _MaterialIconComponent_21_4;
  import4.Element _el_22;
  import17.ViewMaterialFabComponent0 _compView_22;
  import18.MaterialFabComponent _MaterialFabComponent_22_4;
  import4.Element _el_23;
  import19.ViewMaterialIconComponent0 _compView_23;
  import20.MaterialIconComponent _MaterialIconComponent_23_4;
  import4.Element _el_24;
  import17.ViewMaterialFabComponent0 _compView_24;
  import18.MaterialFabComponent _MaterialFabComponent_24_4;
  import4.Element _el_25;
  import19.ViewMaterialIconComponent0 _compView_25;
  import20.MaterialIconComponent _MaterialIconComponent_25_4;
  import4.Element _el_26;
  import17.ViewMaterialFabComponent0 _compView_26;
  import18.MaterialFabComponent _MaterialFabComponent_26_4;
  import4.Element _el_27;
  import19.ViewMaterialIconComponent0 _compView_27;
  import20.MaterialIconComponent _MaterialIconComponent_27_4;
  import4.Element _el_28;
  import21.ViewMaterialToggleComponent0 _compView_28;
  import22.MaterialToggleComponent _MaterialToggleComponent_28_4;
  import4.DivElement _el_29;
  import4.DivElement _el_30;
  import4.Element _el_31;
  import23.ViewStatsComponent0 _compView_31;
  import24.StatsComponent _StatsComponent_31_4;
  import4.Element _el_32;
  import25.ViewVisualizeWinningsComponent0 _compView_32;
  import26.VisualizeWinningsComponent _VisualizeWinningsComponent_32_4;
  import4.DivElement _el_33;
  import4.Element _el_34;
  import4.Element _el_36;
  import27.ViewSettingsComponent0 _compView_36;
  import28.SettingsComponent _SettingsComponent_36_4;
  List<dynamic> __defaultPopupPositions_36_5;
  dynamic __Window_36_6;
  dynamic __DomService_36_7;
  import7.AcxImperativeViewUtils __AcxImperativeViewUtils_36_8;
  dynamic __Document_36_9;
  import8.DomRuler __DomRuler_36_10;
  import9.Angular2ManagedZone __ManagedZone_36_11;
  dynamic __overlayContainerName_36_12;
  dynamic __overlayContainerParent_36_13;
  dynamic __overlayContainer_36_14;
  bool __overlaySyncDom_36_15;
  bool __overlayRepositionLoop_36_16;
  import10.OverlayStyleConfig __OverlayStyleConfig_36_17;
  import11.ZIndexer __ZIndexer_36_18;
  import12.OverlayDomRenderService __OverlayDomRenderService_36_19;
  import13.OverlayService __OverlayService_36_20;
  import14.DomPopupSourceFactory __DomPopupSourceFactory_36_21;
  import4.DivElement _el_37;
  import4.Element _el_38;
  import4.Element _el_40;
  import29.ViewHelpComponent0 _compView_40;
  import30.HelpComponent _HelpComponent_40_4;
  import4.DivElement _el_41;
  import4.Element _el_42;
  import4.Element _el_44;
  import29.ViewHelpComponent0 _compView_44;
  import30.HelpComponent _HelpComponent_44_4;
  var _expr_0;
  int _expr_1;
  int _expr_2;
  var _expr_3;
  var _expr_4;
  int _expr_5;
  bool _expr_6;
  bool _expr_9;
  bool _expr_12;
  bool _expr_17;
  var _expr_20;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, num parentIndex) : super(import32.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import4.document.createElement('lottery-simulator');
    _renderType ??= import34.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  List<dynamic> get _defaultPopupPositions_8_5 {
    if ((this.__defaultPopupPositions_8_5 == null)) {
      (__defaultPopupPositions_8_5 = const [const import36.RelativePosition(animationOrigin: 'top center'), const import36.RelativePosition(animationOrigin: 'top right', originX: const import36.Alignment('End', 'flex-end')), const import36.RelativePosition(animationOrigin: 'top left', originX: const import36.Alignment('Start', 'flex-start')), const import36.RelativePosition(animationOrigin: 'bottom center', originY: const import36.Alignment('End', 'flex-end')), const import36.RelativePosition(animationOrigin: 'bottom right', originX: const import36.Alignment('End', 'flex-end'), originY: const import36.Alignment('End', 'flex-end')), const import36.RelativePosition(animationOrigin: 'bottom left', originX: const import36.Alignment('Start', 'flex-start'), originY: const import36.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_8_5;
  }

  dynamic get _Window_8_6 {
    if ((this.__Window_8_6 == null)) {
      (__Window_8_6 = import37.getWindow());
    }
    return this.__Window_8_6;
  }

  dynamic get _DomService_8_7 {
    if ((this.__DomService_8_7 == null)) {
      (__DomService_8_7 = import38.createDomService(this.parentView.injectorGet(import39.DomService, this.viewData.parentIndex, null), this.parentView.injectorGet(import40.Disposer, this.viewData.parentIndex, null), this.parentView.injectorGet(import41.NgZone, this.viewData.parentIndex), this._Window_8_6));
    }
    return this.__DomService_8_7;
  }

  import7.AcxImperativeViewUtils get _AcxImperativeViewUtils_8_8 {
    if ((this.__AcxImperativeViewUtils_8_8 == null)) {
      (__AcxImperativeViewUtils_8_8 = new import7.AcxImperativeViewUtils(this.parentView.injectorGet(import42.ComponentLoader, this.viewData.parentIndex), this._DomService_8_7));
    }
    return this.__AcxImperativeViewUtils_8_8;
  }

  dynamic get _Document_8_9 {
    if ((this.__Document_8_9 == null)) {
      (__Document_8_9 = import37.getDocument());
    }
    return this.__Document_8_9;
  }

  import8.DomRuler get _DomRuler_8_10 {
    if ((this.__DomRuler_8_10 == null)) {
      (__DomRuler_8_10 = new import8.DomRuler(this._Document_8_9, this._DomService_8_7));
    }
    return this.__DomRuler_8_10;
  }

  import9.Angular2ManagedZone get _ManagedZone_8_11 {
    if ((this.__ManagedZone_8_11 == null)) {
      (__ManagedZone_8_11 = new import9.Angular2ManagedZone(this.parentView.injectorGet(import41.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_8_11;
  }

  dynamic get _overlayContainerName_8_12 {
    if ((this.__overlayContainerName_8_12 == null)) {
      (__overlayContainerName_8_12 = import43.getDefaultContainerName(this.parentView.injectorGet(const import44.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_8_12;
  }

  dynamic get _overlayContainerParent_8_13 {
    if ((this.__overlayContainerParent_8_13 == null)) {
      (__overlayContainerParent_8_13 = import43.getOverlayContainerParent(this._Document_8_9, this.parentView.injectorGet(const import44.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_8_13;
  }

  dynamic get _overlayContainer_8_14 {
    if ((this.__overlayContainer_8_14 == null)) {
      (__overlayContainer_8_14 = import43.getDefaultContainer(this._overlayContainerName_8_12, this._overlayContainerParent_8_13, this.parentView.injectorGet(const import44.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_8_14;
  }

  bool get _overlaySyncDom_8_15 {
    if ((this.__overlaySyncDom_8_15 == null)) {
      (__overlaySyncDom_8_15 = true);
    }
    return this.__overlaySyncDom_8_15;
  }

  bool get _overlayRepositionLoop_8_16 {
    if ((this.__overlayRepositionLoop_8_16 == null)) {
      (__overlayRepositionLoop_8_16 = false);
    }
    return this.__overlayRepositionLoop_8_16;
  }

  import10.OverlayStyleConfig get _OverlayStyleConfig_8_17 {
    if ((this.__OverlayStyleConfig_8_17 == null)) {
      (__OverlayStyleConfig_8_17 = new import10.OverlayStyleConfig(this._Document_8_9));
    }
    return this.__OverlayStyleConfig_8_17;
  }

  import11.ZIndexer get _ZIndexer_8_18 {
    if ((this.__ZIndexer_8_18 == null)) {
      (__ZIndexer_8_18 = new import11.ZIndexer());
    }
    return this.__ZIndexer_8_18;
  }

  import12.OverlayDomRenderService get _OverlayDomRenderService_8_19 {
    if ((this.__OverlayDomRenderService_8_19 == null)) {
      (__OverlayDomRenderService_8_19 = new import12.OverlayDomRenderService(this._OverlayStyleConfig_8_17, this._overlayContainer_8_14, this._overlayContainerName_8_12, this._DomRuler_8_10, this._DomService_8_7, this._AcxImperativeViewUtils_8_8, this._overlaySyncDom_8_15, this._overlayRepositionLoop_8_16, this._ZIndexer_8_18));
    }
    return this.__OverlayDomRenderService_8_19;
  }

  import13.OverlayService get _OverlayService_8_20 {
    if ((this.__OverlayService_8_20 == null)) {
      (__OverlayService_8_20 = new import13.OverlayService(this.parentView.injectorGet(import41.NgZone, this.viewData.parentIndex), this._overlaySyncDom_8_15, this._OverlayDomRenderService_8_19, this.parentView.injectorGet(import13.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_8_20;
  }

  import14.DomPopupSourceFactory get _DomPopupSourceFactory_8_21 {
    if ((this.__DomPopupSourceFactory_8_21 == null)) {
      (__DomPopupSourceFactory_8_21 = new import14.DomPopupSourceFactory(this._DomRuler_8_10));
    }
    return this.__DomPopupSourceFactory_8_21;
  }

  List<dynamic> get _defaultPopupPositions_36_5 {
    if ((this.__defaultPopupPositions_36_5 == null)) {
      (__defaultPopupPositions_36_5 = const [const import36.RelativePosition(animationOrigin: 'top center'), const import36.RelativePosition(animationOrigin: 'top right', originX: const import36.Alignment('End', 'flex-end')), const import36.RelativePosition(animationOrigin: 'top left', originX: const import36.Alignment('Start', 'flex-start')), const import36.RelativePosition(animationOrigin: 'bottom center', originY: const import36.Alignment('End', 'flex-end')), const import36.RelativePosition(animationOrigin: 'bottom right', originX: const import36.Alignment('End', 'flex-end'), originY: const import36.Alignment('End', 'flex-end')), const import36.RelativePosition(animationOrigin: 'bottom left', originX: const import36.Alignment('Start', 'flex-start'), originY: const import36.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_36_5;
  }

  dynamic get _Window_36_6 {
    if ((this.__Window_36_6 == null)) {
      (__Window_36_6 = import37.getWindow());
    }
    return this.__Window_36_6;
  }

  dynamic get _DomService_36_7 {
    if ((this.__DomService_36_7 == null)) {
      (__DomService_36_7 = import38.createDomService(this.parentView.injectorGet(import39.DomService, this.viewData.parentIndex, null), this.parentView.injectorGet(import40.Disposer, this.viewData.parentIndex, null), this.parentView.injectorGet(import41.NgZone, this.viewData.parentIndex), this._Window_36_6));
    }
    return this.__DomService_36_7;
  }

  import7.AcxImperativeViewUtils get _AcxImperativeViewUtils_36_8 {
    if ((this.__AcxImperativeViewUtils_36_8 == null)) {
      (__AcxImperativeViewUtils_36_8 = new import7.AcxImperativeViewUtils(this.parentView.injectorGet(import42.ComponentLoader, this.viewData.parentIndex), this._DomService_36_7));
    }
    return this.__AcxImperativeViewUtils_36_8;
  }

  dynamic get _Document_36_9 {
    if ((this.__Document_36_9 == null)) {
      (__Document_36_9 = import37.getDocument());
    }
    return this.__Document_36_9;
  }

  import8.DomRuler get _DomRuler_36_10 {
    if ((this.__DomRuler_36_10 == null)) {
      (__DomRuler_36_10 = new import8.DomRuler(this._Document_36_9, this._DomService_36_7));
    }
    return this.__DomRuler_36_10;
  }

  import9.Angular2ManagedZone get _ManagedZone_36_11 {
    if ((this.__ManagedZone_36_11 == null)) {
      (__ManagedZone_36_11 = new import9.Angular2ManagedZone(this.parentView.injectorGet(import41.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_36_11;
  }

  dynamic get _overlayContainerName_36_12 {
    if ((this.__overlayContainerName_36_12 == null)) {
      (__overlayContainerName_36_12 = import43.getDefaultContainerName(this.parentView.injectorGet(const import44.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_36_12;
  }

  dynamic get _overlayContainerParent_36_13 {
    if ((this.__overlayContainerParent_36_13 == null)) {
      (__overlayContainerParent_36_13 = import43.getOverlayContainerParent(this._Document_36_9, this.parentView.injectorGet(const import44.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_36_13;
  }

  dynamic get _overlayContainer_36_14 {
    if ((this.__overlayContainer_36_14 == null)) {
      (__overlayContainer_36_14 = import43.getDefaultContainer(this._overlayContainerName_36_12, this._overlayContainerParent_36_13, this.parentView.injectorGet(const import44.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_36_14;
  }

  bool get _overlaySyncDom_36_15 {
    if ((this.__overlaySyncDom_36_15 == null)) {
      (__overlaySyncDom_36_15 = true);
    }
    return this.__overlaySyncDom_36_15;
  }

  bool get _overlayRepositionLoop_36_16 {
    if ((this.__overlayRepositionLoop_36_16 == null)) {
      (__overlayRepositionLoop_36_16 = false);
    }
    return this.__overlayRepositionLoop_36_16;
  }

  import10.OverlayStyleConfig get _OverlayStyleConfig_36_17 {
    if ((this.__OverlayStyleConfig_36_17 == null)) {
      (__OverlayStyleConfig_36_17 = new import10.OverlayStyleConfig(this._Document_36_9));
    }
    return this.__OverlayStyleConfig_36_17;
  }

  import11.ZIndexer get _ZIndexer_36_18 {
    if ((this.__ZIndexer_36_18 == null)) {
      (__ZIndexer_36_18 = new import11.ZIndexer());
    }
    return this.__ZIndexer_36_18;
  }

  import12.OverlayDomRenderService get _OverlayDomRenderService_36_19 {
    if ((this.__OverlayDomRenderService_36_19 == null)) {
      (__OverlayDomRenderService_36_19 = new import12.OverlayDomRenderService(this._OverlayStyleConfig_36_17, this._overlayContainer_36_14, this._overlayContainerName_36_12, this._DomRuler_36_10, this._DomService_36_7, this._AcxImperativeViewUtils_36_8, this._overlaySyncDom_36_15, this._overlayRepositionLoop_36_16, this._ZIndexer_36_18));
    }
    return this.__OverlayDomRenderService_36_19;
  }

  import13.OverlayService get _OverlayService_36_20 {
    if ((this.__OverlayService_36_20 == null)) {
      (__OverlayService_36_20 = new import13.OverlayService(this.parentView.injectorGet(import41.NgZone, this.viewData.parentIndex), this._overlaySyncDom_36_15, this._OverlayDomRenderService_36_19, this.parentView.injectorGet(import13.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_36_20;
  }

  import14.DomPopupSourceFactory get _DomPopupSourceFactory_36_21 {
    if ((this.__DomPopupSourceFactory_36_21 == null)) {
      (__DomPopupSourceFactory_36_21 = new import14.DomPopupSourceFactory(this._DomRuler_36_10));
    }
    return this.__DomPopupSourceFactory_36_21;
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
    _compView_17 = new import15.ViewMaterialProgressComponent0(this, 17);
    _el_17 = _compView_17.rootEl;
    _el_5.append(_el_17);
    _el_17.className = 'life-progress';
    addShimC(_el_17);
    _MaterialProgressComponent_17_4 = new import16.MaterialProgressComponent(null, _compView_17.ref, _el_17);
    _compView_17.create(_MaterialProgressComponent_17_4, []);
    _el_18 = createDivAndAppend(doc, _el_5);
    _el_18.className = 'controls';
    addShimC(_el_18);
    _el_19 = createDivAndAppend(doc, _el_18);
    _el_19.className = 'controls__fabs';
    addShimC(_el_19);
    _compView_20 = new import17.ViewMaterialFabComponent0(this, 20);
    _el_20 = _compView_20.rootEl;
    _el_19.append(_el_20);
    createAttr(_el_20, 'aria-label', 'Play');
    createAttr(_el_20, 'id', 'play-button');
    createAttr(_el_20, 'raised', '');
    addShimC(_el_20);
    _MaterialFabComponent_20_4 = new import18.MaterialFabComponent(_el_20, _compView_20.ref);
    _compView_21 = new import19.ViewMaterialIconComponent0(this, 21);
    _el_21 = _compView_21.rootEl;
    createAttr(_el_21, 'icon', 'play_arrow');
    addShimC(_el_21);
    _MaterialIconComponent_21_4 = new import20.MaterialIconComponent(_el_21);
    _compView_21.create(_MaterialIconComponent_21_4, []);
    _compView_20.create(_MaterialFabComponent_20_4, [
      [_el_21]
    ]);
    _compView_22 = new import17.ViewMaterialFabComponent0(this, 22);
    _el_22 = _compView_22.rootEl;
    _el_19.append(_el_22);
    createAttr(_el_22, 'aria-label', 'Step');
    createAttr(_el_22, 'mini', '');
    createAttr(_el_22, 'raised', '');
    addShimC(_el_22);
    _MaterialFabComponent_22_4 = new import18.MaterialFabComponent(_el_22, _compView_22.ref);
    _compView_23 = new import19.ViewMaterialIconComponent0(this, 23);
    _el_23 = _compView_23.rootEl;
    createAttr(_el_23, 'icon', 'skip_next');
    addShimC(_el_23);
    _MaterialIconComponent_23_4 = new import20.MaterialIconComponent(_el_23);
    _compView_23.create(_MaterialIconComponent_23_4, []);
    _compView_22.create(_MaterialFabComponent_22_4, [
      [_el_23]
    ]);
    _compView_24 = new import17.ViewMaterialFabComponent0(this, 24);
    _el_24 = _compView_24.rootEl;
    _el_19.append(_el_24);
    createAttr(_el_24, 'aria-label', 'Pause');
    createAttr(_el_24, 'mini', '');
    createAttr(_el_24, 'raised', '');
    addShimC(_el_24);
    _MaterialFabComponent_24_4 = new import18.MaterialFabComponent(_el_24, _compView_24.ref);
    _compView_25 = new import19.ViewMaterialIconComponent0(this, 25);
    _el_25 = _compView_25.rootEl;
    createAttr(_el_25, 'icon', 'pause');
    addShimC(_el_25);
    _MaterialIconComponent_25_4 = new import20.MaterialIconComponent(_el_25);
    _compView_25.create(_MaterialIconComponent_25_4, []);
    _compView_24.create(_MaterialFabComponent_24_4, [
      [_el_25]
    ]);
    _compView_26 = new import17.ViewMaterialFabComponent0(this, 26);
    _el_26 = _compView_26.rootEl;
    _el_19.append(_el_26);
    createAttr(_el_26, 'aria-label', 'Reset');
    createAttr(_el_26, 'mini', '');
    createAttr(_el_26, 'raised', '');
    addShimC(_el_26);
    _MaterialFabComponent_26_4 = new import18.MaterialFabComponent(_el_26, _compView_26.ref);
    _compView_27 = new import19.ViewMaterialIconComponent0(this, 27);
    _el_27 = _compView_27.rootEl;
    createAttr(_el_27, 'icon', 'replay');
    addShimC(_el_27);
    _MaterialIconComponent_27_4 = new import20.MaterialIconComponent(_el_27);
    _compView_27.create(_MaterialIconComponent_27_4, []);
    _compView_26.create(_MaterialFabComponent_26_4, [
      [_el_27]
    ]);
    _compView_28 = new import21.ViewMaterialToggleComponent0(this, 28);
    _el_28 = _compView_28.rootEl;
    _el_18.append(_el_28);
    _el_28.className = 'controls__faster-button themeable';
    createAttr(_el_28, 'label', 'Go faster');
    addShimC(_el_28);
    _MaterialToggleComponent_28_4 = new import22.MaterialToggleComponent();
    _compView_28.create(_MaterialToggleComponent_28_4, [const []]);
    _el_29 = createDivAndAppend(doc, _el_18);
    _el_29.className = 'clear-floats';
    addShimC(_el_29);
    _el_30 = createDivAndAppend(doc, _el_5);
    _el_30.className = 'history';
    addShimC(_el_30);
    _compView_31 = new import23.ViewStatsComponent0(this, 31);
    _el_31 = _compView_31.rootEl;
    _el_30.append(_el_31);
    _el_31.className = 'history__stats';
    addShimC(_el_31);
    _StatsComponent_31_4 = new import24.StatsComponent();
    _compView_31.create(_StatsComponent_31_4, []);
    _compView_32 = new import25.ViewVisualizeWinningsComponent0(this, 32);
    _el_32 = _compView_32.rootEl;
    _el_30.append(_el_32);
    _el_32.className = 'history__vis';
    addShimC(_el_32);
    _VisualizeWinningsComponent_32_4 = new import26.VisualizeWinningsComponent();
    _compView_32.create(_VisualizeWinningsComponent_32_4, []);
    _el_33 = createDivAndAppend(doc, _el_30);
    _el_33.className = 'clear-floats';
    addShimC(_el_33);
    _el_34 = createAndAppend(doc, 'h2', _el_5);
    addShimE(_el_34);
    import4.Text _text_35 = new import4.Text('Settings');
    _el_34.append(_text_35);
    _compView_36 = new import27.ViewSettingsComponent0(this, 36);
    _el_36 = _compView_36.rootEl;
    _el_5.append(_el_36);
    addShimC(_el_36);
    _SettingsComponent_36_4 = new import28.SettingsComponent();
    _compView_36.create(_SettingsComponent_36_4, []);
    _el_37 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_37);
    _el_38 = createAndAppend(doc, 'h2', _el_37);
    addShimE(_el_38);
    import4.Text _text_39 = new import4.Text('Help');
    _el_38.append(_text_39);
    _compView_40 = new import29.ViewHelpComponent0(this, 40);
    _el_40 = _compView_40.rootEl;
    _el_37.append(_el_40);
    createAttr(_el_40, 'content', 'help');
    addShimC(_el_40);
    _HelpComponent_40_4 = new import30.HelpComponent();
    _compView_40.create(_HelpComponent_40_4, []);
    _el_41 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_41);
    _el_42 = createAndAppend(doc, 'h2', _el_41);
    addShimE(_el_42);
    import4.Text _text_43 = new import4.Text('About');
    _el_42.append(_text_43);
    _compView_44 = new import29.ViewHelpComponent0(this, 44);
    _el_44 = _compView_44.rootEl;
    _el_41.append(_el_44);
    createAttr(_el_44, 'content', 'about');
    addShimC(_el_44);
    _HelpComponent_44_4 = new import30.HelpComponent();
    _compView_44.create(_HelpComponent_44_4, []);
    final subscription_0 = _MaterialFabComponent_20_4.trigger.listen(eventHandler0(ctx.play));
    final subscription_1 = _MaterialFabComponent_22_4.trigger.listen(eventHandler0(ctx.step));
    final subscription_2 = _MaterialFabComponent_24_4.trigger.listen(eventHandler0(ctx.pause));
    final subscription_3 = _MaterialFabComponent_26_4.trigger.listen(eventHandler0(ctx.reset));
    final subscription_4 = _MaterialToggleComponent_28_4.onChecked.listen(eventHandler1(_handle_checkedChange_28_0));
    final subscription_5 = _SettingsComponent_36_4.settingsChanged.listen(eventHandler0(ctx.updateFromSettings));
    _viewQuery_vis_0.reset([_VisualizeWinningsComponent_32_4]);
    ctx.vis = _viewQuery_vis_0.first;
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import6.ScoresComponent) && (8 == nodeIndex))) {
      return _ScoresComponent_8_4;
    }
    if ((identical(token, const import44.OpaqueToken('defaultPopupPositions')) && (8 == nodeIndex))) {
      return _defaultPopupPositions_8_5;
    }
    if ((identical(token, import4.Window) && (8 == nodeIndex))) {
      return _Window_8_6;
    }
    if ((identical(token, import39.DomService) && (8 == nodeIndex))) {
      return _DomService_8_7;
    }
    if ((identical(token, import7.AcxImperativeViewUtils) && (8 == nodeIndex))) {
      return _AcxImperativeViewUtils_8_8;
    }
    if ((identical(token, import4.Document) && (8 == nodeIndex))) {
      return _Document_8_9;
    }
    if ((identical(token, import8.DomRuler) && (8 == nodeIndex))) {
      return _DomRuler_8_10;
    }
    if ((identical(token, import45.ManagedZone) && (8 == nodeIndex))) {
      return _ManagedZone_8_11;
    }
    if ((identical(token, const import44.OpaqueToken('overlayContainerName')) && (8 == nodeIndex))) {
      return _overlayContainerName_8_12;
    }
    if ((identical(token, const import44.OpaqueToken('overlayContainerParent')) && (8 == nodeIndex))) {
      return _overlayContainerParent_8_13;
    }
    if ((identical(token, const import44.OpaqueToken('overlayContainer')) && (8 == nodeIndex))) {
      return _overlayContainer_8_14;
    }
    if ((identical(token, const import44.OpaqueToken('overlaySyncDom')) && (8 == nodeIndex))) {
      return _overlaySyncDom_8_15;
    }
    if ((identical(token, const import44.OpaqueToken('overlayRepositionLoop')) && (8 == nodeIndex))) {
      return _overlayRepositionLoop_8_16;
    }
    if ((identical(token, import10.OverlayStyleConfig) && (8 == nodeIndex))) {
      return _OverlayStyleConfig_8_17;
    }
    if ((identical(token, import11.ZIndexer) && (8 == nodeIndex))) {
      return _ZIndexer_8_18;
    }
    if ((identical(token, import12.OverlayDomRenderService) && (8 == nodeIndex))) {
      return _OverlayDomRenderService_8_19;
    }
    if ((identical(token, import13.OverlayService) && (8 == nodeIndex))) {
      return _OverlayService_8_20;
    }
    if ((identical(token, import14.DomPopupSourceFactory) && (8 == nodeIndex))) {
      return _DomPopupSourceFactory_8_21;
    }
    if ((identical(token, import16.MaterialProgressComponent) && (17 == nodeIndex))) {
      return _MaterialProgressComponent_17_4;
    }
    if ((identical(token, import24.StatsComponent) && (31 == nodeIndex))) {
      return _StatsComponent_31_4;
    }
    if ((identical(token, import26.VisualizeWinningsComponent) && (32 == nodeIndex))) {
      return _VisualizeWinningsComponent_32_4;
    }
    if ((identical(token, import28.SettingsComponent) && (36 == nodeIndex))) {
      return _SettingsComponent_36_4;
    }
    if ((identical(token, const import44.OpaqueToken('defaultPopupPositions')) && (36 == nodeIndex))) {
      return _defaultPopupPositions_36_5;
    }
    if ((identical(token, import4.Window) && (36 == nodeIndex))) {
      return _Window_36_6;
    }
    if ((identical(token, import39.DomService) && (36 == nodeIndex))) {
      return _DomService_36_7;
    }
    if ((identical(token, import7.AcxImperativeViewUtils) && (36 == nodeIndex))) {
      return _AcxImperativeViewUtils_36_8;
    }
    if ((identical(token, import4.Document) && (36 == nodeIndex))) {
      return _Document_36_9;
    }
    if ((identical(token, import8.DomRuler) && (36 == nodeIndex))) {
      return _DomRuler_36_10;
    }
    if ((identical(token, import45.ManagedZone) && (36 == nodeIndex))) {
      return _ManagedZone_36_11;
    }
    if ((identical(token, const import44.OpaqueToken('overlayContainerName')) && (36 == nodeIndex))) {
      return _overlayContainerName_36_12;
    }
    if ((identical(token, const import44.OpaqueToken('overlayContainerParent')) && (36 == nodeIndex))) {
      return _overlayContainerParent_36_13;
    }
    if ((identical(token, const import44.OpaqueToken('overlayContainer')) && (36 == nodeIndex))) {
      return _overlayContainer_36_14;
    }
    if ((identical(token, const import44.OpaqueToken('overlaySyncDom')) && (36 == nodeIndex))) {
      return _overlaySyncDom_36_15;
    }
    if ((identical(token, const import44.OpaqueToken('overlayRepositionLoop')) && (36 == nodeIndex))) {
      return _overlayRepositionLoop_36_16;
    }
    if ((identical(token, import10.OverlayStyleConfig) && (36 == nodeIndex))) {
      return _OverlayStyleConfig_36_17;
    }
    if ((identical(token, import11.ZIndexer) && (36 == nodeIndex))) {
      return _ZIndexer_36_18;
    }
    if ((identical(token, import12.OverlayDomRenderService) && (36 == nodeIndex))) {
      return _OverlayDomRenderService_36_19;
    }
    if ((identical(token, import13.OverlayService) && (36 == nodeIndex))) {
      return _OverlayService_36_20;
    }
    if ((identical(token, import14.DomPopupSourceFactory) && (36 == nodeIndex))) {
      return _DomPopupSourceFactory_36_21;
    }
    if ((identical(token, import30.HelpComponent) && (40 == nodeIndex))) {
      return _HelpComponent_40_4;
    }
    if ((identical(token, import30.HelpComponent) && (44 == nodeIndex))) {
      return _HelpComponent_44_4;
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
      _ScoresComponent_8_4.altCash = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_2 = _ctx.cash;
    if (!identical(_expr_2, currVal_2)) {
      _ScoresComponent_8_4.cash = currVal_2;
      _expr_2 = currVal_2;
    }
    changed = false;
    final currVal_5 = _ctx.progress;
    if (!identical(_expr_5, currVal_5)) {
      _MaterialProgressComponent_17_4.activeProgress = currVal_5;
      changed = true;
      _expr_5 = currVal_5;
    }
    if (changed) {
      _compView_17.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialFabComponent_20_4.raised = true;
      changed = true;
    }
    final currVal_6 = (_ctx.endOfDays || _ctx.inProgress);
    if (!identical(_expr_6, currVal_6)) {
      _MaterialFabComponent_20_4.disabled = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    if (changed) {
      _compView_20.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_21_4.icon = 'play_arrow';
      changed = true;
    }
    if (changed) {
      _compView_21.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialFabComponent_22_4.raised = true;
      changed = true;
    }
    final currVal_9 = (_ctx.endOfDays || _ctx.inProgress);
    if (!identical(_expr_9, currVal_9)) {
      _MaterialFabComponent_22_4.disabled = currVal_9;
      changed = true;
      _expr_9 = currVal_9;
    }
    if (changed) {
      _compView_22.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_23_4.icon = 'skip_next';
      changed = true;
    }
    if (changed) {
      _compView_23.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialFabComponent_24_4.raised = true;
      changed = true;
    }
    final bool currVal_12 = !_ctx.inProgress;
    if (!identical(_expr_12, currVal_12)) {
      _MaterialFabComponent_24_4.disabled = currVal_12;
      changed = true;
      _expr_12 = currVal_12;
    }
    if (changed) {
      _compView_24.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_25_4.icon = 'pause';
      changed = true;
    }
    if (changed) {
      _compView_25.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialFabComponent_26_4.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_26.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_27_4.icon = 'replay';
      changed = true;
    }
    if (changed) {
      _compView_27.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialToggleComponent_28_4.label = 'Go faster';
      changed = true;
    }
    final currVal_17 = _ctx.fastEnabled;
    if (!identical(_expr_17, currVal_17)) {
      _MaterialToggleComponent_28_4.checked = currVal_17;
      changed = true;
      _expr_17 = currVal_17;
    }
    if (changed) {
      _compView_28.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.winningsMap, null)) {
        (_StatsComponent_31_4.winningsMap = _ctx.winningsMap);
      }
    }
    if (firstCheck) {
      _VisualizeWinningsComponent_32_4.ngOnInit();
    }
    final currVal_20 = _ctx.settings;
    if (!identical(_expr_20, currVal_20)) {
      _SettingsComponent_36_4.settings = currVal_20;
      _expr_20 = currVal_20;
    }
    if (firstCheck) {
      _SettingsComponent_36_4.ngOnInit();
    }
    if (firstCheck) {
      (_HelpComponent_40_4.content = 'help');
    }
    if (firstCheck) {
      (_HelpComponent_44_4.content = 'about');
    }
    final currVal_0 = import34.interpolate1('Playing ', _ctx.settings.lottery.shortName, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_7.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_3 = (_ctx.currentDay ?? '');
    if (!identical(_expr_3, currVal_3)) {
      _text_12.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = import34.interpolate1('', _ctx.settings.years, ' years from now');
    if (!identical(_expr_4, currVal_4)) {
      _text_15.text = currVal_4;
      _expr_4 = currVal_4;
    }
    _compView_20.detectHostChanges(firstCheck);
    _compView_22.detectHostChanges(firstCheck);
    _compView_24.detectHostChanges(firstCheck);
    _compView_26.detectHostChanges(firstCheck);
    _compView_8.detectChanges();
    _compView_17.detectChanges();
    _compView_20.detectChanges();
    _compView_21.detectChanges();
    _compView_22.detectChanges();
    _compView_23.detectChanges();
    _compView_24.detectChanges();
    _compView_25.detectChanges();
    _compView_26.detectChanges();
    _compView_27.detectChanges();
    _compView_28.detectChanges();
    _compView_31.detectChanges();
    _compView_32.detectChanges();
    _compView_36.detectChanges();
    _compView_40.detectChanges();
    _compView_44.detectChanges();
    if (firstCheck) {
      _MaterialProgressComponent_17_4.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_8?.destroy();
    _compView_17?.destroy();
    _compView_20?.destroy();
    _compView_21?.destroy();
    _compView_22?.destroy();
    _compView_23?.destroy();
    _compView_24?.destroy();
    _compView_25?.destroy();
    _compView_26?.destroy();
    _compView_27?.destroy();
    _compView_28?.destroy();
    _compView_31?.destroy();
    _compView_32?.destroy();
    _compView_36?.destroy();
    _compView_40?.destroy();
    _compView_44?.destroy();
    _MaterialProgressComponent_17_4.ngOnDestroy();
  }

  void _handle_checkedChange_28_0($event) {
    ctx.fastEnabled = $event;
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import46.Settings _Settings_0_4;
  import2.AppComponent _AppComponent_0_5;
  List<dynamic> __defaultPopupPositions_0_6;
  dynamic __Window_0_7;
  dynamic __DomService_0_8;
  import7.AcxImperativeViewUtils __AcxImperativeViewUtils_0_9;
  dynamic __Document_0_10;
  import8.DomRuler __DomRuler_0_11;
  import9.Angular2ManagedZone __ManagedZone_0_12;
  dynamic __overlayContainerName_0_13;
  dynamic __overlayContainerParent_0_14;
  dynamic __overlayContainer_0_15;
  bool __overlaySyncDom_0_16;
  bool __overlayRepositionLoop_0_17;
  import10.OverlayStyleConfig __OverlayStyleConfig_0_18;
  import11.ZIndexer __ZIndexer_0_19;
  import12.OverlayDomRenderService __OverlayDomRenderService_0_20;
  import13.OverlayService __OverlayService_0_21;
  import14.DomPopupSourceFactory __DomPopupSourceFactory_0_22;
  _ViewAppComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import32.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<dynamic> get _defaultPopupPositions_0_6 {
    if ((this.__defaultPopupPositions_0_6 == null)) {
      (__defaultPopupPositions_0_6 = const [const import36.RelativePosition(animationOrigin: 'top center'), const import36.RelativePosition(animationOrigin: 'top right', originX: const import36.Alignment('End', 'flex-end')), const import36.RelativePosition(animationOrigin: 'top left', originX: const import36.Alignment('Start', 'flex-start')), const import36.RelativePosition(animationOrigin: 'bottom center', originY: const import36.Alignment('End', 'flex-end')), const import36.RelativePosition(animationOrigin: 'bottom right', originX: const import36.Alignment('End', 'flex-end'), originY: const import36.Alignment('End', 'flex-end')), const import36.RelativePosition(animationOrigin: 'bottom left', originX: const import36.Alignment('Start', 'flex-start'), originY: const import36.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_6;
  }

  dynamic get _Window_0_7 {
    if ((this.__Window_0_7 == null)) {
      (__Window_0_7 = import37.getWindow());
    }
    return this.__Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((this.__DomService_0_8 == null)) {
      (__DomService_0_8 = import38.createDomService(this.injectorGet(import39.DomService, this.viewData.parentIndex, null), this.injectorGet(import40.Disposer, this.viewData.parentIndex, null), this.injectorGet(import41.NgZone, this.viewData.parentIndex), this._Window_0_7));
    }
    return this.__DomService_0_8;
  }

  import7.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_9 {
    if ((this.__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = new import7.AcxImperativeViewUtils(this.injectorGet(import42.ComponentLoader, this.viewData.parentIndex), this._DomService_0_8));
    }
    return this.__AcxImperativeViewUtils_0_9;
  }

  dynamic get _Document_0_10 {
    if ((this.__Document_0_10 == null)) {
      (__Document_0_10 = import37.getDocument());
    }
    return this.__Document_0_10;
  }

  import8.DomRuler get _DomRuler_0_11 {
    if ((this.__DomRuler_0_11 == null)) {
      (__DomRuler_0_11 = new import8.DomRuler(this._Document_0_10, this._DomService_0_8));
    }
    return this.__DomRuler_0_11;
  }

  import9.Angular2ManagedZone get _ManagedZone_0_12 {
    if ((this.__ManagedZone_0_12 == null)) {
      (__ManagedZone_0_12 = new import9.Angular2ManagedZone(this.injectorGet(import41.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_12;
  }

  dynamic get _overlayContainerName_0_13 {
    if ((this.__overlayContainerName_0_13 == null)) {
      (__overlayContainerName_0_13 = import43.getDefaultContainerName(this.injectorGet(const import44.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_13;
  }

  dynamic get _overlayContainerParent_0_14 {
    if ((this.__overlayContainerParent_0_14 == null)) {
      (__overlayContainerParent_0_14 = import43.getOverlayContainerParent(this._Document_0_10, this.injectorGet(const import44.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_14;
  }

  dynamic get _overlayContainer_0_15 {
    if ((this.__overlayContainer_0_15 == null)) {
      (__overlayContainer_0_15 = import43.getDefaultContainer(this._overlayContainerName_0_13, this._overlayContainerParent_0_14, this.injectorGet(const import44.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
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
      (__overlayRepositionLoop_0_17 = false);
    }
    return this.__overlayRepositionLoop_0_17;
  }

  import10.OverlayStyleConfig get _OverlayStyleConfig_0_18 {
    if ((this.__OverlayStyleConfig_0_18 == null)) {
      (__OverlayStyleConfig_0_18 = new import10.OverlayStyleConfig(this._Document_0_10));
    }
    return this.__OverlayStyleConfig_0_18;
  }

  import11.ZIndexer get _ZIndexer_0_19 {
    if ((this.__ZIndexer_0_19 == null)) {
      (__ZIndexer_0_19 = new import11.ZIndexer());
    }
    return this.__ZIndexer_0_19;
  }

  import12.OverlayDomRenderService get _OverlayDomRenderService_0_20 {
    if ((this.__OverlayDomRenderService_0_20 == null)) {
      (__OverlayDomRenderService_0_20 = new import12.OverlayDomRenderService(this._OverlayStyleConfig_0_18, this._overlayContainer_0_15, this._overlayContainerName_0_13, this._DomRuler_0_11, this._DomService_0_8, this._AcxImperativeViewUtils_0_9, this._overlaySyncDom_0_16, this._overlayRepositionLoop_0_17, this._ZIndexer_0_19));
    }
    return this.__OverlayDomRenderService_0_20;
  }

  import13.OverlayService get _OverlayService_0_21 {
    if ((this.__OverlayService_0_21 == null)) {
      (__OverlayService_0_21 = new import13.OverlayService(this.injectorGet(import41.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_16, this._OverlayDomRenderService_0_20, this.injectorGet(import13.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_21;
  }

  import14.DomPopupSourceFactory get _DomPopupSourceFactory_0_22 {
    if ((this.__DomPopupSourceFactory_0_22 == null)) {
      (__DomPopupSourceFactory_0_22 = new import14.DomPopupSourceFactory(this._DomRuler_0_11));
    }
    return this.__DomPopupSourceFactory_0_22;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _Settings_0_4 = new import46.Settings();
    _AppComponent_0_5 = new import2.AppComponent(_Settings_0_4);
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.AppComponent>(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import46.Settings) && (0 == nodeIndex))) {
      return _Settings_0_4;
    }
    if ((identical(token, import2.AppComponent) && (0 == nodeIndex))) {
      return _AppComponent_0_5;
    }
    if ((identical(token, const import44.OpaqueToken('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_6;
    }
    if ((identical(token, import4.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import39.DomService) && (0 == nodeIndex))) {
      return _DomService_0_8;
    }
    if ((identical(token, import7.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_9;
    }
    if ((identical(token, import4.Document) && (0 == nodeIndex))) {
      return _Document_0_10;
    }
    if ((identical(token, import8.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_11;
    }
    if ((identical(token, import45.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_12;
    }
    if ((identical(token, const import44.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_13;
    }
    if ((identical(token, const import44.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_14;
    }
    if ((identical(token, const import44.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_15;
    }
    if ((identical(token, const import44.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_16;
    }
    if ((identical(token, const import44.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_17;
    }
    if ((identical(token, import10.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_18;
    }
    if ((identical(token, import11.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_19;
    }
    if ((identical(token, import12.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_20;
    }
    if ((identical(token, import13.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_21;
    }
    if ((identical(token, import14.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_22;
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
  _ref7.initReflector();
  _ngRef.registerComponent(
    AppComponent,
    AppComponentNgFactory,
  );
}