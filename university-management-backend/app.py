# app.py
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
@app.route('/api/students', methods=['GET'])
def get_students():
    students = [
        {'id': 1, 'name': 'John Doe', 'course': 'Computer Science'},
        {'id': 2, 'name': 'Jane Smith', 'course': 'Mathematics'},
        {'id': 3, 'name': 'Mark Johnson', 'course': 'Physics'}
    ]
    return jsonify(students)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
