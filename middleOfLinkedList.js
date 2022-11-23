var middleNode = function(head) {
    let mid = 0;
    let counter = head;
    while(counter.next){
        counter = counter.next;
        mid++;
    }
    mid = Math.ceil(mid/2);
    while(mid){
        head = head.next;
        mid--;
    }
    return head;
};