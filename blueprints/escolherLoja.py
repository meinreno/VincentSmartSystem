#!/usr/bin/python
from flask import Flask, Blueprint, render_template, request, make_response, redirect, url_for, session

app = Flask(__name__)

escolherLoja_bp = Blueprint('escolherLoja_blueprint',__name__)

@escolherLoja_bp.route("/EscolherLoja")
def EscolherLoja():
	return render_template("MenuVincent/EscolherLoja.html")