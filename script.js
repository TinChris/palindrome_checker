// Füge einen Klick-Event-Listener zum Button mit der ID "check-btn" hinzu
document.getElementById("check-btn").addEventListener("click", () => {
  // Hole den eingegebenen Text aus dem Eingabefeld mit der ID "text-input"
  const rawText = document.getElementById("text-input").value;

  // Überprüfe, ob das Eingabefeld leer ist oder nur aus Leerzeichen besteht
  if (!rawText || rawText.trim() === "") {
    alert("Please input a value"); // Zeige Warnung, wenn keine Eingabe erfolgt ist
    return; // Beende die Funktion
  }

  // Entferne alle Zeichen, die keine Buchstaben oder Zahlen sind (auch Leerzeichen und Sonderzeichen)
  // Konvertiere den Text gleichzeitig in Kleinbuchstaben für einen fairen Vergleich
  const cleanedText = rawText.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Kehre den bereinigten Text um
  const reversedText = cleanedText.split("").reverse().join("");

  // Überprüfe, ob der bereinigte Text mit seiner Umkehrung übereinstimmt
  const isPalindrome = cleanedText === reversedText;

  // Erstelle eine Ergebnisnachricht, abhängig davon, ob es ein Palindrom ist oder nicht
  const resultText = isPalindrome
    ? `${rawText} is a palindrome`
    : `${rawText} is not a palindrome`;

  // Zeige das Ergebnis im Element mit der ID "result" an
  document.getElementById("result").textContent = resultText;
});
