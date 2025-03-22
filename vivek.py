
import requests
import pyotp
import base64
from requests.auth import HTTPBasicAuth

# API endpoint
url = "https://api.challenge.hennge.com/challenges/003"

# Headers
headers = {
    "Content-Type": "application/json"
}

# Body
body = {
    "github_url": "https://gist.github.com/vivekkumarsoni123/47328e2a994d0b192a144937544cae5f",
    "contact_email": "str.vivekkumarsoni123@gmail.com",
    "solution_language": "python"
}

# Generate the TOTP
email = "str.vivekkumarsoni123@gmail.com"
shared_secret = f"{email}HENNGECHALLENGE003"
# Encode the shared secret in Base32 (required by pyotp)
base32_secret = base64.b32encode(shared_secret.encode()).decode()
totp = pyotp.TOTP(base32_secret, digits=10, digest="sha512")
otp = totp.now()

# Encode the Authorization header value
auth_value = base64.b64encode(f"{email}:{otp}".encode()).decode()

# Add the Authorization header
headers["Authorization"] = f"Basic {auth_value}"

# Make the POST request
response = requests.post(url, headers=headers, json=body)

# Print the response
print("Status Code:", response.status_code)
print("Response Body:", response.text)