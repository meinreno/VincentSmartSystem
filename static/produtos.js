//VARIAVEIS
var prod_carregMin, prod_carregMax
var intervalo = 50
function zerarCarregamento(){
	prod_carregMin = 0;
	prod_carregMax = 50};

$(document).on("click", "#buscarProduto", function(){

	alert(prod_carregMin +","+ prod_carregMax);
	prod_carregMin = prod_carregMin + intervalo;
	prod_carregMax = prod_carregMax + intervalo;
})

$(document).on("click", "#produtos",function(){
	$("#corpoProdutos").load('/produtos/buscarprodutos')
})

$(document).on("click", "#fornecedores",function(){
	$("#corpoProdutos").load('/produtos/fornecedores')
})

$(document).on("click", "#entradaNF",function(){
	$("#corpoProdutos").load('/produtos/EntradaProdutos')
})

function zerarDadosProd(){
	$(".divDadosProdutos").html("");
	$(".btnDadosProdutos").html("");
};

$(document).on("click", ".produto", function(){
	zerarDadosProd();
	
	$("#tituloModalProd").html("Dados Produto");

	$("#campoDescCompleta").html('<p class="form-control-static">email@example.com</p>');
	
	$("#CampoDescGond").html('<h5>Couve un</h5>');
	
	$("#CampoDescRes").html('');
	
	$("#CamṕoProdBloq").html('');
	
	$("#CampoTipEmbal").html('');

	$("#CampoAlcool").html('');

	$("#CampoBal").html('');

	$("#CampoDepart").html('');
	
	$("#CampoSecao").html('');

	$("#CampoGrupo").html('');

	$("#CampoSubg").html('');

	$("#CampoCusto").html('');
	
	$("#CampoPrecVend").html('');
	
	$("#CampoMargLuc").html('');
	
	$("#CampoEAN").html('');
	
	$("#CampoNCM").html('');
	
	$("#CampoQuant").html();
	
	$("#CampoOrigMerc").html('');
	
	
	$("#CampoSitTrib").html('');

	$("#CampoAliICMS").html('');
	
	$("#CampoReducao").html('');
	
	$("#CampoModBcICMS").html('');
	
	$("#CampoBcIcmsSt").html('');
	
	$("#CampoCstIpi").html('');

	$("#CampoIpi").html('');
	
	$("#CampoPis").html('');
	
	$("#CampoCstCofins").html('');
	
	$("#CampoCofins").html('');
	
	$("#CampoMva").html('');
	
	$("#CampoIva").html('');	

	$("#botoesProdutos").html('<button id="editarProd" type="button" class="btn btn-default">Editar</button>'
							+'<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>');

	$("#modal_Prod").modal('show')
})

$(document).on("click", "#cadastrarProduto", function(){

	zerarDadosProd();
	
	$("#tituloModalProd").html("Cadastrar Novo Produto");

	$("#campoDescCompleta").html('<input style="color:black" class="form-control" name="cad_descricao" id="cad_descricao" maxlength="100" placeholder="Descrição Completa" title="A Descrição completa permite 100 caracteres, e é utilizado para facilitar sua busca pelo item, sejá claro e especifico." required>');
	
	$("#CampoDescGond").html('<input style="color:black" class="form-control" type="text" name="cad_descricao_gondola" id="cad_descricao_gondola" maxlength="30"  placeholder="Descrição de Gondôla"  title="A Descrição de Gôndola permite 40 caracteres, pois é o tamanho maximo para que a Etiqueta de Gôndola fique legivel" required>');
	
	$("#CampoDescRes").html('<input style="color:black" class="form-control" type="text" id="cad_descricao_resumida" name="cad_descricao_resumida" maxlength="24" placeholder="Descrição Resumida"  title="A Descrição Resumida permite apenas 24 caracteres, pois é o tamanho maximo no Cupom Fiscal." >');
	
	$("#CamṕoProdBloq").html('<select style="color:black" class="form-control" name="cad_bloqueado" id="cad_bloqueado" title="Selecione se o produto está Bloqueado para a Venda ou Não." >'
								+'<option value="1">Sim</option>'
								+'<option value="0">Não</option>'
							+'</select>');
	
	$("#CampoTipEmbal").html('<select style="color:black" class="form-control" name="cad_tipo_embalagem" id="cad_tipo_embalagem" title="Selecione o Tipo da Embalagem, se ela será vendida por Quilo ou Unidade." >'
	                            +'<option value="KG">KG</option>'
	                            +'<option value="UN">UN</option>'
	                        +'</select>');

	$("#CampoAlcool").html('<select style="color:black" class="form-control" name="cad_alcoolico" id="cad_alcoolico" title="Selecione se o Produto é Alcoolico ou não, para que seja realizado a verificação de idade do consumidor no caixa." >'
                            +'<option value="Sim">Sim</option>'
                            +'<option value="Não">Não</option>'
                        +'</select>');

	$("#CampoBal").html('<select style="color:black" class="form-control" name="cad_balanca" id="cad_balanca" title="Selecione se esse produto ira ser exportado para a(s) Balança(s)." >'
                            +'<option value="Sim">Sim</option>'
                            +'<option value="Não">Não</option>'
                        +'</select>');

	$("#CampoDepart").html('<select style="color:black" class="form-control" id="cad_departamento" name="cad_departamento"  title="Selecione o Departamento à que o Produto pertence, caso não encontre por favor entre em contato com o Suporte da VINCENT SMART SYSTEM." >'
                            +'<option value="nenhum" selected>Selecione um Departamento</option>'
                        +'</select>');
	
	$("#CampoSecao").html('<select style="color:black" class="form-control" name="cad_secao" id="cad_secao" title="Selecione a Seção à que o Produto pertence, caso não encontre por favor entre em contato com o Suporte da VINCENT SMART SYSTEM." >'
                            +'<option value="nenhum" selected>Selecione um Departamento Antes</option>'
                        +'</select>');

	$("#CampoGrupo").html('<select style="color:black" class="form-control" name="cad_grupo" id="cad_grupo" title="Selecione o Grupo à que o Produto pertence, caso não encontre por favor entre em contato com o Suporte da VINCENT SMART SYSTEM." >'
                            +'<option value="nenhum" selected>Selecione uma Seção Antes</option>'
                        +'</select>');

	$("#CampoSubg").html('<select style="color:black" class="form-control" name="cad_subgrupo" id="cad_subgrupo" title="Selecione o Sub-Grupo à que o Produto pertence, caso não encontre por favor entre em contato com o Suporte da VINCENT SMART SYSTEM." >'
                            +'<option value="nenhum" selected>Selecione um Grupo Antes</option>'
                        +'</select>');

	$("#CampoCusto").html('<input style="color:black" class="form-control" type="text" id="cad_custo" name="cad_custo" title="Insira o Custo do Produto, caso não possua, deixe em branco, mas não esqueça de inserir antes que o produto chegue" >');
	
	$("#CampoPrecVend").html('<input style="color:black" class="form-control" type="text" id="cad_preco_venda" name="cad_preco_venda" title="Insira o Preço de Venda do Produto, caso não possua, deixe em branco, mas não esqueça de inserir antes que o produto chegue" >');
	
	$("#CampoMargLuc").html('<input style="color:black" class="form-control" type="text" id="cad_margem" name="cad_margem" title="Insira o Valor da Margem, é importante inserir mesmo que não possua valor de Custo, apos a entrada da nota será atualizado o preço de venda Automaticamente (Em caso de uma margem negativa, inserir o negativo no final da digitação)" >');
	
	$("#CampoEAN").html('<input style="color:black" class="form-control" type="text" name="cad_cod_barras" maxlength="13" title="Insira o Codigo de Barras(EAN-13)." >');
	
	$("#CampoNCM").html('<input style="color:black" class="form-control" type="text"  name="cad_ncm"  title="Insira o Codigo de NCM." >');
	
	$("#CampoQuant").html('<input style="color:black" class="form-control" type="text" id="cad_quantidade"  name="cad_quantidade" title="Insira o Total de itens deste produto ." >');
	
	$("#CampoOrigMerc").html('<select style="color:black" class="form-control" name="origem" title="Selecione a Origem da Mercadoria, para fins Fiscais." >'
                            	+'<option value="nenhum" selected>Origem Mercadoria</option>'
                        	+'</select>');
	
	
	$("#CampoSitTrib").html('<select style="color:black" class="form-control" name="situacaoTrib" title="Selecione a Situação Tributaria, para fins Fiscais." >'
                            +'<option value="nenhum" selected>Situação Tributária</option>'
                        +'</select>');

	$("#CampoAliICMS").html('<input style="color:black" class="form-control" name="aliqICMS" type="text" title="Insira a Aliquota ICMS, para fins Fiscais." >');
	
	$("#CampoReducao").html('<input style="color:black" class="form-control" name="reducao" type="text" title="Insira a Redução, para fins Fiscais." >');
	
	$("#CampoModBcICMS").html('<select style="color:black" class="form-control" name="bc_icms" title="Selecione o Modelo BC ICMS, para fins Fiscais." >'
                           		+'<option value="nenhum" selected>Modelo BC ICMS</option>'
                        	+'</select>');
	
	$("#CampoBcIcmsSt").html('<select style="color:black" class="form-control" name="bc_icmsst" title="Selecione o Modelo BC ICMS ST, para fins Fiscais." >'
                            	+'<option value="nenhum" selected>Modelo BC ICMS ST</option>'
                        	+'</select>');
	
	$("#CampoCstIpi").html('<select style="color:black" class="form-control" name="cst_ipi"  title="Selecione a CST IPI, para fins Fiscais." >'
	                            +'<option value="nenhum" selected>CST IPI</option>'
                        +'</select>');

	$("#CampoIpi").html('<input style="color:black" class="form-control" name="ipi" type="text"  title="Insira o IPI, para fins Fiscais." >');
	
	$("#CampoPis").html('<input style="color:black" class="form-control" name="pis" type="text"  title="Insira o PIS, para fins Fiscais." >');
	
	$("#CampoCstCofins").html('<select style="color:black" class="form-control" name="cst_cofins" title="Selecione a CST COFINS, para fins Fiscais." >'
                            	+'<option value="nenhum" selected>CST COFINS</option>'
                        	+'</select>');
	
	$("#CampoCofins").html('<input style="color:black" class="form-control" name="cofins" type="text" title="Insira o COFINS, para fins Fiscais." >');
	
	$("#CampoMva").html('<input style="color:black" class="form-control" name="mva" type="text"  title="Insira o MVA, para fins Fiscais." >');
	
	$("#CampoIva").html('<input style="color:black" class="form-control" name="iva" type="text" title="Insira o IVA, para fins Fiscais.">');	

	$("#botoesProdutos").html('<button id="salvarNovoProd" type="button" class="btn btn-default">Salvar</button>'
							+'<button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>');

	$("#modal_Prod").modal('show')
});

$(document).on("click", "#salvarNovoProd", function(){
	//var dadosNovoProduto = $("#dados_Produto").serialize();

	$.ajax({
		url: "/produtos",
		data: "#dados_Produto",
		type:"POST",
		dataType:"html"
	})//Ajax
})


