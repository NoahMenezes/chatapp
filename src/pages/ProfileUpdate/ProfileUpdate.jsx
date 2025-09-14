import React, { useState, useRef, useEffect } from 'react';
import './ProfileUpdate.css';
import assets from '../../assets/assets';

const ProfileUpdate = () => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  // Handle file selection
  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setImage(file);
    }
  };

  // Handle drag and drop
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Add success animation or notification here
      console.log('Profile updated successfully!');
    }, 2000);
  };

  // Add parallax effect to background
  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = document.querySelector('.profile-container');
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      }
    };

    const handleMouseLeave = () => {
      const card = document.querySelector('.profile-container');
      if (card) {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      }
    };

    const profileContainer = document.querySelector('.profile-container');
    if (profileContainer) {
      profileContainer.addEventListener('mousemove', handleMouseMove);
      profileContainer.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (profileContainer) {
        profileContainer.removeEventListener('mousemove', handleMouseMove);
        profileContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="profile">
      {/* Floating particles effect */}
      <div className="floating-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
      
      <div className="profile-container">
        {/* Left Side - Image Section */}
        <div className="profile-image-section">
          <div className="profile-image-wrapper">
            <img 
              className='profile-pic' 
              src={image ? URL.createObjectURL(image) : assets.logo_icon} 
              alt="User Avatar" 
              onLoad={(e) => {
                e.target.style.animation = 'imageLoadAnimation 0.6s ease-out';
              }}
            />
            {/* Animated rings around profile picture */}
            <div className="orbit-ring ring-1"></div>
            <div className="orbit-ring ring-2"></div>
            <div className="orbit-ring ring-3"></div>
          </div>
        </div>
        
        {/* Right Side - Form Section */}
        <form ref={formRef} onSubmit={handleSubmit}>
          <h3>Profile Details</h3>
          
          {/* Enhanced Upload Label with Drag & Drop */}
          <label 
            htmlFor="avatar" 
            className={`upload-label ${dragActive ? 'drag-active' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <img 
              src={assets.avatar_icon} 
              alt="Upload" 
              className="upload-icon"
            />
            <span className="upload-text">
              {dragActive ? 'Drop image here' : 'Upload profile image'}
            </span>
            <div className="upload-sparkle"></div>
            <input 
              ref={fileInputRef}
              onChange={(e) => handleFileSelect(e.target.files[0])} 
              type="file" 
              id='avatar' 
              accept='.png, .jpg, .jpeg, .webp' 
              hidden 
            />
          </label>
          
          {/* Enhanced Name Input */}
          <div className="input-wrapper">
            <input 
              type="text" 
              placeholder='Your name' 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
              className="enhanced-input"
            />
            <div className="input-highlight"></div>
          </div>
          
          {/* Enhanced Bio Textarea */}
          <div className="input-wrapper">
            <textarea 
              placeholder='Write your profile bio...' 
              rows="4" 
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
              className="enhanced-textarea"
            />
            <div className="input-highlight"></div>
          </div>
          
          {/* Spectacular Submit Button */}
          <button 
            type='submit' 
            className={`submit-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            <span className="button-text">
              {isLoading ? 'Saving...' : 'Save Changes'}
            </span>
            <div className="button-particles">
              {[...Array(8)].map((_, i) => (
                <div key={i} className={`particle-dot dot-${i + 1}`}></div>
              ))}
            </div>
            <div className="button-ripple"></div>
          </button>
        </form>
      </div>

      <style jsx>{`
        /* Additional component-specific styles */
        .floating-particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: particleFloat 8s linear infinite;
        }

        .particle-1 { left: 10%; animation-delay: 0s; }
        .particle-2 { left: 20%; animation-delay: 1s; }
        .particle-3 { left: 40%; animation-delay: 2s; }
        .particle-4 { left: 60%; animation-delay: 3s; }
        .particle-5 { left: 80%; animation-delay: 4s; }
        .particle-6 { left: 90%; animation-delay: 5s; }

        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
          }
        }

        .profile-image-wrapper {
          position: relative;
          display: inline-block;
        }

        .orbit-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid rgba(102, 126, 234, 0.3);
          border-top-color: rgba(102, 126, 234, 0.8);
          border-radius: 50%;
          animation: orbitRotate 4s linear infinite;
        }

        .ring-1 {
          width: 230px;
          height: 230px;
          animation-duration: 3s;
        }

        .ring-2 {
          width: 260px;
          height: 260px;
          animation-duration: 4s;
          animation-direction: reverse;
        }

        .ring-3 {
          width: 290px;
          height: 290px;
          animation-duration: 5s;
          border-color: rgba(240, 147, 251, 0.2);
          border-top-color: rgba(240, 147, 251, 0.6);
        }

        @keyframes orbitRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes imageLoadAnimation {
          from {
            opacity: 0;
            transform: scale(0.5) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .upload-label.drag-active {
          border-color: rgba(102, 126, 234, 0.8) !important;
          background: rgba(102, 126, 234, 0.1) !important;
          transform: scale(1.02) !important;
        }

        .upload-sparkle {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
        }

        .input-wrapper {
          position: relative;
        }

        .input-highlight {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #667eea, #764ba2);
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .enhanced-input:focus + .input-highlight,
        .enhanced-textarea:focus + .input-highlight {
          width: 100%;
        }

        .submit-button {
          position: relative;
          overflow: hidden;
        }

        .button-particles {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .particle-dot {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          opacity: 0;
        }

        .submit-button:hover .particle-dot {
          animation: particleExplode 0.8s ease-out;
        }

        .dot-1 { top: 20%; left: 20%; animation-delay: 0s; }
        .dot-2 { top: 20%; right: 20%; animation-delay: 0.1s; }
        .dot-3 { top: 50%; left: 10%; animation-delay: 0.2s; }
        .dot-4 { top: 50%; right: 10%; animation-delay: 0.3s; }
        .dot-5 { bottom: 20%; left: 20%; animation-delay: 0.4s; }
        .dot-6 { bottom: 20%; right: 20%; animation-delay: 0.5s; }
        .dot-7 { top: 30%; left: 50%; animation-delay: 0.6s; }
        .dot-8 { bottom: 30%; left: 50%; animation-delay: 0.7s; }

        @keyframes particleExplode {
          0% {
            opacity: 0;
            transform: scale(0) translate(0, 0);
          }
          50% {
            opacity: 1;
            transform: scale(1) translate(var(--dx, 0px), var(--dy, 0px));
          }
          100% {
            opacity: 0;
            transform: scale(0.5) translate(var(--dx, 0px), var(--dy, 0px));
          }
        }

        .dot-1 { --dx: -30px; --dy: -30px; }
        .dot-2 { --dx: 30px; --dy: -30px; }
        .dot-3 { --dx: -40px; --dy: 0px; }
        .dot-4 { --dx: 40px; --dy: 0px; }
        .dot-5 { --dx: -30px; --dy: 30px; }
        .dot-6 { --dx: 30px; --dy: 30px; }
        .dot-7 { --dx: 0px; --dy: -40px; }
        .dot-8 { --dx: 0px; --dy: 40px; }

        .button-ripple {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.5s ease;
        }

        .submit-button:active .button-ripple {
          width: 300px;
          height: 300px;
        }

        .submit-button.loading {
          background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #667eea);
          background-size: 400% 400%;
          animation: loadingGradient 2s ease-in-out infinite;
        }

        @keyframes loadingGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .submit-button.loading .button-text {
          animation: loadingPulse 1.5s ease-in-out infinite;
        }

        @keyframes loadingPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Enhanced responsive design */
        @media (max-width: 768px) {
          .orbit-ring {
            display: none;
          }
          
          .particle {
            width: 3px;
            height: 3px;
          }
          
          .floating-particles {
            opacity: 0.5;
          }
        }

        /* Accessibility improvements */
        .upload-label:focus-within .upload-sparkle {
          animation: sparkle 1s ease-in-out infinite;
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .particle,
          .orbit-ring,
          .upload-sparkle,
          .button-particles {
            animation: none;
          }
          
          .profile-pic {
            animation: none;
          }
          
          .submit-button.loading {
            animation: none;
            background: #667eea;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .profile-container {
            background: rgba(26, 32, 44, 0.95);
            color: white;
          }
          
          .enhanced-input,
          .enhanced-textarea {
            background: rgba(45, 55, 72, 0.8);
            color: white;
            border-color: rgba(255, 255, 255, 0.1);
          }
          
          .enhanced-input::placeholder,
          .enhanced-textarea::placeholder {
            color: rgba(255, 255, 255, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default ProfileUpdate;