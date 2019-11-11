#include <stdio.h>
int main() {
	int i = 0;
	while (i < 102) {
		if(i%3 == 0 && i%5 == 0) {
			printf("fizzbuzz: %d\n", i);
		} else if (i%3 == 0) {
			printf("fizz: %d\n",i);
		} else if (i%5 == 0) {
			printf("buzz: %d\n",i);
		} else {
			printf("%d\n", i);
		}
		i+= 1;
	}
}
