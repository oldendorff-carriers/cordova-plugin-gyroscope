// Copyright (c) 2014, the Dart project authors.  Please see the AUTHORS file
// for details. All rights reserved. Use of this source code is governed by a
// BSD-style license that can be found in the LICENSE file.

var Orientation = function(x, y, z, x_uc, y_uc, z_uc, x_ucd, y_ucd, z_ucd, timestamp) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.x_uc = x_uc;
    this.y_uc = y_uc;
    this.z_uc = z_uc;
    this.x_ucd = x_ucd;
    this.y_ucd = y_ucd;
    this.z_ucd = z_ucd;
    this.timestamp = timestamp || (new Date()).getTime();
};

module.exports = Orientation;
