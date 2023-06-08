window.addEventListener("DOMContentLoaded", main);

/**The state for our program */

const listOfCarBrands = ["Volvo", "Wolksvagen", "Toyota", "BMW", "Corvette"]
// const removeLastElementButton = document.getElementById('removeButton');

function main() {
    renderCarList();
//     removeLastElementButton.addEventListener("click", removeLastElement);
}

function renderCarList() {
    const ul = document.querySelector('ul');

    for (const carBrand of listOfCarBrands){
        const li = document.createElement('li');
        li.textContent = carBrand;
        ul.append(li);
    }
}

// function removeLastElement() {
//     listOfCarBrands.pop();
//     console.log(listOfCarBrands);
//     renderCarList(); // Update the displayed list
// }
