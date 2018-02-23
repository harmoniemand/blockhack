import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

import { UserRepository } from '../repositories/user.repository';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  public User: BehaviorSubject<UserModel> = new BehaviorSubject(null);

  public Login(user: string, password: string) :Promise<any> {
      return new Promise((resolve, reject) => {
        resolve(null);
      });
  }

  public Logout():Promise<any> {
    return new Promise((res, rej) => {
        res();
    });
  }

  constructor(private userRepository: UserRepository) { }
  
}
