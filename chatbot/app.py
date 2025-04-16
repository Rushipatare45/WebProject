from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Dummy chatbot function
def get_chatbot_response(message):
    if "hello" in message.lower():
        return "Hello! How can I assist you today?"
    elif "bye" in message.lower():
        return "Goodbye! Have a great day!"
    else:
        return "I'm sorry, I didn't understand that."

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    bot_response = get_chatbot_response(user_message)
    return jsonify({'reply': bot_response})

if __name__ == '__main__':
    app.run(debug=True)

