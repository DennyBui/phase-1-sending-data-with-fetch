// Add your code here
function submitData(name, email) {
    const formData = { name, email };
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
    
    return fetch('http://localhost:3000/users', configObj)
      .then(res => res.json())
      .then(data => {
        const newId = data.id;
        document.body.append(newId);
      })
      .catch(error => {
        document.body.append(error.message);
      });
  }