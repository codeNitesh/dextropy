import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Address, Users } from 'src/app/models/users';

import { PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  user: Users = new Users;
  userForm: FormGroup
  page = 4;

  businessType: string[] = [
    'Public',
    'Private',
    'Joint',
    'Partnership',
    'Individual',
    'Sole',
    'Branch',
    // 'NGO',
  ]

  paymentMethodList: any[] = [
    { key: 'NET_BANKING', name: 'NET BANKING' },
    { key: 'CREDIT_CARD', name: 'CREDIT CARD' },
    { key: 'DEBIT_CARD', name: 'DEBIT CARD' },
    { key: 'CHEQUE_DD', name: 'CHEQUE/DD' },
  ]

  
  lengthOfRegisteredAddress: number
  registeredAddressPageSize: number = 1
  registeredAddressPageIndex = 0

  lengthOfWorkshopAddress: number
  workshopAddressPageSize: number = 1
  workshopAddressPageIndex = 0

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userFormValidators()


    // demo
    if (this.user.registeredAddress == null ||  this.user.registeredAddress.length==0) {
      this.user.registeredAddress = []
      this.addNewRegisteredAddress()
    }
    this.lengthOfRegisteredAddress = this.user.registeredAddress.length

    if (this.user.workshopAddress == null || this.user.workshopAddress.length==0) {
      this.user.workshopAddress = []
      this.addNewWorkshopAddress()
    }
    this.lengthOfWorkshopAddress = this.user.workshopAddress.length
  }

  workshopAddressPageEvent(event: PageEvent) {
    this.lengthOfWorkshopAddress = event.length
    this.workshopAddressPageSize = event.pageSize
    this.workshopAddressPageIndex = event.pageIndex
  }
  registeredAddressPageEvent(event: PageEvent) {
    this.lengthOfRegisteredAddress = event.length
    this.registeredAddressPageSize = event.pageSize
    this.registeredAddressPageIndex = event.pageIndex
  }

  addNewWorkshopAddress() {
    this.user.workshopAddress.push(new Address())
    this.workshopAddressPageIndex = this.user.workshopAddress.length - 1
  }

  addNewRegisteredAddress() {
    const newRegisteredAddress: Address = {
      addressLine1: null,
      addressLine2: null,
      street: null,
      pincode: null,
      city: null,
      country: null,
    }
    this.user.registeredAddress.push(newRegisteredAddress)
    this.lengthOfRegisteredAddress = this.lengthOfRegisteredAddress + 1
    this.registeredAddressPageIndex = this.user.registeredAddress.length - 1
  }

 

  userFormValidators() {
    const websiteReg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
    const panNoReg = '[A-Z]{5}[0-9]{4}[A-Z]{1}'
    const gstinReg = '^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$'
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      website: ['', [Validators.pattern(websiteReg)]],
      businessType: ['', [Validators.required]],
      pan: ['', [Validators.required, Validators.pattern(panNoReg)]],
      gstin: ['', [Validators.pattern(gstinReg)]],
    })
  }

}
