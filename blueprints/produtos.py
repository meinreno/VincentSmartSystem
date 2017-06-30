#!/src/bin/python
from flask import Flask, Blueprint, render_template, request, make_response, redirect, url_for, session, json
from models.produtos import fornecedores, db

app = Flask(__name__)

produtos_bp = Blueprint('produtos_blueprint',__name__)

@produtos_bp.route("/produtos")
def Produtos_Home():
	return render_template("produtos/home.html")

@produtos_bp.route("/produtos/buscarprodutos")
def Produtos_Buscar():
	return render_template("produtos/produtos.html")

@produtos_bp.route("/produtos/fornecedores")
def Fornecedores():
	return render_template("produtos/fornecedores.html")

@produtos_bp.route("/produtos/fornecedores", methods=['POST'])
def cadastrar_fornecedor():
	salvar_novo_forn = fornecedores(
		request.form['cad_nome_fant'],
		request.form['cad_razao_social'],
		request.form['cad_cnpj'],
		request.form['cad_ie'],
		request.form['cad_logradouro'],
		request.form['cad_bairro'],
		request.form['cad_numero'],
		request.form['cad_cep'],
		request.form['cad_estado'],
		request.form['cad_municipio'],
		request.form['cad_vendedor'],
		request.form['cad_tel_vendedor'],
		request.form['cad_email_vendedor'],
		request.form['cad_end_web'],
		request.form['cad_tel_empresa'],
		request.form['cad_email_empresa'],)
	db.session.add(salvar_novo_forn)
	db.session.commit()
	return json.dumps({'status':'ok'})



@produtos_bp.route("/produtos/EntradaProdutos")
def Entrada_Produtos():
	return render_template("produtos/entradanf.html")