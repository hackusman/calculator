// Fonction calculatrice avec gestion des erreurs et switch
function calculator(operator, a, b) {
    try {
        if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
            throw new Error("Les deux valeurs doivent être des nombres.");
        }

        switch (operator) {
            case "+":
                return a + b;

            case "-":
                return a - b;

            case "/":
                if (b === 0) {
                    throw new Error("Division par zéro !");
                }
                return a / b;

            case "%":
                if (b === 0) {
                    throw new Error("Modulo par zéro !");
                }
                return a % b;

            default:
                throw new Error("Opérateur invalide !");
        }
    } catch (err) {
        return "Erreur : " + err.message;
    }
}

// Attendre la soumission du formulaire
document.getElementById("calcForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Récupérer les valeurs depuis le formulaire
    const a = Number(document.getElementById("a").value);
    const b = Number(document.getElementById("b").value);
    const operator = document.getElementById("operator").value;

    // Appeler la fonction de calcul
    const resultat = calculator(operator, a, b);

    // Afficher le résultat
    document.getElementById("result").textContent = `Résultat : ${resultat}`;
});
