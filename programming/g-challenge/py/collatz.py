#!/usr/bin/env python3
# collatz conjecture

import argparse

def collatz(n):
    if n % 2 == 0: return int(n / 2)
    return int(3*n + 1)

def collatz_seq(n):
    while n != 1:
        print(n)
        n = collatz(n)
    print(n)
        
if __name__ == '__main__':
    p = argparse.ArgumentParser()
    p.add_argument("n")
    args = p.parse_args()
    n = int(args.n)
    collatz_seq(n)

