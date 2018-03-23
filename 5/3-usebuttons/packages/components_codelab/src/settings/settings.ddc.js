define(['dart_sdk', 'packages/components_codelab/src/lottery/lottery'], function(dart_sdk, lottery) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__lottery__lottery = lottery.src__lottery__lottery;
  const _root = Object.create(null);
  const src__settings__settings = Object.create(_root);
  const $first = dartx.first;
  let intAndintAndintTobool = () => (intAndintAndintTobool = dart.constFn(dart.fnType(core.bool, [core.int, core.int, core.int])))();
  let JSArrayOfStrategy = () => (JSArrayOfStrategy = dart.constFn(_interceptors.JSArray$(src__settings__settings.Strategy)))();
  dart.defineLazy(src__settings__settings, {
    /*src__settings__settings._now*/get _now() {
      return new core.DateTime.now();
    }
  });
  src__settings__settings.Inhibitor = dart.typedef('Inhibitor', () => dart.fnType(core.bool, [core.int, core.int, core.int]));
  src__settings__settings.Settings = class Settings extends core.Object {
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
    get strategy() {
      return this[strategy];
    }
    set strategy(value) {
      this[strategy] = value;
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
    get now() {
      return src__settings__settings._now;
    }
    get lotteries() {
      return src__lottery__lottery.Lottery.lotteries;
    }
    get maxDays() {
      return new core.DateTime.new(dart.notNull(src__settings__settings._now.year) + dart.notNull(this.years), src__settings__settings._now.month, src__settings__settings._now.day, src__settings__settings._now.hour, src__settings__settings._now.minute).difference(src__settings__settings._now).inDays;
    }
    get strategies() {
      return src__settings__settings.Strategy._strategies;
    }
  };
  (src__settings__settings.Settings.new = function() {
    this[initialCash] = 10;
    this[dailyDisposable] = 2;
    this[strategy] = src__settings__settings.Strategy._strategies[$first];
    this[interestRate] = 1;
    this[years] = 3;
    this[lottery$] = src__lottery__lottery.Lottery.lotteries[$first];
  }).prototype = src__settings__settings.Settings.prototype;
  dart.addTypeTests(src__settings__settings.Settings);
  const initialCash = Symbol("Settings.initialCash");
  const dailyDisposable = Symbol("Settings.dailyDisposable");
  const strategy = Symbol("Settings.strategy");
  const interestRate = Symbol("Settings.interestRate");
  const years = Symbol("Settings.years");
  const lottery$ = Symbol("Settings.lottery");
  dart.setGetterSignature(src__settings__settings.Settings, () => ({
    __proto__: dart.getGetters(src__settings__settings.Settings.__proto__),
    now: dart.fnType(core.DateTime, []),
    lotteries: dart.fnType(core.List$(src__lottery__lottery.Lottery), []),
    maxDays: dart.fnType(core.int, []),
    strategies: dart.fnType(core.List$(src__settings__settings.Strategy), [])
  }));
  dart.setFieldSignature(src__settings__settings.Settings, () => ({
    __proto__: dart.getFields(src__settings__settings.Settings.__proto__),
    initialCash: dart.fieldType(core.int),
    dailyDisposable: dart.fieldType(core.int),
    strategy: dart.fieldType(src__settings__settings.Strategy),
    interestRate: dart.fieldType(core.int),
    years: dart.fieldType(core.int),
    lottery: dart.fieldType(src__lottery__lottery.Lottery)
  }));
  src__settings__settings.Strategy = class Strategy extends core.Object {
    get shortName() {
      return this[shortName$];
    }
    set shortName(value) {
      super.shortName = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get canContinue() {
      return this[canContinue$];
    }
    set canContinue(value) {
      super.canContinue = value;
    }
  };
  (src__settings__settings.Strategy.new = function(shortName, name, description, canContinue) {
    this[shortName$] = shortName;
    this[name$] = name;
    this[description$] = description;
    this[canContinue$] = canContinue;
  }).prototype = src__settings__settings.Strategy.prototype;
  dart.addTypeTests(src__settings__settings.Strategy);
  const shortName$ = Symbol("Strategy.shortName");
  const name$ = Symbol("Strategy.name");
  const description$ = Symbol("Strategy.description");
  const canContinue$ = Symbol("Strategy.canContinue");
  dart.setFieldSignature(src__settings__settings.Strategy, () => ({
    __proto__: dart.getFields(src__settings__settings.Strategy.__proto__),
    shortName: dart.finalFieldType(core.String),
    name: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    canContinue: dart.finalFieldType(intAndintAndintTobool())
  }));
  dart.defineLazy(src__settings__settings.Strategy, {
    /*src__settings__settings.Strategy.conservative*/get conservative() {
      return new src__settings__settings.Strategy.new("Conservative", "only disposable income", "Buy one ticket per day. Buy more only if daily disposable income " + "allows (in other words, do not use winnings to buy more tickets on " + "the same day).", dart.fn((bettedToday, wonToday, dailyDisposable) => dart.notNull(bettedToday) < dart.notNull(dailyDisposable), intAndintAndintTobool()));
    },
    /*src__settings__settings.Strategy.reinvest*/get reinvest() {
      return new src__settings__settings.Strategy.new("Reinvest", "disposable income and winnings", "Re-invest the day's winning tickets to buy new ones (unless the " + "winnings are 10x more than the daily disposable income, in which case " + "keep the cash).", dart.fn((bettedToday, wonToday, dailyDisposable) => dart.notNull(bettedToday) < dart.notNull(dailyDisposable) + dart.notNull(wonToday) && dart.notNull(wonToday) < dart.notNull(dailyDisposable) * 10, intAndintAndintTobool()));
    },
    /*src__settings__settings.Strategy.allIn*/get allIn() {
      return new src__settings__settings.Strategy.new("All in", "everything", "Use all available cash to buy tickets every day (even if we just won " + "the jackpot — bet it all back).", dart.fn((bettedToday, wonToday, dailyDisposable) => true, intAndintAndintTobool()));
    },
    /*src__settings__settings.Strategy._strategies*/get _strategies() {
      return JSArrayOfStrategy().of([src__settings__settings.Strategy.conservative, src__settings__settings.Strategy.reinvest, src__settings__settings.Strategy.allIn]);
    }
  });
  dart.trackLibraries("packages/components_codelab/src/settings/settings.ddc", {
    "package:components_codelab/src/settings/settings.dart": src__settings__settings
  }, '{"version":3,"sourceRoot":"","sources":["settings.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAOe,4BAAI;YAAG,KAAI,iBAAY;;;;;IAMhC;;;;;;IAGA;;;;;;IAEK;;;;;;IAEL;;;;;;IAEA;;;;;;IAEI;;;;;;;YAEY,6BAAI;;;YAIO,8BAAO,UAAU;;;YAE7B,KAAI,iBAAQ,CACb,aAAV,4BAAI,KAAK,iBAAG,UAAK,GAAE,4BAAI,MAAM,EAAE,4BAAI,IAAI,EAAE,4BAAI,KAAK,EAAE,4BAAI,OAAO,YACxD,CAAC,4BAAI,QACT;;;YAEsB,iCAAQ,YAAY;;;;IAxBjD,iBAAW,GAAG;IAGd,qBAAe,GAAG;IAEb,cAAQ,GAAG,gCAAQ,YAAY,QAAM;IAE1C,kBAAY,GAAG;IAEf,WAAK,GAAG;IAEJ,cAAO,GAAG,6BAAO,UAAU,QAAM;EAI/B;;;;;;;;;;;;;;;;;;;;;;;;;IAyCG;;;;;;IAEA;;;;;;IAEA;;;;;;IAEG;;;;;;;mDAEP,SAAc,EAAE,IAAS,EAAE,WAAgB,EAAE,WAAgB;IAAxD,gBAAS,GAAT,SAAS;IAAO,WAAI,GAAJ,IAAI;IAAO,kBAAW,GAAX,WAAW;IAAO,kBAAW,GAAX,WAAW;EAAC;;;;;;;;;;;;;;MApC1D,6CAAY;YAAG,KAAI,oCAAQ,CACpC,gBACA,0BACA,sEACA,wEACA,kBACA,SAAC,WAAW,EAAE,QAAQ,EAAE,eAAe,KACvB,aAAZ,WAAW,iBAAG,eAAe;;MAExB,yCAAQ;YAAG,KAAI,oCAAQ,CAChC,YACA,kCACA,qEACA,2EACA,mBACA,SAAC,WAAW,EAAE,QAAQ,EAAE,eAAe,KACvB,AAA6B,aAAzC,WAAW,IAAmB,aAAhB,eAAe,iBAAG,QAAQ,KAC/B,aAAT,QAAQ,IAAmB,aAAhB,eAAe,IAAG;;MAExB,sCAAK;YAAG,KAAI,oCAAQ,CAC7B,UACA,cACA,0EACA,mCACA,SAAC,WAAW,EAAE,QAAQ,EAAE,eAAe,KAAK;;MAEpB,4CAAW;YAAG,yBAAC,6CAAY,EAAE,yCAAQ,EAAE,sCAAK","file":"settings.ddc.js"}');
  // Exports:
  return {
    src__settings__settings: src__settings__settings
  };
});

//# sourceMappingURL=settings.ddc.js.map
