window.onload = function () {
      alert("Ajude com seu voto!");
      var continuar = confirm("Olá, vamos começar?");
      if (!continuar) {
        mostrarDespedida();
        return;
      }

      var nome = prompt("Qual seu nome?");
      if (nome === null) {
        mostrarDespedida();
        return;
      }

      var estado = prompt(`Olá ${nome}, de qual estado você é?`);
      if (estado === null) {
        mostrarDespedida();
        return;
      }

      document.getElementById('app').style.display = 'block';

      document.getElementById('idade').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          verifique();
        }
      });
    };
 function verifique() {
    var idadeInput = document.getElementById('idade');
    var res = document.getElementsByClassName('res')[0];
    var idade = Number(idadeInput.value);

        if (idade < 0 || isNaN(idade)) {
            alert ("Vc digitou um numero de idade invalida!");
        } else if (idade < 16) {
            res.innerHTML = `<p><strong>Você <u>não pode votar</u>.</strong></p>`;
        } else if ((idade >= 16 && idade < 18) || idade > 70) {
            res.innerHTML = `<p><strong>O voto é <u>opcional</u>.</strong></p>`;
        } else {
            res.innerHTML = `<p><strong>O voto é <u>obrigatório</u>.</strong></p>`;
        }     
    }
    
function mostrarDespedida() {
      document.getElementById('despedida').style.display = 'block';
    }
    document.getElementById('idade').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            verifique();
        }
    }

);