const gotem = (options = {}) => {
  // throw if no target or no trigger
  if (!options.target || !options.trigger) {
    throw new Error('gotem: target and trigger parameters are required.')
  }

  const handle = event => {
    // prevent default link behavior
    // note that tagName returns in uppercase
    if (event.target.tagName === 'A') {
      event.preventDefault()
    }

    // create range, and select target node contents
    const range = document.createRange()
    range.selectNodeContents(options.target)

    // remove existing selections, then add the new one
    const selection = window.getSelection()
    selection.removeAllRanges()
    selection.addRange(range)

    // execute the copy command
    const executed = document.execCommand('copy')

    // based on if the command executed
    // check if the appropriate callback exists, and if it does, call it
    if (executed) {
      options.success && options.success()
    } else {
      options.error && options.error()
    }
  }

  // bind the click handler to the trigger node
  options.trigger.addEventListener('click', handle)
}

export default gotem
