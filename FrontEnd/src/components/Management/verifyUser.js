const verifyToken = async (token) => {
    if (!token) {
      return false;  
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/admin/authverify', {
        method: 'GET',
        headers: {
          Authorization: `${token}`,  
        },
      });
  
      const data = await response.json();
      return data.status;
    } catch (error) {
      console.error('Error during token verification:', error);
      return false;  
    }
  };
  
  export default verifyToken;
  