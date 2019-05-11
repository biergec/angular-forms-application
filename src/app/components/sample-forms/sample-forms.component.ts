import { IGender } from "./../../interfaces/igender";
import { Component, OnInit } from "@angular/core";
import { GenderInfoService } from "src/app/services/gender/gender-info.service";
import { UserInformation } from "src/app/interfaces/user-information";

@Component({
  selector: "app-sample-forms",
  templateUrl: "./sample-forms.component.html",
  styleUrls: ["./sample-forms.component.css"]
})
export class SampleFormsComponent implements OnInit {
  genderInfo: IGender[];

  userInfo: UserInformation = {
    firstName: "",
    lastName: "",
    gender: 0,
    school: "",
    country: "",
    address: "",
    email: "",
    password: ""
  };

  constructor(private _genderSevices: GenderInfoService) {}

  ngOnInit() {
    this._genderSevices
      .getGender()
      .subscribe(gender => (this.genderInfo = gender));
  }

  onSubmit() {
    alert("Submit Clicked!");
  }

  tempData(): void {
    this.userInfo = {
      firstName: "Mustafa",
      lastName: "Ergeç",
      gender: 1,
      school: "Selçuk University",
      country: "Turkey",
      address: "Ankara",
      email: "mustafaergec225@gmail.com",
      password: "***"
    };
  }

  clearData(): void {
    this.userInfo = {
      firstName: "",
      lastName: "",
      gender: 1,
      school: "",
      country: "",
      address: "",
      email: "",
      password: ""
    };
  }
}
