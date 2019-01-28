const enhance = require('./index.js');

const ITEM_LIST = [
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 96,
        enhancement: 2,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 94,
        enhancement: 4,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 80,
        enhancement: 9,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 81,
        enhancement: 3,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 47,
        enhancement: 16,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 34,
        enhancement: 14,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 64,
        enhancement: 1,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 92,
        enhancement: 11,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 9,
        enhancement: 14,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 61,
        enhancement: 3,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 74,
        enhancement: 19,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 6,
        enhancement: 13,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 82,
        enhancement: 4,
    },
];

describe('Upgrade library', () => {
    describe('success()', () => {
        test('modified name and increments enhancement level', () => {
            expect(enhance.success(ITEM_LIST[0])).toEqual({
                name: '[+3] Bag of holding',
                type: 'Armor',
                enhancement: 3,
                durability: 96,
            });
            expect(enhance.success(ITEM_LIST[4])).toEqual({
                name: '[DUO] Bag of holding',
                type: 'Armor',
                durability: 47,
                enhancement: 17,
            });
        });
    });
    describe('fail()', () => {
        test('Modifies durability, and name as well as enhancement level depending on starting level', () => {
            expect(enhance.fail(ITEM_LIST[0])).toEqual({
                name: 'Bag of holding',
                type: 'Armor',
                durability: 91,
                enhancement: 2,
            });
            expect(enhance.fail(ITEM_LIST[10])).toEqual({
                name: '[TRI] Bag of holding',
                type: 'Armor',
                durability: 64,
                enhancement: 18,
            });
        });
    });
    describe('repair()', () => {
        test('Restores durability', () => {
            expect(enhance.repair(ITEM_LIST[0].durability)).toEqual({
                durability: 100,
            });
        });
    });
});
