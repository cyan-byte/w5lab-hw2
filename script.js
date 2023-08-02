const mainEl = document.querySelector('main'); // selects the main element
// Get the parent element where links will be added
const topMenuEl = document.querySelector('#top-menu');
// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
const subMenuEl = document.querySelector('#sub-menu');
// 5.1
const topMenuLinks = topMenuEl.querySelectorAll('a');
const showingSubMenu = false;
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = '#0e9aa7';
topMenuEl.classList.add('flex-around');
mainEl.style.backgroundColor = '#4a4e4d';
mainEl.textContent = 'SEI Rocks!';
mainEl.classList.add('flex-ctr');
// Task 4.1
// Set the height subMenuElelement to be 100%.
subMenuEl.style.height = '100%';
// Task 4.2
// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = '#3da4ab';
// Task 4.3
// Add the class of flex-aroundto the subMenuElelement.
subMenuEl.classList.add('flex-around');
// Task 4.4
// Set the CSS positionproperty of subMenuElto the value of absolute.
subMenuEl.style.position = 'absolute';

// Task 4.5
// Set the CSS topproperty of subMenuElto the value of 0.
subMenuEl.style.top = '0';

// Task 5.0
// Update the menuLinksarray in script.js to this:
// ^^^ Done
// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
// Declare a global showingSubMenu variable and initialize it to false;
// see 5.1 on top of file
// Task 5.2
// Attach a delegated 'click' event listener to topMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault()method.
topMenuEl.addEventListener('click', function(evt) {
  // The first line of code of the event listener function should call the event object's preventDefault()method.
    evt.preventDefault(); // Prevents the default behavior of link clicks
// The second line of code function should immediately return if the element clicked was not an <a>element.
  if(evt.target.tagName !== 'A') // capitalized bc the tagName property returns the tag name of the element in uppercase letters.{
    return;
    // console.log the content of the <a>to verify the handler is working.
const linkContent = evt.target.textContent; // Get the text content of the clicked <a> element
console.log(linkContent); // Log the content of the <a> element to the console... this goes inside the fn block

//   Task 5.3
// Next in the event listener, if the clicked <a>link has a class of active:

// Remove the active class from the clicked <a> element.
// Set the showingSubMenu to false.
// Set the CSS top property of subMenuElto 0.
// return to exit the handler.
 if(evt.target.tagName == 'A'){
  evt.target.classList.remove('active');
  showingSubMenu = false;
  subMenuEl.style.top = '0';
  return;
 }
 // Task 5.4
  // Next, the event listener should remove a class name of active from each <a>element in topMenuLinks- whether the activeclass exists or not.
  // Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
 else if(evt.target.tagName == 'A'){
  evt.target.classList.remove('active');
 }
//  Task 5.5
// Next, the event listener should add a class name of active to the <a>element that was clicked.
else if (evt.target.classList == 'active'){
  evt.target.classList.add("active");
}
// Task 5.6
// Set showingSubMenu to true if the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), otherwise, set it to false.

// Hint: Saving the "link" object in a variable will come in handy for passing its subLinks array in Task 5.7
// const linkObj = evt.target.textContent.toLowerCase();
// else if (evt.target.classList == 'A' ){
//   showingSubMenu = true;
//   subMenuEl.style.top = '0';
// }
// ^^ ??? (5.6)
// Task 5.7
// Next in the event listener...

// If showingSubMenu is true:

// Call a buildSubMenu function passing to it the subLinks array for the clicked <a> element.
// Set the CSS top property of subMenuEl to 100%.
// Otherwise (showingSubMenu is false):
// Set the CSS topproperty of subMenuElto 0.
else if (showingSubMenu == true){
  buildSubMenu();
  subMenuEl.style.top = '100%';
}
else if (showingSubMenu == false){
  subMenuEl.style.top = '0';
}
});

// Task 5.8
// Code the buildSubMenu function so that it:
function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = '';
}
// Clears the contents of subMenuEl.
// Iterates over the subLinksarray passed as an argument; and for each "link" object:

// Create an <a>element.
// On the new element, add an href attribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the subMenuElelement.
// Progress Check
// Take the menu for a test drive!


// Task 6.0
// Attach a delegated 'click' event listener to subMenuEl.

// The first line of code of the event listener function should call the event object's preventDefault()method.

// The second line of code function should immediately return if the element clicked was not an <a>element.

// console.logthe content of the <a>to verify the handler is working.

// Task 6.1
// Next, the event listener should:

// Set showingSubMenuto false.
// Set the CSS topproperty of subMenuElto 0.
// Task 6.2
// Remove the class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.

// Task 6.3
// Update the contents of mainElto the contents of the <a>element, within an <h1>, clicked within subMenuEl.

// Task 6.4
// If the ABOUT link is clicked, an <h1>about</h1>should be displayed.

// Congrats!

 


// Menu data structure
let menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];
// Iterate over the menuLinks array
for (let i = 0; i < menuLinks.length; i++) {
  const menulink = menuLinks[i]; // menulink (singular) holds the individual objects from the 'menuLinks' array during the iteration
// Create an <a>element.
  const aEl = document.createElement('a')
// Set the 'text' property as the content of the 'a' element
  aEl.textContent = menulink.text;
// Set the 'href' attribute as the value of the 'href' property
  aEl.setAttribute('href', menulink.href);

// Append the 'a' element to the parent element
topMenuEl.appendChild(aEl);


}