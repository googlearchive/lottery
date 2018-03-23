define(['dart_sdk', 'packages/components_codelab/src/help/help.css.shim', 'packages/angular/src/core/linker/view_type', 'packages/angular/src/core/change_detection/constants', 'packages/angular/src/core/metadata/view', 'packages/angular/src/core/linker/app_view_utils', 'packages/angular/src/core/linker/app_view', 'packages/angular/src/common/directives/ng_switch', 'packages/components_codelab/src/help/help', 'packages/angular/src/di/reflector', 'packages/angular/angular.template'], function(dart_sdk, help$46css, view_type, constants, view, app_view_utils, app_view, ng_switch, help, reflector, angular) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__help__help$46css$46shim = help$46css.src__help__help$46css$46shim;
  const src__core__linker__view_type = view_type.src__core__linker__view_type;
  const src__core__change_detection__constants = constants.src__core__change_detection__constants;
  const src__core__metadata__view = view.src__core__metadata__view;
  const src__core__linker__app_view_utils = app_view_utils.src__core__linker__app_view_utils;
  const src__core__linker__app_view = app_view.src__core__linker__app_view;
  const src__core__linker__view_container = app_view.src__core__linker__view_container;
  const src__core__linker__template_ref = app_view.src__core__linker__template_ref;
  const src__core__linker__component_factory = app_view.src__core__linker__component_factory;
  const src__common__directives__ng_switch = ng_switch.src__common__directives__ng_switch;
  const src__help__help = help.src__help__help;
  const src__di__reflector = reflector.src__di__reflector;
  const angular$46template = angular.angular$46template;
  const _root = Object.create(null);
  const src__help__help$46template = Object.create(_root);
  const $createElement = dartx.createElement;
  const $clone = dartx.clone;
  const $append = dartx.append;
  const $text = dartx.text;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let AppViewOfHelpComponent = () => (AppViewOfHelpComponent = dart.constFn(src__core__linker__app_view.AppView$(src__help__help.HelpComponent)))();
  let AppViewAndintToAppViewOfHelpComponent = () => (AppViewAndintToAppViewOfHelpComponent = dart.constFn(dart.fnType(AppViewOfHelpComponent(), [src__core__linker__app_view.AppView, core.int])))();
  let ComponentRefOfHelpComponent = () => (ComponentRefOfHelpComponent = dart.constFn(src__core__linker__component_factory.ComponentRef$(src__help__help.HelpComponent)))();
  let AppViewAndintToAppView = () => (AppViewAndintToAppView = dart.constFn(dart.fnType(src__core__linker__app_view.AppView, [src__core__linker__app_view.AppView, core.int])))();
  let ComponentFactoryOfHelpComponent = () => (ComponentFactoryOfHelpComponent = dart.constFn(src__core__linker__component_factory.ComponentFactory$(src__help__help.HelpComponent)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  dart.defineLazy(src__help__help$46template, {
    /*src__help__help$46template.styles$HelpComponent*/get styles$HelpComponent() {
      return dart.constList([src__help__help$46css$46shim.styles], dart.dynamic);
    }
  });
  const _el_0 = Symbol('_el_0');
  const _NgSwitch_0_5 = Symbol('_NgSwitch_0_5');
  const _appEl_1 = Symbol('_appEl_1');
  const _NgSwitchWhen_1_9 = Symbol('_NgSwitchWhen_1_9');
  const _appEl_2 = Symbol('_appEl_2');
  const _NgSwitchWhen_2_9 = Symbol('_NgSwitchWhen_2_9');
  const _appEl_3 = Symbol('_appEl_3');
  const _NgSwitchDefault_3_9 = Symbol('_NgSwitchDefault_3_9');
  const _expr_0 = Symbol('_expr_0');
  let const$;
  src__help__help$46template.ViewHelpComponent0 = class ViewHelpComponent0 extends src__core__linker__app_view.AppView$(src__help__help.HelpComponent) {
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      this[_el_0] = src__core__linker__app_view.createDivAndAppend(doc, parentRenderNode);
      this[_el_0].className = 'help';
      this.addShimC(this[_el_0]);
      this[_NgSwitch_0_5] = new src__common__directives__ng_switch.NgSwitch.new();
      let _anchor_1 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_1);
      this[_appEl_1] = new src__core__linker__view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_1], src__help__help$46template.viewFactory_HelpComponent1);
      this[_NgSwitchWhen_1_9] = new src__common__directives__ng_switch.NgSwitchWhen.new(this[_appEl_1], _TemplateRef_1_8, this[_NgSwitch_0_5]);
      let _anchor_2 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_2);
      this[_appEl_2] = new src__core__linker__view_container.ViewContainer.new(2, 0, this, _anchor_2);
      let _TemplateRef_2_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_2], src__help__help$46template.viewFactory_HelpComponent2);
      this[_NgSwitchWhen_2_9] = new src__common__directives__ng_switch.NgSwitchWhen.new(this[_appEl_2], _TemplateRef_2_8, this[_NgSwitch_0_5]);
      let _anchor_3 = src__core__linker__app_view.ngAnchor[$clone](false);
      this[_el_0][$append](_anchor_3);
      this[_appEl_3] = new src__core__linker__view_container.ViewContainer.new(3, 0, this, _anchor_3);
      let _TemplateRef_3_8 = new src__core__linker__template_ref.TemplateRef.new(this[_appEl_3], src__help__help$46template.viewFactory_HelpComponent3);
      this[_NgSwitchDefault_3_9] = new src__common__directives__ng_switch.NgSwitchDefault.new(this[_appEl_3], _TemplateRef_3_8, this[_NgSwitch_0_5]);
      this.init(const$ || (const$ = dart.constList([], dart.dynamic)), null);
      return null;
    }
    injectorGetInternal(token, nodeIndex, notFoundResult) {
      if (token === dart.wrapType(src__common__directives__ng_switch.NgSwitch) && 0 <= dart.notNull(nodeIndex) && dart.notNull(nodeIndex) <= 3) {
        return this[_NgSwitch_0_5];
      }
      return notFoundResult;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      let currVal_0 = _ctx.content;
      if (!core.identical(this[_expr_0], currVal_0)) {
        this[_NgSwitch_0_5].ngSwitch = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (firstCheck) {
        this[_NgSwitchWhen_1_9].ngSwitchWhen = 'help';
      }
      if (firstCheck) {
        this[_NgSwitchWhen_2_9].ngSwitchWhen = 'about';
      }
      this[_appEl_1].detectChangesInNestedViews();
      this[_appEl_2].detectChangesInNestedViews();
      this[_appEl_3].detectChangesInNestedViews();
    }
    destroyInternal() {
      let t = this[_appEl_1];
      t == null ? null : t.destroyNestedViews();
      let t$ = this[_appEl_2];
      t$ == null ? null : t$.destroyNestedViews();
      let t$0 = this[_appEl_3];
      t$0 == null ? null : t$0.destroyNestedViews();
    }
  };
  (src__help__help$46template.ViewHelpComponent0.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_NgSwitch_0_5] = null;
    this[_appEl_1] = null;
    this[_NgSwitchWhen_1_9] = null;
    this[_appEl_2] = null;
    this[_NgSwitchWhen_2_9] = null;
    this[_appEl_3] = null;
    this[_NgSwitchDefault_3_9] = null;
    this[_expr_0] = null;
    src__help__help$46template.ViewHelpComponent0.__proto__.new.call(this, src__core__linker__view_type.ViewType.COMPONENT, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.rootEl = html.HtmlElement._check(html.document[$createElement]('help-component'));
    let t = src__help__help$46template.ViewHelpComponent0._renderType;
    t == null ? src__help__help$46template.ViewHelpComponent0._renderType = src__core__linker__app_view_utils.appViewUtils.createRenderType('', src__core__metadata__view.ViewEncapsulation.Emulated, src__help__help$46template.styles$HelpComponent) : t;
    this.setupComponentType(src__help__help$46template.ViewHelpComponent0._renderType);
  }).prototype = src__help__help$46template.ViewHelpComponent0.prototype;
  dart.addTypeTests(src__help__help$46template.ViewHelpComponent0);
  dart.setMethodSignature(src__help__help$46template.ViewHelpComponent0, () => ({
    __proto__: dart.getMethods(src__help__help$46template.ViewHelpComponent0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__help__help.HelpComponent), []),
    injectorGetInternal: dart.fnType(dart.dynamic, [dart.dynamic, core.int, dart.dynamic]),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__help__help$46template.ViewHelpComponent0, () => ({
    __proto__: dart.getFields(src__help__help$46template.ViewHelpComponent0.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_NgSwitch_0_5]: dart.fieldType(src__common__directives__ng_switch.NgSwitch),
    [_appEl_1]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgSwitchWhen_1_9]: dart.fieldType(src__common__directives__ng_switch.NgSwitchWhen),
    [_appEl_2]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgSwitchWhen_2_9]: dart.fieldType(src__common__directives__ng_switch.NgSwitchWhen),
    [_appEl_3]: dart.fieldType(src__core__linker__view_container.ViewContainer),
    [_NgSwitchDefault_3_9]: dart.fieldType(src__common__directives__ng_switch.NgSwitchDefault),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(src__help__help$46template.ViewHelpComponent0, {
    /*src__help__help$46template.ViewHelpComponent0._renderType*/get _renderType() {
      return null;
    },
    set _renderType(_) {}
  });
  src__help__help$46template.viewFactory_HelpComponent0 = function(parentView, parentIndex) {
    return new src__help__help$46template.ViewHelpComponent0.new(parentView, parentIndex);
  };
  dart.fn(src__help__help$46template.viewFactory_HelpComponent0, AppViewAndintToAppViewOfHelpComponent());
  const _el_1 = Symbol('_el_1');
  const _el_3 = Symbol('_el_3');
  const _el_5 = Symbol('_el_5');
  const _el_7 = Symbol('_el_7');
  const _el_8 = Symbol('_el_8');
  const _el_10 = Symbol('_el_10');
  const _el_12 = Symbol('_el_12');
  const _el_15 = Symbol('_el_15');
  const _el_18 = Symbol('_el_18');
  const _el_21 = Symbol('_el_21');
  const _el_23 = Symbol('_el_23');
  const _el_26 = Symbol('_el_26');
  const _el_29 = Symbol('_el_29');
  const _el_30 = Symbol('_el_30');
  const _el_33 = Symbol('_el_33');
  const _el_35 = Symbol('_el_35');
  const _el_36 = Symbol('_el_36');
  const _el_38 = Symbol('_el_38');
  const _el_40 = Symbol('_el_40');
  const _el_43 = Symbol('_el_43');
  const _el_45 = Symbol('_el_45');
  const _el_47 = Symbol('_el_47');
  const _el_48 = Symbol('_el_48');
  const _el_50 = Symbol('_el_50');
  const _el_51 = Symbol('_el_51');
  const _el_53 = Symbol('_el_53');
  const _el_55 = Symbol('_el_55');
  src__help__help$46template._ViewHelpComponent1 = class _ViewHelpComponent1 extends src__core__linker__app_view.AppView$(src__help__help.HelpComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_0]);
      this.addShimE(this[_el_1]);
      let _text_2 = html.Text.new('It\'s hard to explain what a spectacularly bad idea it is to bet in a lottery.\n      You have a better chance of being struck by lightning—twice—than winning the\n      Powerball lottery. But that doesn\'t stop people from trying.');
      this[_el_1][$append](_text_2);
      this[_el_3] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_0]);
      this.addShimE(this[_el_3]);
      let _text_4 = html.Text.new('Our approach is to let people see the results of betting on the lottery,\n      versus saving their disposable income.\n      It all happens much more quickly than in real life,\n      and you won\'t lose a cent.');
      this[_el_3][$append](_text_4);
      this[_el_5] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_0]);
      this.addShimE(this[_el_5]);
      let _text_6 = html.Text.new('Here\'s how the simulation works:');
      this[_el_5][$append](_text_6);
      this[_el_7] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', this[_el_0]));
      this.addShimC(this[_el_7]);
      this[_el_8] = src__core__linker__app_view.createAndAppend(doc, 'li', this[_el_7]);
      this.addShimE(this[_el_8]);
      let _text_9 = html.Text.new('Each "day" has two phases. First you earn your disposable income ($2, by default).\n        Then you bet, immediately getting the results.');
      this[_el_8][$append](_text_9);
      this[_el_10] = src__core__linker__app_view.createAndAppend(doc, 'li', this[_el_7]);
      this.addShimE(this[_el_10]);
      let _text_11 = html.Text.new('You can choose different');
      this[_el_10][$append](_text_11);
      this[_el_12] = src__core__linker__app_view.createAndAppend(doc, 'b', this[_el_10]);
      this.addShimE(this[_el_12]);
      let _text_13 = html.Text.new('betting strategies');
      this[_el_12][$append](_text_13);
      let _text_14 = html.Text.new('and even different');
      this[_el_10][$append](_text_14);
      this[_el_15] = src__core__linker__app_view.createAndAppend(doc, 'b', this[_el_10]);
      this.addShimE(this[_el_15]);
      let _text_16 = html.Text.new('lotteries');
      this[_el_15][$append](_text_16);
      let _text_17 = html.Text.new('.\n        We only simulate one');
      this[_el_10][$append](_text_17);
      this[_el_18] = src__core__linker__app_view.createAndAppend(doc, 'em', this[_el_10]);
      this.addShimE(this[_el_18]);
      let _text_19 = html.Text.new('real');
      this[_el_18][$append](_text_19);
      let _text_20 = html.Text.new('lottery, at the moment, but even the mythical\n        fair lottery is interesting.');
      this[_el_10][$append](_text_20);
      this[_el_21] = src__core__linker__app_view.createAndAppend(doc, 'li', this[_el_7]);
      this.addShimE(this[_el_21]);
      let _text_22 = html.Text.new('You can also choose the');
      this[_el_21][$append](_text_22);
      this[_el_23] = src__core__linker__app_view.createAndAppend(doc, 'b', this[_el_21]);
      this.addShimE(this[_el_23]);
      let _text_24 = html.Text.new('length of time');
      this[_el_23][$append](_text_24);
      let _text_25 = html.Text.new('to simulate and the');
      this[_el_21][$append](_text_25);
      this[_el_26] = src__core__linker__app_view.createAndAppend(doc, 'b', this[_el_21]);
      this.addShimE(this[_el_26]);
      let _text_27 = html.Text.new('interest rate');
      this[_el_26][$append](_text_27);
      let _text_28 = html.Text.new('for your invested money.');
      this[_el_21][$append](_text_28);
      this[_el_29] = src__core__linker__app_view.createAndAppend(doc, 'li', this[_el_7]);
      this.addShimE(this[_el_29]);
      this[_el_30] = src__core__linker__app_view.createAndAppend(doc, 'b', this[_el_29]);
      this.addShimE(this[_el_30]);
      let _text_31 = html.Text.new('Everything is completely random.');
      this[_el_30][$append](_text_31);
      let _text_32 = html.Text.new('It\'s perfectly possible for you to win the jackpot here,\n        but it\'s just as unlikely to happen as it is in real life.');
      this[_el_29][$append](_text_32);
      this[_el_33] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this.addShimE(this[_el_33]);
      let _text_34 = html.Text.new('Tips');
      this[_el_33][$append](_text_34);
      this[_el_35] = src__core__linker__app_view.createAndAppend(doc, 'dl', this[_el_0]);
      this.addShimE(this[_el_35]);
      this[_el_36] = src__core__linker__app_view.createAndAppend(doc, 'dt', this[_el_35]);
      this.addShimE(this[_el_36]);
      let _text_37 = html.Text.new('Simulation running too slowly?');
      this[_el_36][$append](_text_37);
      this[_el_38] = src__core__linker__app_view.createAndAppend(doc, 'dd', this[_el_35]);
      this.addShimE(this[_el_38]);
      let _text_39 = html.Text.new('Toggle');
      this[_el_38][$append](_text_39);
      this[_el_40] = src__core__linker__app_view.createAndAppend(doc, 'b', this[_el_38]);
      this.addShimE(this[_el_40]);
      let _text_41 = html.Text.new('Go faster');
      this[_el_40][$append](_text_41);
      let _text_42 = html.Text.new('.');
      this[_el_38][$append](_text_42);
      this[_el_43] = src__core__linker__app_view.createAndAppend(doc, 'dt', this[_el_35]);
      this.addShimE(this[_el_43]);
      let _text_44 = html.Text.new('Simulation running too quickly?');
      this[_el_43][$append](_text_44);
      this[_el_45] = src__core__linker__app_view.createAndAppend(doc, 'dd', this[_el_35]);
      this.addShimE(this[_el_45]);
      let _text_46 = html.Text.new('Click the Pause button:');
      this[_el_45][$append](_text_46);
      this[_el_47] = src__core__linker__app_view.createAndAppend(doc, 'material-icon', this[_el_45]);
      this.createAttr(this[_el_47], 'aria-label', 'image from the Pause button');
      this.createAttr(this[_el_47], 'icon', 'pause');
      this.addShimE(this[_el_47]);
      this[_el_48] = src__core__linker__app_view.createAndAppend(doc, 'br', this[_el_45]);
      this.addShimE(this[_el_48]);
      let _text_49 = html.Text.new('Then click the Step button to advance one phase (half a day):');
      this[_el_45][$append](_text_49);
      this[_el_50] = src__core__linker__app_view.createAndAppend(doc, 'material-icon', this[_el_45]);
      this.createAttr(this[_el_50], 'aria-label', 'image from the Step button');
      this.createAttr(this[_el_50], 'icon', 'skip_next');
      this.addShimE(this[_el_50]);
      this[_el_51] = src__core__linker__app_view.createAndAppend(doc, 'dt', this[_el_35]);
      this.addShimE(this[_el_51]);
      let _text_52 = html.Text.new('Want to start all over?');
      this[_el_51][$append](_text_52);
      this[_el_53] = src__core__linker__app_view.createAndAppend(doc, 'dd', this[_el_35]);
      this.addShimE(this[_el_53]);
      let _text_54 = html.Text.new('Click the Reset button:');
      this[_el_53][$append](_text_54);
      this[_el_55] = src__core__linker__app_view.createAndAppend(doc, 'material-icon', this[_el_53]);
      this.createAttr(this[_el_55], 'aria-label', 'image from the Reset button');
      this.createAttr(this[_el_55], 'icon', 'replay');
      this.addShimE(this[_el_55]);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (src__help__help$46template._ViewHelpComponent1.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_3] = null;
    this[_el_5] = null;
    this[_el_7] = null;
    this[_el_8] = null;
    this[_el_10] = null;
    this[_el_12] = null;
    this[_el_15] = null;
    this[_el_18] = null;
    this[_el_21] = null;
    this[_el_23] = null;
    this[_el_26] = null;
    this[_el_29] = null;
    this[_el_30] = null;
    this[_el_33] = null;
    this[_el_35] = null;
    this[_el_36] = null;
    this[_el_38] = null;
    this[_el_40] = null;
    this[_el_43] = null;
    this[_el_45] = null;
    this[_el_47] = null;
    this[_el_48] = null;
    this[_el_50] = null;
    this[_el_51] = null;
    this[_el_53] = null;
    this[_el_55] = null;
    src__help__help$46template._ViewHelpComponent1.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__help__help$46template.ViewHelpComponent0._renderType;
  }).prototype = src__help__help$46template._ViewHelpComponent1.prototype;
  dart.addTypeTests(src__help__help$46template._ViewHelpComponent1);
  dart.setMethodSignature(src__help__help$46template._ViewHelpComponent1, () => ({
    __proto__: dart.getMethods(src__help__help$46template._ViewHelpComponent1.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__help__help.HelpComponent), [])
  }));
  dart.setFieldSignature(src__help__help$46template._ViewHelpComponent1, () => ({
    __proto__: dart.getFields(src__help__help$46template._ViewHelpComponent1.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_el_3]: dart.fieldType(html.Element),
    [_el_5]: dart.fieldType(html.Element),
    [_el_7]: dart.fieldType(html.UListElement),
    [_el_8]: dart.fieldType(html.Element),
    [_el_10]: dart.fieldType(html.Element),
    [_el_12]: dart.fieldType(html.Element),
    [_el_15]: dart.fieldType(html.Element),
    [_el_18]: dart.fieldType(html.Element),
    [_el_21]: dart.fieldType(html.Element),
    [_el_23]: dart.fieldType(html.Element),
    [_el_26]: dart.fieldType(html.Element),
    [_el_29]: dart.fieldType(html.Element),
    [_el_30]: dart.fieldType(html.Element),
    [_el_33]: dart.fieldType(html.Element),
    [_el_35]: dart.fieldType(html.Element),
    [_el_36]: dart.fieldType(html.Element),
    [_el_38]: dart.fieldType(html.Element),
    [_el_40]: dart.fieldType(html.Element),
    [_el_43]: dart.fieldType(html.Element),
    [_el_45]: dart.fieldType(html.Element),
    [_el_47]: dart.fieldType(html.Element),
    [_el_48]: dart.fieldType(html.Element),
    [_el_50]: dart.fieldType(html.Element),
    [_el_51]: dart.fieldType(html.Element),
    [_el_53]: dart.fieldType(html.Element),
    [_el_55]: dart.fieldType(html.Element)
  }));
  src__help__help$46template.viewFactory_HelpComponent1 = function(parentView, parentIndex) {
    return new src__help__help$46template._ViewHelpComponent1.new(parentView, parentIndex);
  };
  dart.fn(src__help__help$46template.viewFactory_HelpComponent1, AppViewAndintToAppViewOfHelpComponent());
  const _el_2 = Symbol('_el_2');
  const _el_4 = Symbol('_el_4');
  const _el_9 = Symbol('_el_9');
  const _el_11 = Symbol('_el_11');
  const _el_13 = Symbol('_el_13');
  const _el_16 = Symbol('_el_16');
  const _el_19 = Symbol('_el_19');
  const _el_22 = Symbol('_el_22');
  const _el_25 = Symbol('_el_25');
  const _el_27 = Symbol('_el_27');
  const _el_31 = Symbol('_el_31');
  const _el_32 = Symbol('_el_32');
  const _el_34 = Symbol('_el_34');
  const _el_39 = Symbol('_el_39');
  const _el_42 = Symbol('_el_42');
  src__help__help$46template._ViewHelpComponent2 = class _ViewHelpComponent2 extends src__core__linker__app_view.AppView$(src__help__help.HelpComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      this[_el_1] = src__core__linker__app_view.createAndAppend(doc, 'img', this[_el_0]);
      this.createAttr(this[_el_1], 'align', 'right');
      this.createAttr(this[_el_1], 'alt', 'Cartoon guy presents a lottery machine ejecting powerballs');
      this.createAttr(this[_el_1], 'height', '300px');
      this.createAttr(this[_el_1], 'src', 'img/cartoon.jpeg');
      this.addShimE(this[_el_1]);
      this[_el_2] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_0]);
      this.addShimE(this[_el_2]);
      let _text_3 = html.Text.new('Two facets of this app might interest you:');
      this[_el_2][$append](_text_3);
      this[_el_4] = html.UListElement._check(src__core__linker__app_view.createAndAppend(doc, 'ul', this[_el_0]));
      this.addShimC(this[_el_4]);
      this[_el_5] = src__core__linker__app_view.createAndAppend(doc, 'li', this[_el_4]);
      this.addShimE(this[_el_5]);
      let _text_6 = html.Text.new('How the lottery results are calculated');
      this[_el_5][$append](_text_6);
      this[_el_7] = src__core__linker__app_view.createAndAppend(doc, 'li', this[_el_4]);
      this.addShimE(this[_el_7]);
      let _text_8 = html.Text.new('How this app was coded');
      this[_el_7][$append](_text_8);
      this[_el_9] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this.addShimE(this[_el_9]);
      let _text_10 = html.Text.new('How the lottery results are calculated');
      this[_el_9][$append](_text_10);
      this[_el_11] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_0]);
      this.addShimE(this[_el_11]);
      let _text_12 = html.Text.new('This app uses simple probabilities from sources such as the');
      this[_el_11][$append](_text_12);
      this[_el_13] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_11]));
      this.createAttr(this[_el_13], 'href', 'http://www.powerball.com/powerball/pb_prizes.asp');
      this.addShimC(this[_el_13]);
      let _text_14 = html.Text.new('Powerball site');
      this[_el_13][$append](_text_14);
      let _text_15 = html.Text.new('to draw tickets. You can go much deeper using');
      this[_el_11][$append](_text_15);
      this[_el_16] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_11]));
      this.createAttr(this[_el_16], 'href', 'https://en.wikipedia.org/wiki/Lottery_mathematics');
      this.addShimC(this[_el_16]);
      let _text_17 = html.Text.new('lottery mathematics');
      this[_el_16][$append](_text_17);
      let _text_18 = html.Text.new('.');
      this[_el_11][$append](_text_18);
      this[_el_19] = src__core__linker__app_view.createAndAppend(doc, 'h2', this[_el_0]);
      this.addShimE(this[_el_19]);
      let _text_20 = html.Text.new('How this app was coded');
      this[_el_19][$append](_text_20);
      this[_el_21] = src__core__linker__app_view.createAndAppend(doc, 'p', this[_el_0]);
      this.addShimE(this[_el_21]);
      this[_el_22] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_21]));
      this.createAttr(this[_el_22], 'href', 'https://github.com/filiph');
      this.addShimC(this[_el_22]);
      let _text_23 = html.Text.new('Filip');
      this[_el_22][$append](_text_23);
      let _text_24 = html.Text.new('wrote this app to accompany a code lab demonstrating\n      how to use an early release of AngularDart Components.\n      More information:');
      this[_el_21][$append](_text_24);
      this[_el_25] = src__core__linker__app_view.createAndAppend(doc, 'dl', this[_el_0]);
      this.addShimE(this[_el_25]);
      this[_el_26] = src__core__linker__app_view.createAndAppend(doc, 'dt', this[_el_25]);
      this.addShimE(this[_el_26]);
      this[_el_27] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_26]));
      this.createAttr(this[_el_27], 'href', 'http://www.dartlang.org');
      this.addShimC(this[_el_27]);
      let _text_28 = html.Text.new('www.dartlang.org');
      this[_el_27][$append](_text_28);
      this[_el_29] = src__core__linker__app_view.createAndAppend(doc, 'dd', this[_el_25]);
      this.addShimE(this[_el_29]);
      let _text_30 = html.Text.new('The Dart language and libraries.');
      this[_el_29][$append](_text_30);
      this[_el_31] = src__core__linker__app_view.createAndAppend(doc, 'dt', this[_el_25]);
      this.addShimE(this[_el_31]);
      this[_el_32] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_31]));
      this.createAttr(this[_el_32], 'href', 'http://webdev.dartlang.org');
      this.addShimC(this[_el_32]);
      let _text_33 = html.Text.new('webdev.dartlang.org');
      this[_el_32][$append](_text_33);
      this[_el_34] = src__core__linker__app_view.createAndAppend(doc, 'dd', this[_el_25]);
      this.addShimE(this[_el_34]);
      let _text_35 = html.Text.new('How to write web apps with Dart. Includes');
      this[_el_34][$append](_text_35);
      this[_el_36] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_34]));
      this.createAttr(this[_el_36], 'href', 'https://webdev.dartlang.org/codelabs');
      this.addShimC(this[_el_36]);
      let _text_37 = html.Text.new('code\n\t       labs');
      this[_el_36][$append](_text_37);
      let _text_38 = html.Text.new('—step-by-step introductions to writing Dart code for the web.');
      this[_el_34][$append](_text_38);
      this[_el_39] = src__core__linker__app_view.createAndAppend(doc, 'dt', this[_el_25]);
      this.addShimE(this[_el_39]);
      this[_el_40] = html.AnchorElement._check(src__core__linker__app_view.createAndAppend(doc, 'a', this[_el_39]));
      this.createAttr(this[_el_40], 'href', 'http://angulardart.org');
      this.addShimC(this[_el_40]);
      let _text_41 = html.Text.new('angulardart.org');
      this[_el_40][$append](_text_41);
      this[_el_42] = src__core__linker__app_view.createAndAppend(doc, 'dd', this[_el_25]);
      this.addShimE(this[_el_42]);
      let _text_43 = html.Text.new('Detailed documentation for using AngularDart.');
      this[_el_42][$append](_text_43);
      this.init0(this[_el_0]);
      return null;
    }
  };
  (src__help__help$46template._ViewHelpComponent2.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_el_1] = null;
    this[_el_2] = null;
    this[_el_4] = null;
    this[_el_5] = null;
    this[_el_7] = null;
    this[_el_9] = null;
    this[_el_11] = null;
    this[_el_13] = null;
    this[_el_16] = null;
    this[_el_19] = null;
    this[_el_21] = null;
    this[_el_22] = null;
    this[_el_25] = null;
    this[_el_26] = null;
    this[_el_27] = null;
    this[_el_29] = null;
    this[_el_31] = null;
    this[_el_32] = null;
    this[_el_34] = null;
    this[_el_36] = null;
    this[_el_39] = null;
    this[_el_40] = null;
    this[_el_42] = null;
    src__help__help$46template._ViewHelpComponent2.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__help__help$46template.ViewHelpComponent0._renderType;
  }).prototype = src__help__help$46template._ViewHelpComponent2.prototype;
  dart.addTypeTests(src__help__help$46template._ViewHelpComponent2);
  dart.setMethodSignature(src__help__help$46template._ViewHelpComponent2, () => ({
    __proto__: dart.getMethods(src__help__help$46template._ViewHelpComponent2.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__help__help.HelpComponent), [])
  }));
  dart.setFieldSignature(src__help__help$46template._ViewHelpComponent2, () => ({
    __proto__: dart.getFields(src__help__help$46template._ViewHelpComponent2.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_el_1]: dart.fieldType(html.Element),
    [_el_2]: dart.fieldType(html.Element),
    [_el_4]: dart.fieldType(html.UListElement),
    [_el_5]: dart.fieldType(html.Element),
    [_el_7]: dart.fieldType(html.Element),
    [_el_9]: dart.fieldType(html.Element),
    [_el_11]: dart.fieldType(html.Element),
    [_el_13]: dart.fieldType(html.AnchorElement),
    [_el_16]: dart.fieldType(html.AnchorElement),
    [_el_19]: dart.fieldType(html.Element),
    [_el_21]: dart.fieldType(html.Element),
    [_el_22]: dart.fieldType(html.AnchorElement),
    [_el_25]: dart.fieldType(html.Element),
    [_el_26]: dart.fieldType(html.Element),
    [_el_27]: dart.fieldType(html.AnchorElement),
    [_el_29]: dart.fieldType(html.Element),
    [_el_31]: dart.fieldType(html.Element),
    [_el_32]: dart.fieldType(html.AnchorElement),
    [_el_34]: dart.fieldType(html.Element),
    [_el_36]: dart.fieldType(html.AnchorElement),
    [_el_39]: dart.fieldType(html.Element),
    [_el_40]: dart.fieldType(html.AnchorElement),
    [_el_42]: dart.fieldType(html.Element)
  }));
  src__help__help$46template.viewFactory_HelpComponent2 = function(parentView, parentIndex) {
    return new src__help__help$46template._ViewHelpComponent2.new(parentView, parentIndex);
  };
  dart.fn(src__help__help$46template.viewFactory_HelpComponent2, AppViewAndintToAppViewOfHelpComponent());
  const _text_2 = Symbol('_text_2');
  src__help__help$46template._ViewHelpComponent3 = class _ViewHelpComponent3 extends src__core__linker__app_view.AppView$(src__help__help.HelpComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.DivElement._check(doc[$createElement]('div'));
      this.addShimC(this[_el_0]);
      let _text_1 = html.Text.new(' Uh oh. You\'ve found a bug. No content available for ');
      this[_el_0][$append](_text_1);
      this[_text_2] = html.Text.new('');
      this[_el_0][$append](this[_text_2]);
      let _text_3 = html.Text.new('. ');
      this[_el_0][$append](_text_3);
      this.init0(this[_el_0]);
      return null;
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let l = _ctx.content;
      let currVal_0 = l != null ? l : '';
      if (!(this[_expr_0] === currVal_0)) {
        this[_text_2][$text] = currVal_0;
        this[_expr_0] = currVal_0;
      }
    }
  };
  (src__help__help$46template._ViewHelpComponent3.new = function(parentView, parentIndex) {
    this[_el_0] = null;
    this[_text_2] = null;
    this[_expr_0] = null;
    src__help__help$46template._ViewHelpComponent3.__proto__.new.call(this, src__core__linker__view_type.ViewType.EMBEDDED, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
    this.componentType = src__help__help$46template.ViewHelpComponent0._renderType;
  }).prototype = src__help__help$46template._ViewHelpComponent3.prototype;
  dart.addTypeTests(src__help__help$46template._ViewHelpComponent3);
  dart.setMethodSignature(src__help__help$46template._ViewHelpComponent3, () => ({
    __proto__: dart.getMethods(src__help__help$46template._ViewHelpComponent3.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef$(src__help__help.HelpComponent), []),
    detectChangesInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__help__help$46template._ViewHelpComponent3, () => ({
    __proto__: dart.getFields(src__help__help$46template._ViewHelpComponent3.__proto__),
    [_el_0]: dart.fieldType(html.DivElement),
    [_text_2]: dart.fieldType(html.Text),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  src__help__help$46template.viewFactory_HelpComponent3 = function(parentView, parentIndex) {
    return new src__help__help$46template._ViewHelpComponent3.new(parentView, parentIndex);
  };
  dart.fn(src__help__help$46template.viewFactory_HelpComponent3, AppViewAndintToAppViewOfHelpComponent());
  dart.defineLazy(src__help__help$46template, {
    /*src__help__help$46template.styles$HelpComponentHost*/get styles$HelpComponentHost() {
      return dart.constList([], dart.dynamic);
    }
  });
  const _compView_0 = Symbol('_compView_0');
  const _HelpComponent_0_5 = Symbol('_HelpComponent_0_5');
  src__help__help$46template._ViewHelpComponentHost0 = class _ViewHelpComponentHost0 extends src__core__linker__app_view.AppView {
    build() {
      this[_compView_0] = new src__help__help$46template.ViewHelpComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_HelpComponent_0_5] = new src__help__help.HelpComponent.new();
      this[_compView_0].create(this[_HelpComponent_0_5], this.projectableNodes);
      this.init0(this.rootEl);
      return new (ComponentRefOfHelpComponent()).new(0, this, this.rootEl, this[_HelpComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      let t = this[_compView_0];
      t == null ? null : t.destroy();
    }
  };
  (src__help__help$46template._ViewHelpComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_HelpComponent_0_5] = null;
    src__help__help$46template._ViewHelpComponentHost0.__proto__.new.call(this, src__core__linker__view_type.ViewType.HOST, new (IdentityMapOfString$dynamic()).new(), parentView, parentIndex, src__core__change_detection__constants.ChangeDetectionStrategy.CheckAlways);
  }).prototype = src__help__help$46template._ViewHelpComponentHost0.prototype;
  dart.addTypeTests(src__help__help$46template._ViewHelpComponentHost0);
  dart.setMethodSignature(src__help__help$46template._ViewHelpComponentHost0, () => ({
    __proto__: dart.getMethods(src__help__help$46template._ViewHelpComponentHost0.__proto__),
    build: dart.fnType(src__core__linker__component_factory.ComponentRef, []),
    detectChangesInternal: dart.fnType(dart.void, []),
    destroyInternal: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__help__help$46template._ViewHelpComponentHost0, () => ({
    __proto__: dart.getFields(src__help__help$46template._ViewHelpComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(src__help__help$46template.ViewHelpComponent0),
    [_HelpComponent_0_5]: dart.fieldType(src__help__help.HelpComponent)
  }));
  src__help__help$46template.viewFactory_HelpComponentHost0 = function(parentView, parentIndex) {
    return new src__help__help$46template._ViewHelpComponentHost0.new(parentView, parentIndex);
  };
  dart.fn(src__help__help$46template.viewFactory_HelpComponentHost0, AppViewAndintToAppView());
  dart.defineLazy(src__help__help$46template, {
    /*src__help__help$46template.HelpComponentNgFactory*/get HelpComponentNgFactory() {
      return dart.const(new (ComponentFactoryOfHelpComponent()).new('help-component', src__help__help$46template.viewFactory_HelpComponentHost0, src__help__help$46template._HelpComponentMetadata));
    },
    /*src__help__help$46template._HelpComponentMetadata*/get _HelpComponentMetadata() {
      return dart.constList([], dart.dynamic);
    },
    /*src__help__help$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  src__help__help$46template.initReflector = function() {
    if (dart.test(src__help__help$46template._visited)) {
      return;
    }
    src__help__help$46template._visited = true;
    src__di__reflector.registerComponent(dart.wrapType(src__help__help.HelpComponent), src__help__help$46template.HelpComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.fn(src__help__help$46template.initReflector, VoidTovoid());
  dart.trackLibraries("packages/components_codelab/src/help/help.template.ddc", {
    "package:components_codelab/src/help/help.template.dart": src__help__help$46template
  }, '{"version":3,"sourceRoot":"","sources":["help.template.dart"],"names":[],"mappings":"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","file":"help.template.ddc.js"}');
  // Exports:
  return {
    src__help__help$46template: src__help__help$46template
  };
});

//# sourceMappingURL=help.template.ddc.js.map
