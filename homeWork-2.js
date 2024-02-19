function getLength(val) {
    if (val && val.length !== undefined)
        console.log(val.length);
    else if (val && val.size !== undefined)
        console.log(val.size);
    else
        console.log(0);
}

function compare(tree1, tree2) {
    if (!tree1 && !tree2) return true;
    if (!tree1 || !tree2) return false;

    const queue1 = [tree1];
    const queue2 = [tree2];

    while (queue1.length && queue2.length) {

        const currentNode1 = queue1.shift();
        const currentNode2 = queue2.shift();

        if (!currentNode1 || !currentNode2 || currentNode1.value !== currentNode2.value)
            return false;

        if (currentNode1.left)
            queue1.push(currentNode1.left);
        if (currentNode1.right)
            queue1.push(currentNode1.right);
        if (currentNode2.left)
            queue2.push(currentNode2.left);
        if (currentNode2.right)
            queue2.push(currentNode2.right);
    }

    return queue1.length === queue2.length;
}