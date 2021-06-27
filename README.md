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

# Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Chi-squared][chisquare-distribution] distribution [probability density function][pdf] (PDF).

<section class="intro">

The [probability density function][pdf] (PDF) for a [chi-squared][chisquare-distribution] random variable is

<!-- <equation class="equation" label="eq:chisquare_pdf" align="center" raw="{\frac{1}{2^{\frac {k}{2}}\Gamma\left({\frac{k}{2}}\right)}}\;x^{{\frac {k}{2}}-1}e^{-{\frac {x}{2}}}" alt="Probability density function (PDF) for a chi-squared distribution."> -->

<div class="equation" align="center" data-raw-text="{\frac{1}{2^{\frac {k}{2}}\Gamma\left({\frac{k}{2}}\right)}}\;x^{{\frac {k}{2}}-1}e^{-{\frac {x}{2}}}" data-equation="eq:chisquare_pdf">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/chisquare/pdf/docs/img/equation_chisquare_pdf.svg" alt="Probability density function (PDF) for a chi-squared distribution.">
    <br>
</div>

<!-- </equation> -->

where `k` is the degrees of freedom and `Γ` denotes the [gamma function][gamma-function].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-chisquare-pdf
```

</section>

<section class="usage">

## Usage

```javascript
var pdf = require( '@stdlib/stats-base-dists-chisquare-pdf' );
```

#### pdf( x, k )

Evaluates the [probability density function][pdf] (PDF) for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var y = pdf( 0.1, 1.0 );
// returns ~1.2

y = pdf( 0.5, 2.0 );
// returns ~0.389

y = pdf( -1.0, 4.0 );
// returns 0.0
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = pdf( NaN, 1.0 );
// returns NaN

y = pdf( 0.0, NaN );
// returns NaN
```

If provided `k < 0`, the function returns `NaN`.

```javascript
var y = pdf( 2.0, -2.0 );
// returns NaN
```

If provided `k = 0`, the function evaluates the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = pdf( 2.0, 0.0 );
// returns 0.0

y = pdf( 0.0, 0.0 );
// returns Infinity
```

#### pdf.factory( k )

Returns a `function` for evaluating the [PDF][pdf] for a [chi-squared][chisquare-distribution] distribution with degrees of freedom `k`.

```javascript
var myPDF = pdf.factory( 6.0 );

var y = myPDF( 3.0 );
// returns ~0.126

y = myPDF( 1.0 );
// returns ~0.038
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var pdf = require( '@stdlib/stats-base-dists-chisquare-pdf' );

var k;
var x;
var y;
var i;

for ( i = 0; i < 20; i++ ) {
    x = randu() * 10.0;
    k = randu() * 10.0;
    y = pdf( x, k );
    console.log( 'x: %d, k: %d, f(x;k): %d', x.toFixed( 4 ), k.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-chisquare-pdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-chisquare-pdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-chisquare-pdf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-chisquare-pdf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-chisquare-pdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-chisquare-pdf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-chisquare-pdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-chisquare-pdf/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-chisquare-pdf/main/LICENSE

[chisquare-distribution]: https://en.wikipedia.org/wiki/Chi-squared_distribution

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

[gamma-function]: https://en.wikipedia.org/wiki/Gamma_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
