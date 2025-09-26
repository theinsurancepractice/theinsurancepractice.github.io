import { useLocation, Navigate } from "react-router"

const RemoveTrailingSlash = () => {
  const location = useLocation()
  const pathname = location.pathname

  // Remove all trailing slashes, but keep "/" root
  if (pathname !== "/" && pathname.endsWith("/")) {
    const newPath = pathname.replace(/\/+$/, "") + location.search
    return <Navigate to={newPath} replace />
  }

  return null
}

export default RemoveTrailingSlash