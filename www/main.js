$(document).on('keyup', '#search', function(e){
  e.preventDefault();
  let radioValue = $('input[name=inlineRadioOptions]:checked').val();
  let value = $('#search').val();
  $.getJSON(`/books/${radioValue}/${value}`, (books) => {
    $('#showJson').empty();
    for(let book of books){
      $('#showJson').append(`
        <div class="border-bottom border-dark mt-3">
          <p><b>Titel:</b> ${book.title}.</p>
          <p><b>Författare:</b> ${book.author}.</p>
          <p><b>Land:</b> ${book.country}.</p>
          <p><b>Språk:</b> ${book.language}.</p>
          <p><b>År:</b> ${book.year}.</p>
          <p><b>Sidor:</b> ${book.pages}.</p>
        </div>
        `);
    }
  });
});
