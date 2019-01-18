export class LoginModel {
    private username:string;
    private password:string;
  
    public constructor(username:string , password:string){
      this.username = username;
      this.password = password;
    }

    public getUsername() {
      return this.username;
    }
}