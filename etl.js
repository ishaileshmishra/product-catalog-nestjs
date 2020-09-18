const axios = require('axios');

(async () => {
  const { data: {token} } = await axios.post('http://localhost:3000/api/auth/login', {
    username: 'username',
    password: 'password',
  });


//   const { data } = await axios.get('http://localhost:3000/api/auth', { 
//       headers:{autherization: `Bearer ${token}`},})
//   .then(resp=>{
//     console.log(resp.data);
//   }).catch(error=>{
//       console.log(resp.data);
//   });

  console.log(data);
})();
