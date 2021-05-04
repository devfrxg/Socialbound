const Helper = require("../Utilities/Helper");

class MapData {
    constructor(ID, Name, SpawnPoints, w, h, ground_size, offset_x, offset_y) {
        this.ID = ID;
        this.Name = Name;
        this.SpawnPoints = SpawnPoints;
        this.w = w;
        this.h = h;
        this.ground_size = ground_size;
        this.offset_x = offset_x;
        this.offset_y = offset_y;
        this.pivot = {
            x: {
                normal: [
                    -offset_x,
                    w + offset_x
                ],
                margin: [
                    -offset_x - 200,
                    w + offset_x + 200
                ]
            },
            y: {
                normal: [
                    -offset_y - 2500,
                    ground_size - offset_y + (2 * w)
                ],
                margin: [
                    -offset_y - 2500,
                    ground_size - offset_y + (2 * w) + 200
                ]
            }
        }
    }
};

class Map {
    constructor() {
        this.type = {
            CUSTOM: -2,
            RANDOM: -1,
            MIRAMO: 0,
            NIRVANA: 1,
            METRO: 2,
            SEA: 3,
            ADIUM: 4,
            DRAGON: 5,
            COZY: 6,
            DUMMY: 7,
            STAR: 8,
            METAMINE: 9,
            CAVE: 10,
            SECRET: 11,
            ICECAVE: 12,
            TREEOFLIFE: 13,
            ICEFISH: 14,
            SOCCER: 15,
            CANDY: 16,
            MONSTER: 17,
            MIRAMO2: 18,
            NIRVANA2: 19,
            METRO2: 20,
            SEA2: 21,
            AUDIM2: 22,
            DRAGON2: 23,
            COZY2: 24,
            DUMMY2: 25,
            STAR2: 26,
            METAMINE2: 27,
            LOVEYOU: 28,
            LOVEYOU2: 29,
            LOND: 30,
            LOND2: 31,
            DESERT: 32,
            DESERT2: 33,
            GRAY: 34,
            GRAY2: 35,
            JUNGLE: 36,
            JUNGLE2: 37,
            MYROOM: 38,
            MYROOM2: 39,
            DUMMY3: 40,
            ADIUM3: 41,
            MEGAMINE: 42,
            MINIMINE: 43,
            NUMBER_OF_MAPS: 44
        };
    }
    MapList() {
        return [
            new MapData(0, 'Dragon Lava', [[100, 22]], 1766, 456, 1800, 17, 1344),
            new MapData(1, 'Space', [[100, 13], [300, 99], [500, 148], [700, 124], [900, 190], [1100, 33]], 1600, 310, 1600, 0, 1067),
            new MapData(2, 'Metropolis', [[100, 64], [300, 61], [500, 29], [700, 4], [900, 23], [1100, 19]], 1800, 715, 1800, 0, 1085),
            new MapData(3, 'Sea Of Hero', [[100, 3], [300, 143], [500, 186], [700, 61], [900, 144]], 1600, 629, 1600, 0, 688),
            new MapData(4, 'Lion Jungle', [[100, 67], [300, 105], [500, 57], [700, 48], [900, 56], [1100, 101], [1300, 11]], 1800, 372, 1800, 0, 788),
            new MapData(5, 'Dragon', [[100, 129], [300, 54], [500, 4], [700, 101], [900, 72], [1100, 2], [1300, 96]], 2000, 461, 2000, 0, 1539),
            new MapData(6, 'Bridge', [[100, 62], [300, 93], [500, 103], [700, 151], [900, 95], [1200, 93]], 1649, 396, 1800, 80, 1384),
            new MapData(7, 'Dummy Slope', [[100, 164], [300, 59], [500, 18], [700, 5], [900, 22], [1100, 81]], 1429, 391, 1600, 76, 1037),
            new MapData(8, 'Thousand Sunny', [[100, 26], [400, 70], [600, 119], [800, 101], [1000, 113], [1200, 71], [1400, -1]], 1345, 425, 1800, 231, 922),
            new MapData(9, 'Mayan', [[100, 113], [300, 1], [500, 104], [700, 36], [900, 94]], 1409, 760, 1800, 196, 1020),
            new MapData(10, 'Cave', [[100, 77], [300, 154], [500, 165], [700, 212], [900, 176], [1100, 208], [1300, 164], [1500, 142]], 1545, 697, 1800, 133, 1103),
            new MapData(11, 'Secret', [[100, 62], [300, 89], [500, 68], [700, 53], [900, 31], [1100, 65], [1300, 62]], 1800, 886, 1800, 0, 914),
            new MapData(12, 'Ice Cave', [[584, 891], [534, 903], [484, 950], [433, 1086], [400, 1108], [364, 1117], [314, 1108], [263, 1066], [238, 1004], [252, 1048], [293, 1095], [304, 1103], [311, 1106], [323, 1111], [326, 1112], [329, 1113], [335, 1115], [351, 1117], [369, 1116], [391, 1112], [408, 1104], [424, 1094], [431, 1088], [438, 1080], [453, 1058], [469, 981], [480, 957], [483, 951], [486, 946], [491, 935], [499, 923], [505, 918], [518, 907], [527, 904], [537, 903], [546, 901], [554, 899], [572, 895], [575, 894], [579, 893], [591, 888], [599, 885], [627, 883], [645, 882], [657, 880], [670, 876], [693, 864], [713, 849], [735, 837], [753, 828], [763, 824], [783, 820], [804, 817], [833, 811], [850, 810], [866, 808], [882, 806], [904, 799], [923, 794], [941, 788], [980, 782], [1001, 788], [1022, 793], [1047, 798], [1071, 801], [1093, 802], [1116, 801], [1131, 798], [1145, 794], [1156, 788], [1162, 785], [1181, 779], [1203, 778], [1216, 778], [1224, 778], [1230, 778], [1233, 778], [1236, 778], [1239, 778], [1247, 777], [1263, 773], [1282, 775], [1307, 775], [1321, 774], [1349, 769], [1362, 766], [1382, 759], [1400, 755], [1418, 752], [1437, 761], [1466, 767], [1490, 767], [1520, 756], [1539, 740], [1559, 725], [1588, 715], [1611, 703], [1612, 702], [1619, 676], [1620, 671]], 2000, 1334, 2000, 0, 0),
            new MapData(13, 'Tree of Life', [[100, 185], [300, 32], [500, 18], [700, 181], [900, 175], [1100, 18], [1300, 31]], 1598, 630, 1800, 101, 700),
            new MapData(14, 'Ice Fish', [[100, 90], [300, 70], [500, 70], [700, 4], [900, 45], [1100, 54], [1300, 48], [1500, 52]], 1534, 453, 1800, 133, 673),
            new MapData(15, 'Mundial', [[100, 189], [300, 205], [500, 24], [700, 287], [900, 76], [1100, 273], [1300, 6], [1500, 205]], 1453, 814, 1800, 173, 493),
            new MapData(16, 'Candy', [[100, 32], [300, 73], [500, 172], [700, 136], [900, 172], [1100, 63], [1300, 110]], 1545, 804, 1800, 127, 996),
            new MapData(17, 'Monster', [[100, 100], [300, 16], [500, 368], [700, 59], [900, 259]], 1449, 876, 1449, 0, 286),
            new MapData(18, 'Miramo Town B', [[100, 18], [300, 18], [500, 5], [700, 5], [900, 19]], 1376, 328, 1800, 222, 1472),
            new MapData(19, 'Nirvana B', [[100, 20], [300, 48], [500, 134], [700, 163], [900, 263], [1100, 262], [1300, 141], [1500, 146], [1700, 43]], 814, 836, 1600, 435, 741),
            new MapData(20, 'Metropolis B', [[100, 59], [300, 20], [500, 55], [700, 94], [900, 58], [1100, 16], [1300, 49], [1500, 47]], 1298, 499, 1800, 232, 1040),
            new MapData(21, 'Sea of Hero B', [[100, 122], [300, 117], [500, 279], [700, 254], [900, 241], [1100, 275], [1300, 111]], 1518, 329, 1600, 36, 955),
            new MapData(22, 'Adium Root B', [[100, 14], [300, 63], [500, 1], [700, 63], [900, 61], [1100, 3], [1300, 57]], 1599, 425, 1800, 101, 1289),
            new MapData(23, 'Dragon B', [[100, 284], [300, 30], [500, 397], [700, 394], [900, 29]], 1800, 721, 1800, 0, 590),
            new MapData(24, 'Cozy Tower B', [[100, -1], [300, 30], [500, 13], [700, 30], [900, 14], [1100, 32]], 1558, 567, 1800, 121, 1233),
            new MapData(25, 'Dummy Slope B', [[100, 48], [300, 49], [500, 127], [700, 140], [900, 120], [1100, 142], [1300, 41]], 1275, 364, 1800, 278, 1126),
            new MapData(26, 'Start Dust B', [[100, 28], [300, 134], [500, 117], [700, 80], [900, 10], [1100, 75], [1300, 113], [1500, 148]], 1707, 468, 1800, 40, 1332),
            new MapData(27, 'Meta Mine B', [[100, 5], [300, 348], [500, 257], [700, 227], [900, 262], [1100, 333]], 1800, 904, 1800, 0, 753),
            new MapData(28, 'Love You', [[100, 227], [300, 182], [500, 71], [700, 8], [1000, 43], [1200, 29], [1400, 172]], 1298, 1043, 1800, 251, 757),
            new MapData(29, 'Love You B', [[100, 502], [300, 159], [500, 142], [700, 10], [900, 48], [1100, 208], [1300, 393]], 1226, 836, 1800, 284, 964),
            new MapData(30, 'Lond', [[100, 274], [300, 28], [500, 55], [800, 183], [1000, 28], [1200, 39]], 1280, 708, 1800, 260, 856),
            new MapData(31, 'Lond B', [[100, 22], [300, 100], [500, 181], [700, 378], [900, 303], [1100, 378], [1300, 181], [1500, 100]], 1374, 1000, 1800, 202, 883),
            new MapData(32, 'Desert', [[100, 409], [300, 241], [500, 91], [700, 0], [900, 464], [1100, 11], [1300, 92], [1500, 388]], 1800, 550, 1800, 0, 1250),
            new MapData(33, 'Desert B', [[100, 119], [300, 25], [500, 784], [700, 686], [900, 606]], 1759, 1394, 1800, 23, 406),
            new MapData(34, 'Gray City', [[100, 284], [400, 48], [600, 16], [800, 19], [1000, 48]], 1755, 680, 1800, 22, 1120),
            new MapData(35, 'Gray City B', [[100, 74], [300, 34], [500, 21], [700, 129], [900, 294], [1100, 299], [1300, 28]], 1800, 1051, 1800, 0, 749),
            new MapData(36, 'Jungle', [[100, 67], [300, 102], [500, 41], [700, 58], [900, -1], [1100, 59], [1300, 41], [1500, 100]], 1800, 621, 1800, 0, 1179),
            new MapData(37, 'Jungle B', [[100, 18], [300, 128], [500, 352], [700, 383], [900, 289], [1100, 383], [1300, 352], [1500, 128]], 1768, 925, 1800, 10, 852),
            new MapData(38, 'My Room', [[100, 34], [300, 155], [500, 147], [700, 109], [900, 157], [1100, 105], [1300, 148], [1500, 155]], 1725, 1100, 1800, 38, 604),
            new MapData(39, 'My Room B', [[100, 3], [300, 91], [500, 61], [700, 29], [900, 61], [1100, 56], [1300, 73], [1500, 75]], 1598, 878, 1800, 105, 922),
            new MapData(40, 'Dummy Slope C', [[100, 200], [300, 150], [500, -1], [700, 61], [900, 422], [1100, 61], [1300, -1], [1500, 150]], 1303, 317, 1600, 144, 948),
            new MapData(41, 'Audim Root C', [[100, 210], [300, 431], [500, 148], [700, 88], [900, 55], [1100, 180], [1300, 845], [1500, 352]], 339, 1054, 1800, 751, 746),
            new MapData(42, 'MegaMine', [[100, 37], [300, 236], [500, 482], [700, 809], [900, 1191], [1100, 604], [1300, 347], [1500, 115]], 1798, 818, 2000, 202, 1100),
            new MapData(43, 'MiniMine', [[100, -1], [300, -1], [500, -1], [700, -1], [900, -1], [1100, -1], [1300, -1], [1500, -1], [1700, -1]], 1127, 810, 1250, 110, 400),
        ];
    }
    GetMap(mapID) {
        return this.MapList().filter(map => map.ID === mapID);
    }
    GetRandomMap() {
        let max = this.MapList().length - 1;
        return this.MapList()[Helper.random(0, max)];
    }
};

const map = new Map();
module.exports = map;