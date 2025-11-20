document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const passwordInput = document.getElementById('password');
    const copyBtn = document.getElementById('copy-btn');
    const lengthSlider = document.getElementById('length');
    const lengthValue = document.getElementById('length-value');
    const uppercaseCheckbox = document.getElementById('lowecase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
    const generateBtn = document.getElementById('generate-btn');
    const strengthLabel = document.getElementById('strength-label');
    const strengthBar = document.querySelector('.strength-bar');

    // Character sets
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // Initialize password on page load
    generatePassword();

    // Event Listeners
    lengthSlider.addEventListener('input', updateLengthValue);
    generateBtn.addEventListener('click', generatePassword);
    copyBtn.addEventListener('click', copyToClipboard);

    // Update length value display
    function updateLengthValue() {
        lengthValue.textContent = lengthSlider.value;
    }

    // Generate password function
    function generatePassword() {
        const length = parseInt(lengthSlider.value);
        const includeUppercase = uppercaseCheckbox.checked;
        const includeLowercase = lowercaseCheckbox.checked;
        const includeNumbers = numbersCheckbox.checked;
        const includeSymbols = symbolsCheckbox.checked;

        // Validate at least one option is selected
        if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
            alert('Please select at least one character type.');
            return;
        }

        // Build character set
        let charSet = '';
        if (includeUppercase) charSet += uppercaseChars;
        if (includeLowercase) charSet += lowercaseChars;
        if (includeNumbers) charSet += numberChars;
        if (includeSymbols) charSet += symbolChars;

        // Generate password
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            password += charSet[randomIndex];
        }

        // Ensure password contains at least one character from each selected type
        if (includeUppercase && !/[A-Z]/.test(password)) {
            const randomIndex = Math.floor(Math.random() * password.length);
            password = password.substring(0, randomIndex) + 
                      uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)] + 
                      password.substring(randomIndex + 1);
        }
        
        if (includeLowercase && !/[a-z]/.test(password)) {
            const randomIndex = Math.floor(Math.random() * password.length);
            password = password.substring(0, randomIndex) + 
                      lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)] + 
                      password.substring(randomIndex + 1);
        }
        
        if (includeNumbers && !/[0-9]/.test(password)) {
            const randomIndex = Math.floor(Math.random() * password.length);
            password = password.substring(0, randomIndex) + 
                      numberChars[Math.floor(Math.random() * numberChars.length)] + 
                      password.substring(randomIndex + 1);
        }
        
        if (includeSymbols && !/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) {
            const randomIndex = Math.floor(Math.random() * password.length);
            password = password.substring(0, randomIndex) + 
                      symbolChars[Math.floor(Math.random() * symbolChars.length)] + 
                      password.substring(randomIndex + 1);
        }

        // Display password
        passwordInput.value = password;
        
        // Update strength meter
        updatePasswordStrength(password);
    }

    // Update password strength
    function updatePasswordStrength(password) {
        let strength = 0;
        
        // Check length
        if (password.length >= 8) strength += 1;
        if (password.length >= 12) strength += 1;
        if (password.length >= 15) strength += 1;
        
        // Check character variety
        if (/[a-z]/.test(password)) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) strength += 1;
        
        // Update UI based on strength
        strengthBar.className = 'strength-bar';
        
        if (strength <= 3) {
            strengthBar.classList.add('weak');
            strengthLabel.textContent = 'Weak';
            strengthLabel.style.color = 'var(--danger-color)';
        } else if (strength <= 5) {
            strengthBar.classList.add('medium');
            strengthLabel.textContent = 'Medium';
            strengthLabel.style.color = 'var(--warning-color)';
        } else {
            strengthBar.classList.add('strong');
            strengthLabel.textContent = 'Strong';
            strengthLabel.style.color = 'var(--success-color)';
        }
    }

    // Copy password to clipboard
    function copyToClipboard() {
        const password = passwordInput.value;
        
        if (!password) {
            showToast('No password to copy!');
            return;
        }
        
        // Use the Clipboard API
        navigator.clipboard.writeText(password)
            .then(() => {
                // Update button icon and tooltip
                copyBtn.classList.remove('far');
                copyBtn.classList.add('fas', 'copied');
                copyBtn.title = 'Copied!';
                
                // Show toast notification
                showToast('Password copied to clipboard!');
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    copyBtn.classList.remove('fas', 'copied');
                    copyBtn.classList.add('far');
                    copyBtn.title = 'Copy to clipboard';
                }, 2000);
            })
            .catch(err => {
                // Fallback for older browsers
                passwordInput.select();
                document.execCommand('copy');
                
                // Update button icon and tooltip
                copyBtn.classList.remove('far');
                copyBtn.classList.add('fas', 'copied');
                copyBtn.title = 'Copied!';
                
                // Show toast notification
                showToast('Password copied to clipboard!');
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    copyBtn.classList.remove('fas', 'copied');
                    copyBtn.classList.add('far');
                    copyBtn.title = 'Copy to clipboard';
                }, 2000);
            });
    }

    // Show toast notification
    function showToast(message) {
        // Create toast element if it doesn't exist
        let toast = document.querySelector('.toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.backgroundColor = '#333';
            toast.style.color = 'white';
            toast.style.padding = '12px 24px';
            toast.style.borderRadius = '4px';
            toast.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            toast.style.zIndex = '1000';
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s ease';
            document.body.appendChild(toast);
        }
        
        // Set message and show toast
        toast.textContent = message;
        toast.style.opacity = '1';
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
        }, 3000);
    }
});
