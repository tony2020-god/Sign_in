
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/共用模塊/備份/qrcode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '070a67bS7tJQIi6TBXapnIu', 'qrcode');
// 共用模塊/備份/qrcode.js

"use strict";

///QRC插件
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of 
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
//---------------------------------------------------------------------
// QR8bitByte
//---------------------------------------------------------------------
function QR8bitByte(data) {
  this.mode = QRMode.MODE_8BIT_BYTE;
  this.data = data;
}

QR8bitByte.prototype = {
  getLength: function getLength(buffer) {
    return this.data.length;
  },
  write: function write(buffer) {
    for (var i = 0; i < this.data.length; i++) {
      // not JIS ...
      buffer.put(this.data.charCodeAt(i), 8);
    }
  }
}; //---------------------------------------------------------------------
// QRCode
//---------------------------------------------------------------------

function QRCode(typeNumber, errorCorrectLevel) {
  this.typeNumber = typeNumber;
  this.errorCorrectLevel = errorCorrectLevel;
  this.modules = null;
  this.moduleCount = 0;
  this.dataCache = null;
  this.dataList = new Array();
}

QRCode.prototype = {
  addData: function addData(data) {
    var newData = new QR8bitByte(data);
    this.dataList.push(newData);
    this.dataCache = null;
  },
  isDark: function isDark(row, col) {
    if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
      throw new Error(row + "," + col);
    }

    return this.modules[row][col];
  },
  getModuleCount: function getModuleCount() {
    return this.moduleCount;
  },
  make: function make() {
    // Calculate automatically typeNumber if provided is < 1
    if (this.typeNumber < 1) {
      var typeNumber = 1;

      for (typeNumber = 1; typeNumber < 40; typeNumber++) {
        var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
        var buffer = new QRBitBuffer();
        var totalDataCount = 0;

        for (var i = 0; i < rsBlocks.length; i++) {
          totalDataCount += rsBlocks[i].dataCount;
        }

        for (var i = 0; i < this.dataList.length; i++) {
          var data = this.dataList[i];
          buffer.put(data.mode, 4);
          buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
          data.write(buffer);
        }

        if (buffer.getLengthInBits() <= totalDataCount * 8) break;
      }

      this.typeNumber = typeNumber;
    }

    this.makeImpl(false, this.getBestMaskPattern());
  },
  makeImpl: function makeImpl(test, maskPattern) {
    this.moduleCount = this.typeNumber * 4 + 17;
    this.modules = new Array(this.moduleCount);

    for (var row = 0; row < this.moduleCount; row++) {
      this.modules[row] = new Array(this.moduleCount);

      for (var col = 0; col < this.moduleCount; col++) {
        this.modules[row][col] = null; //(col + row) % 3;
      }
    }

    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(test, maskPattern);

    if (this.typeNumber >= 7) {
      this.setupTypeNumber(test);
    }

    if (this.dataCache == null) {
      this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
    }

    this.mapData(this.dataCache, maskPattern);
  },
  setupPositionProbePattern: function setupPositionProbePattern(row, col) {
    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || this.moduleCount <= row + r) continue;

      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || this.moduleCount <= col + c) continue;

        if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
          this.modules[row + r][col + c] = true;
        } else {
          this.modules[row + r][col + c] = false;
        }
      }
    }
  },
  getBestMaskPattern: function getBestMaskPattern() {
    var minLostPoint = 0;
    var pattern = 0;

    for (var i = 0; i < 8; i++) {
      this.makeImpl(true, i);
      var lostPoint = QRUtil.getLostPoint(this);

      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
      }
    }

    return pattern;
  },
  createMovieClip: function createMovieClip(target_mc, instance_name, depth) {
    var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
    var cs = 1;
    this.make();

    for (var row = 0; row < this.modules.length; row++) {
      var y = row * cs;

      for (var col = 0; col < this.modules[row].length; col++) {
        var x = col * cs;
        var dark = this.modules[row][col];

        if (dark) {
          qr_mc.beginFill(0, 100);
          qr_mc.moveTo(x, y);
          qr_mc.lineTo(x + cs, y);
          qr_mc.lineTo(x + cs, y + cs);
          qr_mc.lineTo(x, y + cs);
          qr_mc.endFill();
        }
      }
    }

    return qr_mc;
  },
  setupTimingPattern: function setupTimingPattern() {
    for (var r = 8; r < this.moduleCount - 8; r++) {
      if (this.modules[r][6] != null) {
        continue;
      }

      this.modules[r][6] = r % 2 == 0;
    }

    for (var c = 8; c < this.moduleCount - 8; c++) {
      if (this.modules[6][c] != null) {
        continue;
      }

      this.modules[6][c] = c % 2 == 0;
    }
  },
  setupPositionAdjustPattern: function setupPositionAdjustPattern() {
    var pos = QRUtil.getPatternPosition(this.typeNumber);

    for (var i = 0; i < pos.length; i++) {
      for (var j = 0; j < pos.length; j++) {
        var row = pos[i];
        var col = pos[j];

        if (this.modules[row][col] != null) {
          continue;
        }

        for (var r = -2; r <= 2; r++) {
          for (var c = -2; c <= 2; c++) {
            if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
              this.modules[row + r][col + c] = true;
            } else {
              this.modules[row + r][col + c] = false;
            }
          }
        }
      }
    }
  },
  setupTypeNumber: function setupTypeNumber(test) {
    var bits = QRUtil.getBCHTypeNumber(this.typeNumber);

    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
    }

    for (var i = 0; i < 18; i++) {
      var mod = !test && (bits >> i & 1) == 1;
      this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
    }
  },
  setupTypeInfo: function setupTypeInfo(test, maskPattern) {
    var data = this.errorCorrectLevel << 3 | maskPattern;
    var bits = QRUtil.getBCHTypeInfo(data); // vertical		

    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;

      if (i < 6) {
        this.modules[i][8] = mod;
      } else if (i < 8) {
        this.modules[i + 1][8] = mod;
      } else {
        this.modules[this.moduleCount - 15 + i][8] = mod;
      }
    } // horizontal


    for (var i = 0; i < 15; i++) {
      var mod = !test && (bits >> i & 1) == 1;

      if (i < 8) {
        this.modules[8][this.moduleCount - i - 1] = mod;
      } else if (i < 9) {
        this.modules[8][15 - i - 1 + 1] = mod;
      } else {
        this.modules[8][15 - i - 1] = mod;
      }
    } // fixed module


    this.modules[this.moduleCount - 8][8] = !test;
  },
  mapData: function mapData(data, maskPattern) {
    var inc = -1;
    var row = this.moduleCount - 1;
    var bitIndex = 7;
    var byteIndex = 0;

    for (var col = this.moduleCount - 1; col > 0; col -= 2) {
      if (col == 6) col--;

      while (true) {
        for (var c = 0; c < 2; c++) {
          if (this.modules[row][col - c] == null) {
            var dark = false;

            if (byteIndex < data.length) {
              dark = (data[byteIndex] >>> bitIndex & 1) == 1;
            }

            var mask = QRUtil.getMask(maskPattern, row, col - c);

            if (mask) {
              dark = !dark;
            }

            this.modules[row][col - c] = dark;
            bitIndex--;

            if (bitIndex == -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }

        row += inc;

        if (row < 0 || this.moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  }
};
QRCode.PAD0 = 0xEC;
QRCode.PAD1 = 0x11;

QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {
  var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
  var buffer = new QRBitBuffer();

  for (var i = 0; i < dataList.length; i++) {
    var data = dataList[i];
    buffer.put(data.mode, 4);
    buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
    data.write(buffer);
  } // calc num max data.


  var totalDataCount = 0;

  for (var i = 0; i < rsBlocks.length; i++) {
    totalDataCount += rsBlocks[i].dataCount;
  }

  if (buffer.getLengthInBits() > totalDataCount * 8) {
    throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
  } // end code


  if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
    buffer.put(0, 4);
  } // padding


  while (buffer.getLengthInBits() % 8 != 0) {
    buffer.putBit(false);
  } // padding


  while (true) {
    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }

    buffer.put(QRCode.PAD0, 8);

    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }

    buffer.put(QRCode.PAD1, 8);
  }

  return QRCode.createBytes(buffer, rsBlocks);
};

QRCode.createBytes = function (buffer, rsBlocks) {
  var offset = 0;
  var maxDcCount = 0;
  var maxEcCount = 0;
  var dcdata = new Array(rsBlocks.length);
  var ecdata = new Array(rsBlocks.length);

  for (var r = 0; r < rsBlocks.length; r++) {
    var dcCount = rsBlocks[r].dataCount;
    var ecCount = rsBlocks[r].totalCount - dcCount;
    maxDcCount = Math.max(maxDcCount, dcCount);
    maxEcCount = Math.max(maxEcCount, ecCount);
    dcdata[r] = new Array(dcCount);

    for (var i = 0; i < dcdata[r].length; i++) {
      dcdata[r][i] = 0xff & buffer.buffer[i + offset];
    }

    offset += dcCount;
    var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
    var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
    var modPoly = rawPoly.mod(rsPoly);
    ecdata[r] = new Array(rsPoly.getLength() - 1);

    for (var i = 0; i < ecdata[r].length; i++) {
      var modIndex = i + modPoly.getLength() - ecdata[r].length;
      ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
    }
  }

  var totalCodeCount = 0;

  for (var i = 0; i < rsBlocks.length; i++) {
    totalCodeCount += rsBlocks[i].totalCount;
  }

  var data = new Array(totalCodeCount);
  var index = 0;

  for (var i = 0; i < maxDcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < dcdata[r].length) {
        data[index++] = dcdata[r][i];
      }
    }
  }

  for (var i = 0; i < maxEcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < ecdata[r].length) {
        data[index++] = ecdata[r][i];
      }
    }
  }

  return data;
}; //---------------------------------------------------------------------
// QRMode
//---------------------------------------------------------------------


var QRMode = {
  MODE_NUMBER: 1 << 0,
  MODE_ALPHA_NUM: 1 << 1,
  MODE_8BIT_BYTE: 1 << 2,
  MODE_KANJI: 1 << 3
}; //---------------------------------------------------------------------
// QRErrorCorrectLevel
//---------------------------------------------------------------------

var QRErrorCorrectLevel = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
}; //---------------------------------------------------------------------
// QRMaskPattern
//---------------------------------------------------------------------

var QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}; //---------------------------------------------------------------------
// QRUtil
//---------------------------------------------------------------------

var QRUtil = {
  PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
  G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
  G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
  G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
  getBCHTypeInfo: function getBCHTypeInfo(data) {
    var d = data << 10;

    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
    }

    return (data << 10 | d) ^ QRUtil.G15_MASK;
  },
  getBCHTypeNumber: function getBCHTypeNumber(data) {
    var d = data << 12;

    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
    }

    return data << 12 | d;
  },
  getBCHDigit: function getBCHDigit(data) {
    var digit = 0;

    while (data != 0) {
      digit++;
      data >>>= 1;
    }

    return digit;
  },
  getPatternPosition: function getPatternPosition(typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
  },
  getMask: function getMask(maskPattern, i, j) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i + j) % 2 == 0;

      case QRMaskPattern.PATTERN001:
        return i % 2 == 0;

      case QRMaskPattern.PATTERN010:
        return j % 3 == 0;

      case QRMaskPattern.PATTERN011:
        return (i + j) % 3 == 0;

      case QRMaskPattern.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;

      case QRMaskPattern.PATTERN101:
        return i * j % 2 + i * j % 3 == 0;

      case QRMaskPattern.PATTERN110:
        return (i * j % 2 + i * j % 3) % 2 == 0;

      case QRMaskPattern.PATTERN111:
        return (i * j % 3 + (i + j) % 2) % 2 == 0;

      default:
        throw new Error("bad maskPattern:" + maskPattern);
    }
  },
  getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
    var a = new QRPolynomial([1], 0);

    for (var i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
    }

    return a;
  },
  getLengthInBits: function getLengthInBits(mode, type) {
    if (1 <= type && type < 10) {
      // 1 - 9
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 10;

        case QRMode.MODE_ALPHA_NUM:
          return 9;

        case QRMode.MODE_8BIT_BYTE:
          return 8;

        case QRMode.MODE_KANJI:
          return 8;

        default:
          throw new Error("mode:" + mode);
      }
    } else if (type < 27) {
      // 10 - 26
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 12;

        case QRMode.MODE_ALPHA_NUM:
          return 11;

        case QRMode.MODE_8BIT_BYTE:
          return 16;

        case QRMode.MODE_KANJI:
          return 10;

        default:
          throw new Error("mode:" + mode);
      }
    } else if (type < 41) {
      // 27 - 40
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 14;

        case QRMode.MODE_ALPHA_NUM:
          return 13;

        case QRMode.MODE_8BIT_BYTE:
          return 16;

        case QRMode.MODE_KANJI:
          return 12;

        default:
          throw new Error("mode:" + mode);
      }
    } else {
      throw new Error("type:" + type);
    }
  },
  getLostPoint: function getLostPoint(qrCode) {
    var moduleCount = qrCode.getModuleCount();
    var lostPoint = 0; // LEVEL1

    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount; col++) {
        var sameCount = 0;
        var dark = qrCode.isDark(row, col);

        for (var r = -1; r <= 1; r++) {
          if (row + r < 0 || moduleCount <= row + r) {
            continue;
          }

          for (var c = -1; c <= 1; c++) {
            if (col + c < 0 || moduleCount <= col + c) {
              continue;
            }

            if (r == 0 && c == 0) {
              continue;
            }

            if (dark == qrCode.isDark(row + r, col + c)) {
              sameCount++;
            }
          }
        }

        if (sameCount > 5) {
          lostPoint += 3 + sameCount - 5;
        }
      }
    } // LEVEL2


    for (var row = 0; row < moduleCount - 1; row++) {
      for (var col = 0; col < moduleCount - 1; col++) {
        var count = 0;
        if (qrCode.isDark(row, col)) count++;
        if (qrCode.isDark(row + 1, col)) count++;
        if (qrCode.isDark(row, col + 1)) count++;
        if (qrCode.isDark(row + 1, col + 1)) count++;

        if (count == 0 || count == 4) {
          lostPoint += 3;
        }
      }
    } // LEVEL3


    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount - 6; col++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
          lostPoint += 40;
        }
      }
    }

    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount - 6; row++) {
        if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
          lostPoint += 40;
        }
      }
    } // LEVEL4


    var darkCount = 0;

    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount; row++) {
        if (qrCode.isDark(row, col)) {
          darkCount++;
        }
      }
    }

    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  }
}; //---------------------------------------------------------------------
// QRMath
//---------------------------------------------------------------------

var QRMath = {
  glog: function glog(n) {
    if (n < 1) {
      throw new Error("glog(" + n + ")");
    }

    return QRMath.LOG_TABLE[n];
  },
  gexp: function gexp(n) {
    while (n < 0) {
      n += 255;
    }

    while (n >= 256) {
      n -= 255;
    }

    return QRMath.EXP_TABLE[n];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256)
};

for (var i = 0; i < 8; i++) {
  QRMath.EXP_TABLE[i] = 1 << i;
}

for (var i = 8; i < 256; i++) {
  QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
}

for (var i = 0; i < 255; i++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
} //---------------------------------------------------------------------
// QRPolynomial
//---------------------------------------------------------------------


function QRPolynomial(num, shift) {
  if (num.length == undefined) {
    throw new Error(num.length + "/" + shift);
  }

  var offset = 0;

  while (offset < num.length && num[offset] == 0) {
    offset++;
  }

  this.num = new Array(num.length - offset + shift);

  for (var i = 0; i < num.length - offset; i++) {
    this.num[i] = num[i + offset];
  }
}

QRPolynomial.prototype = {
  get: function get(index) {
    return this.num[index];
  },
  getLength: function getLength() {
    return this.num.length;
  },
  multiply: function multiply(e) {
    var num = new Array(this.getLength() + e.getLength() - 1);

    for (var i = 0; i < this.getLength(); i++) {
      for (var j = 0; j < e.getLength(); j++) {
        num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
      }
    }

    return new QRPolynomial(num, 0);
  },
  mod: function mod(e) {
    if (this.getLength() - e.getLength() < 0) {
      return this;
    }

    var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
    var num = new Array(this.getLength());

    for (var i = 0; i < this.getLength(); i++) {
      num[i] = this.get(i);
    }

    for (var i = 0; i < e.getLength(); i++) {
      num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
    } // recursive call


    return new QRPolynomial(num, 0).mod(e);
  }
}; //---------------------------------------------------------------------
// QRRSBlock
//---------------------------------------------------------------------

function QRRSBlock(totalCount, dataCount) {
  this.totalCount = totalCount;
  this.dataCount = dataCount;
}

QRRSBlock.RS_BLOCK_TABLE = [// L
// M
// Q
// H
// 1
[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], // 2
[1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], // 3
[1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], // 4		
[1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], // 5
[1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], // 6
[2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], // 7		
[2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], // 8
[2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], // 9
[2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], // 10		
[2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], // 11
[4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], // 12
[2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], // 13
[4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], // 14
[3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], // 15
[5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], // 16
[5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], // 17
[1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], // 18
[5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], // 19
[3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], // 20
[3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], // 21
[4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], // 22
[2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], // 23
[4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], // 24
[6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], // 25
[8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], // 26
[10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], // 27
[8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], // 28
[3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], // 29
[7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], // 30
[5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], // 31
[13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], // 32
[17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], // 33
[17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], // 34
[13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], // 35
[12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], // 36
[6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], // 37
[17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], // 38
[4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], // 39
[20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], // 40
[19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];

QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
  var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);

  if (rsBlock == undefined) {
    throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
  }

  var length = rsBlock.length / 3;
  var list = new Array();

  for (var i = 0; i < length; i++) {
    var count = rsBlock[i * 3 + 0];
    var totalCount = rsBlock[i * 3 + 1];
    var dataCount = rsBlock[i * 3 + 2];

    for (var j = 0; j < count; j++) {
      list.push(new QRRSBlock(totalCount, dataCount));
    }
  }

  return list;
};

QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
  switch (errorCorrectLevel) {
    case QRErrorCorrectLevel.L:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];

    case QRErrorCorrectLevel.M:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];

    case QRErrorCorrectLevel.Q:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];

    case QRErrorCorrectLevel.H:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];

    default:
      return undefined;
  }
}; //---------------------------------------------------------------------
// QRBitBuffer
//---------------------------------------------------------------------


function QRBitBuffer() {
  this.buffer = new Array();
  this.length = 0;
}

QRBitBuffer.prototype = {
  get: function get(index) {
    var bufIndex = Math.floor(index / 8);
    return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
  },
  put: function put(num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit((num >>> length - i - 1 & 1) == 1);
    }
  },
  getLengthInBits: function getLengthInBits() {
    return this.length;
  },
  putBit: function putBit(bit) {
    var bufIndex = Math.floor(this.length / 8);

    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }

    if (bit) {
      this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
    }

    this.length++;
  }
};

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xc5YWx55So5qih5aGKXFzlgpnku71cXHFyY29kZS5qcyJdLCJuYW1lcyI6WyJRUjhiaXRCeXRlIiwiZGF0YSIsIm1vZGUiLCJRUk1vZGUiLCJNT0RFXzhCSVRfQllURSIsInByb3RvdHlwZSIsImdldExlbmd0aCIsImJ1ZmZlciIsImxlbmd0aCIsIndyaXRlIiwiaSIsInB1dCIsImNoYXJDb2RlQXQiLCJRUkNvZGUiLCJ0eXBlTnVtYmVyIiwiZXJyb3JDb3JyZWN0TGV2ZWwiLCJtb2R1bGVzIiwibW9kdWxlQ291bnQiLCJkYXRhQ2FjaGUiLCJkYXRhTGlzdCIsIkFycmF5IiwiYWRkRGF0YSIsIm5ld0RhdGEiLCJwdXNoIiwiaXNEYXJrIiwicm93IiwiY29sIiwiRXJyb3IiLCJnZXRNb2R1bGVDb3VudCIsIm1ha2UiLCJyc0Jsb2NrcyIsIlFSUlNCbG9jayIsImdldFJTQmxvY2tzIiwiUVJCaXRCdWZmZXIiLCJ0b3RhbERhdGFDb3VudCIsImRhdGFDb3VudCIsIlFSVXRpbCIsImdldExlbmd0aEluQml0cyIsIm1ha2VJbXBsIiwiZ2V0QmVzdE1hc2tQYXR0ZXJuIiwidGVzdCIsIm1hc2tQYXR0ZXJuIiwic2V0dXBQb3NpdGlvblByb2JlUGF0dGVybiIsInNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuIiwic2V0dXBUaW1pbmdQYXR0ZXJuIiwic2V0dXBUeXBlSW5mbyIsInNldHVwVHlwZU51bWJlciIsImNyZWF0ZURhdGEiLCJtYXBEYXRhIiwiciIsImMiLCJtaW5Mb3N0UG9pbnQiLCJwYXR0ZXJuIiwibG9zdFBvaW50IiwiZ2V0TG9zdFBvaW50IiwiY3JlYXRlTW92aWVDbGlwIiwidGFyZ2V0X21jIiwiaW5zdGFuY2VfbmFtZSIsImRlcHRoIiwicXJfbWMiLCJjcmVhdGVFbXB0eU1vdmllQ2xpcCIsImNzIiwieSIsIngiLCJkYXJrIiwiYmVnaW5GaWxsIiwibW92ZVRvIiwibGluZVRvIiwiZW5kRmlsbCIsInBvcyIsImdldFBhdHRlcm5Qb3NpdGlvbiIsImoiLCJiaXRzIiwiZ2V0QkNIVHlwZU51bWJlciIsIm1vZCIsIk1hdGgiLCJmbG9vciIsImdldEJDSFR5cGVJbmZvIiwiaW5jIiwiYml0SW5kZXgiLCJieXRlSW5kZXgiLCJtYXNrIiwiZ2V0TWFzayIsIlBBRDAiLCJQQUQxIiwicHV0Qml0IiwiY3JlYXRlQnl0ZXMiLCJvZmZzZXQiLCJtYXhEY0NvdW50IiwibWF4RWNDb3VudCIsImRjZGF0YSIsImVjZGF0YSIsImRjQ291bnQiLCJlY0NvdW50IiwidG90YWxDb3VudCIsIm1heCIsInJzUG9seSIsImdldEVycm9yQ29ycmVjdFBvbHlub21pYWwiLCJyYXdQb2x5IiwiUVJQb2x5bm9taWFsIiwibW9kUG9seSIsIm1vZEluZGV4IiwiZ2V0IiwidG90YWxDb2RlQ291bnQiLCJpbmRleCIsIk1PREVfTlVNQkVSIiwiTU9ERV9BTFBIQV9OVU0iLCJNT0RFX0tBTkpJIiwiUVJFcnJvckNvcnJlY3RMZXZlbCIsIkwiLCJNIiwiUSIsIkgiLCJRUk1hc2tQYXR0ZXJuIiwiUEFUVEVSTjAwMCIsIlBBVFRFUk4wMDEiLCJQQVRURVJOMDEwIiwiUEFUVEVSTjAxMSIsIlBBVFRFUk4xMDAiLCJQQVRURVJOMTAxIiwiUEFUVEVSTjExMCIsIlBBVFRFUk4xMTEiLCJQQVRURVJOX1BPU0lUSU9OX1RBQkxFIiwiRzE1IiwiRzE4IiwiRzE1X01BU0siLCJkIiwiZ2V0QkNIRGlnaXQiLCJkaWdpdCIsImVycm9yQ29ycmVjdExlbmd0aCIsImEiLCJtdWx0aXBseSIsIlFSTWF0aCIsImdleHAiLCJ0eXBlIiwicXJDb2RlIiwic2FtZUNvdW50IiwiY291bnQiLCJkYXJrQ291bnQiLCJyYXRpbyIsImFicyIsImdsb2ciLCJuIiwiTE9HX1RBQkxFIiwiRVhQX1RBQkxFIiwibnVtIiwic2hpZnQiLCJ1bmRlZmluZWQiLCJlIiwiUlNfQkxPQ0tfVEFCTEUiLCJyc0Jsb2NrIiwiZ2V0UnNCbG9ja1RhYmxlIiwibGlzdCIsImJ1ZkluZGV4IiwiYml0Il0sIm1hcHBpbmdzIjoi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QUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLENBckJ3QixFQXNCeEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLENBdEJ3QixFQXVCeEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBdkJ3QixFQXdCeEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBeEJ3QixFQXlCeEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBekJ3QixFQTBCeEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBMUJ3QixFQTJCeEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLENBM0J3QixFQTRCeEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEdBQXBCLENBNUJ3QixFQTZCeEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBN0J3QixFQThCeEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBOUJ3QixFQStCeEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBL0J3QixFQWdDeEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBaEN3QixFQWlDeEIsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEdBQWhCLEVBQXFCLEdBQXJCLENBakN3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QUFDLEVBQTdCLEVBQWlDO0FBQ2hDLFdBQUsyRSxNQUFMLENBQWEsQ0FBRzRELEdBQUcsS0FBTXpJLE1BQU0sR0FBR0UsQ0FBVCxHQUFhLENBQXZCLEdBQThCLENBQWhDLEtBQXNDLENBQW5EO0FBQ0E7QUFDRCxHQVhzQjtBQWF2QjJCLEVBQUFBLGVBQWUsRUFBRywyQkFBVztBQUM1QixXQUFPLEtBQUs3QixNQUFaO0FBQ0EsR0Fmc0I7QUFpQnZCNkUsRUFBQUEsTUFBTSxFQUFHLGdCQUFTcUUsR0FBVCxFQUFjO0FBRXRCLFFBQUlELFFBQVEsR0FBRzlFLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtwRSxNQUFMLEdBQWMsQ0FBekIsQ0FBZjs7QUFDQSxRQUFJLEtBQUtELE1BQUwsQ0FBWUMsTUFBWixJQUFzQmlKLFFBQTFCLEVBQW9DO0FBQ25DLFdBQUtsSixNQUFMLENBQVlnQixJQUFaLENBQWlCLENBQWpCO0FBQ0E7O0FBRUQsUUFBSW1JLEdBQUosRUFBUztBQUNSLFdBQUtuSixNQUFMLENBQVlrSixRQUFaLEtBQTBCLFNBQVUsS0FBS2pKLE1BQUwsR0FBYyxDQUFsRDtBQUNBOztBQUVELFNBQUtBLE1BQUw7QUFDQTtBQTdCc0IsQ0FBeEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vL1FSQ+aPkuS7tlxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUkNvZGUgZm9yIEphdmFTY3JpcHRcclxuLy9cclxuLy8gQ29weXJpZ2h0IChjKSAyMDA5IEthenVoaWtvIEFyYXNlXHJcbi8vXHJcbi8vIFVSTDogaHR0cDovL3d3dy5kLXByb2plY3QuY29tL1xyXG4vL1xyXG4vLyBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2U6XHJcbi8vICAgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuLy9cclxuLy8gVGhlIHdvcmQgXCJRUiBDb2RlXCIgaXMgcmVnaXN0ZXJlZCB0cmFkZW1hcmsgb2YgXHJcbi8vIERFTlNPIFdBVkUgSU5DT1JQT1JBVEVEXHJcbi8vICAgaHR0cDovL3d3dy5kZW5zby13YXZlLmNvbS9xcmNvZGUvZmFxcGF0ZW50LWUuaHRtbFxyXG4vL1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUVI4Yml0Qnl0ZVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiBRUjhiaXRCeXRlKGRhdGEpIHtcclxuXHR0aGlzLm1vZGUgPSBRUk1vZGUuTU9ERV84QklUX0JZVEU7XHJcblx0dGhpcy5kYXRhID0gZGF0YTtcclxufVxyXG5cclxuUVI4Yml0Qnl0ZS5wcm90b3R5cGUgPSB7XHJcblxyXG5cdGdldExlbmd0aCA6IGZ1bmN0aW9uKGJ1ZmZlcikge1xyXG5cdFx0cmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XHJcblx0fSxcclxuXHRcclxuXHR3cml0ZSA6IGZ1bmN0aW9uKGJ1ZmZlcikge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0Ly8gbm90IEpJUyAuLi5cclxuXHRcdFx0YnVmZmVyLnB1dCh0aGlzLmRhdGEuY2hhckNvZGVBdChpKSwgOCk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUVJDb2RlXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBRUkNvZGUodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuXHR0aGlzLnR5cGVOdW1iZXIgPSB0eXBlTnVtYmVyO1xyXG5cdHRoaXMuZXJyb3JDb3JyZWN0TGV2ZWwgPSBlcnJvckNvcnJlY3RMZXZlbDtcclxuXHR0aGlzLm1vZHVsZXMgPSBudWxsO1xyXG5cdHRoaXMubW9kdWxlQ291bnQgPSAwO1xyXG5cdHRoaXMuZGF0YUNhY2hlID0gbnVsbDtcclxuXHR0aGlzLmRhdGFMaXN0ID0gbmV3IEFycmF5KCk7XHJcbn1cclxuXHJcblFSQ29kZS5wcm90b3R5cGUgPSB7XHJcblx0XHJcblx0YWRkRGF0YSA6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdHZhciBuZXdEYXRhID0gbmV3IFFSOGJpdEJ5dGUoZGF0YSk7XHJcblx0XHR0aGlzLmRhdGFMaXN0LnB1c2gobmV3RGF0YSk7XHJcblx0XHR0aGlzLmRhdGFDYWNoZSA9IG51bGw7XHJcblx0fSxcclxuXHRcclxuXHRpc0RhcmsgOiBmdW5jdGlvbihyb3csIGNvbCkge1xyXG5cdFx0aWYgKHJvdyA8IDAgfHwgdGhpcy5tb2R1bGVDb3VudCA8PSByb3cgfHwgY29sIDwgMCB8fCB0aGlzLm1vZHVsZUNvdW50IDw9IGNvbCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3Iocm93ICsgXCIsXCIgKyBjb2wpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMubW9kdWxlc1tyb3ddW2NvbF07XHJcblx0fSxcclxuXHJcblx0Z2V0TW9kdWxlQ291bnQgOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLm1vZHVsZUNvdW50O1xyXG5cdH0sXHJcblx0XHJcblx0bWFrZSA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gQ2FsY3VsYXRlIGF1dG9tYXRpY2FsbHkgdHlwZU51bWJlciBpZiBwcm92aWRlZCBpcyA8IDFcclxuXHRcdGlmICh0aGlzLnR5cGVOdW1iZXIgPCAxICl7XHJcblx0XHRcdHZhciB0eXBlTnVtYmVyID0gMTtcclxuXHRcdFx0Zm9yICh0eXBlTnVtYmVyID0gMTsgdHlwZU51bWJlciA8IDQwOyB0eXBlTnVtYmVyKyspIHtcclxuXHRcdFx0XHR2YXIgcnNCbG9ja3MgPSBRUlJTQmxvY2suZ2V0UlNCbG9ja3ModHlwZU51bWJlciwgdGhpcy5lcnJvckNvcnJlY3RMZXZlbCk7XHJcblxyXG5cdFx0XHRcdHZhciBidWZmZXIgPSBuZXcgUVJCaXRCdWZmZXIoKTtcclxuXHRcdFx0XHR2YXIgdG90YWxEYXRhQ291bnQgPSAwO1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcnNCbG9ja3MubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdHRvdGFsRGF0YUNvdW50ICs9IHJzQmxvY2tzW2ldLmRhdGFDb3VudDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhTGlzdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSB0aGlzLmRhdGFMaXN0W2ldO1xyXG5cdFx0XHRcdFx0YnVmZmVyLnB1dChkYXRhLm1vZGUsIDQpO1xyXG5cdFx0XHRcdFx0YnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBRUlV0aWwuZ2V0TGVuZ3RoSW5CaXRzKGRhdGEubW9kZSwgdHlwZU51bWJlcikgKTtcclxuXHRcdFx0XHRcdGRhdGEud3JpdGUoYnVmZmVyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA8PSB0b3RhbERhdGFDb3VudCAqIDgpXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnR5cGVOdW1iZXIgPSB0eXBlTnVtYmVyO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5tYWtlSW1wbChmYWxzZSwgdGhpcy5nZXRCZXN0TWFza1BhdHRlcm4oKSApO1xyXG5cdH0sXHJcblx0XHJcblx0bWFrZUltcGwgOiBmdW5jdGlvbih0ZXN0LCBtYXNrUGF0dGVybikge1xyXG5cdFx0XHJcblx0XHR0aGlzLm1vZHVsZUNvdW50ID0gdGhpcy50eXBlTnVtYmVyICogNCArIDE3O1xyXG5cdFx0dGhpcy5tb2R1bGVzID0gbmV3IEFycmF5KHRoaXMubW9kdWxlQ291bnQpO1xyXG5cdFx0XHJcblx0XHRmb3IgKHZhciByb3cgPSAwOyByb3cgPCB0aGlzLm1vZHVsZUNvdW50OyByb3crKykge1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5tb2R1bGVzW3Jvd10gPSBuZXcgQXJyYXkodGhpcy5tb2R1bGVDb3VudCk7XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCB0aGlzLm1vZHVsZUNvdW50OyBjb2wrKykge1xyXG5cdFx0XHRcdHRoaXMubW9kdWxlc1tyb3ddW2NvbF0gPSBudWxsOy8vKGNvbCArIHJvdykgJSAzO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHJcblx0XHR0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4oMCwgMCk7XHJcblx0XHR0aGlzLnNldHVwUG9zaXRpb25Qcm9iZVBhdHRlcm4odGhpcy5tb2R1bGVDb3VudCAtIDcsIDApO1xyXG5cdFx0dGhpcy5zZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuKDAsIHRoaXMubW9kdWxlQ291bnQgLSA3KTtcclxuXHRcdHRoaXMuc2V0dXBQb3NpdGlvbkFkanVzdFBhdHRlcm4oKTtcclxuXHRcdHRoaXMuc2V0dXBUaW1pbmdQYXR0ZXJuKCk7XHJcblx0XHR0aGlzLnNldHVwVHlwZUluZm8odGVzdCwgbWFza1BhdHRlcm4pO1xyXG5cdFx0XHJcblx0XHRpZiAodGhpcy50eXBlTnVtYmVyID49IDcpIHtcclxuXHRcdFx0dGhpcy5zZXR1cFR5cGVOdW1iZXIodGVzdCk7XHJcblx0XHR9XHJcblx0XHJcblx0XHRpZiAodGhpcy5kYXRhQ2FjaGUgPT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLmRhdGFDYWNoZSA9IFFSQ29kZS5jcmVhdGVEYXRhKHRoaXMudHlwZU51bWJlciwgdGhpcy5lcnJvckNvcnJlY3RMZXZlbCwgdGhpcy5kYXRhTGlzdCk7XHJcblx0XHR9XHJcblx0XHJcblx0XHR0aGlzLm1hcERhdGEodGhpcy5kYXRhQ2FjaGUsIG1hc2tQYXR0ZXJuKTtcclxuXHR9LFxyXG5cclxuXHRzZXR1cFBvc2l0aW9uUHJvYmVQYXR0ZXJuIDogZnVuY3Rpb24ocm93LCBjb2wpICB7XHJcblx0XHRcclxuXHRcdGZvciAodmFyIHIgPSAtMTsgciA8PSA3OyByKyspIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChyb3cgKyByIDw9IC0xIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gcm93ICsgcikgY29udGludWU7XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKHZhciBjID0gLTE7IGMgPD0gNzsgYysrKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKGNvbCArIGMgPD0gLTEgfHwgdGhpcy5tb2R1bGVDb3VudCA8PSBjb2wgKyBjKSBjb250aW51ZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoICgwIDw9IHIgJiYgciA8PSA2ICYmIChjID09IDAgfHwgYyA9PSA2KSApXHJcblx0XHRcdFx0XHRcdHx8ICgwIDw9IGMgJiYgYyA8PSA2ICYmIChyID09IDAgfHwgciA9PSA2KSApXHJcblx0XHRcdFx0XHRcdHx8ICgyIDw9IHIgJiYgciA8PSA0ICYmIDIgPD0gYyAmJiBjIDw9IDQpICkge1xyXG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3JvdyArIHJdW2NvbCArIGNdID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHRcdFxyXG5cdFx0fVx0XHRcclxuXHR9LFxyXG5cdFxyXG5cdGdldEJlc3RNYXNrUGF0dGVybiA6IGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdFx0dmFyIG1pbkxvc3RQb2ludCA9IDA7XHJcblx0XHR2YXIgcGF0dGVybiA9IDA7XHJcblx0XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5tYWtlSW1wbCh0cnVlLCBpKTtcclxuXHRcclxuXHRcdFx0dmFyIGxvc3RQb2ludCA9IFFSVXRpbC5nZXRMb3N0UG9pbnQodGhpcyk7XHJcblx0XHJcblx0XHRcdGlmIChpID09IDAgfHwgbWluTG9zdFBvaW50ID4gIGxvc3RQb2ludCkge1xyXG5cdFx0XHRcdG1pbkxvc3RQb2ludCA9IGxvc3RQb2ludDtcclxuXHRcdFx0XHRwYXR0ZXJuID0gaTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFxyXG5cdFx0cmV0dXJuIHBhdHRlcm47XHJcblx0fSxcclxuXHRcclxuXHRjcmVhdGVNb3ZpZUNsaXAgOiBmdW5jdGlvbih0YXJnZXRfbWMsIGluc3RhbmNlX25hbWUsIGRlcHRoKSB7XHJcblx0XHJcblx0XHR2YXIgcXJfbWMgPSB0YXJnZXRfbWMuY3JlYXRlRW1wdHlNb3ZpZUNsaXAoaW5zdGFuY2VfbmFtZSwgZGVwdGgpO1xyXG5cdFx0dmFyIGNzID0gMTtcclxuXHRcclxuXHRcdHRoaXMubWFrZSgpO1xyXG5cclxuXHRcdGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IHRoaXMubW9kdWxlcy5sZW5ndGg7IHJvdysrKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgeSA9IHJvdyAqIGNzO1xyXG5cdFx0XHRcclxuXHRcdFx0Zm9yICh2YXIgY29sID0gMDsgY29sIDwgdGhpcy5tb2R1bGVzW3Jvd10ubGVuZ3RoOyBjb2wrKykge1xyXG5cdFxyXG5cdFx0XHRcdHZhciB4ID0gY29sICogY3M7XHJcblx0XHRcdFx0dmFyIGRhcmsgPSB0aGlzLm1vZHVsZXNbcm93XVtjb2xdO1xyXG5cdFx0XHRcclxuXHRcdFx0XHRpZiAoZGFyaykge1xyXG5cdFx0XHRcdFx0cXJfbWMuYmVnaW5GaWxsKDAsIDEwMCk7XHJcblx0XHRcdFx0XHRxcl9tYy5tb3ZlVG8oeCwgeSk7XHJcblx0XHRcdFx0XHRxcl9tYy5saW5lVG8oeCArIGNzLCB5KTtcclxuXHRcdFx0XHRcdHFyX21jLmxpbmVUbyh4ICsgY3MsIHkgKyBjcyk7XHJcblx0XHRcdFx0XHRxcl9tYy5saW5lVG8oeCwgeSArIGNzKTtcclxuXHRcdFx0XHRcdHFyX21jLmVuZEZpbGwoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIHFyX21jO1xyXG5cdH0sXHJcblxyXG5cdHNldHVwVGltaW5nUGF0dGVybiA6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHRmb3IgKHZhciByID0gODsgciA8IHRoaXMubW9kdWxlQ291bnQgLSA4OyByKyspIHtcclxuXHRcdFx0aWYgKHRoaXMubW9kdWxlc1tyXVs2XSAhPSBudWxsKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5tb2R1bGVzW3JdWzZdID0gKHIgJSAyID09IDApO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0Zm9yICh2YXIgYyA9IDg7IGMgPCB0aGlzLm1vZHVsZUNvdW50IC0gODsgYysrKSB7XHJcblx0XHRcdGlmICh0aGlzLm1vZHVsZXNbNl1bY10gIT0gbnVsbCkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMubW9kdWxlc1s2XVtjXSA9IChjICUgMiA9PSAwKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHNldHVwUG9zaXRpb25BZGp1c3RQYXR0ZXJuIDogZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0XHR2YXIgcG9zID0gUVJVdGlsLmdldFBhdHRlcm5Qb3NpdGlvbih0aGlzLnR5cGVOdW1iZXIpO1xyXG5cdFx0XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBvcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHJcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcG9zLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRcdHZhciByb3cgPSBwb3NbaV07XHJcblx0XHRcdFx0dmFyIGNvbCA9IHBvc1tqXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGhpcy5tb2R1bGVzW3Jvd11bY29sXSAhPSBudWxsKSB7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yICh2YXIgciA9IC0yOyByIDw9IDI7IHIrKykge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yICh2YXIgYyA9IC0yOyBjIDw9IDI7IGMrKykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChyID09IC0yIHx8IHIgPT0gMiB8fCBjID09IC0yIHx8IGMgPT0gMiBcclxuXHRcdFx0XHRcdFx0XHRcdHx8IChyID09IDAgJiYgYyA9PSAwKSApIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm1vZHVsZXNbcm93ICsgcl1bY29sICsgY10gPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubW9kdWxlc1tyb3cgKyByXVtjb2wgKyBjXSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRzZXR1cFR5cGVOdW1iZXIgOiBmdW5jdGlvbih0ZXN0KSB7XHJcblx0XHJcblx0XHR2YXIgYml0cyA9IFFSVXRpbC5nZXRCQ0hUeXBlTnVtYmVyKHRoaXMudHlwZU51bWJlcik7XHJcblx0XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDE4OyBpKyspIHtcclxuXHRcdFx0dmFyIG1vZCA9ICghdGVzdCAmJiAoIChiaXRzID4+IGkpICYgMSkgPT0gMSk7XHJcblx0XHRcdHRoaXMubW9kdWxlc1tNYXRoLmZsb29yKGkgLyAzKV1baSAlIDMgKyB0aGlzLm1vZHVsZUNvdW50IC0gOCAtIDNdID0gbW9kO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxODsgaSsrKSB7XHJcblx0XHRcdHZhciBtb2QgPSAoIXRlc3QgJiYgKCAoYml0cyA+PiBpKSAmIDEpID09IDEpO1xyXG5cdFx0XHR0aGlzLm1vZHVsZXNbaSAlIDMgKyB0aGlzLm1vZHVsZUNvdW50IC0gOCAtIDNdW01hdGguZmxvb3IoaSAvIDMpXSA9IG1vZDtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHNldHVwVHlwZUluZm8gOiBmdW5jdGlvbih0ZXN0LCBtYXNrUGF0dGVybikge1xyXG5cdFxyXG5cdFx0dmFyIGRhdGEgPSAodGhpcy5lcnJvckNvcnJlY3RMZXZlbCA8PCAzKSB8IG1hc2tQYXR0ZXJuO1xyXG5cdFx0dmFyIGJpdHMgPSBRUlV0aWwuZ2V0QkNIVHlwZUluZm8oZGF0YSk7XHJcblx0XHJcblx0XHQvLyB2ZXJ0aWNhbFx0XHRcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG5cdFxyXG5cdFx0XHR2YXIgbW9kID0gKCF0ZXN0ICYmICggKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcclxuXHRcclxuXHRcdFx0aWYgKGkgPCA2KSB7XHJcblx0XHRcdFx0dGhpcy5tb2R1bGVzW2ldWzhdID0gbW9kO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGkgPCA4KSB7XHJcblx0XHRcdFx0dGhpcy5tb2R1bGVzW2kgKyAxXVs4XSA9IG1vZDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm1vZHVsZXNbdGhpcy5tb2R1bGVDb3VudCAtIDE1ICsgaV1bOF0gPSBtb2Q7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcclxuXHRcdC8vIGhvcml6b250YWxcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTU7IGkrKykge1xyXG5cdFxyXG5cdFx0XHR2YXIgbW9kID0gKCF0ZXN0ICYmICggKGJpdHMgPj4gaSkgJiAxKSA9PSAxKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChpIDwgOCkge1xyXG5cdFx0XHRcdHRoaXMubW9kdWxlc1s4XVt0aGlzLm1vZHVsZUNvdW50IC0gaSAtIDFdID0gbW9kO1xyXG5cdFx0XHR9IGVsc2UgaWYgKGkgPCA5KSB7XHJcblx0XHRcdFx0dGhpcy5tb2R1bGVzWzhdWzE1IC0gaSAtIDEgKyAxXSA9IG1vZDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm1vZHVsZXNbOF1bMTUgLSBpIC0gMV0gPSBtb2Q7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcclxuXHRcdC8vIGZpeGVkIG1vZHVsZVxyXG5cdFx0dGhpcy5tb2R1bGVzW3RoaXMubW9kdWxlQ291bnQgLSA4XVs4XSA9ICghdGVzdCk7XHJcblx0XHJcblx0fSxcclxuXHRcclxuXHRtYXBEYXRhIDogZnVuY3Rpb24oZGF0YSwgbWFza1BhdHRlcm4pIHtcclxuXHRcdFxyXG5cdFx0dmFyIGluYyA9IC0xO1xyXG5cdFx0dmFyIHJvdyA9IHRoaXMubW9kdWxlQ291bnQgLSAxO1xyXG5cdFx0dmFyIGJpdEluZGV4ID0gNztcclxuXHRcdHZhciBieXRlSW5kZXggPSAwO1xyXG5cdFx0XHJcblx0XHRmb3IgKHZhciBjb2wgPSB0aGlzLm1vZHVsZUNvdW50IC0gMTsgY29sID4gMDsgY29sIC09IDIpIHtcclxuXHRcclxuXHRcdFx0aWYgKGNvbCA9PSA2KSBjb2wtLTtcclxuXHRcclxuXHRcdFx0d2hpbGUgKHRydWUpIHtcclxuXHRcclxuXHRcdFx0XHRmb3IgKHZhciBjID0gMDsgYyA8IDI7IGMrKykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGhpcy5tb2R1bGVzW3Jvd11bY29sIC0gY10gPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dmFyIGRhcmsgPSBmYWxzZTtcclxuXHRcclxuXHRcdFx0XHRcdFx0aWYgKGJ5dGVJbmRleCA8IGRhdGEubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdFx0ZGFyayA9ICggKCAoZGF0YVtieXRlSW5kZXhdID4+PiBiaXRJbmRleCkgJiAxKSA9PSAxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFxyXG5cdFx0XHRcdFx0XHR2YXIgbWFzayA9IFFSVXRpbC5nZXRNYXNrKG1hc2tQYXR0ZXJuLCByb3csIGNvbCAtIGMpO1xyXG5cdFxyXG5cdFx0XHRcdFx0XHRpZiAobWFzaykge1xyXG5cdFx0XHRcdFx0XHRcdGRhcmsgPSAhZGFyaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGhpcy5tb2R1bGVzW3Jvd11bY29sIC0gY10gPSBkYXJrO1xyXG5cdFx0XHRcdFx0XHRiaXRJbmRleC0tO1xyXG5cdFxyXG5cdFx0XHRcdFx0XHRpZiAoYml0SW5kZXggPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRieXRlSW5kZXgrKztcclxuXHRcdFx0XHRcdFx0XHRiaXRJbmRleCA9IDc7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRyb3cgKz0gaW5jO1xyXG5cdFxyXG5cdFx0XHRcdGlmIChyb3cgPCAwIHx8IHRoaXMubW9kdWxlQ291bnQgPD0gcm93KSB7XHJcblx0XHRcdFx0XHRyb3cgLT0gaW5jO1xyXG5cdFx0XHRcdFx0aW5jID0gLWluYztcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cclxufTtcclxuXHJcblFSQ29kZS5QQUQwID0gMHhFQztcclxuUVJDb2RlLlBBRDEgPSAweDExO1xyXG5cclxuUVJDb2RlLmNyZWF0ZURhdGEgPSBmdW5jdGlvbih0eXBlTnVtYmVyLCBlcnJvckNvcnJlY3RMZXZlbCwgZGF0YUxpc3QpIHtcclxuXHRcclxuXHR2YXIgcnNCbG9ja3MgPSBRUlJTQmxvY2suZ2V0UlNCbG9ja3ModHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG5cdFxyXG5cdHZhciBidWZmZXIgPSBuZXcgUVJCaXRCdWZmZXIoKTtcclxuXHRcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHR2YXIgZGF0YSA9IGRhdGFMaXN0W2ldO1xyXG5cdFx0YnVmZmVyLnB1dChkYXRhLm1vZGUsIDQpO1xyXG5cdFx0YnVmZmVyLnB1dChkYXRhLmdldExlbmd0aCgpLCBRUlV0aWwuZ2V0TGVuZ3RoSW5CaXRzKGRhdGEubW9kZSwgdHlwZU51bWJlcikgKTtcclxuXHRcdGRhdGEud3JpdGUoYnVmZmVyKTtcclxuXHR9XHJcblxyXG5cdC8vIGNhbGMgbnVtIG1heCBkYXRhLlxyXG5cdHZhciB0b3RhbERhdGFDb3VudCA9IDA7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByc0Jsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dG90YWxEYXRhQ291bnQgKz0gcnNCbG9ja3NbaV0uZGF0YUNvdW50O1xyXG5cdH1cclxuXHJcblx0aWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSA+IHRvdGFsRGF0YUNvdW50ICogOCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY29kZSBsZW5ndGggb3ZlcmZsb3cuIChcIlxyXG5cdFx0XHQrIGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKVxyXG5cdFx0XHQrIFwiPlwiXHJcblx0XHRcdCsgIHRvdGFsRGF0YUNvdW50ICogOFxyXG5cdFx0XHQrIFwiKVwiKTtcclxuXHR9XHJcblxyXG5cdC8vIGVuZCBjb2RlXHJcblx0aWYgKGJ1ZmZlci5nZXRMZW5ndGhJbkJpdHMoKSArIDQgPD0gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcblx0XHRidWZmZXIucHV0KDAsIDQpO1xyXG5cdH1cclxuXHJcblx0Ly8gcGFkZGluZ1xyXG5cdHdoaWxlIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgJSA4ICE9IDApIHtcclxuXHRcdGJ1ZmZlci5wdXRCaXQoZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0Ly8gcGFkZGluZ1xyXG5cdHdoaWxlICh0cnVlKSB7XHJcblx0XHRcclxuXHRcdGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPj0gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0YnVmZmVyLnB1dChRUkNvZGUuUEFEMCwgOCk7XHJcblx0XHRcclxuXHRcdGlmIChidWZmZXIuZ2V0TGVuZ3RoSW5CaXRzKCkgPj0gdG90YWxEYXRhQ291bnQgKiA4KSB7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0YnVmZmVyLnB1dChRUkNvZGUuUEFEMSwgOCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gUVJDb2RlLmNyZWF0ZUJ5dGVzKGJ1ZmZlciwgcnNCbG9ja3MpO1xyXG59XHJcblxyXG5RUkNvZGUuY3JlYXRlQnl0ZXMgPSBmdW5jdGlvbihidWZmZXIsIHJzQmxvY2tzKSB7XHJcblxyXG5cdHZhciBvZmZzZXQgPSAwO1xyXG5cdFxyXG5cdHZhciBtYXhEY0NvdW50ID0gMDtcclxuXHR2YXIgbWF4RWNDb3VudCA9IDA7XHJcblx0XHJcblx0dmFyIGRjZGF0YSA9IG5ldyBBcnJheShyc0Jsb2Nrcy5sZW5ndGgpO1xyXG5cdHZhciBlY2RhdGEgPSBuZXcgQXJyYXkocnNCbG9ja3MubGVuZ3RoKTtcclxuXHRcclxuXHRmb3IgKHZhciByID0gMDsgciA8IHJzQmxvY2tzLmxlbmd0aDsgcisrKSB7XHJcblxyXG5cdFx0dmFyIGRjQ291bnQgPSByc0Jsb2Nrc1tyXS5kYXRhQ291bnQ7XHJcblx0XHR2YXIgZWNDb3VudCA9IHJzQmxvY2tzW3JdLnRvdGFsQ291bnQgLSBkY0NvdW50O1xyXG5cclxuXHRcdG1heERjQ291bnQgPSBNYXRoLm1heChtYXhEY0NvdW50LCBkY0NvdW50KTtcclxuXHRcdG1heEVjQ291bnQgPSBNYXRoLm1heChtYXhFY0NvdW50LCBlY0NvdW50KTtcclxuXHRcdFxyXG5cdFx0ZGNkYXRhW3JdID0gbmV3IEFycmF5KGRjQ291bnQpO1xyXG5cdFx0XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRjZGF0YVtyXS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRkY2RhdGFbcl1baV0gPSAweGZmICYgYnVmZmVyLmJ1ZmZlcltpICsgb2Zmc2V0XTtcclxuXHRcdH1cclxuXHRcdG9mZnNldCArPSBkY0NvdW50O1xyXG5cdFx0XHJcblx0XHR2YXIgcnNQb2x5ID0gUVJVdGlsLmdldEVycm9yQ29ycmVjdFBvbHlub21pYWwoZWNDb3VudCk7XHJcblx0XHR2YXIgcmF3UG9seSA9IG5ldyBRUlBvbHlub21pYWwoZGNkYXRhW3JdLCByc1BvbHkuZ2V0TGVuZ3RoKCkgLSAxKTtcclxuXHJcblx0XHR2YXIgbW9kUG9seSA9IHJhd1BvbHkubW9kKHJzUG9seSk7XHJcblx0XHRlY2RhdGFbcl0gPSBuZXcgQXJyYXkocnNQb2x5LmdldExlbmd0aCgpIC0gMSk7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVjZGF0YVtyXS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbW9kSW5kZXggPSBpICsgbW9kUG9seS5nZXRMZW5ndGgoKSAtIGVjZGF0YVtyXS5sZW5ndGg7XHJcblx0XHRcdGVjZGF0YVtyXVtpXSA9IChtb2RJbmRleCA+PSAwKT8gbW9kUG9seS5nZXQobW9kSW5kZXgpIDogMDtcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdFxyXG5cdHZhciB0b3RhbENvZGVDb3VudCA9IDA7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByc0Jsb2Nrcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0dG90YWxDb2RlQ291bnQgKz0gcnNCbG9ja3NbaV0udG90YWxDb3VudDtcclxuXHR9XHJcblxyXG5cdHZhciBkYXRhID0gbmV3IEFycmF5KHRvdGFsQ29kZUNvdW50KTtcclxuXHR2YXIgaW5kZXggPSAwO1xyXG5cclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG1heERjQ291bnQ7IGkrKykge1xyXG5cdFx0Zm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG5cdFx0XHRpZiAoaSA8IGRjZGF0YVtyXS5sZW5ndGgpIHtcclxuXHRcdFx0XHRkYXRhW2luZGV4KytdID0gZGNkYXRhW3JdW2ldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IG1heEVjQ291bnQ7IGkrKykge1xyXG5cdFx0Zm9yICh2YXIgciA9IDA7IHIgPCByc0Jsb2Nrcy5sZW5ndGg7IHIrKykge1xyXG5cdFx0XHRpZiAoaSA8IGVjZGF0YVtyXS5sZW5ndGgpIHtcclxuXHRcdFx0XHRkYXRhW2luZGV4KytdID0gZWNkYXRhW3JdW2ldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZGF0YTtcclxuXHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSTW9kZVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxudmFyIFFSTW9kZSA9IHtcclxuXHRNT0RFX05VTUJFUiA6XHRcdDEgPDwgMCxcclxuXHRNT0RFX0FMUEhBX05VTSA6IFx0MSA8PCAxLFxyXG5cdE1PREVfOEJJVF9CWVRFIDogXHQxIDw8IDIsXHJcblx0TU9ERV9LQU5KSSA6XHRcdDEgPDwgM1xyXG59O1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUVJFcnJvckNvcnJlY3RMZXZlbFxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gXHJcbnZhciBRUkVycm9yQ29ycmVjdExldmVsID0ge1xyXG5cdEwgOiAxLFxyXG5cdE0gOiAwLFxyXG5cdFEgOiAzLFxyXG5cdEggOiAyXHJcbn07XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUk1hc2tQYXR0ZXJuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgUVJNYXNrUGF0dGVybiA9IHtcclxuXHRQQVRURVJOMDAwIDogMCxcclxuXHRQQVRURVJOMDAxIDogMSxcclxuXHRQQVRURVJOMDEwIDogMixcclxuXHRQQVRURVJOMDExIDogMyxcclxuXHRQQVRURVJOMTAwIDogNCxcclxuXHRQQVRURVJOMTAxIDogNSxcclxuXHRQQVRURVJOMTEwIDogNixcclxuXHRQQVRURVJOMTExIDogN1xyXG59O1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUVJVdGlsXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiBcclxudmFyIFFSVXRpbCA9IHtcclxuXHJcbiAgICBQQVRURVJOX1BPU0lUSU9OX1RBQkxFIDogW1xyXG5cdCAgICBbXSxcclxuXHQgICAgWzYsIDE4XSxcclxuXHQgICAgWzYsIDIyXSxcclxuXHQgICAgWzYsIDI2XSxcclxuXHQgICAgWzYsIDMwXSxcclxuXHQgICAgWzYsIDM0XSxcclxuXHQgICAgWzYsIDIyLCAzOF0sXHJcblx0ICAgIFs2LCAyNCwgNDJdLFxyXG5cdCAgICBbNiwgMjYsIDQ2XSxcclxuXHQgICAgWzYsIDI4LCA1MF0sXHJcblx0ICAgIFs2LCAzMCwgNTRdLFx0XHRcclxuXHQgICAgWzYsIDMyLCA1OF0sXHJcblx0ICAgIFs2LCAzNCwgNjJdLFxyXG5cdCAgICBbNiwgMjYsIDQ2LCA2Nl0sXHJcblx0ICAgIFs2LCAyNiwgNDgsIDcwXSxcclxuXHQgICAgWzYsIDI2LCA1MCwgNzRdLFxyXG5cdCAgICBbNiwgMzAsIDU0LCA3OF0sXHJcblx0ICAgIFs2LCAzMCwgNTYsIDgyXSxcclxuXHQgICAgWzYsIDMwLCA1OCwgODZdLFxyXG5cdCAgICBbNiwgMzQsIDYyLCA5MF0sXHJcblx0ICAgIFs2LCAyOCwgNTAsIDcyLCA5NF0sXHJcblx0ICAgIFs2LCAyNiwgNTAsIDc0LCA5OF0sXHJcblx0ICAgIFs2LCAzMCwgNTQsIDc4LCAxMDJdLFxyXG5cdCAgICBbNiwgMjgsIDU0LCA4MCwgMTA2XSxcclxuXHQgICAgWzYsIDMyLCA1OCwgODQsIDExMF0sXHJcblx0ICAgIFs2LCAzMCwgNTgsIDg2LCAxMTRdLFxyXG5cdCAgICBbNiwgMzQsIDYyLCA5MCwgMTE4XSxcclxuXHQgICAgWzYsIDI2LCA1MCwgNzQsIDk4LCAxMjJdLFxyXG5cdCAgICBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjZdLFxyXG5cdCAgICBbNiwgMjYsIDUyLCA3OCwgMTA0LCAxMzBdLFxyXG5cdCAgICBbNiwgMzAsIDU2LCA4MiwgMTA4LCAxMzRdLFxyXG5cdCAgICBbNiwgMzQsIDYwLCA4NiwgMTEyLCAxMzhdLFxyXG5cdCAgICBbNiwgMzAsIDU4LCA4NiwgMTE0LCAxNDJdLFxyXG5cdCAgICBbNiwgMzQsIDYyLCA5MCwgMTE4LCAxNDZdLFxyXG5cdCAgICBbNiwgMzAsIDU0LCA3OCwgMTAyLCAxMjYsIDE1MF0sXHJcblx0ICAgIFs2LCAyNCwgNTAsIDc2LCAxMDIsIDEyOCwgMTU0XSxcclxuXHQgICAgWzYsIDI4LCA1NCwgODAsIDEwNiwgMTMyLCAxNThdLFxyXG5cdCAgICBbNiwgMzIsIDU4LCA4NCwgMTEwLCAxMzYsIDE2Ml0sXHJcblx0ICAgIFs2LCAyNiwgNTQsIDgyLCAxMTAsIDEzOCwgMTY2XSxcclxuXHQgICAgWzYsIDMwLCA1OCwgODYsIDExNCwgMTQyLCAxNzBdXHJcbiAgICBdLFxyXG5cclxuICAgIEcxNSA6ICgxIDw8IDEwKSB8ICgxIDw8IDgpIHwgKDEgPDwgNSkgfCAoMSA8PCA0KSB8ICgxIDw8IDIpIHwgKDEgPDwgMSkgfCAoMSA8PCAwKSxcclxuICAgIEcxOCA6ICgxIDw8IDEyKSB8ICgxIDw8IDExKSB8ICgxIDw8IDEwKSB8ICgxIDw8IDkpIHwgKDEgPDwgOCkgfCAoMSA8PCA1KSB8ICgxIDw8IDIpIHwgKDEgPDwgMCksXHJcbiAgICBHMTVfTUFTSyA6ICgxIDw8IDE0KSB8ICgxIDw8IDEyKSB8ICgxIDw8IDEwKVx0fCAoMSA8PCA0KSB8ICgxIDw8IDEpLFxyXG5cclxuICAgIGdldEJDSFR5cGVJbmZvIDogZnVuY3Rpb24oZGF0YSkge1xyXG5cdCAgICB2YXIgZCA9IGRhdGEgPDwgMTA7XHJcblx0ICAgIHdoaWxlIChRUlV0aWwuZ2V0QkNIRGlnaXQoZCkgLSBRUlV0aWwuZ2V0QkNIRGlnaXQoUVJVdGlsLkcxNSkgPj0gMCkge1xyXG5cdFx0ICAgIGQgXj0gKFFSVXRpbC5HMTUgPDwgKFFSVXRpbC5nZXRCQ0hEaWdpdChkKSAtIFFSVXRpbC5nZXRCQ0hEaWdpdChRUlV0aWwuRzE1KSApICk7IFx0XHJcblx0ICAgIH1cclxuXHQgICAgcmV0dXJuICggKGRhdGEgPDwgMTApIHwgZCkgXiBRUlV0aWwuRzE1X01BU0s7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEJDSFR5cGVOdW1iZXIgOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0ICAgIHZhciBkID0gZGF0YSA8PCAxMjtcclxuXHQgICAgd2hpbGUgKFFSVXRpbC5nZXRCQ0hEaWdpdChkKSAtIFFSVXRpbC5nZXRCQ0hEaWdpdChRUlV0aWwuRzE4KSA+PSAwKSB7XHJcblx0XHQgICAgZCBePSAoUVJVdGlsLkcxOCA8PCAoUVJVdGlsLmdldEJDSERpZ2l0KGQpIC0gUVJVdGlsLmdldEJDSERpZ2l0KFFSVXRpbC5HMTgpICkgKTsgXHRcclxuXHQgICAgfVxyXG5cdCAgICByZXR1cm4gKGRhdGEgPDwgMTIpIHwgZDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0QkNIRGlnaXQgOiBmdW5jdGlvbihkYXRhKSB7XHJcblxyXG5cdCAgICB2YXIgZGlnaXQgPSAwO1xyXG5cclxuXHQgICAgd2hpbGUgKGRhdGEgIT0gMCkge1xyXG5cdFx0ICAgIGRpZ2l0Kys7XHJcblx0XHQgICAgZGF0YSA+Pj49IDE7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIHJldHVybiBkaWdpdDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0UGF0dGVyblBvc2l0aW9uIDogZnVuY3Rpb24odHlwZU51bWJlcikge1xyXG5cdCAgICByZXR1cm4gUVJVdGlsLlBBVFRFUk5fUE9TSVRJT05fVEFCTEVbdHlwZU51bWJlciAtIDFdO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRNYXNrIDogZnVuY3Rpb24obWFza1BhdHRlcm4sIGksIGopIHtcclxuXHQgICAgXHJcblx0ICAgIHN3aXRjaCAobWFza1BhdHRlcm4pIHtcclxuXHRcdCAgICBcclxuXHQgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDAgOiByZXR1cm4gKGkgKyBqKSAlIDIgPT0gMDtcclxuXHQgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMDEgOiByZXR1cm4gaSAlIDIgPT0gMDtcclxuXHQgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTAgOiByZXR1cm4gaiAlIDMgPT0gMDtcclxuXHQgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4wMTEgOiByZXR1cm4gKGkgKyBqKSAlIDMgPT0gMDtcclxuXHQgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDAgOiByZXR1cm4gKE1hdGguZmxvb3IoaSAvIDIpICsgTWF0aC5mbG9vcihqIC8gMykgKSAlIDIgPT0gMDtcclxuXHQgICAgY2FzZSBRUk1hc2tQYXR0ZXJuLlBBVFRFUk4xMDEgOiByZXR1cm4gKGkgKiBqKSAlIDIgKyAoaSAqIGopICUgMyA9PSAwO1xyXG5cdCAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjExMCA6IHJldHVybiAoIChpICogaikgJSAyICsgKGkgKiBqKSAlIDMpICUgMiA9PSAwO1xyXG5cdCAgICBjYXNlIFFSTWFza1BhdHRlcm4uUEFUVEVSTjExMSA6IHJldHVybiAoIChpICogaikgJSAzICsgKGkgKyBqKSAlIDIpICUgMiA9PSAwO1xyXG5cclxuXHQgICAgZGVmYXVsdCA6XHJcblx0XHQgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFkIG1hc2tQYXR0ZXJuOlwiICsgbWFza1BhdHRlcm4pO1xyXG5cdCAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEVycm9yQ29ycmVjdFBvbHlub21pYWwgOiBmdW5jdGlvbihlcnJvckNvcnJlY3RMZW5ndGgpIHtcclxuXHJcblx0ICAgIHZhciBhID0gbmV3IFFSUG9seW5vbWlhbChbMV0sIDApO1xyXG5cclxuXHQgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvckNvcnJlY3RMZW5ndGg7IGkrKykge1xyXG5cdFx0ICAgIGEgPSBhLm11bHRpcGx5KG5ldyBRUlBvbHlub21pYWwoWzEsIFFSTWF0aC5nZXhwKGkpXSwgMCkgKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIGE7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldExlbmd0aEluQml0cyA6IGZ1bmN0aW9uKG1vZGUsIHR5cGUpIHtcclxuXHJcblx0ICAgIGlmICgxIDw9IHR5cGUgJiYgdHlwZSA8IDEwKSB7XHJcblxyXG5cdFx0ICAgIC8vIDEgLSA5XHJcblxyXG5cdFx0ICAgIHN3aXRjaChtb2RlKSB7XHJcblx0XHQgICAgY2FzZSBRUk1vZGUuTU9ERV9OVU1CRVIgXHQ6IHJldHVybiAxMDtcclxuXHRcdCAgICBjYXNlIFFSTW9kZS5NT0RFX0FMUEhBX05VTSBcdDogcmV0dXJuIDk7XHJcblx0XHQgICAgY2FzZSBRUk1vZGUuTU9ERV84QklUX0JZVEVcdDogcmV0dXJuIDg7XHJcblx0XHQgICAgY2FzZSBRUk1vZGUuTU9ERV9LQU5KSSAgXHQ6IHJldHVybiA4O1xyXG5cdFx0ICAgIGRlZmF1bHQgOlxyXG5cdFx0XHQgICAgdGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIiArIG1vZGUpO1xyXG5cdFx0ICAgIH1cclxuXHJcblx0ICAgIH0gZWxzZSBpZiAodHlwZSA8IDI3KSB7XHJcblxyXG5cdFx0ICAgIC8vIDEwIC0gMjZcclxuXHJcblx0XHQgICAgc3dpdGNoKG1vZGUpIHtcclxuXHRcdCAgICBjYXNlIFFSTW9kZS5NT0RFX05VTUJFUiBcdDogcmV0dXJuIDEyO1xyXG5cdFx0ICAgIGNhc2UgUVJNb2RlLk1PREVfQUxQSEFfTlVNIFx0OiByZXR1cm4gMTE7XHJcblx0XHQgICAgY2FzZSBRUk1vZGUuTU9ERV84QklUX0JZVEVcdDogcmV0dXJuIDE2O1xyXG5cdFx0ICAgIGNhc2UgUVJNb2RlLk1PREVfS0FOSkkgIFx0OiByZXR1cm4gMTA7XHJcblx0XHQgICAgZGVmYXVsdCA6XHJcblx0XHRcdCAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2RlOlwiICsgbW9kZSk7XHJcblx0XHQgICAgfVxyXG5cclxuXHQgICAgfSBlbHNlIGlmICh0eXBlIDwgNDEpIHtcclxuXHJcblx0XHQgICAgLy8gMjcgLSA0MFxyXG5cclxuXHRcdCAgICBzd2l0Y2gobW9kZSkge1xyXG5cdFx0ICAgIGNhc2UgUVJNb2RlLk1PREVfTlVNQkVSIFx0OiByZXR1cm4gMTQ7XHJcblx0XHQgICAgY2FzZSBRUk1vZGUuTU9ERV9BTFBIQV9OVU1cdDogcmV0dXJuIDEzO1xyXG5cdFx0ICAgIGNhc2UgUVJNb2RlLk1PREVfOEJJVF9CWVRFXHQ6IHJldHVybiAxNjtcclxuXHRcdCAgICBjYXNlIFFSTW9kZS5NT0RFX0tBTkpJICBcdDogcmV0dXJuIDEyO1xyXG5cdFx0ICAgIGRlZmF1bHQgOlxyXG5cdFx0XHQgICAgdGhyb3cgbmV3IEVycm9yKFwibW9kZTpcIiArIG1vZGUpO1xyXG5cdFx0ICAgIH1cclxuXHJcblx0ICAgIH0gZWxzZSB7XHJcblx0XHQgICAgdGhyb3cgbmV3IEVycm9yKFwidHlwZTpcIiArIHR5cGUpO1xyXG5cdCAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldExvc3RQb2ludCA6IGZ1bmN0aW9uKHFyQ29kZSkge1xyXG5cdCAgICBcclxuXHQgICAgdmFyIG1vZHVsZUNvdW50ID0gcXJDb2RlLmdldE1vZHVsZUNvdW50KCk7XHJcblx0ICAgIFxyXG5cdCAgICB2YXIgbG9zdFBvaW50ID0gMDtcclxuXHQgICAgXHJcblx0ICAgIC8vIExFVkVMMVxyXG5cdCAgICBcclxuXHQgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcblxyXG5cdFx0ICAgIGZvciAodmFyIGNvbCA9IDA7IGNvbCA8IG1vZHVsZUNvdW50OyBjb2wrKykge1xyXG5cclxuXHRcdFx0ICAgIHZhciBzYW1lQ291bnQgPSAwO1xyXG5cdFx0XHQgICAgdmFyIGRhcmsgPSBxckNvZGUuaXNEYXJrKHJvdywgY29sKTtcclxuXHJcblx0XHRcdFx0Zm9yICh2YXIgciA9IC0xOyByIDw9IDE7IHIrKykge1xyXG5cclxuXHRcdFx0XHQgICAgaWYgKHJvdyArIHIgPCAwIHx8IG1vZHVsZUNvdW50IDw9IHJvdyArIHIpIHtcclxuXHRcdFx0XHRcdCAgICBjb250aW51ZTtcclxuXHRcdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0XHQgICAgZm9yICh2YXIgYyA9IC0xOyBjIDw9IDE7IGMrKykge1xyXG5cclxuXHRcdFx0XHRcdCAgICBpZiAoY29sICsgYyA8IDAgfHwgbW9kdWxlQ291bnQgPD0gY29sICsgYykge1xyXG5cdFx0XHRcdFx0XHQgICAgY29udGludWU7XHJcblx0XHRcdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0XHRcdCAgICBpZiAociA9PSAwICYmIGMgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHQgICAgY29udGludWU7XHJcblx0XHRcdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0XHRcdCAgICBpZiAoZGFyayA9PSBxckNvZGUuaXNEYXJrKHJvdyArIHIsIGNvbCArIGMpICkge1xyXG5cdFx0XHRcdFx0XHQgICAgc2FtZUNvdW50Kys7XHJcblx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdCAgICB9XHJcblxyXG5cdFx0XHQgICAgaWYgKHNhbWVDb3VudCA+IDUpIHtcclxuXHRcdFx0XHQgICAgbG9zdFBvaW50ICs9ICgzICsgc2FtZUNvdW50IC0gNSk7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvLyBMRVZFTDJcclxuXHJcblx0ICAgIGZvciAodmFyIHJvdyA9IDA7IHJvdyA8IG1vZHVsZUNvdW50IC0gMTsgcm93KyspIHtcclxuXHRcdCAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudCAtIDE7IGNvbCsrKSB7XHJcblx0XHRcdCAgICB2YXIgY291bnQgPSAwO1xyXG5cdFx0XHQgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93LCAgICAgY29sICAgICkgKSBjb3VudCsrO1xyXG5cdFx0XHQgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93ICsgMSwgY29sICAgICkgKSBjb3VudCsrO1xyXG5cdFx0XHQgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93LCAgICAgY29sICsgMSkgKSBjb3VudCsrO1xyXG5cdFx0XHQgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93ICsgMSwgY29sICsgMSkgKSBjb3VudCsrO1xyXG5cdFx0XHQgICAgaWYgKGNvdW50ID09IDAgfHwgY291bnQgPT0gNCkge1xyXG5cdFx0XHRcdCAgICBsb3N0UG9pbnQgKz0gMztcclxuXHRcdFx0ICAgIH1cclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIC8vIExFVkVMM1xyXG5cclxuXHQgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgbW9kdWxlQ291bnQ7IHJvdysrKSB7XHJcblx0XHQgICAgZm9yICh2YXIgY29sID0gMDsgY29sIDwgbW9kdWxlQ291bnQgLSA2OyBjb2wrKykge1xyXG5cdFx0XHQgICAgaWYgKHFyQ29kZS5pc0Rhcmsocm93LCBjb2wpXHJcblx0XHRcdFx0XHQgICAgJiYgIXFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyAxKVxyXG5cdFx0XHRcdFx0ICAgICYmICBxckNvZGUuaXNEYXJrKHJvdywgY29sICsgMilcclxuXHRcdFx0XHRcdCAgICAmJiAgcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDMpXHJcblx0XHRcdFx0XHQgICAgJiYgIHFyQ29kZS5pc0Rhcmsocm93LCBjb2wgKyA0KVxyXG5cdFx0XHRcdFx0ICAgICYmICFxckNvZGUuaXNEYXJrKHJvdywgY29sICsgNSlcclxuXHRcdFx0XHRcdCAgICAmJiAgcXJDb2RlLmlzRGFyayhyb3csIGNvbCArIDYpICkge1xyXG5cdFx0XHRcdCAgICBsb3N0UG9pbnQgKz0gNDA7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcclxuXHRcdCAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudCAtIDY7IHJvdysrKSB7XHJcblx0XHRcdCAgICBpZiAocXJDb2RlLmlzRGFyayhyb3csIGNvbClcclxuXHRcdFx0XHRcdCAgICAmJiAhcXJDb2RlLmlzRGFyayhyb3cgKyAxLCBjb2wpXHJcblx0XHRcdFx0XHQgICAgJiYgIHFyQ29kZS5pc0Rhcmsocm93ICsgMiwgY29sKVxyXG5cdFx0XHRcdFx0ICAgICYmICBxckNvZGUuaXNEYXJrKHJvdyArIDMsIGNvbClcclxuXHRcdFx0XHRcdCAgICAmJiAgcXJDb2RlLmlzRGFyayhyb3cgKyA0LCBjb2wpXHJcblx0XHRcdFx0XHQgICAgJiYgIXFyQ29kZS5pc0Rhcmsocm93ICsgNSwgY29sKVxyXG5cdFx0XHRcdFx0ICAgICYmICBxckNvZGUuaXNEYXJrKHJvdyArIDYsIGNvbCkgKSB7XHJcblx0XHRcdFx0ICAgIGxvc3RQb2ludCArPSA0MDtcclxuXHRcdFx0ICAgIH1cclxuXHRcdCAgICB9XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIC8vIExFVkVMNFxyXG5cdCAgICBcclxuXHQgICAgdmFyIGRhcmtDb3VudCA9IDA7XHJcblxyXG5cdCAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCBtb2R1bGVDb3VudDsgY29sKyspIHtcclxuXHRcdCAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCBtb2R1bGVDb3VudDsgcm93KyspIHtcclxuXHRcdFx0ICAgIGlmIChxckNvZGUuaXNEYXJrKHJvdywgY29sKSApIHtcclxuXHRcdFx0XHQgICAgZGFya0NvdW50Kys7XHJcblx0XHRcdCAgICB9XHJcblx0XHQgICAgfVxyXG5cdCAgICB9XHJcblx0ICAgIFxyXG5cdCAgICB2YXIgcmF0aW8gPSBNYXRoLmFicygxMDAgKiBkYXJrQ291bnQgLyBtb2R1bGVDb3VudCAvIG1vZHVsZUNvdW50IC0gNTApIC8gNTtcclxuXHQgICAgbG9zdFBvaW50ICs9IHJhdGlvICogMTA7XHJcblxyXG5cdCAgICByZXR1cm4gbG9zdFBvaW50O1x0XHRcclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUVJNYXRoXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgUVJNYXRoID0ge1xyXG5cclxuXHRnbG9nIDogZnVuY3Rpb24obikge1xyXG5cdFxyXG5cdFx0aWYgKG4gPCAxKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcihcImdsb2coXCIgKyBuICsgXCIpXCIpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gUVJNYXRoLkxPR19UQUJMRVtuXTtcclxuXHR9LFxyXG5cdFxyXG5cdGdleHAgOiBmdW5jdGlvbihuKSB7XHJcblx0XHJcblx0XHR3aGlsZSAobiA8IDApIHtcclxuXHRcdFx0biArPSAyNTU7XHJcblx0XHR9XHJcblx0XHJcblx0XHR3aGlsZSAobiA+PSAyNTYpIHtcclxuXHRcdFx0biAtPSAyNTU7XHJcblx0XHR9XHJcblx0XHJcblx0XHRyZXR1cm4gUVJNYXRoLkVYUF9UQUJMRVtuXTtcclxuXHR9LFxyXG5cdFxyXG5cdEVYUF9UQUJMRSA6IG5ldyBBcnJheSgyNTYpLFxyXG5cdFxyXG5cdExPR19UQUJMRSA6IG5ldyBBcnJheSgyNTYpXHJcblxyXG59O1xyXG5cdFxyXG5mb3IgKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xyXG5cdFFSTWF0aC5FWFBfVEFCTEVbaV0gPSAxIDw8IGk7XHJcbn1cclxuZm9yICh2YXIgaSA9IDg7IGkgPCAyNTY7IGkrKykge1xyXG5cdFFSTWF0aC5FWFBfVEFCTEVbaV0gPSBRUk1hdGguRVhQX1RBQkxFW2kgLSA0XVxyXG5cdFx0XiBRUk1hdGguRVhQX1RBQkxFW2kgLSA1XVxyXG5cdFx0XiBRUk1hdGguRVhQX1RBQkxFW2kgLSA2XVxyXG5cdFx0XiBRUk1hdGguRVhQX1RBQkxFW2kgLSA4XTtcclxufVxyXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XHJcblx0UVJNYXRoLkxPR19UQUJMRVtRUk1hdGguRVhQX1RBQkxFW2ldIF0gPSBpO1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUlBvbHlub21pYWxcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIFFSUG9seW5vbWlhbChudW0sIHNoaWZ0KSB7XHJcblxyXG5cdGlmIChudW0ubGVuZ3RoID09IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKG51bS5sZW5ndGggKyBcIi9cIiArIHNoaWZ0KTtcclxuXHR9XHJcblxyXG5cdHZhciBvZmZzZXQgPSAwO1xyXG5cclxuXHR3aGlsZSAob2Zmc2V0IDwgbnVtLmxlbmd0aCAmJiBudW1bb2Zmc2V0XSA9PSAwKSB7XHJcblx0XHRvZmZzZXQrKztcclxuXHR9XHJcblxyXG5cdHRoaXMubnVtID0gbmV3IEFycmF5KG51bS5sZW5ndGggLSBvZmZzZXQgKyBzaGlmdCk7XHJcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBudW0ubGVuZ3RoIC0gb2Zmc2V0OyBpKyspIHtcclxuXHRcdHRoaXMubnVtW2ldID0gbnVtW2kgKyBvZmZzZXRdO1xyXG5cdH1cclxufVxyXG5cclxuUVJQb2x5bm9taWFsLnByb3RvdHlwZSA9IHtcclxuXHJcblx0Z2V0IDogZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdHJldHVybiB0aGlzLm51bVtpbmRleF07XHJcblx0fSxcclxuXHRcclxuXHRnZXRMZW5ndGggOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLm51bS5sZW5ndGg7XHJcblx0fSxcclxuXHRcclxuXHRtdWx0aXBseSA6IGZ1bmN0aW9uKGUpIHtcclxuXHRcclxuXHRcdHZhciBudW0gPSBuZXcgQXJyYXkodGhpcy5nZXRMZW5ndGgoKSArIGUuZ2V0TGVuZ3RoKCkgLSAxKTtcclxuXHRcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZS5nZXRMZW5ndGgoKTsgaisrKSB7XHJcblx0XHRcdFx0bnVtW2kgKyBqXSBePSBRUk1hdGguZ2V4cChRUk1hdGguZ2xvZyh0aGlzLmdldChpKSApICsgUVJNYXRoLmdsb2coZS5nZXQoaikgKSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHJcblx0XHRyZXR1cm4gbmV3IFFSUG9seW5vbWlhbChudW0sIDApO1xyXG5cdH0sXHJcblx0XHJcblx0bW9kIDogZnVuY3Rpb24oZSkge1xyXG5cdFxyXG5cdFx0aWYgKHRoaXMuZ2V0TGVuZ3RoKCkgLSBlLmdldExlbmd0aCgpIDwgMCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHRcclxuXHRcdHZhciByYXRpbyA9IFFSTWF0aC5nbG9nKHRoaXMuZ2V0KDApICkgLSBRUk1hdGguZ2xvZyhlLmdldCgwKSApO1xyXG5cdFxyXG5cdFx0dmFyIG51bSA9IG5ldyBBcnJheSh0aGlzLmdldExlbmd0aCgpICk7XHJcblx0XHRcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcblx0XHRcdG51bVtpXSA9IHRoaXMuZ2V0KGkpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGUuZ2V0TGVuZ3RoKCk7IGkrKykge1xyXG5cdFx0XHRudW1baV0gXj0gUVJNYXRoLmdleHAoUVJNYXRoLmdsb2coZS5nZXQoaSkgKSArIHJhdGlvKTtcclxuXHRcdH1cclxuXHRcclxuXHRcdC8vIHJlY3Vyc2l2ZSBjYWxsXHJcblx0XHRyZXR1cm4gbmV3IFFSUG9seW5vbWlhbChudW0sIDApLm1vZChlKTtcclxuXHR9XHJcbn07XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBRUlJTQmxvY2tcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIFFSUlNCbG9jayh0b3RhbENvdW50LCBkYXRhQ291bnQpIHtcclxuXHR0aGlzLnRvdGFsQ291bnQgPSB0b3RhbENvdW50O1xyXG5cdHRoaXMuZGF0YUNvdW50ICA9IGRhdGFDb3VudDtcclxufVxyXG5cclxuUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFID0gW1xyXG5cclxuXHQvLyBMXHJcblx0Ly8gTVxyXG5cdC8vIFFcclxuXHQvLyBIXHJcblxyXG5cdC8vIDFcclxuXHRbMSwgMjYsIDE5XSxcclxuXHRbMSwgMjYsIDE2XSxcclxuXHRbMSwgMjYsIDEzXSxcclxuXHRbMSwgMjYsIDldLFxyXG5cdFxyXG5cdC8vIDJcclxuXHRbMSwgNDQsIDM0XSxcclxuXHRbMSwgNDQsIDI4XSxcclxuXHRbMSwgNDQsIDIyXSxcclxuXHRbMSwgNDQsIDE2XSxcclxuXHJcblx0Ly8gM1xyXG5cdFsxLCA3MCwgNTVdLFxyXG5cdFsxLCA3MCwgNDRdLFxyXG5cdFsyLCAzNSwgMTddLFxyXG5cdFsyLCAzNSwgMTNdLFxyXG5cclxuXHQvLyA0XHRcdFxyXG5cdFsxLCAxMDAsIDgwXSxcclxuXHRbMiwgNTAsIDMyXSxcclxuXHRbMiwgNTAsIDI0XSxcclxuXHRbNCwgMjUsIDldLFxyXG5cdFxyXG5cdC8vIDVcclxuXHRbMSwgMTM0LCAxMDhdLFxyXG5cdFsyLCA2NywgNDNdLFxyXG5cdFsyLCAzMywgMTUsIDIsIDM0LCAxNl0sXHJcblx0WzIsIDMzLCAxMSwgMiwgMzQsIDEyXSxcclxuXHRcclxuXHQvLyA2XHJcblx0WzIsIDg2LCA2OF0sXHJcblx0WzQsIDQzLCAyN10sXHJcblx0WzQsIDQzLCAxOV0sXHJcblx0WzQsIDQzLCAxNV0sXHJcblx0XHJcblx0Ly8gN1x0XHRcclxuXHRbMiwgOTgsIDc4XSxcclxuXHRbNCwgNDksIDMxXSxcclxuXHRbMiwgMzIsIDE0LCA0LCAzMywgMTVdLFxyXG5cdFs0LCAzOSwgMTMsIDEsIDQwLCAxNF0sXHJcblx0XHJcblx0Ly8gOFxyXG5cdFsyLCAxMjEsIDk3XSxcclxuXHRbMiwgNjAsIDM4LCAyLCA2MSwgMzldLFxyXG5cdFs0LCA0MCwgMTgsIDIsIDQxLCAxOV0sXHJcblx0WzQsIDQwLCAxNCwgMiwgNDEsIDE1XSxcclxuXHRcclxuXHQvLyA5XHJcblx0WzIsIDE0NiwgMTE2XSxcclxuXHRbMywgNTgsIDM2LCAyLCA1OSwgMzddLFxyXG5cdFs0LCAzNiwgMTYsIDQsIDM3LCAxN10sXHJcblx0WzQsIDM2LCAxMiwgNCwgMzcsIDEzXSxcclxuXHRcclxuXHQvLyAxMFx0XHRcclxuXHRbMiwgODYsIDY4LCAyLCA4NywgNjldLFxyXG5cdFs0LCA2OSwgNDMsIDEsIDcwLCA0NF0sXHJcblx0WzYsIDQzLCAxOSwgMiwgNDQsIDIwXSxcclxuXHRbNiwgNDMsIDE1LCAyLCA0NCwgMTZdLFxyXG5cclxuXHQvLyAxMVxyXG5cdFs0LCAxMDEsIDgxXSxcclxuXHRbMSwgODAsIDUwLCA0LCA4MSwgNTFdLFxyXG5cdFs0LCA1MCwgMjIsIDQsIDUxLCAyM10sXHJcblx0WzMsIDM2LCAxMiwgOCwgMzcsIDEzXSxcclxuXHJcblx0Ly8gMTJcclxuXHRbMiwgMTE2LCA5MiwgMiwgMTE3LCA5M10sXHJcblx0WzYsIDU4LCAzNiwgMiwgNTksIDM3XSxcclxuXHRbNCwgNDYsIDIwLCA2LCA0NywgMjFdLFxyXG5cdFs3LCA0MiwgMTQsIDQsIDQzLCAxNV0sXHJcblxyXG5cdC8vIDEzXHJcblx0WzQsIDEzMywgMTA3XSxcclxuXHRbOCwgNTksIDM3LCAxLCA2MCwgMzhdLFxyXG5cdFs4LCA0NCwgMjAsIDQsIDQ1LCAyMV0sXHJcblx0WzEyLCAzMywgMTEsIDQsIDM0LCAxMl0sXHJcblxyXG5cdC8vIDE0XHJcblx0WzMsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXHJcblx0WzQsIDY0LCA0MCwgNSwgNjUsIDQxXSxcclxuXHRbMTEsIDM2LCAxNiwgNSwgMzcsIDE3XSxcclxuXHRbMTEsIDM2LCAxMiwgNSwgMzcsIDEzXSxcclxuXHJcblx0Ly8gMTVcclxuXHRbNSwgMTA5LCA4NywgMSwgMTEwLCA4OF0sXHJcblx0WzUsIDY1LCA0MSwgNSwgNjYsIDQyXSxcclxuXHRbNSwgNTQsIDI0LCA3LCA1NSwgMjVdLFxyXG5cdFsxMSwgMzYsIDEyXSxcclxuXHJcblx0Ly8gMTZcclxuXHRbNSwgMTIyLCA5OCwgMSwgMTIzLCA5OV0sXHJcblx0WzcsIDczLCA0NSwgMywgNzQsIDQ2XSxcclxuXHRbMTUsIDQzLCAxOSwgMiwgNDQsIDIwXSxcclxuXHRbMywgNDUsIDE1LCAxMywgNDYsIDE2XSxcclxuXHJcblx0Ly8gMTdcclxuXHRbMSwgMTM1LCAxMDcsIDUsIDEzNiwgMTA4XSxcclxuXHRbMTAsIDc0LCA0NiwgMSwgNzUsIDQ3XSxcclxuXHRbMSwgNTAsIDIyLCAxNSwgNTEsIDIzXSxcclxuXHRbMiwgNDIsIDE0LCAxNywgNDMsIDE1XSxcclxuXHJcblx0Ly8gMThcclxuXHRbNSwgMTUwLCAxMjAsIDEsIDE1MSwgMTIxXSxcclxuXHRbOSwgNjksIDQzLCA0LCA3MCwgNDRdLFxyXG5cdFsxNywgNTAsIDIyLCAxLCA1MSwgMjNdLFxyXG5cdFsyLCA0MiwgMTQsIDE5LCA0MywgMTVdLFxyXG5cclxuXHQvLyAxOVxyXG5cdFszLCAxNDEsIDExMywgNCwgMTQyLCAxMTRdLFxyXG5cdFszLCA3MCwgNDQsIDExLCA3MSwgNDVdLFxyXG5cdFsxNywgNDcsIDIxLCA0LCA0OCwgMjJdLFxyXG5cdFs5LCAzOSwgMTMsIDE2LCA0MCwgMTRdLFxyXG5cclxuXHQvLyAyMFxyXG5cdFszLCAxMzUsIDEwNywgNSwgMTM2LCAxMDhdLFxyXG5cdFszLCA2NywgNDEsIDEzLCA2OCwgNDJdLFxyXG5cdFsxNSwgNTQsIDI0LCA1LCA1NSwgMjVdLFxyXG5cdFsxNSwgNDMsIDE1LCAxMCwgNDQsIDE2XSxcclxuXHJcblx0Ly8gMjFcclxuXHRbNCwgMTQ0LCAxMTYsIDQsIDE0NSwgMTE3XSxcclxuXHRbMTcsIDY4LCA0Ml0sXHJcblx0WzE3LCA1MCwgMjIsIDYsIDUxLCAyM10sXHJcblx0WzE5LCA0NiwgMTYsIDYsIDQ3LCAxN10sXHJcblxyXG5cdC8vIDIyXHJcblx0WzIsIDEzOSwgMTExLCA3LCAxNDAsIDExMl0sXHJcblx0WzE3LCA3NCwgNDZdLFxyXG5cdFs3LCA1NCwgMjQsIDE2LCA1NSwgMjVdLFxyXG5cdFszNCwgMzcsIDEzXSxcclxuXHJcblx0Ly8gMjNcclxuXHRbNCwgMTUxLCAxMjEsIDUsIDE1MiwgMTIyXSxcclxuXHRbNCwgNzUsIDQ3LCAxNCwgNzYsIDQ4XSxcclxuXHRbMTEsIDU0LCAyNCwgMTQsIDU1LCAyNV0sXHJcblx0WzE2LCA0NSwgMTUsIDE0LCA0NiwgMTZdLFxyXG5cclxuXHQvLyAyNFxyXG5cdFs2LCAxNDcsIDExNywgNCwgMTQ4LCAxMThdLFxyXG5cdFs2LCA3MywgNDUsIDE0LCA3NCwgNDZdLFxyXG5cdFsxMSwgNTQsIDI0LCAxNiwgNTUsIDI1XSxcclxuXHRbMzAsIDQ2LCAxNiwgMiwgNDcsIDE3XSxcclxuXHJcblx0Ly8gMjVcclxuXHRbOCwgMTMyLCAxMDYsIDQsIDEzMywgMTA3XSxcclxuXHRbOCwgNzUsIDQ3LCAxMywgNzYsIDQ4XSxcclxuXHRbNywgNTQsIDI0LCAyMiwgNTUsIDI1XSxcclxuXHRbMjIsIDQ1LCAxNSwgMTMsIDQ2LCAxNl0sXHJcblxyXG5cdC8vIDI2XHJcblx0WzEwLCAxNDIsIDExNCwgMiwgMTQzLCAxMTVdLFxyXG5cdFsxOSwgNzQsIDQ2LCA0LCA3NSwgNDddLFxyXG5cdFsyOCwgNTAsIDIyLCA2LCA1MSwgMjNdLFxyXG5cdFszMywgNDYsIDE2LCA0LCA0NywgMTddLFxyXG5cclxuXHQvLyAyN1xyXG5cdFs4LCAxNTIsIDEyMiwgNCwgMTUzLCAxMjNdLFxyXG5cdFsyMiwgNzMsIDQ1LCAzLCA3NCwgNDZdLFxyXG5cdFs4LCA1MywgMjMsIDI2LCA1NCwgMjRdLFxyXG5cdFsxMiwgNDUsIDE1LCAyOCwgNDYsIDE2XSxcclxuXHJcblx0Ly8gMjhcclxuXHRbMywgMTQ3LCAxMTcsIDEwLCAxNDgsIDExOF0sXHJcblx0WzMsIDczLCA0NSwgMjMsIDc0LCA0Nl0sXHJcblx0WzQsIDU0LCAyNCwgMzEsIDU1LCAyNV0sXHJcblx0WzExLCA0NSwgMTUsIDMxLCA0NiwgMTZdLFxyXG5cclxuXHQvLyAyOVxyXG5cdFs3LCAxNDYsIDExNiwgNywgMTQ3LCAxMTddLFxyXG5cdFsyMSwgNzMsIDQ1LCA3LCA3NCwgNDZdLFxyXG5cdFsxLCA1MywgMjMsIDM3LCA1NCwgMjRdLFxyXG5cdFsxOSwgNDUsIDE1LCAyNiwgNDYsIDE2XSxcclxuXHJcblx0Ly8gMzBcclxuXHRbNSwgMTQ1LCAxMTUsIDEwLCAxNDYsIDExNl0sXHJcblx0WzE5LCA3NSwgNDcsIDEwLCA3NiwgNDhdLFxyXG5cdFsxNSwgNTQsIDI0LCAyNSwgNTUsIDI1XSxcclxuXHRbMjMsIDQ1LCAxNSwgMjUsIDQ2LCAxNl0sXHJcblxyXG5cdC8vIDMxXHJcblx0WzEzLCAxNDUsIDExNSwgMywgMTQ2LCAxMTZdLFxyXG5cdFsyLCA3NCwgNDYsIDI5LCA3NSwgNDddLFxyXG5cdFs0MiwgNTQsIDI0LCAxLCA1NSwgMjVdLFxyXG5cdFsyMywgNDUsIDE1LCAyOCwgNDYsIDE2XSxcclxuXHJcblx0Ly8gMzJcclxuXHRbMTcsIDE0NSwgMTE1XSxcclxuXHRbMTAsIDc0LCA0NiwgMjMsIDc1LCA0N10sXHJcblx0WzEwLCA1NCwgMjQsIDM1LCA1NSwgMjVdLFxyXG5cdFsxOSwgNDUsIDE1LCAzNSwgNDYsIDE2XSxcclxuXHJcblx0Ly8gMzNcclxuXHRbMTcsIDE0NSwgMTE1LCAxLCAxNDYsIDExNl0sXHJcblx0WzE0LCA3NCwgNDYsIDIxLCA3NSwgNDddLFxyXG5cdFsyOSwgNTQsIDI0LCAxOSwgNTUsIDI1XSxcclxuXHRbMTEsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXHJcblxyXG5cdC8vIDM0XHJcblx0WzEzLCAxNDUsIDExNSwgNiwgMTQ2LCAxMTZdLFxyXG5cdFsxNCwgNzQsIDQ2LCAyMywgNzUsIDQ3XSxcclxuXHRbNDQsIDU0LCAyNCwgNywgNTUsIDI1XSxcclxuXHRbNTksIDQ2LCAxNiwgMSwgNDcsIDE3XSxcclxuXHJcblx0Ly8gMzVcclxuXHRbMTIsIDE1MSwgMTIxLCA3LCAxNTIsIDEyMl0sXHJcblx0WzEyLCA3NSwgNDcsIDI2LCA3NiwgNDhdLFxyXG5cdFszOSwgNTQsIDI0LCAxNCwgNTUsIDI1XSxcclxuXHRbMjIsIDQ1LCAxNSwgNDEsIDQ2LCAxNl0sXHJcblxyXG5cdC8vIDM2XHJcblx0WzYsIDE1MSwgMTIxLCAxNCwgMTUyLCAxMjJdLFxyXG5cdFs2LCA3NSwgNDcsIDM0LCA3NiwgNDhdLFxyXG5cdFs0NiwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcclxuXHRbMiwgNDUsIDE1LCA2NCwgNDYsIDE2XSxcclxuXHJcblx0Ly8gMzdcclxuXHRbMTcsIDE1MiwgMTIyLCA0LCAxNTMsIDEyM10sXHJcblx0WzI5LCA3NCwgNDYsIDE0LCA3NSwgNDddLFxyXG5cdFs0OSwgNTQsIDI0LCAxMCwgNTUsIDI1XSxcclxuXHRbMjQsIDQ1LCAxNSwgNDYsIDQ2LCAxNl0sXHJcblxyXG5cdC8vIDM4XHJcblx0WzQsIDE1MiwgMTIyLCAxOCwgMTUzLCAxMjNdLFxyXG5cdFsxMywgNzQsIDQ2LCAzMiwgNzUsIDQ3XSxcclxuXHRbNDgsIDU0LCAyNCwgMTQsIDU1LCAyNV0sXHJcblx0WzQyLCA0NSwgMTUsIDMyLCA0NiwgMTZdLFxyXG5cclxuXHQvLyAzOVxyXG5cdFsyMCwgMTQ3LCAxMTcsIDQsIDE0OCwgMTE4XSxcclxuXHRbNDAsIDc1LCA0NywgNywgNzYsIDQ4XSxcclxuXHRbNDMsIDU0LCAyNCwgMjIsIDU1LCAyNV0sXHJcblx0WzEwLCA0NSwgMTUsIDY3LCA0NiwgMTZdLFxyXG5cclxuXHQvLyA0MFxyXG5cdFsxOSwgMTQ4LCAxMTgsIDYsIDE0OSwgMTE5XSxcclxuXHRbMTgsIDc1LCA0NywgMzEsIDc2LCA0OF0sXHJcblx0WzM0LCA1NCwgMjQsIDM0LCA1NSwgMjVdLFxyXG5cdFsyMCwgNDUsIDE1LCA2MSwgNDYsIDE2XVxyXG5dO1xyXG5cclxuUVJSU0Jsb2NrLmdldFJTQmxvY2tzID0gZnVuY3Rpb24odHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuXHRcclxuXHR2YXIgcnNCbG9jayA9IFFSUlNCbG9jay5nZXRSc0Jsb2NrVGFibGUodHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpO1xyXG5cdFxyXG5cdGlmIChyc0Jsb2NrID09IHVuZGVmaW5lZCkge1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiYmFkIHJzIGJsb2NrIEAgdHlwZU51bWJlcjpcIiArIHR5cGVOdW1iZXIgKyBcIi9lcnJvckNvcnJlY3RMZXZlbDpcIiArIGVycm9yQ29ycmVjdExldmVsKTtcclxuXHR9XHJcblxyXG5cdHZhciBsZW5ndGggPSByc0Jsb2NrLmxlbmd0aCAvIDM7XHJcblx0XHJcblx0dmFyIGxpc3QgPSBuZXcgQXJyYXkoKTtcclxuXHRcclxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcblxyXG5cdFx0dmFyIGNvdW50ID0gcnNCbG9ja1tpICogMyArIDBdO1xyXG5cdFx0dmFyIHRvdGFsQ291bnQgPSByc0Jsb2NrW2kgKiAzICsgMV07XHJcblx0XHR2YXIgZGF0YUNvdW50ICA9IHJzQmxvY2tbaSAqIDMgKyAyXTtcclxuXHJcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNvdW50OyBqKyspIHtcclxuXHRcdFx0bGlzdC5wdXNoKG5ldyBRUlJTQmxvY2sodG90YWxDb3VudCwgZGF0YUNvdW50KSApO1x0XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiBsaXN0O1xyXG59XHJcblxyXG5RUlJTQmxvY2suZ2V0UnNCbG9ja1RhYmxlID0gZnVuY3Rpb24odHlwZU51bWJlciwgZXJyb3JDb3JyZWN0TGV2ZWwpIHtcclxuXHJcblx0c3dpdGNoKGVycm9yQ29ycmVjdExldmVsKSB7XHJcblx0Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLkwgOlxyXG5cdFx0cmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDBdO1xyXG5cdGNhc2UgUVJFcnJvckNvcnJlY3RMZXZlbC5NIDpcclxuXHRcdHJldHVybiBRUlJTQmxvY2suUlNfQkxPQ0tfVEFCTEVbKHR5cGVOdW1iZXIgLSAxKSAqIDQgKyAxXTtcclxuXHRjYXNlIFFSRXJyb3JDb3JyZWN0TGV2ZWwuUSA6XHJcblx0XHRyZXR1cm4gUVJSU0Jsb2NrLlJTX0JMT0NLX1RBQkxFWyh0eXBlTnVtYmVyIC0gMSkgKiA0ICsgMl07XHJcblx0Y2FzZSBRUkVycm9yQ29ycmVjdExldmVsLkggOlxyXG5cdFx0cmV0dXJuIFFSUlNCbG9jay5SU19CTE9DS19UQUJMRVsodHlwZU51bWJlciAtIDEpICogNCArIDNdO1xyXG5cdGRlZmF1bHQgOlxyXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHR9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFFSQml0QnVmZmVyXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBRUkJpdEJ1ZmZlcigpIHtcclxuXHR0aGlzLmJ1ZmZlciA9IG5ldyBBcnJheSgpO1xyXG5cdHRoaXMubGVuZ3RoID0gMDtcclxufVxyXG5cclxuUVJCaXRCdWZmZXIucHJvdG90eXBlID0ge1xyXG5cclxuXHRnZXQgOiBmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0dmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcihpbmRleCAvIDgpO1xyXG5cdFx0cmV0dXJuICggKHRoaXMuYnVmZmVyW2J1ZkluZGV4XSA+Pj4gKDcgLSBpbmRleCAlIDgpICkgJiAxKSA9PSAxO1xyXG5cdH0sXHJcblx0XHJcblx0cHV0IDogZnVuY3Rpb24obnVtLCBsZW5ndGgpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dGhpcy5wdXRCaXQoICggKG51bSA+Pj4gKGxlbmd0aCAtIGkgLSAxKSApICYgMSkgPT0gMSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRnZXRMZW5ndGhJbkJpdHMgOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmxlbmd0aDtcclxuXHR9LFxyXG5cdFxyXG5cdHB1dEJpdCA6IGZ1bmN0aW9uKGJpdCkge1xyXG5cdFxyXG5cdFx0dmFyIGJ1ZkluZGV4ID0gTWF0aC5mbG9vcih0aGlzLmxlbmd0aCAvIDgpO1xyXG5cdFx0aWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA8PSBidWZJbmRleCkge1xyXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKDApO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0aWYgKGJpdCkge1xyXG5cdFx0XHR0aGlzLmJ1ZmZlcltidWZJbmRleF0gfD0gKDB4ODAgPj4+ICh0aGlzLmxlbmd0aCAlIDgpICk7XHJcblx0XHR9XHJcblx0XHJcblx0XHR0aGlzLmxlbmd0aCsrO1xyXG5cdH1cclxufTtcclxuIl19