import React, { useState } from "react";
const url = 'http://react-http-611b5-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json';
const useHttp = (requestConfig, applyData) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async (taskText) => {

        setIsLoading(true);
        setError(null);

        try {
          const response = await fetch(
            requestConfig.url, {
                method: requestConfig.method,
                headers: requestConfig.headers,
                body: JSON.stringify(requestConfig.body)
            }
          );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
    
          applyData(data);

        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
      };

    return {
        isLoading,
        error,
        sendRequest
    }  
}

export default useHttp;