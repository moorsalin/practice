from multiprocessing import Pool
import time

def isPrime(x):
    if x == 2 : return True
    if x < 2 : return False
    if x % 2 == 0: return False
    
    if x > 1000: 
        x = int(pow(x,0.5))
    
    for i in xrange(x-2,2,-1):
        if x % i == 0: return False
    return True

# time serial
# print "start serial"
# start_serial = time.time()
# primes_serial = []
# for i in xrange(3,5000000,2):
    # if isPrime(i):
        # primes_serial.append(i)
# end_serial = time.time()

# time parallel
# print "start parallel"
if __name__ == '__main__':
    start_para = time.time()
    pool = Pool(4)
    primes_parallel = pool.map(isPrime,xrange(3,5000000,2))
    pool.close()
    pool.join()
    end_para = time.time()

    # print "Serial Time {.6f}".format((end_serial - start_serial))
    print "Parallel Time {:.6f}".format((end_para - start_para))