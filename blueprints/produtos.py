#!/src/bin/python
from flask import Flask, Blueprint, render_template, request, make_response, redirect, url_for, session

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

@produtos_bp.route("/produtos/EntradaProdutos")
def Entrada_Produtos():
	return render_template("produtos/entradanf.html")