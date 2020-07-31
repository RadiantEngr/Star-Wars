// Create a class to help obtain the propeties required of each character
class User {
    constructor(objectInResults) {
        this.objectInResults = objectInResults;
    }

    get findUser() {
        const {name, gender,height} = this.objectInResults;
        return {name, gender, height};
    }
}

// Fetch API, change the fetched data to conform with json, and obtain the results from the fetched data
fetch("https://swapi.dev/api/people/")
.then((resp) =>resp.json())
.then((data) => {

    const arrayOfCharacters = data.results;

    // Iterate through the array of characters
    arrayOfCharacters.forEach((objectInResults,index) => {

        // Link to tags used in the HTML 
        const title = document.querySelector(".title");
        const container = document.getElementsByClassName("container");
        const divContainer = document.getElementById('populate');
        const needed_properties = document.querySelector('.needed-properties');

        // Construct HTML tags
        const unorderedList = document.createElement("ul");
        const list = document.createElement("li");
        const namePTag = document.createElement("p");
        const image = document.createElement("img");

        // Allocate a subset tag to its parent (superset) tag
        divContainer.appendChild(unorderedList);
        unorderedList.appendChild(list);
        list.appendChild(namePTag);

        title.innerHTML = "STAR WARS"; // Heading
        namePTag.style.cursor = 'pointer';
        list.style.listStyleType = 'none';

        // Obtain the name of each character, give each a dummy image
        namePTag.innerHTML = `${objectInResults.name}`;
        image.src = `http://lorempixel.com/g/311/400/?random = ${index}`;

        // Create an instance (called property) of the class (User)
        const property = new User(objectInResults);

        const obtainNeededProperties = property.findUser;
            
        // Display the required properies upon clicking on each name (a buuton to close or reverse this action is also created)
        namePTag.addEventListener("click", () => {
            needed_properties.innerHTML = `
            <h2>Name: ${obtainNeededProperties.name}</h2>
            <h3>Gender: ${obtainNeededProperties.gender}</h3>
            <h3>Height: ${obtainNeededProperties.height}</h3>
            <figure class = "photo"><img src="${image.src}"/></figure>
            <button id="close" style = "color: #FF0000;">Close</button> 
            ` 

            needed_properties.style.display = "block"; 

            const close = document.querySelector('#close')    
            const isClose = true;
            close.addEventListener("click", () => {
                needed_properties.style.display = "none"; //On clicking the close button. the displayed properties disappear
            })
        })
    });
});            
            















           