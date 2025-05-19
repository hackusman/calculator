function calculator(operator, a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
            throw new Error("Les deux valeurs doivent être des nombres.");
        }

        if (operator === "+") {
            return a + b;
        } else if (operator === "-") {
            return a - b;
        } else if (operator === "/") {
            if (b === 0) {
                throw new Error("Division par zéro !");
            }
            return a / b;
        } else if (operator === "%") {
            if (b === 0) {
                throw new Error("Modulo par zéro !");
            }
            return a % b;
        } else {
            throw new Error("Opérateur invalide !");
        }
    } catch (err) {
        return "Erreur : " + err.message;
    }
}

// Attendre la soumission du formulaire
document.getElementById("calcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let operator = document.getElementById("operator").value;

    let resultat = calculator(operator, a, b);

    // Afficher le résultat
    document.getElementById("result").textContent = `Le résultat de votre opération est : ${resultat}`;
});
