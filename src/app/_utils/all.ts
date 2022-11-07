import { HttpHeaders } from "@angular/common/http";

export const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
export const LOCAL_API = 'http://171.232.90.204:3000/api';

