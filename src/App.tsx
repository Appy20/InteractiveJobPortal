
import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activePage, setActivePage] = useState('welcome');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    experience: '',
    skills: ''
  });

  useEffect(() => {
    // Trigger animation after component mounts
    setIsLoaded(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActivePage('success');
  };

  return (
    <main className={`container ${isLoaded ? 'loaded' : ''}`}>
      <div className="background-animation"></div>
      
      {activePage === 'welcome' && (
        <div className="welcome-screen">
          <h1 className="title">Welcome to <span className="highlight">CareerLaunch</span></h1>
          <p className="subtitle">Your dream job is just a few clicks away</p>
          <div className="pulse-button" onClick={() => setActivePage('form')}>
            Start Your Application
          </div>
          
          <div className="floating-icons">
            <div className="icon" style={{ animationDelay: '0s' }}>💼</div>
            <div className="icon" style={{ animationDelay: '1.5s' }}>📝</div>
            <div className="icon" style={{ animationDelay: '3s' }}>💻</div>
            <div className="icon" style={{ animationDelay: '4.5s' }}>📊</div>
            <div className="icon" style={{ animationDelay: '6s' }}>📈</div>
          </div>
        </div>
      )}

      {activePage === 'form' && (
        <div className="form-container slide-in">
          <h2>Apply Now</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="position">Desired Position</label>
              <select 
                id="position" 
                name="position" 
                value={formData.position} 
                onChange={handleChange} 
                required
              >
                <option value="">Select a position</option>
                <option value="developer">Software Developer</option>
                <option value="designer">UI/UX Designer</option>
                <option value="manager">Project Manager</option>
                <option value="analyst">Data Analyst</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="experience">Years of Experience</label>
              <input 
                type="number" 
                id="experience" 
                name="experience" 
                min="0" 
                max="50" 
                value={formData.experience} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="skills">Skills & Qualifications</label>
              <textarea 
                id="skills" 
                name="skills" 
                value={formData.skills} 
                onChange={handleChange} 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Submit Application</button>
          </form>
        </div>
      )}
      
      {activePage === 'success' && (
        <div className="success-container fade-in">
          <div className="success-checkmark">✓</div>
          <h2>Application Submitted!</h2>
          <p>Thank you for applying, {formData.name}. We'll be in touch soon.</p>
          <button 
            onClick={() => {
              setFormData({
                name: '',
                email: '',
                position: '',
                experience: '',
                skills: ''
              });
              setActivePage('welcome');
            }} 
            className="return-button"
          >
            Return to Home
          </button>
        </div>
      )}
    </main>
  );
}
