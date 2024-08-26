import { RouterProvider } from 'react-router-dom';

import {Routes} from './Routes/Routes/Routes';
import AuthProvider from './component/providers/AuthProvider';


function App() {
  return (
    <div>
      
         <AuthProvider>
         <RouterProvider router={Routes}>
         </RouterProvider>
         </AuthProvider>
    
    </div>
  );
}

export default App;
