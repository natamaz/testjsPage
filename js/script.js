// 'use strict';
//
// function titleClickHandler(event){
//     event.preventDefault();
//     const clickedElement = this;
//     console.log('Link was clicked!');
//     /* remove class 'active' from all article links  */
//     const activeLinks = document.querySelectorAll('.titles a.active');
//     for(let activeLink of activeLinks){
//         activeLink.classList.remove('active');
//     }
//
//     /* remove class 'active' from all articles */
//     const activeArticles = document.querySelectorAll('.post.active');
//     for(let activeArticle of activeArticles){
//         activeArticle.classList.remove('active');
//     }
//
//
//     /* add class 'active' to the clicked link */
//     this.classList.add('active');
//
//     /* get 'href' attribute from the clicked link */
//     const  articleSelector = clickedElement.getAttribute('href');
//     console.log(articleSelector)
//
//     /* find the correct article using the selector (value of 'href' attribute) */
//     const targetArticle = document.querySelector(articleSelector)
//     console.log(targetArticle)
//
//     /* add class 'active' to the correct article */
//     document.querySelector(articleSelector).classList.add('active');
// }
//
// const links = document.querySelectorAll('.titles a');
//
// for(let link of links){
//     link.addEventListener('click', titleClickHandler);
// }
//
// const opt = {
//     ArticleSelector: '.post',
//     TitleSelector:  '.post-title',
//     TitleListSelector: '.titles',
// };
//
// function generateTitleLinks(){
//
//     /* remove contents of titleList */
//     const titleList = document.querySelector(opt.TitleListSelector);
//     titleList.innerHTML = '';
//     /* for each article */
//     const articles = document.querySelectorAll(opt.ArticleSelector);
//     let html = '';
//     for(let article of articles){
//         /* get the article id */
//         const articleId = document.getElementById('id')
//
//         /* find the title element */
//         const articleTitle = article.querySelector(opt.TitleSelector).innerHTML;
//
//         /* get the title from the title element */
//         const titleLink = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
//         console.log(titleLink);
//
//         /* create HTML of the link */
//         titleList.innerHTML = titleList.innerHTML + titleLink;
//
//         /* insert link into titleList */
//         html = html + titleLink;
//     }
//     titleList.innerHTML = html;
//
//
//
// }
//
// generateTitleLinks();
//
//
//
//
//
'use strict';

function titleClickHandler(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for(let activeLink of activeLinks){
        activeLink.classList.remove('active');
    }

    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.post.active');
    for(let activeArticle of activeArticles){
        activeArticle.classList.remove('active');
    }


    /* add class 'active' to the clicked link */
    this.classList.add('active');

    /* get 'href' attribute from the clicked link */
    const  articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector)

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector)
    console.log(targetArticle)

    /* add class 'active' to the correct article */
    document.querySelector(articleSelector).classList.add('active');
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', titleClickHandler);
}