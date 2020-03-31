const comments = [];
const btn = document.querySelector('#sendBtn');
const input = document.querySelector('#commentBox');

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

    function addDeleteBtn(){
        const deleteBtn = document.createElement("input");
        deleteBtn.type = "submit";
        deleteBtn.value = "Delete";
        deleteBtn.classList.add("deleteBtn");

        const id = comments.length;
        deleteBtn.addEventListener("click", function(e){
            e.preventDefault();
            const commentDiv = document.getElementById(id);
            //console.log(commentDiv);
            commentDiv.remove(comments);
            for (let i=0; i<id; i++){
                if(comments[i].id === id){
                    comments.splice(i,i)  
                }
            }
        })
        return deleteBtn;    
    }
    
    function createCommentNode(comment) {
        const containerBox = document.createElement('div');

        const mail = addTitle(comment.email);
        const p = addParagraph(comment.message);
        const image = addImage(comment.img);
        const delBtn = addDeleteBtn(comment.delBtn);
        containerBox.appendChild(image);
        containerBox.appendChild(mail);
        containerBox.appendChild(p);
        containerBox.appendChild(delBtn);
        containerBox.id = comments.length;
        containerBox.classList.add("commentArea");
        p.classList.add("textBox")
        return containerBox;
    }
  
    for (let idx = comments.length-1; idx < comments.length; idx++) {
        const comment = comments[idx]; 
        const commentNode = createCommentNode(comment);
        containerNode.appendChild(commentNode);
    }
}

btn.addEventListener('click', function(e) {
    e.preventDefault();
    comments.push({
        email: "neacsu_valentin@yahoo.ro",
        message: input.value,
        img: "",
        delBtn: "",
    });
    displayComments(comments, document.body);
})