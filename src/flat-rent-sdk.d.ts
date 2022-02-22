export interface Flat {
    id: string
    title: string
    details: string
    photos: string[]
    coordinates: number[]
    bookedDates: []
    price: number
    totalPrice?: number
}

export interface SearchOptions {
    city: string
    checkInDate: Date
    checkOutDate: Date
    priceLimit: number
}

export interface BookFlat {
    flatId: number
    checkInDate: Date
    checkOutDate: Date
}

export function cloneDate(date: Date): Date

export function addDays(date: Date, days: number): Date

export class FlatRentSdk {

    get(id: string): Promise<Flat | null>

    search(parameters: SearchOptions): Promise<Flat[]>

    book(flatId: number, checkInDate: Date, checkOutDate: Date): Promise<number>

    _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): never

    _resetTime(date: Date): void

    _calculateDifferenceInDays(startDate: Date, endDate: Date): number

    _generateDateRange(from: Date, to: Date): Date[]

    _generateTransactionId(): number

    _areAllDatesAvailable(flat: Flat, dateRange: Date[]): boolean

    _formatFlatObject(flat: Flat, nightNumber?: number): Flat

    _readDatabase(): Flat[]

    _writeDatabase(database: Flat[]): void

    _syncDatabase(database: Flat[]): void
}

