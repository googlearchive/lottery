define(['dart_sdk', 'packages/intl/intl', 'packages/angular/src/core/metadata/lifecycle_hooks', 'packages/components_codelab/src/settings/settings', 'packages/components_codelab/src/visualize_winnings/visualize_winnings'], function(dart_sdk, intl, lifecycle_hooks, settings, visualize_winnings) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const intl$ = intl.intl;
  const src__core__metadata__lifecycle_hooks = lifecycle_hooks.src__core__metadata__lifecycle_hooks;
  const src__settings__settings = settings.src__settings__settings;
  const src__visualize_winnings__visualize_winnings = visualize_winnings.src__visualize_winnings__visualize_winnings;
  const _root = Object.create(null);
  const lottery_simulator = Object.create(_root);
  const $round = dartx.round;
  const $putIfAbsent = dartx.putIfAbsent;
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $clear = dartx.clear;
  const $modulo = dartx['%'];
  const $floor = dartx.floor;
  let IdentityMapOfint$int = () => (IdentityMapOfint$int = dart.constFn(_js_helper.IdentityMap$(core.int, core.int)))();
  let VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  let MapOfint$int = () => (MapOfint$int = dart.constFn(core.Map$(core.int, core.int)))();
  dart.defineLazy(lottery_simulator, {
    /*lottery_simulator._fastPulse*/get _fastPulse() {
      return dart.const(new core.Duration.new({milliseconds: 5}));
    },
    /*lottery_simulator._normalPulse*/get _normalPulse() {
      return dart.const(new core.Duration.new({milliseconds: 200}));
    }
  });
  const _settings = Symbol('_settings');
  const _pulse = Symbol('_pulse');
  const _fastEnabled = Symbol('_fastEnabled');
  const _dateFormat = Symbol('_dateFormat');
  const _reconfigurePulse = Symbol('_reconfigurePulse');
  lottery_simulator.AppComponent = class AppComponent extends core.Object {
    get altCash() {
      return this[altCash];
    }
    set altCash(value) {
      this[altCash] = value;
    }
    get cash() {
      return this[cash];
    }
    set cash(value) {
      this[cash] = value;
    }
    get day() {
      return this[day];
    }
    set day(value) {
      this[day] = value;
    }
    get vis() {
      return this[vis];
    }
    set vis(value) {
      this[vis] = value;
    }
    get phase() {
      return this[phase];
    }
    set phase(value) {
      this[phase] = value;
    }
    get inProgress() {
      return this[inProgress];
    }
    set inProgress(value) {
      this[inProgress] = value;
    }
    get winningsMap() {
      return this[winningsMap];
    }
    set winningsMap(value) {
      super.winningsMap = value;
    }
    get currentDay() {
      let date = this.settings.now.add(new core.Duration.new({days: this.day}));
      return this[_dateFormat].format(date);
    }
    get endOfDays() {
      return dart.notNull(this.day) >= dart.notNull(this[_settings].maxDays);
    }
    get fastEnabled() {
      return this[_fastEnabled];
    }
    set fastEnabled(value) {
      this[_fastEnabled] = value;
      if (dart.test(this.inProgress)) this[_reconfigurePulse]();
    }
    get notEnoughMoney() {
      return dart.notNull(this.cash) < dart.notNull(this[_settings].lottery.ticketPrice);
    }
    get progress() {
      return (dart.notNull(this.day) / dart.notNull(this[_settings].maxDays) * 100)[$round]();
    }
    get settings() {
      return this[_settings];
    }
    bet() {
      let bettedToday = 0;
      let wonToday = 0;
      while (!dart.test(this.notEnoughMoney) && dart.test(this.settings.strategy.canContinue(bettedToday, wonToday, this.settings.dailyDisposable))) {
        this.cash = dart.notNull(this.cash) - dart.notNull(this[_settings].lottery.ticketPrice);
        bettedToday = dart.notNull(bettedToday) + dart.notNull(this[_settings].lottery.ticketPrice);
        let ticket = this[_settings].lottery.bet();
        this.cash = dart.notNull(this.cash) + dart.notNull(ticket.value);
        wonToday = dart.notNull(wonToday) + dart.notNull(ticket.value);
        if (ticket.value === 0) {
          this.vis.visualizeLoss();
        } else if (dart.notNull(ticket.value) < dart.notNull(this.settings.dailyDisposable) * 50) {
          this.vis.visualizeWin();
        } else {
          this.vis.visualizeBigWin();
        }
        this.winningsMap[$putIfAbsent](ticket.value, dart.fn(() => 0, VoidToint()));
        this.winningsMap[$_set](ticket.value, dart.notNull(this.winningsMap[$_get](ticket.value)) + 1);
      }
    }
    ngOnInit() {
      this.reset();
    }
    pause() {
      let t = this[_pulse];
      t == null ? null : t.cancel();
      this.inProgress = false;
    }
    play() {
      this.inProgress = true;
      this[_reconfigurePulse]();
    }
    reset() {
      this.cash = this[_settings].initialCash;
      this.altCash = this.cash;
      this.day = 0;
      this.phase = 0;
      this.winningsMap[$clear]();
      this.vis.reset();
      this.pause();
    }
    step() {
      if (dart.test(this.endOfDays)) {
        this.pause();
        return;
      }
      if (this.phase === 0) {
        this.day = dart.notNull(this.day) + 1;
        this.cash = dart.notNull(this.cash) + dart.notNull(this[_settings].dailyDisposable);
        this.altCash = dart.notNull(this.altCash) + dart.notNull(this[_settings].dailyDisposable);
        this.phase = 1;
        return;
      }
      this.bet();
      if (this.day[$modulo](365) === 0) {
        let interest = dart.notNull(this.altCash) * (dart.notNull(this[_settings].interestRate) / 100);
        this.altCash = dart.notNull(this.altCash) + interest[$floor]();
      }
      this.phase = 0;
    }
    updateFromSettings() {
      if (this.day === 0 && this.phase === 0) {
        this.cash = this[_settings].initialCash;
        this.altCash = this.cash;
      }
    }
    [_reconfigurePulse]() {
      let t = this[_pulse];
      t == null ? null : t.cancel();
      this[_pulse] = async.Timer.periodic(dart.test(this[_fastEnabled]) ? lottery_simulator._fastPulse : lottery_simulator._normalPulse, dart.fn(_ => this.step(), TimerTovoid()));
    }
  };
  (lottery_simulator.AppComponent.new = function(settings) {
    this[_pulse] = null;
    this[altCash] = null;
    this[cash] = null;
    this[day] = null;
    this[vis] = null;
    this[phase] = null;
    this[inProgress] = false;
    this[winningsMap] = new (IdentityMapOfint$int()).new();
    this[_fastEnabled] = false;
    this[_dateFormat] = new intl$.DateFormat.yMMMMd();
    this[_settings] = settings;
  }).prototype = lottery_simulator.AppComponent.prototype;
  dart.addTypeTests(lottery_simulator.AppComponent);
  const altCash = Symbol("AppComponent.altCash");
  const cash = Symbol("AppComponent.cash");
  const day = Symbol("AppComponent.day");
  const vis = Symbol("AppComponent.vis");
  const phase = Symbol("AppComponent.phase");
  const inProgress = Symbol("AppComponent.inProgress");
  const winningsMap = Symbol("AppComponent.winningsMap");
  lottery_simulator.AppComponent[dart.implements] = () => [src__core__metadata__lifecycle_hooks.OnInit];
  dart.setMethodSignature(lottery_simulator.AppComponent, () => ({
    __proto__: dart.getMethods(lottery_simulator.AppComponent.__proto__),
    bet: dart.fnType(dart.void, []),
    ngOnInit: dart.fnType(dart.dynamic, []),
    pause: dart.fnType(dart.void, []),
    play: dart.fnType(dart.void, []),
    reset: dart.fnType(dart.void, []),
    step: dart.fnType(dart.void, []),
    updateFromSettings: dart.fnType(dart.void, []),
    [_reconfigurePulse]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(lottery_simulator.AppComponent, () => ({
    __proto__: dart.getGetters(lottery_simulator.AppComponent.__proto__),
    currentDay: dart.fnType(core.String, []),
    endOfDays: dart.fnType(core.bool, []),
    fastEnabled: dart.fnType(core.bool, []),
    notEnoughMoney: dart.fnType(core.bool, []),
    progress: dart.fnType(core.int, []),
    settings: dart.fnType(src__settings__settings.Settings, [])
  }));
  dart.setSetterSignature(lottery_simulator.AppComponent, () => ({
    __proto__: dart.getSetters(lottery_simulator.AppComponent.__proto__),
    fastEnabled: dart.fnType(dart.void, [core.bool])
  }));
  dart.setFieldSignature(lottery_simulator.AppComponent, () => ({
    __proto__: dart.getFields(lottery_simulator.AppComponent.__proto__),
    [_settings]: dart.finalFieldType(src__settings__settings.Settings),
    [_pulse]: dart.fieldType(async.Timer),
    altCash: dart.fieldType(core.int),
    cash: dart.fieldType(core.int),
    day: dart.fieldType(core.int),
    vis: dart.fieldType(src__visualize_winnings__visualize_winnings.VisualizeWinningsComponent),
    phase: dart.fieldType(core.int),
    inProgress: dart.fieldType(core.bool),
    winningsMap: dart.finalFieldType(MapOfint$int()),
    [_fastEnabled]: dart.fieldType(core.bool),
    [_dateFormat]: dart.finalFieldType(intl$.DateFormat)
  }));
  dart.trackLibraries("packages/components_codelab/lottery_simulator.ddc", {
    "package:components_codelab/lottery_simulator.dart": lottery_simulator
  }, '{"version":3,"sourceRoot":"","sources":["lottery_simulator.dart"],"names":[],"mappings":"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","file":"lottery_simulator.ddc.js"}');
  // Exports:
  return {
    lottery_simulator: lottery_simulator
  };
});

//# sourceMappingURL=lottery_simulator.ddc.js.map
