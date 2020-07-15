import Appointment from '../models/Appointment';
import { EntityRepository, Repository } from 'typeorm'

/**
 * Repositório para agendamentos
 *
 * @class AppointmentsRepository
 */
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {

	/**
	 * Função para buscar pela data;
	 *
	 * @param {Date} date
	 * @returns {Promise (Appointment | null)}
	 * @memberof AppointmentsRepository
	 */
	public async findByDate(date: Date): Promise<Appointment | null> {

		const findAppointment = await this.findOne({
			where: { date },
		});

		return findAppointment || null;
	}
}

export default AppointmentsRepository;
