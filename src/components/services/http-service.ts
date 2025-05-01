import apiClient  from "./api-client";

interface Entity {
    id: number;
}

class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>() {
        const controller = new AbortController();
        const signal: AbortSignal = controller.signal;

        const request =  apiClient
          .get<T[]>(this.endpoint, { signal: signal });

        return {request, cancel: () => controller.abort()};
    }
    
    create<T> (entity: T) {
        // ** keep this as promise, then subscribe to it in the component
        const request = apiClient.post(this.endpoint, entity); 

        return request;
    };
    
    update<T extends Entity>(entity: T){
        const request = apiClient.patch(`${this.endpoint}/${entity.id}`, entity);
        return request;
    };
    
    delete(id: number){
        const request = apiClient.delete(`${this.endpoint}/${id}`);
        return request;
    };

}
const create = (endpoint: string) => {
    return new HttpService(endpoint);
}

export default create;
