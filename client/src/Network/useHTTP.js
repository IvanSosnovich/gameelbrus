class UseHttp {
  constructor() {
    this.urlLogin = 'api/login';
    this.urlRegister = 'api/register';
    this.urlQuestion = '/api/question';
  }

  async logIn(email, password) {
    const result = await fetch(this.urlLogin, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (result.status === '200') {
      const data = result.json();
      console.log(data);
    } else {
      console.log('error login');
    }
  }

  async register(email, password, name) {
    const result = await fetch(this.urlRegister, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });
    if (result.status === '200') {
      const data = result.json();
      console.log(data);
    } else {
      console.log('error register');
    }
  }
}

export default new UseHttp();
