from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample student data (for now, we will use this in memory)
students = [
    {'id': 1, 'name': 'John Doe', 'course': 'Computer Science'},
    {'id': 2, 'name': 'Jane Smith', 'course': 'Mathematics'},
    {'id': 3, 'name': 'Mark Johnson', 'course': 'Physics'}
]

# Route to fetch all students
@app.route('/api/students', methods=['GET'])
def get_students():
    return jsonify(students)

# Route to fetch a student by ID
@app.route('/api/students/<int:id>', methods=['GET'])
def get_student_by_id(id):
    student = next((student for student in students if student['id'] == id), None)
    if student is not None:
        return jsonify(student)
    else:
        return jsonify({'error': 'Student not found'}), 404
    
# Route to add a new student
@app.route('/api/students', methods=['POST'])
def add_student():
    new_student = request.get_json()
    new_student['id'] = len(students) + 1  # Simple ID generation
    students.append(new_student)
    return jsonify(new_student), 201  # Respond with the newly added student

# Route to delete a student by ID
@app.route('/api/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    global students
    students = [student for student in students if student['id'] != id]
    return jsonify({'message': 'Student deleted successfully'})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
