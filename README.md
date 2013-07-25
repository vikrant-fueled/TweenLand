TweenLand Challenge

-------------------

The Problem:
	
	TweenLand is a place populated entirely with Tweens of various shapes
	and sizes. Tweens live forever and every Tween has exactly 6,000 bits
	of genetic data. At this very moment there just happen to be 6,000
	living Tweens, and they all descended from a single ancestor. Your
	task is to examine every Tween's genetic data and construct your best
	guess of their hereditary tree.

	TweenLand grew from population 1 to population 6,000 as follows:

	A Tween chosen at random from the existing population was cloned, and
	each bit of genetic data was copied with 80% accuracy, independent of
	all other genetic bits. In other words, for each bit, the cloned
	child's bit will be the reverse of its parent's corresponding bit 20%
	of the time.

	Given a randomly ordered input file containing the 6000 bit genetic
	data from every Tween, 1 per line, your program should output 1 line
	for each individual denoting the 0 based index of the individual's
	parent, or -1 if that individual is the first Tween and thus has no
	parent.

	The output currently printed by the included javascript is what you
	should be going for.

	It is left up to you to determine the appropriate balance of
	efficiency and accuracy.

	Included is a much smaller sample set of 600 Tweens (tweens600.txt) with 600 bits of
	genetic data. Also, we have provided you with some basic functions (tween.js) that you can use while writing the program.

The Environment:
	
	Create the solution using Javascript.

Included Files:

	- TweenLand Challenge helper functions (tween.js)
	- 600 Tween Sample Set
	- jQuery