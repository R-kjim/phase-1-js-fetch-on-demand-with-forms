const init = () => {
  const inputForm=document.querySelector("form")
  let formInput=document.querySelector("input")
  inputForm.addEventListener("submit",(event)=>{
    event.preventDefault();console.log(formInput.value)

    fetch(`http://localhost:3000/movies/${formInput.value}`)
    .then(res=>res.json())
    .then(data=>{
        const title=document.querySelector("section#movieDetails h4")
        const summary=document.querySelector("section#movieDetails p")
        title.innerText=data.title
        summary.innerText=data.summary
    },
    inputForm.reset()
)



  })
}

document.addEventListener('DOMContentLoaded', init);