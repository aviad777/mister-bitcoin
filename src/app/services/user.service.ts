import { User } from "src/app/models/user"
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Move } from "../models/move";

const user: User = {
    name: 'robert plant',
    coins: 100,
    moves: []
}


@Injectable({
    providedIn: 'root'
})
export class UserService {

    private _user: User = user;


    getUser(): User {
        //RxJS' of() is a creational operator that allows you to create an RxJS Observable
        // from a sequence of values.

        if (localStorage.getItem('BitAppcurUser')) {
            return JSON.parse(localStorage.getItem('BitAppcurUser'))
        } else
            return user;
    }


    newUser(name) {
        const curUser: User = { name: name, coins: 100, moves: [] }
        this.saveUser(curUser);
        return curUser;
    }

    saveUser(user: User) {
        localStorage.setItem("BitAppcurUser", JSON.stringify(user));
    }



    async onTransferCoins(id, name, amount) {
        const user: User = await this.getUser();
        const newMove: Move = {
            'toId': id,
            'toName': name,
            'at': Date.now(),
            'amount': amount
        }
        user.moves.push(newMove);
        user.coins = user.coins - amount;
        this.saveUser(user);
    }
}