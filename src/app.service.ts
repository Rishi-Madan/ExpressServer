import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<html><head><title>Hello</title><script language="javascript">document.write("js also included")</script></head><body bgcolor="beige"><form><input type="submit" value="Submit"></form></body></html>';
  }
}
