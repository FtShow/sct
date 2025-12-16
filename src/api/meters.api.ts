const BASE_URL = 'https://showroom.eis24.me/c300/api/v4/test';

export interface GetMetersParams {
    limit: number;
    offset: number;
}

export const getMeters = async ({ limit, offset }: GetMetersParams) => {
    const response = await fetch(`${BASE_URL}/meters/?limit=${limit}&offset=${offset}`);

    if (!response.ok) {
        throw new Error('Failed to fetch meters');
    }

    return response.json();
};

export const deleteMeter = async (meterId: string) => {
    const response = await fetch(`/api/meters/${meterId}/`, { method: 'DELETE' });
    console.log('was deleted', response);


    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to delete meter: ${response.status} ${text}`);
    }
};
