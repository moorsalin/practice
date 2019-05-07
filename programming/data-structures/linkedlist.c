#include <stdio.h>
#include <malloc.h>

struct node {
    int data;
    struct node* next;
};

struct node* BuildOneTwoThree();
int Length(struct node* head);
void Push(struct node** headRef, int newData);

int main() {
    return 0;
}

int Length(struct node* head) {
    int count = 0;
    struct node* cur;

    for (cur = head; cur != NULL; cur = cur->next) {
        count++;
    }
    return count;
}

void Push(struct node** headRef, int newData) {
    struct node* newNode = (struct node*) malloc(sizeof(struct node));
    newNode->data = newData;
    newNode->next = (*headRef);
    (*headRef) = newNode;
}

struct node* BuildOneTwoThree() {
    struct node* head = NULL;
    for (int i = 3; i > 0; i--) {
        Push(&head,i);
    }
    return head;
}