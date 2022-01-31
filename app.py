import time
from flask import Flask, render_template, send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='static', static_url_path='')
CORS(app)


@app.route('/api/time')
@cross_origin()
def get_current_time():
    return {'time': time.strftime("%a, %d %b %Y %H:%M:%S", time.gmtime())}


@ app.route('/')
@ cross_origin()
def server():
    return send_from_directory(app.static_folder, 'index.html')


@ app.route('/calculator')
@ cross_origin()
def calc():
    return render_template('calculator.html')


if __name__ == "__main__":
    app.run()
