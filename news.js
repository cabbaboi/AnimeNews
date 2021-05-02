let collumn = document.getElementById('collumn');
let collumn1 = document.getElementById('collumn1');
let collumn2 = document.getElementById('collumn2');
let collumn3 = document.getElementById('collumn3');
let collumn4 = document.getElementById('collumn4');
let collumn5 = document.getElementById('collumn5');
let collumn6 = document.getElementById('collumn6');

// cd7bab009c4dba422b7693d995e537d4
// 7697528e901373d545763d39dc2b5146
// let apiKey = '7697528e901373d545763d39dc2b5146';
let apiKey = 'cd7bab009c4dba422b7693d995e537d4';
// ${apiKey}
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=anime&lang=en&country=us&token=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            console.log(element, index)
            let news = `
                            <div class="example-2 card">
                            <div class="wrapper" style="background-image: url(${element["image"]});">
                            <div class="header">
                                <div class="date">
                                </div>
                                <ul class="menu-content">
                                <li><a><span>${element["publishedAt"]}</span></a></li>
                                </ul>
                            </div>
                            <div class="data">
                                <div class="content">
                                <span class="author">${element.source.name}</span>
                                <h1 class="title"><a>${element["title"]}</a></h1>
                                <div class="backdrop"><p class="text">${element["description"]}
                                </p></div>
                                <a target="_blank" href="${element['url']}" class="button">Read more</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        `;
            newsHtml += news;
        });
        collumn.innerHTML = newsHtml;
        document.getElementById('button').innerHTML="Load more...";
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

function myFunction() {
    const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=anime&lang=en&country=au&token=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            console.log(element, index)
            let news = `
                            <div class="example-2 card">
                            <div class="wrapper" style="background-image: url(${element["image"]});">
                            <div class="header">
                                <div class="date">
                                </div>
                                <ul class="menu-content">
                                <li><a><span>${element["publishedAt"]}</span></a></li>
                                </ul>
                            </div>
                            <div class="data">
                                <div class="content">
                                <span class="author">${element.source.name}</span>
                                <h1 class="title"><a>${element["title"]}</a></h1>
                                <div class="backdrop"><p class="text">${element["description"]}
                                </p></div>
                                <a target="_blank" href="${element['url']}" class="button">Read more</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        `;
            newsHtml += news;
        });
        collumn1.innerHTML = newsHtml;
        collumn2.innerHTML=`<button id="button1" class="mbutton" onclick="myFunction1()">Load more...</button>`;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

  }



  function myFunction1() {
    const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=anime&lang=en&country=in&token=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            console.log(element, index)
            let news = `
                            <div class="example-2 card">
                            <div class="wrapper" style="background-image: url(${element["image"]});">
                            <div class="header">
                                <div class="date">
                                </div>
                                <ul class="menu-content">
                                <li><a><span>${element["publishedAt"]}</span></a></li>
                                </ul>
                            </div>
                            <div class="data">
                                <div class="content">
                                <span class="author">${element.source.name}</span>
                                <h1 class="title"><a>${element["title"]}</a></h1>
                                <div class="backdrop"><p class="text">${element["description"]}
                                </p></div>
                                <a target="_blank" href="${element['url']}" class="button">Read more</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        `;
            newsHtml += news;
        });
        collumn2.innerHTML = newsHtml;
        collumn3.innerHTML=`<button id="button2" class="mbutton" onclick="myFunction2()">Load more...</button>`;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

  }

  function myFunction2() {
    const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=anime&lang=en&country=sg&token=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            console.log(element, index)
            let news = `
                            <div class="example-2 card">
                            <div class="wrapper" style="background-image: url(${element["image"]});">
                            <div class="header">
                                <div class="date">
                                </div>
                                <ul class="menu-content">
                                <li><a><span>${element["publishedAt"]}</span></a></li>
                                </ul>
                            </div>
                            <div class="data">
                                <div class="content">
                                <span class="author">${element.source.name}</span>
                                <h1 class="title"><a>${element["title"]}</a></h1>
                                <div class="backdrop"><p class="text">${element["description"]}
                                </p></div>
                                <a target="_blank" href="${element['url']}" class="button">Read more</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        `;
            newsHtml += news;
        });
        collumn3.innerHTML = newsHtml;
        collumn4.innerHTML=`<button id="button3" class="mbutton" onclick="myFunction3()">Load more...</button>`;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

  }  


  function myFunction3() {
    const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=anime&lang=en&country=gb&token=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            console.log(element, index)
            let news = `
                            <div class="example-2 card">
                            <div class="wrapper" style="background-image: url(${element["image"]});">
                            <div class="header">
                                <div class="date">
                                </div>
                                <ul class="menu-content">
                                <li><a><span>${element["publishedAt"]}</span></a></li>
                                </ul>
                            </div>
                            <div class="data">
                                <div class="content">
                                <span class="author">${element.source.name}</span>
                                <h1 class="title"><a>${element["title"]}</a></h1>
                                <div class="backdrop"><p class="text">${element["description"]}
                                </p></div>
                                <a target="_blank" href="${element['url']}" class="button">Read more</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        `;
            newsHtml += news;
        });
        collumn4.innerHTML = newsHtml;
        collumn5.innerHTML=`<button id="button4" class="mbutton" onclick="myFunction4()">Load more...</button>`;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

  }  


  function myFunction4() {
    const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=anime&lang=en&country=ph&token=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            console.log(element, index)
            let news = `
                            <div class="example-2 card">
                            <div class="wrapper" style="background-image: url(${element["image"]});">
                            <div class="header">
                                <div class="date">
                                </div>
                                <ul class="menu-content">
                                <li><a><span>${element["publishedAt"]}</span></a></li>
                                </ul>
                            </div>
                            <div class="data">
                                <div class="content">
                                <span class="author">${element.source.name}</span>
                                <h1 class="title"><a>${element["title"]}</a></h1>
                                <div class="backdrop"><p class="text">${element["description"]}
                                </p></div>
                                <a target="_blank" href="${element['url']}" class="button">Read more</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        `;
            newsHtml += news;
        });
        collumn5.innerHTML = newsHtml;
//         collumn6.innerHTML=`<button id="button5" class="mbutton" onclick="myFunction5()">Load more...</button>`;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

  }  
