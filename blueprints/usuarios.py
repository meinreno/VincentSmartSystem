#!/usr/bin/python

from flask import Flask, Blueprint, render_template, request, make_response, redirect, url_for, session
from flask_login import logout_user, login_user, current_user , login_required #flask.ext.login
from forms.index import Login_Form
from models.usuarios import usuarios
from classes.criptografia import CriptografiaSenha




usuarios_bp = Blueprint('usuarios_blueprint',__name__)

@usuarios_bp.route("/login", methods=['POST'])
def LoginUsuario():
	form = Login_Form()
	email = request.form['usuario']
	dados_usuario = usuarios.query.filter_by(email=email).first()
	if dados_usuario != None:
		senha = request.form['senha']
		gerarSenha = CriptografiaSenha(senha)
		HashGerada = gerarSenha.gerarHash(dados_usuario.salt)
		
		if HashGerada == dados_usuario.senha:
			login_user(dados_usuario)
			return redirect(url_for('home_blueprint.home'))
		else:
			error = "USUARIO OU SENHA INVALIDOS"
			return render_template('index/index.html',form=form , error=error)


@usuarios_bp.route("/logout")
@login_required
def logout():
	logout_user()
	return redirect(url_for('app/index'))
