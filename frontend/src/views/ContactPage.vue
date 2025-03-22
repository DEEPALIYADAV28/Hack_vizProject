<template>
    <div class="contact-container">
      <h1 class="title">📞 Contact Us</h1>
  
      <div class="contact-content">
        
        <div class="contact-form">
          <h2>Send us a message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" placeholder="Enter your name" required>
            </div>
  
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" placeholder="Enter your email" required>
            </div>
  
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" rows="4" placeholder="Write your message..." required></textarea>
            </div>
  
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
  
        
        <div class="contact-info">
          <h2>📍 Get in Touch</h2>
          <p><strong>Email:</strong> <a href="mailto:support@krishisetu.com">support@krishisetu.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/919876543210" target="_blank">Chat on WhatsApp</a></p>
  
          <h2>📍 Our Location</h2>
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392877846!2d77.068897!3d28.5272805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d7e01a8a93b%3A0x14e84f05e1b3c0b7!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1633617707045!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactPage",
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      submitForm() {
        alert(`Thank you, ${this.form.name}! Your message has been sent.`);
       
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      },
    },
  };
  </script>
  
  <style scoped>
  
  .contact-container {
    max-width: 1000px;
    margin: 20px auto;
    padding: 20px;
    background: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
  }
  
  .title {
    font-size: 28px;
    color: #256D1B;
    margin-bottom: 20px;
  }
  
 
  .contact-content {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
 
  .contact-form {
    flex: 1;
    min-width: 300px;
    background: #F5F5F5;
    padding: 20px;
    border-radius: 10px;
  }
  
  .contact-form h2 {
    font-size: 22px;
    color: #256D1B;
    margin-bottom: 15px;
  }
  
  .form-group {
    text-align: left;
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input, 
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
 
  .submit-btn {
    background: #256D1B;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    font-size: 16px;
    transition: 0.3s;
  }
  
  .submit-btn:hover {
    background: #1A4E14;
  }
  
 
  .contact-info {
    flex: 1;
    min-width: 300px;
    padding: 20px;
    text-align: left;
  }
  
  .contact-info h2 {
    font-size: 22px;
    color: #256D1B;
    margin-bottom: 10px;
  }
  
  .contact-info p {
    font-size: 16px;
    margin-bottom: 8px;
  }
  
  .contact-info a {
    text-decoration: none;
    color: #FF9800;
    font-weight: bold;
  }
  
 
  .map {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    border: none;
    margin-top: 10px;
  }
  
 
  @media (max-width: 768px) {
    .contact-content {
      flex-direction: column;
    }
  }
  </style>
  