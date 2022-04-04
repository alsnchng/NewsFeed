console.log('it works')

$.get('https://news.wwworkshop.org/everything?q=apple', function (data){
	data.articles. forEach((article) => {
		$('.articles-feed').append(`
			 <article class="article">
              <div class="article-img">
              <img src="${article.urlToImage}" alt="">
              </div>

             <header> 
              <h1 class="article-title">${article.title}</h1>
              <h2 class="article-author">${article.author}</h2>
              <h3 class="article-source">${article.source.content}</h3>
             </header>

             <div class="content">
               <p>${article.content}</p>
             </div>

             <a href="${article.url}" target="_blank" class="article-url">→ READ MORE</a>
             </article>
             `)
	})
})