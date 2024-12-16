from flask import Flask, jsonify, request
from flask_cors import CORS
from supabase import create_client

app = Flask(__name__)
CORS(app)
url="https://odwoberwruhawhxublid.supabase.co"
key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kd29iZXJ3cnVoYXdoeHVibGlkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjA1OTgwOCwiZXhwIjoyMDQ3NjM1ODA4fQ.K_fr90YISHBVouu5UlN_pksuioR4xodPtcDWkZAnLxw"
supabase = create_client(url,key)

# Route to fetch all students
@app.route('/api/students', methods=['GET'])
def get_students():
    try:
        # Retrieve only the names (first_name and last_name) from the "student" table
        response = supabase.table("student").select("first_name, last_name,student_id").execute()
        student_names = response.data
        return jsonify(student_names)
    except Exception as e:
        # Handle and return any errors that occur
        return jsonify({"error": str(e)})
    
    # Route to fetch a student by ID
@app.route('/api/students/<int:student_id>', methods=['GET'])
def get_students_ID(student_id):
    try:
        # Fetch student data based on student_id
        response = supabase.table("student").select("*").eq("student_id", student_id).execute()
        students = response.data
        
        # If there's at least one student in the response, return the first one
        if students:
            return jsonify(students[0])  # Return the first student object (not an array)
        else:
            return jsonify({"error": "Student not found"}), 404
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

    # Show Faculty List
@app.route('/api/faculty', methods=['GET'])
def get_faculty():
        try:
            response = supabase.table("faculty").select("first_name, last_name, faculty_id").execute()
            faculty = response.data
            return jsonify(faculty)
        except Exception as e:
        # Handle and return any errors that occur
            return jsonify({"error": str(e)})

    # Route to fetch a faculty by ID
@app.route('/api/faculty/<int:faculty_id>', methods=['GET'])
def get_faculty_ID(faculty_id):
    try:
        # Fetch student data based on faculty_id
        response = supabase.table("faculty").select("*").eq("faculty_id", faculty_id).execute()
        faculty = response.data
        
        # If there's at least one faculty in the response, return the first one
        if faculty:
            return jsonify(faculty[0])  # Return the first student object (not an array)
        else:
            return jsonify({"error": "faculty not found"}), 404
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500
 #Route to update students based off of ID   
@app.route('/api/students/<int:student_id>/update', methods=['PUT'])
def update_student(student_id):
    try:
        updated_data = request.json
        response = supabase.table("student").update(updated_data).eq("student_id", student_id).execute()
        return jsonify({"message": "Student updated successfully", "data": response.data}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
#route to update faculty based off of ID
@app.route('/api/faculty/<int:faculty_id>/update', methods=['PUT'])
def update_faculty(faculty_id):
    try:
        updated_data = request.json
        response = supabase.table("faculty").update(updated_data).eq("faculty_id", faculty_id).execute()
        return jsonify({"message": "Faculty updated successfully", "data": response.data}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
#Route to Add a faculty member using a post request  
@app.route('/api/faculty/add', methods=['POST'])
def add_faculty():
    try:
        new_faculty = request.json  # Get JSON data from the frontend
        response = supabase.table("faculty").insert(new_faculty).execute()

        # Check if the insert was successful
        if response.data:
            return jsonify({"message": "Faculty added successfully", "data": response.data}), 201
        else:
            return jsonify({"error": "Failed to add faculty", "details": response.error}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
