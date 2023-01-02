// recuperer ce qui est ecrit
let clique = document.querySelector(".sButton");
let taskHtml = document.querySelector("#taskHtml");
const input = document.querySelector("input");

const arr = [];

// var count = 0;

// stockage

// On app load, get all tasks from localStorage


// function principale

function addTask(txt) {
  const form = document.querySelector("#listTask");
  const container = document.createElement("div");
  container.classList = "newDiv";

  const textContainer = document.createElement("div");
  textContainer.classList = "elementbleu";
    textContainer.textContent = txt;
  
  const containerButton = document.createElement("div");
  containerButton.classList = "divButton";
  
  const close = document.createElement("img");
    close.src = "../media/delet.png";
    close.className = "sButton";
    close.className = "deletJustify";

  close.addEventListener("click", function () {
    //on supprime l'element de la liste (pas utile ici mais ça peut l'etre)
    const index = arr.indexOf(txt);
    arr.splice(index, 1);
    console.log(arr);

    //on supprime l'element du dom
    container.remove();
  });

    const done = document.createElement("img");
    done.src = "../media/done.png";
    done.className = "sButton";
    done.className = "doneJustify";
    
    done.addEventListener("click", function () {
        textContainer.style.textDecoration = "line-through";
      });
  form.appendChild(container);
  container.appendChild(textContainer);
  container.appendChild(containerButton);

  
  containerButton.appendChild(done);
  containerButton.appendChild(close);

   document.body.appendChild(form);
/*     if (count != 0) 
    {
        container.id = "borderTop"; 
    }
  count++;*/
}

for (const todo of arr) {
  addTask(todo);
}
input.addEventListener("keydown", function (event) {
  const value = input.value;
  if (event.isComposing || event.keyCode === 13) {
    if (input.value === "") alert("rien n'est saisie");
    else {
      arr.push(value);
      addTask(value);

      input.value = "";
    }
  }
});

clique.addEventListener("click", getText, false);
function getText() {
  const value = input.value;

  if (input.value === "") alert("rien n'est saisie");
  else {
    arr.push(value);
    addTask(value);

    input.value = "";
    }

}
