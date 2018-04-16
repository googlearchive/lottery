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
import 'package:angular_components/material_tab/material_tab_panel.template.dart' as import4;
import 'package:angular_components/material_tab/material_tab_panel.dart' as import5;
import 'package:angular_components/material_tab/material_tab.template.dart' as import6;
import 'package:angular_components/material_tab/material_tab.dart' as import7;
import 'src/scores/scores.template.dart' as import8;
import 'src/scores/scores.dart' as import9;
import 'dart:core';
import 'package:angular_components/laminate/enums/alignment.dart' as import11;
import 'package:angular_components/utils/angular/imperative_view/imperative_view.dart' as import12;
import 'package:angular_components/laminate/ruler/dom_ruler.dart' as import13;
import 'package:angular_components/utils/angular/managed_zone/angular_2.dart' as import14;
import 'package:angular_components/src/laminate/overlay/render/overlay_style_config.dart' as import15;
import 'package:angular_components/laminate/overlay/zindexer.dart' as import16;
import 'package:angular_components/src/laminate/overlay/render/overlay_dom_render_service.dart' as import17;
import 'package:angular_components/src/laminate/overlay/overlay_service.dart' as import18;
import 'package:angular_components/src/laminate/popup/dom_popup_source.dart' as import19;
import 'package:quiver/time.dart' as import20;
import 'package:angular_components/material_progress/material_progress.template.dart' as import21;
import 'package:angular_components/material_progress/material_progress.dart' as import22;
import 'package:angular_components/material_button/material_fab.template.dart' as import23;
import 'package:angular_components/material_button/material_fab.dart' as import24;
import 'package:angular_components/material_icon/material_icon.template.dart' as import25;
import 'package:angular_components/material_icon/material_icon.dart' as import26;
import 'package:angular_components/material_toggle/material_toggle.template.dart' as import27;
import 'package:angular_components/material_toggle/material_toggle.dart' as import28;
import 'src/stats/stats.template.dart' as import29;
import 'src/stats/stats.dart' as import30;
import 'src/visualize_winnings/visualize_winnings.template.dart' as import31;
import 'src/visualize_winnings/visualize_winnings.dart' as import32;
import 'src/settings/settings_component.template.dart' as import33;
import 'src/settings/settings_component.dart' as import34;
import 'src/help/help.template.dart' as import35;
import 'src/help/help.dart' as import36;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import38;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import40;
import 'package:angular/angular.dart';
import 'package:angular_components/utils/browser/window/module.dart' as import42;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import43;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import44;
import 'package:angular_components/utils/disposer/disposer.dart' as import45;
import 'package:angular/src/core/zone/ng_zone.dart' as import46;
import 'package:angular/src/core/linker/component_loader.dart' as import47;
import 'package:angular_components/laminate/overlay/module.dart' as import48;
import 'package:angular/src/core/di/opaque_token.dart' as import49;
import 'package:angular_components/utils/id_generator/id_generator.dart' as import50;
import 'package:angular_components/laminate/enums/alignment.dart' as import51;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import52;
import 'package:angular_components/content/deferred_content_aware.dart' as import53;
import 'src/settings/settings.dart' as import54;

const List<dynamic> styles$AppComponent = const [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  bool _query_vis_1_0_isDirty = true;
  import3.Element _el_0;
  import3.DivElement _el_2;
  import3.Element _el_3;
  import3.Element _el_5;
  import4.ViewMaterialTabPanelComponent0 _compView_5;
  import5.MaterialTabPanelComponent _MaterialTabPanelComponent_5_5;
  bool _query_Tab_5_0_isDirty = true;
  import3.Element _el_6;
  import6.ViewMaterialTabComponent0 _compView_6;
  import7.MaterialTabComponent _MaterialTabComponent_6_5;
  import7.MaterialTabComponent _Tab_6_6;
  import3.DivElement _el_7;
  import3.Element _el_8;
  import3.Text _text_10;
  import3.Element _el_11;
  import8.ViewScoresComponent0 _compView_11;
  import9.ScoresComponent _ScoresComponent_11_5;
  List<import11.RelativePosition> __defaultPopupPositions_11_6;
  dynamic __Window_11_7;
  dynamic __DomService_11_8;
  import12.AcxImperativeViewUtils __AcxImperativeViewUtils_11_9;
  dynamic __Document_11_10;
  import13.DomRuler __DomRuler_11_11;
  import14.Angular2ManagedZone __ManagedZone_11_12;
  dynamic __overlayContainerName_11_13;
  dynamic __overlayContainerParent_11_14;
  dynamic __overlayContainer_11_15;
  bool __overlaySyncDom_11_16;
  bool __overlayRepositionLoop_11_17;
  import15.OverlayStyleConfig __OverlayStyleConfig_11_18;
  import16.ZIndexer __ZIndexer_11_19;
  import17.OverlayDomRenderService __OverlayDomRenderService_11_20;
  import18.OverlayService __OverlayService_11_21;
  import19.DomPopupSourceFactory __DomPopupSourceFactory_11_22;
  import20.Clock __Clock_11_23;
  import3.DivElement _el_12;
  import3.DivElement _el_13;
  import3.Element _el_14;
  import3.Text _text_15;
  import3.DivElement _el_16;
  import3.Element _el_17;
  import3.Text _text_18;
  import3.DivElement _el_20;
  import3.Element _el_21;
  import21.ViewMaterialProgressComponent0 _compView_21;
  import22.MaterialProgressComponent _MaterialProgressComponent_21_5;
  import3.DivElement _el_22;
  import3.DivElement _el_23;
  import3.Element _el_24;
  import23.ViewMaterialFabComponent0 _compView_24;
  import24.MaterialFabComponent _MaterialFabComponent_24_5;
  import3.Element _el_25;
  import25.ViewMaterialIconComponent0 _compView_25;
  import26.MaterialIconComponent _MaterialIconComponent_25_5;
  import3.Element _el_26;
  import23.ViewMaterialFabComponent0 _compView_26;
  import24.MaterialFabComponent _MaterialFabComponent_26_5;
  import3.Element _el_27;
  import25.ViewMaterialIconComponent0 _compView_27;
  import26.MaterialIconComponent _MaterialIconComponent_27_5;
  import3.Element _el_28;
  import23.ViewMaterialFabComponent0 _compView_28;
  import24.MaterialFabComponent _MaterialFabComponent_28_5;
  import3.Element _el_29;
  import25.ViewMaterialIconComponent0 _compView_29;
  import26.MaterialIconComponent _MaterialIconComponent_29_5;
  import3.Element _el_30;
  import23.ViewMaterialFabComponent0 _compView_30;
  import24.MaterialFabComponent _MaterialFabComponent_30_5;
  import3.Element _el_31;
  import25.ViewMaterialIconComponent0 _compView_31;
  import26.MaterialIconComponent _MaterialIconComponent_31_5;
  import3.Element _el_32;
  import27.ViewMaterialToggleComponent0 _compView_32;
  import28.MaterialToggleComponent _MaterialToggleComponent_32_5;
  import3.DivElement _el_33;
  import3.DivElement _el_34;
  import3.Element _el_35;
  import29.ViewStatsComponent0 _compView_35;
  import30.StatsComponent _StatsComponent_35_5;
  import3.Element _el_36;
  import31.ViewVisualizeWinningsComponent0 _compView_36;
  import32.VisualizeWinningsComponent _VisualizeWinningsComponent_36_5;
  import3.DivElement _el_37;
  import3.Element _el_38;
  import3.Element _el_40;
  import33.ViewSettingsComponent0 _compView_40;
  import34.SettingsComponent _SettingsComponent_40_5;
  List<import11.RelativePosition> __defaultPopupPositions_40_6;
  dynamic __Window_40_7;
  dynamic __DomService_40_8;
  import12.AcxImperativeViewUtils __AcxImperativeViewUtils_40_9;
  dynamic __Document_40_10;
  import13.DomRuler __DomRuler_40_11;
  import14.Angular2ManagedZone __ManagedZone_40_12;
  dynamic __overlayContainerName_40_13;
  dynamic __overlayContainerParent_40_14;
  dynamic __overlayContainer_40_15;
  bool __overlaySyncDom_40_16;
  bool __overlayRepositionLoop_40_17;
  import15.OverlayStyleConfig __OverlayStyleConfig_40_18;
  import16.ZIndexer __ZIndexer_40_19;
  import17.OverlayDomRenderService __OverlayDomRenderService_40_20;
  import18.OverlayService __OverlayService_40_21;
  import19.DomPopupSourceFactory __DomPopupSourceFactory_40_22;
  import20.Clock __Clock_40_23;
  import3.Element _el_41;
  import6.ViewMaterialTabComponent0 _compView_41;
  import7.MaterialTabComponent _MaterialTabComponent_41_5;
  import7.MaterialTabComponent _Tab_41_6;
  import3.Element _el_42;
  import35.ViewHelpComponent0 _compView_42;
  import36.HelpComponent _HelpComponent_42_5;
  import3.Element _el_43;
  import6.ViewMaterialTabComponent0 _compView_43;
  import7.MaterialTabComponent _MaterialTabComponent_43_5;
  import7.MaterialTabComponent _Tab_43_6;
  import3.Element _el_44;
  import35.ViewHelpComponent0 _compView_44;
  import36.HelpComponent _HelpComponent_44_5;
  var _expr_1;
  int _expr_2;
  int _expr_3;
  var _expr_4;
  var _expr_5;
  int _expr_6;
  bool _expr_7;
  bool _expr_10;
  bool _expr_13;
  bool _expr_19;
  var _expr_21;
  static RenderComponentType _renderType;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import38.ViewType.component, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import3.document.createElement('lottery-simulator');
    _renderType ??= import40.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  List<import11.RelativePosition> get _defaultPopupPositions_11_6 {
    if ((this.__defaultPopupPositions_11_6 == null)) {
      (__defaultPopupPositions_11_6 = const [const import11.RelativePosition(animationOrigin: 'top center'), const import11.RelativePosition(animationOrigin: 'top right', originX: const import11.Alignment('End', 'flex-end')), const import11.RelativePosition(animationOrigin: 'top left', originX: const import11.Alignment('Start', 'flex-start')), const import11.RelativePosition(animationOrigin: 'bottom center', originY: const import11.Alignment('End', 'flex-end')), const import11.RelativePosition(animationOrigin: 'bottom right', originX: const import11.Alignment('End', 'flex-end'), originY: const import11.Alignment('End', 'flex-end')), const import11.RelativePosition(animationOrigin: 'bottom left', originX: const import11.Alignment('Start', 'flex-start'), originY: const import11.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_11_6;
  }

  dynamic get _Window_11_7 {
    if ((this.__Window_11_7 == null)) {
      (__Window_11_7 = import42.getWindow());
    }
    return this.__Window_11_7;
  }

  dynamic get _DomService_11_8 {
    if ((this.__DomService_11_8 == null)) {
      (__DomService_11_8 = import43.createDomService(this.parentView.injectorGet(import44.DomService, this.viewData.parentIndex, null), this.parentView.injectorGet(import45.Disposer, this.viewData.parentIndex, null), this.parentView.injectorGet(import46.NgZone, this.viewData.parentIndex), this._Window_11_7));
    }
    return this.__DomService_11_8;
  }

  import12.AcxImperativeViewUtils get _AcxImperativeViewUtils_11_9 {
    if ((this.__AcxImperativeViewUtils_11_9 == null)) {
      (__AcxImperativeViewUtils_11_9 = new import12.AcxImperativeViewUtils(this.parentView.injectorGet(import47.ComponentLoader, this.viewData.parentIndex), this._DomService_11_8));
    }
    return this.__AcxImperativeViewUtils_11_9;
  }

  dynamic get _Document_11_10 {
    if ((this.__Document_11_10 == null)) {
      (__Document_11_10 = import42.getDocument());
    }
    return this.__Document_11_10;
  }

  import13.DomRuler get _DomRuler_11_11 {
    if ((this.__DomRuler_11_11 == null)) {
      (__DomRuler_11_11 = new import13.DomRuler(this._Document_11_10, this._DomService_11_8));
    }
    return this.__DomRuler_11_11;
  }

  import14.Angular2ManagedZone get _ManagedZone_11_12 {
    if ((this.__ManagedZone_11_12 == null)) {
      (__ManagedZone_11_12 = new import14.Angular2ManagedZone(this.parentView.injectorGet(import46.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_11_12;
  }

  dynamic get _overlayContainerName_11_13 {
    if ((this.__overlayContainerName_11_13 == null)) {
      (__overlayContainerName_11_13 = import48.getDefaultContainerName(this.parentView.injectorGet(const import49.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_11_13;
  }

  dynamic get _overlayContainerParent_11_14 {
    if ((this.__overlayContainerParent_11_14 == null)) {
      (__overlayContainerParent_11_14 = import48.getOverlayContainerParent(this._Document_11_10, this.parentView.injectorGet(const import49.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_11_14;
  }

  dynamic get _overlayContainer_11_15 {
    if ((this.__overlayContainer_11_15 == null)) {
      (__overlayContainer_11_15 = import48.getDefaultContainer(this._overlayContainerName_11_13, this._overlayContainerParent_11_14, this.parentView.injectorGet(const import49.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_11_15;
  }

  bool get _overlaySyncDom_11_16 {
    if ((this.__overlaySyncDom_11_16 == null)) {
      (__overlaySyncDom_11_16 = true);
    }
    return this.__overlaySyncDom_11_16;
  }

  bool get _overlayRepositionLoop_11_17 {
    if ((this.__overlayRepositionLoop_11_17 == null)) {
      (__overlayRepositionLoop_11_17 = true);
    }
    return this.__overlayRepositionLoop_11_17;
  }

  import15.OverlayStyleConfig get _OverlayStyleConfig_11_18 {
    if ((this.__OverlayStyleConfig_11_18 == null)) {
      (__OverlayStyleConfig_11_18 = new import15.OverlayStyleConfig(this._Document_11_10));
    }
    return this.__OverlayStyleConfig_11_18;
  }

  import16.ZIndexer get _ZIndexer_11_19 {
    if ((this.__ZIndexer_11_19 == null)) {
      (__ZIndexer_11_19 = new import16.ZIndexer());
    }
    return this.__ZIndexer_11_19;
  }

  import17.OverlayDomRenderService get _OverlayDomRenderService_11_20 {
    if ((this.__OverlayDomRenderService_11_20 == null)) {
      (__OverlayDomRenderService_11_20 = new import17.OverlayDomRenderService(this._OverlayStyleConfig_11_18, this._overlayContainer_11_15, this._overlayContainerName_11_13, this._DomRuler_11_11, this._DomService_11_8, this._AcxImperativeViewUtils_11_9, this._overlaySyncDom_11_16, this._overlayRepositionLoop_11_17, this._ZIndexer_11_19));
    }
    return this.__OverlayDomRenderService_11_20;
  }

  import18.OverlayService get _OverlayService_11_21 {
    if ((this.__OverlayService_11_21 == null)) {
      (__OverlayService_11_21 = new import18.OverlayService(this.parentView.injectorGet(import46.NgZone, this.viewData.parentIndex), this._overlaySyncDom_11_16, this._OverlayDomRenderService_11_20, this.parentView.injectorGet(import18.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_11_21;
  }

  import19.DomPopupSourceFactory get _DomPopupSourceFactory_11_22 {
    if ((this.__DomPopupSourceFactory_11_22 == null)) {
      (__DomPopupSourceFactory_11_22 = new import19.DomPopupSourceFactory(this._DomRuler_11_11));
    }
    return this.__DomPopupSourceFactory_11_22;
  }

  import20.Clock get _Clock_11_23 {
    if ((this.__Clock_11_23 == null)) {
      (__Clock_11_23 = const import20.Clock());
    }
    return this.__Clock_11_23;
  }

  List<import11.RelativePosition> get _defaultPopupPositions_40_6 {
    if ((this.__defaultPopupPositions_40_6 == null)) {
      (__defaultPopupPositions_40_6 = const [const import11.RelativePosition(animationOrigin: 'top center'), const import11.RelativePosition(animationOrigin: 'top right', originX: const import11.Alignment('End', 'flex-end')), const import11.RelativePosition(animationOrigin: 'top left', originX: const import11.Alignment('Start', 'flex-start')), const import11.RelativePosition(animationOrigin: 'bottom center', originY: const import11.Alignment('End', 'flex-end')), const import11.RelativePosition(animationOrigin: 'bottom right', originX: const import11.Alignment('End', 'flex-end'), originY: const import11.Alignment('End', 'flex-end')), const import11.RelativePosition(animationOrigin: 'bottom left', originX: const import11.Alignment('Start', 'flex-start'), originY: const import11.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_40_6;
  }

  dynamic get _Window_40_7 {
    if ((this.__Window_40_7 == null)) {
      (__Window_40_7 = import42.getWindow());
    }
    return this.__Window_40_7;
  }

  dynamic get _DomService_40_8 {
    if ((this.__DomService_40_8 == null)) {
      (__DomService_40_8 = import43.createDomService(this.parentView.injectorGet(import44.DomService, this.viewData.parentIndex, null), this.parentView.injectorGet(import45.Disposer, this.viewData.parentIndex, null), this.parentView.injectorGet(import46.NgZone, this.viewData.parentIndex), this._Window_40_7));
    }
    return this.__DomService_40_8;
  }

  import12.AcxImperativeViewUtils get _AcxImperativeViewUtils_40_9 {
    if ((this.__AcxImperativeViewUtils_40_9 == null)) {
      (__AcxImperativeViewUtils_40_9 = new import12.AcxImperativeViewUtils(this.parentView.injectorGet(import47.ComponentLoader, this.viewData.parentIndex), this._DomService_40_8));
    }
    return this.__AcxImperativeViewUtils_40_9;
  }

  dynamic get _Document_40_10 {
    if ((this.__Document_40_10 == null)) {
      (__Document_40_10 = import42.getDocument());
    }
    return this.__Document_40_10;
  }

  import13.DomRuler get _DomRuler_40_11 {
    if ((this.__DomRuler_40_11 == null)) {
      (__DomRuler_40_11 = new import13.DomRuler(this._Document_40_10, this._DomService_40_8));
    }
    return this.__DomRuler_40_11;
  }

  import14.Angular2ManagedZone get _ManagedZone_40_12 {
    if ((this.__ManagedZone_40_12 == null)) {
      (__ManagedZone_40_12 = new import14.Angular2ManagedZone(this.parentView.injectorGet(import46.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_40_12;
  }

  dynamic get _overlayContainerName_40_13 {
    if ((this.__overlayContainerName_40_13 == null)) {
      (__overlayContainerName_40_13 = import48.getDefaultContainerName(this.parentView.injectorGet(const import49.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_40_13;
  }

  dynamic get _overlayContainerParent_40_14 {
    if ((this.__overlayContainerParent_40_14 == null)) {
      (__overlayContainerParent_40_14 = import48.getOverlayContainerParent(this._Document_40_10, this.parentView.injectorGet(const import49.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_40_14;
  }

  dynamic get _overlayContainer_40_15 {
    if ((this.__overlayContainer_40_15 == null)) {
      (__overlayContainer_40_15 = import48.getDefaultContainer(this._overlayContainerName_40_13, this._overlayContainerParent_40_14, this.parentView.injectorGet(const import49.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainer_40_15;
  }

  bool get _overlaySyncDom_40_16 {
    if ((this.__overlaySyncDom_40_16 == null)) {
      (__overlaySyncDom_40_16 = true);
    }
    return this.__overlaySyncDom_40_16;
  }

  bool get _overlayRepositionLoop_40_17 {
    if ((this.__overlayRepositionLoop_40_17 == null)) {
      (__overlayRepositionLoop_40_17 = true);
    }
    return this.__overlayRepositionLoop_40_17;
  }

  import15.OverlayStyleConfig get _OverlayStyleConfig_40_18 {
    if ((this.__OverlayStyleConfig_40_18 == null)) {
      (__OverlayStyleConfig_40_18 = new import15.OverlayStyleConfig(this._Document_40_10));
    }
    return this.__OverlayStyleConfig_40_18;
  }

  import16.ZIndexer get _ZIndexer_40_19 {
    if ((this.__ZIndexer_40_19 == null)) {
      (__ZIndexer_40_19 = new import16.ZIndexer());
    }
    return this.__ZIndexer_40_19;
  }

  import17.OverlayDomRenderService get _OverlayDomRenderService_40_20 {
    if ((this.__OverlayDomRenderService_40_20 == null)) {
      (__OverlayDomRenderService_40_20 = new import17.OverlayDomRenderService(this._OverlayStyleConfig_40_18, this._overlayContainer_40_15, this._overlayContainerName_40_13, this._DomRuler_40_11, this._DomService_40_8, this._AcxImperativeViewUtils_40_9, this._overlaySyncDom_40_16, this._overlayRepositionLoop_40_17, this._ZIndexer_40_19));
    }
    return this.__OverlayDomRenderService_40_20;
  }

  import18.OverlayService get _OverlayService_40_21 {
    if ((this.__OverlayService_40_21 == null)) {
      (__OverlayService_40_21 = new import18.OverlayService(this.parentView.injectorGet(import46.NgZone, this.viewData.parentIndex), this._overlaySyncDom_40_16, this._OverlayDomRenderService_40_20, this.parentView.injectorGet(import18.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_40_21;
  }

  import19.DomPopupSourceFactory get _DomPopupSourceFactory_40_22 {
    if ((this.__DomPopupSourceFactory_40_22 == null)) {
      (__DomPopupSourceFactory_40_22 = new import19.DomPopupSourceFactory(this._DomRuler_40_11));
    }
    return this.__DomPopupSourceFactory_40_22;
  }

  import20.Clock get _Clock_40_23 {
    if ((this.__Clock_40_23 == null)) {
      (__Clock_40_23 = const import20.Clock());
    }
    return this.__Clock_40_23;
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
    _compView_5 = new import4.ViewMaterialTabPanelComponent0(this, 5);
    _el_5 = _compView_5.rootEl;
    parentRenderNode.append(_el_5);
    addShimC(_el_5);
    _MaterialTabPanelComponent_5_5 = new import5.MaterialTabPanelComponent(_compView_5.ref);
    _compView_6 = new import6.ViewMaterialTabComponent0(this, 6);
    _el_6 = _compView_6.rootEl;
    createAttr(_el_6, 'label', 'Simulation');
    addShimC(_el_6);
    _MaterialTabComponent_6_5 = new import7.MaterialTabComponent(_el_6, parentView.injectorGet(import50.IdGenerator, viewData.parentIndex, null));
    _Tab_6_6 = _MaterialTabComponent_6_5;
    _el_7 = doc.createElement('div');
    addShimC(_el_7);
    _el_8 = createAndAppend(doc, 'h2', _el_7);
    addShimE(_el_8);
    import3.Text _text_9 = new import3.Text('Playing ');
    _el_8.append(_text_9);
    _text_10 = new import3.Text('');
    _el_8.append(_text_10);
    _compView_11 = new import8.ViewScoresComponent0(this, 11);
    _el_11 = _compView_11.rootEl;
    _el_7.append(_el_11);
    _el_11.className = 'scores-component';
    addShimC(_el_11);
    _ScoresComponent_11_5 = new import9.ScoresComponent();
    _compView_11.create(_ScoresComponent_11_5, []);
    _el_12 = createDivAndAppend(doc, _el_7);
    _el_12.className = 'days';
    addShimC(_el_12);
    _el_13 = createDivAndAppend(doc, _el_12);
    _el_13.className = 'days__start-day';
    addShimC(_el_13);
    _el_14 = createSpanAndAppend(doc, _el_13);
    addShimE(_el_14);
    _text_15 = new import3.Text('');
    _el_14.append(_text_15);
    _el_16 = createDivAndAppend(doc, _el_12);
    _el_16.className = 'days__end-day';
    addShimC(_el_16);
    _el_17 = createSpanAndAppend(doc, _el_16);
    addShimE(_el_17);
    _text_18 = new import3.Text('');
    _el_17.append(_text_18);
    import3.Text _text_19 = new import3.Text(' years from now');
    _el_17.append(_text_19);
    _el_20 = createDivAndAppend(doc, _el_12);
    _el_20.className = 'clear-floats';
    addShimC(_el_20);
    _compView_21 = new import21.ViewMaterialProgressComponent0(this, 21);
    _el_21 = _compView_21.rootEl;
    _el_7.append(_el_21);
    _el_21.className = 'life-progress';
    addShimC(_el_21);
    _MaterialProgressComponent_21_5 = new import22.MaterialProgressComponent(null, _compView_21.ref, _el_21);
    _compView_21.create(_MaterialProgressComponent_21_5, []);
    _el_22 = createDivAndAppend(doc, _el_7);
    _el_22.className = 'controls';
    addShimC(_el_22);
    _el_23 = createDivAndAppend(doc, _el_22);
    _el_23.className = 'controls__fabs';
    addShimC(_el_23);
    _compView_24 = new import23.ViewMaterialFabComponent0(this, 24);
    _el_24 = _compView_24.rootEl;
    _el_23.append(_el_24);
    createAttr(_el_24, 'aria-label', 'Play');
    createAttr(_el_24, 'id', 'play-button');
    createAttr(_el_24, 'raised', '');
    addShimC(_el_24);
    _MaterialFabComponent_24_5 = new import24.MaterialFabComponent(_el_24, _compView_24.ref);
    _compView_25 = new import25.ViewMaterialIconComponent0(this, 25);
    _el_25 = _compView_25.rootEl;
    createAttr(_el_25, 'icon', 'play_arrow');
    addShimC(_el_25);
    _MaterialIconComponent_25_5 = new import26.MaterialIconComponent(_el_25);
    _compView_25.create(_MaterialIconComponent_25_5, []);
    _compView_24.create(_MaterialFabComponent_24_5, [
      [_el_25]
    ]);
    _compView_26 = new import23.ViewMaterialFabComponent0(this, 26);
    _el_26 = _compView_26.rootEl;
    _el_23.append(_el_26);
    createAttr(_el_26, 'aria-label', 'Step');
    createAttr(_el_26, 'mini', '');
    createAttr(_el_26, 'raised', '');
    addShimC(_el_26);
    _MaterialFabComponent_26_5 = new import24.MaterialFabComponent(_el_26, _compView_26.ref);
    _compView_27 = new import25.ViewMaterialIconComponent0(this, 27);
    _el_27 = _compView_27.rootEl;
    createAttr(_el_27, 'icon', 'skip_next');
    addShimC(_el_27);
    _MaterialIconComponent_27_5 = new import26.MaterialIconComponent(_el_27);
    _compView_27.create(_MaterialIconComponent_27_5, []);
    _compView_26.create(_MaterialFabComponent_26_5, [
      [_el_27]
    ]);
    _compView_28 = new import23.ViewMaterialFabComponent0(this, 28);
    _el_28 = _compView_28.rootEl;
    _el_23.append(_el_28);
    createAttr(_el_28, 'aria-label', 'Pause');
    createAttr(_el_28, 'mini', '');
    createAttr(_el_28, 'raised', '');
    addShimC(_el_28);
    _MaterialFabComponent_28_5 = new import24.MaterialFabComponent(_el_28, _compView_28.ref);
    _compView_29 = new import25.ViewMaterialIconComponent0(this, 29);
    _el_29 = _compView_29.rootEl;
    createAttr(_el_29, 'icon', 'pause');
    addShimC(_el_29);
    _MaterialIconComponent_29_5 = new import26.MaterialIconComponent(_el_29);
    _compView_29.create(_MaterialIconComponent_29_5, []);
    _compView_28.create(_MaterialFabComponent_28_5, [
      [_el_29]
    ]);
    _compView_30 = new import23.ViewMaterialFabComponent0(this, 30);
    _el_30 = _compView_30.rootEl;
    _el_23.append(_el_30);
    createAttr(_el_30, 'aria-label', 'Reset');
    createAttr(_el_30, 'mini', '');
    createAttr(_el_30, 'raised', '');
    addShimC(_el_30);
    _MaterialFabComponent_30_5 = new import24.MaterialFabComponent(_el_30, _compView_30.ref);
    _compView_31 = new import25.ViewMaterialIconComponent0(this, 31);
    _el_31 = _compView_31.rootEl;
    createAttr(_el_31, 'icon', 'replay');
    addShimC(_el_31);
    _MaterialIconComponent_31_5 = new import26.MaterialIconComponent(_el_31);
    _compView_31.create(_MaterialIconComponent_31_5, []);
    _compView_30.create(_MaterialFabComponent_30_5, [
      [_el_31]
    ]);
    _compView_32 = new import27.ViewMaterialToggleComponent0(this, 32);
    _el_32 = _compView_32.rootEl;
    _el_22.append(_el_32);
    _el_32.className = 'controls__faster-button themeable';
    createAttr(_el_32, 'label', 'Go faster');
    addShimC(_el_32);
    _MaterialToggleComponent_32_5 = new import28.MaterialToggleComponent();
    _compView_32.create(_MaterialToggleComponent_32_5, [const []]);
    _el_33 = createDivAndAppend(doc, _el_22);
    _el_33.className = 'clear-floats';
    addShimC(_el_33);
    _el_34 = createDivAndAppend(doc, _el_7);
    _el_34.className = 'history';
    addShimC(_el_34);
    _compView_35 = new import29.ViewStatsComponent0(this, 35);
    _el_35 = _compView_35.rootEl;
    _el_34.append(_el_35);
    _el_35.className = 'history__stats';
    addShimC(_el_35);
    _StatsComponent_35_5 = new import30.StatsComponent();
    _compView_35.create(_StatsComponent_35_5, []);
    _compView_36 = new import31.ViewVisualizeWinningsComponent0(this, 36);
    _el_36 = _compView_36.rootEl;
    _el_34.append(_el_36);
    _el_36.className = 'history__vis';
    addShimC(_el_36);
    _VisualizeWinningsComponent_36_5 = new import32.VisualizeWinningsComponent();
    _compView_36.create(_VisualizeWinningsComponent_36_5, []);
    _el_37 = createDivAndAppend(doc, _el_34);
    _el_37.className = 'clear-floats';
    addShimC(_el_37);
    _el_38 = createAndAppend(doc, 'h2', _el_7);
    addShimE(_el_38);
    import3.Text _text_39 = new import3.Text('Settings');
    _el_38.append(_text_39);
    _compView_40 = new import33.ViewSettingsComponent0(this, 40);
    _el_40 = _compView_40.rootEl;
    _el_7.append(_el_40);
    addShimC(_el_40);
    _SettingsComponent_40_5 = new import34.SettingsComponent();
    _compView_40.create(_SettingsComponent_40_5, []);
    _compView_6.create(_MaterialTabComponent_6_5, [
      [_el_7]
    ]);
    _compView_41 = new import6.ViewMaterialTabComponent0(this, 41);
    _el_41 = _compView_41.rootEl;
    createAttr(_el_41, 'label', 'Help');
    addShimC(_el_41);
    _MaterialTabComponent_41_5 = new import7.MaterialTabComponent(_el_41, parentView.injectorGet(import50.IdGenerator, viewData.parentIndex, null));
    _Tab_41_6 = _MaterialTabComponent_41_5;
    _compView_42 = new import35.ViewHelpComponent0(this, 42);
    _el_42 = _compView_42.rootEl;
    createAttr(_el_42, 'content', 'help');
    addShimC(_el_42);
    _HelpComponent_42_5 = new import36.HelpComponent();
    _compView_42.create(_HelpComponent_42_5, []);
    _compView_41.create(_MaterialTabComponent_41_5, [
      [_el_42]
    ]);
    _compView_43 = new import6.ViewMaterialTabComponent0(this, 43);
    _el_43 = _compView_43.rootEl;
    createAttr(_el_43, 'label', 'About');
    addShimC(_el_43);
    _MaterialTabComponent_43_5 = new import7.MaterialTabComponent(_el_43, parentView.injectorGet(import50.IdGenerator, viewData.parentIndex, null));
    _Tab_43_6 = _MaterialTabComponent_43_5;
    _compView_44 = new import35.ViewHelpComponent0(this, 44);
    _el_44 = _compView_44.rootEl;
    createAttr(_el_44, 'content', 'about');
    addShimC(_el_44);
    _HelpComponent_44_5 = new import36.HelpComponent();
    _compView_44.create(_HelpComponent_44_5, []);
    _compView_43.create(_MaterialTabComponent_43_5, [
      [_el_44]
    ]);
    _MaterialTabPanelComponent_5_5.tabs = [_Tab_6_6, _Tab_41_6, _Tab_43_6];
    _compView_5.create(_MaterialTabPanelComponent_5_5, [
      [_el_6, _el_41, _el_43]
    ]);
    final subscription_0 = _MaterialFabComponent_24_5.trigger.listen(eventHandler0(ctx.play));
    final subscription_1 = _MaterialFabComponent_26_5.trigger.listen(eventHandler0(ctx.step));
    final subscription_2 = _MaterialFabComponent_28_5.trigger.listen(eventHandler0(ctx.pause));
    final subscription_3 = _MaterialFabComponent_30_5.trigger.listen(eventHandler0(ctx.reset));
    final subscription_4 = _MaterialToggleComponent_32_5.onChecked.listen(eventHandler1(_handle_checkedChange_32_0));
    final subscription_5 = _SettingsComponent_40_5.settingsChanged.listen(eventHandler0(ctx.updateFromSettings));
    ctx.vis = _VisualizeWinningsComponent_36_5;
    init(const [], [subscription_0, subscription_1, subscription_2, subscription_3, subscription_4, subscription_5]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, const import49.OpaqueToken<List<import51.RelativePosition>>('defaultPopupPositions')) && (11 == nodeIndex))) {
      return _defaultPopupPositions_11_6;
    }
    if ((identical(token, import3.Window) && (11 == nodeIndex))) {
      return _Window_11_7;
    }
    if ((identical(token, import44.DomService) && (11 == nodeIndex))) {
      return _DomService_11_8;
    }
    if ((identical(token, import12.AcxImperativeViewUtils) && (11 == nodeIndex))) {
      return _AcxImperativeViewUtils_11_9;
    }
    if ((identical(token, import3.Document) && (11 == nodeIndex))) {
      return _Document_11_10;
    }
    if ((identical(token, import13.DomRuler) && (11 == nodeIndex))) {
      return _DomRuler_11_11;
    }
    if ((identical(token, import52.ManagedZone) && (11 == nodeIndex))) {
      return _ManagedZone_11_12;
    }
    if ((identical(token, const import49.OpaqueToken('overlayContainerName')) && (11 == nodeIndex))) {
      return _overlayContainerName_11_13;
    }
    if ((identical(token, const import49.OpaqueToken('overlayContainerParent')) && (11 == nodeIndex))) {
      return _overlayContainerParent_11_14;
    }
    if ((identical(token, const import49.OpaqueToken('overlayContainer')) && (11 == nodeIndex))) {
      return _overlayContainer_11_15;
    }
    if ((identical(token, const import49.OpaqueToken('overlaySyncDom')) && (11 == nodeIndex))) {
      return _overlaySyncDom_11_16;
    }
    if ((identical(token, const import49.OpaqueToken('overlayRepositionLoop')) && (11 == nodeIndex))) {
      return _overlayRepositionLoop_11_17;
    }
    if ((identical(token, import15.OverlayStyleConfig) && (11 == nodeIndex))) {
      return _OverlayStyleConfig_11_18;
    }
    if ((identical(token, import16.ZIndexer) && (11 == nodeIndex))) {
      return _ZIndexer_11_19;
    }
    if ((identical(token, import17.OverlayDomRenderService) && (11 == nodeIndex))) {
      return _OverlayDomRenderService_11_20;
    }
    if ((identical(token, import18.OverlayService) && (11 == nodeIndex))) {
      return _OverlayService_11_21;
    }
    if ((identical(token, import19.DomPopupSourceFactory) && (11 == nodeIndex))) {
      return _DomPopupSourceFactory_11_22;
    }
    if (((identical(token, import20.Clock) || identical(token, const import49.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (11 == nodeIndex))) {
      return _Clock_11_23;
    }
    if ((identical(token, const import49.OpaqueToken<List<import51.RelativePosition>>('defaultPopupPositions')) && (40 == nodeIndex))) {
      return _defaultPopupPositions_40_6;
    }
    if ((identical(token, import3.Window) && (40 == nodeIndex))) {
      return _Window_40_7;
    }
    if ((identical(token, import44.DomService) && (40 == nodeIndex))) {
      return _DomService_40_8;
    }
    if ((identical(token, import12.AcxImperativeViewUtils) && (40 == nodeIndex))) {
      return _AcxImperativeViewUtils_40_9;
    }
    if ((identical(token, import3.Document) && (40 == nodeIndex))) {
      return _Document_40_10;
    }
    if ((identical(token, import13.DomRuler) && (40 == nodeIndex))) {
      return _DomRuler_40_11;
    }
    if ((identical(token, import52.ManagedZone) && (40 == nodeIndex))) {
      return _ManagedZone_40_12;
    }
    if ((identical(token, const import49.OpaqueToken('overlayContainerName')) && (40 == nodeIndex))) {
      return _overlayContainerName_40_13;
    }
    if ((identical(token, const import49.OpaqueToken('overlayContainerParent')) && (40 == nodeIndex))) {
      return _overlayContainerParent_40_14;
    }
    if ((identical(token, const import49.OpaqueToken('overlayContainer')) && (40 == nodeIndex))) {
      return _overlayContainer_40_15;
    }
    if ((identical(token, const import49.OpaqueToken('overlaySyncDom')) && (40 == nodeIndex))) {
      return _overlaySyncDom_40_16;
    }
    if ((identical(token, const import49.OpaqueToken('overlayRepositionLoop')) && (40 == nodeIndex))) {
      return _overlayRepositionLoop_40_17;
    }
    if ((identical(token, import15.OverlayStyleConfig) && (40 == nodeIndex))) {
      return _OverlayStyleConfig_40_18;
    }
    if ((identical(token, import16.ZIndexer) && (40 == nodeIndex))) {
      return _ZIndexer_40_19;
    }
    if ((identical(token, import17.OverlayDomRenderService) && (40 == nodeIndex))) {
      return _OverlayDomRenderService_40_20;
    }
    if ((identical(token, import18.OverlayService) && (40 == nodeIndex))) {
      return _OverlayService_40_21;
    }
    if ((identical(token, import19.DomPopupSourceFactory) && (40 == nodeIndex))) {
      return _DomPopupSourceFactory_40_22;
    }
    if (((identical(token, import20.Clock) || identical(token, const import49.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (40 == nodeIndex))) {
      return _Clock_40_23;
    }
    if ((identical(token, import53.DeferredContentAware) && ((6 <= nodeIndex) && (nodeIndex <= 40)))) {
      return _MaterialTabComponent_6_5;
    }
    if ((identical(token, import7.Tab) && ((6 <= nodeIndex) && (nodeIndex <= 40)))) {
      return _Tab_6_6;
    }
    if ((identical(token, import53.DeferredContentAware) && ((41 <= nodeIndex) && (nodeIndex <= 42)))) {
      return _MaterialTabComponent_41_5;
    }
    if ((identical(token, import7.Tab) && ((41 <= nodeIndex) && (nodeIndex <= 42)))) {
      return _Tab_41_6;
    }
    if ((identical(token, import53.DeferredContentAware) && ((43 <= nodeIndex) && (nodeIndex <= 44)))) {
      return _MaterialTabComponent_43_5;
    }
    if ((identical(token, import7.Tab) && ((43 <= nodeIndex) && (nodeIndex <= 44)))) {
      return _Tab_43_6;
    }
    return notFoundResult;
  }

  @override
  void detectChangesInternal() {
    final import2.AppComponent _ctx = ctx;
    bool changed = false;
    bool firstCheck = (this.cdState == 0);
    changed = false;
    if (changed) {
      _compView_5.markAsCheckOnce();
    }
    if (firstCheck) {
      (_MaterialTabComponent_6_5.label = 'Simulation');
    }
    final currVal_2 = _ctx.altCash;
    if (!identical(_expr_2, currVal_2)) {
      _ScoresComponent_11_5.altCash = currVal_2;
      _expr_2 = currVal_2;
    }
    final currVal_3 = _ctx.cash;
    if (!identical(_expr_3, currVal_3)) {
      _ScoresComponent_11_5.cash = currVal_3;
      _expr_3 = currVal_3;
    }
    changed = false;
    final currVal_6 = _ctx.progress;
    if (!identical(_expr_6, currVal_6)) {
      _MaterialProgressComponent_21_5.activeProgress = currVal_6;
      changed = true;
      _expr_6 = currVal_6;
    }
    if (changed) {
      _compView_21.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialFabComponent_24_5.raised = true;
      changed = true;
    }
    final currVal_7 = (_ctx.endOfDays || _ctx.inProgress);
    if (!identical(_expr_7, currVal_7)) {
      _MaterialFabComponent_24_5.disabled = currVal_7;
      changed = true;
      _expr_7 = currVal_7;
    }
    if (changed) {
      _compView_24.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_25_5.icon = 'play_arrow';
      changed = true;
    }
    if (changed) {
      _compView_25.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialFabComponent_26_5.raised = true;
      changed = true;
    }
    final currVal_10 = (_ctx.endOfDays || _ctx.inProgress);
    if (!identical(_expr_10, currVal_10)) {
      _MaterialFabComponent_26_5.disabled = currVal_10;
      changed = true;
      _expr_10 = currVal_10;
    }
    if (changed) {
      _compView_26.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_27_5.icon = 'skip_next';
      changed = true;
    }
    if (changed) {
      _compView_27.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialFabComponent_28_5.raised = true;
      changed = true;
    }
    final bool currVal_13 = !_ctx.inProgress;
    if (!identical(_expr_13, currVal_13)) {
      _MaterialFabComponent_28_5.disabled = currVal_13;
      changed = true;
      _expr_13 = currVal_13;
    }
    if (changed) {
      _compView_28.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_29_5.icon = 'pause';
      changed = true;
    }
    if (changed) {
      _compView_29.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialFabComponent_30_5.raised = true;
      changed = true;
    }
    if (changed) {
      _compView_30.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_31_5.icon = 'replay';
      changed = true;
    }
    if (changed) {
      _compView_31.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialToggleComponent_32_5.label = 'Go faster';
      changed = true;
    }
    final currVal_19 = _ctx.fastEnabled;
    if (!identical(_expr_19, currVal_19)) {
      _MaterialToggleComponent_32_5.checked = currVal_19;
      changed = true;
      _expr_19 = currVal_19;
    }
    if (changed) {
      _compView_32.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.winningsMap, null)) {
        (_StatsComponent_35_5.winningsMap = _ctx.winningsMap);
      }
    }
    if (firstCheck) {
      _VisualizeWinningsComponent_36_5.ngOnInit();
    }
    final currVal_21 = _ctx.settings;
    if (!identical(_expr_21, currVal_21)) {
      _SettingsComponent_40_5.settings = currVal_21;
      _expr_21 = currVal_21;
    }
    if (firstCheck) {
      _SettingsComponent_40_5.ngOnInit();
    }
    if (firstCheck) {
      (_MaterialTabComponent_41_5.label = 'Help');
    }
    if (firstCheck) {
      (_HelpComponent_42_5.content = 'help');
    }
    if (firstCheck) {
      (_MaterialTabComponent_43_5.label = 'About');
    }
    if (firstCheck) {
      (_HelpComponent_44_5.content = 'about');
    }
    if (firstCheck) {
      _MaterialTabPanelComponent_5_5.ngAfterContentInit();
    }
    _compView_6.detectHostChanges(firstCheck);
    final currVal_1 = import40.interpolate0(_ctx.settings.lottery.shortName);
    if (!identical(_expr_1, currVal_1)) {
      _text_10.text = currVal_1;
      _expr_1 = currVal_1;
    }
    final currVal_4 = (_ctx.currentDay ?? '');
    if (!identical(_expr_4, currVal_4)) {
      _text_15.text = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_5 = import40.interpolate0(_ctx.settings.years);
    if (!identical(_expr_5, currVal_5)) {
      _text_18.text = currVal_5;
      _expr_5 = currVal_5;
    }
    _compView_24.detectHostChanges(firstCheck);
    _compView_26.detectHostChanges(firstCheck);
    _compView_28.detectHostChanges(firstCheck);
    _compView_30.detectHostChanges(firstCheck);
    _compView_41.detectHostChanges(firstCheck);
    _compView_43.detectHostChanges(firstCheck);
    _compView_5.detectChanges();
    _compView_6.detectChanges();
    _compView_11.detectChanges();
    _compView_21.detectChanges();
    _compView_24.detectChanges();
    _compView_25.detectChanges();
    _compView_26.detectChanges();
    _compView_27.detectChanges();
    _compView_28.detectChanges();
    _compView_29.detectChanges();
    _compView_30.detectChanges();
    _compView_31.detectChanges();
    _compView_32.detectChanges();
    _compView_35.detectChanges();
    _compView_36.detectChanges();
    _compView_40.detectChanges();
    _compView_41.detectChanges();
    _compView_42.detectChanges();
    _compView_43.detectChanges();
    _compView_44.detectChanges();
    if (firstCheck) {
      _MaterialProgressComponent_21_5.ngAfterViewInit();
    }
    if (firstCheck) {
      _MaterialToggleComponent_32_5.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_5?.destroy();
    _compView_6?.destroy();
    _compView_11?.destroy();
    _compView_21?.destroy();
    _compView_24?.destroy();
    _compView_25?.destroy();
    _compView_26?.destroy();
    _compView_27?.destroy();
    _compView_28?.destroy();
    _compView_29?.destroy();
    _compView_30?.destroy();
    _compView_31?.destroy();
    _compView_32?.destroy();
    _compView_35?.destroy();
    _compView_36?.destroy();
    _compView_40?.destroy();
    _compView_41?.destroy();
    _compView_42?.destroy();
    _compView_43?.destroy();
    _compView_44?.destroy();
    _MaterialProgressComponent_21_5.ngOnDestroy();
  }

  void _handle_checkedChange_32_0($event) {
    ctx.fastEnabled = $event;
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, int parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import54.Settings _Settings_0_5;
  import2.AppComponent _AppComponent_0_6;
  List<import11.RelativePosition> __defaultPopupPositions_0_7;
  dynamic __Window_0_8;
  dynamic __DomService_0_9;
  import12.AcxImperativeViewUtils __AcxImperativeViewUtils_0_10;
  dynamic __Document_0_11;
  import13.DomRuler __DomRuler_0_12;
  import14.Angular2ManagedZone __ManagedZone_0_13;
  dynamic __overlayContainerName_0_14;
  dynamic __overlayContainerParent_0_15;
  dynamic __overlayContainer_0_16;
  bool __overlaySyncDom_0_17;
  bool __overlayRepositionLoop_0_18;
  import15.OverlayStyleConfig __OverlayStyleConfig_0_19;
  import16.ZIndexer __ZIndexer_0_20;
  import17.OverlayDomRenderService __OverlayDomRenderService_0_21;
  import18.OverlayService __OverlayService_0_22;
  import19.DomPopupSourceFactory __DomPopupSourceFactory_0_23;
  import20.Clock __Clock_0_24;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import38.ViewType.host, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<import11.RelativePosition> get _defaultPopupPositions_0_7 {
    if ((this.__defaultPopupPositions_0_7 == null)) {
      (__defaultPopupPositions_0_7 = const [const import11.RelativePosition(animationOrigin: 'top center'), const import11.RelativePosition(animationOrigin: 'top right', originX: const import11.Alignment('End', 'flex-end')), const import11.RelativePosition(animationOrigin: 'top left', originX: const import11.Alignment('Start', 'flex-start')), const import11.RelativePosition(animationOrigin: 'bottom center', originY: const import11.Alignment('End', 'flex-end')), const import11.RelativePosition(animationOrigin: 'bottom right', originX: const import11.Alignment('End', 'flex-end'), originY: const import11.Alignment('End', 'flex-end')), const import11.RelativePosition(animationOrigin: 'bottom left', originX: const import11.Alignment('Start', 'flex-start'), originY: const import11.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_7;
  }

  dynamic get _Window_0_8 {
    if ((this.__Window_0_8 == null)) {
      (__Window_0_8 = import42.getWindow());
    }
    return this.__Window_0_8;
  }

  dynamic get _DomService_0_9 {
    if ((this.__DomService_0_9 == null)) {
      (__DomService_0_9 = import43.createDomService(this.injectorGet(import44.DomService, this.viewData.parentIndex, null), this.injectorGet(import45.Disposer, this.viewData.parentIndex, null), this.injectorGet(import46.NgZone, this.viewData.parentIndex), this._Window_0_8));
    }
    return this.__DomService_0_9;
  }

  import12.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_10 {
    if ((this.__AcxImperativeViewUtils_0_10 == null)) {
      (__AcxImperativeViewUtils_0_10 = new import12.AcxImperativeViewUtils(this.injectorGet(import47.ComponentLoader, this.viewData.parentIndex), this._DomService_0_9));
    }
    return this.__AcxImperativeViewUtils_0_10;
  }

  dynamic get _Document_0_11 {
    if ((this.__Document_0_11 == null)) {
      (__Document_0_11 = import42.getDocument());
    }
    return this.__Document_0_11;
  }

  import13.DomRuler get _DomRuler_0_12 {
    if ((this.__DomRuler_0_12 == null)) {
      (__DomRuler_0_12 = new import13.DomRuler(this._Document_0_11, this._DomService_0_9));
    }
    return this.__DomRuler_0_12;
  }

  import14.Angular2ManagedZone get _ManagedZone_0_13 {
    if ((this.__ManagedZone_0_13 == null)) {
      (__ManagedZone_0_13 = new import14.Angular2ManagedZone(this.injectorGet(import46.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_13;
  }

  dynamic get _overlayContainerName_0_14 {
    if ((this.__overlayContainerName_0_14 == null)) {
      (__overlayContainerName_0_14 = import48.getDefaultContainerName(this.injectorGet(const import49.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_14;
  }

  dynamic get _overlayContainerParent_0_15 {
    if ((this.__overlayContainerParent_0_15 == null)) {
      (__overlayContainerParent_0_15 = import48.getOverlayContainerParent(this._Document_0_11, this.injectorGet(const import49.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_15;
  }

  dynamic get _overlayContainer_0_16 {
    if ((this.__overlayContainer_0_16 == null)) {
      (__overlayContainer_0_16 = import48.getDefaultContainer(this._overlayContainerName_0_14, this._overlayContainerParent_0_15, this.injectorGet(const import49.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
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

  import15.OverlayStyleConfig get _OverlayStyleConfig_0_19 {
    if ((this.__OverlayStyleConfig_0_19 == null)) {
      (__OverlayStyleConfig_0_19 = new import15.OverlayStyleConfig(this._Document_0_11));
    }
    return this.__OverlayStyleConfig_0_19;
  }

  import16.ZIndexer get _ZIndexer_0_20 {
    if ((this.__ZIndexer_0_20 == null)) {
      (__ZIndexer_0_20 = new import16.ZIndexer());
    }
    return this.__ZIndexer_0_20;
  }

  import17.OverlayDomRenderService get _OverlayDomRenderService_0_21 {
    if ((this.__OverlayDomRenderService_0_21 == null)) {
      (__OverlayDomRenderService_0_21 = new import17.OverlayDomRenderService(this._OverlayStyleConfig_0_19, this._overlayContainer_0_16, this._overlayContainerName_0_14, this._DomRuler_0_12, this._DomService_0_9, this._AcxImperativeViewUtils_0_10, this._overlaySyncDom_0_17, this._overlayRepositionLoop_0_18, this._ZIndexer_0_20));
    }
    return this.__OverlayDomRenderService_0_21;
  }

  import18.OverlayService get _OverlayService_0_22 {
    if ((this.__OverlayService_0_22 == null)) {
      (__OverlayService_0_22 = new import18.OverlayService(this.injectorGet(import46.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_17, this._OverlayDomRenderService_0_21, this.injectorGet(import18.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_0_22;
  }

  import19.DomPopupSourceFactory get _DomPopupSourceFactory_0_23 {
    if ((this.__DomPopupSourceFactory_0_23 == null)) {
      (__DomPopupSourceFactory_0_23 = new import19.DomPopupSourceFactory(this._DomRuler_0_12));
    }
    return this.__DomPopupSourceFactory_0_23;
  }

  import20.Clock get _Clock_0_24 {
    if ((this.__Clock_0_24 == null)) {
      (__Clock_0_24 = const import20.Clock());
    }
    return this.__Clock_0_24;
  }

  @override
  ComponentRef build() {
    _compView_0 = new ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _Settings_0_5 = new import54.Settings();
    _AppComponent_0_6 = new import2.AppComponent(_Settings_0_5);
    _compView_0.create(_AppComponent_0_6, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.AppComponent>(0, this, rootEl, _AppComponent_0_6);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import54.Settings) && (0 == nodeIndex))) {
      return _Settings_0_5;
    }
    if ((identical(token, const import49.OpaqueToken<List<import51.RelativePosition>>('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_7;
    }
    if ((identical(token, import3.Window) && (0 == nodeIndex))) {
      return _Window_0_8;
    }
    if ((identical(token, import44.DomService) && (0 == nodeIndex))) {
      return _DomService_0_9;
    }
    if ((identical(token, import12.AcxImperativeViewUtils) && (0 == nodeIndex))) {
      return _AcxImperativeViewUtils_0_10;
    }
    if ((identical(token, import3.Document) && (0 == nodeIndex))) {
      return _Document_0_11;
    }
    if ((identical(token, import13.DomRuler) && (0 == nodeIndex))) {
      return _DomRuler_0_12;
    }
    if ((identical(token, import52.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_13;
    }
    if ((identical(token, const import49.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_14;
    }
    if ((identical(token, const import49.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_15;
    }
    if ((identical(token, const import49.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_16;
    }
    if ((identical(token, const import49.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_17;
    }
    if ((identical(token, const import49.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
      return _overlayRepositionLoop_0_18;
    }
    if ((identical(token, import15.OverlayStyleConfig) && (0 == nodeIndex))) {
      return _OverlayStyleConfig_0_19;
    }
    if ((identical(token, import16.ZIndexer) && (0 == nodeIndex))) {
      return _ZIndexer_0_20;
    }
    if ((identical(token, import17.OverlayDomRenderService) && (0 == nodeIndex))) {
      return _OverlayDomRenderService_0_21;
    }
    if ((identical(token, import18.OverlayService) && (0 == nodeIndex))) {
      return _OverlayService_0_22;
    }
    if ((identical(token, import19.DomPopupSourceFactory) && (0 == nodeIndex))) {
      return _DomPopupSourceFactory_0_23;
    }
    if (((identical(token, import20.Clock) || identical(token, const import49.OpaqueToken('third_party.dart_src.acx.material_datepicker.datepickerClock'))) && (0 == nodeIndex))) {
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
