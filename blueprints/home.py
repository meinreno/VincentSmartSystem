#!/usr/bin/python
from flask import Flask, Blueprint, render_template, request, make_response, redirect, url_for, session

app = Flask(__name__)

home_bp = Blueprint('home_blueprint',__name__)

@home_bp.route("/home")
def home():
	return render_template("MenuVincent/home.html")
