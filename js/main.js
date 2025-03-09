// // user can enter text and click a button 
    // add eventlistener calls addToList()
    
    document.querySelector('#addToDo').addEventListener('click', addToList);

// function addToList
function addToList(){
    // get the text from input
    let text = document.querySelector('#createToDo');
    let list = document.querySelector('#toDo');
    // create li
    const newToDo = document.createElement("li");
    // add text to li
    newToDo.appendChild(document.createTextNode(`${text.value}`));
    list.appendChild(newToDo);
    // nb: create ul in html
    // clear input
    document.querySelector('#createToDo').value = '' 
    // user text added to list
    // user can see a list of all the things they added
}