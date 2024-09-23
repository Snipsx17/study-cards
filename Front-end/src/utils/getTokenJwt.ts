export const getTokenJwt = async () => {
  const url = 'http://localhost:4000/api/v1/auth/refresh-token';
  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
    });
    const { tokenJWT } = await response.json();

    return tokenJWT;
  } catch (error) {
    throw new Error('Failed to get JWT token');
  }
};
