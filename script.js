
function display(data){

// object one data
 const objectOneCatogery = data[0].category;
 const objectOneScore    = data[0].score;

 // object Two data
 const objectTwoCatogery = data[1].category;
 const objectTwoScore    = data[1].score;

 
 // object Three data
 const objectThreeCatogery = data[2].category;
 const objectThreeScore    = data[2].score;

  // object Four data
  const objectFourCatogery = data[3].category;
  const objectFourScore    = data[3].score;

  document.getElementById("row1Text1").innerHTML = objectOneCatogery;
  document.getElementById("row1Text2").innerHTML = objectOneScore;

  document.getElementById("row2Text1").innerHTML = objectTwoCatogery;
  document.getElementById("row2Text2").innerHTML = objectTwoScore;

  document.getElementById("row3Text1").innerHTML = objectThreeCatogery;
  document.getElementById("row3Text2").innerHTML = objectThreeScore;
  
  document.getElementById("row4Text1").innerHTML = objectFourCatogery;
  document.getElementById("row4Text2").innerHTML = objectFourScore;
 

};


// var request = new XMLHttpRequest();
// request.onreadystatechange = function(){
//  if(request.readyState==4&&request.status==200){
//     display(JSON.parse(request.responseText));
//  }
// };


// request.open("GET", "data.json");
// request.send();

fetch('data.json')
  .then(response => response.json())
  .then(data => display(data));