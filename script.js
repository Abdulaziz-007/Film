let elForm = document.querySelector('form')
let elInput = elForm.querySelector('input')
let elImg = document.querySelector('img')
let elDiv = document.querySelector('.gl')
let elDivHl = document.querySelector('.hl')
// let elBtn = document.querySelector('button')

elForm.addEventListener('submit' , function(evt){
        evt.preventDefault()
        
        fetch(`https://omdbapi.com/?apikey=8a2182c3&s=%27${elInput.value}%27`).then(function(info){
            if(!info.ok){
                throw new Error('error') 
            }
            return info.json()}).then(function(film){
                for (let index = 0; index < film.Search.length; index++) {
                    let ceDiv = document.createElement('div')
                    let ceImg = document.createElement('img')
                    let ceH2 = document.createElement('h2')
                    let ceP1 = document.createElement('p')
                    let ceP2 = document.createElement('p')
                    ceImg.setAttribute('src',film.Search[index].Poster)
                    ceImg.setAttribute('alt','poster')
                    ceDiv.setAttribute('class','container')
                    elDivHl.appendChild(ceDiv)
                    ceDiv.appendChild(ceImg)
                    ceDiv.appendChild(ceH2)
                    ceDiv.appendChild(ceP1)
                    ceDiv.appendChild(ceP2)
                    ceH2.textContent = film.Search[index].Title
                    ceP1.textContent = film.Search[index].Type
                    ceP2.textContent = film.Search[index].Year
            }
        });
        elInput.value = ''
});
// elBtn.addEventListener('click',function(){
//     elDivHl.style.display = 'none'
// });
