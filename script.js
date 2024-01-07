// function saveLead(){
//     console.log("button clicked from onclick attribute")

// }

let myLeads=[]
let oldleads=[]

// myLeads= JSON.parse(myLeads) // turns string to array
// myLeads.push("gautam")

// myLeads= JSON.stringify(myLeads)  // array to string


// console.log(typeof myLeads)


const inputBtn= document.getElementById("input-btn")
const inputEl= document.getElementById("input-el") //const cannot be reassigned
const ulEl= document.getElementById("ul-el")
const deleteBtn= document.getElementById("delete-btn")
const tabBtn= document.getElementById("tab-btn")


// glimpse to a local storage----- local storage always supports string

// localStorage.setItem("myLeads", "www.example.com")
// let mee = localStorage.getItem("myLeads")
// console.log (mee)

// localStorage.clear()


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// console.log(leadsFromLocalStorage)

// stores the data even if refreshed 
if (leadsFromLocalStorage){
    myLeads= leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url : "https://www.linkedin.com/in/deepanshi-gautam-754532278/"}
// ]

tabBtn.addEventListener("click", function(){
    

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        
        myLeads.push(tabs[0].url)

        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    
      });
    
    

})





deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})


inputBtn.addEventListener("click", function(){

    // myLeads.push("www.awesomelead.com")
    myLeads.push(inputEl.value)

    // clear the input field 
    inputEl.value=""

    //save mylead array to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    
    // console.log(myLeads)

    render(myLeads)


    console.log(localStorage.getItem("myLeads"))


})
function render(leads){
    let listItems=""
for (let i =0; i<leads.length; i++){
    // ulEl.innerHTML+= "<li>" + myLeads[i] + "</li>"
   
    // listItems+= "<li> <a href='"+ myLeads[i] +"' target='_blank'>" + myLeads[i] + "</a></li>"
    listItems+= `<li>
     <a href='${leads[i] }' target='_blank'>
     ${leads[i] }
      </a>
    </li>`
//method-2
    //    const li = document.createElement("li")
    //    li.textContent = myLeads[i]
    //    ulEl.append(li)
}

ulEl.innerHTML= listItems

}




