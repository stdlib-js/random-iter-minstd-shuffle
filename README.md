<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# MINSTD Shuffle

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Create an iterator for a linear congruential pseudorandom number generator ([LCG][lcg]) whose output is shuffled.

<section class="installation">

## Installation

```bash
npm install @stdlib/random-iter-minstd-shuffle
```

</section>

<section class="usage">

## Usage

```javascript
var iterator = require( '@stdlib/random-iter-minstd-shuffle' );
```

#### iterator( \[options] )

Returns an iterator for generating pseudorandom numbers via a linear congruential pseudorandom number generator ([LCG][lcg]) whose output is shuffled.

```javascript
var it = iterator();
// returns <Object>

var r = it.next().value;
// returns <number>

r = it.next().value;
// returns <number>

r = it.next().value;
// returns <number>

// ...
```

The function accepts the following `options`:

-   **normalized**: `boolean` indicating whether to return pseudorandom numbers on the interval `[0,1)`.
-   **seed**: pseudorandom number generator seed.
-   **state**: an [`Int32Array`][@stdlib/array/int32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.
-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned iterator has exclusive control over its internal pseudorandom number generator state. Default: `true`.
-   **iter**: number of iterations.

To return pseudorandom numbers on the interval `[0,1)`, set the `normalized` option.

```javascript
var it = iterator({
    'normalized': true
});

var r = it.next().value;
// returns <number>
```

To return an iterator having a specific initial state, set the iterator `state` option.

```javascript
var bool;
var it1;
var it2;
var r;
var i;

it1 = iterator();

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = it1.next().value;
}

// Create a new iterator initialized to the current state of `it1`:
it2 = iterator({
    'state': it1.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( it1.next().value === it2.next().value );
// returns true
```

To seed the iterator, set the `seed` option.

```javascript
var it = iterator({
    'seed': 12345
});

var r = it.next().value;
// returns 1982386332

it = iterator({
    'seed': 12345
});

r = it.next().value;
// returns 1982386332
```

To limit the number of iterations, set the `iter` option.

```javascript
var it = iterator({
    'iter': 2
});

var r = it.next().value;
// returns <number>

r = it.next().value;
// returns <number>

r = it.next().done;
// returns true
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.
-   **seed**: pseudorandom number generator seed.
-   **seedLength**: length of generator seed.
-   **state**: writable property for getting and setting the generator state.
-   **stateLength**: length of generator state.
-   **byteLength**: size (in bytes) of generator state.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
-   The generator has a period of approximately `2.1e9` (see [Numerical Recipes in C, 2nd Edition](#references), p. 279).
-   An [LCG][lcg] is fast and uses little memory. On the other hand, because the generator is a simple [linear congruential generator][lcg], the generator has recognized shortcomings. By today's PRNG standards, the generator's period is relatively short. In general, this generator is unsuitable for Monte Carlo simulations and cryptographic applications.
-   If PRNG state is "shared" (meaning a state array was provided during iterator creation and **not** copied) and one sets the underlying generator state to a state array having a different length, the iterator does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize the output of the underlying generator according to the new shared state array, the state array for **each** relevant iterator and/or PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the underlying generator state to a state array of the same length, the PRNG state is updated (along with the state of all other iterator and/or PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterator = require( '@stdlib/random-iter-minstd-shuffle' );

var it;
var r;

// Create a seeded iterator for generating pseudorandom numbers:
it = iterator({
    'seed': 1234,
    'iter': 10
});

// Perform manual iteration...
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}
```

</section>

<!-- /.examples -->

* * *

<section class="references">

## References

-   Park, S. K., and K. W. Miller. 1988. "Random Number Generators: Good Ones Are Hard to Find." _Communications of the ACM_ 31 (10). New York, NY, USA: ACM: 1192–1201. doi:[10.1145/63039.63042][@park:1988].
-   Bays, Carter, and S. D. Durham. 1976. "Improving a Poor Random Number Generator." _ACM Transactions on Mathematical Software_ 2 (1). New York, NY, USA: ACM: 59–64. doi:[10.1145/355666.355670][@bays:1976].
-   Herzog, T.N., and G. Lord. 2002. _Applications of Monte Carlo Methods to Finance and Insurance_. ACTEX Publications. [https://books.google.com/books?id=vC7I\\\_gdX-A0C][@herzog:2002].
-   Press, William H., Brian P. Flannery, Saul A. Teukolsky, and William T. Vetterling. 1992. _Numerical Recipes in C: The Art of Scientific Computing, Second Edition_. Cambridge University Press.

</section>

<!-- /.references -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-iter-minstd-shuffle.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-iter-minstd-shuffle

[test-image]: https://github.com/stdlib-js/random-iter-minstd-shuffle/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/random-iter-minstd-shuffle/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-iter-minstd-shuffle/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-iter-minstd-shuffle?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-iter-minstd-shuffle
[dependencies-url]: https://david-dm.org/stdlib-js/random-iter-minstd-shuffle/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-iter-minstd-shuffle/main/LICENSE

[lcg]: https://en.wikipedia.org/wiki/Linear_congruential_generator

[@park:1988]: http://dx.doi.org/10.1145/63039.63042

[@bays:1976]: http://dx.doi.org/10.1145/355666.355670

[@herzog:2002]: https://books.google.com/books?id=vC7I_gdX-A0C

[@stdlib/array/int32]: https://github.com/stdlib-js/array-int32

</section>

<!-- /.links -->