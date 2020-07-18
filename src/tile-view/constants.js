export const TILE_SIZE = 32;

export const MAP_DIMENSIONS = {
    COLS: 12,
    ROWS: 12,
    TILE_SIZE,
};

export const MAP_TILE_IMAGES = {
    1: 'assets/map/floor_sand_stone_1.png',
    2: 'assets/map/floor_sand_rock_1.png',
    3: 'assets/map/floor_sand_stone_5.png',
    4: 'assets/map/tree_1_yellow.png',
    5: 'assets/map/stone_2_brown1.png',
};

export const HEROES_SPRITE  = 'assets/heroes/heroes.png';

export const HERO_IMAGE_SIZE = 32;

export const HERO_CLASSES_MAP = {
    // TBD
    FLAME_SWORDSMAN: {sx: 0, sy: 0},
};

export const LAYERS = [
    [
        [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,],
        [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 3,],
        [3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,],
        [3, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 3,],
        [3, 3, 3, 1, 1, 2, 3, 3, 3, 3, 3, 3,],
    ],
    [
        [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,],
        [4, 4, 4, 0, 5, 4, 4, 4, 4, 4, 4, 4,],
        [4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 4, 4,],
    ],
];

export const MOVE_DIRECTIONS = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
};

export const SOLID_TILES = [4, 5];
