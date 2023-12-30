import { BaseResponse } from "../models/model/baseResponse"
import { HttpStatusCode } from "../models/model/httpStatusCode";

export class EntityResponse<T> implements BaseResponse {
    message?: string | null;
    statusCode?: HttpStatusCode;
    readonly hasError?: boolean;

    entity? : T; 
}