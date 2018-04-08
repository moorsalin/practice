#! /usr/bin/env python3

import sys
import argparse

def parse_args():
    '''Parse command line arguments'''
    
    parser = argparse.ArgumentParser(description='Generate a random first and last name')
    parser.add_argument('N', type=int, nargs = '?', default=1,help='number of names to output')

    return parser.parse_args()

def generate_name():
    pass

if __name__=='__main__':
    args = parse_args()
    print(args.N)
