class LinkNode {
    data: any = null;
    link: LinkNode | null = null;
    constructor(data, link: LinkNode | null) {
        this.data = data;
        this.link = link;
    }
}

class LinkedList {
    head: LinkNode | null = null;

    addToStart(data) {
        const node = new LinkNode(data, this.head);
        this.head = node;
    }

    addToEnd(data) {
        const newNode = new LinkNode(data, null)
        if (this.head === null)
            this.head = newNode;
        else {
            let node = this.head;
            while (node.link) {
                node = node.link
            }
            node.link = newNode;
        }
    }
}

let list = new LinkedList();
list.addToStart(2);
list.addToStart(1);

console.dir(list);
list.addToEnd(3);
console.log('---------');
console.dir(JSON.stringify(list));
