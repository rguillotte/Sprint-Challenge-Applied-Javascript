// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data=>{
        console.log(data);

        // const dataSet = data.data.articles;
        // console.log(dataSet);

        // const dataKeys = Object.keys(data.data.articles);
        // console.log(dataKeys);

        const bootstrapInfo = data.data.articles.bootstrap;
        bootstrapInfo.forEach((i=>{
            createCard(i);
        }))

        const javascriptInfo = data.data.articles.javascript;
        javascriptInfo.forEach((i=>{
            createCard(i);
        }))

        const jqueryInfo = data.data.articles.jquery;
        jqueryInfo.forEach((i=>{
            createCard(i);
        }))

        const nodeInfo = data.data.articles.node;
        nodeInfo.forEach((i=>{
            createCard(i);
        }))

        const technologyInfo = data.data.articles.technology;
        technologyInfo.forEach((i=>{
            createCard(i);
        }))

    })
    .catch(err=>{
        console.log(err);
    })

function createCard(data){
    //create elements
    cardDiv = document.createElement('div');
    headline = document.createElement('div');
    author = document.createElement('div');
    imgContainer = document.createElement('div');
    image = document.createElement('img');
    byLine = document.createElement('span');

    //add classes
    cardDiv.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //put together
    cardDiv.appendChild(headline);
    cardDiv.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(byLine);

    const cardsContainer = document.querySelector('.cards-container');

    cardsContainer.appendChild(cardDiv);

    //add content
    headline.textContent = data.headline;
    byLine.textContent = `By: ${data.authorName}`;
    image.setAttribute('src', data.authorPhoto);

    //return
    return cardDiv;

}
