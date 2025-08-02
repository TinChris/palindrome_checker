const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

function checkPalindrome() {
  const rawText = input.value;

  if (!rawText || rawText.trim() === "") {
    alert("Please input a value");
    return;
  }

  // Nur Buchstaben und Zahlen, ohne Leerzeichen und Sonderzeichen
  const cleanedText = rawText.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversedText = cleanedText.split("").reverse().join("");
  const isPalindrome = cleanedText === reversedText;

  // Ergebnis-Text mit Originaltext anzeigen
  const resultText = isPalindrome
    ? `${rawText} is a palindrome`
    : `${rawText} is not a palindrome`;

  // Ergebnis ausgeben
  resultDiv.textContent = resultText;

  // Farbklasse setzen (grün/rot)
  resultDiv.classList.remove("palindrome", "not-palindrome");
  resultDiv.classList.add(isPalindrome ? "palindrome" : "not-palindrome");

  // Automatisch zu Ergebnis scrollen (optional)
  resultDiv.scrollIntoView({ behavior: "smooth" });
}

// Klick-Event für Button
button.addEventListener("click", checkPalindrome);

// Enter-Taste löst Palindrom-Prüfung ebenfalls aus
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // verhindert Formular-Submit, falls vorhanden
    checkPalindrome();
  }
});
