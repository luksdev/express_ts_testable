import { Appointment } from '../entities/appointment';

interface createAppointmentRequest {
   customer: string;
   startsAt: Date;
   endsAt: Date;
}

type createAppointmentResponse = Appointment;

export class CreateAppointment {
   async execute({
      customer,
      startsAt,
      endsAt
   }: createAppointmentRequest): Promise<createAppointmentResponse> {
      const appointment = new Appointment({
         customer,
         startsAt,
         endsAt
      });      

      return appointment;
   }
}