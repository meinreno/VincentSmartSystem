#!/usr/bin/python

from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:1234@localhost/royal210_vincentProject'
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
db = SQLAlchemy(app)

class usuarios(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	nome = db.Column(db.String(50))
	sobrenome = db.Column(db.String(80))
	email = db.Column(db.String(100), unique=True)
	senha = db.Column(db.String(100))
	salt = db.Column(db.String(100))
	telefone = db.Column(db.String(100))
	logradouro = db.Column(db.String(100))
	bairro = db.Column(db.String(100))
	numero = db.Column(db.String(11))
	cep = db.Column(db.String(9))
	municipio = db.Column(db.String(50))
	estado = db.Column(db.String(2))

	def __init__(self,nome,sobrenome,email,senha,salt,telefone,logradouro,bairro,numero,cep,municipio,estado):
		self.nome = nome
		self.sobrenome = sobrenome
		self.email = email
		self.senha = senha
		self.salt = salt
		self.telefone = telefone
		self.logradouro = logradouro
		self.bairro = bairro
		self.numero = numero
		self.cep = cep
		self.municipio = municipio
		self.estado = estado

	def is_authenticated(self):
		return True

	def is_active(self):
		return True
 
	def is_anonymous(self):
		return False
 
	def get_id(self):
		return unicode(self.id)
