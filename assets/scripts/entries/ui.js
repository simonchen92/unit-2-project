'use strict'
const store = require('../store.js')
const showEntriesTemplate = require('../templates/entry-listing.handlebars')

const onCreateEntrySuccess = (responseData) => {
  console.log('on Create Entry Success is a Sucess')
  // we want to store created entry into  responseData
  store.entryCreate = responseData.entry
  $('#content-message').text('New Entry Successfully Created!')
  $('#content-message').addClass('success-message')
  $('#content-message').removeClass('error-message')
  $('#create-entry-form').trigger('reset')
  $('#content').hide()
  // below function clears the successful content message
  setTimeout(() => $('#content-message').text(''), 2000)

  // ---- use the below jQuery if needed -----
  // below function empty all elements it is being called on
  // $('.box').empty()
  // $('.container').show()
  // $('.box').height($('.box').width())
}

const onGetEntriesSuccess = (responseData) => {
  console.log('on Get Entries Success is Successful')
  const showEntriesHtml = showEntriesTemplate({ entries: responseData.entries })
  $('#content').html(showEntriesHtml)
  $('#content').show()
}

const onUpdateEntrySuccess = responseData => {
  console.log('on Update Entry is Successful')
  // console.log(responseData)
  $('.update-form').trigger('reset')
  $('#create-entry-form').trigger('reset')
}

const clearEntries = () => {
  $('#content').empty()
}

const failure = () => {
  $('#content-message').text('Something went wrong! Please try again!')
  $('#content-message').addClass('error-message')
  $('#content-message').removeClass('success-message')
  // setTimeout(() => $('#message').text(''), 2000)
}

module.exports = {
  onCreateEntrySuccess,
  onGetEntriesSuccess,
  onUpdateEntrySuccess,
  clearEntries,
  failure
}
