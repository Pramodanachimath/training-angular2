export interface Investment {
    planName:string;
    planId:number;
    entryAge:string;
    type:string; // mutual, ULIP,PPF, FD, RD,
    term:string;
    purpose:string;  // education, retirement, marriage
    amount:number;
    risk:string; // high, low
    nominee:string; //father. son, daughter,
}
