var confirmbutton = document.getElementById('confirm')

confirmbutton.addEventListener('click', function () {
  var codeword = window.prompt('You open the door the you and see three safes. Which one do you choose? Enter in a number please')
  codeword = parseInt(codeword)
  if (codeword === 1) {
    var codeword4 = window.prompt('You hace choosen safe 1. What is safe code. Enter in the safe code like this:36,2,3,2 (HINT:THATS THE ACTUAL CODE)')
    codeword4 = codeword4.trim()
    if (codeword4 === '36,2,3,2') {
      var money = Math.floor(Math.random() * 200) + 1
      window.alert('You have found ' + money + ' dollars. Safe 2 had the most amount of money sucker')
    } else {
      window.alert('Nice try... 😏..But because you were so stupid and didn\'t use the safe code I provided you, you set off the trip wire, and the room exploded, killing you. WOW')
    }
  } else if (codeword === 2) {
    var codeword2 = window.prompt('You hace choosen safe 2. What is safe code. Enter in the safe code like this:36,2,3,1 (HINT:THATS THE ACTUAL CODE)')
    codeword2 = codeword2.trim()
    if (codeword2 === '36,2,3,1') {
      money = Math.floor(Math.random() * 2030) + 1
      window.alert('You have found ' + money + ' dollars')
    } else {
      window.alert('Nice try... 😏..But because you were so stupid and didn\'t use the safe code I provided you, you set off the trip wire, and the room exploded, killing you. WOW')
    }
  } else if (codeword === 3) {
    var codeword5 = window.prompt('Are you a good person? You can either answer it by saying yes or no, or true, or false')
    codeword5 = codeword5.toLowerCase().trim()
    if (codeword5 === 'true' || codeword5 === 'yes') {
      var codeword3 = window.prompt('You hace choosen safe 3 and you\'re a good person.Ok then, what is safe code. Enter in the safe code like this:36,2,6,2 (HINT:THATS THE ACTUAL CODE)')
      codeword3 = codeword3.trim()
      if (codeword3 === '36,2,6,2') {
        money = Math.floor(Math.random() * 230) + 1
        window.alert('You have found ' + money + ' dollars')
      } else {
        window.alert('Nice try... 😏..But because you were so stupid and didn\'t use the safe code I provided you, you set off the trip wire, and the room exploded, killing you. WOW')
      }
    } else {
      window.alert('You are either a horrible person or didn\'t enter in a possible answer, either way, a sudden thunder storm appears, blows the roof off the room and you get struck by lighting and die.')
    }
  } else {
    window.alert('You died from a brain aneurysm because you didn\'t choose a number between one and three, how dumb are you?')
  }
})
