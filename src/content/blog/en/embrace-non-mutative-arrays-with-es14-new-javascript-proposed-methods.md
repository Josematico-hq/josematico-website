---
title: 'Embrace Non-Mutative Arrays with ES14: New Proposed Methods in JavaScript'
description: "Explore ECMAScript 2023's (ES14) groundbreaking non-mutative array methods, opening pathways for efficient and secure programming."
pubDate: 2023-04-29
preview: "Discover the power of 'Change Array by Copy' with new JavaScript methods in ES14: toReversed(), toSorted(), and toSpliced()."
author: 'José Carlos'
readTime: '5 min'
tags: ["javascript", "ecmascript", "web development", "coding", "es14"]
slug: "embrace-non-mutative-arrays-with-es14-new-javascript-proposed-methods"
---

In our ever-evolving world of technology, staying informed about the latest changes is crucial. One such development is the proposal for ECMAScript 2023 (ES14), introducing four new array methods: 

```javascript 
toReversed(), toSorted(), toSpliced() and with()
``` 
These changes have reached stage 4, which means they are on the [Finished Proposals](https://github.com/tc39/proposals/blob/HEAD/finished-proposals.md) and are set to be included in the next version of JavaScript.

## The Finished Proposal: Change Array by copy

Co-authored by Robin Ricard and Ashley Claymore from Bloomberg, the ['Change Array by copy'](https://github.com/tc39/proposal-change-array-by-copy) proposal aims to introduce these new methods as a way to avoid the mutating counterparts currently in use. The idea is to enable changes on the array by returning a new copy of it with the change, thus keeping the original array untouched.

## The New Methods in Action

The new array methods promise to make programming in JavaScript more efficient and safer. Here are some examples:

```javascript
const sequence = [1, 2, 3];
sequence.toReversed(); // => [3, 2, 1]
sequence; // => [1, 2, 3]

const outOfOrder = new Uint8Array([3, 1, 2]);
outOfOrder.toSorted(); // => Uint8Array [1, 2, 3]
outOfOrder; // => Uint8Array [3, 1, 2]

const correctionNeeded = [1, 1, 3];
correctionNeeded.toSpliced(1, 1, 2); // => [1, 2, 3]
correctionNeeded; // => [1, 1, 3]

const updateNeeded = [1, 2, 3];
updateNeeded.with(2, 4); // => [1, 2, 4]
updateNeeded; // => [1, 2, 3]

```

In the examples above, we observe that the original arrays remain unmutated after the application of the new methods, representing a significant shift from the present mutating methods.

## Why These Changes Matter

The methods proposed by the 'Change Array by copy' proposal can assist us in scripting more maintainable and robust codes. Immutable operations minimize the risk of unintended side-effects, making our code safer. Moreover, they simplify the process of writing codes capable of handling Arrays and Tuples interchangeably, enhancing our code's versatility.

## Current Implementations

As of March 2023, the new methods have been incorporated in Firefox/SpiderMonkey (currently flagged, implying that you need to manually enable them for use), Safari/JavaScriptCore (shipping unflagged since Safari Tech Preview 146), Chrome/V8 (shipping unflagged since Chrome 110), and Ladybird/LibJS (shipping unflagged). You can examine the meeting notes discussing this proposal on the [tc39's note page](https://github.com/tc39/notes/blob/HEAD/meetings/2022-03/mar-30.md#change-array-by-copy).

For developers eager to utilize these new methods before their official release, polyfills and shims are available. The minimalist reference implementation can be found in the [polyfill.js file](https://github.com/tc39/proposal-change-array-by-copy/blob/main/polyfill.js) within the proposal's repository. Additionally, the es-shims library offers individual implementations for each new method:

1. [array.prototype.tosorted](https://www.npmjs.com/package/array.prototype.tosorted): Creates a new array with the same elements in sorted order.
2. [array.prototype.toreversed](https://www.npmjs.com/package/array.prototype.toreversed): Returns a new array with the elements in reverse order.
3. [array.prototype.tospliced](https://www.npmjs.com/package/array.prototype.tospliced): Creates a new array by removing, replacing, or adding elements.
4. [array.prototype.with](https://www.npmjs.com/package/array.prototype.with): Returns a new array with one element replaced.

You can also find the new methods implemented [(Change array by copy in core-js)](https://github.com/zloirock/core-js#change-array-by-copy).

## Conclusion

The introduction of these non-mutative array methods in JavaScript signifies a stride towards developing more robust, maintainable, and safer code. As we embrace the upcoming changes proposed for ECMAScript 2023, we continue to harness the full potential of JavaScript for creating efficient and powerful web applications.

Remember to keep an eye on the [ECMA-262 specification](https://tc39.es/ecma262/) for the latest updates and changes in JavaScript. Let's keep exploring and learning as we journey through the ever-evolving landscape of web development.

## Additional Resources

1. <a href="https://github.com/tc39/proposal-change-array-by-copy" target="_blank" rel="noreferrer">Proposal Repository: Change Array by Copy</a>
2. <a href="https://github.com/tc39/proposals/commit/ad4df8435f27f39eda26db3b940ae151980c8015#diff-af1d66eb7dbbf6f66e871d26bcad07076a557256a957f558ca21e60924e2b0b7" target="_blank" rel="noreferrer">Proposals to Finished Proposals Stage 4</a>
3. <a href="https://tc39.es/ecma262/" target="_blank" rel="noreferrer">TC39 - ECMA-262</a>
4. <a href="https://github.com/tc39/proposals/blob/HEAD/finished-proposals.md" target="_blank" rel="noreferrer">Finished Proposals</a>
5. <a href="https://github.com/tc39/notes/blob/HEAD/meetings/2022-03/mar-30.md#change-array-by-copy" target="_blank" rel="noreferrer">Change Array by Copy Notes</a>
6. <a href="https://github.com/tc39/proposal-change-array-by-copy/blob/main/polyfill.js" target="_blank" rel="noreferrer">Polyfill Implementation</a>
7. <a href="https://github.com/zloirock/core-js#change-array-by-copy" target="_blank" rel="noreferrer">Core-JS Implementation</a>
8. <a href="https://github.com/es-shims" target="_blank" rel="noreferrer">ES-Shims: A community host for shims and polyfills</a>
9. <a href="https://www.npmjs.com/package/array.prototype.tosorted" target="_blank" rel="noreferrer">ES-Shims: toSorted Implementation</a>
10. <a href="https://www.npmjs.com/package/array.prototype.toreversed" target="_blank" rel="noreferrer">ES-Shims: toReversed Implementation</a>
11. <a href="https://www.npmjs.com/package/array.prototype.tospliced" target="_blank" rel="noreferrer">ES-Shims: toSpliced Implementation</a>
12. <a href="https://www.npmjs.com/package/array.prototype.with" target="_blank" rel="noreferrer">ES-Shims: with Implementation</a>
13. <a href="https://www.dropbox.com/s/5rabrx387snkbfn/change_array_by_copy_at_tc39_march_2022.pdf?dl=0" target="_blank" rel="noreferrer">Proposal Presentation</a>

These resources provide comprehensive information about the Change Array by Copy proposal and the ECMAScript standard in general. They are excellent references for those keen on delving deeper into the subject or tracking the development of JavaScript closely.

By staying informed and up-to-date, we can continue to write efficient and robust JavaScript code, fully utilizing the language's evolving capabilities. As we look forward to the official release of these non-mutative array methods with ECMAScript 2023 (ES14), let's continue to embrace the continual evolution of JavaScript and web development.