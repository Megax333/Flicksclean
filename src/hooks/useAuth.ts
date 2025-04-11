// Simply re-export the useAuth hook from AuthContext
export { useAuth } from '../context/AuthContext';

// Default export for backward compatibility
import { useAuth } from '../context/AuthContext';
export default useAuth;

