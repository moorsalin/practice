#!/usr/bin/env python3

import sys
import argparse
import random as r

def parse_args():
    '''Parse command line arguments'''
    
    parser = argparse.ArgumentParser(description='Generate a random first and last name')
    parser.add_argument('N', type=int, nargs = '?', default=1,help='number of names to output')

    return parser.parse_args()

def generate_name(N):
# http://web.archive.org/web/20160822211027/http://semarch.linguistics.fas.nyu.edu/barker/Syllables/index.txt
    syllables = ['aa','ae','ah','ao','aw','ax','ay','b','ch','d','dh', \
    'ea','eh','er','ey','f','g','hh','ia','ih','iy','jh','k','l','m','n', \
    'oh','ow','oy','p','r','s','sh','t','th','ua','uh','uw','v','w','y','z','zh']
    
    prefix1 = ['b','ch','d','f','k','l','m','n','p','r','s','sh','t','v', \
    'z','zh','g','ng','th','aa','ae','ah','ao','aw','ax','ay','ea','eh','er', \
    'ey','hh','ia','ih','iy','jh','oh','ow','oy','ua','uh','uw','y','w','dh']
    
    prefix2 = ['z','t','s','d','k','b','f','p','m','v','dh','jh','l','n','ng','r', \
    'th','ch','g','sh','ih','zh','ao','aw','eh','oh','y','ah','ax','er','ey','oy', \
    'ua','uh','uw','aa','ae','ay','ea','ia','iy','ow','w','hh']
    
    suffix1 = ['t','s','z','d','th','k','n','b','jh','p','ch','g','r', \
    'uw','ng','f','sh','m','dh','zh','eh','ih','ae','aw','ey','ea','iy', \
    'l','v','ay','ow','er','uh','ao','aa','oh','ah','ax','ia','ua','oy']
    
    suffix2 = ['s','t','z','d','k','ch','jh','p','ng','f', \
    'sh','g','r','th','l','n','m','v','zh','b','ay','ih', \
    'ow','t','s','z','d','th','k','jh','p','ch','b']
    
    for i in range(N):
        fname = ''.join([r.choice(prefix1), r.choice(syllables), r.choice(suffix1)])
        lname = ''.join([r.choice(prefix2), r.choice(syllables), r.choice(suffix2)])
        fname = fname[0].upper() + fname[1:]
        lname = lname[0].upper() + lname[1:]
        print(fname + " " + lname)
    

if __name__=='__main__':
    args = parse_args()
    N = int(args.N)
    generate_name(N)
    
