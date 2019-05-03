class LinkNode {
    constructor(private data, private link: LinkNode | null) {

    }
}

class LinkedList {
    head: LinkNode | null = null;
    
    addToStart(data) {
        const node = new LinkNode(data, this.head);
        this.head = node;
    }
}

let list = new LinkedList();
list.addToStart(2);
list.addToStart(1);

console.log(list)