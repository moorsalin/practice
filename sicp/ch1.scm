#lang sicp
;;; start guile with M-x run-guile
;;; C x C e to execute line
;;; C x C s to save file
;;; C g to quit command during execution
;;; 1.1
10
(+ 5 3 4)
(- 9 1)
(/ 6 2)
(+ (* 2 4) (-4 6))
(define a 3)
(define b (+ a 1))
(+ a b (* a b))
(= a b)
(if (and (> b a) (< b (* a b)))
    b
    a)
(cond ((= a 4) 6)
      ((= b 4) (+ 6 7 a))
      (else 25))


(+ 2 (if (> b a) a b))

(* (cond ((> a b) a)
	 ((< a b) b)
	 (else -1))
   (+ a 1))

;;; 1.2

(/ (+ 4 5 (- 2 (- 3 (+ 6 (/ 4 5))))) (* 3 (- 6 2) (- 2 7)))

;;; 1.3

(define (max a b)
  (cond ((> a b) a)
	((> b a) b)
	((= a b) a)))

(define (min a b)
  (cond ((> a b) b)
	((> b a) a)
	((= a b) a)))

(define (max-three a b c)
  (list (max (max a b) (max b c))
	(max (min a b) (min b c))))

(define (square a)
  (* a a))

(define (sum-squares-biggest-two a b c)
  (+ (square (max (max a b) (max b c)))
     (square (max (min a b) (min b c)))))

;;; 1.4

(define (a-plus-abs-b a b)
  ((if (> b 0) + -) a b))

;;; this procedure changes the s expression evaluated

;;; 1.5

(define (p) (p))
(define (test x y) (if (= x 0) 0 y))
;;; (test 0 (p)) infite loop as calling p will call itself
;;; normal order will not execute p
;;; applicative order will execute p

;;; 1.6

(define (new-if predicate then-clause else-clause)
  (cond (predicate then-clause)
	(else else-clause)))

(new-if (= 2 3) 0 5)

(define (mean a b)
  (/ (+ a b) 2))

(define (square a)
  (* a a))

(define (improve guess x)
  (mean guess (/ x guess)))

(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.001))

;;;(define (sqrt-iter guess x)
;;;  (new-if (good-enough? guess x)
;;;	  guess
;;;	  (sqrt-iter (improve guess x) x)))

;;; infinite recursion

;;; 1.7

(define (good-enough? guess x)
  (< (abs (- (square guess) x)) 0.0000001))
;;; function good-enough? fails with small and very large inputs
;;; because for small inputs, a difference between result and answer of 0.001 may
;;; throw off the accuracy
;;; for large inputs, execution time go up exponentially

(define (sqrt-iter guess x)
  (if (good-enough? guess x)
	  guess
	  (sqrt-iter (improve guess x) x)))

(define (sqrt x)
  (sqrt-iter 1.0 x))
