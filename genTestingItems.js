const ITEM_LIST = [];

for (i = 0; i < 20; i++) {
    ITEM_LIST.push({
        name: 'Bag of holding',
        type: 'Armor',
        durability: Math.floor(Math.random() * 100) + 1,
        enhancement: Math.floor(Math.random() * 16) + 1,
    });
}

console.log(ITEM_LIST);
