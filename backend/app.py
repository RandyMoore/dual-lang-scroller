from flask import Flask, jsonify, render_template
from routes.content_routes import content_bp

app = Flask(__name__, 
            static_folder='../frontend/dist',
            template_folder='../frontend/dist')

app.register_blueprint(content_bp)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)