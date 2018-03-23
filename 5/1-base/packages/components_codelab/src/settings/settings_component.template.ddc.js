define(['dart_sdk', 'packages/components_codelab/src/settings/settings_component.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_for', 'packages/components_codelab/src/settings/settings_component', 'packages/components_codelab/src/lottery/lottery', 'packages/components_codelab/src/settings/settings', 'packages/angular/src/di/reflector', 'packages/angular/angular.template', 'packages/components_codelab/src/lottery/lottery.template', 'packages/components_codelab/src/settings/settings.template'], function(dart_sdk, settings_component$46css, view_type, constants, view, app_view_utils, app_view, ng_for, settings_component, lottery, settings, reflector, angular, lottery$, settings$) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__settings__settings_component$46css$46shim = settings_component$46css.src__settings__settings_component$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_for = ng_for.src__common__directives__ng_for;
  const src__settings__settings_component = settings_component.src__settings__settings_component;
  const src__lottery__lottery = lottery.src__lottery__lottery;
  const src__settings__settings = settings.src__settings__settings;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const src__lottery__lottery$46template = lottery$.src__lottery__lottery$46template;
  const src__settings__settings$46template = settings$.src__settings__settings$46template;
  const _root = Object.create(null);
  const src__settings__settings_component$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $clone = dartx.clone;
  const $addEventListener = dartx.addEventListener;
  const $text = dartx.text;
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfSettingsComponent = () => (AppViewOfSettingsComponent = dart.constFn(src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent)))();
  let AppViewAndintToAppViewOfSettingsComponent = () => (AppViewAndintToAppViewOfSettingsComponent = dart.constFn(dart.fnType(AppViewOfSettingsComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfSettingsComponent = () => (ComponentRefOfSettingsComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfSettingsComponent = () => (ComponentFactoryOfSettingsComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__settings__settings_component.SettingsComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__settings__settings_component$46template, {
    /*src__settings__settings_component$46template.styles$SettingsComponent*/get styles$SettingsComponent() {
      return dart.constList([src__settings__settings_component$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _el_1 = Symbol('_el_1');
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _text_6 = Symbol('_text_6');
  const _text_8 = Symbol('_text_8');
  const _el_10 = Symbol('_el_10');
  const _el_11 = Symbol('_el_11');
  const _el_13 = Symbol('_el_13');
  const _appEl_14 = Symbol('_appEl_14');
  const _NgFor_14_9 = Symbol('_NgFor_14_9');
  const _el_15 = Symbol('_el_15');
  const _el_17 = Symbol('_el_17');
  const _appEl_18 = Symbol('_appEl_18');
  const _NgFor_18_9 = Symbol('_NgFor_18_9');
  const _el_19 = Symbol('_el_19');
  const _el_21 = Symbol('_el_21');
  const _el_23 = Symbol('_el_23');
  const _el_24 = Symbol('_el_24');
  const _el_26 = Symbol('_el_26');
  const _text_28 = Symbol('_text_28');
  const _text_30 = Symbol('_text_30');
  const _el_32 = Symbol('_el_32');
  const _el_33 = Symbol('_el_33');
  const _el_35 = Symbol('_el_35');
  const _appEl_36 = Symbol('_appEl_36');
  const _NgFor_36_9 = Symbol('_NgFor_36_9');
  const _el_37 = Symbol('_el_37');
  const _el_38 = Symbol('_el_38');
  const _text_41 = Symbol('_text_41');
  const _el_42 = Symbol('_el_42');
  const _el_44 = Symbol('_el_44');
  const _appEl_45 = Symbol('_appEl_45');
  const _NgFor_45_9 = Symbol('_NgFor_45_9');
  const _el_46 = Symbol('_el_46');
  const _el_47 = Symbol('_el_47');
  const _text_50 = Symbol('_text_50');
  const _el_51 = Symbol('_el_51');
  const _el_53 = Symbol('_el_53');
  const _el_55 = Symbol('_el_55');
  const _el_56 = Symbol('_el_56');
  const _el_58 = Symbol('_el_58');
  const _text_60 = Symbol('_text_60');
  const _text_62 = Symbol('_text_62');
  const _el_64 = Symbol('_el_64');
  const _el_65 = Symbol('_el_65');
  const _el_67 = Symbol('_el_67');
  const _el_68 = Symbol('_el_68');
  const _el_70 = Symbol('_el_70');
  const _el_71 = Symbol('_el_71');
  const _appEl_72 = Symbol('_appEl_72');
  const _NgFor_72_9 = Symbol('_NgFor_72_9');
  const _el_73 = Symbol('_el_73');
  const _el_75 = Symbol('_el_75');
  const _appEl_76 = Symbol('_appEl_76');
  const _NgFor_76_9 = Symbol('_NgFor_76_9');
  const _el_77 = Symbol('_el_77');
  const _el_79 = Symbol('_el_79');
  const _expr_0 = Symbol('_expr_0');
  const _expr_1 = Symbol('_expr_1');
  const _expr_4 = Symbol('_expr_4');
  const _expr_5 = Symbol('_expr_5');
  const _expr_6 = Symbol('_expr_6');
  const _expr_7 = Symbol('_expr_7');
  const _expr_8 = Symbol('_expr_8');
  const _expr_9 = Symbol('_expr_9');
  const _expr_10 = Symbol('_expr_10');
  const _expr_11 = Symbol('_expr_11');
  const _expr_12 = Symbol('_expr_12');
  const _handle_change_68_0 = Symbol('_handle_change_68_0');
  let const$;
  src__settings__settings_component$46template.ViewSettingsComponent0 = class ViewSettingsComponent0 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_1]);
      this.addShimE(this[_el_2]);
      let _text_3 = html.Text.new('Wallet');
      this[_el_2][$append](_text_3);
      this[_el_4] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_1]);
      this.addShimE(this[_el_4]);
      let _text_5 = html.Text.new('Initial: $');
      this[_el_4][$append](_text_5);
      this[_text_6] = html.Text.new('');
      this[_el_4][$append](this[_text_6]);
      let _text_7 = html.Text.new('. Daily disposable income: $');
      this[_el_4][$append](_text_7);
      this[_text_8] = html.Text.new('');
      this[_el_4][$append](this[_text_8]);
      let _text_9 = html.Text.new('.');
      this[_el_4][$append](_text_9);
      this[_el_10] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_1]);
      this.addShimC(this[_el_10]);
      this[_el_11] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_10]);
      this.addShimE(this[_el_11]);
      let _text_12 = html.Text.new('Initial cash');
      this[_el_11][$append](_text_12);
      this[_el_13] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_10]);
      this.addShimC(this[_el_13]);
      let _anchor_14 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_13][$append](_anchor_14);
      this[_appEl_14] = new src__core__linker__view_container.ViewContainer.new(14, 13, this, _anchor_14);
      let _TemplateRef_14_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_14], src__settings__settings_component$46template.viewFactory_SettingsComponent1);
      this[_NgFor_14_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_14], _TemplateRef_14_8);
      this[_el_15] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_10]);
      this.addShimE(this[_el_15]);
      let _text_16 = html.Text.new('Daily disposable income');
      this[_el_15][$append](_text_16);
      this[_el_17] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_10]);
      this.addShimC(this[_el_17]);
      let _anchor_18 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_17][$append](_anchor_18);
      this[_appEl_18] = new src__core__linker__view_container.ViewContainer.new(18, 17, this, _anchor_18);
      let _TemplateRef_18_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_18], src__settings__settings_component$46template.viewFactory_SettingsComponent2);
      this[_NgFor_18_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_18], _TemplateRef_18_8);
      this[_el_19] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_1]));
      this.addShimC(this[_el_19]);
      let _text_20 = html.Text.new('Save');
      this[_el_19][$append](_text_20);
      this[_el_21] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_1]));
      this.addShimC(this[_el_21]);
      let _text_22 = html.Text.new('Cancel');
      this[_el_21][$append](_text_22);
      this[_el_23] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this[_el_23].className = 'betting-panel';
      this.addShimC(this[_el_23]);
      this[_el_24] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_23]);
      this.addShimE(this[_el_24]);
      let _text_25 = html.Text.new('Betting');
      this[_el_24][$append](_text_25);
      this[_el_26] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_23]);
      this.addShimE(this[_el_26]);
      let _text_27 = html.Text.new('Lottery: ');
      this[_el_26][$append](_text_27);
      this[_text_28] = html.Text.new('');
      this[_el_26][$append](this[_text_28]);
      let _text_29 = html.Text.new('. Strategy: ');
      this[_el_26][$append](_text_29);
      this[_text_30] = html.Text.new('');
      this[_el_26][$append](this[_text_30]);
      let _text_31 = html.Text.new('.');
      this[_el_26][$append](_text_31);
      this[_el_32] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_23]);
      this.addShimC(this[_el_32]);
      this[_el_33] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_32]);
      this.addShimE(this[_el_33]);
      let _text_34 = html.Text.new('Lottery');
      this[_el_33][$append](_text_34);
      this[_el_35] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_32]);
      this.addShimC(this[_el_35]);
      let _anchor_36 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_35][$append](_anchor_36);
      this[_appEl_36] = new src__core__linker__view_container.ViewContainer.new(36, 35, this, _anchor_36);
      let _TemplateRef_36_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_36], src__settings__settings_component$46template.viewFactory_SettingsComponent3);
      this[_NgFor_36_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_36], _TemplateRef_36_8);
      this[_el_37] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_32]);
      this.addShimE(this[_el_37]);
      this[_el_38] = src__core__linker__app_view.createAndAppend(doc, 'strong', this[_el_37]);
      this.addShimE(this[_el_38]);
      let _text_39 = html.Text.new('Description:');
      this[_el_38][$append](_text_39);
      let _text_40 = html.Text.new(' ');
      this[_el_37][$append](_text_40);
      this[_text_41] = html.Text.new('');
      this[_el_37][$append](this[_text_41]);
      this[_el_42] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_32]);
      this.addShimE(this[_el_42]);
      let _text_43 = html.Text.new('Strategy');
      this[_el_42][$append](_text_43);
      this[_el_44] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_32]);
      this.addShimC(this[_el_44]);
      let _anchor_45 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_44][$append](_anchor_45);
      this[_appEl_45] = new src__core__linker__view_container.ViewContainer.new(45, 44, this, _anchor_45);
      let _TemplateRef_45_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_45], src__settings__settings_component$46template.viewFactory_SettingsComponent4);
      this[_NgFor_45_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_45], _TemplateRef_45_8);
      this[_el_46] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_32]);
      this.addShimE(this[_el_46]);
      this[_el_47] = src__core__linker__app_view.createAndAppend(doc, 'strong', this[_el_46]);
      this.addShimE(this[_el_47]);
      let _text_48 = html.Text.new('Description:');
      this[_el_47][$append](_text_48);
      let _text_49 = html.Text.new(' ');
      this[_el_46][$append](_text_49);
      this[_text_50] = html.Text.new('');
      this[_el_46][$append](this[_text_50]);
      this[_el_51] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_23]));
      this.addShimC(this[_el_51]);
      let _text_52 = html.Text.new('Save');
      this[_el_51][$append](_text_52);
      this[_el_53] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_23]));
      this.addShimC(this[_el_53]);
      let _text_54 = html.Text.new('Cancel');
      this[_el_53][$append](_text_54);
      this[_el_55] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_0]);
      this.addShimC(this[_el_55]);
      this[_el_56] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_55]);
      this.addShimE(this[_el_56]);
      let _text_57 = html.Text.new('Other');
      this[_el_56][$append](_text_57);
      this[_el_58] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_55]);
      this.addShimE(this[_el_58]);
      let _text_59 = html.Text.new('Interest rate: ');
      this[_el_58][$append](_text_59);
      this[_text_60] = html.Text.new('');
      this[_el_58][$append](this[_text_60]);
      let _text_61 = html.Text.new('%. Years: ');
      this[_el_58][$append](_text_61);
      this[_text_62] = html.Text.new('');
      this[_el_58][$append](this[_text_62]);
      let _text_63 = html.Text.new('.');
      this[_el_58][$append](_text_63);
      this[_el_64] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_55]);
      this.addShimC(this[_el_64]);
      this[_el_65] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_64]);
      this.addShimE(this[_el_65]);
      let _text_66 = html.Text.new('Annual interest rate');
      this[_el_65][$append](_text_66);
      this[_el_67] = src__core__linker__app_view.createAndAppend(doc, 'label', this[_el_64]);
      this.addShimE(this[_el_67]);
      this[_el_68] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_67]));
      this.createAttr(this[_el_68], 'type', 'checkbox');
      this.addShimC(this[_el_68]);
      let _text_69 = html.Text.new('Investing');
      this[_el_67][$append](_text_69);
      this[_el_70] = src__core__linker__app_view.createAndAppend(doc, 'br', this[_el_64]);
      this.addShimE(this[_el_70]);
      this[_el_71] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_64]);
      this.addShimC(this[_el_71]);
      let _anchor_72 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_71][$append](_anchor_72);
      this[_appEl_72] = new src__core__linker__view_container.ViewContainer.new(72, 71, this, _anchor_72);
      let _TemplateRef_72_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_72], src__settings__settings_component$46template.viewFactory_SettingsComponent5);
      this[_NgFor_72_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_72], _TemplateRef_72_8);
      this[_el_73] = src__core__linker__app_view.createAndAppend(doc, 'h3', this[_el_64]);
      this.addShimE(this[_el_73]);
      let _text_74 = html.Text.new('Length of simulation');
      this[_el_73][$append](_text_74);
      this[_el_75] = src__core__linker__app_view.createDivAndAppend(doc, this[_el_64]);
      this.addShimC(this[_el_75]);
      let _anchor_76 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_75][$append](_anchor_76);
      this[_appEl_76] = new src__core__linker__view_container.ViewContainer.new(76, 75, this, _anchor_76);
      let _TemplateRef_76_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_76], src__settings__settings_component$46template.viewFactory_SettingsComponent6);
      this[_NgFor_76_9] = new src__common__directives__ng_for.NgFor.new(this[_appEl_76], _TemplateRef_76_8);
      this[_el_77] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_55]));
      this.addShimC(this[_el_77]);
      let _text_78 = html.Text.new('Save');
      this[_el_77][$append](_text_78);
      this[_el_79] = html.ButtonElement._check(src__core__linker__app_view.createAndAppend(doc, 'button', this[_el_55]));
      this.addShimC(this[_el_79]);
      let _text_80 = html.Text.new('Cancel');
      this[_el_79][$append](_text_80);
      this[_el_19][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'settingsUpdated')));
      this[_el_21][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'resetWallet')));
      this[_el_51][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'settingsUpdated')));
      this[_el_53][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'resetBetting')));
      this[_el_68][$addEventListener]('change', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_change_68_0)));
      this[_el_77][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'settingsUpdated')));
      this[_el_79][$addEventListener]('click', this.eventHandler0(html.Event, dart.bind(this.ctx, 'resetOther')));
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (!(_ctx.initialCashOptions == null)) {
          this[_NgFor_14_9].ngForOf = _ctx.initialCashOptions;
        }
      }
      this[_NgFor_14_9].ngDoCheck();
      if (firstCheck) {
        if (!(_ctx.dailyDisposableOptions == null)) {
          this[_NgFor_18_9].ngForOf = _ctx.dailyDisposableOptions;
        }
      }
      this[_NgFor_18_9].ngDoCheck();
      let currVal_6 = _ctx.settings.lotteries;
      if (!core.identical(this[_expr_6], currVal_6)) {
        this[_NgFor_36_9].ngForOf = currVal_6;
        this[_expr_6] = currVal_6;
      }
      this[_NgFor_36_9].ngDoCheck();
      let currVal_8 = _ctx.settings.strategies;
      if (!core.identical(this[_expr_8], currVal_8)) {
        this[_NgFor_45_9].ngForOf = currVal_8;
        this[_expr_8] = currVal_8;
      }
      this[_NgFor_45_9].ngDoCheck();
      if (firstCheck) {
        if (!(_ctx.interestRateOptions == null)) {
          this[_NgFor_72_9].ngForOf = _ctx.interestRateOptions;
        }
      }
      this[_NgFor_72_9].ngDoCheck();
      if (firstCheck) {
        if (!(_ctx.yearsOptions == null)) {
          this[_NgFor_76_9].ngForOf = _ctx.yearsOptions;
        }
      }
      this[_NgFor_76_9].ngDoCheck();
      this[_appEl_14].detectChangesInNestedViews();
      this[_appEl_18].detectChangesInNestedViews();
      this[_appEl_36].detectChangesInNestedViews();
      this[_appEl_45].detectChangesInNestedViews();
      this[_appEl_72].detectChangesInNestedViews();
      this[_appEl_76].detectChangesInNestedViews();
      let currVal_0 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.initialCash);
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_text_6][$text] = core.String._check(currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.dailyDisposable);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_8][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_4 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.lottery.shortName);
      if (!core.identical(this[_expr_4], currVal_4)) {
        this[_text_28][$text] = core.String._check(currVal_4);
        this[_expr_4] = currVal_4;
      }
      let currVal_5 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.strategy.shortName);
      if (!core.identical(this[_expr_5], currVal_5)) {
        this[_text_30][$text] = core.String._check(currVal_5);
        this[_expr_5] = currVal_5;
      }
      let currVal_7 = src__core__linker__app_view_utils.interpolate0(_ctx.lottery.description);
      if (!core.identical(this[_expr_7], currVal_7)) {
        this[_text_41][$text] = core.String._check(currVal_7);
        this[_expr_7] = currVal_7;
      }
      let currVal_9 = src__core__linker__app_view_utils.interpolate0(_ctx.strategy.description);
      if (!core.identical(this[_expr_9], currVal_9)) {
        this[_text_50][$text] = core.String._check(currVal_9);
        this[_expr_9] = currVal_9;
      }
      let currVal_10 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.interestRate);
      if (!core.identical(this[_expr_10], currVal_10)) {
        this[_text_60][$text] = core.String._check(currVal_10);
        this[_expr_10] = currVal_10;
      }
      let currVal_11 = src__core__linker__app_view_utils.interpolate0(_ctx.settings.years);
      if (!core.identical(this[_expr_11], currVal_11)) {
        this[_text_62][$text] = core.String._check(currVal_11);
        this[_expr_11] = currVal_11;
      }
      let currVal_12 = _ctx.isInvesting;
      if (!core.identical(this[_expr_12], currVal_12)) {
        this.setProp(this[_el_68], 'checked', currVal_12);
        this[_expr_12] = currVal_12;
      }
    }
    destroyInternal() {
      let t = this[_appEl_14];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_18];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_36];
      t$0 == null ? null : t$0.destroyNestedViews();
      let t$1 = this[_appEl_45];
      t$1 == null ? null : t$1.destroyNestedViews();
      let t$2 = this[_appEl_72];
      t$2 == null ? null : t$2.destroyNestedViews();
      let t$3 = this[_appEl_76];
      t$3 == null ? null : t$3.destroyNestedViews();
    }
    [_handle_change_68_0]($event) {
      let local_investingCheckbox = this[_el_68];
      this.ctx.isInvesting = local_investingCheckbox.checked;
    }
  };
  (src__settings__settings_component$46template.ViewSettingsComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_text_6] = null;
    this[_text_8] = null;
    this[_el_10] = null;
    this[_el_11] = null;
    this[_el_13] = null;
    this[_appEl_14] = null;
    this[_NgFor_14_9] = null;
    this[_el_15] = null;
    this[_el_17] = null;
    this[_appEl_18] = null;
    this[_NgFor_18_9] = null;
    this[_el_19] = null;
    this[_el_21] = null;
    this[_el_23] = null;
    this[_el_24] = null;
    this[_el_26] = null;
    this[_text_28] = null;
    this[_text_30] = null;
    this[_el_32] = null;
    this[_el_33] = null;
    this[_el_35] = null;
    this[_appEl_36] = null;
    this[_NgFor_36_9] = null;
    this[_el_37] = null;
    this[_el_38] = null;
    this[_text_41] = null;
    this[_el_42] = null;
    this[_el_44] = null;
    this[_appEl_45] = null;
    this[_NgFor_45_9] = null;
    this[_el_46] = null;
    this[_el_47] = null;
    this[_text_50] = null;
    this[_el_51] = null;
    this[_el_53] = null;
    this[_el_55] = null;
    this[_el_56] = null;
    this[_el_58] = null;
    this[_text_60] = null;
    this[_text_62] = null;
    this[_el_64] = null;
    this[_el_65] = null;
    this[_el_67] = null;
    this[_el_68] = null;
    this[_el_70] = null;
    this[_el_71] = null;
    this[_appEl_72] = null;
    this[_NgFor_72_9] = null;
    this[_el_73] = null;
    this[_el_75] = null;
    this[_appEl_76] = null;
    this[_NgFor_76_9] = null;
    this[_el_77] = null;
    this[_el_79] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_4] = null;
    this[_expr_5] = null;
    this[_expr_6] = null;
    this[_expr_7] = null;
    this[_expr_8] = null;
    this[_expr_9] = null;
    this[_expr_10] = null;
    this[_expr_11] = null;
    this[_expr_12] = null;
    src__settings__settings_component$46template.ViewSettingsComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('settings-component'));
    let t = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
    t == null ? src__settings__settings_component$46template.ViewSettingsComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__settings__settings_component$46template.styles$SettingsComponent) : t;
    this.setupComponentType(src__settings__settings_component$46template.ViewSettingsComponent0._renderType);
  }).prototype = src__settings__settings_component$46template.ViewSettingsComponent0.prototype;
  dart.addTypeTests(src__settings__settings_component$46template.ViewSettingsComponent0);
  dart.setMethodSignature(src__settings__settings_component$46template.ViewSettingsComponent0, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template.ViewSettingsComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, []),
    [_handle_change_68_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template.ViewSettingsComponent0, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template.ViewSettingsComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.DivElement),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.Element),
    [_text_6]: dart.fieldType(html.Text),
    [_text_8]: dart.fieldType(html.Text),
    [_el_10]: dart.fieldType(html.DivElement),
    [_el_11]: dart.fieldType(html.Element),
    [_el_13]: dart.fieldType(html.DivElement),
    [_appEl_14]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_14_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_15]: dart.fieldType(html.Element),
    [_el_17]: dart.fieldType(html.DivElement),
    [_appEl_18]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_18_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_19]: dart.fieldType(html.ButtonElement),
    [_el_21]: dart.fieldType(html.ButtonElement),
    [_el_23]: dart.fieldType(html.DivElement),
    [_el_24]: dart.fieldType(html.Element),
    [_el_26]: dart.fieldType(html.Element),
    [_text_28]: dart.fieldType(html.Text),
    [_text_30]: dart.fieldType(html.Text),
    [_el_32]: dart.fieldType(html.DivElement),
    [_el_33]: dart.fieldType(html.Element),
    [_el_35]: dart.fieldType(html.DivElement),
    [_appEl_36]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_36_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_37]: dart.fieldType(html.Element),
    [_el_38]: dart.fieldType(html.Element),
    [_text_41]: dart.fieldType(html.Text),
    [_el_42]: dart.fieldType(html.Element),
    [_el_44]: dart.fieldType(html.DivElement),
    [_appEl_45]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_45_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_46]: dart.fieldType(html.Element),
    [_el_47]: dart.fieldType(html.Element),
    [_text_50]: dart.fieldType(html.Text),
    [_el_51]: dart.fieldType(html.ButtonElement),
    [_el_53]: dart.fieldType(html.ButtonElement),
    [_el_55]: dart.fieldType(html.DivElement),
    [_el_56]: dart.fieldType(html.Element),
    [_el_58]: dart.fieldType(html.Element),
    [_text_60]: dart.fieldType(html.Text),
    [_text_62]: dart.fieldType(html.Text),
    [_el_64]: dart.fieldType(html.DivElement),
    [_el_65]: dart.fieldType(html.Element),
    [_el_67]: dart.fieldType(html.Element),
    [_el_68]: dart.fieldType(html.InputElement),
    [_el_70]: dart.fieldType(html.Element),
    [_el_71]: dart.fieldType(html.DivElement),
    [_appEl_72]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_72_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_73]: dart.fieldType(html.Element),
    [_el_75]: dart.fieldType(html.DivElement),
    [_appEl_76]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgFor_76_9]: dart.fieldType(src__common__directives__ng_for.NgFor),
    [_el_77]: dart.fieldType(html.ButtonElement),
    [_el_79]: dart.fieldType(html.ButtonElement),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_4]: dart.fieldType(dart.dynamic),
    [_expr_5]: dart.fieldType(dart.dynamic),
    [_expr_6]: dart.fieldType(dart.dynamic),
    [_expr_7]: dart.fieldType(dart.dynamic),
    [_expr_8]: dart.fieldType(dart.dynamic),
    [_expr_9]: dart.fieldType(dart.dynamic),
    [_expr_10]: dart.fieldType(dart.dynamic),
    [_expr_11]: dart.fieldType(dart.dynamic),
    [_expr_12]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__settings__settings_component$46template.ViewSettingsComponent0, {
    /*src__settings__settings_component$46template.ViewSettingsComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__settings__settings_component$46template.viewFactory_SettingsComponent0 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template.ViewSettingsComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent0, AppViewAndintToAppViewOfSettingsComponent());
  const _text_3 = Symbol('_text_3');
  const _handle_click_1_0 = Symbol('_handle_click_1_0');
  src__settings__settings_component$46template._ViewSettingsComponent1 = class _ViewSettingsComponent1 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('label');
      this.addShimE(this[_el_0]);
      this[_el_1] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_0]));
      this.createAttr(this[_el_1], 'type', 'radio');
      this.addShimC(this[_el_1]);
      let _text_2 = html.Text.new('$');
      this[_el_0][$append](_text_2);
      this[_text_3] = html.Text.new('');
      this[_el_0][$append](this[_text_3]);
      this[_el_1][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_1_0)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_item = core.int._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_item == _ctx.initialCash;
      if (!(this[_expr_0] === currVal_0)) {
        this.setProp(this[_el_1], 'checked', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_3][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    [_handle_click_1_0]($event) {
      let local_current = this[_el_1];
      let local_item = core.int._check(this.locals[$_get]('$implicit'));
      this.ctx.initialCash = dart.test(local_current.checked) ? local_item : this.ctx.initialCash;
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__settings__settings_component$46template._ViewSettingsComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponent1.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponent1);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponent1, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponent1, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponent1.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.InputElement),
    [_text_3]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__settings__settings_component$46template.viewFactory_SettingsComponent1 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent1, AppViewAndintToAppViewOfSettingsComponent());
  src__settings__settings_component$46template._ViewSettingsComponent2 = class _ViewSettingsComponent2 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('label');
      this.addShimE(this[_el_0]);
      this[_el_1] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_0]));
      this.createAttr(this[_el_1], 'type', 'radio');
      this.addShimC(this[_el_1]);
      let _text_2 = html.Text.new('$');
      this[_el_0][$append](_text_2);
      this[_text_3] = html.Text.new('');
      this[_el_0][$append](this[_text_3]);
      this[_el_1][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_1_0)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_item = core.int._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_item == _ctx.dailyDisposable;
      if (!(this[_expr_0] === currVal_0)) {
        this.setProp(this[_el_1], 'checked', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_3][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    [_handle_click_1_0]($event) {
      let local_current = this[_el_1];
      let local_item = core.int._check(this.locals[$_get]('$implicit'));
      this.ctx.dailyDisposable = dart.test(local_current.checked) ? local_item : this.ctx.dailyDisposable;
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_3] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__settings__settings_component$46template._ViewSettingsComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponent2.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponent2);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponent2, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponent2, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponent2.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.InputElement),
    [_text_3]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__settings__settings_component$46template.viewFactory_SettingsComponent2 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent2, AppViewAndintToAppViewOfSettingsComponent());
  const _text_2 = Symbol('_text_2');
  src__settings__settings_component$46template._ViewSettingsComponent3 = class _ViewSettingsComponent3 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('label');
      this.addShimE(this[_el_0]);
      this[_el_1] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_0]));
      this.createAttr(this[_el_1], 'type', 'radio');
      this.addShimC(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      this[_el_1][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_1_0)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_item = src__lottery__lottery.Lottery._check(this.locals[$_get]('$implicit'));
      let currVal_0 = dart.equals(local_item, _ctx.lottery);
      if (!(this[_expr_0] === currVal_0)) {
        this.setProp(this[_el_1], 'checked', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item.name);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
    }
    [_handle_click_1_0]($event) {
      let local_current = this[_el_1];
      let local_item = src__lottery__lottery.Lottery._check(this.locals[$_get]('$implicit'));
      this.ctx.lottery = dart.test(local_current.checked) ? local_item : this.ctx.lottery;
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    src__settings__settings_component$46template._ViewSettingsComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponent3.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponent3);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponent3, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponent3, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponent3.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.InputElement),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic)
  }));
  src__settings__settings_component$46template.viewFactory_SettingsComponent3 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponent3.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent3, AppViewAndintToAppViewOfSettingsComponent());
  const _text_4 = Symbol('_text_4');
  const _expr_2 = Symbol('_expr_2');
  src__settings__settings_component$46template._ViewSettingsComponent4 = class _ViewSettingsComponent4 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('label');
      this.addShimE(this[_el_0]);
      this[_el_1] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_0]));
      this.createAttr(this[_el_1], 'type', 'radio');
      this.addShimC(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      let _text_3 = html.Text.new(' (');
      this[_el_0][$append](_text_3);
      this[_text_4] = html.Text.new('');
      this[_el_0][$append](this[_text_4]);
      let _text_5 = html.Text.new(')');
      this[_el_0][$append](_text_5);
      this[_el_1][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_1_0)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_item = src__settings__settings.Strategy._check(this.locals[$_get]('$implicit'));
      let currVal_0 = dart.equals(local_item, _ctx.strategy);
      if (!(this[_expr_0] === currVal_0)) {
        this.setProp(this[_el_1], 'checked', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_item.shortName);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_item.name);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_4][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    [_handle_click_1_0]($event) {
      let local_current = this[_el_1];
      let local_item = src__settings__settings.Strategy._check(this.locals[$_get]('$implicit'));
      this.ctx.strategy = dart.test(local_current.checked) ? local_item : this.ctx.strategy;
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponent4.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_text_4] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__settings__settings_component$46template._ViewSettingsComponent4.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponent4.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponent4);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponent4, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponent4.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponent4, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponent4.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.InputElement),
    [_text_2]: dart.fieldType(html.Text),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__settings__settings_component$46template.viewFactory_SettingsComponent4 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponent4.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent4, AppViewAndintToAppViewOfSettingsComponent());
  src__settings__settings_component$46template._ViewSettingsComponent5 = class _ViewSettingsComponent5 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('label');
      this.addShimE(this[_el_0]);
      this[_el_1] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_0]));
      this.createAttr(this[_el_1], 'type', 'radio');
      this.addShimC(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      let _text_3 = html.Text.new('%');
      this[_el_0][$append](_text_3);
      this[_el_1][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_1_0)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_value = core.int._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_value == _ctx.interestRate;
      if (!(this[_expr_0] === currVal_0)) {
        this.setProp(this[_el_1], 'checked', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = !dart.test(_ctx.isInvesting);
      if (!(this[_expr_1] === currVal_1)) {
        this.setProp(this[_el_1], 'disabled', currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(local_value);
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_2][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    [_handle_click_1_0]($event) {
      let local_current = this[_el_1];
      let local_value = core.int._check(this.locals[$_get]('$implicit'));
      this.ctx.interestRate = dart.test(local_current.checked) ? local_value : this.ctx.interestRate;
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponent5.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__settings__settings_component$46template._ViewSettingsComponent5.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponent5.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponent5);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponent5, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponent5.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponent5, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponent5.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.InputElement),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__settings__settings_component$46template.viewFactory_SettingsComponent5 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponent5.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent5, AppViewAndintToAppViewOfSettingsComponent());
  src__settings__settings_component$46template._ViewSettingsComponent6 = class _ViewSettingsComponent6 extends src__core__linker__app_view.AppView$(src__settings__settings_component.SettingsComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = doc[$createElement]('label');
      this.addShimE(this[_el_0]);
      this[_el_1] = html.InputElement._check(src__core__linker__app_view.createAndAppend(doc, 'input', this[_el_0]));
      this.createAttr(this[_el_1], 'type', 'radio');
      this.addShimC(this[_el_1]);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      let _text_3 = html.Text.new(' year');
      this[_el_0][$append](_text_3);
      this[_text_4] = html.Text.new('');
      this[_el_0][$append](this[_text_4]);
      this[_el_1][$addEventListener]('click', this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_1_0)));
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let local_value = core.int._check(this.locals[$_get]('$implicit'));
      let currVal_0 = local_value == _ctx.years;
      if (!(this[_expr_0] === currVal_0)) {
        this.setProp(this[_el_1], 'checked', currVal_0);
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = src__core__linker__app_view_utils.interpolate0(local_value);
      if (!core.identical(this[_expr_1], currVal_1)) {
        this[_text_2][$text] = core.String._check(currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = src__core__linker__app_view_utils.interpolate0(dart.notNull(local_value) > 1 ? 's' : '');
      if (!core.identical(this[_expr_2], currVal_2)) {
        this[_text_4][$text] = core.String._check(currVal_2);
        this[_expr_2] = currVal_2;
      }
    }
    [_handle_click_1_0]($event) {
      let local_current = this[_el_1];
      let local_value = core.int._check(this.locals[$_get]('$implicit'));
      this.ctx.years = dart.test(local_current.checked) ? local_value : this.ctx.years;
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponent6.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_text_2] = null;
    this[_text_4] = null;
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    src__settings__settings_component$46template._ViewSettingsComponent6.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).from(['$implicit', null]), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__settings__settings_component$46template.ViewSettingsComponent0._renderType;
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponent6.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponent6);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponent6, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponent6.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__settings__settings_component.SettingsComponent), []),
    detectChangesInternal: dart.fnType(dart.void, []),
    [_handle_click_1_0]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponent6, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponent6.__proto__),
    [_el_0]: dart.fieldType(html.Element),
    [_el_1]: dart.fieldType(html.InputElement),
    [_text_2]: dart.fieldType(html.Text),
    [_text_4]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(dart.dynamic),
    [_expr_2]: dart.fieldType(dart.dynamic)
  }));
  src__settings__settings_component$46template.viewFactory_SettingsComponent6 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponent6.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponent6, AppViewAndintToAppViewOfSettingsComponent());
  dart.defineLazy(src__settings__settings_component$46template, {
    /*src__settings__settings_component$46template.styles$SettingsComponentHost*/get styles$SettingsComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _SettingsComponent_0_5 = Symbol('_SettingsComponent_0_5');
  src__settings__settings_component$46template._ViewSettingsComponentHost0 = class _ViewSettingsComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__settings__settings_component$46template.ViewSettingsComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_SettingsComponent_0_5] = new src__settings__settings_component.SettingsComponent.new();
      this[_compView_0].create(this[_SettingsComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfSettingsComponent()).new(0, this, this.rootEl, this[_SettingsComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        this[_SettingsComponent_0_5].ngOnInit();
      }
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__settings__settings_component$46template._ViewSettingsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_SettingsComponent_0_5] = null;
    src__settings__settings_component$46template._ViewSettingsComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__settings__settings_component$46template._ViewSettingsComponentHost0.prototype;
  dart.addTypeTests(src__settings__settings_component$46template._ViewSettingsComponentHost0);
  dart.setMethodSignature(src__settings__settings_component$46template._ViewSettingsComponentHost0, () => ({
    __proto__: dart.getMethods(src__settings__settings_component$46template._ViewSettingsComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__settings__settings_component$46template._ViewSettingsComponentHost0, () => ({
    __proto__: dart.getFields(src__settings__settings_component$46template._ViewSettingsComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__settings__settings_component$46template.ViewSettingsComponent0),
    [_SettingsComponent_0_5]: dart.fieldType(src__settings__settings_component.SettingsComponent)
  }));
  src__settings__settings_component$46template.viewFactory_SettingsComponentHost0 = function(parentView, parentIndex) {
    return new src__settings__settings_component$46template._ViewSettingsComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__settings__settings_component$46template.viewFactory_SettingsComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__settings__settings_component$46template, {
    /*src__settings__settings_component$46template.SettingsComponentNgFactory*/get SettingsComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfSettingsComponent()).new('settings-component', src__settings__settings_component$46template.viewFactory_SettingsComponentHost0, src__settings__settings_component$46template._SettingsComponentMetadata));
    },
    /*src__settings__settings_component$46template._SettingsComponentMetadata*/get _SettingsComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__settings__settings_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__settings__settings_component$46template.initReflector = function() {
    if (dart.test(src__settings__settings_component$46template._visited)) {
      return;
    }
    src__settings__settings_component$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__settings__settings_component.SettingsComponent), src__settings__settings_component$46template.SettingsComponentNgFactory);
    angular$46template.initReflector();
    src__lottery__lottery$46template.initReflector();
    src__settings__settings$46template.initReflector();
  };
  dart.fn(src__settings__settings_component$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/components_codelab/src/settings/settings_component.template.ddc", {
    "package:components_codelab/src/settings/settings_component.template.dart": src__settings__settings_component$46template
  }, '{"version":3,"sourceRoot":"","sources":["settings_component.template.dart"],"names":[],"mappings":"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","file":"settings_component.template.ddc.js"}');
  // Exports:
  return {
    src__settings__settings_component$46template: src__settings__settings_component$46template
  };
});

//# sourceMappingURL=settings_component.template.ddc.js.map
