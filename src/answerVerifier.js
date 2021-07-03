export const verifyIfCorrect = (word, userAnswer) => {
  if (word && userAnswer) {
    if (word.toUpperCase() == userAnswer.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  }
  else{
      return false;
  }
};


//export default verifyIfCorrect;