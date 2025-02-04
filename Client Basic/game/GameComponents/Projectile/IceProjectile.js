/* 
 * Copyright (C) 2021, Alex. <xander.scorpio@gmail.com>
 * This file is part of SocialBound.
 * SocialBound is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, either version 3 of the License, or(at your option) any later version.
 * 
 * SocialBound is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.See the GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License along with SocialBound. If not, see http://www.gnu.org/licenses/.
 */

const helper = require("../../Utilities/Helper");
const Types = require("../../gametypes");
const { BULLETS, EXPLODE } = Types;

class IceProjectile {
  getS1(stime = 0) {
    return [{
      data: {
        img: BULLETS.ICE1,
        exp: EXPLODE.ICE1,
        stime: stime,
        hole: helper.Pivot(30, 40)
      },
      type: {
        isEndColliding: true,
        isExplode: true,
        isDamage: true
      },
      subBullet: [],
      currentData: {}
    }];
  }
  getS2(stime = 0) {
    return [{
      data: {
        img: BULLETS.ICE2,
        exp: EXPLODE.ICE2,
        stime: stime,
        hole: helper.Pivot(30, 40)
      },
      type: {
        isEndColliding: true,
        isExplode: true,
        isDamage: true
      },
      subBullet: [],
      currentData: {}
    }];
  }
  getSS(stime = 0) {
    return [{
      data: {
        img: BULLETS.ICESS,
        exp: EXPLODE.ICESS,
        stime: stime,
        hole: helper.Pivot(30, 40)
      },
      type: {
        isEndColliding: true,
        isExplode: true,
        isDamage: true
      },
      subBullet: [],
      currentData: {}
    }]
  }
}

const iceProjectile = new IceProjectile();
module.exports = iceProjectile;