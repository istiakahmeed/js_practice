document.getElementById('get_data').addEventListener('click',loadData)


function loadData(){
   let xhr = new XMLHttpRequest()
   

xhr.open('Get','http://api.icndb.com/jokes/random',true);
xhr.onload = function(){
  if(this.status === 200){
    // console.log(this.responseText)
    document.getElementById('output').innerHTML=`<h5/>${this.responseText}<h5/>`
  }
}

xhr.send();
// console.log(xhr);
}