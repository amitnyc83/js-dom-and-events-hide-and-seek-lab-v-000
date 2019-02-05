
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').getElementsByClassName('target')[0]
}


function deepestChild(){
  let parent = document.getElementById('grand-node').querySelectorAll('div');
  let child;
  for (let i = 0; i < parent.length; i++){
     child = parent[i];
  }
  return child;
}

function increaseRankBy(n){
  const ranked = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < ranked.length; i++){
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n;
  }
}
