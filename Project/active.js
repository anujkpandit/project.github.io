const active=window.location.index;
const nav=document.querySelectorAll('nav a').forEach(link => {
    if(link.href.includes('${active}')){link.classList.add('active');
}
})
myWindow=window.about('/about.html','','width=400,height=250')
		//myWindow.document.write("<p>This is 'myWindow'</p>")
		myWindow.focus()
        const basicAutocomplete = document.querySelector('#search-autocomplete');
const data = ['Joint Pain', 'Stiffness', 'Swelling', 'Diarrhea', 'Vomoting', 'Thirst', 'Leg Cramps', 'Restlessness', 'Anxiety', 'Brain Death', 'Coma', 'Difficulty Swallowing'];
const dataFilter = (value) => {
  return data.filter((item) => {
    return item.toLowerCase().startsWith(value.toLowerCase());
  });
};

new mdb.Autocomplete(basicAutocomplete, {
  filter: dataFilter
});
document.addEventListener('DOMContentLoaded', e => {
    $('#input-datalist').autocomplete()
}, false);
$('select[multiple]').multiselect();
(function($){
    $(".keyword").on('keyup', function(e) {
      var $this = $(this);
      var exp = new RegExp($this.val(), 'i');
      $(".addto-playlists li label").each(function() {
        var $self = $(this);
        if(!exp.test($self.text())) {
          $self.parent().hide();
        } else {
          $self.parent().show();
        }
      });
    });
  })(jQuery);
  function validate() {
    let x = document.forms["myform"]["1","2","3"].value;
    if (x == "1", "2", "3") {
      alert("Cholera");
      return false;
    }
  }
  