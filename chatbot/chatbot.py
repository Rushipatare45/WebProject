# chatbot.py
def get_bot_response(user_input):
    # You can expand this logic to use a more complex model later
    responses = {
        "hi": "Hello! How can I assist you today?",
        "how are you": "I'm good, thank you for asking!",
        "bye": "Goodbye! Have a great day!"
    }

    # Convert the user input to lowercase to make the response case-insensitive
    user_input = user_input.lower()

    return responses.get(user_input, "Sorry, I don't understand that.")
