export class InsurancePolicy {
    constructor(
        public policyId: number,
        public policyNumber: string,
        public policyType: string,
        public premiumAmount: number,
        public startDate: Date,
        public endDate: Date,
        public isActive: boolean,
        public customerId: number
    ) {}
}
