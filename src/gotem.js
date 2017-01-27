const gotem = target => new Promise((resolve, reject) => {
  // create range, and select targets content
  const range = document.createRange()
  range.selectNodeContents(target)

  // remove existing selections, then add the new one
  const selection = window.getSelection()
  selection.removeAllRanges()
  selection.addRange(range)

  // execute the copy command
  const success = document.execCommand('copy')

  // return based on the result of trying to run the command
  return success
    ? resolve()
    : reject()
})

export default gotem
