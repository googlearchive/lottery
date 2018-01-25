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
import 'package:angular_components/material_icon/material_icon.template.dart' as import17;
import 'package:angular_components/material_icon/material_icon.dart' as import18;
import 'src/stats/stats.template.dart' as import19;
import 'src/stats/stats.dart' as import20;
import 'src/visualize_winnings/visualize_winnings.template.dart' as import21;
import 'src/visualize_winnings/visualize_winnings.dart' as import22;
import 'src/settings/settings_component.template.dart' as import23;
import 'src/settings/settings_component.dart' as import24;
import 'src/help/help.template.dart' as import25;
import 'src/help/help.dart' as import26;
import 'package:angular/src/core/render/api.dart';
import 'package:angular/src/core/linker/view_type.dart' as import28;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import30;
import 'package:angular/angular.dart';
import 'package:angular_components/laminate/enums/alignment.dart' as import32;
import 'package:angular_components/utils/browser/window/module.dart' as import33;
import 'package:angular_components/utils/browser/dom_service/angular_2.dart' as import34;
import 'package:angular_components/utils/browser/dom_service/dom_service.dart' as import35;
import 'package:angular_components/utils/disposer/disposer.dart' as import36;
import 'package:angular/src/core/zone/ng_zone.dart' as import37;
import 'package:angular/src/core/linker/component_loader.dart' as import38;
import 'package:angular_components/laminate/overlay/module.dart' as import39;
import 'package:angular/src/core/di/opaque_token.dart' as import40;
import 'package:angular_components/src/utils/angular/managed_zone/managed_zone.dart' as import41;
import 'src/settings/settings.dart' as import42;

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
  import4.ButtonElement _el_20;
  import4.Element _el_21;
  import17.ViewMaterialIconComponent0 _compView_21;
  import18.MaterialIconComponent _MaterialIconComponent_21_4;
  import4.ButtonElement _el_22;
  import4.Element _el_23;
  import17.ViewMaterialIconComponent0 _compView_23;
  import18.MaterialIconComponent _MaterialIconComponent_23_4;
  import4.ButtonElement _el_24;
  import4.Element _el_25;
  import17.ViewMaterialIconComponent0 _compView_25;
  import18.MaterialIconComponent _MaterialIconComponent_25_4;
  import4.ButtonElement _el_26;
  import4.Element _el_27;
  import17.ViewMaterialIconComponent0 _compView_27;
  import18.MaterialIconComponent _MaterialIconComponent_27_4;
  import4.DivElement _el_28;
  import4.Element _el_29;
  import4.InputElement _el_30;
  import4.DivElement _el_32;
  import4.DivElement _el_33;
  import4.Element _el_34;
  import19.ViewStatsComponent0 _compView_34;
  import20.StatsComponent _StatsComponent_34_4;
  import4.Element _el_35;
  import21.ViewVisualizeWinningsComponent0 _compView_35;
  import22.VisualizeWinningsComponent _VisualizeWinningsComponent_35_4;
  import4.DivElement _el_36;
  import4.Element _el_37;
  import4.Element _el_39;
  import23.ViewSettingsComponent0 _compView_39;
  import24.SettingsComponent _SettingsComponent_39_4;
  import4.DivElement _el_40;
  import4.Element _el_41;
  import4.Element _el_43;
  import25.ViewHelpComponent0 _compView_43;
  import26.HelpComponent _HelpComponent_43_4;
  import4.DivElement _el_44;
  import4.Element _el_45;
  import4.Element _el_47;
  import25.ViewHelpComponent0 _compView_47;
  import26.HelpComponent _HelpComponent_47_4;
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
  ViewAppComponent0(AppView<dynamic> parentView, num parentIndex) : super(import28.ViewType.COMPONENT, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    rootEl = import4.document.createElement('lottery-simulator');
    _renderType ??= import30.appViewUtils.createRenderType('', ViewEncapsulation.Emulated, styles$AppComponent);
    setupComponentType(_renderType);
  }
  List<dynamic> get _defaultPopupPositions_8_5 {
    if ((this.__defaultPopupPositions_8_5 == null)) {
      (__defaultPopupPositions_8_5 = const [const import32.RelativePosition(animationOrigin: 'top center'), const import32.RelativePosition(animationOrigin: 'top right', originX: const import32.Alignment('End', 'flex-end')), const import32.RelativePosition(animationOrigin: 'top left', originX: const import32.Alignment('Start', 'flex-start')), const import32.RelativePosition(animationOrigin: 'bottom center', originY: const import32.Alignment('End', 'flex-end')), const import32.RelativePosition(animationOrigin: 'bottom right', originX: const import32.Alignment('End', 'flex-end'), originY: const import32.Alignment('End', 'flex-end')), const import32.RelativePosition(animationOrigin: 'bottom left', originX: const import32.Alignment('Start', 'flex-start'), originY: const import32.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_8_5;
  }

  dynamic get _Window_8_6 {
    if ((this.__Window_8_6 == null)) {
      (__Window_8_6 = import33.getWindow());
    }
    return this.__Window_8_6;
  }

  dynamic get _DomService_8_7 {
    if ((this.__DomService_8_7 == null)) {
      (__DomService_8_7 = import34.createDomService(this.parentView.injectorGet(import35.DomService, this.viewData.parentIndex, null), this.parentView.injectorGet(import36.Disposer, this.viewData.parentIndex, null), this.parentView.injectorGet(import37.NgZone, this.viewData.parentIndex), this._Window_8_6));
    }
    return this.__DomService_8_7;
  }

  import7.AcxImperativeViewUtils get _AcxImperativeViewUtils_8_8 {
    if ((this.__AcxImperativeViewUtils_8_8 == null)) {
      (__AcxImperativeViewUtils_8_8 = new import7.AcxImperativeViewUtils(this.parentView.injectorGet(import38.ComponentLoader, this.viewData.parentIndex), this._DomService_8_7));
    }
    return this.__AcxImperativeViewUtils_8_8;
  }

  dynamic get _Document_8_9 {
    if ((this.__Document_8_9 == null)) {
      (__Document_8_9 = import33.getDocument());
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
      (__ManagedZone_8_11 = new import9.Angular2ManagedZone(this.parentView.injectorGet(import37.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_8_11;
  }

  dynamic get _overlayContainerName_8_12 {
    if ((this.__overlayContainerName_8_12 == null)) {
      (__overlayContainerName_8_12 = import39.getDefaultContainerName(this.parentView.injectorGet(const import40.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_8_12;
  }

  dynamic get _overlayContainerParent_8_13 {
    if ((this.__overlayContainerParent_8_13 == null)) {
      (__overlayContainerParent_8_13 = import39.getOverlayContainerParent(this._Document_8_9, this.parentView.injectorGet(const import40.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_8_13;
  }

  dynamic get _overlayContainer_8_14 {
    if ((this.__overlayContainer_8_14 == null)) {
      (__overlayContainer_8_14 = import39.getDefaultContainer(this._overlayContainerName_8_12, this._overlayContainerParent_8_13, this.parentView.injectorGet(const import40.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
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
      (__OverlayService_8_20 = new import13.OverlayService(this.parentView.injectorGet(import37.NgZone, this.viewData.parentIndex), this._overlaySyncDom_8_15, this._OverlayDomRenderService_8_19, this.parentView.injectorGet(import13.OverlayService, this.viewData.parentIndex, null)));
    }
    return this.__OverlayService_8_20;
  }

  import14.DomPopupSourceFactory get _DomPopupSourceFactory_8_21 {
    if ((this.__DomPopupSourceFactory_8_21 == null)) {
      (__DomPopupSourceFactory_8_21 = new import14.DomPopupSourceFactory(this._DomRuler_8_10));
    }
    return this.__DomPopupSourceFactory_8_21;
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
    _el_20 = createAndAppend(doc, 'button', _el_19);
    createAttr(_el_20, 'aria-label', 'Play');
    createAttr(_el_20, 'id', 'play-button');
    addShimC(_el_20);
    _compView_21 = new import17.ViewMaterialIconComponent0(this, 21);
    _el_21 = _compView_21.rootEl;
    _el_20.append(_el_21);
    createAttr(_el_21, 'icon', 'play_arrow');
    addShimC(_el_21);
    _MaterialIconComponent_21_4 = new import18.MaterialIconComponent(_el_21);
    _compView_21.create(_MaterialIconComponent_21_4, []);
    _el_22 = createAndAppend(doc, 'button', _el_19);
    createAttr(_el_22, 'aria-label', 'Step');
    addShimC(_el_22);
    _compView_23 = new import17.ViewMaterialIconComponent0(this, 23);
    _el_23 = _compView_23.rootEl;
    _el_22.append(_el_23);
    createAttr(_el_23, 'icon', 'skip_next');
    addShimC(_el_23);
    _MaterialIconComponent_23_4 = new import18.MaterialIconComponent(_el_23);
    _compView_23.create(_MaterialIconComponent_23_4, []);
    _el_24 = createAndAppend(doc, 'button', _el_19);
    createAttr(_el_24, 'aria-label', 'Pause');
    addShimC(_el_24);
    _compView_25 = new import17.ViewMaterialIconComponent0(this, 25);
    _el_25 = _compView_25.rootEl;
    _el_24.append(_el_25);
    createAttr(_el_25, 'icon', 'pause');
    addShimC(_el_25);
    _MaterialIconComponent_25_4 = new import18.MaterialIconComponent(_el_25);
    _compView_25.create(_MaterialIconComponent_25_4, []);
    _el_26 = createAndAppend(doc, 'button', _el_19);
    createAttr(_el_26, 'aria-label', 'Reset');
    addShimC(_el_26);
    _compView_27 = new import17.ViewMaterialIconComponent0(this, 27);
    _el_27 = _compView_27.rootEl;
    _el_26.append(_el_27);
    createAttr(_el_27, 'icon', 'replay');
    addShimC(_el_27);
    _MaterialIconComponent_27_4 = new import18.MaterialIconComponent(_el_27);
    _compView_27.create(_MaterialIconComponent_27_4, []);
    _el_28 = createDivAndAppend(doc, _el_18);
    _el_28.className = 'controls__faster-button';
    addShimC(_el_28);
    _el_29 = createAndAppend(doc, 'label', _el_28);
    addShimE(_el_29);
    _el_30 = createAndAppend(doc, 'input', _el_29);
    createAttr(_el_30, 'type', 'checkbox');
    addShimC(_el_30);
    import4.Text _text_31 = new import4.Text('Go faster');
    _el_29.append(_text_31);
    _el_32 = createDivAndAppend(doc, _el_18);
    _el_32.className = 'clear-floats';
    addShimC(_el_32);
    _el_33 = createDivAndAppend(doc, _el_5);
    _el_33.className = 'history';
    addShimC(_el_33);
    _compView_34 = new import19.ViewStatsComponent0(this, 34);
    _el_34 = _compView_34.rootEl;
    _el_33.append(_el_34);
    _el_34.className = 'history__stats';
    addShimC(_el_34);
    _StatsComponent_34_4 = new import20.StatsComponent();
    _compView_34.create(_StatsComponent_34_4, []);
    _compView_35 = new import21.ViewVisualizeWinningsComponent0(this, 35);
    _el_35 = _compView_35.rootEl;
    _el_33.append(_el_35);
    _el_35.className = 'history__vis';
    addShimC(_el_35);
    _VisualizeWinningsComponent_35_4 = new import22.VisualizeWinningsComponent();
    _compView_35.create(_VisualizeWinningsComponent_35_4, []);
    _el_36 = createDivAndAppend(doc, _el_33);
    _el_36.className = 'clear-floats';
    addShimC(_el_36);
    _el_37 = createAndAppend(doc, 'h2', _el_5);
    addShimE(_el_37);
    import4.Text _text_38 = new import4.Text('Settings');
    _el_37.append(_text_38);
    _compView_39 = new import23.ViewSettingsComponent0(this, 39);
    _el_39 = _compView_39.rootEl;
    _el_5.append(_el_39);
    addShimC(_el_39);
    _SettingsComponent_39_4 = new import24.SettingsComponent();
    _compView_39.create(_SettingsComponent_39_4, []);
    _el_40 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_40);
    _el_41 = createAndAppend(doc, 'h2', _el_40);
    addShimE(_el_41);
    import4.Text _text_42 = new import4.Text('Help');
    _el_41.append(_text_42);
    _compView_43 = new import25.ViewHelpComponent0(this, 43);
    _el_43 = _compView_43.rootEl;
    _el_40.append(_el_43);
    createAttr(_el_43, 'content', 'help');
    addShimC(_el_43);
    _HelpComponent_43_4 = new import26.HelpComponent();
    _compView_43.create(_HelpComponent_43_4, []);
    _el_44 = createDivAndAppend(doc, parentRenderNode);
    addShimC(_el_44);
    _el_45 = createAndAppend(doc, 'h2', _el_44);
    addShimE(_el_45);
    import4.Text _text_46 = new import4.Text('About');
    _el_45.append(_text_46);
    _compView_47 = new import25.ViewHelpComponent0(this, 47);
    _el_47 = _compView_47.rootEl;
    _el_44.append(_el_47);
    createAttr(_el_47, 'content', 'about');
    addShimC(_el_47);
    _HelpComponent_47_4 = new import26.HelpComponent();
    _compView_47.create(_HelpComponent_47_4, []);
    _el_20.addEventListener('click', eventHandler0(ctx.play));
    _el_22.addEventListener('click', eventHandler0(ctx.step));
    _el_24.addEventListener('click', eventHandler0(ctx.pause));
    _el_26.addEventListener('click', eventHandler0(ctx.reset));
    _el_30.addEventListener('change', eventHandler1(_handle_change_30_0));
    final subscription_0 = _SettingsComponent_39_4.settingsChanged.listen(eventHandler0(ctx.updateFromSettings));
    _viewQuery_vis_0.reset([_VisualizeWinningsComponent_35_4]);
    ctx.vis = _viewQuery_vis_0.first;
    init(const [], [subscription_0]);
    return null;
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import6.ScoresComponent) && (8 == nodeIndex))) {
      return _ScoresComponent_8_4;
    }
    if ((identical(token, const import40.OpaqueToken('defaultPopupPositions')) && (8 == nodeIndex))) {
      return _defaultPopupPositions_8_5;
    }
    if ((identical(token, import4.Window) && (8 == nodeIndex))) {
      return _Window_8_6;
    }
    if ((identical(token, import35.DomService) && (8 == nodeIndex))) {
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
    if ((identical(token, import41.ManagedZone) && (8 == nodeIndex))) {
      return _ManagedZone_8_11;
    }
    if ((identical(token, const import40.OpaqueToken('overlayContainerName')) && (8 == nodeIndex))) {
      return _overlayContainerName_8_12;
    }
    if ((identical(token, const import40.OpaqueToken('overlayContainerParent')) && (8 == nodeIndex))) {
      return _overlayContainerParent_8_13;
    }
    if ((identical(token, const import40.OpaqueToken('overlayContainer')) && (8 == nodeIndex))) {
      return _overlayContainer_8_14;
    }
    if ((identical(token, const import40.OpaqueToken('overlaySyncDom')) && (8 == nodeIndex))) {
      return _overlaySyncDom_8_15;
    }
    if ((identical(token, const import40.OpaqueToken('overlayRepositionLoop')) && (8 == nodeIndex))) {
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
    if ((identical(token, import20.StatsComponent) && (34 == nodeIndex))) {
      return _StatsComponent_34_4;
    }
    if ((identical(token, import22.VisualizeWinningsComponent) && (35 == nodeIndex))) {
      return _VisualizeWinningsComponent_35_4;
    }
    if ((identical(token, import24.SettingsComponent) && (39 == nodeIndex))) {
      return _SettingsComponent_39_4;
    }
    if ((identical(token, import26.HelpComponent) && (43 == nodeIndex))) {
      return _HelpComponent_43_4;
    }
    if ((identical(token, import26.HelpComponent) && (47 == nodeIndex))) {
      return _HelpComponent_47_4;
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
      _MaterialIconComponent_21_4.icon = 'play_arrow';
      changed = true;
    }
    if (changed) {
      _compView_21.markAsCheckOnce();
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
      _MaterialIconComponent_25_4.icon = 'pause';
      changed = true;
    }
    if (changed) {
      _compView_25.markAsCheckOnce();
    }
    changed = false;
    if (firstCheck) {
      _MaterialIconComponent_27_4.icon = 'replay';
      changed = true;
    }
    if (changed) {
      _compView_27.markAsCheckOnce();
    }
    if (firstCheck) {
      if (!identical(_ctx.winningsMap, null)) {
        (_StatsComponent_34_4.winningsMap = _ctx.winningsMap);
      }
    }
    if (firstCheck) {
      _VisualizeWinningsComponent_35_4.ngOnInit();
    }
    final currVal_14 = _ctx.settings;
    if (!identical(_expr_14, currVal_14)) {
      _SettingsComponent_39_4.settings = currVal_14;
      _expr_14 = currVal_14;
    }
    if (firstCheck) {
      _SettingsComponent_39_4.ngOnInit();
    }
    if (firstCheck) {
      (_HelpComponent_43_4.content = 'help');
    }
    if (firstCheck) {
      (_HelpComponent_47_4.content = 'about');
    }
    final currVal_0 = import30.interpolate1('Playing ', _ctx.settings.lottery.shortName, '');
    if (!identical(_expr_0, currVal_0)) {
      _text_7.text = currVal_0;
      _expr_0 = currVal_0;
    }
    final currVal_3 = (_ctx.currentDay ?? '');
    if (!identical(_expr_3, currVal_3)) {
      _text_12.text = currVal_3;
      _expr_3 = currVal_3;
    }
    final currVal_4 = import30.interpolate1('', _ctx.settings.years, ' years from now');
    if (!identical(_expr_4, currVal_4)) {
      _text_15.text = currVal_4;
      _expr_4 = currVal_4;
    }
    final currVal_6 = (_ctx.endOfDays || _ctx.inProgress);
    if (!identical(_expr_6, currVal_6)) {
      setProp(_el_20, 'disabled', currVal_6);
      _expr_6 = currVal_6;
    }
    final currVal_8 = (_ctx.endOfDays || _ctx.inProgress);
    if (!identical(_expr_8, currVal_8)) {
      setProp(_el_22, 'disabled', currVal_8);
      _expr_8 = currVal_8;
    }
    final bool currVal_10 = !_ctx.inProgress;
    if (!identical(_expr_10, currVal_10)) {
      setProp(_el_24, 'disabled', currVal_10);
      _expr_10 = currVal_10;
    }
    _compView_8.detectChanges();
    _compView_17.detectChanges();
    _compView_21.detectChanges();
    _compView_23.detectChanges();
    _compView_25.detectChanges();
    _compView_27.detectChanges();
    _compView_34.detectChanges();
    _compView_35.detectChanges();
    _compView_39.detectChanges();
    _compView_43.detectChanges();
    _compView_47.detectChanges();
    if (firstCheck) {
      _MaterialProgressComponent_17_4.ngAfterViewInit();
    }
  }

  @override
  void destroyInternal() {
    _compView_8?.destroy();
    _compView_17?.destroy();
    _compView_21?.destroy();
    _compView_23?.destroy();
    _compView_25?.destroy();
    _compView_27?.destroy();
    _compView_34?.destroy();
    _compView_35?.destroy();
    _compView_39?.destroy();
    _compView_43?.destroy();
    _compView_47?.destroy();
    _MaterialProgressComponent_17_4.ngOnDestroy();
  }

  void _handle_change_30_0($event) {
    final local_fastCheckbox = _el_30;
    ctx.fastEnabled = local_fastCheckbox.checked;
  }
}

AppView<import2.AppComponent> viewFactory_AppComponent0(AppView<dynamic> parentView, num parentIndex) {
  return new ViewAppComponent0(parentView, parentIndex);
}

const List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<dynamic> {
  ViewAppComponent0 _compView_0;
  import42.Settings _Settings_0_4;
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
  _ViewAppComponentHost0(AppView<dynamic> parentView, num parentIndex) : super(import28.ViewType.HOST, {}, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  List<dynamic> get _defaultPopupPositions_0_6 {
    if ((this.__defaultPopupPositions_0_6 == null)) {
      (__defaultPopupPositions_0_6 = const [const import32.RelativePosition(animationOrigin: 'top center'), const import32.RelativePosition(animationOrigin: 'top right', originX: const import32.Alignment('End', 'flex-end')), const import32.RelativePosition(animationOrigin: 'top left', originX: const import32.Alignment('Start', 'flex-start')), const import32.RelativePosition(animationOrigin: 'bottom center', originY: const import32.Alignment('End', 'flex-end')), const import32.RelativePosition(animationOrigin: 'bottom right', originX: const import32.Alignment('End', 'flex-end'), originY: const import32.Alignment('End', 'flex-end')), const import32.RelativePosition(animationOrigin: 'bottom left', originX: const import32.Alignment('Start', 'flex-start'), originY: const import32.Alignment('End', 'flex-end'))]);
    }
    return this.__defaultPopupPositions_0_6;
  }

  dynamic get _Window_0_7 {
    if ((this.__Window_0_7 == null)) {
      (__Window_0_7 = import33.getWindow());
    }
    return this.__Window_0_7;
  }

  dynamic get _DomService_0_8 {
    if ((this.__DomService_0_8 == null)) {
      (__DomService_0_8 = import34.createDomService(this.injectorGet(import35.DomService, this.viewData.parentIndex, null), this.injectorGet(import36.Disposer, this.viewData.parentIndex, null), this.injectorGet(import37.NgZone, this.viewData.parentIndex), this._Window_0_7));
    }
    return this.__DomService_0_8;
  }

  import7.AcxImperativeViewUtils get _AcxImperativeViewUtils_0_9 {
    if ((this.__AcxImperativeViewUtils_0_9 == null)) {
      (__AcxImperativeViewUtils_0_9 = new import7.AcxImperativeViewUtils(this.injectorGet(import38.ComponentLoader, this.viewData.parentIndex), this._DomService_0_8));
    }
    return this.__AcxImperativeViewUtils_0_9;
  }

  dynamic get _Document_0_10 {
    if ((this.__Document_0_10 == null)) {
      (__Document_0_10 = import33.getDocument());
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
      (__ManagedZone_0_12 = new import9.Angular2ManagedZone(this.injectorGet(import37.NgZone, this.viewData.parentIndex)));
    }
    return this.__ManagedZone_0_12;
  }

  dynamic get _overlayContainerName_0_13 {
    if ((this.__overlayContainerName_0_13 == null)) {
      (__overlayContainerName_0_13 = import39.getDefaultContainerName(this.injectorGet(const import40.OpaqueToken('overlayContainerName'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerName_0_13;
  }

  dynamic get _overlayContainerParent_0_14 {
    if ((this.__overlayContainerParent_0_14 == null)) {
      (__overlayContainerParent_0_14 = import39.getOverlayContainerParent(this._Document_0_10, this.injectorGet(const import40.OpaqueToken('overlayContainerParent'), this.viewData.parentIndex, null)));
    }
    return this.__overlayContainerParent_0_14;
  }

  dynamic get _overlayContainer_0_15 {
    if ((this.__overlayContainer_0_15 == null)) {
      (__overlayContainer_0_15 = import39.getDefaultContainer(this._overlayContainerName_0_13, this._overlayContainerParent_0_14, this.injectorGet(const import40.OpaqueToken('overlayContainer'), this.viewData.parentIndex, null)));
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
      (__OverlayService_0_21 = new import13.OverlayService(this.injectorGet(import37.NgZone, this.viewData.parentIndex), this._overlaySyncDom_0_16, this._OverlayDomRenderService_0_20, this.injectorGet(import13.OverlayService, this.viewData.parentIndex, null)));
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
    _Settings_0_4 = new import42.Settings();
    _AppComponent_0_5 = new import2.AppComponent(_Settings_0_4);
    _compView_0.create(_AppComponent_0_5, projectableNodes);
    init0(rootEl);
    return new ComponentRef<import2.AppComponent>(0, this, rootEl, _AppComponent_0_5);
  }

  @override
  dynamic injectorGetInternal(dynamic token, int nodeIndex, dynamic notFoundResult) {
    if ((identical(token, import42.Settings) && (0 == nodeIndex))) {
      return _Settings_0_4;
    }
    if ((identical(token, import2.AppComponent) && (0 == nodeIndex))) {
      return _AppComponent_0_5;
    }
    if ((identical(token, const import40.OpaqueToken('defaultPopupPositions')) && (0 == nodeIndex))) {
      return _defaultPopupPositions_0_6;
    }
    if ((identical(token, import4.Window) && (0 == nodeIndex))) {
      return _Window_0_7;
    }
    if ((identical(token, import35.DomService) && (0 == nodeIndex))) {
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
    if ((identical(token, import41.ManagedZone) && (0 == nodeIndex))) {
      return _ManagedZone_0_12;
    }
    if ((identical(token, const import40.OpaqueToken('overlayContainerName')) && (0 == nodeIndex))) {
      return _overlayContainerName_0_13;
    }
    if ((identical(token, const import40.OpaqueToken('overlayContainerParent')) && (0 == nodeIndex))) {
      return _overlayContainerParent_0_14;
    }
    if ((identical(token, const import40.OpaqueToken('overlayContainer')) && (0 == nodeIndex))) {
      return _overlayContainer_0_15;
    }
    if ((identical(token, const import40.OpaqueToken('overlaySyncDom')) && (0 == nodeIndex))) {
      return _overlaySyncDom_0_16;
    }
    if ((identical(token, const import40.OpaqueToken('overlayRepositionLoop')) && (0 == nodeIndex))) {
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
