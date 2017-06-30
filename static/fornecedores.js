//Função para Busca de Fornecedores ao Banco de Dados
$(document).on("click", "#buscarFornecedor", function(){
	alert("Teste123");
});
//Função para Zerar os Campos do model em Fornecedores
function zerarDadosForn(){
	$(".divDadosFornecedores").html("");
	$(".btnDadosFornecedores").html("");
};

$(document).on("click", "#salvarNovoForn", function(){
	var dados_novo_fornecedor = $("#dados_Fornecedores").serialize();
	$.ajax({
		url: "/produtos/fornecedores",
		type: "POST",
		data: dados_novo_fornecedor,
		dataType: "json",
		success: function(response){
			alert(response['status']);
		}
	})
})

function input_modal_fornecedor(){
	zerarDadosForn();
	$("#tituloModalForn").html("Cadastro de Fornecedor");
	$("#campoNomeFant").html('<input style="color:black" class="form-control" name="cad_nome_fant" id="cad_nome_fant" maxlength="150" placeholder="Nome Fantasia do Fornecedor." required>');
	$("#CampoRazaoSocial").html('<input style="color:black" class="form-control" name="cad_razao_social" id="cad_razao_social" maxlength="150" placeholder="Razão Social Fornecedor." required>');
	$("#CampoCNPJ").html('<input style="color:black" class="form-control" name="cad_cnpj" id="cad_cnpj" maxlength="150" placeholder="CNPJ." required>');
	$("#CamṕoIE").html('<input style="color:black" class="form-control" name="cad_ie" id="cad_ie" maxlength="150" placeholder="Inscrição Estadual." required>');
	$("#CampoLogradouro").html('<input style="color:black" class="form-control" name="cad_logradouro" id="cad_logradouro" maxlength="150" placeholder="Logradouro." required>');
	$("#CampoBairro").html('<input style="color:black" class="form-control" name="cad_bairro" id="cad_bairro" maxlength="150" placeholder="Bairro." required>');
	$("#CampoNumero").html('<input style="color:black" class="form-control" name="cad_numero" id="cad_numero" maxlength="150" placeholder="Numero." required>');
	$("#CampoCEP").html('<input style="color:black" class="form-control" name="cad_cep" id="cad_cep" maxlength="150" placeholder="CEP." required>');
	$("#CampoEstado").html('<select class="form-control" name="cad_estado" id="cad_estado">'
								+'<option value="0" selected>Selecione um Estado</option>'
			                    +'<option value="12">Acre</option> '
			                    +'<option value="27">Alagoas</option>' 
			                    +'<option value="13">Amazonas</option>'
			                    +'<option value="16">Amapá</option>'
			                    +'<option value="29">Bahia</option>' 
			                    +'<option value="23">Ceará</option>' 
			                    +'<option value="53">Distrito Federal</option>' 
			                    +'<option value="32">Espírito Santo</option>' 
			                    +'<option value="52">Goiás</option>' 
			                    +'<option value="21">Maranhão</option>' 
			                    +'<option value="51">Mato Grosso</option>' 
			                    +'<option value="50">Mato Grosso do Sul</option>' 
			                    +'<option value="31">Minas Gerais</option>' 
			                    +'<option value="15">Pará</option>' 
			                    +'<option value="25">Paraíba</option>' 
			                    +'<option value="41">Paraná</option>'
			                    +'<option value="26">Pernambuco</option>' 
			                    +'<option value="22">Piauí</option>' 
			                    +'<option value="33">Rio de Janeiro</option>' 
			                    +'<option value="24">Rio Grande do Norte</option>' 
			                    +'<option value="11">Rondônia</option>' 
			                    +'<option value="43">Rio Grande do Sul</option>' 
			                    +'<option value="14">Roraima</option>' 
			                    +'<option value="42">Santa Catarina</option>' 
			                    +'<option value="28">Sergipe</option>' 
			                    +'<option value="35">São Paulo</option>' 
			                    +'<option value="17">Tocantins</option>'
							+'</select>');
	$("#CampoMunicipio").html('<input style="color:black" class="form-control" name="cad_municipio" id="cad_municipio" maxlength="150" placeholder="Municipio." required>');
	$("#CampoVendedor").html('<input style="color:black" class="form-control" name="cad_vendedor" id="cad_vendedor" maxlength="150" placeholder="Nome do Vendedor." required>');
	$("#CampoMailEmpres").html('<input style="color:black" class="form-control" name="cad_email_empresa" id="cad_email_empresa" maxlength="150" placeholder="Email da Empresa." required>');
	$("#CampoMailVend").html('<input style="color:black" class="form-control" name="cad_email_vendedor" id="cad_email_vendedor" maxlength="150" placeholder="Email do Vendedor." required>');
	$("#CampoEndWeb").html('<input style="color:black" class="form-control" name="cad_end_web" id="cad_end_web" maxlength="150" placeholder="Endereço Web Empresa." required>');
	$("#CampoTelEmpr").html('<input style="color:black" class="form-control" name="cad_tel_empresa" id="cad_tel_empresa" maxlength="150" placeholder="Telefone Empresa." required>');
	$("#CampoTelVend").html('<input style="color:black" class="form-control" name="cad_tel_vendedor" id="cad_tel_vendedor" maxlength="150" placeholder="Telefone Vendedor." value="" required>');
	$("#botoes_Fornecedores").html('<button id="salvarNovoForn" type="submit" class="btn btn-default">Salvar</button>'
									+'<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>');

	
	
}

$(document).on("click", "#CadastrarFornecedor", function(){
	zerarDadosForn();
	input_modal_fornecedor();
	$("#modal_Fornecedores").modal("show");	

	
})

$(document).on("click", "#editarForn", function(){
	
	input_modal_fornecedor();
	$("#tituloModalForn").html("Editar Fornecedor");
	$("#cad_nome_fant").val('teste');
	$("#cad_razao_social").val('');
	$("#cad_cnpj").val('');
	$("#cad_ie").val('');
	$("#cad_logradouro").val('');
	$("#cad_bairro").val('');
	$("#cad_numero").val('');
	$("#cad_cep").val('');
	$("#cad_estado").val('');
	$("#cad_municipio").val('');
	$("#cad_vendedor").val('');
	$("#cad_email_empresa").val('');
	$("#cad_email_vendedor").val('');
	$("#cad_end_web").val('');
	$("#cad_tel_empresa").val('');
	$("#cad_tel_vendedor").val('');


	$("#modal_Fornecedores").modal("show");	

})

//Abre modal com informações do Fornecedor
$(document).on("click", ".fornecedor", function(){
	zerarDadosForn();

	$("#tituloModalForn").html("Dados do Fornecedor");
	$("#campoNomeFant").html('');
	$("#CampoRazaoSocial").html('');
	$("#CampoCNPJ").html('');
	$("#CamṕoIE").html('');
	$("#CampoLogradouro").html('');
	$("#CampoBairro").html('');
	$("#CampoNumero").html('');
	$("#CampoCEP").html('');
	$("#CampoEstado").html('');
	$("#CampoMunicipio").html('');
	$("#CampoVendedor").html('');
	$("#CampoMailEmpres").html('');
	$("#CampoMailVend").html('');
	$("#CampoEndWeb").html('');
	$("#CampoTelEmpr").html('');
	$("#CampoTelVend").html('');
	$("#botoes_Fornecedores").html('<button id="editarForn" type="button" class="btn btn-default">Editar</button>'
									+'<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>');

	$("#modal_Fornecedores").modal("show");

})





