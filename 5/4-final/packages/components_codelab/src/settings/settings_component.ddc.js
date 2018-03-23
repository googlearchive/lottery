define(['dart_sdk', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/components_codelab/src/settings/settings', 'packages/components_codelab/src/lottery/lottery'], function(dart_sdk, lifecycle_hooks, settings, lottery) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__settings__settings = settings.src__settings__settings;
  const src__lottery__lottery = lottery.src__lottery__lottery;
  const _root = Object.create(null);
  const src__settings__settings_component = Object.create(_root);
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  const _settingsChanged = Symbol('_settingsChanged');
  src__settings__settings_component.SettingsComponent = class SettingsComponent extends core.Object {
    get initialCashOptions() {
      return this[initialCashOptions];
    }
    set initialCashOptions(value) {
      super.initialCashOptions = value;
    }
    get dailyDisposableOptions() {
      return this[dailyDisposableOptions];
    }
    set dailyDisposableOptions(value) {
      super.dailyDisposableOptions = value;
    }
    get interestRateOptions() {
      return this[interestRateOptions];
    }
    set interestRateOptions(value) {
      super.interestRateOptions = value;
    }
    get yearsOptions() {
      return this[yearsOptions];
    }
    set yearsOptions(value) {
      super.yearsOptions = value;
    }
    get settingsChanged() {
      return this[_settingsChanged].stream;
    }
    get settings() {
      return this[settings$];
    }
    set settings(value) {
      this[settings$] = value;
    }
    get initialCash() {
      return this[initialCash];
    }
    set initialCash(value) {
      this[initialCash] = value;
    }
    get dailyDisposable() {
      return this[dailyDisposable];
    }
    set dailyDisposable(value) {
      this[dailyDisposable] = value;
    }
    get isInvesting() {
      return this[isInvesting];
    }
    set isInvesting(value) {
      this[isInvesting] = value;
    }
    get interestRate() {
      return this[interestRate];
    }
    set interestRate(value) {
      this[interestRate] = value;
    }
    get years() {
      return this[years];
    }
    set years(value) {
      this[years] = value;
    }
    get lottery() {
      return this[lottery$];
    }
    set lottery(value) {
      this[lottery$] = value;
    }
    get strategy() {
      return this[strategy];
    }
    set strategy(value) {
      this[strategy] = value;
    }
    ngOnInit() {
      this.resetWallet();
      this.resetBetting();
      this.resetOther();
    }
    resetBetting() {
      this.lottery = this.settings.lottery;
      this.strategy = this.settings.strategy;
    }
    resetWallet() {
      this.initialCash = this.settings.initialCash;
      this.dailyDisposable = this.settings.dailyDisposable;
    }
    resetOther() {
      if (this.settings.interestRate === 0) {
        this.isInvesting = false;
      } else {
        this.isInvesting = true;
        this.interestRate = this.settings.interestRate;
      }
      this.years = this.settings.years;
    }
    settingsUpdated() {
      this.settings.initialCash = this.initialCash;
      this.settings.dailyDisposable = this.dailyDisposable;
      this.settings.lottery = this.lottery;
      this.settings.strategy = this.strategy;
      this.settings.interestRate = dart.test(this.isInvesting) ? this.interestRate : 0;
      this.settings.years = this.years;
      this[_settingsChanged].add(null);
    }
  };
  (src__settings__settings_component.SettingsComponent.new = function() {
    this[initialCashOptions] = JSArrayOfint().of([0, 10, 100, 1000]);
    this[dailyDisposableOptions] = JSArrayOfint().of([0, 2, 4, 10]);
    this[interestRateOptions] = JSArrayOfint().of([1, 3, 5, 10]);
    this[yearsOptions] = JSArrayOfint().of([1, 2, 3, 5, 10]);
    this[_settingsChanged] = StreamControllerOfNull().new();
    this[settings$] = null;
    this[initialCash] = null;
    this[dailyDisposable] = null;
    this[isInvesting] = true;
    this[interestRate] = null;
    this[years] = null;
    this[lottery$] = null;
    this[strategy] = null;
  }).prototype = src__settings__settings_component.SettingsComponent.prototype;
  dart.addTypeTests(src__settings__settings_component.SettingsComponent);
  const initialCashOptions = Symbol("SettingsComponent.initialCashOptions");
  const dailyDisposableOptions = Symbol("SettingsComponent.dailyDisposableOptions");
  const interestRateOptions = Symbol("SettingsComponent.interestRateOptions");
  const yearsOptions = Symbol("SettingsComponent.yearsOptions");
  const settings$ = Symbol("SettingsComponent.settings");
  const initialCash = Symbol("SettingsComponent.initialCash");
  const dailyDisposable = Symbol("SettingsComponent.dailyDisposable");
  const isInvesting = Symbol("SettingsComponent.isInvesting");
  const interestRate = Symbol("SettingsComponent.interestRate");
  const years = Symbol("SettingsComponent.years");
  const lottery$ = Symbol("SettingsComponent.lottery");
  const strategy = Symbol("SettingsComponent.strategy");
  src__settings__settings_component.SettingsComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(src__settings__settings_component.SettingsComponent, () => ({
    __proto__: dart.getMethods(src__settings__settings_component.SettingsComponent.__proto__),
    ngOnInit: dart.fnType(dart.dynamic, []),
    resetBetting: dart.fnType(dart.void, []),
    resetWallet: dart.fnType(dart.void, []),
    resetOther: dart.fnType(dart.void, []),
    settingsUpdated: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__settings__settings_component.SettingsComponent, () => ({
    __proto__: dart.getGetters(src__settings__settings_component.SettingsComponent.__proto__),
    settingsChanged: dart.fnType(async.Stream$(core.Null), [])
  }));
  dart.setFieldSignature(src__settings__settings_component.SettingsComponent, () => ({
    __proto__: dart.getFields(src__settings__settings_component.SettingsComponent.__proto__),
    initialCashOptions: dart.finalFieldType(ListOfint()),
    dailyDisposableOptions: dart.finalFieldType(ListOfint()),
    interestRateOptions: dart.finalFieldType(ListOfint()),
    yearsOptions: dart.finalFieldType(ListOfint()),
    [_settingsChanged]: dart.finalFieldType(StreamControllerOfNull()),
    settings: dart.fieldType(src__settings__settings.Settings),
    initialCash: dart.fieldType(core.int),
    dailyDisposable: dart.fieldType(core.int),
    isInvesting: dart.fieldType(core.bool),
    interestRate: dart.fieldType(core.int),
    years: dart.fieldType(core.int),
    lottery: dart.fieldType(src__lottery__lottery.Lottery),
    strategy: dart.fieldType(src__settings__settings.Strategy)
  }));
  dart.trackLibraries("packages/components_codelab/src/settings/settings_component.ddc", {
    "package:components_codelab/src/settings/settings_component.dart": src__settings__settings_component
  }, '{"version":3,"sourceRoot":"","sources":["settings_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IA0BQ;;;;;;IAEA;;;;;;IAEA;;;;;;IAEA;;;;;;;YAK8B,uBAAgB,OAAO;;IAGlD;;;;;;IAEL;;;;;;IAEA;;;;;;IAEC;;;;;;IAED;;;;;;IAEA;;;;;;IAEI;;;;;;IAEC;;;;;;;AAIP,sBAAW;AACX,uBAAY;AACZ,qBAAU;IACZ;;AAGE,kBAAO,GAAG,aAAQ,QAAQ;AAC1B,mBAAQ,GAAG,aAAQ,SAAS;IAC9B;;AAGE,sBAAW,GAAG,aAAQ,YAAY;AAClC,0BAAe,GAAG,aAAQ,gBAAgB;IAC5C;;AAGE,UAAI,aAAQ,aAAa,KAAI,GAAG;AAC9B,wBAAW,GAAG;aACT;AACL,wBAAW,GAAG;AACd,yBAAY,GAAG,aAAQ,aAAa;;AAEtC,gBAAK,GAAG,aAAQ,MAAM;IACxB;;AAGE,mBAAQ,YAAY,GAAG,gBAAW;AAClC,mBAAQ,gBAAgB,GAAG,oBAAe;AAC1C,mBAAQ,QAAQ,GAAG,YAAO;AAC1B,mBAAQ,SAAS,GAAG,aAAQ;AAC5B,mBAAQ,aAAa,aAAG,gBAAW,IAAG,iBAAY,GAAG;AACrD,mBAAQ,MAAM,GAAG,UAAK;AACtB,4BAAgB,IAAI,CAAC;IACvB;;;IAjEM,wBAAkB,GAAG,mBAAC,GAAG,IAAI,KAAK;IAElC,4BAAsB,GAAG,mBAAC,GAAG,GAAG,GAAG;IAEnC,yBAAmB,GAAG,mBAAC,GAAG,GAAG,GAAG;IAEhC,kBAAY,GAAG,mBAAC,GAAG,GAAG,GAAG,GAAG;IAE5B,sBAAgB,GAAG,AAAI,4BAAsB;IAM1C,eAAQ;IAEb,iBAAW;IAEX,qBAAe;IAEd,iBAAW,GAAG;IAEf,kBAAY;IAEZ,WAAK;IAED,cAAO;IAEN,cAAQ;EAsCnB","file":"settings_component.ddc.js"}');
  // Exports:
  return {
    src__settings__settings_component: src__settings__settings_component
  };
});

//# sourceMappingURL=settings_component.ddc.js.map
