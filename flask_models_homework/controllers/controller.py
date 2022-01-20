from flask import render_template
from app import app
from models.order import orders

@app.route('/orders')
def index():
    return render_template('index.html', title='All Orders', order = orders)

@app.route('/order/<index>')
def order(index):
    chosen_order = orders[int(index)]
    return render_template('order.html', title='Single Order', current_order = chosen_order)


