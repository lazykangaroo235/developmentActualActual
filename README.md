# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal of the application is to determine the characterstics that align the 
most with your zodiac symbol. You can add or subtract zodiac characters from 
your team and see the average placement for all the zodiac characters. You 
can also filter by element or by yin/yang affiliation.  

### Link to your deployed web application running online

### Explain the organization of your Components, and the props and state related to them
I have a ZodiacItem component which has all the zodiac items that can be
mapped onto the project. Within the ZodiacItem, I have a button component.
Within this button component I use states to change the button text each time as 
you cannot add more than of each zodiac onto your team. For
the filter and sorting, I use a dropdown component which has all three dropdowns
 and within the dropdown I use eventKeys which are in App.js that are set to the
  values of what the filter and sort are on. Within App.js, I use states to set 
  those values of type, element and sort. I also kept track of total placement
   and divded that with cart.length to determine the average placement for all
    the animals within the zodiac. Within the dropdown, I gave it the set type
     and element and sort props so that they can call the set functions. Within 
     the Zodiac item, I give all the item's details as the props so it can be 
     displayed.
### Note the usability principles considered for layout and hierarchy
I have a top down approach for usability where I make sure that the valuable 
items are at the top of the layout and there is good hierachy because you can
 sort and filter from the top.