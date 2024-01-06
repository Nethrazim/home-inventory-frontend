import { BaseResponse } from '../../models/model/models';
import { EntityResponse } from '../entity-response';
import { TokenModel } from './token-model';
import { UserModel } from './user-model';

export class AuthenticateResponse extends EntityResponse<UserModel> {

}