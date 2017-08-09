var snabbdom = require('snabbdom');
var patch = snabbdom.init([
    require('snabbdom/modules/class').default,
    require('snabbdom/modules/props').default,
    require('snabbdom/modules/style').default,
    require('snabbdom/modules/eventlisteners').default,
])

var h = require('snabbdom/h').default;

var vnode = h('div#container.two.classes', {
    on: { click: someFn }
}, [
    h('span', { style: { fontWeight: 'bold' } }, 'This is bold'),
    'and this is just normal text',
    h('a', { props: { href: '/foo' } }, 'I\'ll take you places!')
])

// Patch into empty DOM Element - this modifies the DOM as a side effect.
var container = document.getElementById('container');
patch(container, vnode);
window.addEventListener('DOMContentLoaded', function() {
    // vnode = patch(container, view(data));
    // render();
});

var newVnode = h('div#container.two.classes', { on: { click: anotherEventHandler } }, [
    h('span', { style: { fontWeight: 'normal', fontStyle: 'italic' } }, 'This is now italic type'),
    ' and this is still just normal text',
    h('a', { props: { href: '/bar' } }, 'I\'ll take you places!')
]);

// Second `patch` invocation
patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state

function someFn() {
    console.log("someeeeeeeeeeeeeeeeee function....")
}

function anotherEventHandler() {
    console.log('annnnnnnnnnnnnooooooooooooo')
}