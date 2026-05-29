//isme hmm log input k andhar s value nikal rhe h
const form = document.querySelector('form');
//yha sbse phle hmme form ko select krna pdega kyoki yha p click wala event nhi h, submit wala event h
//form jb bhi submit hota h toh get ya post type s submit hota h, toh hmm yha p default action form ka rok denge, kyoki hmme server pr nhi bhejna
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); // to stop default action, submit waale action ko stop krne k liye

  const height = parseInt(document.querySelector('#height').value);//.value s input s value mil jayegi,height k value mil jayegi
  //but yeh string m milegi isse convert krna pdega
  //agr hmm yhe form k bhr likhenge toh hmme empty value milegi,but hmm submit krne k bdd values ko extract krna chahte h
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result, to add the value  
    results.innerHTML = `<span>${bmi}</span>`;
  }
});

