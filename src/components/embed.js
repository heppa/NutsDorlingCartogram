function generateEmbedContent (sourceURL) {
    $('#embed-content').html('<div class="embed-code"><code>&lt;iframe frameborder="0" height="600px" scrolling="no" width="100%" src="' + sourceURL + '"&gt;&lt;/iframe&gt;</code></div>')
  
    hideSuccessMessage()
    hideErrorMessage()
  }
  
  async function copyUrlToClipboard (url) {
    try {
      let copyCode = `<iframe frameborder="0" height="600px" scrolling="no" width="100%" src="${url}"></iframe>`
      await navigator.clipboard.writeText(copyCode)
      displaySuccessMessage()
    } catch (error) {
      displayErrorMessage()
    }
  }
  
  function displaySuccessMessage () {
    $('#embed-success-notification').css('visibility', 'visible')
  }
  
  function displayErrorMessage () {
    $('#embed-error-notification').css('display', 'flex')
    $('#embed-success-notification').css('display', 'none')
    $('#embed-error-notification').css('visibility', 'visible')
  }
  
  function hideSuccessMessage () {
    $('#embed-success-notification').css('visibility', 'hidden')
  }
  
  function hideErrorMessage () {
    $('#embed-error-notification').css('visibility', 'hidden')
    $('#embed-error-notification').css('display', 'none')
  }
  
  export {
    generateEmbedContent,
    copyUrlToClipboard
  }
  