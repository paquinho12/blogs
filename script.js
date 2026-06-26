// ===============================
// CONTADOR DE CURTIDAS E DESLIKES
// ===============================

let totalLikes = 0;
let totalDeslikes = 0;

const btnLike = document.getElementById("like");
const btnDeslike = document.getElementById("deslike");

const likes = document.getElementById("likes");
const deslikes = document.getElementById("deslikes");

btnLike.addEventListener("click", function () {

    totalLikes++;

    likes.textContent = totalLikes;

    btnLike.style.transform = "scale(1.15)";

    setTimeout(function () {

        btnLike.style.transform = "scale(1)";

    }, 150);

});

btnDeslike.addEventListener("click", function () {

    totalDeslikes++;

    deslikes.textContent = totalDeslikes;

    btnDeslike.style.transform = "scale(1.15)";

    setTimeout(function () {

        btnDeslike.style.transform = "scale(1)";

    }, 150);

});

// ===============================
// COMENTÁRIOS
// ===============================

function comentar() {

    const campo = document.getElementById("textoComentario");
    const lista = document.getElementById("listaComentarios");

    if (campo.value.trim() === "") {

        alert("Digite um comentário.");

        return;

    }

    const comentario = document.createElement("div");

    comentario.className = "comentario";

    const data = new Date();

    comentario.innerHTML = `
        <strong>👤 Visitante</strong><br><br>
        ${campo.value}
        <br><br>
        <small>${data.toLocaleDateString()} - ${data.toLocaleTimeString()}</small>
    `;

    lista.prepend(comentario);

    campo.value = "";

}

// ===============================
// MENSAGEM AO ABRIR O BLOG
// ===============================

window.onload = function () {

    console.log("Bem-vindo ao Blog do Clã Uchiha!");

};

// ===============================
// ROLAGEM SUAVE DO MENU
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        destino.scrollIntoView({

            behavior: "smooth"

        });

    });

});
