from flask import Flask, jsonify

app = Flask(__name__)

matches = [
  {
    "id": 1,
    "pool": "A",
    "team1": "Kanpur",
    "team2": "Bombay",
    "time": "8:30 AM",
    "venue": "Ground 1"
  },
  {
    "id": 2,
    "pool": "A",
    "team1": "Delhi",
    "team2": "Bhubaneswar",
    "time": "8:30 AM",
    "venue": "Ground 1"
  }
]

@app.route('/api/matches')
def get_matches():
  return jsonify(matches)

if __name__ == '__main__':
  app.run()