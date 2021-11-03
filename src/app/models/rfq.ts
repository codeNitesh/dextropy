import { Address } from "./users"

export class RFQ{
    id: string
    userId: string 
    process: string
    material: string
    finish: string[]
    quantity: string
    deliverySch: string
    deliveryLoc: Address
    ndaLocation: string
    // currency: string
    status: string
    quotes: Quotes[]

    bidDate: Date

    rfqFileLocation: string

    qualityCertificateName: string

    qualityPlanLocation: string
}

export class Quotes{
    supplierId: string
    state: string
    priceList: PriceList[]
    milestones: Milestones
    quoteDocument: string

    order: Order
}

export class PriceList{
    units: number
    unitPrice: number
}

export class Milestones{
    approvalDate: Date
    inspectionDate: Date
    shippingDate: Date
    deliveryDate: Date
}

export class Order{
    price: PriceList
    milestones: Milestones
    status: string

    orderDocument: string
}