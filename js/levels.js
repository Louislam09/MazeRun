let level_1, level_2, level_3, level_4, level_5, level_6, level_7, level_8, level_9, level_10, last_message;

level_1 = [
	'XEXXXXXXXXXXXXXXXXXXXXXXX',
	'XP.XXXXXXX..........XXXXX',
	'X..XXXXXXX..XXXXXX..XXXXX',
	'X.......XX..XXXXXX..XXXXX',
	'X.......XX..XXX........XX',
	'XXXXXX..XX..XXX........XX',
	'XXXXXX..XX..XXXXXX..XXXXX',
	'XXXXXX..XX....XXXX..XXXXX',
	'X..XXX........XXXX..XXXXX',
	'X..XXX..XXXXXXXXXXXXXXXXX',
	'X.........XXXXXXXXXXXXXXX',
	'X................XXXXXXXX',
	'XXXXXXXXXXXX.....XXXXX..X',
	'XXXXXXXXXXXXXXX..XXXXX..X',
	'XXX..XXXXXXXXXX.........X',
	'XXX.....................X',
	'XXX..........XXXXXXXXXXXX',
	'XXXXXXXXXXX..XXXXXXXXXXXX',
	'XXXXXXXXXXX.............X',
	'XXD..XXXXXXXX...........X',
	'XX...XXXXXXXXXXXXX..XXXXX',
	'XX.....XXXXXXXXXXX..XXXXX',
	'XX..........XXXX........X',
	'XXXX....................X',
	'XXXXXXXXXXXXXXXXXXXXXXXXX'
];
level_2 = [
	'XEXXXXX.XXXXXXXXXXXXXXXXX',
	'XP.....X.........XXXXXXXX',
	'X.XXXX.XX.XXXXXXX.X.....X',
	'X......XX.......X.X..XX.X',
	'X.XXXXXXXXXXXXX.X.XX.XX.X',
	'X.XXXXXX....XXX.X....XX.X',
	'X......XXXXXXXX.XX.XXXX.X',
	'XX.XXX.XX.XXX...XX.XXXX.X',
	'XXXXXX.XX.X.X.XX.X.XXXX.X',
	'XX.XXX.XX.XXX.XXXX.XXX..X',
	'XX...............XXXXX.XX',
	'XX.XXXXXXXXX.XXXXXXX....X',
	'.X.XXXXXXXXX.XXXXX...XX.X',
	'XX.X............XX.XXXX.X',
	'XX.X.XXXXXXX.XXXXX.X....X',
	'XX.X.XX......XXXXX.X.XX.X',
	'XX.X.XX.XXXX...XXX.X.XX.X',
	'XX.X.XX.XXXX.X...X...XX.X',
	'X.XX.XX.....XXXX.XXXXXX.X',
	'XX...XXXXXX.XXXX.X.XXXX.X',
	'XX.X......X.XX...X....X.X',
	'XX.XX.XXX.X.XX.XXX.XX.X.X',
	'XX.XXXXXXXXXXX......X.X.X',
	'XX............XXXXXXX...X',
	'XXXXXXXXXXXXXDX.X.XX.XXXX'
];
level_3 = [
	'XXXXXXXEXXXXXXXXXXXXXXXXX',
	'X......P.........XXXXXXXX',
	'X.XXXX.XX.XXXXXXX.X.....X',
	'X......XX.......X.X..X..X',
	'X.XXXXXXXXXXXXX.X.XX.X..X',
	'X.XXXXXX....XXX.X....X..X',
	'X......XXXXXXXX.XX.XXXX.X',
	'XX.XXX.XX.XXX...XX.X..X.X',
	'XXXXXX.XX.X.X.XX.X.X.XX.X',
	'XX.XXX.XX.XXX.XXXX.X.X..X',
	'XX...............X.X.X.XX',
	'XX.XXXXXXXXX.XXXXX.X....X',
	'.X.XXXXXXXXX.XXXXX...XX.X',
	'XX.X............XX.XXXX.X',
	'XX.X.XXXXXXXXXXXXX.X..X.X',
	'XX.X.XX......XXXXX.X.XX.X',
	'XX.X.XX.XXXX...XXX.X.XX.X',
	'XX.X.XX.XXXX.X...X...XX.X',
	'X.XX.XX.....XXXX.X.XXXX.X',
	'XX...XXXXXX.XXXX.X.XXXX.X',
	'XX.X......X.XX...X....X.X',
	'XX.XX.XXX.X.XX.XXX.XX.X.X',
	'XX.XXXXXX.X.XX......X.X.X',
	'XX............XXXXXX....X',
	'XXXXXXXXXXXXXXX.X.XXDXXXX'
];
level_4 = [
	'XXXXXXXXXXXXXXXXXXXXXXXXX',
	'X......X.......X........X',
	'X.XXX.XX.XXXXX.X.XXX.XX.X',
	'X.X....X...X...X...X..X.X',
	'E.XXXXXX.X.X.XXXXX.XX.X.X',
	'P.......X..X.......XX.X.X',
	'XXX.XXX....X.XXXXX.X..X.X',
	'X.X.X...X.XX...X...X.XX.X',
	'X...X.XXX.X..X.X.XX.....X',
	'X.XXX.......XX.X..X.XXX.X',
	'X.X...XXXXX....XX.X.X.X.X',
	'XXX.X........XXX..X...X.X',
	'X...XX.XXX.X....X.XXXXX.X',
	'X.X.X..X....XXX.X..X..X.X',
	'X.X......XX.X...XX..X...X',
	'X.X.X.XX..X.X.XX.XX.X.X.X',
	'XXX.X...X.X.X.....X.XXX.X',
	'X.X..X.X....XXXXX.X...XXX',
	'X...XX...XX.....X.X.X...X',
	'X.X....X...XXXXXX.X...X.X',
	'X.XXXX.XXX.X......X.X.X.X',
	'X.X..X.....X.X.XX...X..XX',
	'X.XX.XXXXX.X..X...X.XX..D',
	'X........X.......X....X.X',
	'XXXXXXXXXXXXXXXXXXXXXXXXX'
];
level_5 = [
	'XXXXXXXXXXXXXXXXXXXXXXXXX',
	'XX.....X...X...X........X',
	'X..XX.XX..XXXX.X.XXX.XX.X',
	'X.Xt...XX..X...X...X@.X.X',
	'X..XXXX..X.X.XXXXX.XX.X.X',
	'XX......X..X.......XX.X.X',
	'X.X.XXX....X.XXXXX.X..X.X',
	'X.X.X...X.XX...X...X.XX.X',
	'X...X.XXX.XX.X.X.XX.....X',
	'X..XX......XXX.X..X.XXX.X',
	'X.X...XXXXXX...XX.X.X.X.X',
	'XXX.X......X.XXX..X...X.X',
	'X.....X.XX.X....X.XXXXX.X',
	'X.X.X..X...XX.X.X..X..X.X',
	'X.X.....X.XX.X..XX..X...X',
	'EPX.X.XX...X..XX.XX.X.X.X',
	'XXX.X...X.XX......X.X.X.X',
	'XTX..X.X...X.XXXX.X.X.X.X',
	'X.X.X.X..X.X...DX.X.X...X',
	'X.X..X.X...XXXXXX.X.X.X.X',
	'X.XXX..XXX.X......X.X.X.X',
	'X.X........X.X.XX...X..XX',
	'X.XX.XXXXX.X..X...X.XX..X',
	'X........X.X.....X....X.X',
	'XXXXXXXXXXXXXXXXXXXXXXXXX'
];
level_6 = [
	'XEXXXXX.XXXXXXXXXXXXXXXXX',
	'P................XXXXXXXX',
	'X.XXXX.XX.XXXXXX..X.....X',
	'X......XX.......X.X..XX.X',
	'X.XXXXXXXXXXXXX.X.XX.XX.X',
	'X.XXXXXX....XXX.X....XX.X',
	'X......XXXXXXXX.XX.XXXX.X',
	'XX.XXX.XX.XXX....X.XXXX.X',
	'XXXXXX.XX.X.X.XX.X.XXXX.X',
	'XX.XXX.XX.XXX.XX.X.XXX..X',
	'XX...............XXXXX.XX',
	'XX.XXXXXXXXX.XXXXXXX....X',
	'.X.XXXXXXXXX.XXXXX...XX.X',
	'XX.X............XX.XXXX.X',
	'XX.X.XXXXXXX.XXXXX.X....X',
	'XX.X.XX......XXXXX.X.XX.X',
	'XX.X.XX.XXXX...XXX.X.XX.X',
	'XX.X.XX.XXXX.X...X...XX.X',
	'X.XX.XX.....XXXX.XXXXXX.X',
	'XX...XXXXXX.XXXX.X.XXXX.X',
	'XX.X......X.XX...X....X.X',
	'XX.XX.XXX.X.XX.XXX.XX.X.X',
	'XX.XXXXXXXX.XX......X.X.X',
	'XX............XXXXXXX...X',
	'XXXXXXXXXXXXXDX.X.XX.XXXX'
];
level_7 = [
	'XXXXXXXEXXXXXXXXXXXXXXXXX',
	'X......P..........XXXXXXX',
	'X.XXXX.XX.XXXXXXX.X...X.X',
	'X......XX.......X.X..X..X',
	'X.XXXXXXXXXXXXX.X.XX.X..X',
	'X.XXXXXX....XXX.X....X..X',
	'X......XXXXXXXX.XX.XXXX.X',
	'XX.XXX.XX.XXX...XX.X..X.X',
	'XXXXXX.XX.X.X.XX.X.X.XX.X',
	'XX.XXX.XX.XXX.XXXX.X.X..X',
	'XX...............X.X.X.XX',
	'XX.XXXXXXXXX.XXXXX.X....X',
	'.X.XXXXXXXXX.XXXXX...XX.X',
	'XX.X............XX.XXXX.X',
	'XX.X.XXXXXXXXXX.XX.X..X.X',
	'XX.X.XX......XX....X.XX.X',
	'XX.X.XX.XXXX...XXX.X.XX.X',
	'XX.X.XX.XXXX.X...X...XX.X',
	'X.XX.XX.....XXXX.XXXXXX.X',
	'XX...XXXXXX.XXXX.X.XXXX.X',
	'XX.X......X.XX...X....X.X',
	'XX.XX.XXX.X.XX.XXX.XX.XXX',
	'XX.XXXXXX.X.XX......X.X.X',
	'XX............XXXXXX....X',
	'XXXXXXXXXXXXXXX.X.XXDXXXX'
];
level_8 = [
	'XXXXXXXXXXXXXXXXXXXXXXXXX',
	'X......X.......X........X',
	'X.XXX.XX.XXXXX.X.XXX.XX.X',
	'X.XEP..X...X...X...X..X.X',
	'X.XXXXXX.X.X.XXXXX.XX.X.X',
	'X.......X..X.......XX.X.X',
	'XXX.XXX....X.XXXXX.X..X.X',
	'X.X.X...X.XX...X...X.XX.X',
	'X...X.XXX.X..X.X.XX.....X',
	'X.XXX.......XX.X..X.XXX.X',
	'X.X...XXXXX....XX.X.X.X.X',
	'XXX.X........XXX..X...X.X',
	'X...XX.XXX.X....X.XXXXX.X',
	'X.X.X..X....XXX.X..X..X.X',
	'X.X......XX.X...XX..X...X',
	'X.X.X.XX..X.X.XX.XX.X.X.X',
	'XXX.X...X.X.X.....X.XXX.X',
	'X.X..X.X....XXXXX.X...XXX',
	'X...XX...XX.....X.X.X...X',
	'X.X....X...XXXXXX.X...X.X',
	'X.XXXX.XXX.X......X.X.X.X',
	'X.X..X.....X.X.XX...X..XX',
	'X.XX.XXXXX.X..X...X.XX..D',
	'X........X.......X....X.X',
	'XXXXXXXXXXXXXXXXXXXXXXXXX'
];
level_9 = [
	'XXXXXXXXXXXXXXXXXXXXXXXXX',
	'XX.....X...X...X........X',
	'X..XX.XX..XXXX.X.XXX.XX.X',
	'X.Xt...XX..X...X...X@.X.X',
	'X..XXXX..X.X.XXXXX.XX.X.X',
	'XX......X..X.......XX.X.X',
	'X.X.XXX....X.XXXXX.X..X.X',
	'X.X.X...X.XX...X...X.XX.X',
	'X...X.XXX.XX.X.X.XX.....X',
	'X..XX......XXX.X..X.XXX.X',
	'X.X...XXXXXX...XX.X.X.X.X',
	'XXX.X......X.XXX..X...X.X',
	'X.....X.XX.X....X.XXXXX.X',
	'X.X.X..X...XX.X.X..X..X.X',
	'X.X.....X.XX.X..XX..X...X',
	'EPX.X.XX...X..XX.XX.X.X.X',
	'XXX.X...X.XX......X.X.X.X',
	'XTX..X.X...X.XXXX.X.X.X.X',
	'X.X.X.X..X.X...DX.X.X...X',
	'X.X..X.X...XXXXXX.X.X.X.X',
	'X.XXX..XXX.X......X.X.X.X',
	'X.X........X.X.XX...X..XX',
	'X.XX.XXXXX.X..X...X.XX..X',
	'X........X.X.....X....X.X',
	'XXXXXXXXXXXXXXXXXXXXXXXXX'
];
last_message = [
	'XXXXXXXXXXXXXXXXXXXXXXXXX',
	'XXX.XXX.XX....X.XXXX.XXXX',
	'XXX.XXX.XX.XXXX.XXXX.XXXX',
	'XXX.X.X.XX....X.XXXX.XXXX',
	'XXX.X.X.XX.XXXX.XXXX.XXXX',
	'XXX.X.X.XX.XXXX.XXXX.XXXX',
	'XXX.....XX....X...XX...XX',
	'XXXXXXXXXXXXXXXXXXXXXXXXX',
	'XXX...XXX.XXX....XX.X.XXX',
	'XXX.X.XXX.XXX.XX.XX.X.XXX',
	'XXX...XXX.XXX.XX.XXX.XXXX',
	'XXX.XXXXX.XXX....XXX.XXXX',
	'XXX.XXXXX.XXX.XX.XXX.XXXX',
	'XXX.XXXXX...X.XX.XXX.XXXX',
	'XXXXXXXXXXXXXXXXXXXXXXXXX',
	'XXXXXXXXXXXXXXXXXXXXXXXXX'
];
