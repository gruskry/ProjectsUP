'use strict';

function getInformation() {
    articleModel.replaceArticles().then(
        (ready) => {
            dbModel.getArrayOfArticals(0, 5).then((get) => {
                let adress = 'Item';
                const stringId = 'get-id';
                for (let j = 0; j < 5; j += 1) {
                    adress = `Item${j}`;
                    document.getElementById(stringId + j).setAttribute(stringId + j, get[j]._id);
                    document.getElementsByClassName(adress)[0].childNodes[1].textContent = get[j].createdAt.toLocaleDateString('ru', options1);
                    let newTags = ' ';
                    for (let i = 0; i < get[j].tags.length; i += 1) {
                        newTags += `#${get[j].tags[i]}`;
                    }
                    document.getElementsByClassName(adress)[0].childNodes[3].textContent = newTags;
                    document.getElementsByClassName(adress)[0].childNodes[6].textContent = get[j].title;
                }
            });
        });
}
let options1 = {
    hour: 'numeric',
    minute: 'numeric',
};

function lookItemFromBar(el) {
    dbModel.getArticleById(el._id).then((article) => {
        document.getElementById('idItem').setAttribute('idItem', article._id);
        document.querySelector('.main-page').style.display = 'none';
        document.querySelector('.full-news').style.display = 'block';
        document.querySelector('.article-item-title').textContent = article.title;
        document.querySelector('.article-title-img').setAttribute('src', article.img);
        document.querySelector('.article-item-content').textContent = article.content;
        document.querySelector('.article-item-author').textContent = article.author;
        document.querySelector('.article-item-date').textContent = article.createdAt.toLocaleDateString('ru', options);
        if (article.tags[0]) {
            document.querySelector('#article-tags-first').textContent = `#${article.tags[0]}`;
        }
        if (article.tags[1]) {
            document.querySelector('#article-tags-second').textContent = `#${article.tags[1]}`;
        }
        if (article.tags[2]) {
            document.querySelector('#article-tags-third').textContent = `#${article.tags[2]}`;
        }
        if (article.tags[3]) {
            document.querySelector('#article-tags-fourth').textContent = `#${article.tags[3]}`;
        }
        if (article.tags[4]) {
            document.querySelector('#article-tags-fifth').textContent = `#${article.tags[4]}`;
        }
    });
}
