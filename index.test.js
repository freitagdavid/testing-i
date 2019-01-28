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
        durability: 37,
        enhancement: 12,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 79,
        enhancement: 9,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 44,
        enhancement: 8,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 4,
        enhancement: 12,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 41,
        enhancement: 11,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 52,
        enhancement: 1,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 7,
        enhancement: 11,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 21,
        enhancement: 13,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 3,
        enhancement: 4,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 23,
        enhancement: 16,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 89,
        enhancement: 14,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 17,
        enhancement: 4,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 51,
        enhancement: 12,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 48,
        enhancement: 16,
    },
    {
        name: 'Bag of holding',
        type: 'Armor',
        durability: 47,
        enhancement: 12,
    },
];

describe('Upgrade library', () => {
    describe('success()', () => {
        test('modified name and increments enhancement level', () => {
            expect(enhance.success(ITEM_LIST[0])).toEqual({
                name: '[+3] Bag of holding',
                type: 'Armor',
                durability: 96,
                enhancement: 3,
            });
            expect(enhance.success(ITEM_LIST[4])).toEqual({
                name: '[DUO] Bag of holding',
                type: 'Armor',
                durability: 47,
                enhancement: 17,
            });
        });
    });
    describe('fail()', () => {});
    describe('repair()', () => {});
});
