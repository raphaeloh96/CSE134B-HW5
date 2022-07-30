const postBtn = document.getElementById("postBtn");
const putBtn = document.getElementById("putBtn");
const getBtn = document.getElementById("getBtn");
const deleteBtn = document.getElementById("deleteBtn");

const getArticles = async (event) => {
  event.preventDefault();
  const data = await fetch('https://httpbin.org/get', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const articles = await data.json();
  const ul = document.createElement("ul");
  ul.setAttribute("id", "list");
  const postList = document.createElement("li");
  postList.innerHTML = `Record Id: ${articles.recordId}, Article Name: ${articles.articleName}, Date: ${articles.articleDate}, Summary: ${articles.articleBody}`;
  postList.setAttribute("id", articles.recordId);
}

const postArticle = (event) =>{
  event.preventDefault();
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);  
  document.getElementById("date").innerHTML = `Date: ${today.toLocaleString()}`;

  const article = {
    recordId: '',
    articleName: '',
    articleBody: '',
    articleDate: today.toLocaleString()
  }

  article.recordId = document.getElementById("recordId").value;
  article.articleName = document.getElementById("artName").value;
  article.articleBody = document.getElementById("artBody").value;
  fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
}

const putArticle = () =>{
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);  
  document.getElementById("date").innerHTML = `Date: ${today.toLocaleString()}`;

  const article = {
    recordId: '',
    articleName: '',
    articleBody: '',
    articleDate: today.toLocaleString()
  }

  article.recordId = document.getElementById("recordId").value;
  article.articleName = document.getElementById("artName").value;
  article.articleBody = document.getElementById("artBody").value;
  fetch('https://httpbin.org/put', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(article),
  });
}

const deleteArticle = () =>
  fetch(`https://httpbin.org/delete`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });


postBtn.addEventListener("click", postArticle);
getBtn.addEventListener("click", getArticles);
putBtn.addEventListener("click", putArticle);
deleteBtn.addEventListener("click", deleteArticle);