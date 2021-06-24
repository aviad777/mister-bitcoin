
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BitcoinService {

    constructor(private http: HttpClient) { }

    getRate() {
        return this.http
            .get<string>('https://blockchain.info/tobtc?currency=USD&value=1')
            .pipe(
                map(res => res)
            )
    }

    getMarketPrice() {
        return this.http
            .get<Array<Object>>('https://api.blockchain.info/charts/market-price?timespan=1year&format=json&cors=true')
            .pipe(
                map(res => res)
            )
    }

    getConfirmedTransactions() {
        return this.http
            .get<Array<Object>>('https://api.blockchain.info/charts/n-transactions?timespan=1year&format=json&cors=true')
            .pipe(
                map(res => res)
            )
    }

}

// export class ContactService {

//     //mock the server
//     private _contactsDb: Contact[] = CONTACTS;
//     private _contacts$ = new BehaviorSubject<Contact[]>([])
//     public contacts$ = this._contacts$.asObservable()

//     constructor() {
//     }


//     public loadContacts(filterBy = null): any {
//       let contacts = this._contactsDb;
//       if (filterBy && filterBy.term) {
//         contacts = this._filter(contacts, filterBy.term)
//       }
//       this._contacts$.next(this._sort(contacts))
//     }