
def get_response(user_message):
    # Simple AI logic for demonstration
    responses = {
        "What is my balance?": "You can check your balance in your account.",
        "How do I pay my bill?": "You can pay your bill through the payment portal.",
        # Add more responses as needed
    }
    return responses.get(user_message, "I'm not sure how to answer that.")
