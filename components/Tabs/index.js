// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(data => {
        // console.log(data);

        const tabInfo = Object.values(data.data.topics);

        // console.log(tabInfo);

        topics = document.querySelector('.topics');

        tabInfo.forEach((item)=>{
            createTab(item);
        })
    })
    .catch(err => {
        console.log(err);
    })

function createTab(item){
    //create elements
    const tab = document.createElement('div');

    //add classes
    tab.classList.add('tab');

    //add content
    tab.textContent = item;

    topics = document.querySelector('.topics');

    topics.appendChild(tab);
    
}    



