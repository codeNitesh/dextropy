export class Users {
    userId: string
    firstName: string
    lastName: string
    companyName: string
    email: string
    mobile: number
    website: string
    businessType: string
    password: string

    type: string

    // More info for both
    gstin: string
    pan: string
    communicationPreference: string
    paymentMethods: []
    contacts: Person[]


    // for BUYER
    billingAddress: Address
    shippingAddress: Address[]
    

    // for SUPPLIER
    isEKYCVerified: boolean
    udyogAadhar: string
    msme: string
    registeredAddress: Address[]
    workshopAddress: Address[]
    cin: string
    experienceInMonths: number
    finance: number

    capabilities: Capability[]

    // for qualityCertificates
    qualityCertificates: QualityCertificate[]
}

export class QualityCertificate{
    certificateName: string
    validUpto: Date
    certificateLocation: string
    fileUpload: boolean
}

export class Machine {
    type: string
    axis: number
    maxJobSize: number
}

export class Capability {
    specialization: string
    materials: string[]
    finishes: string[]
    testingFacility: string
    qualityCertifications: string[]
    outsourceProcesses: string[]
    machines: Machine[]
}

export class Address {
    addressLine1: string
    addressLine2: string
    street: string
    pincode: string
    city: string
    country: string
}

export class MachineDetails{
    process_key: string
    length: number
    currentIndex: number
}

export class Person{
    firstName: string
    lastName: string
    primaryEmail: string
    secondaryEmail: string
    primaryMobile: string
    secondaryMobile: string
    role: string
}