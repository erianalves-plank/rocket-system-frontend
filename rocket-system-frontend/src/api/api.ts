import axios, { AxiosResponse } from 'axios';

type ApiResponse<T> = {
    data: T;
};

export const API_BASE_URL = 'http://localhost:8080/'; // Replace with your API base URL

const api = axios.create({
    baseURL: API_BASE_URL,
});

// Generic function to handle API responses and extract data
const handleApiResponse = <T>(response: AxiosResponse<ApiResponse<T>>): T => {
    console.log('data extracted ', response.data.data);
    return response.data;
};

// Generic function to handle API errors
const handleApiError = (error: any): void => {
    console.error('API Error:', error);
    // Handle error accordingly (e.g., show error message, perform fallback actions)
};

// Generic CRUD functions
const post = async <T>(path: string, entity: T): Promise<T | void> => {
    try {
        const response = await api.post<ApiResponse<T>>(`/${path}`, entity);
        return handleApiResponse(response);
    } catch (error) {
        return handleApiError(error);
    }
};

const get = async <T>(path: string): Promise<T[]> => {

    try {
        const response = await api.get<ApiResponse<T[]>>(`/${path}`);
        console.log('result of the get ', response.data.data);
        console.log('type of get ', typeof response);
        return response.data.data;
    } catch (error) {
        handleApiError(error);
        return []; 
    }
};

const update = async <T>(path: string, id: number, entity: T): Promise<T | void> => {
    try {
        const response = await api.put<ApiResponse<T>>(`/${path}/${id}`, entity);
        return handleApiResponse(response);
    } catch (error) {
        return handleApiError(error);
    }
};

const del = async (path: string, id: number): Promise<void> => {
    try {
        await api.delete<void>(`/${path}/${id}`);
    } catch (error) {
        return handleApiError(error);
    }
};

export {
    get,
    post,
    update,
    del
};

// Example usage
/* type Product = {
    id: number;
    name: string;
    price: number;
};

const createProduct = (product: Product): Promise<Product> => {
    return createEntity<Product>(product);
};

const readProduct = (id: number): Promise<Product> => {
    return readEntity<Product>(id);
};

const updateProduct = (id: number, product: Product): Promise<Product> => {
    return updateEntity<Product>(id, product);
};

const deleteProduct = (id: number): Promise<void> => {
    return deleteEntity(id);
};

// Usage example:
const product: Product = {
    id: 1,
    name: 'Example Product',
    price: 10.99,
};

createProduct(product)
    .then((createdProduct) => {
        console.log('Product created:', createdProduct);
        // Perform additional actions
    })
    .catch((error) => {
        console.error('Error creating product:', error);
        // Handle error accordingly
    });
 */