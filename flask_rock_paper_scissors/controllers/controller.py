from flask import render_template
from rps import app
# from models.player_list import players
from models.player import *
from models.game import *

@app.route('/<player_1_choice>/<player_2_choice>')
def return_choice(player_1_choice, player_2_choice):
    player_1 = Player("Chris", player_1_choice)
    player_2 = Player("Steve", player_2_choice)
    game_1 = Game(player_1_choice, player_2_choice)
    result = game_1.play()
    return render_template('result.html', title='Results', player_1=player_1, player_2=player_2, result=result)
    
    



# @app.route('/events', methods=['post'])
# def add_event():
#     event_date = request.form['date']
#     name_of_event = request.form['name_of_event']
#     num_of_guests = request.form['num_of_guests']
#     room_location = request.form['room_location']
#     description = request.form['description']
#     new_event=Event(event_date, name_of_event, num_of_guests, room_location, description)
#     add_new_event(new_event)
#     return render_template('index.html', title='Home', events=events)