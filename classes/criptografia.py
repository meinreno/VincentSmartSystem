#!/usr/bin/python
import md5, hashlib

class CriptografiaSenha():
	def __init__(self, getsenha):
		self.senha = getsenha

	def gerarHash(self, salt):
		m = hashlib.md5()
		senhaSalt = self.senha + salt
		m.update(senhaSalt.encode('utf-8'))
		return m.hexdigest()
