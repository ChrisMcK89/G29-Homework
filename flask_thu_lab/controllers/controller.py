from flask import render_template, request
from app import app
from models.event_list import events, add_new_event
from models.event import Event


@app.route('/events')
def index():
    return render_template('index.html', title='Home', events=events)


@app.route('/events', methods=['post'])
def add_event():
    event_date = request.form['date']
    name_of_event = request.form['name_of_event']
    num_of_guests = request.form['num_of_guests']
    room_location = request.form['room_location']
    description = request.form['description']
    new_event=Event(event_date, name_of_event, num_of_guests, room_location, description)
    add_new_event(new_event)
    return render_template('index.html', title='Home', events=events)

