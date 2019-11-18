var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");

botaoAdicionarPaciente.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    // Extraindo informacoes do paciente
   
    var paciente = obtemPacienteFormulario(form);

    console.log(paciente);

    var pacienteTr = montaTr(paciente);

    if(!validaPaciente(paciente)){
        console.log("Paciente invalido");
        return;
    }

    // adicionando paciente na tabela   
    var table = document.querySelector("#tabela-pacientes");
    table.appendChild(pacienteTr);

    form.reset();


});

function obtemPacienteFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    //criar a tr do paciente
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        return true;
    }else{
        return false;
    }
}

