/**
 * JOB NOTIFICATION APP - DESIGN SYSTEM UTILITIES
 * Premium B2C SaaS Foundation
 */

// ============================================
// 1. DESIGN TOKEN ACCESS
// ============================================

const DesignTokens = {
  colors: {
    background: '#F7F6F3',
    textPrimary: '#111111',
    accent: '#8B0000',
    success: '#5A7D5A',
    warning: '#B8860B',
    border: '#D9D9D9'
  },
  
  spacing: {
    1: '8px',
    2: '16px',
    3: '24px',
    4: '40px',
    5: '64px'
  },
  
  typography: {
    fontHeading: "'Georgia', 'Times New Roman', serif",
    fontBody: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    sizes: {
      xs: '14px',
      sm: '16px',
      base: '18px',
      lg: '24px',
      xl: '32px',
      '2xl': '40px',
      '3xl': '48px'
    }
  }
};

// ============================================
// 2. UTILITY FUNCTIONS
// ============================================

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>}
 */
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
}

/**
 * Validate required form field
 * @param {HTMLInputElement} input - Input element to validate
 * @param {string} errorMessage - Error message to display
 * @returns {boolean}
 */
function validateInput(input, errorMessage) {
  const value = input.value.trim();
  const errorElement = input.parentElement.querySelector('.input-error-message');
  
  if (!value) {
    input.classList.add('input--error');
    if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.style.display = 'block';
    }
    return false;
  }
  
  input.classList.remove('input--error');
  if (errorElement) {
    errorElement.style.display = 'none';
  }
  return true;
}

/**
 * Clear validation state
 * @param {HTMLInputElement} input - Input element to clear
 */
function clearValidation(input) {
  input.classList.remove('input--error');
  const errorElement = input.parentElement.querySelector('.input-error-message');
  if (errorElement) {
    errorElement.style.display = 'none';
  }
}

// ============================================
// 3. COMPONENT INITIALIZERS
// ============================================

/**
 * Initialize all copy buttons with prompt-box class
 */
function initializeCopyButtons() {
  const copyButtons = document.querySelectorAll('.prompt-box__copy-btn');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', async function() {
      const promptBox = this.closest('.prompt-box');
      const codeElement = promptBox.querySelector('.prompt-box-content') || promptBox.querySelector('div:last-child');
      const textToCopy = codeElement.textContent;
      
      const success = await copyToClipboard(textToCopy);
      if (success) {
        const originalText = this.textContent;
        this.textContent = 'Copied!';
        setTimeout(() => {
          this.textContent = originalText;
        }, 2000);
      }
    });
  });
}

/**
 * Initialize form validation
 */
function initializeFormValidation() {
  const inputs = document.querySelectorAll('.input[required]');
  
  inputs.forEach(input => {
    // Clear error on input
    input.addEventListener('input', () => {
      clearValidation(input);
    });
    
    // Validate on blur
    input.addEventListener('blur', () => {
      if (input.hasAttribute('required')) {
        validateInput(input, 'This field is required');
      }
    });
  });
}

/**
 * Initialize button loading states
 * @param {HTMLButtonElement} button - Button element
 * @param {boolean} isLoading - Loading state
 */
function setButtonLoading(button, isLoading) {
  if (isLoading) {
    button.disabled = true;
    button.dataset.originalText = button.textContent;
    button.textContent = 'Loading...';
  } else {
    button.disabled = false;
    button.textContent = button.dataset.originalText || button.textContent;
  }
}

// ============================================
// 4. STATUS BADGE UPDATES
// ============================================

/**
 * Update status badge in top bar
 * @param {'Not Started' | 'In Progress' | 'Shipped'} status - New status
 */
function updateStatusBadge(status) {
  const statusBadge = document.querySelector('.top-bar__status');
  if (!statusBadge) return;
  
  // Remove old status classes
  statusBadge.classList.remove('status-not-started', 'status-in-progress', 'status-shipped');
  
  // Set new status
  let statusClass = '';
  let statusIcon = '';
  
  switch (status) {
    case 'Not Started':
      statusClass = 'status-not-started';
      statusIcon = '○';
      break;
    case 'In Progress':
      statusClass = 'status-in-progress';
      statusIcon = '◐';
      break;
    case 'Shipped':
      statusClass = 'status-shipped';
      statusIcon = '●';
      break;
  }
  
  statusBadge.classList.add(statusClass);
  statusBadge.innerHTML = `<span>${statusIcon}</span> ${status}`;
}

// ============================================
// 5. PROOF CHECKLIST UPDATES
// ============================================

/**
 * Update proof checklist item
 * @param {number} index - Item index (0-based)
 * @param {boolean} checked - Checked state
 */
function updateProofItem(index, checked) {
  const proofItems = document.querySelectorAll('.proof-item');
  if (!proofItems[index]) return;
  
  const checkbox = proofItems[index].querySelector('.proof-checkbox');
  if (checked) {
    checkbox.classList.add('checked');
    checkbox.textContent = '✓';
  } else {
    checkbox.classList.remove('checked');
    checkbox.textContent = '';
  }
}

/**
 * Mark all proof items as complete
 */
function completeAllProofItems() {
  const proofItems = document.querySelectorAll('.proof-item');
  proofItems.forEach((item, index) => {
    updateProofItem(index, true);
  });
}

// ============================================
// 6. ACCESSIBILITY UTILITIES
// ============================================

/**
 * Announce message to screen readers
 * @param {string} message - Message to announce
 */
function announceToScreenReader(message) {
  let announcer = document.getElementById('sr-announcer');
  
  if (!announcer) {
    announcer = document.createElement('div');
    announcer.id = 'sr-announcer';
    announcer.className = 'u-sr-only';
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    document.body.appendChild(announcer);
  }
  
  announcer.textContent = message;
  
  // Clear after announcement
  setTimeout(() => {
    announcer.textContent = '';
  }, 1000);
}

// ============================================
// 7. ERROR & EMPTY STATE DISPLAY
// ============================================

/**
 * Show error state in a container
 * @param {HTMLElement} container - Container element
 * @param {Object} options - Error options
 */
function showErrorState(container, options) {
  const { title, message, actionText, onAction } = options;
  
  container.innerHTML = `
    <div class="error-state">
      <div class="error-state__icon">!</div>
      <h3 class="error-state__title">${title}</h3>
      <p class="error-state__message">${message}</p>
      ${actionText ? `<button class="btn btn--primary">${actionText}</button>` : ''}
    </div>
  `;
  
  if (onAction && actionText) {
    container.querySelector('.btn').addEventListener('click', onAction);
  }
}

/**
 * Show empty state in a container
 * @param {HTMLElement} container - Container element
 * @param {Object} options - Empty state options
 */
function showEmptyState(container, options) {
  const { icon, title, description, actionText, onAction } = options;
  
  container.innerHTML = `
    <div class="empty-state">
      <div class="empty-state__icon">${icon || '○'}</div>
      <h3 class="empty-state__title">${title}</h3>
      <p class="empty-state__description">${description}</p>
      ${actionText ? `<button class="btn btn--primary">${actionText}</button>` : ''}
    </div>
  `;
  
  if (onAction && actionText) {
    container.querySelector('.btn').addEventListener('click', onAction);
  }
}

// ============================================
// 8. INITIALIZATION
// ============================================

/**
 * Initialize all design system components
 */
function initializeDesignSystem() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initializeCopyButtons();
      initializeFormValidation();
    });
  } else {
    initializeCopyButtons();
    initializeFormValidation();
  }
}

// Auto-initialize on DOM ready
initializeDesignSystem();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DesignTokens,
    copyToClipboard,
    validateInput,
    clearValidation,
    initializeCopyButtons,
    initializeFormValidation,
    setButtonLoading,
    updateStatusBadge,
    updateProofItem,
    completeAllProofItems,
    announceToScreenReader,
    showErrorState,
    showEmptyState,
    initializeDesignSystem
  };
}
