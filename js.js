let comments = [];
const btn = document.querySelector('#sendBtn');
const input = document.querySelector('#commentBox');
const MAX_VALUE = 10000

function displayComments(comments, containerNode) {
    function addParagraph(text) {
        const newP = document.createElement("p");
        newP.innerText = text;
        return newP;
    }

    function addTitle(mail) {
        const title = document.createElement("h5");
        title.innerText = mail;
        return title;
    }

    function addImage(){
        const img = document.createElement("img");
        img.setAttribute("src","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwWESRDO5Elu6LYZjKe6F4lMNahMYmvUMoteotE6zr_b2oimSC");
        img.classList.add("image");
        return img;
    }

    function addDeleteBtn(id){
        const deleteBtn = document.createElement("input");
        deleteBtn.type = "submit";
        deleteBtn.value = "Delete";
        deleteBtn.classList.add("deleteBtn");

        deleteBtn.addEventListener("click", function(e){
            e.preventDefault();
            const commentDiv = document.getElementById(id);
            commentDiv.parentNode.removeChild(commentDiv)
            comments = comments.filter( comment => comment.id !== id)
        })

        return deleteBtn;    
    }
    
    function createCommentNode(comment) {
        const containerBox = document.createElement('div');

        const mail = addTitle(comment.email);
        const p = addParagraph(comment.message);
        const image = addImage();
        const delBtn = addDeleteBtn(comment.id);
        containerBox.appendChild(image);
        containerBox.appendChild(mail);
        containerBox.appendChild(p);
        containerBox.appendChild(delBtn);
        containerBox.id = comment.id;
        containerBox.classList.add("commentArea");
        p.classList.add("textBox")
        return containerBox;
    }
  
        for (let i =  comments.length-1; i < comments.length; i++) {
        const comment = comments[i]; 
        const commentNode = createCommentNode(comment);
        containerNode.appendChild(commentNode);
    }
}

btn.addEventListener('click', function(e) {
    e.preventDefault();
    comments.push({
        email: "neacsu_valentin@yahoo.ro",
        message: input.value,
        id: getRandomInt(),
    });
    displayComments(comments, document.body);
})

function getRandomInt() {
    return Math.floor((Math.random() * MAX_VALUE) + 1);
  }