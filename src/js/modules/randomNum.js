
const randomNum = () => {
  const $safetyCounter = document.querySelector('.safety-count');
  
  const getRandomNum = (min = 1, max = 3) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    const num = getRandomNum();
  
    if (num === 1) {
      $safetyCounter.textContent = `${num} человек`;
    } else {
      $safetyCounter.textContent = `${num} человека`;
    }

}

export default randomNum;

  