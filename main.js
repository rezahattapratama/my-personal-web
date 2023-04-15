const txtElement = ["Mahasiswa         ", "Pelajar IT         ", "Aktivis Kampus        "];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function word() {
  if (count == txtElement.length) {
    count = 0;
  }
  currentTxt = txtElement[count];
  words = currentTxt.slice(0, ++txtIndex);
  console.log(words);
  document.querySelector('.word-efect').textContent = words;

  if(words.length == currentTxt.length){
    count++;
    txtIndex = 0;
  }

  setTimeout(word, 150);
})();

const goToTop = () => {
  return location.href="#"
}


