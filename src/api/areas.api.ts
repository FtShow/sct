const BASE_URL = 'https://showroom.eis24.me/c300/api/v4/test';

export const getAreasByIds = async (ids: number[]) => {
  if (!ids.length) {
    return [];
  }

  const params = ids.map((id) => `id__in=${id}`).join('&');

  const response = await fetch(`${BASE_URL}/areas/?${params}`);

  if (!response.ok) {
    throw new Error('Failed to fetch areas');
  }

  return response.json();
};
