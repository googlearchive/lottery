define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const src__lottery__lottery = Object.create(_root);
  let JSArrayOfLottery = () => (JSArrayOfLottery = dart.constFn(_interceptors.JSArray$(src__lottery__lottery.Lottery)))();
  src__lottery__lottery.Category = class Category extends core.Object {
    toString() {
      return {
        0: "Category.jackpot",
        1: "Category.win",
        2: "Category.lose"
      }[this.index];
    }
  };
  (src__lottery__lottery.Category.new = function(x) {
    this.index = x;
  }).prototype = src__lottery__lottery.Category.prototype;
  dart.addTypeTests(src__lottery__lottery.Category);
  dart.setFieldSignature(src__lottery__lottery.Category, () => ({
    __proto__: dart.getFields(src__lottery__lottery.Category.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__lottery__lottery.Category, ['toString']);
  src__lottery__lottery.Category.jackpot = dart.const(new src__lottery__lottery.Category.new(0));
  src__lottery__lottery.Category.win = dart.const(new src__lottery__lottery.Category.new(1));
  src__lottery__lottery.Category.lose = dart.const(new src__lottery__lottery.Category.new(2));
  src__lottery__lottery.Category.values = dart.constList([src__lottery__lottery.Category.jackpot, src__lottery__lottery.Category.win, src__lottery__lottery.Category.lose], src__lottery__lottery.Category);
  src__lottery__lottery.Lottery = class Lottery extends core.Object {};
  (src__lottery__lottery.Lottery.new = function() {
  }).prototype = src__lottery__lottery.Lottery.prototype;
  dart.addTypeTests(src__lottery__lottery.Lottery);
  dart.defineLazy(src__lottery__lottery.Lottery, {
    /*src__lottery__lottery.Lottery.lotteries*/get lotteries() {
      return JSArrayOfLottery().of([new src__lottery__lottery.Powerball.new(math.Random.new()), new src__lottery__lottery.SimpleLottery.new(math.Random.new())]);
    }
  });
  const _random = Symbol('_random');
  src__lottery__lottery.Powerball = class Powerball extends core.Object {
    get shortName() {
      return this[shortName];
    }
    set shortName(value) {
      super.shortName = value;
    }
    get name() {
      return this[name];
    }
    set name(value) {
      super.name = value;
    }
    get description() {
      return this[description];
    }
    set description(value) {
      super.description = value;
    }
    get ticketPrice() {
      return this[ticketPrice];
    }
    set ticketPrice(value) {
      super.ticketPrice = value;
    }
    get jackpot() {
      return this[jackpot];
    }
    set jackpot(value) {
      super.jackpot = value;
    }
    bet() {
      let draw = this[_random].nextDouble();
      if (dart.notNull(draw) < 1 / 292201338.0) {
        return new src__lottery__lottery.Ticket.new(this.jackpot, src__lottery__lottery.Category.jackpot);
      }
      if (dart.notNull(draw) < 1 / 11688053.52) {
        return new src__lottery__lottery.Ticket.new(1000000, src__lottery__lottery.Category.win);
      }
      if (dart.notNull(draw) < 1 / 913129.18) {
        return new src__lottery__lottery.Ticket.new(50000, src__lottery__lottery.Category.win);
      }
      if (dart.notNull(draw) < 1 / 36525.17) {
        return new src__lottery__lottery.Ticket.new(100, src__lottery__lottery.Category.win);
      }
      if (dart.notNull(draw) < 1 / 14494.11) {
        return new src__lottery__lottery.Ticket.new(100, src__lottery__lottery.Category.win);
      }
      if (dart.notNull(draw) < 1 / 579.76) {
        return new src__lottery__lottery.Ticket.new(7, src__lottery__lottery.Category.win);
      }
      if (dart.notNull(draw) < 1 / 701.33) {
        return new src__lottery__lottery.Ticket.new(7, src__lottery__lottery.Category.win);
      }
      if (dart.notNull(draw) < 1 / 91.98) {
        return new src__lottery__lottery.Ticket.new(4, src__lottery__lottery.Category.win);
      }
      if (dart.notNull(draw) < 1 / 38.32) {
        return new src__lottery__lottery.Ticket.new(4, src__lottery__lottery.Category.win);
      }
      return new src__lottery__lottery.Ticket.new(0, src__lottery__lottery.Category.lose);
    }
  };
  (src__lottery__lottery.Powerball.new = function(random) {
    this[shortName] = "Powerball";
    this[name] = "US Powerball";
    this[description] = "Powerball is one of the most popular American " + "lottery games. Its chances of winning are well known and even published " + "on powerball.com.";
    this[ticketPrice] = 2;
    this[jackpot] = 40000000;
    this[_random] = random;
  }).prototype = src__lottery__lottery.Powerball.prototype;
  dart.addTypeTests(src__lottery__lottery.Powerball);
  const shortName = Symbol("Powerball.shortName");
  const name = Symbol("Powerball.name");
  const description = Symbol("Powerball.description");
  const ticketPrice = Symbol("Powerball.ticketPrice");
  const jackpot = Symbol("Powerball.jackpot");
  src__lottery__lottery.Powerball[dart.implements] = () => [src__lottery__lottery.Lottery];
  dart.setMethodSignature(src__lottery__lottery.Powerball, () => ({
    __proto__: dart.getMethods(src__lottery__lottery.Powerball.__proto__),
    bet: dart.fnType(src__lottery__lottery.Ticket, [])
  }));
  dart.setFieldSignature(src__lottery__lottery.Powerball, () => ({
    __proto__: dart.getFields(src__lottery__lottery.Powerball.__proto__),
    shortName: dart.finalFieldType(core.String),
    name: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    [_random]: dart.finalFieldType(math.Random),
    ticketPrice: dart.finalFieldType(core.int),
    jackpot: dart.finalFieldType(core.int)
  }));
  src__lottery__lottery.SimpleLottery = class SimpleLottery extends core.Object {
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
    get ticketPrice() {
      return this[ticketPrice$];
    }
    set ticketPrice(value) {
      super.ticketPrice = value;
    }
    bet() {
      let draw = this[_random].nextDouble();
      if (dart.notNull(draw) < 0.01) {
        return new src__lottery__lottery.Ticket.new(100, src__lottery__lottery.Category.jackpot);
      }
      if (dart.notNull(draw) < 0.1) {
        return new src__lottery__lottery.Ticket.new(10, src__lottery__lottery.Category.win);
      }
      return new src__lottery__lottery.Ticket.new(0, src__lottery__lottery.Category.lose);
    }
  };
  (src__lottery__lottery.SimpleLottery.new = function(random) {
    this[shortName$] = "Good Guy Lottery";
    this[name$] = "Mythical Good Guy Lottery";
    this[description$] = "This made-up lottery is literally ‘too good to " + "be true.’ It wouldn't be financially viable, as it pays out, " + "on average, almost all of its revenue in winnings.";
    this[ticketPrice$] = 2;
    this[_random] = random;
  }).prototype = src__lottery__lottery.SimpleLottery.prototype;
  dart.addTypeTests(src__lottery__lottery.SimpleLottery);
  const shortName$ = Symbol("SimpleLottery.shortName");
  const name$ = Symbol("SimpleLottery.name");
  const description$ = Symbol("SimpleLottery.description");
  const ticketPrice$ = Symbol("SimpleLottery.ticketPrice");
  src__lottery__lottery.SimpleLottery[dart.implements] = () => [src__lottery__lottery.Lottery];
  dart.setMethodSignature(src__lottery__lottery.SimpleLottery, () => ({
    __proto__: dart.getMethods(src__lottery__lottery.SimpleLottery.__proto__),
    bet: dart.fnType(src__lottery__lottery.Ticket, [])
  }));
  dart.setFieldSignature(src__lottery__lottery.SimpleLottery, () => ({
    __proto__: dart.getFields(src__lottery__lottery.SimpleLottery.__proto__),
    shortName: dart.finalFieldType(core.String),
    name: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    [_random]: dart.finalFieldType(math.Random),
    ticketPrice: dart.finalFieldType(core.int)
  }));
  src__lottery__lottery.Ticket = class Ticket extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get category() {
      return this[category$];
    }
    set category(value) {
      super.category = value;
    }
  };
  (src__lottery__lottery.Ticket.new = function(value, category) {
    this[value$] = value;
    this[category$] = category;
  }).prototype = src__lottery__lottery.Ticket.prototype;
  dart.addTypeTests(src__lottery__lottery.Ticket);
  const value$ = Symbol("Ticket.value");
  const category$ = Symbol("Ticket.category");
  dart.setFieldSignature(src__lottery__lottery.Ticket, () => ({
    __proto__: dart.getFields(src__lottery__lottery.Ticket.__proto__),
    value: dart.finalFieldType(core.int),
    category: dart.finalFieldType(src__lottery__lottery.Category)
  }));
  dart.trackLibraries("packages/components_codelab/src/lottery/lottery.ddc", {
    "package:components_codelab/src/lottery/lottery.dart": src__lottery__lottery
  }, '{"version":3,"sourceRoot":"","sources":["lottery.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAoBA;;;MAX6B,uCAAS;YAAG,wBACrC,IAAI,mCAAS,CAAC,AAAI,eAAM,KACxB,IAAI,uCAAa,CAAC,AAAI,eAAM;;;;;IAYjB;;;;;;IACA;;;;;;IACA;;;;;;IAKP;;;;;;IACA;;;;;;;AAMJ,UAAO,OAAO,aAAO,WAAW;AAEhC,UAAS,aAAL,IAAI,IAAG,AAAE,IAAE,aAAa;AAC1B,cAAO,KAAI,gCAAM,CAAC,YAAO,EAAE,8BAAQ,QAAQ;;AAE7C,UAAS,aAAL,IAAI,IAAG,AAAE,IAAE,aAAa;AAC1B,cAAO,KAAI,gCAAM,CAAC,SAAS,8BAAQ,IAAI;;AAEzC,UAAS,aAAL,IAAI,IAAG,AAAE,IAAE,WAAW;AACxB,cAAO,KAAI,gCAAM,CAAC,OAAO,8BAAQ,IAAI;;AAEvC,UAAS,aAAL,IAAI,IAAG,AAAE,IAAE,UAAU;AACvB,cAAO,KAAI,gCAAM,CAAC,KAAK,8BAAQ,IAAI;;AAErC,UAAS,aAAL,IAAI,IAAG,AAAE,IAAE,UAAU;AACvB,cAAO,KAAI,gCAAM,CAAC,KAAK,8BAAQ,IAAI;;AAErC,UAAS,aAAL,IAAI,IAAG,AAAE,IAAE,QAAQ;AACrB,cAAO,KAAI,gCAAM,CAAC,GAAG,8BAAQ,IAAI;;AAEnC,UAAS,aAAL,IAAI,IAAG,AAAE,IAAE,QAAQ;AACrB,cAAO,KAAI,gCAAM,CAAC,GAAG,8BAAQ,IAAI;;AAEnC,UAAS,aAAL,IAAI,IAAG,AAAE,IAAE,OAAO;AACpB,cAAO,KAAI,gCAAM,CAAC,GAAG,8BAAQ,IAAI;;AAEnC,UAAS,aAAL,IAAI,IAAG,AAAE,IAAE,OAAO;AACpB,cAAO,KAAI,gCAAM,CAAC,GAAG,8BAAQ,IAAI;;AAEnC,YAAO,KAAI,gCAAM,CAAC,GAAG,8BAAQ,KAAK;IACpC;;kDAlCe,MAAO;IAVT,eAAS,GAAG;IACZ,UAAI,GAAG;IACP,iBAAW,GAAG,mDACvB,6EACA;IAGE,iBAAW,GAAG;IACd,aAAO,GAAG;IAED,aAAO,GAAP,MAAO;EAAC;;;;;;;;;;;;;;;;;;;;;;IAsCV;;;;;;IACA;;;;;;IACA;;;;;;IAKP;;;;;;;AAKJ,UAAO,OAAO,aAAO,WAAW;AAChC,UAAS,aAAL,IAAI,IAAG,MAAM;AACf,cAAO,KAAI,gCAAM,CAAC,KAAK,8BAAQ,QAAQ;;AAEzC,UAAS,aAAL,IAAI,IAAG,KAAK;AACd,cAAO,KAAI,gCAAM,CAAC,IAAI,8BAAQ,IAAI;;AAEpC,YAAO,KAAI,gCAAM,CAAC,GAAG,8BAAQ,KAAK;IACpC;;sDAXmB,MAAO;IATb,gBAAS,GAAG;IACZ,WAAI,GAAG;IACP,kBAAW,GAAG,oDACvB,kEACA;IAGE,kBAAW,GAAG;IAED,aAAO,GAAP,MAAO;EAAC;;;;;;;;;;;;;;;;;;;;IAejB;;;;;;IACK;;;;;;;+CAER,KAAU,EAAE,QAAa;IAApB,YAAK,GAAL,KAAK;IAAO,eAAQ,GAAR,QAAQ;EAAC","file":"lottery.ddc.js"}');
  // Exports:
  return {
    src__lottery__lottery: src__lottery__lottery
  };
});

//# sourceMappingURL=lottery.ddc.js.map
