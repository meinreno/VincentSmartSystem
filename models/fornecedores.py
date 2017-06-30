#!/usr/bin/python

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:1234@localhost/royal210_vincentProject'
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
db = SQLAlchemy(app)

class fornecedores(db.Model):
	id = db.Column(db.Integer, prymary_key=True)
	nome_fantasia = db.Column(db.String(255))
	razao_social = db.Column(db.String(255))
	cnpj = db.Column(db.String(14))
	ie = db.Column(db.String(12))
	logradouro = db.Column(db.String(255))
	bairro = db.Column(db.String(255))
	numero = db.Column(db.String(10))
	cep = db.Column(db.String(8))
	estado = db.Column(db.String(2))
	municipio = db.Column(db.String(255))
	vendedor = db.Column(db.String(255))
	telefone_vendedor = db.Column(db.String(20))
	email_vendedor = db.Column(db.String(255))
	emdereco_web = db.Column(db.String(255))
	telefone_empresa = db.Column(db.String(20))
	email_empresa = db.Column(db.String(255))
	
	def __init__(self, nome_fantasia,razao_social,cnpj,ie,
					logradouro,bairro,numero,cep,estado,municipio,
					vendedor,telefone_vendedor,email_vendedor,endereco_web,
					telefone_empresa,email_empresa):

		self.nome_fantasia = nome_fantasia
		self.razao_social = razao_social
		self.cnpj = cnpj
		self.ie = ie
		self.logradouro = logradouro
		self.bairro = bairro
		self.numero = numero
		self.cep = cep
		self.estado = estado
		self.municipio = municipio
		self.vendedor = vendedor
		self.telefone_vendedor = telefone_vendedor
		self.email_vendedor = email_vendedor
		self.emdereco_web = emdereco_web
		self.telefone_empresa = telefone_empresa
		self.email_empresa = email_empresa
