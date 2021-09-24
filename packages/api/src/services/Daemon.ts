import type Connection from '../Connection';
import Service from './Service';
import type { Options } from './Service';
import ServiceName from '../constants/ServiceName';

export default class Daemon extends Service {
  constructor(connection: Connection, options?: Options) {
    super(ServiceName.DAEMON, connection, options);
  }

  registerService(service: string) {
    return this.command('register_service', {
      service,
    });
  }

  startService(service: string, testing?: boolean) {
    return this.command('start_service', {
      service,
      testing: testing ? true : undefined,
    });
  }

  stopService(service: string) {
    return this.command('stop_service', {
      service,
    });
  }

  async isRunning(service: string): Promise<boolean> {
    const { isRunning } = await this.command('is_running', {
      service,
    });

    return isRunning;
  }

  exit() {
    return this.command('exit');
  }
}
