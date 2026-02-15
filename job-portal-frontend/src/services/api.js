import axios from 'axios';

const API_BASE_URLS = {
  USER: 'http://localhost:5454',
  PROFILE: 'http://localhost:8088',
  RESUME: 'http://localhost:8090',
  JOB: 'http://localhost:8082',
  APPLICATION: 'http://localhost:8087',
  NOTIFICATION: 'http://localhost:8086',
  ADMIN: 'http://localhost:8085',
  COMPANY: 'http://localhost:8089'
};

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Profile Service APIs
export const profileAPI = {
  createEmployerProfile: (data) => 
    axios.post(`${API_BASE_URLS.PROFILE}/profile/employer`, data, {
      headers: getAuthHeader()
    }),
  
  getEmployerProfile: (email) => 
    axios.get(`${API_BASE_URLS.PROFILE}/profile/employer/${email}`, {
      headers: getAuthHeader()
    }),
  
  updateEmployerProfile: (email, data) => 
    axios.put(`${API_BASE_URLS.PROFILE}/profile/employer/${email}`, data, {
      headers: getAuthHeader()
    }),
  
  createEmployeeProfile: (data) => 
    axios.post(`${API_BASE_URLS.PROFILE}/profile/jobseeker`, data, {
      headers: getAuthHeader()
    }),
  
  getEmployeeProfile: (email) => 
    axios.get(`${API_BASE_URLS.PROFILE}/profile/jobseeker/${email}`, {
      headers: getAuthHeader()
    }),
  
  updateEmployeeProfile: (email, data) => 
    axios.put(`${API_BASE_URLS.PROFILE}/profile/jobseeker/${email}`, data, {
      headers: getAuthHeader()
    })
};

// Resume Service APIs
export const resumeAPI = {
  uploadResume: (formData) => 
    axios.post(`${API_BASE_URLS.RESUME}/resume/upload`, formData, {
      headers: {
        ...getAuthHeader(),
        'Content-Type': 'multipart/form-data'
      }
    }),
  
  getResume: (email) => 
    axios.get(`${API_BASE_URLS.RESUME}/resume?email=${email}`, {
      headers: getAuthHeader()
    }),
  
  downloadResume: (id, email) => 
    axios.get(`${API_BASE_URLS.RESUME}/resume/download/${id}?email=${email}`, {
      headers: getAuthHeader(),
      responseType: 'blob'
    }),
  
  viewResume: (id, email) => 
    axios.get(`${API_BASE_URLS.RESUME}/resume/view/${id}?email=${email}`, {
      headers: getAuthHeader(),
      responseType: 'blob'
    }),
  
  deleteResume: (id, email) => 
    axios.delete(`${API_BASE_URLS.RESUME}/resume/${id}?email=${email}`, {
      headers: getAuthHeader()
    })
};

// Job Service APIs
export const jobAPI = {
  createJob: (data) => 
    axios.post(`${API_BASE_URLS.JOB}/job`, data, {
      headers: getAuthHeader()
    }),
  
  getAllJobs: () => 
    axios.get(`${API_BASE_URLS.JOB}/job`, {
      headers: getAuthHeader()
    }),
  
  getJobById: (id) => 
    axios.get(`${API_BASE_URLS.JOB}/job/${id}`, {
      headers: getAuthHeader()
    })
};

// Application Service APIs
export const applicationAPI = {
  applyForJob: (data) => 
    axios.post(`${API_BASE_URLS.APPLICATION}/application`, data, {
      headers: getAuthHeader()
    }),
  
  getUserApplications: (userId) => 
    axios.get(`${API_BASE_URLS.APPLICATION}/application/${userId}`, {
      headers: getAuthHeader()
    }),
  
  getAllApplications: () => 
    axios.get(`${API_BASE_URLS.APPLICATION}/application`, {
      headers: getAuthHeader()
    })
};

// Notification Service APIs
export const notificationAPI = {
  getNotifications: (userId) => 
    axios.get(`${API_BASE_URLS.NOTIFICATION}/notifications/${userId}`, {
      headers: getAuthHeader()
    }),
  
  markAsRead: (notificationId) => 
    axios.put(`${API_BASE_URLS.NOTIFICATION}/notifications/${notificationId}/read`, {}, {
      headers: getAuthHeader()
    })
};

// Admin Service APIs
export const adminAPI = {
  getAllJobs: () => 
    axios.get(`${API_BASE_URLS.ADMIN}/admin/jobs`, {
      headers: getAuthHeader()
    }),
  
  approveJob: (jobId) => 
    axios.post(`${API_BASE_URLS.ADMIN}/admin/approve-job`, { jobId }, {
      headers: getAuthHeader()
    })
};

// Company Service APIs
export const companyAPI = {
  createCompany: (data) => 
    axios.post(`${API_BASE_URLS.COMPANY}/company`, data, {
      headers: getAuthHeader()
    }),
  
  getCompany: (id) => 
    axios.get(`${API_BASE_URLS.COMPANY}/company/${id}`, {
      headers: getAuthHeader()
    })
};
