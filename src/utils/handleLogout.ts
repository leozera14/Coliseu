export const handleLogout = () => {
  window.localStorage.clear()

  window.location.href = "/login"
}