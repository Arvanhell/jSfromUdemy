'use strict';
//.

//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch) //1 click the button and...

function getFetch(){
  const choice = document.querySelector('input').value
   // 2 grab the value of the input we store that in the choice variable 
  // choice variable is in the template string $ { choice }
  // data JSON is back if we requested proper data 
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data.subclasses);
       // ALWAYS CONSOLE LOG to test connections
       //console.log(data.subclasses[0].name)
        //console.log(data.subclasses[1].name)
       data.subclasses.forEach (obj => {
        //  3 we loop trough the data 
        console.log(obj.name)
        //  4 create an li 
        const li = document.createElement('li')
        //  5 ad text to li
        li.textContent = obj.name 
        //  6 append the li to the ul fucntion appendChild(child)
        document.querySelector('ul').appendChild(li) 

      })
    })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

