const listElem = document.querySelectorAll('.item');

const res = listElem.length;
console.log(`Number of categories: ${res}`);

listElem.forEach(elem => {
    
    const categoryTitle = elem.querySelector('h2').textContent;

    const categoryElements = elem.querySelector('ul li');


    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
});

