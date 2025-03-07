// FUNÇÃO PARA VALIDAÇÃO DE CAMPOS

function testa_form() {

    
    // Obtém o valor do campo "aluno" do formulário "formalunos"
    var a = document.forms["formalunos"]["aluno"].value;

    // Obtém o valor do campo "cpf" do formulário "formalunos"
    var c = document.forms["formalunos"]["cpf"].value;

    // Verifica se o campo "aluno" está vazio ou não foi preenchido
	// Verificação de valores usando trim(): trim() remove espaços em branco no início
    //	e no final da string, garantindo que os campos não sejam aceitos como válidos se contiverem apenas espaços.
	
	
    if (a == null || a === "") {
        // Exibe um alerta informando que o nome do aluno deve ser preenchido
        alert("Nome de aluno precisa ser informado");

        // Envia o cursor para o campo aluno do formulário "formalunos".
        document.forms["formalunos"]["aluno"].focus();

        // Impede o envio do formulário, retornando false
        return false;        
    }
    
    // Verifica se o campo "cpf" está vazio ou não foi preenchido
    if (c == null || c === "") {
        // Exibe um alerta informando que o CPF do aluno deve ser preenchido
        alert("CPF do aluno precisa ser informado");

        // Envia o cursor para o campo cpf do formulário "formalunos".
        document.forms["formalunos"]["cpf"].focus();

        // Impede o envio do formulário, retornando false
        return false;        
    }

    // Se todas as validações passarem, o formulário é enviado
    document.forms["formalunos"].submit();
}
/*
Nulo (null): Ausência de valor
Imagine que você tem um espaço para um livro numa estante, mas não colocou nenhum livro lá. Esse espaço está null, ou seja, está vazio sem qualquer livro.

Vazio (""): Não possui conteúdo
Agora, imagine que você colocou um caderno na estante, mas todas as páginas estão em branco. O caderno existe (não é null), mas não tem nada escrito nele, 
então está "vazio" de conteúdo.

*/

//FUNÇÃO PARA AS MÁSCARA


function mascara(input) {
  // Obtém o valor atual do campo de entrada
  var v = input.value;

 //A função isNaN() determina se o valor é NaN ou não.
  //NaN - Not a number, não é um número.
  
  // Verifica se o último caractere digitado não é um número.
  // Se não for um número, remove o último caractere e retorna,
  // o que impede a entrada de caracteres inválidos.
  if (isNaN(v[v.length - 1])) { // impede entrar outro caractere que não seja número
    input.value = v.substring(0, v.length - 1);
    return;
  }

  // Obtém o tipo de máscara a partir do atributo data-mask do elemento
  var tipo = input.getAttribute("data-mask");

  // Verifica o tipo de máscara (cpf) a ser aplicado.
  if (tipo === "cpf") {
    // Para máscara de CPF, define o limite máximo de caracteres para 14.
    input.setAttribute("maxlength", "14");
	// Adiciona pontos (.) após o terceiro e o sétimo caracteres digitados
    // e um hífen (-) após o décimo primeiro caractere,
    // para formatar o CPF no padrão "###.###.###-##".
    if (v.length === 3 || v.length === 7) input.value += ".";
    if (v.length === 11) input.value += "-";
  }
  
  // Verifica o tipo de máscara (cep) a ser aplicado.
  
  if (tipo === "cep") {
	 // Para máscara de CEP, define o limite máximo de caracteres para 9.
    input.setAttribute("maxlength", "9");
	// Adiciona um hífen (-) após o quinto caractere, 
    // para formatar o CEP no padrão "#####-###".
    if (v.length === 5) input.value += "-";
  }

 // Verifica o tipo de máscara (cel) a ser aplicado.

  if (tipo === "cel") {
    // Define o limite máximo de caracteres para 14.
    input.setAttribute("maxlength", "14");
	
    // Adiciona um parêntese de abertura após o primeiro dígito.	
    if (v.length === 1) input.value = "(" + v;
	
	// Adiciona um parêntese de fechamento e um espaço após o terceiro dígito.
    if (v.length === 3) input.value += ") ";
	
    // Adiciona um hífen após o oitavo dígito, para formatar no padrão "(##)#####-####".
    if (v.length === 9) input.value += "-";
  }
}



	
