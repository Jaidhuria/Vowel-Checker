document.getElementById("checkButton").addEventListener("click", function () {
    let text = document.getElementById("letter").value.toLowerCase();
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < text.length; i++) {
      if (vowels.includes(text[i])) {
        vowelCount++;
      }
    }

    document.getElementById("result").textContent = `Total Vowels: ${vowelCount}`;
  });