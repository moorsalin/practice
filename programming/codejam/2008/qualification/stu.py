import sys

if __name__ == '__main__':
    N = None
    S = None
    Q = None
    with open(sys.argv[1],'r') as f:
        for i,line in enumerate(f):
            if i == 0:
                N = int(line)
            if i == 1:
                S = int(line)