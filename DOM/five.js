console.log("hitesh")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//we get buttons k node list
buttons.forEach(function (button) {//for-each loop have call-back function
  console.log(button);
  //addEventListner ---> event ko sunne wala bhi toh chahiye
  //click event
  //e - event ka object
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);//event aa kha s rha h
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;//e.target.id k andhar bhi gray h
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
}); 