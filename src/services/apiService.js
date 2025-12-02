const API_BASE_URL = '';

const request = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`API request failed: ${endpoint}`, error);
    throw error;
  }
};

export const submitContact = (formData) => 
  request('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });

export const getServiceImages = () => request('/api/services/images');

export const getPortfolioProjects = () => request('/api/portfolio/projects');

export const getProjects = () => request('/api/projects');