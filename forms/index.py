#!/usr/bin/python

from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, PasswordField
from wtforms.validators import DataRequired

class Login_Form(FlaskForm): # Login do Index
	usuario = StringField('Email',validators=[DataRequired()])
	senha = PasswordField('Senha', validators=[DataRequired()])
