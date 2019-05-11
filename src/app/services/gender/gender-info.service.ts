import { IGender } from "./../../interfaces/igender";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GenderInfoService {
  constructor() {}

  genderInfo: IGender[] = [
    {
      gender: "Female",
      genderId: "0"
    },
    {
      gender: "Male",
      genderId: "1"
    },
    {
      gender: "Other",
      genderId: "2"
    }
  ];

  getGender(): Observable<IGender[]> {
    return of(this.genderInfo);
  }
}
