var journal = document.getElementById('journal')

$.ajax({
  url: 'https://shamdasani-journal.herokuapp.com/',
  dataType: 'json',
  timeout: 150000,
  success: function(data) {
    var numberOfEntries = Object.keys(data.entries).length - 1

    for (var i = numberOfEntries; i > 0; i--) {
      var date = data.entries[i].JournalEntry.date.toString().slice(0, 10)
      var title = data.entries[i].JournalEntry.title
      var entry = data.entries[i].JournalEntry.entry

      journal.innerHTML +=
        '<div class="tr">' +
        date +
        '</div>' +
        title +
        "<p class='measure lh-copy' style='white-space: pre-line;'>" +
        entry +
        '</p><br><br>'
    }
  }
})
