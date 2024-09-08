export const getTokenJwt = async () => {
  try {
    const response = await fetch(
      'http://localhost:4000/api/v1/auth/refresh-token',
      {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
      }
    );
    const { tokenJWT } = await response.json();

    return tokenJWT;
  } catch (error) {
    throw new Error('Failed to get JWT token');
  }
};
