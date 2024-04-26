//oop 
//aaaaaaand awaaaayyyy we goooo!!

// List of object formulas
let formulas = [
    { name: "Kinetic Energy", formula: "0.5 * mass * velocity^2", components: ["mass", "velocity", "energy", "kinetic"], link: "kinetic-energy.html" },
    { name: "Elastic Potential Energy", formula: "0.5 * spring-constant * extension", components: ["spring-constant", "extension", "k", "e", "elastic", "energy"], link: "elastic-potential-energy.html"},
    { name: "Area of Circle", formula: "π * radius^2", components: ["radius", "area"], link: "area-of-circle.html"},
    { name: "Pythagorean Theorem", formula: "sqrt(a^2 + b^2)", components: ["a", "b", "c"] },
    // Add more formulas
    // You dont acc need the formula attribute its just there cause im lazy and put it in there randomly
  ];
  
  // Function to search formulas by attributes
  function searchFormulasByAttribute(attribute) {
    return formulas.filter(formula => formula.components.includes(attribute));
  }
  
  // Function to display search results in HTML
function displaySearchResults() {
    let attribute = prompt("Enter the component you want to search for:");
    if (attribute) {
      let matchingFormulas = searchFormulasByAttribute(attribute.toLowerCase());
      let resultContainer = document.getElementById("searchResults");

      // Clear previous results
      resultContainer.innerHTML = "";
      
      if (matchingFormulas.length > 0) {
        matchingFormulas.forEach(formula => {
          // Create list item
          let listItem = document.createElement("li");
          
          // Create text node for formula name and append it to list item
          let nameText = document.createTextNode(formula.name);
          listItem.appendChild(nameText);
          
          // If a link is provided, create a hyperlink
          if (formula.link) {
            let link = document.createElement("a");
            link.href = formula.link;
            link.textContent = " (Link)"; //U could take out the text and add a variable here to adapt it based on whatever is found in the search since this is an object by object thing.
            listItem.appendChild(link);
          }
          
          // Append list item to the result container
          //whats a container? good question (just a thing for managing grouped stuff idrk)
          resultContainer.appendChild(listItem);
        });
      } else {
        //If ur not  dumb this shouldnt ever happen but for tests sake youll need it
        resultContainer.textContent = "No formulas found containing '" + attribute + "' component.";
      }
    } else {
      alert("No input provided. Please enter a search parameter.");
    }
  }
  
  // Call the displaySearchResults function when user clicks a button
  document.getElementById("searchButton").addEventListener("click", displaySearchResults);
