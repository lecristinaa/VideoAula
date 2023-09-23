document.addEventListener("DOMContentLoaded", function() {
    const chatBox = document.querySelector(".chat");
    const userInput = document.getElementById("user");
    const sendButton = document.getElementById("enviar-botao");

    function sendMessage() {
        const userMessage = document.createElement("div");
        userMessage.classList.add("mensagem", "aluno");
        const username = "Alunos"; // Você pode personalizar o nome do usuário
        userMessage.innerHTML = `<span class="username">${username}:</span> ${userInput.value}`;
        chatBox.appendChild(userMessage);

        userInput.value = "";

        // Rolagem automática para a última mensagem
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    sendButton.addEventListener("click", sendMessage);

    // Permitir o envio da mensagem ao pressionar Enter
    userInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});
