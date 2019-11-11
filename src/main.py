#!/usr/bin/env python3

def fizzbuzz(i):
    n = [i%3, i%5]
    print(((n[0]==0)and(n[1]==0)and"fizzbuzz " + str(i))or((n[0]==0)and"fizz " +str(i))or((n[1]==0)and"buzz " + str(i))or str(i))

for i in range(0,102):
    fizzbuzz(i)
