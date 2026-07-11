# 🔐 JWT Mini Version (Without External JWT Library)

A lightweight Node.js project that demonstrates how JSON Web Tokens (JWT) work by implementing JWT generation and verification **from scratch**, without using the `jsonwebtoken` package.

This project manually builds the JWT using Base64URL encoding, HMAC SHA256 signing, and signature verification to understand the internal mechanics of JWT.

---

## 🚀 Features

- Manual JWT Generation
- Manual JWT Verification
- Base64URL Encoding
- HMAC SHA256 Signature Generation
- Signature Validation
- Token Tampering Detection
- No `jsonwebtoken` Library Used

---

## 🛠 Tech Stack

- Node.js
- Built-in `crypto` module
- JavaScript

---

## 📂 Project Structure

```
jwt-mini/

├── index.js          # Runs all test cases
├── createToken.js    # Manual JWT generation
├── verifyToken.js    # Manual JWT verification
├── utils.js          # Base64URL & helper functions
├── package.json
└── README.md
```

---

## ⚙️ How JWT Is Created

```
Header (JSON)
      │
      ▼
Base64URL Encode
      │
      ▼
Payload (JSON)
      │
      ▼
Base64URL Encode
      │
      ▼
header.payload
      │
      ▼
HMAC SHA256 + Secret Key
      │
      ▼
Base64URL Encode Signature
      │
      ▼
header.payload.signature
```

---

## 🧪 Test Cases

### ✅ Test Case 1 — Valid Token

- Generate a JWT using the correct secret key.
- Verify the token using the same secret.

**Expected Output**

```
Token Verified Successfully ✅
```

---

### ❌ Test Case 2 — Wrong Secret Key

Verify the token with a different secret key.

**Expected Output**

```
Invalid Signature ❌
```

---

### ❌ Test Case 3 — Invalid Token Format

Verify a malformed JWT.

Example:

```
abc.def
```

**Expected Output**

```
Invalid Token Format ❌
```

---

### ❌ Test Case 4 — Random String

Verify a completely random string.

Example:

```
hello-world
```

**Expected Output**

```
Invalid JWT ❌
```

---

## 📖 Learning Objectives

This project demonstrates how JWT works internally:

- JWT Structure
- Header
- Payload
- Signature
- Base64URL Encoding
- HMAC SHA256
- Secret Key
- Token Verification
- Signature Matching
- JWT Tampering Detection

---

## ▶️ Run the Project

Install dependencies (if any):

```bash
npm install
```

Run:

```bash
node index.js
```

---

## 🎯 Purpose

The goal of this project is to understand the complete JWT creation and verification process without relying on third-party libraries.

By implementing JWT manually, this project provides a deeper understanding of:

- How JWT is structured
- How signatures are generated
- How token verification works
- Why changing the payload invalidates the signature
- The role of the secret key in authentication

---

## 📄 License

MIT
