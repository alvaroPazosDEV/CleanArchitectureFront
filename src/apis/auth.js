const authAPI = {

  authenticate(username, password) {
    if(username.length > 4 && password.length > 4) return true
    return false 
  }

}

export default authAPI