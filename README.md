[![npm version](https://badge.fury.io/js/smart-capitalize.svg)](https://badge.fury.io/js/smart-capitalize)

# smart-capitalize

Every time [PayPal](https://paypal.com) sends me an email, they start off by addressing me in the following way:

>Hi Gerard O'neill,

Obviously, this is not how I type my name. My last name is spelled O'Neill with a capital N. However, PayPal doesn't trust me to spell my own name correctly, so it runs a rudimentary capitalization function on my name, which results in it being spelled incorrectly.

This is why I made `smart-capitalize`.

## Examples

It's a simple library with two functions:

* `capitalize()`
* `capitalizeAll()`

`capitalize` is meant to be used for only a single word, while `capitalizeAll` is for use with multiple words, such as with a name or a sentence/title.

The internal logic isn't _super_ simple, but in practice, these functions will capitalize strings where there doesn't already exist an uppercase letter. Some examples:

```
capitalize('hello') === 'Hello' // capitalized
capitalize('this is a sentence.') === 'This is a sentence.' // capitalized first word only
capitalize("O'Neill") === "O'Neill" // no change

capitalizeAll('hello, how are you?') === 'Hello, How Are You?' // all words capitalized
capitalizeAll("that guy looks like leonardo da vinci lol") === "That Guy Looks Like Leonardo Da Vinci Lol" // all words capitalized, though technically still not correct
capitalizeAll("my name is Gerard O'Neill") === "my name is Gerard O'Neill" // no change
```

## Installation

Using `yarn`:

```
yarn add smart-capitalize
```

Using `npm`:

```
npm i -S smart-capitalize
```

## Usage

```
import { capitalize, capitalizeAll } from 'smart-capitalize'

console.log(capitalize('this is cool')) // 'This is cool'
console.log(capitalizeAll('this is cool too')) // 'This Is Cool Too'
```

## I18n

The functions also do their best to work with non-English/non-Latin alphabets. Some sacrifices were made because of JavaScript's [lack of Unicode property escapes](https://github.com/tc39/proposal-regexp-unicode-property-escapes), but it should work fairly well.

## Disclaimer

It's worth stating that these are not perfect functions. It's impossible to know what should be capitalized and what shouldn't be, algorithmically-speaking. I would prefer that you never try to capitalize anything like somebody's name, but if you _absolutely must_, then this will give you something fairly sane for people who couldn't bothered to use the `Shift` key while leaving the rest of our names alone.