from supabase import create_client
from flask import Flask, request, jsonify
from flask_cors import CORS

# Search students
@app.route('/students',methods=['GET'])
def get_students(student_id,last_name):
    if student_id > 0: 
        try:
            response = supabase.table("student").select("*").eq("student_id",student_id).execute()
            students = response.data
            return jsonify(students)
        except:
            return jsonify({"error": str(e)})
    if last_name > 0: 
        try:
            response = supabase.table("student").select("*").eq("last_name",last_name).execute()
            students = response.data
            return jsonify(students)
        except:
            return jsonify({"error": str(e)})
    else:
        try:
            response = supabase.table("student").select("*").execute()
            students = response.data
            return jsonify(students)
        except:
            return jsonify({"error": str(e)})

@app.route('/student',methods=['DELETE'])
def del_student(student_id):
    response = supabase.table('students').delete().eq('student_id', student_id).execute()
    return response

# Search faculty
@app.route('/faculty',methods=['GET'])
def get_faculty(faculty_id,last_name):
    if faculty_id > 0: 
        try:
            response = supabase.table("faculty").select("*").eq("faculty_id",faculty_id).execute()
            faculty = response.data
            return jsonify(faculty)
        except:
            return jsonify({"error": str(e)})
    if last_name > 0: 
        try:
            response = supabase.table("faculty").select("*").eq("last_name",last_name).execute()
            faculty = response.data
            return jsonify(faculty)
        except:
            return jsonify({"error": str(e)})
    else:
        try:
            response = supabase.table("faculty").select("*").execute()
            students = response.data
            return jsonify(faculty)
        except:
            return jsonify({"error": str(e)})

# Search classes
@app.route('/classes', methods=['GET'])
def get_classes():
    try:
        response = supabase.table('classes').select("*").execute()
        classes = response.data
        return jsonify(classes), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Add new classes 
@app.route('/classes', methods=['POST'])
def add_class():
    try:
        data = request.json
        response = supabase.table('classes').insert(data).execute()
        return jsonify(response.data), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

app = Flask(__name__)

url="https://odwoberwruhawhxublid.supabase.co"
key="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kd29iZXJ3cnVoYXdoeHVibGlkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjA1OTgwOCwiZXhwIjoyMDQ3NjM1ODA4fQ.K_fr90YISHBVouu5UlN_pksuioR4xodPtcDWkZAnLxw"
supabase = create_client(url,key)



if __name__ == '__main__':
    app.run(debug=True)