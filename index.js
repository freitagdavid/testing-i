exports.success = item => {
    const workingItem = Object.assign({}, item);
    if (workingItem.enhancement < 15 && item.durability < 25) {
        return workingItem;
    }
    if (workingItem.enhancement > 14 && item.durability < 10) {
        return workingItem;
    }
    workingItem.enhancement += 1;
    workingItem.name = changeName(workingItem.name, workingItem.enhancement);
    return workingItem;
};

exports.fail = item => {
    const workingItem = Object.assign({}, item);
    if (workingItem.enhancement < 15) {
        workingItem.durability -= 5;
    } else if (workingItem.enhancement > 14) {
        workingItem.durability -= 10;
    }
    if (workingItem.enhancement > 16) {
        workingItem.enhancement -= 1;
        console.log(workingItem.enhancement);
        workingItem.name = changeName(
            workingItem.name,
            workingItem.enhancement
        );
    }
    return workingItem;
};

exports.repair = item => {
    const workingItem = Object.assign({}, item);
    workingItem.durability = 100;
    return workingItem;
};

function changeName(name, enhancement) {
    console.log(name, enhancement);
    if (name.match(/\[.*\]/g)) {
        name = name.match(/(\[.*\])(.*)/g)[1];
    }
    switch (enhancement) {
        case 16:
            return `[PRI] ${name}`;
        case 17:
            return `[DUO] ${name}`;
        case 18:
            return `[TRI] ${name}`;
        case 19:
            return `[TET] ${name}`;
        case 20:
            return `[PEN] ${name}`;
        default:
            return `[+${enhancement}] ${name}`;
    }
}
