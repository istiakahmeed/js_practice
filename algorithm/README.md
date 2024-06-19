# JavaScript Algorithms

This repository contains a collection of JavaScript algorithms with detailed documentation and examples. Each algorithm is designed to solve a specific problem efficiently and is accompanied by test cases to ensure correctness.

## Table of Contents

- [Algorithm](##Algorithm)
- [Measuring Performance](#Measuring-Performance)
- [Time & Space Complexity](#Time-&-SpaceComplexity)
- [Big O Notation](#Big-O-Notation)
- [Math Algorithm](#Math-Algorithms)
- [Sort](#Sort)
- [Search](#Search)

## Installation

To use these algorithms, you need to have [Node.js](https://nodejs.org/) installed. Follow these steps to set up the project:

1. Clone the repository:
   ```sh
   git clone ...
   ```
2. Navigate to the project directory:
   ```sh
   cd algorithm
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

You can use these algorithms by importing them into your JavaScript code. Below is an example of how to use one of the algorithms:

## About the crouse

An introduce to the fundamental of algorithms.
A Practical take on algorithm with javascript.
Part one of a two part (Algorithms and Data structures)

## Prerequisites :

### Modern JavaScript

- JavaScript fundamental crash crouse
- Advanced javascript crash crouse
- ES6 topics

## What is Algorithm ?

An algorithm is a set of well-defined instructions to solve a particular problem.

## What is Characteristics ?

well defined inputs and outputs.
Each step should be clear and unambiguous language independent

## Why algorithms?

As a developer going to come across that you need to solve.</br>
Learning algorithms translates to learning different techniques to efficiently solve those problems.</br>
One problem can be solve in many different ways.every algorithm comes with its own tradeoffs when its come to performance.

## Algorithms analysis :

there a multiple ways to solve one problem.

## Algorithms analysis contd :

The absolute running time of an algorithm cannot be predicted , since it depends on a number of factors. </br>

- programming language use to implement the algorithm
- The computer the program runs on
- other programs running at the same time
- Quality of the operating system.

we evaluate performance of on algorithms in turn of its inputs size,

## How to represent Complexity ?

Asymptotic notations </br>

- Mathematical tools to represent time and space complexity </br>

  1. Big - O Notation (O - notation) worst case complexity </br>
  2. Omega Notation (ω - notation) best case complexity </br>
  3. Theta Notation (θ - notation) average case complexity

## Big O Notation

### O(1) - Constant Time

The worst case complexity of an algorithm is represented using the big - O notation. </br>
Big - O notation describe the complexity of on algorithm using algebraic terms. </br>

It has two important characteristics </br>

- Its expressed terms of the input </br>
- It focuses on the bigger picture with out getting caught in the minute details.

```javascript
function Summation(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i;
  }
  return sum;
}
```

## Space Complexity

O (1) - Constant </br>
O (n) - Linear </br>
O (1) - Logarithm </br>

## Few points to note

Multiple algorithms exist for the same problem and there in no one right solution. Different algorithms work well under different constraints. </br>
The same algorithm with the same programming language can be implemented in deferent ways. </br>
When write program at work don't lose sight of the big picture.
