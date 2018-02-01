// Copyright (c) 2016, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

import 'package:angular/angular.dart';
import 'package:components_codelab/lottery_simulator.dart';

import 'main.template.dart' as ng;

void main() {
  bootstrapStatic(AppComponent, [], ng.initReflector);
}