$('.button--submit').on('click', function(){
    $.ajax({
        url : 'http://www.omdbapi.com/?apikey=2d7893de&s=' + $('.input').val(),
        success : results => {
            const movies = results.Search;
            let cards = '';
            movies.forEach(m => {
                cards += `<div class="col md-4 my-3">
                                <div class="card" style="width: 18rem;">
                                    <img src="${m.Poster}" class="card-img-top">
                                    <div class="card-body">
                                    <h5 class="card-title">${m.Title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                                    <a href="#" class="btn btn-primary">Details</a>
                                    </div>
                                </div>
                            </div>`;
            });
            $('.output').html(cards);
            const a = $('.input').val();
            $('.film').html(a);
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
})

