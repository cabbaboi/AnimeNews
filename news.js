let collumn007 = document.getElementById('collumn007');
let collumn = document.getElementById('collumn');
let collumn00 = document.getElementById('collumn00');
let collumn0 = document.getElementById('collumn0');
let collumn1 = document.getElementById('collumn1');
let collumn2 = document.getElementById('collumn2');
let collumn3 = document.getElementById('collumn3');
let collumn4 = document.getElementById('collumn4');
let collumn5 = document.getElementById('collumn5');
let collumn6 = document.getElementById('collumn6');

// cd7bab009c4dba422b7693d995e537d4
// 7697528e901373d545763d39dc2b5146
let apiKey = '7697528e901373d545763d39dc2b5146';
// let apiKey = 'cd7bab009c4dba422b7693d995e537d4';
// ${apiKey}





// fetch("https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=%22anime%22&pageNumber=1&pageSize=23&autoCorrect=true&safeSearch=false&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "db257b185dmsh347821e2aab85b8p119874jsnfc0597d74c9b",
// 		"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);


const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function () {
// 	if (this.readyState === this.DONE) {
// 		console.log(this.responseText);
// 	}
// });

xhr.open("GET", "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=%22anime%22&pageNumber=1&pageSize=23&autoCorrect=true&safeSearch=false&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null");
xhr.setRequestHeader("x-rapidapi-key", "db257b185dmsh347821e2aab85b8p119874jsnfc0597d74c9b");
xhr.setRequestHeader("x-rapidapi-host", "contextualwebsearch-websearch-v1.p.rapidapi.com");



xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.value;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            console.log(element, index)
            let news = `
                            <div class="example-2 card">
                            <div class="wrapper" style="background-image: url(${element.image.url});">
                            <div class="header">
                                <div class="date">
                                </div>
                                <ul class="menu-content">
                                <li><a><span>${element["datePublished"]}</span></a></li>
                                </ul>
                            </div>
                            <div class="data">
                                <div class="content">
                                <span class="author">${element.provider.name}</span>
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


        collumn007.innerHTML = newsHtml;
        
        collumn.innerHTML =`<button id="button007" class="mbutton" onclick="myFunction007()">Load more...</button>`;
	    
	    
	    }
		    else {
			console.log("Some error occured")
		    }
		}

xhr.send(data)


// })
// .catch(err => {
// 	console.error(err);
// });



function myFunction007() {
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
        
        collumn00.innerHTML =`<button id="button00" class="mbutton" onclick="myFunction00()">Load more...</button>`;




    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()
}


function myFunction00() {
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnewsapi.net/api/search?q=anime&language=en&country=us&api_token=BGUsbzrxzRRxlewkRmKQ1rND9EW5O21DwiuQAI03rretcrX7zSv6eY8pWLmv`, true);

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
                            <div class="wrapper" style="background-image: url(${element["image_url"]});">
                            <div class="header">
                                <div class="date">
                                </div>
                                <ul class="menu-content">
                                <li><a><span>${element["published_datetime"]}</span></a></li>
                                </ul>
                            </div>
                            <div class="data">
                                <div class="content">
                                <span class="author">${element["source_name"]}</span>
                                <h1 class="title"><a>${element["title"]}</a></h1>
                                <div class="backdrop"><p class="text">${element["description"]}
                                </p></div>
                                <a target="_blank" href="${element['article_url']}" class="button">Read more</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        `;
            newsHtml += news;
        });


    

        collumn00.innerHTML = newsHtml;
        
        collumn0.innerHTML =`<button id="button" class="mbutton" onclick="myFunction()">Load more...</button>`;




    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()
}


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
       
        collumn0.innerHTML = newsHtml;
        collumn1.innerHTML=`<button id="button0" class="mbutton" onclick="myFunction0()">Load more...</button>`;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()
    
}    

function myFunction0() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.currentsapi.services/v1/search?keywords=anime&language=en&country=jp&apiKey=RzUh0yVak4KtwfzekN40A-RikhpaFZUfvJ67_vu5pWF6vj28`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.news;
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
                                <li><a><span>${element["published"]}</span></a></li>
                                </ul>
                            </div>
                            <div class="data">
                                <div class="content">
                                <span class="author">${element["author"]}</span>
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


