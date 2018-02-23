import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';


@Injectable()
export class UserRepository {


    Get(id: string): Observable<UserModel> {
        throw new Error("not implemented");
    }

    constructor() { }

}
