// REF: https://www.techiediaries.com/angular/angular-9-8-tutorial-by-example-rest-crud-apis-http-get-requests-with-httpclient/
// NOTE: still need to complete Steps 14-15

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})


export class DataService {

    // *** REMEMBER: in package.json THIS! ==>>   "server" "json-server --watch ./server/data/boom.json",
    private REST_API_SERVER = 'http://localhost:3000/boom';
    // private REST_API_SERVER = './assets/data/json/classic.json';
    // private REST_API_SERVER = 'http://shigimcp.com/Xstage/chuckbaker/assets/data/json/classic.json';

    public first: string;
    public prev: string;
    public next: string;
    public last: string;


    constructor(private httpClient: HttpClient) { }


    handleError(error: HttpErrorResponse) {

        let errorMessage = 'Unknown error!';

        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = 'Error: ${error.error.message}';
        } else {
            // Server-side errors
            errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
        }

        window.alert(errorMessage);

        return throwError(errorMessage);
    }


    public sendGetRequest() {

        // console.log('this.REST_API_SERVER = ' + this.REST_API_SERVER);
        // console.log('this.httpClient = ' + this.httpClient);
        // console.log('this.httpClient.get(this.REST_API_SERVER) = ' + this.httpClient.get(this.REST_API_SERVER));

        // Add safe, URL encoded_page parameter
        // const httpOptions = { params: new HttpParams({ fromString: '_page=1&_limit=8' }) };

        // return this.httpClient.get(this.REST_API_SERVER);
        // return this.httpClient.get(this.REST_API_SERVER).pipe(catchError(this.handleError));
        // return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
        // return this.httpClient.get(this.REST_API_SERVER, httpOptions).pipe(retry(3), catchError(this.handleError));

        // tslint:disable-next-line: max-line-length
        return this.httpClient.get(this.REST_API_SERVER, { params: new HttpParams({ fromString: '_page=1&_limit=8' }), observe: 'response' })
            .pipe(retry(3), catchError(this.handleError), tap(data => {

                console.log('data.headers.get(Link) = ' + data.headers.get('Link'));

                this.parseLinkHeader(data.headers.get('Link'));
            }
        ));
    }


    parseLinkHeader(header: any) {

        if (header.length === 0) {
            return;
        }

        const parts = header.split(',');
        const links = {};

        parts.forEach(p => {
            const section = p.split(';');
            const url = section[0].replace(/<(.*)>/, '$1').trim();
            const name = section[1].replace(/rel="(.*)"/, '$1').trim();

            links[name] = url;
        });

        // tslint:disable-next-line: no-string-literal
        this.first = links['first'];
        // tslint:disable-next-line: no-string-literal
        this.last = links['last'];
        // tslint:disable-next-line: no-string-literal
        this.prev = links['prev'];
        // tslint:disable-next-line: no-string-literal
        this.next = links['next'];
    }


    public sendGetRequestToUrl(url: string) {
        return this.httpClient.get(url, { observe: 'response' }).pipe(retry(3), catchError(this.handleError), tap(data => {

            console.log('data.headers.get(Link) = ' + data.headers.get('Link'));

            this.parseLinkHeader(data.headers.get('Link'));
        }));
    }
}
