export async function fetchAPI(path, body) {
    const options = {
      method :"POST",
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    if (body) {
      options.body = JSON.stringify(body);
    }
  
    try {
      const response = await fetch("https://parking-nodejs-server.onrender.com/api/parking/"+path, options);
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Fetch API Error:', error.message);
      throw error;
    }
  }
  