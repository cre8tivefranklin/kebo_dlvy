import os
import openai

# Load your API key from an environment variable or secret management service
openai.api_key = os.getenv("OPENAI_API_KEY")
openai.api_key = "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"

response = openai.Completion.create(model="text-davinci-003", prompt="Say this is a test", temperature=0, max_tokens=7)