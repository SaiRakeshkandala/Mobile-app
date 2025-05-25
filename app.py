from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/api/designers')
def get_designers():
    return jsonify([
        {"id": 1, "name": "Aisha Kapoor", "bio": "Modern minimalist with a love for natural light."},
        {"id": 2, "name": "Rohit Mehta", "bio": "Classic designs with bold accents."},
        {"id": 3, "name": "Sneha Desai", "bio": "Eclectic and eco-friendly interiors."}
    ])

if __name__ == '__main__':
    app.run(debug=True)
