#!/usr/bin/env python3
from multiprocessing import Pool
import time

def isPrime(x):
    if x == 2 : return True
    if x < 2 : return False
    if x % 2 == 0: return False
    
    if x > 1000: 
        x = int(pow(x,0.5))
    
    for i in range(x-2,2,-1):
        if x % i == 0: return False
    return True

# this is a terrible example of code to run in parallel
if __name__ == '__main__':
    start_para = time.time()
    pool = Pool(4)
    primes_parallel = pool.map(isPrime,range(3,5000000,2))
    pool.close()
    pool.join()
    end_para = time.time()

    # print "Serial Time {.6f}".format((end_serial - start_serial))
    print("Parallel Time {:.6f}".format((end_para - start_para)))