// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container')

function Header() {
    //create elements
    const headerDiv = document.createElement('div');
    const date = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const temp = document.createElement('span');

    //add classes
    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //add content
    date.textContent = 'MARCH 28, 2019';
    headerTitle.textContent = 'Lambda Times';
    temp.textContent = '98°';

    //put together
    headerDiv.appendChild(date);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(temp);

    //return
    return headerDiv;
    
}

headerContainer.appendChild(Header());

