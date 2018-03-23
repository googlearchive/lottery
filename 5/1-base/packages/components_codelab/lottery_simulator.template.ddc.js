define(['dart_sdk', 'packages/components_codelab/lottery_simulator.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/components_codelab/src/scores/scores.template', 'packages/components_codelab/src/scores/scores', 'packages/components_codelab/src/stats/stats.template', 'packages/components_codelab/src/stats/stats', 'packages/components_codelab/src/visualize_winnings/visualize_winnings.template', 'packages/components_codelab/src/visualize_winnings/visualize_winnings', 'packages/components_codelab/src/settings/settings_component.template', 'packages/components_codelab/src/settings/settings_component', 'packages/components_codelab/src/help/help.template', 'packages/components_codelab/src/help/help', 'packages/components_codelab/lottery_simulator', 'packages/components_codelab/src/settings/settings', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/components_codelab/src/settings/settings.template'], function(dart_sdk, lottery_simulator$46css, view_type, constants, view, app_view_utils, app_view, scores, scores$, stats, stats$, visualize_winnings, visualize_winnings$, settings_component, settings_component$, help, help$, lottery_simulator, settings, reflector, angular, settings$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const lottery_simulator$46css$46shim = lottery_simulator$46css.lottery_simulator$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__scores__scores$46template = scores.src__scores__scores$46template;
  const src__scores__scores = scores$.src__scores__scores;
  const src__stats__stats$46template = stats.src__stats__stats$46template;
  const src__stats__stats = stats$.src__stats__stats;
  const src__visualize_winnings__visualize_winnings$46template = visualize_winnings.src__visualize_winnings__visualize_winnings$46template;
  const src__visualize_winnings__visualize_winnings = visualize_winnings$.src__visualize_winnings__visualize_winnings;
  const src__settings__settings_component$46template = settings_component.src__settings__settings_component$46template;
  const src__settings__settings_component = settings_component$.src__settings__settings_component;
  const src__help__help$46template = help.src__help__help$46template;
  const src__help__help = help$.src__help__help;
  const lottery_simulator$ = lottery_simulator.lottery_simulator;
  const src__settings__settings = settings.src__settings__settings;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const src__settings__settings$46template = settings$.src__settings__settings$46template;
  const _root = Object.create(null);
  const lottery_simulator$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(src__core__linker__app_view.AppView$(lottery_simulator$.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(lottery_simulator$.AppComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(lottery_simulator$.AppComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(lottery_simulator$46template, {
    /*lottery_simulator$46template.styles$AppComponent*/get styles$AppComponent() {
      return dart.constList([lottery_simulator$46css$46shim.styles], dart.dynamic);
    }
  });
  const _query_vis_1_0_isDirty = Symbol('_query_vis_1_0_isDirty');
  const _el_0 = Symbol('_el_0');
  const _el_2 = Symbol('_el_2');
  const _el_3 = Symbol('_el_3');
  const _el_5 = Symbol('_el_5');
  const _el_6 = Symbol('_el_6');
  const _text_8 = Symbol('_text_8');
  const _el_9 = Symbol('_el_9');
  const _compView_9 = Symbol('_compView_9');
  const _ScoresComponent_9_5 = Symbol('_ScoresComponent_9_5');
  const _el_10 = Symbol('_el_10');
  const _el_11 = Symbol('_el_11');
  const _el_12 = Symbol('_el_12');
  const _text_13 = Symbol('_text_13');
  const _el_14 = Symbol('_el_14');
  const _el_15 = Symbol('_el_15');
  const _text_16 = Symbol('_text_16');
  const _el_18 = Symbol('_el_18');
  const _el_20 = Symbol('_el_20');
  const _text_21 = Symbol('_text_21');
  const _el_23 = Symbol('_el_23');
  const _el_24 = Symbol('_el_24');
  const _el_25 = Symbol('_el_25');
  const _el_26 = Symbol('_el_26');
  const _el_27 = Symbol('_el_27');
  const _el_29 = Symbol('_el_29');
  const _el_31 = Symbol('_el_31');
  const _el_33 = Symbol('_el_33');
  const _el_35 = Symbol('_el_35');
  const _el_36 = Symbol('_el_36');
  const _el_37 = Symbol('_el_37');
  const _el_39 = Symbol('_el_39');
  const _el_40 = Symbol('_el_40');
  const _el_41 = Symbol('_el_41');
  const _compView_41 = Symbol('_compView_41');
  const _StatsComponent_41_5 = Symbol('_StatsComponent_41_5');
  const _el_42 = Symbol('_el_42');
  const _compView_42 = Symbol('_compView_42');
  const _VisualizeWinningsComponent_42_5 = Symbol('_VisualizeWinningsComponent_42_5');
  const _el_43 = Symbol('_el_43');
  const _el_44 = Symbol('_el_44');
  const _el_46 = Symbol('_el_46');
  const _compView_46 = Symbol('_compView_46');
  const _SettingsComponent_46_5 = Symbol('_SettingsComponent_46_5');
  const _el_47 = Symbol('_el_47');
  const _el_48 = Symbol('_el_48');
  const _el_50 = Symbol('_el_50');
  const _compView_50 = Symbol('_compView_50');
  const _HelpComponent_50_5 = Symbol('_HelpComponent_50_5');
  const _el_51 = Symbol('_el_51');
  const _el_52 = Symbol('_el_52');
  const _el_54 = Symbol('_el_54');
  const _compView_54 = Symbol('_compView_54');
  const _HelpComponent_54_5 = Symbol('_HelpComponent_54_5');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_2 = Symbol('_expr_2');
  const _expr_3 = Symbol('_expr_3');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_11 = Symbol('_expr_11');
  const _handle_change_37_0 = Symbol('_handle_change_37_0');
  let const$;
  lottery_simulator$46template.ViewAppComponent0 = class ViewAppComponent0 extends src__core__linker__app_view.AppView$(lottery_simulator$.AppComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createAndAppend(doc, 'h1', parentRenderNode);
      this.addShimE(this[_el_0]);
      let _text_1 = html.Text.new('Lottery Simulator');
      this[_el_0][$append](_text_1);
      this[_el_2] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_2].className = 'help';
      this.addShimC(this[_el_2]);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_2]);
      this.addShimE(this[_el_3]);
      let _text_4 = html.Text.new('Have you always wanted to lose all your money in a lottery?\n   This simulation makes it possible—without, you know, losing all your money.');
      this[_el_3][$append](_text_4);
      this[_el_5] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_5]);
      this[_el_6] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_5]);
      this.addShimE(this[_el_6]);
      let _text_7 = html.Text.new('Playing ');
      this[_el_6][$append](_text_7);
      this[_text_8] = html.Text.new('');
      this[_el_6][$append](this[_text_8]);
      this[_compView_9] = new src__scores__scores$46template.ViewScoresComponent0.new(this, 9);
      this[_el_9] = this[_compView_9].rootEl;
      this[_el_5][$append](this[_el_9]);
      this[_el_9].className = 'scores-component';
      this.addShimC(html.HtmlElement._check(this[_el_9]));
      this[_ScoresComponent_9_5] = new src__scores__scores.ScoresComponent.new();
      this[_compView_9].create(this[_ScoresComponent_9_5], []);
      this[_el_10] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_5]);
      this[_el_10].className = 'days';
      this.addShimC(this[_el_10]);
      this[_el_11] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_10]);
      this[_el_11].className = 'days__start-day';
      this.addShimC(this[_el_11]);
      this[_el_12] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_11]);
      this.addShimE(this[_el_12]);
      this[_text_13] = html.Text.new('');
      this[_el_12][$append](this[_text_13]);
      this[_el_14] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_10]);
      this[_el_14].className = 'days__end-day';
      this.addShimC(this[_el_14]);
      this[_el_15] = src__core__linker__app_view.createSpanAndAppend(doc, this[_el_14]);
      this.addShimE(this[_el_15]);
      this[_text_16] = html.Text.new('');
      this[_el_15][$append](this[_text_16]);
      let _text_17 = html.Text.new(' years from now');
      this[_el_15][$append](_text_17);
      this[_el_18] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_10]);
      this[_el_18].className = 'clear-floats';
      this.addShimC(this[_el_18]);
      let _text_19 = html.Text.new('Progress:');
      this[_el_5][$append](_text_19);
      this[_el_20] = src__core__linker__app_view.createAndAppend(doc, 'strong', this[_el_5]);
      this.addShimE(this[_el_20]);
      this[_text_21] = html.Text.new('');
      this[_el_20][$append](this[_text_21]);
      let _text_22 = html.Text.new('%');
      this[_el_20][$append](_text_22);
      this[_el_23] = src__core__linker__app_view.createAndAppend(doc, 'br', this[_el_5]);
      this.addShimE(this[_el_23]);
      this[_el_24] = src__core__linker__app_view.createAndAppend(doc, 'progress', this[_el_5]);
      this.createAttr(this[_el_24], 'max', '100');
      this.addShimE(this[_el_24]);
      this[_el_25] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_5]);
      this[_el_25].className = 'controls';
      this.addShimC(this[_el_25]);
      this[_el_26] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_25]);
      this[_el_26].className = 'controls__fabs';
      this.addShimC(this[_el_26]);
      this[_el_27] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_26]));
      this.createAttr(this[_el_27], 'id', 'play-button');
      this.addShimC(this[_el_27]);
      let _text_28 = html.Text.new('Play');
      this[_el_27][$append](_text_28);
      this[_el_29] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_26]));
      this.addShimC(this[_el_29]);
      let _text_30 = html.Text.new('Step');
      this[_el_29][$append](_text_30);
      this[_el_31] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_26]));
      this.addShimC(this[_el_31]);
      let _text_32 = html.Text.new('Pause');
      this[_el_31][$append](_text_32);
      this[_el_33] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_26]));
      this.addShimC(this[_el_33]);
      let _text_34 = html.Text.new('Reset');
      this[_el_33][$append](_text_34);
      this[_el_35] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_25]);
      this[_el_35].className = 'controls__faster-button';
      this.addShimC(this[_el_35]);
      this[_el_36] = src__core__linker__app_view.createAndAppend(doc, 'label', this[_el_35]);
      this.addShimE(this[_el_36]);
      this[_el_37] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_36]));
      this.createAttr(this[_el_37], 'type', 'checkbox');
      this.addShimC(this[_el_37]);
      let _text_38 = html.Text.new('Go faster');
      this[_el_36][$append](_text_38);
      this[_el_39] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_25]);
      this[_el_39].className = 'clear-floats';
      this.addShimC(this[_el_39]);
      this[_el_40] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_5]);
      this[_el_40].className = 'history';
      this.addShimC(this[_el_40]);
      this[_compView_41] = new src__stats__stats$46template.ViewStatsComponent0.new(this, 41);
      this[_el_41] = this[_compView_41].rootEl;
      this[_el_40][$append](this[_el_41]);
      this[_el_41].className = 'history__stats';
      this.addShimC(html.HtmlElement._check(this[_el_41]));
      this[_StatsComponent_41_5] = new src__stats__stats.StatsComponent.new();
      this[_compView_41].create(this[_StatsComponent_41_5], []);
      this[_compView_42] = new src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0.new(this, 42);
      this[_el_42] = this[_compView_42].rootEl;
      this[_el_40][$append](this[_el_42]);
      this[_el_42].className = 'history__vis';
      this.addShimC(html.HtmlElement._check(this[_el_42]));
      this[_VisualizeWinningsComponent_42_5] = new src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent.new();
      this[_compView_42].create(this[_VisualizeWinningsComponent_42_5], []);
      this[_el_43] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_40]);
      this[_el_43].className = 'clear-floats';
      this.addShimC(this[_el_43]);
      this[_el_44] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_5]);
      this.addShimE(this[_el_44]);
      let _text_45 = html.Text.new('Settings');
      this[_el_44][$append](_text_45);
      this[_compView_46] = new src__settings__settings_component$46template.ViewSettingsComponent0.new(this, 46);
      this[_el_46] = this[_compView_46].rootEl;
      this[_el_5][$append](this[_el_46]);
      this.addShimC(html.HtmlElement._check(this[_el_46]));
      this[_SettingsComponent_46_5] = new src__settings__settings_component.SettingsComponent.new();
      this[_compView_46].create(this[_SettingsComponent_46_5], []);
      this[_el_47] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_47]);
      this[_el_48] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_47]);
      this.addShimE(this[_el_48]);
      let _text_49 = html.Text.new('Help');
      this[_el_48][$append](_text_49);
      this[_compView_50] = new src__help__help$46template.ViewHelpComponent0.new(this, 50);
      this[_el_50] = this[_compView_50].rootEl;
      this[_el_47][$append](this[_el_50]);
      this.createAttr(this[_el_50], 'content', 'help');
      this.addShimC(html.HtmlElement._check(this[_el_50]));
      this[_HelpComponent_50_5] = new src__help__help.HelpComponent.new();
      this[_compView_50].create(this[_HelpComponent_50_5], []);
      this[_el_51] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_51]);
      this[_el_52] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_51]);
      this.addShimE(this[_el_52]);
      let _text_53 = html.Text.new('About');
      this[_el_52][$append](_text_53);
      this[_compView_54] = new src__help__help$46template.ViewHelpComponent0.new(this, 54);
      this[_el_54] = this[_compView_54].rootEl;
      this[_el_51][$append](this[_el_54]);
      this.createAttr(this[_el_54], 'content', 'about');
      this.addShimC(html.HtmlElement._check(this[_el_54]));
      this[_HelpComponent_54_5] = new src__help__help.HelpComponent.new();
      this[_compView_54].create(this[_HelpComponent_54_5], []);
      this[_el_27][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'play')));
      this[_el_29][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'step')));
      this[_el_31][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'pause')));
      this[_el_33][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'reset')));
      this[_el_37][$addEventListener]('change', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_change_37_0)));
      let subscription_0 = this[_SettingsComponent_46_5].settingsChanged.listen(this.eventHandler0(core.Null, dart.bind(this.ctx, 'updateFromSettings')));
      this.ctx.vis = this[_VisualizeWinningsComponent_42_5];
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), [subscription_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_1 = _ctx.altCash;
      if (!(this[_expr_1] == currVal_1)) {
        this[_ScoresComponent_9_5].altCash = currVal_1;
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = _ctx.cash;
      if (!(this[_expr_2] == currVal_2)) {
        this[_ScoresComponent_9_5].cash = currVal_2;
        this[_expr_2] = currVal_2;
      }
      if (firstCheck) {
        if (!(_ctx.winningsMap == null)) {
          this[_StatsComponent_41_5].winningsMap = _ctx.winningsMap;
        }
      }
      if (firstCheck) {
        this[_VisualizeWinningsComponent_42_5].ngOnInit();
      }
      let currVal_11 = _ctx.settings;
      if (!core.identical(this[_expr_11], currVal_11)) {
        this[_SettingsComponent_46_5].settings = currVal_11;
        this[_expr_11] = currVal_11;
      }
      if (firstCheck) {
        this[_SettingsComponent_46_5].ngOnInit();
      }
      if (firstCheck) {
        this[_HelpComponent_50_5].content = 'help';
      }
      if (firstCheck) {
        this[_HelpComponent_54_5].content = 'about';
      }
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.lottery.shortName);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_8][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let l = _ctx.currentDay;
      let currVal_3 = l != null ? l : '';
      if (!(this[_expr_3] === currVal_3)) {
        this[_text_13][$text] = currVal_3;
        this[_expr_3] = currVal_3;
      }
      let currVal_4 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.years);
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_text_16][$text] = core.String._check(currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = src__core__linker__app_view_utils.interpolate0(_ctx.progress);
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_text_21][$text] = core.String._check(currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_6 = _ctx.progress;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this.setProp(this[_el_24], 'value', currVal_6);
        this[_expr_6] = currVal_6;
      }
      let currVal_7 = dart.test(_ctx.endOfDays) || dart.test(_ctx.inProgress);
      if (!(this[_expr_7] === currVal_7)) {
        this.setProp(this[_el_27], 'disabled', currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_8 = dart.test(_ctx.endOfDays) || dart.test(_ctx.inProgress);
      if (!(this[_expr_8] === currVal_8)) {
        this.setProp(this[_el_29], 'disabled', currVal_8);
        this[_expr_8] = currVal_8;
      }
      let currVal_9 = !dart.test(_ctx.inProgress);
      if (!(this[_expr_9] === currVal_9)) {
        this.setProp(this[_el_31], 'disabled', currVal_9);
        this[_expr_9] = currVal_9;
      }
      this[_compView_9].detectChanges();
      this[_compView_41].detectChanges();
      this[_compView_42].detectChanges();
      this[_compView_46].detectChanges();
      this[_compView_50].detectChanges();
      this[_compView_54].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_9];
      t == null ? null : t.destroy();
      let t$ = this[_compView_41];
      t$ == null ? null : t$.destroy();
      let t$0 = this[_compView_42];
      t$0 == null ? null : t$0.destroy();
      let t$1 = this[_compView_46];
      t$1 == null ? null : t$1.destroy();
      let t$2 = this[_compView_50];
      t$2 == null ? null : t$2.destroy();
      let t$3 = this[_compView_54];
      t$3 == null ? null : t$3.destroy();
    }
    [_handle_change_37_0]($event) {
      let local_fastCheckbox = this[_el_37];
      this.ctx.fastEnabled = local_fastCheckbox.checked;
    }
  };
  (lottery_simulator$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_query_vis_1_0_isDirty] = true;
    this[_el_0] = null;
    this[_el_2] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_el_6] = null;
    this[_text_8] = null;
    this[_el_9] = null;
    this[_compView_9] = null;
    this[_ScoresComponent_9_5] = null;
    this[_el_10] = null;
    this[_el_11] = null;
    this[_el_12] = null;
    this[_text_13] = null;
    this[_el_14] = null;
    this[_el_15] = null;
    this[_text_16] = null;
    this[_el_18] = null;
    this[_el_20] = null;
    this[_text_21] = null;
    this[_el_23] = null;
    this[_el_24] = null;
    this[_el_25] = null;
    this[_el_26] = null;
    this[_el_27] = null;
    this[_el_29] = null;
    this[_el_31] = null;
    this[_el_33] = null;
    this[_el_35] = null;
    this[_el_36] = null;
    this[_el_37] = null;
    this[_el_39] = null;
    this[_el_40] = null;
    this[_el_41] = null;
    this[_compView_41] = null;
    this[_StatsComponent_41_5] = null;
    this[_el_42] = null;
    this[_compView_42] = null;
    this[_VisualizeWinningsComponent_42_5] = null;
    this[_el_43] = null;
    this[_el_44] = null;
    this[_el_46] = null;
    this[_compView_46] = null;
    this[_SettingsComponent_46_5] = null;
    this[_el_47] = null;
    this[_el_48] = null;
    this[_el_50] = null;
    this[_compView_50] = null;
    this[_HelpComponent_50_5] = null;
    this[_el_51] = null;
    this[_el_52] = null;
    this[_el_54] = null;
    this[_compView_54] = null;
    this[_HelpComponent_54_5] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_expr_3] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_11] = null;
    lottery_simulator$46template.ViewAppComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('lottery-simulator'));
    let t = lottery_simulator$46template.ViewAppComponent0._renderType;
    t == null ? lottery_simulator$46template.ViewAppComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, lottery_simulator$46template.styles$AppComponent) : t;
    this.setupComponentType(lottery_simulator$46template.ViewAppComponent0._renderType);
  }).prototype = lottery_simulator$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(lottery_simulator$46template.ViewAppComponent0);
  dart.setMethodSignature(lottery_simulator$46template.ViewAppComponent0, () => ({
    __proto__: dart.getMethods(lottery_simulator$46template.ViewAppComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(lottery_simulator$.AppComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_change_37_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(lottery_simulator$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(lottery_simulator$46template.ViewAppComponent0.__proto__),
    [_query_vis_1_0_isDirty]: dart.fieldType(core.bool),
    [_el_0]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.DivElement),
    [_el_3]: dart.fieldType(html.Element),
    [_el_5]: dart.fieldType(html.DivElement),
    [_el_6]: dart.fieldType(html.Element),
    [_text_8]: dart.fieldType(html.Text),
    [_el_9]: dart.fieldType(html.Element),
    [_compView_9]: dart.fieldType(src__scores__scores$46template.ViewScoresComponent0),
    [_ScoresComponent_9_5]: dart.fieldType(src__scores__scores.ScoresComponent),
    [_el_10]: dart.fieldType(html.DivElement),
    [_el_11]: dart.fieldType(html.DivElement),
    [_el_12]: dart.fieldType(html.Element),
    [_text_13]: dart.fieldType(html.Text),
    [_el_14]: dart.fieldType(html.DivElement),
    [_el_15]: dart.fieldType(html.Element),
    [_text_16]: dart.fieldType(html.Text),
    [_el_18]: dart.fieldType(html.DivElement),
    [_el_20]: dart.fieldType(html.Element),
    [_text_21]: dart.fieldType(html.Text),
    [_el_23]: dart.fieldType(html.Element),
    [_el_24]: dart.fieldType(html.Element),
    [_el_25]: dart.fieldType(html.DivElement),
    [_el_26]: dart.fieldType(html.DivElement),
    [_el_27]: dart.fieldType(html.ButtonElement),
    [_el_29]: dart.fieldType(html.ButtonElement),
    [_el_31]: dart.fieldType(html.ButtonElement),
    [_el_33]: dart.fieldType(html.ButtonElement),
    [_el_35]: dart.fieldType(html.DivElement),
    [_el_36]: dart.fieldType(html.Element),
    [_el_37]: dart.fieldType(html.InputElement),
    [_el_39]: dart.fieldType(html.DivElement),
    [_el_40]: dart.fieldType(html.DivElement),
    [_el_41]: dart.fieldType(html.Element),
    [_compView_41]: dart.fieldType(src__stats__stats$46template.ViewStatsComponent0),
    [_StatsComponent_41_5]: dart.fieldType(src__stats__stats.StatsComponent),
    [_el_42]: dart.fieldType(html.Element),
    [_compView_42]: dart.fieldType(src__visualize_winnings__visualize_winnings$46template.ViewVisualizeWinningsComponent0),
    [_VisualizeWinningsComponent_42_5]: dart.fieldType(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent),
    [_el_43]: dart.fieldType(html.DivElement),
    [_el_44]: dart.fieldType(html.Element),
    [_el_46]: dart.fieldType(html.Element),
    [_compView_46]: dart.fieldType(src__settings__settings_component$46template.ViewSettingsComponent0),
    [_SettingsComponent_46_5]: dart.fieldType(src__settings__settings_component.SettingsComponent),
    [_el_47]: dart.fieldType(html.DivElement),
    [_el_48]: dart.fieldType(html.Element),
    [_el_50]: dart.fieldType(html.Element),
    [_compView_50]: dart.fieldType(src__help__help$46template.ViewHelpComponent0),
    [_HelpComponent_50_5]: dart.fieldType(src__help__help.HelpComponent),
    [_el_51]: dart.fieldType(html.DivElement),
    [_el_52]: dart.fieldType(html.Element),
    [_el_54]: dart.fieldType(html.Element),
    [_compView_54]: dart.fieldType(src__help__help$46template.ViewHelpComponent0),
    [_HelpComponent_54_5]: dart.fieldType(src__help__help.HelpComponent),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.int),
    [_expr_2]: dart.fieldType(core.int),
    [_expr_3]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(lottery_simulator$46template.ViewAppComponent0, {
    /*lottery_simulator$46template.ViewAppComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  lottery_simulator$46template.viewFactory_AppComponent0 = function(parentView, parentIndex) {
    return new lottery_simulator$46template.ViewAppComponent0.new(parentView, parentIndex);
  };
  dart.fn(lottery_simulator$46template.viewFactory_AppComponent0, AppViewAndintToAppViewOfAppComponent());
  dart.defineLazy(lottery_simulator$46template, {
    /*lottery_simulator$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _Settings_0_5 = Symbol('_Settings_0_5');
  const _AppComponent_0_6 = Symbol('_AppComponent_0_6');
  lottery_simulator$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new lottery_simulator$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_Settings_0_5] = new src__settings__settings.Settings.new();
      this[_AppComponent_0_6] = new lottery_simulator$.AppComponent.new(this[_Settings_0_5]);
      this[_compView_0].create(this[_AppComponent_0_6], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_6]);
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__settings__settings.Settings) && 0 === nodeIndex) {
        return this[_Settings_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_AppComponent_0_6].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (lottery_simulator$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_Settings_0_5] = null;
    this[_AppComponent_0_6] = null;
    lottery_simulator$46template._ViewAppComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = lottery_simulator$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(lottery_simulator$46template._ViewAppComponentHost0);
  dart.setMethodSignature(lottery_simulator$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getMethods(lottery_simulator$46template._ViewAppComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(lottery_simulator$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(lottery_simulator$46template._ViewAppComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(lottery_simulator$46template.ViewAppComponent0),
    [_Settings_0_5]: dart.fieldType(src__settings__settings.Settings),
    [_AppComponent_0_6]: dart.fieldType(lottery_simulator$.AppComponent)
  }));
  lottery_simulator$46template.viewFactory_AppComponentHost0 = function(parentView, parentIndex) {
    return new lottery_simulator$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(lottery_simulator$46template.viewFactory_AppComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(lottery_simulator$46template, {
    /*lottery_simulator$46template.AppComponentNgFactory*/get AppComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfAppComponent()).new('lottery-simulator', lottery_simulator$46template.viewFactory_AppComponentHost0, lottery_simulator$46template._AppComponentMetadata));
    },
    /*lottery_simulator$46template._AppComponentMetadata*/get _AppComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*lottery_simulator$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  lottery_simulator$46template.initReflector = function() {
    if (dart.test(lottery_simulator$46template._visited)) {
      return;
    }
    lottery_simulator$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(lottery_simulator$.AppComponent), lottery_simulator$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    src__help__help$46template.initReflector();
    src__scores__scores$46template.initReflector();
    src__settings__settings$46template.initReflector();
    src__settings__settings_component$46template.initReflector();
    src__stats__stats$46template.initReflector();
    src__visualize_winnings__visualize_winnings$46template.initReflector();
  };
  dart.fn(lottery_simulator$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/components_codelab/lottery_simulator.template.ddc", {
    "package:components_codelab/lottery_simulator.template.dart": lottery_simulator$46template
  }, '{"version":3,"sourceRoot":"","sources":["lottery_simulator.template.dart"],"names":[],"mappings":"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","file":"lottery_simulator.template.ddc.js"}');
  // Exports:
  return {
    lottery_simulator$46template: lottery_simulator$46template
  };
});

//# sourceMappingURL=lottery_simulator.template.ddc.js.map
