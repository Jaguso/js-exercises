// Convert the characters &, <, >, " (double quote), and ' 
// (apostrophe), in a string to their corresponding HTML 
// entities.

// EXAMPLES
// convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
// convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.

function convertHTML(str) {

    return str.split('').map(elem => {
        if (elem === '&') {
            return '&amp;';
        } else if (elem === '<') {
            return '&lt;';
        } else if (elem === '>') {
            return '&gt;';
        } else if (elem === '"') {
            return '&quot;';
        } else if (elem === "'") {
            return '&apos;';
        } else {
            return elem
        }
    }).join('')

}

console.log(convertHTML("Dolce & Gabbana"));