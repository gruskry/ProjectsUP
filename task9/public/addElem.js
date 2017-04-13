
function showAddPage() {
    document.querySelector(".main-page").style.display = "none";
    document.querySelector(".block-add-news").style.display = "inline-block";
}

function addItem() {
    var newId = 0;
    while(articleModel.isArticle(newId) != -1)
    {
         newId = randomId(0,100);
    }
    var head = document.blockAddItem.head.value;
    var message = document.blockAddItem.message.value;
    var tags = document.blockAddItem.tags.value;
    var image = document.blockAddItem.image.value;
    var newTags = tags.split(' ');
    var authorName = localStorage.getItem("username");
    dbModel.addArtical({
        id: newId,
        title: head,
        summary: message,
        createdAt: new Date(),
        author: authorName,
        content: message,
        img: image,
        tags : newTags
    });
    alert("Новость добавлена в ленту!");
    document.querySelector(".main-page").style.display = "inline-block";
    document.querySelector(".edit-news").style.display = "none";
    document.querySelector(".full-news").style.display = "none";
    document.querySelector(".block-add-news").style.display = "none";
    document.querySelector(".in").style.display = "none";
    startApp();
    addUserUI();
}
    function randomId(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


