exports.success = item => {
    item.enhancement += 1;
    item.name = changeName(item.name, item.enhancement);
    return item;
};

function changeName(name, enhancement) {
    if (name.match(/\[.*\]/g)) {
        name = item.name.match(/(\[.*\])(.*)/g)[1];
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
