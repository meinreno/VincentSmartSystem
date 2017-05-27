from flask import Flask, Blueprint, render_template, request, make_response, redirect, url_for, session
from forms.index import Login_Form
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy

from blueprints.usuarios import usuarios_bp
from blueprints.home import home_bp
from blueprints.escolherLoja import escolherLoja_bp
from blueprints.produtos import produtos_bp

app = Flask(__name__)

app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'

#REGISTROS DE BLUEPRINTS
app.register_blueprint(usuarios_bp)
app.register_blueprint(home_bp)
app.register_blueprint(escolherLoja_bp)
app.register_blueprint(produtos_bp)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

@login_manager.unauthorized_handler
def unauthorized():
    
    return redirect(url_for('index'))

@login_manager.user_loader
def user_loader(user_id):
	pass
	#return usuarios.query.get(user_id)


@app.route('/')
def index():
	form = Login_Form()
	return render_template("index/index.html", form=form)
	

if __name__=='__main__':
	app.run(debug=True)