import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { catchError, map, of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

export class AsyncValidators {
    static uniqueById(id: any, cb: (value: any, id: any) => Observable<boolean>): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors|null> => {
            if(!control.value) {
                return of(null);
            }
            return cb(control.value, id).pipe(
                map(response => response ? null : { unique: true }),
                catchError(() => of(null)),
            );
        } 
    }
}