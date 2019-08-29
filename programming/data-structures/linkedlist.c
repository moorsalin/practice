#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node* next;
};

struct node* BuildOneTwoThree() {
    struct node* h = malloc(sizeof(struct node));
    struct node* s = malloc(sizeof(struct node));
    struct node* t = malloc(sizeof(struct node));
    
    h->data = 1;
    h->next = s;
    
    s->data = 2;
    s->next = t;
    
    t->data = 3;
    t->next = NULL;
    
    return h;
}

int Length(struct node* head) {
    struct node* current = head;
    int count = 0;
    
    while (current != NULL) {
        count++;
        current = current->next;
    }
    
    return count;
}

int main() {
    printf("Yes I can write hello world in C\n");
    return 0;
}