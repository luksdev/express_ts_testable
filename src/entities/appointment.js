export class Appointment {
    constructor(props) {
        const { startsAt, endsAt } = props;
        if (startsAt <= new Date()) {
            throw new Error("Start date cannot be in the past");
        }
        if (endsAt <= startsAt) {
            throw new Error("End date cannot be before start date");
        }
        this.props = props;
    }
    get costumer() {
        return this.props.customer;
    }
    get startAt() {
        return this.props.startsAt;
    }
    get endsAt() {
        return this.props.endsAt;
    }
}
