export class CampResponse {
  success: boolean;
  message: string;
  content: any;

  constructor(success: boolean, message: string, content: any) {
    this.success = success;
    this.message = message;
    this.content = content;
  }
}
