# Technical interview

## What it covers

Technical interview covers 6 basic JavaScript areas:
- types;
- type casting;
- functions and scopes;
- context and 'this';
- inheritance;
- asynchronous code invocation.

Additionally a separate code snippet (residing in *dom.js*) covers the DOM event model, which is essential for UI creation in browser or any similar environment.

If there's some time left in the end of the interview candidate is proposed to write a short function (described in *intersect.js*).

All code snippets are fairly easy to read and analyze for an experienced developer. A developer who can correctly comment most of these code snippets has a firm knowledge of JavaScript and can easily adopt any framework / JS-based technology.

## How it's conducted

Interviewer shows snippets in the following order:
- *types.js*;
- *casts.js*;
- *dom.js*;
- *args.js*;
- *this.js*;
- *constructor.js*;
- *async.js*;
- *promised.js*.

Candidate is advised to think of the snippets as of being executed in the console of a browser (copy everything -> paste into the console -> execute).
The goal for the candidate is to answer **what** will be shown in the console and say **why**.

> While the candidate is explaining the snippets output it's advised to ask additional questions about the JavaScript area being covered (e.g. ask about closure when talking on functions).

In the end of the interview, if the candidate demonstrated good skills in reading code snippets, he can be offered a small coding task, described in *intersect.js*. The goal here is to get a quick grasp on candidate's code writing skills and knowledge of algorithms complexity (Big O notation).

## How to interpret results

If a developer can correctly interpret all code snippets (with 1-2 minor mistakes) then he has a good understanding of core JavaScript features.

Otherwise his skills might be good enough for the project depending of the project stage and complexity.

## Code comments

Code snippets for technical interview are collected in *master* branch of the repo.
Commented code is on the *commented* branch.