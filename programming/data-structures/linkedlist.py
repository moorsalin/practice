class Node:
    def __init__(self,data=None):
        self.data = data
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None

    def push(self,value):
        if self.head is None:
            self.head = Node(value)
            return
        ptr = self.head
        while ptr.next is not None:
            ptr = ptr.next
        new = Node(value)
        ptr.next = new
        return

    def pop(self):
        prev = self.head
        cur = prev.next

        while cur is not None:
            prev = cur
            cur = cur.next
        
        del prev
        

    def print(self):
        ptr = self.head
        while ptr is not None:
            print(ptr.data)
            ptr = ptr.next
        return

    def length(self):
        cnt = 0
        ptr = self.head
        while ptr is not None:
            cnt += 1
            ptr = ptr.next
        return cnt

def main():
    n1 = Node(1)
    n2 = Node(2)
    n3 = Node(3)
    n1.next = n2
    n2.next = n3
    #now we can see that n1 is the head
    #and n3 is the last element because it points to nowhere

def test():
    l = SinglyLinkedList()
    nums = [4,8,15,16,23,42]
    for i in nums:
        l.push(i)
    
    print("Before pop")
    l.print()

    l.pop()

    print("After pop")
    l.print()


