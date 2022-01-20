/**
 * DOM Event model has several important features to mention:
 * 1. It has two phases: capturing and bubbling.
 * 2. DOM event is generated on the 'window' object.
 * 3. Afterwards it traverses the DOM until it reaches its event target node.
 * 4. Then it bubbles up until it reaches the 'window' object again.
 * 5. We can prevent events from moving across DOM using event.stopPropagation() method.
 *
 * In the example below we imagine there's a click on the 'child' div. We ask in what order the event listeners
 * would fire. If we added event listeners as is then the order will be 'parent' -> 'child'.
 *
 * We may ask how to invert this behavior. The easiest way is to set third parameter in parent.addEventListener() to
 * 'false'.
 *
 * Next we can ask how to prevent event from reaching parent at all. The answer is to use event.stopPropagation().
 */
<div id="parent">
    <div id="child" />
</div>;

parent.addEventListener(
    'click',
    function parent(event) {
        // do smth
    },
    true, // capturing if true
);
child.addEventListener(
    'click',
    function child(event) {
        // do smth else
    },
    false, // bubbling if false
);
