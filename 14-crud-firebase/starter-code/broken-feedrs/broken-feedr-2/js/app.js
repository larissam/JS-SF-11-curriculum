/*
  Please add all Javascript code to this file.
*/

$("#source1").on("click", function() {
  const url = "https://newsapi.org/v2/top-headlines";
  $.get(
    url,
    {
      country: "us",
      apiKey: ""
    },
    function(response) {
      console.log("response: ", response);
      const articles = response;

      // for every article, create an HTML element with click handler
      // that will show the popup with that article's information
      for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        const template = `
          <article class="article">
            <section class="featuredImage">
              <img src="${article.urlToImage || ""}" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>${article.title}</h3></a>
                <h6>${article.source.name}</h6>
            </section>
            <div class="clearfix"></div>
          </article>
        `;

        const $article = $(template);
        $article.on("click", function() {
          // show the popup
          $("#popUp h1").text(article.title);
          $("#popUp p").text(article.description);
          $("#popUp .popUpAction").attr("href", article.url);
          $("#popUp").removeClass("hidden");
        });

        $("#main").append($article);
      }
    }
  );
});

$(".closePopUp").on("click", function() {
  $("#popUp").addClass("hidden");
});
