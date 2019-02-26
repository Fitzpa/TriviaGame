/** 
 * @constructor Questions
 * @returns {array} Questions array containing Question objects.
*/
function Questions() {
  /* Handles case when constructor function called without new operator */
  if (!(this instanceof Questions)) {return new Questions();}

  /**
   * @class Question
   * @classdesc Question class object containing attributes for a single question.
  */
  class Question {
    /**
     * @constructor Question
     * @constructs {object} Contains attributes for a single question.
     * @property {string} question - Question user will try to answer.
     * @property {object} choices - 1 to n possible answers user can choose.
     * @property {number} answer - Correct answer corresponding to choices.
     * @property {boolean} isCorrect - Designates if user answered question correctly (true/false). Undefined means the user has not answered yet.
     * @property {string} image - Filename for rendered image.
    */
    constructor(question, choices, answer, image) {
      this.question = question;
      this.choices = choices;
      this.answer = answer;
      this.isCorrect = undefined; /* Unanswered question. */
      this.image = image;
    }
  }

  return (() => {
    let arrQuestions = [];

    /* Hard-coded questions because no back-end database interface for this project. */
		const TEXTFILE = 'What is the best dog breed?^Cocker Spaniel^Shiba-inu^Golden Retriever^Shitsu^0^Spaniel2.jpg\nWhy are Spaniels the best?^They are the perfect size^They look like royalty^They are cute^All of the above^3^royalty.jpg\nAverage cuteness of a Cocker-Spaniel?^10%^50%^85%^100%^3^cuteSpaniel.jpg\nWhat is my favorite dogs name?^Ella^Lucy^Missy^Ruby^1^Lucy.JPG\nDo I like cats or dogs?^cats^dogs^both^neither^2^Miss+Lucy.jpg';

    const arrLines = TEXTFILE.split("\n");

    arrLines.forEach(line => {
      let arrFields = line.split("^");

      /* First field is the question. Last field is the image. Next to last is the answer. Get those first. Remaining fields are the 1..n choices. FORMAT = question^choices^answer^image */
      let question = arrFields.shift();
      let image    = arrFields.pop();
      let answer   = parseInt(arrFields.pop());
      // choices = arrFields.

      arrQuestions.push(new Question(question, arrFields, answer, image));
    });

    return arrQuestions;
  })();
}